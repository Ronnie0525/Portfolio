import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Palette, CheckCircle2, ArrowLeft, Star, Eye, Layers, Zap, Target, Crown, TrendingUp, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import heroImage from "@/assets/services/branding-hero.jpg";
import businessCardImg from "@/assets/services/branding-businesscard.jpg";
import flyerImg from "@/assets/services/branding-flyer.jpg";
import bannerImg from "@/assets/services/branding-banner.jpg";
import identityImg from "@/assets/services/branding-identity.jpg";
import packagingImg from "@/assets/services/branding-packaging.jpg";
import styleguideImg from "@/assets/services/branding-styleguide.jpg";
import { MOCKUP_URLS } from "@/lib/storage";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const showcaseItems = [
  { img: businessCardImg, title: "Business Cards", description: "Premium card designs with foil stamping & embossing" },
  { img: flyerImg, title: "Flyers & Brochures", description: "Eye-catching print materials that drive action" },
  { img: bannerImg, title: "Banners & Signage", description: "Roll-up banners, billboards & event displays" },
  { img: packagingImg, title: "Packaging Design", description: "Product packaging that sells on the shelf" },
  { img: styleguideImg, title: "Brand Style Guides", description: "Comprehensive brand documentation & rules" },
  { img: identityImg, title: "Full Identity Systems", description: "Complete stationery & collateral suites" },
];

const stats = [
  { value: "150+", label: "Brands Designed", icon: Crown },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "40+", label: "Industries Served", icon: Target },
  { value: "5x", label: "Avg. Brand Recall Boost", icon: TrendingUp },
];

const deliverables = [
  { title: "Logo System", items: ["Primary logo", "Secondary mark", "Favicon & app icon", "Monochrome versions"], icon: Layers },
  { title: "Visual Identity", items: ["Color palette (primary & secondary)", "Typography system", "Photography direction", "Iconography style"], icon: Eye },
  { title: "Brand Collateral", items: ["Business cards", "Letterhead & envelope", "Email signature", "Social media kit"], icon: Zap },
  { title: "Brand Guidelines", items: ["Logo usage rules", "Do's and don'ts", "Spacing & sizing specs", "Digital & print standards"], icon: Award },
];

const process = [
  { step: "01", title: "Discovery & Research", description: "I deep-dive into your vision, audience, competitors, and market positioning to uncover what makes your brand unique.", color: "from-primary to-accent" },
  { step: "02", title: "Strategy & Positioning", description: "Define your brand voice, personality, and visual direction through collaborative moodboards and strategic workshops.", color: "from-accent to-primary" },
  { step: "03", title: "Design & Iteration", description: "Multiple concept rounds with detailed presentations. I refine until every pixel tells your brand story perfectly.", color: "from-primary to-muted" },
  { step: "04", title: "Delivery & Launch", description: "Complete brand package with all file formats, guidelines document, and support for your launch rollout.", color: "from-muted to-primary" },
];

const testimonials = [
  { name: "Sarah K.", role: "CEO, TechStart Dubai", quote: "The brand identity Ronnie Balonon Jr. created transformed my startup's perception. I went from 'just another tech company' to a brand people remember and trust.", rating: 5 },
  { name: "Mohammed A.", role: "Founder, Luxe Properties", quote: "Exceptional attention to detail. Every touchpoint from business cards to my website feels cohesive and premium. Worth every dirham.", rating: 5 },
  { name: "Lisa Chen", role: "Marketing Director, FoodCo", quote: "My rebrand resulted in 3x more social media engagement and a 40% increase in brand recall. Ronnie Balonon Jr. doesn't just design — they build brand equity.", rating: 5 },
];

const brandMockups = [
  { img: MOCKUP_URLS[0], title: "Business Cards", category: "Print" },
  { img: MOCKUP_URLS[1], title: "Stationery Suite", category: "Print" },
  { img: MOCKUP_URLS[2], title: "Luxury Packaging", category: "Packaging" },
  { img: MOCKUP_URLS[3], title: "Shopping Bags", category: "Packaging" },
  { img: MOCKUP_URLS[4], title: "Branded Apparel", category: "Merchandise" },
  { img: MOCKUP_URLS[5], title: "Brand Guidelines", category: "Documentation" },
  { img: MOCKUP_URLS[6], title: "Coffee Cup", category: "Merchandise" },
  { img: MOCKUP_URLS[7], title: "Website Design", category: "Digital" },
  { img: MOCKUP_URLS[8], title: "Mobile App", category: "Digital" },
  { img: MOCKUP_URLS[9], title: "Neon Signage", category: "Environmental" },
  { img: MOCKUP_URLS[10], title: "Corporate Notebook", category: "Merchandise" },
  { img: MOCKUP_URLS[11], title: "Gift Set", category: "Merchandise" },
  { img: MOCKUP_URLS[12], title: "Vehicle Wrap", category: "Environmental" },
  { img: MOCKUP_URLS[13], title: "Roll-Up Banner", category: "Event" },
  { img: MOCKUP_URLS[14], title: "Tote Bag", category: "Merchandise" },
  { img: MOCKUP_URLS[15], title: "ID Badge", category: "Corporate" },
  { img: MOCKUP_URLS[16], title: "Wall Clock", category: "Environmental" },
  { img: MOCKUP_URLS[17], title: "Presentation Folder", category: "Print" },
  { img: MOCKUP_URLS[18], title: "Stickers & Stamps", category: "Print" },
  { img: MOCKUP_URLS[19], title: "Email Signature", category: "Digital" },
];

const BrandingService = () => {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [mockupFilter, setMockupFilter] = useState("All");

  const mockupCategories = ["All", ...Array.from(new Set(brandMockups.map(m => m.category)))];
  const filteredMockups = mockupFilter === "All" ? brandMockups : brandMockups.filter(m => m.category === mockupFilter);

  return (
    <Layout>
      <SEOHead
        title="Freelance Designer Dubai | Brand Identity Design"
        description="Ronnie Balonon Jr. is a leading freelance designer in Dubai offering brand identity design, logo creation, packaging, and visual systems. Build a brand that commands attention and drives business growth in the UAE."
        keywords="freelance designer Dubai, brand identity design Dubai, logo design Dubai, corporate branding UAE, visual identity Dubai, brand guidelines Dubai, packaging design Dubai, business branding Dubai"
        canonicalUrl="/services/branding"
        schemaType="service"
        serviceName="Brand Identity & Visual Design"
        serviceDescription="Premium brand identity design services in Dubai including logo design, business cards, flyers, packaging, and complete visual systems for businesses across UAE and globally."
        breadcrumbs={[{ name: "Services", url: "/services" }, { name: "Branding", url: "/services/branding" }]}
      />

      {/* Hero Section with Saber Animation & Dark Overlay */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Brand Identity Design" loading="eager" decoding="async" className="w-full h-full object-cover" />
          {/* Heavy dark overlay for text readability */}
          <div className="absolute inset-0 bg-background/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />

          {/* Saber Line Animations */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Horizontal saber sweep */}
            <motion.div
              className="absolute top-[20%] left-0 w-full h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--accent)), transparent)" }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
            />
            <motion.div
              className="absolute top-[45%] left-0 w-full h-[1px]"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--accent)), hsl(var(--primary)), transparent)" }}
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
            />
            <motion.div
              className="absolute top-[70%] left-0 w-full h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)" }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
            />
            {/* Vertical saber lines */}
            <motion.div
              className="absolute left-[30%] top-0 w-[1px] h-full"
              style={{ background: "linear-gradient(180deg, transparent, hsl(var(--primary) / 0.6), transparent)" }}
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
            />
            <motion.div
              className="absolute left-[65%] top-0 w-[2px] h-full"
              style={{ background: "linear-gradient(180deg, transparent, hsl(var(--accent) / 0.5), transparent)" }}
              animate={{ y: ["100%", "-100%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />
            {/* Diagonal saber stroke */}
            <motion.div
              className="absolute top-0 left-0 w-[200%] h-[1px] origin-left"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), hsl(var(--accent) / 0.6), transparent)",
                transform: "rotate(25deg)",
              }}
              animate={{ x: ["-100%", "50%"] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
            />
            {/* Glowing orb pulses */}
            <motion.div
              className="absolute top-[25%] right-[20%] w-32 h-32 rounded-full"
              style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)" }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[30%] left-[15%] w-48 h-48 rounded-full"
              style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.1), transparent 70%)" }}
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
                  <ArrowLeft className="w-4 h-4" /> Back to Services
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">#1 Requested Service</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Brand Is Your
                <br />
                <span className="text-gradient">First Impression.</span>
                <br />
                Make It Unforgettable.
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
                I don't just design logos — I craft <strong className="text-foreground">brand experiences</strong> that make your audience stop scrolling, start trusting, and keep coming back.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-muted-foreground mb-8">
                From startups finding their voice to enterprises refreshing their presence — every brand deserves design that <em>commands attention</em>.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/get-quote">
                    Get Your Brand Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/971543763091" target="_blank" rel="noopener noreferrer">
                    Let's Talk Branding
                  </a>
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div variants={fadeInUp} className="flex items-center gap-6 mt-8 pt-8 border-t border-border/50">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                      {["SK", "MA", "LC", "JD"][i - 1]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">Trusted by  worldwide</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Mockup Grid */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:grid grid-cols-2 gap-3"
            >
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                   <img src={businessCardImg} alt="Business Card Design" loading="lazy" decoding="async" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                   <img src={identityImg} alt="Brand Identity" loading="lazy" decoding="async" className="w-full h-32 object-cover" />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                   <img src={packagingImg} alt="Packaging Design" loading="lazy" decoding="async" className="w-full h-32 object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                   <img src={flyerImg} alt="Flyer Design" loading="lazy" decoding="async" className="w-full h-48 object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-primary/5 border-y border-primary/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Branding Matters */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest">Why It Matters</motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-6">
              Design Isn't Decoration.
              <br />
              <span className="text-gradient">It's Your Business Strategy.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Studies show it takes <strong className="text-foreground">0.05 seconds</strong> to form an opinion about a brand. In that split second, your visual identity either builds trust or loses a customer forever. I make sure every fraction of a second works in your favor.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "72%", title: "Judge by Packaging", desc: "of consumers say packaging design influences their purchase decisions" },
              { number: "60%", title: "Avoid Poor Design", desc: "of consumers avoid brands with unappealing logos, even if reviews are good" },
              { number: "80%", title: "Color Recognition", desc: "increase in brand recognition when using consistent color across touchpoints" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-8 rounded-2xl text-center group hover:border-primary/30 transition-all duration-300"
              >
                <p className="font-heading text-5xl font-bold text-primary mb-3">{item.number}</p>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRAND MOCKUPS GALLERY — 20 Mockups ===== */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest">Brand Mockups</motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-4">
              Your Brand, <span className="text-gradient">Everywhere</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
              From business cards to vehicle wraps — see how a cohesive brand identity transforms every single touchpoint into a powerful marketing asset.
            </motion.p>
          </motion.div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {mockupCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setMockupFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  mockupFilter === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mockup Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {filteredMockups.map((mockup, i) => (
              <motion.div
                key={mockup.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer"
              >
                <img
                  src={mockup.img}
                  alt={mockup.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={896}
                  height={672}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-heading text-sm font-bold text-foreground">{mockup.title}</p>
                  <p className="text-[10px] text-primary uppercase tracking-wider">{mockup.category}</p>
                </div>
                {/* Saber glow on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/40 rounded-xl transition-all duration-300 group-hover:shadow-[inset_0_0_20px_rgba(123,47,190,0.15)]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mockup Showcase Gallery */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest">What I Create</motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-4">
              From Concept to <span className="text-gradient">Every Touchpoint</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
              Your brand lives in every interaction — business cards handed at meetings, banners at events, packaging on shelves. I design them all.
            </motion.p>
          </motion.div>

          {/* Featured Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={showcaseItems[activeShowcase].img}
                alt={showcaseItems[activeShowcase].title}
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{showcaseItems[activeShowcase].title}</h3>
                <p className="text-muted-foreground mt-2">{showcaseItems[activeShowcase].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {showcaseItems.map((item, i) => (
              <motion.button
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveShowcase(i)}
                className={`relative rounded-xl overflow-hidden aspect-[4/3] group transition-all duration-300 ${
                  activeShowcase === i ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "opacity-60 hover:opacity-100"
                }`}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
                <p className="absolute bottom-2 left-2 right-2 text-[10px] md:text-xs font-semibold text-foreground">{item.title}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get - Deliverables */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest">Deliverables</motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-4">
              Everything You Need to <span className="text-gradient">Own Your Market</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
              No half-measures. You get a complete, production-ready brand system that works across every medium — digital, print, and beyond.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((del, i) => (
              <motion.div
                key={del.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <del.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-4">{del.title}</h3>
                <ul className="space-y-2.5">
                  {del.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest">My Process</motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-4">
              How I Build Brands That <span className="text-gradient">Last Decades</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                <div className="glass-card p-6 rounded-2xl h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <span className="font-heading text-lg font-bold text-foreground">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest">Client Love</motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-4">
              Don't Take My Word For It
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-heading font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={identityImg} alt="Brand Identity Spread" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Ready to Build a Brand That
              <br />
              <span className="text-gradient">Dominates Your Industry?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're launching a startup or rebranding an empire — let's create something your competitors wish they had.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-quote">
                  Get a Custom Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio?category=branding">
                  View My Portfolio
                  <Eye className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/971543763091" target="_blank" rel="noopener noreferrer">
                  Message Me on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BrandingService;
