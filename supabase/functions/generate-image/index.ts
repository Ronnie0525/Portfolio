import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const ratioMap: Record<string, string> = {
  '1:1': 'square format (1:1 aspect ratio)',
  '4:5': 'portrait format (4:5 aspect ratio, slightly taller than wide)',
  '3:4': 'portrait photo format (3:4 aspect ratio)',
  '2:3': 'tall portrait format (2:3 aspect ratio)',
  '9:16': 'vertical story format (9:16 aspect ratio, phone screen tall)',
  '16:9': 'wide landscape cinematic format (16:9 aspect ratio, widescreen)',
};

const stylePrompts: Record<string, string> = {
  'hyper-realistic': `Captured with a Canon EOS R5, 85mm f/1.4 lens, RAW format. Photorealistic portrait with natural subsurface scattering on skin, visible pores, fine facial hair, natural skin texture imperfections, realistic eye reflections with catchlights, individual hair strand detail. Natural color grading, no AI artifacts, no plastic skin, no over-smoothing. Depth of field with bokeh background. Professional fashion photography lighting setup with key light, fill light, and rim light. Shot in golden hour or studio environment. 8K resolution, uncompressed quality. The image must be indistinguishable from a real DSLR photograph — zero AI-generated appearance.`,
  'cartoon': 'cartoon style portrait, vibrant colors, bold outlines, playful character design, Pixar-style 3D animation quality, expressive features, detailed textures, subsurface scattering, ambient occlusion',
  'cinematic': 'cinematic portrait, dramatic chiaroscuro lighting, anamorphic lens flare, shallow depth of field, film grain texture, moody atmosphere, Hollywood blockbuster production value, color graded with teal and orange tones, ARRI Alexa camera look',
  'paint': 'classical oil painting, masterpiece quality, rich impasto brushstrokes, Renaissance chiaroscuro, gallery-worthy composition, dramatic lighting inspired by Rembrandt and Caravaggio, museum quality artwork, visible canvas texture',
};

// Variation-specific creative directions to ensure unique results
const variationDirections = [
  'Use warm golden hour lighting with a slight bokeh background. Emphasize warmth and intimacy.',
  'Use cool blue-toned dramatic side lighting. Emphasize contrast and mystery. Different composition angle.',
  'Use soft diffused natural window light. Emphasize gentleness and serenity. Close-up framing.',
  'Use vibrant neon-accented rim lighting against a dark background. Emphasize boldness and edge. Wide shot.',
];

async function authenticateUser(req: Request) {
  const authHeader = req.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return { error: 'Unauthorized - Please sign in to generate images', status: 401 };
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: authHeader } } }
  );

  const token = authHeader.replace('Bearer ', '');
  const { data: claimsData, error: authError } = await supabase.auth.getClaims(token);
  if (authError || !claimsData?.claims) {
    return { error: 'Unauthorized - Invalid session', status: 401 };
  }

  return { userId: claimsData.claims.sub, supabase };
}

async function generateSingleImage(apiKey: string, prompt: string, sourceImage?: string | null): Promise<{ imageUrl?: string; content?: string; blocked?: boolean }> {
  const messages = sourceImage
    ? [{ role: 'user', content: [{ type: 'text', text: prompt }, { type: 'image_url', image_url: { url: sourceImage } }] }]
    : [{ role: 'user', content: prompt }];

  const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'google/gemini-3.1-flash-image-preview',
      messages,
      modalities: ['image', 'text'],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('API error:', response.status, errorText);
    if (response.status === 429) throw new Error('Rate limit exceeded. Please try again in a moment.');
    if (response.status === 402) throw new Error('Usage limit reached. Please add credits to continue.');
    throw new Error('Failed to generate image');
  }

  const data = await response.json();
  const finishReason = data.choices?.[0]?.native_finish_reason || data.choices?.[0]?.finish_reason;
  if (finishReason === 'IMAGE_PROHIBITED_CONTENT' || finishReason === 'SAFETY') {
    return { blocked: true };
  }

  const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
  const content = data.choices?.[0]?.message?.content || '';
  return { imageUrl, content };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const auth = await authenticateUser(req);
    if ('error' in auth) {
      return new Response(JSON.stringify({ error: auth.error }), {
        status: auth.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { userId } = auth;
    console.log('Authenticated user for image generation:', userId);

    const { prompt, style, sourceImage, enhance, aspectRatio, variations = 1 } = await req.json();

    if (!prompt && !sourceImage) {
      return new Response(JSON.stringify({ error: 'Prompt or source image is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    if (prompt && (typeof prompt !== 'string' || prompt.length > 1000)) {
      return new Response(JSON.stringify({ error: 'Prompt must be a string under 1000 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const numVariations = Math.min(Math.max(1, Number(variations) || 1), 4);
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const ratioInstruction = ratioMap[aspectRatio] || ratioMap['1:1'];
    const styleDescription = stylePrompts[style] || stylePrompts['hyper-realistic'];

    // Enhancement request
    if (enhance && sourceImage) {
      console.log('Enhancing image...');
      const result = await generateSingleImage(LOVABLE_API_KEY,
        'Enhance this image to maximum quality. Improve skin texture details, pore visibility, hair strand sharpness, eye reflection clarity. Maintain natural imperfections — do not over-smooth or make it look AI-generated. Upscale to the highest possible resolution while preserving the original composition and lighting.',
        sourceImage
      );
      if (result.blocked) {
        return new Response(JSON.stringify({ error: 'Content was blocked by safety filters.' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }
      if (!result.imageUrl) throw new Error('No enhanced image generated');
      return new Response(JSON.stringify({ success: true, images: [{ variation: 1, imageUrl: result.imageUrl, description: 'Enhanced image' }], enhanced: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Image transformation with source image
    if (sourceImage) {
      console.log('Transforming uploaded image with prompt:', prompt);
      const transformPrompt = `Transform this image with the following instructions: ${prompt}. Apply this style: ${styleDescription}. Output in ${ratioInstruction}. Create a high-quality artistic transformation.`;
      const result = await generateSingleImage(LOVABLE_API_KEY, transformPrompt, sourceImage);
      if (result.blocked) {
        return new Response(JSON.stringify({ error: 'Content was blocked by safety filters. Please try a different image or prompt.' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }
      if (!result.imageUrl) throw new Error('No image generated. Try a different prompt.');
      return new Response(JSON.stringify({ success: true, images: [{ variation: 1, imageUrl: result.imageUrl, description: result.content || 'Transformed image' }] }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Text-to-image generation with multiple variations
    console.log(`Generating ${numVariations} variation(s) with prompt:`, prompt);
    const images = [];

    for (let i = 0; i < numVariations; i++) {
      const direction = variationDirections[i] || '';
      const enhancedPrompt = `${prompt}. ${styleDescription}. Generate the image in ${ratioInstruction}. VARIATION DIRECTION: ${direction}. CRITICAL: If this is a human portrait, ensure the face looks 100% real — natural skin texture with visible pores, realistic eye wetness and reflections, asymmetric facial features as in real life, no smoothing, no plastic look, no uncanny valley effect.`;

      try {
        const result = await generateSingleImage(LOVABLE_API_KEY, enhancedPrompt);
        if (result.blocked) {
          console.warn(`Variation ${i + 1} blocked by safety filter`);
          continue;
        }
        if (result.imageUrl) {
          images.push({ variation: i + 1, imageUrl: result.imageUrl, description: result.content || `Variation ${i + 1}` });
        }
      } catch (err) {
        console.error(`Error generating variation ${i + 1}:`, err);
        // Continue with other variations
      }
    }

    if (images.length === 0) {
      throw new Error('No images generated. Please try a different prompt.');
    }

    console.log(`Successfully generated ${images.length} image(s)`);
    return new Response(JSON.stringify({ success: true, images }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

  } catch (error) {
    console.error('Error generating images:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to generate images' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
