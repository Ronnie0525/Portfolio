import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Ronnie's AI Assistant on his portfolio website. You help visitors learn about Ronnie Balonon Jr., a graphic designer and AI creative based in Dubai, UAE.

ABOUT RONNIE:
- Dubai-based designer specializing in graphic design and AI-powered creative work
- Expert across graphic design, UI/UX web design, motion design, and video production
- Strong focus on AI-driven digital marketing and creative workflows

EXPERTISE AREAS:
1. Brand Identity Design - Cohesive visual identities, logos, brand guidelines
2. Web UI/UX Design - SEO-optimized landing pages, responsive layouts
3. Motion Graphics - Dynamic 2D & 3D animations for impactful storytelling
4. AI Marketing Solutions - Data-driven campaigns powered by artificial intelligence
5. Photography - Professional product, event, and lifestyle shoots
6. Videography - Cinematic video production and post-editing
7. Social Media Design - Engaging content for all platforms

CONTACT INFORMATION:
- Email: ronniebalonon1996@gmail.com
- Location: Dubai, UAE
- Instagram: https://www.instagram.com/ronnieeee25/

Your role:
- Be friendly, professional, and helpful
- Answer questions about Ronnie's expertise, experience, and portfolio
- This is a portfolio website - focus on showcasing Ronnie's work and skills
- Encourage visitors to explore the portfolio or contact Ronnie via email
- Keep responses concise but informative
- If unsure about something specific, direct them to contact Ronnie directly`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// Input validation
const validateMessages = (messages: unknown): { valid: boolean; error?: string } => {
  if (!Array.isArray(messages)) {
    return { valid: false, error: "Messages must be an array" };
  }
  if (messages.length === 0) {
    return { valid: false, error: "Messages cannot be empty" };
  }
  if (messages.length > 50) {
    return { valid: false, error: "Too many messages. Please start a new conversation." };
  }
  for (const msg of messages) {
    if (!msg || typeof msg !== "object") {
      return { valid: false, error: "Invalid message format" };
    }
    if (msg.role !== "user" && msg.role !== "assistant") {
      return { valid: false, error: "Invalid message role" };
    }
    if (typeof msg.content !== "string") {
      return { valid: false, error: "Message content must be a string" };
    }
    if (msg.content.length > 2000) {
      return { valid: false, error: "Message is too long. Please keep messages under 2000 characters." };
    }
  }
  return { valid: true };
};

// In-memory rate limiting per IP (per-minute, hourly, and daily caps)
const rateLimits = new Map<string, { count: number; resetTime: number }>();
const hourlyLimits = new Map<string, { count: number; resetTime: number }>();
const dailyLimits = new Map<string, { count: number; resetTime: number }>();
// Global rate limit across all IPs to cap total API credit usage
let globalMinuteCounter = { count: 0, resetTime: Date.now() + 60000 };

const checkRateLimit = (identifier: string): { allowed: boolean; reason?: string } => {
  const now = Date.now();

  // Global limit: 30 requests/minute across all users
  if (now > globalMinuteCounter.resetTime) {
    globalMinuteCounter = { count: 1, resetTime: now + 60000 };
  } else if (globalMinuteCounter.count >= 30) {
    return { allowed: false, reason: "Service is busy. Please try again in a moment." };
  } else {
    globalMinuteCounter.count++;
  }

  // Per-minute limit: 5 requests per IP (tightened from 10)
  const minuteData = rateLimits.get(identifier);
  if (!minuteData || now > minuteData.resetTime) {
    rateLimits.set(identifier, { count: 1, resetTime: now + 60000 });
  } else if (minuteData.count >= 5) {
    return { allowed: false, reason: "Too many requests. Please wait a moment and try again." };
  } else {
    minuteData.count++;
  }

  // Hourly limit: 20 requests per IP
  const hourData = hourlyLimits.get(identifier);
  if (!hourData || now > hourData.resetTime) {
    hourlyLimits.set(identifier, { count: 1, resetTime: now + 3600000 });
  } else if (hourData.count >= 20) {
    return { allowed: false, reason: "Hourly limit reached. Please try again later." };
  } else {
    hourData.count++;
  }

  // Daily limit: 50 requests per IP (tightened from 100)
  const dayData = dailyLimits.get(identifier);
  if (!dayData || now > dayData.resetTime) {
    dailyLimits.set(identifier, { count: 1, resetTime: now + 86400000 });
  } else if (dayData.count >= 50) {
    return { allowed: false, reason: "Daily limit reached. Please try again tomorrow." };
  } else {
    dayData.count++;
  }

  return { allowed: true };
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limit by IP or fallback identifier
    const clientIp = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";
    const rateCheck = checkRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return new Response(
        JSON.stringify({ error: rateCheck.reason }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    const { messages } = body as { messages: unknown };

    // Validate input
    const validation = validateMessages(messages);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const validMessages = messages as ChatMessage[];
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received chat request with", validMessages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...validMessages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please wait a moment and try again." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Failed to get AI response" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
