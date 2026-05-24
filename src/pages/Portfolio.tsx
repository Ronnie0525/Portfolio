import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Building, GraduationCap, Truck, UtensilsCrossed, Cake, Sparkles, Shield, Heart, Shirt, PartyPopper, Calendar } from "lucide-react";
import UIUXPortfolioGrid from "@/components/portfolio/UIUXPortfolioGrid";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import PhotographyGallery from "@/components/PhotographyGallery";
import SocialMediaGallery from "@/components/SocialMediaGallery";
import MotionDesignGallery from "@/components/MotionDesignGallery";

// Import branding thumbnails
import dspsThumb from "@/assets/portfolio/branding/dsps-thumb.jpg";
import salamThumb from "@/assets/portfolio/branding/salam-thumb.jpg";
import almasarThumb from "@/assets/portfolio/branding/almasar-thumb.jpg";
import habitmahshiThumb from "@/assets/portfolio/branding/habitmahshi-thumb.jpg";
import bakepointThumb from "@/assets/portfolio/branding/bakepoint-thumb.jpg";
import artisticImageryThumb from "@/assets/portfolio/branding/artisticimagery-thumb.jpg";

// Import videography thumbnails
import weddingThumb from "@/assets/portfolio/videography/wedding-thumb.jpg";
import event1Thumb from "@/assets/portfolio/videography/event1-thumb.jpg";
import rampThumb from "@/assets/portfolio/videography/ramp-thumb.jpg";
import galaThumb from "@/assets/portfolio/videography/gala-thumb.jpg";
import celebrationThumb from "@/assets/portfolio/videography/celebration-thumb.jpg";

// UI/UX thumbnails removed â€” replaced with UIForge + BuildFlow platform section

// Motion Design thumbnails removed â€” motion portfolio uses inline video showcase

// Import 3D Animation thumbnails
import realEstate3dThumb from "@/assets/portfolio/3d-animation/3r-realestate-thumb.jpg";
import ead1Thumb from "@/assets/portfolio/3d-animation/ead1-thumb.jpg";
import shamsThumb from "@/assets/portfolio/3d-animation/shams-thumb.jpg";
import tadweer1Thumb from "@/assets/portfolio/3d-animation/tadweer1-thumb.jpg";
import excelpixelsThumb from "@/assets/portfolio/3d-animation/excelpixels-thumb.jpg";
import adnoc1Thumb from "@/assets/portfolio/3d-animation/adnoc1-thumb.jpg";
import cabiloThumb from "@/assets/portfolio/3d-animation/cabilo-thumb.jpg";
import elecaasThumb from "@/assets/portfolio/3d-animation/elecaas-thumb.jpg";

// Import 2D Animation thumbnails
import protectPestThumb from "@/assets/portfolio/animation/protect-pest-thumb.jpg";
import familyPestThumb from "@/assets/portfolio/animation/family-pest-thumb.jpg";
import wasteCollectionThumb from "@/assets/portfolio/animation/waste-collection-thumb.jpg";
import oldFurnitureThumb from "@/assets/portfolio/animation/old-furniture-thumb.jpg";
import chemicalSafetyThumb from "@/assets/portfolio/animation/chemical-safety-thumb.jpg";
import safetyPesticideThumb from "@/assets/portfolio/animation/safety-pesticide-thumb.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const categories = [
  { id: "all", label: "All Projects" },
  { id: "branding", label: "Branding" },
  { id: "uiux", label: "UI/UX" },
  { id: "motion", label: "Motion" },
  { id: "social", label: "Social Media" },
  { id: "photography", label: "Photography" },
  { id: "videography", label: "Videography" }
];

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  // Branding Projects
  {
    id: 4,
    image: dspsThumb,
    title: "DSPS Laboratory",
    category: "branding",
    description: "Laboratory Science School branding",
    icon: <GraduationCap className="w-3 h-3" />,
    link: "https://drive.google.com/file/d/1DzV74nA6Mjl_5qcTgHp0ctYIzrsKriLf/view"
  },
  {
    id: 5,
    image: salamThumb,
    title: "SALAM Autism School",
    category: "branding",
    description: "Autism School brand identity",
    icon: <GraduationCap className="w-3 h-3" />,
    link: "https://drive.google.com/file/d/1MXgh1rQNMGdUksqf4oCs17WqfVNaSFD2/view"
  },
  {
    id: 6,
    image: almasarThumb,
    title: "ALMASAR Delivery",
    category: "branding",
    description: "Delivery Company branding",
    icon: <Truck className="w-3 h-3" />,
    link: "https://drive.google.com/file/d/1jw8bbASc40bD3pVwV27lWyu9c9vZs0v4/view"
  },
  {
    id: 7,
    image: habitmahshiThumb,
    title: "Habit Mahshi Restaurant",
    category: "branding",
    description: "Arabic Food Restaurant branding",
    icon: <UtensilsCrossed className="w-3 h-3" />,
    link: "https://drive.google.com/file/d/1mycx-T17ZnFH2qRC-jbs5di_rUZNPsf4/view"
  },
  {
    id: 8,
    image: bakepointThumb,
    title: "Bake Point Pastry",
    category: "branding",
    description: "Pastry & Bread Company UAE",
    icon: <Cake className="w-3 h-3" />,
    link: "https://drive.google.com/file/d/1a0hkNEfDVR-unOZKDtFUdGI_6BYXpaFm/view"
  },
  {
    id: 9,
    image: artisticImageryThumb,
    title: "Artistic Imagery AI",
    category: "branding",
    description: "AI Advertising Company",
    icon: <Sparkles className="w-3 h-3" />,
    link: "https://drive.google.com/file/d/1Bkm682V74IBkge32Uq8WvA4AjQrf5f-M/view"
  },
  
  
  
  
  // Videography Projects
  {
    id: 28,
    image: weddingThumb,
    title: "Wedding Film",
    category: "videography",
    description: "Cinematic Wedding Coverage",
    icon: <Heart className="w-3 h-3" />,
    link: "https://drive.google.com/file/d/1YpsnJBB2Ypx7Fub-3x8PvLwBHpAMi6L-/view"
  },
  {
    id: 29,
    image: event1Thumb,
    title: "Corporate Event",
    category: "videography",
    description: "Corporate Event Coverage",
    icon: <Calendar className="w-3 h-3" />,
    link: "https://drive.google.com/file/d/1A-0MdYbHS3LTDUESRhbe16mPL-P6_tvE/view"
  },
  {
    id: 30,
    image: rampThumb,
    title: "Fashion Ramp",
    category: "videography",
    description: "Fashion Show Coverage",
    icon: <Shirt className="w-3 h-3" />,
    link: "https://drive.google.com/file/d/1Eg-XqQTTfnJfBH1y8b_q49lEbC1p-Ugk/view"
  },
  {
    id: 31,
    image: galaThumb,
    title: "Gala Night",
    category: "videography",
    description: "Gala Event Coverage",
    icon: <PartyPopper className="w-3 h-3" />,
    link: "https://drive.google.com/file/d/1BqKmNvT5R8X3Pn4LsWdH7jFgC2vY9mZx/view"
  },
  {
    id: 32,
    image: celebrationThumb,
    title: "Celebration Event",
    category: "videography",
    description: "Special Occasion Coverage",
    icon: <PartyPopper className="w-3 h-3" />,
    link: "https://drive.google.com/file/d/1CdLnOvU6S9Y4Qo5MtXeI8kGhD3wZ0nAy/view"
  }
];

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(categoryParam || "all");

  // Update category when URL changes
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const isPhotographyView = activeCategory === "photography";
  const isUIUXView = activeCategory === "uiux";
  const isSocialView = activeCategory === "social";
  const isMotionView = activeCategory === "motion";

  return (
    <Layout>
      <SEOHead 
        title="Portfolio â€” Branding, UI/UX, Motion & Video"
        description="Explore 700+ creative projects by Ronnie Balonon Jr. Dubai â€” branding, UI/UX case studies, motion graphics, 2D/3D animation, videography, photography, and social media design for global brands."
        keywords="creative portfolio Dubai, branding portfolio, UI/UX design portfolio, motion graphics portfolio, video production portfolio, 3D animation portfolio, photography portfolio Dubai"
        canonicalUrl="/portfolio"
        schemaType="portfolio"
        breadcrumbs={[{ name: "Portfolio", url: "/portfolio" }]}
      />
      {/* Hero Section */}
      <section className="hero-dark relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest">
              My Work
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Creative <span className="text-gradient">Portfolio</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              A showcase of transformative brand experiences, UI/UX designs, motion graphics, and AI-driven marketing solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 border-b border-border sticky top-20 z-30 bg-background/80 backdrop-blur-xl">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--orange-glow)/0.4)]"
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid, Photography Gallery, or UI/UX Platforms */}
      <section className="section-padding">
        <div className="container-custom">
          {isPhotographyView ? (
            <PhotographyGallery />
          ) : isSocialView ? (
            <SocialMediaGallery showHeading={false} />
          ) : isUIUXView ? (
            <UIUXPortfolioGrid />
          ) : isMotionView ? (
            <MotionDesignGallery />
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  layout
                  className="group"
                >
                  <div className="glass-card overflow-hidden rounded-xl hover-lift">
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.link ? (
                          <Button variant="hero" size="sm" asChild>
                            <a href={item.link} {...(item.link.includes('.pdf') || item.link.includes('drive.google.com') ? {} : { target: "_blank", rel: "noopener noreferrer" })}>
                              View Project
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        ) : (
                          <Button variant="hero" size="sm">
                            View Project
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary">{item.icon}</span>
                        <span className="text-xs text-primary uppercase tracking-wider font-medium">
                          {categories.find(c => c.id === item.category)?.label}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto rounded-2xl"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Want to See More?
            </h2>
            <p className="text-muted-foreground mb-8">
              This is just a selection of my work. Request access to my complete portfolio with detailed case studies, process documentation, and additional projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request Full Portfolio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
