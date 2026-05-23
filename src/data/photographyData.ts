import { Camera, Users, Utensils, Wine, Sparkles, Heart } from "lucide-react";
import wedding1 from "@/assets/portfolio/photography/wedding-1.jpg";
import wedding2 from "@/assets/portfolio/photography/wedding-2.jpg";
import wedding3 from "@/assets/portfolio/photography/wedding-3.jpg";
import wedding4 from "@/assets/portfolio/photography/wedding-4.jpg";
import wedding5 from "@/assets/portfolio/photography/wedding-5.jpg";
import wedding6 from "@/assets/portfolio/photography/wedding-6.jpg";
import wedding7 from "@/assets/portfolio/photography/wedding-7.jpg";
import wedding8 from "@/assets/portfolio/photography/wedding-8.jpg";

export type PhotoCategory = "all" | "wedding" | "family" | "food" | "beverages" | "product";

export interface Photo {
  id: string;
  url: string;
  category: PhotoCategory;
  title: string;
  alt: string;
}

export interface CategoryInfo {
  id: PhotoCategory;
  label: string;
  description: string;
  iconName: string;
}

export const photoCategories: CategoryInfo[] = [
  { id: "all", label: "All Photos", description: "Complete portfolio showcase", iconName: "Camera" },
  { id: "wedding", label: "Wedding", description: "Elegant wedding & bridal photography", iconName: "Heart" },
  { id: "family", label: "Family Portrait", description: "Timeless moments & precious memories", iconName: "Users" },
  { id: "food", label: "Food Photography", description: "Culinary artistry & appetite appeal", iconName: "Utensils" },
  { id: "beverages", label: "Beverages", description: "Refreshing drinks & visual aesthetics", iconName: "Wine" },
  { id: "product", label: "Product & Perfume", description: "Luxury products & fragrance imagery", iconName: "Sparkles" },
];

export const photos: Photo[] = [
  // Wedding (8 images)
  { id: "wed-1", url: wedding1, category: "wedding", title: "Bride with Bouquet", alt: "Bride holding a pink floral bouquet on a beach during golden hour" },
  { id: "wed-2", url: wedding2, category: "wedding", title: "Bridal Elegance", alt: "Elegant bride wearing crystal tiara and white wedding gown in urban setting" },
  { id: "wed-3", url: wedding3, category: "wedding", title: "Bridal Portrait", alt: "Close-up portrait of bride with flowing dark hair and crystal headpiece" },
  { id: "wed-4", url: wedding4, category: "wedding", title: "I Said Yes", alt: "Close-up of bride's hand showing engagement ring with 'I Said Yes' text overlay" },
  { id: "wed-5", url: wedding5, category: "wedding", title: "Bridal Grandeur", alt: "Full-length bridal portrait with flowing veil against modern city architecture" },
  { id: "wed-6", url: wedding6, category: "wedding", title: "Together Forever", alt: "Bride and groom sharing an intimate moment at a beachside venue" },
  { id: "wed-7", url: wedding7, category: "wedding", title: "Beach Bride", alt: "Bride with pink bouquet in white dress on a serene beach setting" },
  { id: "wed-8", url: wedding8, category: "wedding", title: "Couple's Embrace", alt: "Couple in white sharing a tender close moment with floral headpiece" },

  // Family Portrait (8 images)
  { id: "fam-1", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/674347f4985ccf3688aa4759_Fam-08.webp", category: "family", title: "Golden Hour Bonds", alt: "Family portrait captured during warm golden hour lighting" },
  { id: "fam-2", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/674347f499968c4ab8a58a29_Fam-07.webp", category: "family", title: "Generations Together", alt: "Three generations of family sharing laughter together" },
  { id: "fam-3", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/6743479b295215b4f757c234_Fam-02.webp", category: "family", title: "Outdoor Joy", alt: "Natural family interaction in a beautiful outdoor setting" },
  { id: "fam-4", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/6743479b7bc508f5d15f365d_Fam-04.webp", category: "family", title: "Intimate Connections", alt: "Tender moment between family members in portrait session" },
  { id: "fam-5", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/6743479b7a771c9c2070d51d_Fam-01.webp", category: "family", title: "Playful Memories", alt: "Spontaneous joy and genuine smiles in family portrait" },
  { id: "fam-6", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/6743479b5dfd52e5703f9e71_Fam-05.webp", category: "family", title: "Cherished Moments", alt: "Timeless family portrait celebrating unity and love" },
  { id: "fam-7", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/6743479b586241e499988028_Fam-06.webp", category: "family", title: "Love in Focus", alt: "Emotional family portrait with professional lens work" },
  { id: "fam-8", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/6743479bb39a3123f56d1083_Fam-03.webp", category: "family", title: "Forever Together", alt: "Family portrait telling a unique family story" },

  // Food Photography (22 images)
  { id: "food-1", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe00aeeba566605419d70a_D-3.jpg", category: "food", title: "Gourmet Elegance", alt: "Fine dining dish with artistic plating and elegant presentation" },
  { id: "food-2", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe00aef0517f7d1d203945_D-4.jpg", category: "food", title: "Culinary Masterpiece", alt: "Chef's special dish captured in stunning photographic detail" },
  { id: "food-3", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe00ad0e72437309bbbb5b_D-2.jpg", category: "food", title: "Fresh & Vibrant", alt: "Colorful fresh food with vibrant textures and appeal" },
  { id: "food-4", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe00ad0f6a89690a303a1b_D-6.jpg", category: "food", title: "Rustic Charm", alt: "Homestyle cooking presented with professional photography" },
  { id: "food-5", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe00ad6695024f48b41bbf_D-7.jpg", category: "food", title: "Appetizing Art", alt: "Beautifully arranged food ingredients telling a flavor story" },
  { id: "food-6", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe00ad627c6dfc2751d67a_D-1.jpg", category: "food", title: "Modern Cuisine", alt: "Contemporary plated dish with classic taste presentation" },
  { id: "food-7", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fdfd802786c8279fa3323c_Food-I.jpg", category: "food", title: "Savory Delight", alt: "Rich textured savory dish with mouthwatering presentation" },
  { id: "food-8", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fdfd7fc4cb1b6df34f121d_Food-D.jpg", category: "food", title: "Comfort Food", alt: "Warm inviting comfort food dish photographed professionally" },
  { id: "food-9", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fdfd7e42659dacff4ca3ab_Food-B.jpg", category: "food", title: "Breakfast Bliss", alt: "Morning breakfast favorites photographed to perfection" },
  { id: "food-10", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fdfd7e0d26defd049980fc_Food-C.jpg", category: "food", title: "Mediterranean Feast", alt: "Fresh Mediterranean inspired ingredients and coastal cuisine" },
  { id: "food-11", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fdfd7e750a5625717e566a_Food-H.jpg", category: "food", title: "Sweet Indulgence", alt: "Beautiful dessert presentation almost too pretty to eat" },
  { id: "food-12", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fdfd7ef0f9c76243a44a7d_Food-E.jpg", category: "food", title: "Asian Fusion", alt: "Eastern flavors with modern food presentation style" },
  { id: "food-13", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fdfd7e6695024f48b17f9a_Food-F.jpg", category: "food", title: "Farm to Table", alt: "Organic fresh farm ingredients in every frame" },
  { id: "food-14", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fdfd7e0b89753c9fa727f8_Food-G.jpg", category: "food", title: "Grilled Perfection", alt: "Smoky grilled food captured in dramatic lighting" },
  { id: "food-15", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb2e30aabedc757faa6e49_food1.jpg", category: "food", title: "Signature Dish", alt: "Restaurant quality signature dish for menu photography" },
  { id: "food-16", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb2e3099e2996ea79c2f30_food5.jpg", category: "food", title: "Pasta Perfection", alt: "Italian classic pasta dish with irresistible appeal" },
  { id: "food-17", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb2e302d750e22cb0585be_food3.jpg", category: "food", title: "Fresh Salads", alt: "Healthy fresh salad photographed with vibrant colors" },
  { id: "food-18", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb2e30626bfde909f31209_food2.jpg", category: "food", title: "Seafood Sensation", alt: "Ocean's bounty seafood presented with elegance" },
  { id: "food-19", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb2e2f3f602da082308880_food6.jpg", category: "food", title: "Artisan Bread", alt: "Freshly baked artisan bread in stunning close-up detail" },
  { id: "food-20", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb2e2f6dd1ea4339daca96_food9.jpg", category: "food", title: "Spice Journey", alt: "Bold spices and flavors from around the world" },
  { id: "food-21", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb2e2fb72981b518ffe0fd_food8.jpg", category: "food", title: "Dinner Special", alt: "Evening dinner special dish deserving the spotlight" },
  { id: "food-22", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb2e2fdf8bea42d61a19a3_food4.jpg", category: "food", title: "Brunch Goals", alt: "Weekend brunch favorites captured beautifully" },

  // Beverages (9 images)
  { id: "bev-1", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe00adbb94ab0bf75330bb_D-5.jpg", category: "beverages", title: "Tropical Paradise", alt: "Refreshing tropical cocktail photographed on a beach setting" },
  { id: "bev-2", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe00adf0f9c76243a6f0d0_D-8.jpg", category: "beverages", title: "Coffee Culture", alt: "Artisan crafted coffee beverage with latte art" },
  { id: "bev-3", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb3d9d99e2996ea7abb533_Drinks10.jpg", category: "beverages", title: "Mocktail Magic", alt: "Non-alcoholic mocktail drink with full flavor impact" },
  { id: "bev-4", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb3cc198c8556a680e2757_Drinks8.jpg", category: "beverages", title: "Citrus Splash", alt: "Zesty citrus refreshment drink with ice and garnish" },
  { id: "bev-5", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb3cc1a565c50e7ce5cfd1_Drinks6.jpg", category: "beverages", title: "Smoothie Bowl", alt: "Healthy smoothie bowl with colorful toppings" },
  { id: "bev-6", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb3cc1562d47b239499e1f_Drinks9.jpg", category: "beverages", title: "Ice Cold Refreshment", alt: "Ice cold refreshing beverage beating the heat" },
  { id: "bev-7", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb3cc13f763f87ef67d904_Drinks3.jpg", category: "beverages", title: "Berry Bliss", alt: "Fresh berry blended drink with creamy perfection" },
  { id: "bev-8", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb3cc12d750e22cb1366bc_Drinks4.jpg", category: "beverages", title: "Signature Shake", alt: "Creamy milkshake with photogenic topping presentation" },
  { id: "bev-9", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fb3cc1897d4ae1160c5fbe_Drinks2.jpg", category: "beverages", title: "Green Vitality", alt: "Health-focused green vitality drink with fresh ingredients" },

  // Product & Perfume (7 images)
  { id: "prod-1", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe062e522bb103d1f5bed3_Perfume-2.jpg", category: "product", title: "Midnight Essence", alt: "Dark elegant perfume bottle with mysterious allure styling" },
  { id: "prod-2", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe062e61e9120bf5de5eeb_Perfume-1.jpg", category: "product", title: "Golden Luxury", alt: "Premium golden perfume fragrance in opulent presentation" },
  { id: "prod-3", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe062d6f3d12aceda644fe_Perfume-7.jpg", category: "product", title: "Crystal Clear", alt: "Transparent crystal perfume bottle with sophisticated styling" },
  { id: "prod-4", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe062d214f492c4d8303da_Perfume-5.jpg", category: "product", title: "Rose Elegance", alt: "Floral rose scented perfume captured in stunning imagery" },
  { id: "prod-5", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe062d4e745a698582e8b4_Perfume-4.jpg", category: "product", title: "Noir Collection", alt: "Bold noir perfume collection for the modern individual" },
  { id: "prod-6", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe062d90b46b437069c363_Perfume-8.jpg", category: "product", title: "Artisan Bottle", alt: "Handcrafted artisan perfume bottle with unique design" },
  { id: "prod-7", url: "https://cdn.prod.website-files.com/65c8be800b7b07d9ce6ff6e1/65fe062d61e9120bf5de5e8a_Perfume-3.jpg", category: "product", title: "Premium Scent", alt: "Luxury fragrance product with editorial styling" },
];
