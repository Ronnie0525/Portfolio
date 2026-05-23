import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized - Please sign in to generate videos' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } }
    );

    const token = authHeader.replace('Bearer ', '');
    const { data: claimsData, error: authError } = await supabase.auth.getClaims(token);
    if (authError || !claimsData?.claims) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized - Invalid session' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const url = new URL(req.url);
    const action = url.searchParams.get('action');

    // POLL action: check prediction status
    if (action === 'poll') {
      const { predictionId } = await req.json();
      if (!predictionId || typeof predictionId !== 'string' || !/^[a-zA-Z0-9_-]{8,64}$/.test(predictionId)) {
        return new Response(
          JSON.stringify({ error: 'Invalid or missing prediction ID' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const REPLICATE_API_TOKEN = Deno.env.get('REPLICATE_API_TOKEN');
      if (!REPLICATE_API_TOKEN) {
        return new Response(
          JSON.stringify({ error: 'API not configured' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const response = await fetch(`https://api.replicate.com/v1/predictions/${predictionId}`, {
        headers: { 'Authorization': `Bearer ${REPLICATE_API_TOKEN}` },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Poll error:', errorText);
        return new Response(
          JSON.stringify({ error: 'Failed to check status' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const prediction = await response.json();

      if (prediction.status === 'succeeded') {
        const output = prediction.output;
        const videoUrl = Array.isArray(output) ? output[0] : output;
        return new Response(
          JSON.stringify({ status: 'succeeded', videoUrl }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (prediction.status === 'failed' || prediction.status === 'canceled') {
        return new Response(
          JSON.stringify({ status: 'failed', error: prediction.error || 'Video generation failed' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ status: prediction.status }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // START action (default): kick off generation and return predictionId
    const { prompt, style, sourceImage } = await req.json();

    if (!prompt && !sourceImage) {
      return new Response(
        JSON.stringify({ error: 'Prompt or source image is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (prompt && (typeof prompt !== 'string' || prompt.length > 1000)) {
      return new Response(
        JSON.stringify({ error: 'Invalid prompt' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const REPLICATE_API_TOKEN = Deno.env.get('REPLICATE_API_TOKEN');
    if (!REPLICATE_API_TOKEN) {
      return new Response(
        JSON.stringify({ error: 'Video generation API not configured.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const stylePrompts: Record<string, string> = {
      'realistic': 'photorealistic, ultra high definition, 4K cinematic quality, natural lighting, physically accurate motion, detailed textures, depth of field, professional videography',
      'cinematic': 'cinematic masterpiece, anamorphic lens, dramatic lighting, shallow depth of field, film grain, color graded, professional Hollywood production, epic composition, golden hour',
      'animation': '3D animation, Pixar quality, vibrant saturated colors, smooth fluid motion, artistic stylized rendering, high production value, detailed character animation',
      'slow-motion': 'ultra slow motion, 240fps, crystal clear detail, dramatic timing, fluid smooth motion, time dilation, every detail visible, professional sports camera quality',
    };

    const styleModifier = stylePrompts[style] || stylePrompts['realistic'];
    const enhancedPrompt = prompt
      ? `${prompt}. Style: ${styleModifier}`
      : `animate this image with smooth natural motion. Style: ${styleModifier}`;

    console.log('Starting video generation:', enhancedPrompt);

    let modelUrl: string;
    let inputBody: Record<string, unknown>;

    if (sourceImage) {
      modelUrl = 'https://api.replicate.com/v1/models/wan-ai/wan2.1-i2v-480p/predictions';
      inputBody = {
        input: {
          image: sourceImage,
          prompt: enhancedPrompt,
          max_area: "832x480",
          num_frames: 81,
          guidance_scale: 5,
          num_inference_steps: 30,
        }
      };
    } else {
      modelUrl = 'https://api.replicate.com/v1/models/minimax/video-01/predictions';
      inputBody = {
        input: {
          prompt: enhancedPrompt,
          prompt_optimizer: true,
        }
      };
    }

    // Do NOT use 'Prefer: wait' — return immediately
    const response = await fetch(modelUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Replicate API error:', response.status, errorText);

      // Fallback for text-to-video
      if (!sourceImage) {
        console.log('Falling back to Luma Ray...');
        const fallback = await fetch('https://api.replicate.com/v1/models/luma/ray/predictions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${REPLICATE_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input: { prompt: enhancedPrompt } }),
        });

        if (!fallback.ok) {
          const fbErr = await fallback.text();
          console.error('Fallback error:', fbErr);
          throw new Error('Failed to start video generation');
        }

        const fbPrediction = await fallback.json();
        console.log('Fallback prediction started:', fbPrediction.id);
        return new Response(
          JSON.stringify({ predictionId: fbPrediction.id, status: fbPrediction.status }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      throw new Error('Failed to start video generation');
    }

    const prediction = await response.json();
    console.log('Prediction started:', prediction.id, 'status:', prediction.status);

    // If it already succeeded (unlikely without Prefer:wait), return video directly
    if (prediction.status === 'succeeded') {
      const output = prediction.output;
      const videoUrl = Array.isArray(output) ? output[0] : output;
      return new Response(
        JSON.stringify({ predictionId: prediction.id, status: 'succeeded', videoUrl }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Return prediction ID for client-side polling
    return new Response(
      JSON.stringify({ predictionId: prediction.id, status: prediction.status }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to generate video' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
