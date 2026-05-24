import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Share2, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import SocialMediaGallery from "@/components/SocialMediaGallery";
import heroImage from "@/assets/services/social-hero.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const outcomes = [
  "Content calendar and strategy",
  "Post design and copywriting",
  "Community management",
  "Performance reporting",
  "Paid advertising campaigns"
];

const process = [
  { step: "01", title: "Audit", description: "Review current social presence and competitors" },
  { step: "02", title: "Strategy", description: "Develop content pillars and posting schedule" },
  { step: "03", title: "Create", description: "Design engaging content for all platforms" },
  { step: "04", title: "Manage", description: "Execute, engage, and optimize continuously" }
];

const SocialService = () => {
  return (
    <Layout>
      <SEOHead
        title="Social Media Marketing Dubai | Content Creation"
        description="Professional social media marketing services in Dubai — content creation, strategy, community management, and paid advertising across Instagram, Facebook, LinkedIn, and TikTok. Grow your brand online."
        keywords="social media marketing Dubai, content creation Dubai, social media agency Dubai, Instagram marketing Dubai, social media management UAE, TikTok marketing Dubai, freelance designer Dubai"
        canonicalUrl="/services/social"
        schemaType="service"
        serviceName="Social Media Management"
        serviceDescription="Professional social media management and marketing services including content creation, strategy, community management, and paid advertising in Dubai and UAE."
        breadcrumbs={[{ name: "Services", url: "/services" }, { name: "Social Media", url: "/services/social" }]}
      />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Social Media Content" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 tech-grid opacity-20" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
            <motion.div variants={fadeInUp}>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" /> Back to Services
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Share2 className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-heading text-sm uppercase tracking-widest">Service</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Social Media <span className="text-gradient">Management</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
              Complete social media management with content planning, creation, and performance optimization. Build an engaged community around your brand.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/hire-me">Start Your Project <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/971543763091" target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid — shared component */}
      <section className="section-padding">
        <div className="container-custom">
          <SocialMediaGallery />
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-heading text-sm uppercase tracking-widest">What You Get</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-6">
                Fully Managed <span className="text-gradient">Social Presence</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                A fully managed social media presence with measurable engagement growth. From content creation to community management.
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 md:p-12 text-center rounded-2xl scanline">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Ready to Grow Your Social Presence?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Let's build an engaged community that loves your brand.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/portfolio">View My Work <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SocialService;
