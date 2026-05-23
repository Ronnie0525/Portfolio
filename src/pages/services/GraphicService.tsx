import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Image, CheckCircle2, Layers, Palette, Target, Zap, Eye, Star, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import { X } from "lucide-react";

import heroImage from "@/assets/services/graphic-hero.jpg";
import rollupImg from "@/assets/services/graphic-rollup.jpg";
import businesscardImg from "@/assets/services/graphic-businesscard.jpg";
import leafletImg from "@/assets/services/graphic-leaflet.jpg";
import brochureImg from "@/assets/services/graphic-brochure.jpg";
import companyprofileImg from "@/assets/services/graphic-companyprofile.jpg";
import mugImg from "@/assets/services/graphic-mug.jpg";
import stationeryImg from "@/assets/services/graphic-stationery.jpg";
import tshirtImg from "@/assets/services/graphic-tshirt.jpg";
import shoesImg from "@/assets/services/graphic-shoes.jpg";
import bannerImg from "@/assets/services/graphic-banner.jpg";
import proposalImg from "@/assets/services/graphic-proposal.jpg";
import presentationImg from "@/assets/services/graphic-presentation.jpg";
import packagingImg from "@/assets/services/graphic-packaging.jpg";
import menuImg from "@/assets/services/graphic-menu.jpg";
import idbadgeImg from "@/assets/services/graphic-idbadge.jpg";
import totebagImg from "@/assets/services/graphic-totebag.jpg";
import socialmediaImg from "@/assets/services/graphic-socialmedia.jpg";
import invoiceImg from "@/assets/services/graphic-invoice.jpg";
import posterImg from "@/assets/services/graphic-poster.jpg";
import certificateImg from "@/assets/services/graphic-certificate.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const categories = [
  { id: "print", label: "Print & Marketing", icon: Layers },
  { id: "corporate", label: "Corporate", icon: Target },
  { id: "merchandise", label: "Merchandise", icon: Palette },
  { id: "digital", label: "Digital & Proposals", icon: Zap },
];

const showcaseItems = [
  // Print & Marketing
  { id: "rollup", title: "Roll-Up Banners", category: "print", image: rollupImg, color: "from-purple-500 to-violet-600", description: "Exhibition-ready retractable banners that command attention at trade shows, conferences, and corporate events.", features: ["Custom sizes", "UV-resistant printing", "Retractable mechanism"] },
  { id: "businesscard", title: "Business Cards", category: "print", image: businesscardImg, color: "from-violet-500 to-purple-600", description: "Premium luxury business cards with foil stamping, embossing, and specialty finishes that leave lasting impressions.", features: ["Foil stamping", "Spot UV coating", "Die-cut options"] },
  { id: "leaflet", title: "Leaflets & Flyers", category: "print", image: leafletImg, color: "from-purple-600 to-fuchsia-500", description: "High-conversion marketing leaflets and flyers designed for maximum impact and audience engagement.", features: ["Tri-fold & bi-fold", "A4/A5 formats", "Mass print-ready"] },
  // Corporate
  { id: "brochure", title: "Brochures", category: "corporate", image: brochureImg, color: "from-purple-500 to-violet-500", description: "Multi-page corporate brochures with editorial-quality layouts that tell your brand story with precision.", features: ["Saddle-stitch binding", "Premium paper", "Custom layouts"] },
  { id: "companyprofile", title: "Company Profiles", category: "corporate", image: companyprofileImg, color: "from-violet-600 to-purple-500", description: "Professional company profile books that showcase your brand's vision, mission, and achievements.", features: ["Hardcover finish", "40+ page layouts", "Annual report style"] },
  { id: "stationery", title: "Stationery Sets", category: "corporate", image: stationeryImg, color: "from-purple-500 to-fuchsia-400", description: "Complete corporate stationery — letterheads, envelopes, and notepads with cohesive brand identity.", features: ["Letterhead design", "Envelope branding", "Notepad layouts"] },
  // Merchandise
  { id: "mug", title: "Branded Mugs", category: "merchandise", image: mugImg, color: "from-violet-500 to-purple-600", description: "Custom branded mugs perfect for corporate gifting, promotions, and employee merchandise programs.", features: ["Ceramic & travel mugs", "Full-wrap printing", "Gift box packaging"] },
  { id: "tshirt", title: "T-Shirt Design", category: "merchandise", image: tshirtImg, color: "from-purple-600 to-violet-600", description: "Bold custom apparel design — from streetwear drops to corporate team uniforms and event merchandise.", features: ["DTG & screen print", "All-over prints", "Size range S-3XL"] },
  { id: "shoes", title: "Custom Shoes", category: "merchandise", image: shoesImg, color: "from-fuchsia-500 to-purple-500", description: "Premium custom sneaker and shoe designs featuring bespoke graphics, limited edition branding, and unique colorways.", features: ["Custom artwork", "Limited editions", "Premium materials"] },
  // Digital & Proposals
  { id: "banner", title: "Digital Banners", category: "digital", image: bannerImg, color: "from-purple-500 to-violet-500", description: "Large-format outdoor billboards and digital banners designed for maximum visibility and brand recall.", features: ["Billboard formats", "LED-optimized", "Responsive sizes"] },
  { id: "proposal", title: "Proposals", category: "digital", image: proposalImg, color: "from-violet-500 to-purple-600", description: "Winning business proposals with persuasive layouts, data visualization, and brand-aligned design systems.", features: ["Bid-ready format", "Infographic data", "Executive summary"] },
  { id: "presentation", title: "Presentations", category: "digital", image: presentationImg, color: "from-purple-600 to-violet-600", description: "Keynote and pitch-deck presentations with cinematic slide design that captivate investors and stakeholders.", features: ["16:9 & 4:3", "Animated slides", "Speaker notes"] },
  { id: "socialmedia", title: "Social Media Posts", category: "digital", image: socialmediaImg, color: "from-violet-500 to-fuchsia-500", description: "Scroll-stopping social media content templates for Instagram, LinkedIn, and Facebook campaigns.", features: ["Story & feed formats", "Carousel design", "Brand templates"] },
  { id: "invoice", title: "Invoices & Receipts", category: "corporate", image: invoiceImg, color: "from-purple-500 to-violet-500", description: "Professional financial documents with clean layouts, brand consistency, and print-ready formatting.", features: ["Auto-fill ready", "Multi-currency", "Tax-compliant"] },
  // Additional items
  { id: "packaging", title: "Product Packaging", category: "print", image: packagingImg, color: "from-purple-600 to-violet-600", description: "Premium product packaging that elevates shelf appeal and creates unforgettable unboxing experiences.", features: ["Box & sleeve design", "Dieline ready", "3D mockups"] },
  { id: "menu", title: "Restaurant Menus", category: "print", image: menuImg, color: "from-violet-500 to-purple-500", description: "Elegant menu designs for restaurants, cafés, and hospitality brands with typography-focused layouts.", features: ["Bi-fold & tri-fold", "Lamination ready", "QR integration"] },
  { id: "idbadge", title: "ID Badges & Lanyards", category: "corporate", image: idbadgeImg, color: "from-purple-500 to-fuchsia-500", description: "Corporate ID badges and event passes with secure design, brand consistency, and lanyard-ready formatting.", features: ["Event passes", "Employee badges", "Barcode ready"] },
  { id: "totebag", title: "Tote Bags", category: "merchandise", image: totebagImg, color: "from-violet-500 to-purple-600", description: "Custom branded tote bags for events, promotions, and eco-conscious marketing campaigns.", features: ["Canvas & cotton", "Full-print options", "Eco-friendly"] },
  { id: "poster", title: "Posters & Signage", category: "print", image: posterImg, color: "from-fuchsia-500 to-purple-600", description: "High-impact event and promotional posters with bold typography and attention-grabbing visual compositions.", features: ["A3 & A2 formats", "UV-resistant", "Indoor & outdoor"] },
  { id: "certificate", title: "Certificates", category: "corporate", image: certificateImg, color: "from-purple-600 to-violet-500", description: "Elegant certificates and diplomas for corporate awards, training programs, and achievement recognition.", features: ["Gold foil accents", "Custom seals", "Editable templates"] },
];

const stats = [
  { value: "500+", label: "Designs Delivered" },
  { value: "120+", label: "Happy Clients" },
  { value: "20", label: "Design Categories" },
  { value: "98%", label: "Client Satisfaction" },
];

const GraphicService = () => {
  const [activeCategory, setActiveCategory] = useState("print");
  const [lightboxItem, setLightboxItem] = useState<typeof showcaseItems[0] | null>(null);
  const filteredItems = showcaseItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      <SEOHead
        title="Graphic Design & Marketing Dubai"
        description="Professional graphic design and marketing services in Dubai — brochures, flyers, packaging, social media creatives, marketing collateral, and print design. Ronnie Balonon Jr. delivers visuals that sell."
        keywords="graphic design Dubai, marketing design UAE, brochure design Dubai, flyer design, packaging design Dubai, social media design, print design Dubai"
        canonicalUrl="/services/graphic"
        schemaType="service"
        serviceName="Graphic Design & Marketing"
        serviceDescription="Professional graphic design and marketing collateral creation including brochures, flyers, packaging, social media creatives, and print design for businesses in Dubai and UAE."
        breadcrumbs={[{ name: "Services", url: "/services" }, { name: "Graphic Design", url: "/services/graphic" }]}
      />
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Graphic Design & Marketing Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 tech-grid opacity-20" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
            <motion.div variants={fadeInUp}>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Image className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-heading text-sm uppercase tracking-widest">Service</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Graphic Design & <span className="text-gradient">Marketing</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-4">
              From business cards to billboards — high-impact visual assets that drive engagement, build trust, and convert audiences across every touchpoint.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mb-8 italic">
              "Design is the silent ambassador of your brand." — Paul Rand
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/hire-me">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/971543763091" target="_blank" rel="noopener noreferrer">
                  WhatsApp Me
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative border-y border-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
        <div className="absolute inset-0 scanline" />
        <div className="container-custom relative z-10 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-heading text-sm uppercase tracking-widest">Portfolio Showcase</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              Designs That <span className="text-gradient">Convert</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every design is crafted with strategic intent — optimized for print fidelity, brand consistency, and measurable marketing impact.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-heading text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
                      : "glass-card hover:bg-primary/10 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative glass-card rounded-2xl overflow-hidden hover-lift"
                >
                  {/* Saber Glow Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} blur-md opacity-40 group-hover:opacity-80 transition-opacity`} />

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} mockup design`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                        <Eye className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((f) => (
                        <span key={f} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Saber Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-60 transition-opacity`} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-heading text-sm uppercase tracking-widest">Why It Matters</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-6">
                Design Is Your <span className="text-gradient">Competitive Edge</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                In a world of 10,000+ daily brand impressions, only the most visually compelling designs break through. Professional graphic design isn't a luxury — it's the difference between being seen and being ignored.
              </p>

              <div className="space-y-6">
                {[
                  { icon: TrendingUp, stat: "94%", text: "of first impressions are design-related" },
                  { icon: Eye, stat: "80%", text: "increased brand recognition with consistent visuals" },
                  { icon: Star, stat: "73%", text: "of companies invest in design to differentiate" },
                  { icon: Award, stat: "3.5x", text: "higher engagement with professional design" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-primary text-lg">{item.stat}</span>
                      <span className="text-muted-foreground ml-2">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-violet-500 to-primary opacity-60" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-violet-500 to-primary blur-md opacity-40" />

              <h3 className="font-heading text-xl font-bold mb-8">My 4-Step Process</h3>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Discovery & Brief", description: "Deep-dive into your brand DNA, target audience, and marketing objectives to set the creative direction." },
                  { step: "02", title: "Concept & Strategy", description: "Develop multiple creative concepts with mood boards, color palettes, and typography systems." },
                  { step: "03", title: "Design & Refine", description: "Pixel-perfect execution with iterative feedback rounds until every detail is flawless." },
                  { step: "04", title: "Deliver & Deploy", description: "Print-ready and digital-optimized files delivered with brand guidelines for consistent usage." },
                ].map((item, i) => (
                  <div key={item.step} className="flex gap-4 relative">
                    {i < 3 && <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent" />}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="font-heading font-bold text-primary">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Deliverables Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-heading text-sm uppercase tracking-widest">Complete Solutions</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-4">
              Everything Your Brand <span className="text-gradient">Needs</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {showcaseItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                onClick={() => setLightboxItem(item)}
                className="group relative glass-card rounded-2xl p-6 text-center hover-lift cursor-pointer overflow-hidden"
              >
                {/* Top saber glow */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${item.color}`} />
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${item.color} blur-md opacity-60`} />
                <div className={`absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r ${item.color} blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-500`} />

                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 mx-auto">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.5)] scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <h4 className="font-heading text-base font-bold">{item.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>

                {/* Bottom saber glow */}
                <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${item.color} blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                {/* Side saber glows */}
                <div className={`absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className={`absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent blur-lg opacity-40" />
            <div className="scanline" />

            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-gradient">Dominate</span> Your Market?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create marketing materials that don't just look good — they drive real results. From concept to print-ready files, I've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/hire-me">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">
                  View Full Portfolio
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full glass-card rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Saber glow borders */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${lightboxItem.color}`} />
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${lightboxItem.color} blur-lg opacity-80`} />
              <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${lightboxItem.color}`} />
              <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${lightboxItem.color} blur-lg opacity-80`} />
              <div className={`absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b ${lightboxItem.color} opacity-50`} />
              <div className={`absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b ${lightboxItem.color} opacity-50`} />

              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:flex">
                <div className="md:w-2/3">
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/3 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl font-bold mb-3">{lightboxItem.title}</h3>
                  <p className="text-muted-foreground mb-6">{lightboxItem.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {lightboxItem.features.map((f) => (
                      <span key={f} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/hire-me" onClick={() => setLightboxItem(null)}>
                      Get This Design
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default GraphicService;
