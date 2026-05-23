const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://eqfkzlqweiglzcxgfzrq.supabase.co";
const BUCKET = "site-assets";

/**
 * Get a public URL for an asset stored in Supabase Storage.
 * Supports Supabase Image Transformation for on-the-fly resizing.
 */
export function storageUrl(path: string, options?: { width?: number; height?: number; quality?: number }) {
  const base = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${path}`;
  
  if (options?.width || options?.height || options?.quality) {
    const params = new URLSearchParams();
    if (options.width) params.set("width", String(options.width));
    if (options.height) params.set("height", String(options.height));
    if (options.quality) params.set("quality", String(options.quality));
    return `${SUPABASE_URL}/storage/v1/render/image/public/${BUCKET}/${path}?${params.toString()}`;
  }
  
  return base;
}

// Pre-built URLs for commonly used assets
export const HERO_BG = storageUrl("hero/hero-bg-alcon.png");

export const MOCKUP_URLS = Array.from({ length: 20 }, (_, i) => 
  storageUrl(`mockups/brand-mockup-${String(i + 1).padStart(2, "0")}.jpg`)
);
