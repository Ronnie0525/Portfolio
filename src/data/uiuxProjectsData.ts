import { Shield, ShoppingBag, ShoppingCart, Coffee, Flower2, Smartphone, TrendingUp, Star, Zap } from "lucide-react";

export interface UIUXProject {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  badgeTextColor: string;
  accentFrom: string;
  accentTo: string;
  accentGlow: string;
  icon: any;
  challenge: string;
  solution: string;
  testimonial: { quote: string; author: string };
  metrics: { label: string; value: string; icon: any }[];
  designSystem: {
    colors: { name: string; hex: string }[];
    fonts: string[];
  };
  duration: string;
  tools: string;
  year: string;
}

export const uiuxProjects: UIUXProject[] = [
  {
    id: "cryptovault",
    name: "CryptoVault",
    tagline: "Crypto wallet & trading — simplifying DeFi for everyday users",
    badge: "Fintech / Web3",
    badgeColor: "rgba(245,158,11,0.15)",
    badgeTextColor: "#FBBF24",
    accentFrom: "#F7931A",
    accentTo: "#8B5CF6",
    accentGlow: "rgba(245,158,11,0.15)",
    icon: Shield,
    challenge: "73% of first-time crypto users abandon within 48 hours — complex charts, jargon, intimidating UI.",
    solution: "Wallet-first with progressive disclosure — beginner mode + pro mode. Trust via security badges and contextual education.",
    testimonial: {
      quote: "Activation jumped 65% in Q1, support tickets halved.",
      author: "Marcus Chen, Head of Product"
    },
    metrics: [
      { label: "User Activation", value: "+65%", icon: TrendingUp },
      { label: "App Rating", value: "4.7★", icon: Star },
      { label: "Faster Onboarding", value: "38%", icon: Zap }
    ],
    designSystem: {
      colors: [
        { name: "Bitcoin Orange", hex: "#F7931A" },
        { name: "Ethereum Blue", hex: "#627EEA" },
        { name: "Primary Violet", hex: "#8B5CF6" },
        { name: "Background", hex: "#0D1117" },
        { name: "Text", hex: "#FAFAFA" }
      ],
      fonts: ["Space Grotesk", "DM Sans"]
    },
    duration: "8 Weeks",
    tools: "Figma, Protopie",
    year: "2024"
  },
  {
    id: "threads",
    name: "THREADS",
    tagline: "Premium fashion e-commerce — curated collections, seamless checkout",
    badge: "Fashion",
    badgeColor: "rgba(244,63,94,0.15)",
    badgeTextColor: "#FB7185",
    accentFrom: "#C9A87C",
    accentTo: "#1A1A2E",
    accentGlow: "rgba(244,63,94,0.15)",
    icon: ShoppingBag,
    challenge: "70% cart abandonment — poor visualization, unreliable sizing, generic checkout.",
    solution: "Editorial shopping — AI size guide, wishlist, 2-step premium checkout.",
    testimonial: {
      quote: "Conversion jumped 42%.",
      author: "Sophia Laurent, CEO"
    },
    metrics: [
      { label: "Conversion", value: "+42%", icon: TrendingUp },
      { label: "Less Abandonment", value: "-67%", icon: Zap },
      { label: "Satisfaction", value: "4.9★", icon: Star }
    ],
    designSystem: {
      colors: [
        { name: "Primary Text", hex: "#1A1A1A" },
        { name: "Background", hex: "#FAF9F6" },
        { name: "Gold", hex: "#C9A87C" },
        { name: "Border", hex: "#E8E4DF" },
        { name: "Sale Red", hex: "#D4382C" }
      ],
      fonts: ["Playfair Display", "DM Sans"]
    },
    duration: "8 Weeks",
    tools: "Figma, Adobe XD",
    year: "2024"
  },
  {
    id: "cartly",
    name: "Cartly",
    tagline: "Multi-vendor marketplace — smart search, one-click checkout",
    badge: "Marketplace",
    badgeColor: "rgba(249,115,22,0.15)",
    badgeTextColor: "#FB923C",
    accentFrom: "#FF9900",
    accentTo: "#232F3E",
    accentGlow: "rgba(249,115,22,0.15)",
    icon: ShoppingCart,
    challenge: "Inconsistent listings, decision fatigue, no comparison tool.",
    solution: "Unified experience — smart categories, AI recs, trust scores, comparison overlay, single cart.",
    testimonial: {
      quote: "Bounce -38%, AOV +27%.",
      author: "David Park, VP Product"
    },
    metrics: [
      { label: "Bounce Rate", value: "-38%", icon: TrendingUp },
      { label: "Avg Order Value", value: "+27%", icon: Zap },
      { label: "Products", value: "12M+", icon: Star }
    ],
    designSystem: {
      colors: [
        { name: "Primary Orange", hex: "#FF9900" },
        { name: "Dark Navy", hex: "#232F3E" },
        { name: "Background", hex: "#FFFFFF" },
        { name: "Header", hex: "#131921" },
        { name: "Teal", hex: "#007185" }
      ],
      fonts: ["Inter", "DM Sans"]
    },
    duration: "12 Weeks",
    tools: "Figma, Maze, Hotjar",
    year: "2024"
  },
  {
    id: "brewhaus",
    name: "BrewHaus",
    tagline: "Artisan coffee ordering — bean to delivery",
    badge: "Food & Bev",
    badgeColor: "rgba(180,83,9,0.15)",
    badgeTextColor: "#D97706",
    accentFrom: "#D4A574",
    accentTo: "#6F4E37",
    accentGlow: "rgba(180,83,9,0.15)",
    icon: Coffee,
    challenge: "Transactional ordering, no craft connection, no loyalty.",
    solution: "Warm tactile experience — bean origins, visual drink builder, barista tracking, exploration rewards.",
    testimonial: {
      quote: "3x daily users in 2 months.",
      author: "James Thornton, Founder"
    },
    metrics: [
      { label: "Daily Active Users", value: "3x", icon: TrendingUp },
      { label: "Loyalty Signup", value: "58%", icon: Star },
      { label: "App Rating", value: "4.8★", icon: Zap }
    ],
    designSystem: {
      colors: [
        { name: "Coffee", hex: "#6F4E37" },
        { name: "Caramel", hex: "#D4A574" },
        { name: "Cream", hex: "#F5E6D3" },
        { name: "Dark BG", hex: "#1C1210" },
        { name: "Gold", hex: "#E8B86D" }
      ],
      fonts: ["Space Grotesk", "DM Sans"]
    },
    duration: "8 Weeks",
    tools: "Figma, Protopie, Lottie",
    year: "2024"
  },
  {
    id: "petal-stem",
    name: "Petal & Stem",
    tagline: "Floral e-commerce — occasion-based, same-day delivery",
    badge: "Lifestyle",
    badgeColor: "rgba(236,72,153,0.15)",
    badgeTextColor: "#F472B6",
    accentFrom: "#E91E63",
    accentTo: "#880E4F",
    accentGlow: "rgba(236,72,153,0.15)",
    icon: Flower2,
    challenge: "Commodity shopping, no emotion, no confidence in arrangement.",
    solution: "Occasion-first — select emotion, arrangement finds you. Customization, delivery tracking + photo confirmation, handwriting message.",
    testimonial: {
      quote: "4.9 stars — people come with emotions, not SKUs.",
      author: "Elena Vasquez, Creative Director"
    },
    metrics: [
      { label: "Satisfaction", value: "4.9★", icon: Star },
      { label: "Repeat Purchases", value: "+55%", icon: TrendingUp },
      { label: "On-Time Delivery", value: "92%", icon: Zap }
    ],
    designSystem: {
      colors: [
        { name: "Rose", hex: "#E91E63" },
        { name: "Blush", hex: "#FCE4EC" },
        { name: "Burgundy", hex: "#880E4F" },
        { name: "Cream", hex: "#FFF5F5" },
        { name: "Green", hex: "#4CAF50" }
      ],
      fonts: ["Playfair Display", "DM Sans"]
    },
    duration: "9 Weeks",
    tools: "Figma, Adobe Illustrator",
    year: "2024"
  },
  {
    id: "mobilix",
    name: "Mobilix",
    tagline: "Phone retail — compare, review, buy smarter",
    badge: "Tech",
    badgeColor: "rgba(6,182,212,0.15)",
    badgeTextColor: "#22D3EE",
    accentFrom: "#00D4FF",
    accentTo: "#0A1628",
    accentGlow: "rgba(6,182,212,0.15)",
    icon: Smartphone,
    challenge: "Incomprehensible specs, multi-tab comparison, unreliable reviews.",
    solution: "Comparison-first — plain-language specs, verified reviews, recommendation quiz.",
    testimonial: {
      quote: "Returns -31%, conversion +44%.",
      author: "Lisa Yang, CTO"
    },
    metrics: [
      { label: "Return Rate", value: "-31%", icon: TrendingUp },
      { label: "Conversion", value: "+44%", icon: Zap },
      { label: "Monthly Visitors", value: "2.1M", icon: Star }
    ],
    designSystem: {
      colors: [
        { name: "Cyan", hex: "#00D4FF" },
        { name: "Dark BG", hex: "#0A1628" },
        { name: "Card", hex: "#1E293B" },
        { name: "Text", hex: "#FFFFFF" },
        { name: "Green", hex: "#10B981" }
      ],
      fonts: ["Space Grotesk", "DM Sans"]
    },
    duration: "10 Weeks",
    tools: "Figma, Maze, ProtoPie",
    year: "2024"
  }
];
