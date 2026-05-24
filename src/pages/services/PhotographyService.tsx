import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Camera, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import PhotographyGallery from "@/components/PhotographyGallery";
import heroImage from "@/assets/portfolio/photography/wedding-1.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const outcomes = [
  "Wedding & bridal photography",
  "Family portrait sessions",
  "Food & beverage photography",
  "Product & perfume shoots",
  "Event & lifestyle photography"
];

const process = [
  { step: "01", title: "Consultation", description: "Understanding your vision, style preferences, and goals" },
  { step: "02", title: "Shoot Planning", description: "Location scouting, mood boards, and scheduling" },
  { step: "03", title: "Photo Session", description: "Professional shooting with expert lighting and composition" },
  { step: "04", title: "Editing & Delivery", description: "Retouching, color grading, and final high-res delivery" }
];

const PhotographyService = () => {
  return (
    <Layout>
      <SEOHead
        title="Photography Services Dubai"
        description="Professional photography services in Dubai — events, products, corporate, weddings, food photography, and portraits. High-quality visual storytelling by Ronnie Balonon Jr."
        keywords="photography Dubai, event photography UAE, product photography Dubai, corporate photography, wedding photographer Dubai, food photography, portrait photography"
        canonicalUrl="/services/photography"
        schemaType="service"
        serviceName="Photography Services"
        serviceDescription="Professional photography services including event, product, corporate, wedding, food, and portrait photography in Dubai and UAE."
        breadcrumbs={[{ name: "Services", url: "/services" }, { name: "Photography", url: "/services/photography" }]}
      />
      {/* Hero Section */}
      <section className="hero-dark relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Photography" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
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
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-heading text-sm uppercase tracking-widest">Service</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional <span className="text-gradient">Photography</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
              Stunning photography that captures the essence of every moment — from weddings and portraits to products and food styling.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/hire-me">
                  Book a Session
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

      {/* What You Get */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-heading text-sm uppercase tracking-widest">What You Get</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-6">
                Pixel-Perfect <span className="text-gradient">Imagery</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                High-resolution, professionally edited photos delivered in all formats you need — ready for print, web, and social media.
              </p>
              <ul className="space-y-4">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8 rounded-2xl">
              <h3 className="font-heading text-xl font-bold mb-6">My Process</h3>
              <div className="space-y-6">
                {process.map((item) => (
                  <div key={item.step} className="flex gap-4">
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

      {/* Photography Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary font-heading text-sm uppercase tracking-widest">Portfolio</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">
              Photography <span className="text-gradient">Projects</span>
            </h2>
          </motion.div>
          <PhotographyGallery />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 md:p-12 text-center rounded-2xl scanline">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to Book a Photo Session?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create stunning imagery that tells your story and elevates your brand.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/hire-me">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PhotographyService;
