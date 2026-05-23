import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://esm.sh/zod@3.22.4";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const allowedServices = [
  "Brand Identity Design",
  "Graphic Design & Marketing",
  "UI/UX & Web Design",
  "Motion Graphics",
  "Video Production",
  "Social Media Design",
  "Photography",
  "Web UI/UX Design",
  "AI Marketing Solutions",
  "Videography & Photography",
  "Logo Design",
  "Complete Brand Package",
  "Other",
];

const leadFormSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(1).max(20),
  service: z.string().min(1).refine(s => allowedServices.includes(s), { message: "Invalid service selection" }),
  message: z.string().trim().max(1000).optional(),
});

const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

// Rate limiting
const rateLimits = new Map<string, { count: number; resetTime: number }>();

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const data = rateLimits.get(ip);
  if (!data || now > data.resetTime) {
    rateLimits.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour window
    return true;
  }
  if (data.count >= 5) {
    return false;
  }
  data.count++;
  return true;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limit
    const clientIp = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";
    if (!checkRateLimit(clientIp)) {
      return new Response(
        JSON.stringify({ error: "Too many submissions. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate input
    const rawBody = await req.json();
    const validation = leadFormSchema.safeParse(rawBody);
    if (!validation.success) {
      return new Response(
        JSON.stringify({ error: "Invalid input. Please check your form data." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, email, phone, service, message } = validation.data;

    // Escape all user inputs for HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeService = escapeHtml(service);
    const safeMessage = message ? escapeHtml(message) : "";

    // Clean phone for URL (digits only)
    const phoneDigits = phone.replace(/[^0-9]/g, "");

    console.log("Received lead form submission");

    // Send notification email to Ronnie
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Alcon Advertising <onboarding@resend.dev>",
        to: ["ronniebalonon1996@gmail.com"],
        subject: `New Project Inquiry from ${safeName}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #F97316, #EA580C); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
              .value { font-size: 16px; margin-top: 5px; }
              .service-badge { background: #F97316; color: white; padding: 5px 12px; border-radius: 20px; display: inline-block; }
              .message-box { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #F97316; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🎉 New Project Inquiry!</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">You have a new lead from your portfolio website</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Client Name</div>
                  <div class="value">${safeName}</div>
                </div>
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone Number</div>
                  <div class="value"><a href="tel:${safePhone}">${safePhone}</a></div>
                </div>
                <div class="field">
                  <div class="label">Service Interested In</div>
                  <div class="value"><span class="service-badge">${safeService}</span></div>
                </div>
                ${safeMessage ? `
                <div class="field">
                  <div class="label">Additional Details</div>
                  <div class="message-box">${safeMessage}</div>
                </div>
                ` : ''}
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                <p style="color: #666; font-size: 14px;">
                  📞 <strong>Quick Actions:</strong><br>
                  <a href="https://wa.me/${phoneDigits}">Reply via WhatsApp</a> | 
                  <a href="mailto:${safeEmail}">Send Email</a>
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const error = await notificationRes.text();
      console.error("Failed to send notification email:", error);
      throw new Error("Failed to send notification email");
    }

    console.log("Notification email sent successfully");

    // Send confirmation email to the client
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Alcon Advertising <onboarding@resend.dev>",
        to: [email],
        subject: "Thank You for Your Inquiry - Alcon Advertising",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #F97316, #EA580C); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
              .highlight { color: #F97316; font-weight: bold; }
              .cta-button { background: #F97316; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 15px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">Thank You, ${safeName}!</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Your inquiry has been received</p>
              </div>
              <div class="content">
                <p>Hi ${safeName},</p>
                <p>Thank you for reaching out! I'm excited to learn more about your <span class="highlight">${safeService}</span> project.</p>
                <p>I've received your inquiry and will get back to you within <strong>12 hours</strong> with more information about how we can work together to bring your vision to life.</p>
                <p>In the meantime, feel free to:</p>
                <ul>
                  <li>Browse our <a href="https://ronniebalonon.com/portfolio" style="color: #7B2FBE;">portfolio</a> for inspiration</li>
                  <li>Check out our <a href="https://ronniebalonon.com/client-projects" style="color: #7B2FBE;">client projects</a></li>
                </ul>
                <p>Need to reach me urgently? Feel free to WhatsApp me directly:</p>
                <a href="https://wa.me/971543763091" class="cta-button">WhatsApp Me</a>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                <p style="color: #666; font-size: 14px;">
                  Best regards,<br>
                  <strong>Alcon Advertising</strong><br>
                  Creative Advertising Agency | Dubai, UAE<br>
                  <a href="mailto:ronniebalonon1996@gmail.com" style="color: #7B2FBE;">ronniebalonon1996@gmail.com</a>
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      const error = await confirmationRes.text();
      console.error("Failed to send confirmation email:", error);
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-lead-email function:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
