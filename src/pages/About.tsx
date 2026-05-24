import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, Users, Zap, Play, X, Video, Rocket, Globe, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const values = [
  { icon: Rocket, title: "Bold Innovation", description: "I push creative boundaries with AI-driven workflows and clean, modern design." },
  { icon: Target, title: "Strategic Precision", description: "Every piece I deliver is audience-aware, on-brief, and built to perform â€” not just to look good." },
  { icon: Globe, title: "UAE-Rooted", description: "Based in Dubai, fluent in the visual language of the region, and ready to ship across cultures." },
  { icon: Shield, title: "Brand Care", description: "I treat your brand like my own â€” consistent, careful, and protected across every touchpoint." },
];

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "1", label: "Year Experience" },
  { value: "AI", label: "Powered Workflow" },
  { value: "PH â†’ AE", label: "Philippines & Dubai" },
];

const aiVideos = [
  { title: "AI Video Showcase 1", driveId: "1RPe7OKJa3H6Pym6A4l0jOLwhRWqr-IYl" },
  { title: "AI Video Showcase 2", driveId: "1IqWKt-GraiGZA4boK_jqpekUazUJpFHN" },
];

const SaberLine = ({ delay = 0, className = "" }: { delay?: number; className?: string }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.6, 0.3, 0.7, 0] }}
    transition={{ duration: 3, delay, repeat: Infinity, repeatDelay: 2 }}
  >
    <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-sm" />
  </motion.div>
);

const About = () => {
  const [activeVideo, setActiveVideo] = useState<{ title: string; driveId: string } | null>(null);

  return (
    <Layout>
      <SEOHead
        title="About Ronnie Balonon Jr. â€” Graphic Designer & AI Creative Dubai"
        description="Get to know Ronnie Balonon Jr. â€” Dubai-based freelance graphic designer with strong AI knowledge. Social media, UI/UX & web design, photography, and video editing."
        keywords="about Ronnie Balonon, graphic designer Dubai, AI designer Dubai, freelance designer UAE"
        canonicalUrl="/about"
        schemaType="about"
        breadcrumbs={[{ name: "About", url: "/about" }]}
      />

      {/* Hero */}
      <section className="hero-dark relative min-h-[70vh] flex items-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/8 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary font-heading text-sm uppercase tracking-widest">Designer Behind the Work</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              I'm <span className="text-gradient">Ronnie Balonon</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A Dubai-based graphic designer with strong knowledge in AI, building unforgettable brand experiences across social media, UI/UX, photography, and video.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/contact">Work With Me <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/portfolio">View My Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-card/40">
        <div className="container-custom">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Drives Me */}
      <section className="section-padding bg-card relative overflow-hidden">
        <SaberLine delay={0.5} className="top-16 left-0 right-0 h-[2px]" />

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary font-heading text-sm uppercase tracking-widest">My DNA</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4">What Drives <span className="text-gradient">Me</span></h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div key={value.title} variants={fadeInUp} className="relative group">
                <div className="glass-card p-6 text-center hover-lift h-full relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: index * 0.4 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: index * 0.4 + 0.6 }}
                  />

                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* My Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-primary font-heading text-sm uppercase tracking-widest">My Story</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4">A Year of <span className="text-gradient">Real Client Work</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>I'm a freelance graphic designer with strong knowledge in Artificial Intelligence. I started out in the Philippines and now work from Dubai â€” that's 1 year of combined, hands-on client work across two markets.</p>
              <p>My focus areas are social media management, UI/UX & web design, photography, and video editing. I blend solid design fundamentals with AI tooling to ship work that's fast, on-brand, and built for today's platforms.</p>
              <p>Every project gets a direct, one-on-one relationship â€” no middlemen, no handoffs. Just clear briefs, sharp execution, and content that's impossible to ignore.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Video Showcase */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary font-heading text-sm uppercase tracking-widest">AI Video</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">AI-Powered <span className="text-gradient">Video</span></h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">A quick look at AI-generated video content I've produced using cutting-edge tools.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {aiVideos.map((video, index) => (
              <motion.div key={video.driveId} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group cursor-pointer" onClick={() => setActiveVideo(video)}>
                <div className="relative rounded-xl overflow-hidden aspect-video border border-primary/10 hover:border-primary/40 transition-all duration-300 bg-background">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.4)] group-hover:scale-110 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-300">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                    <span className="font-heading text-sm text-muted-foreground group-hover:text-foreground transition-colors">{video.title}</span>
                  </div>
                  <div className="absolute top-3 left-3"><Video className="w-5 h-5 text-primary/60" /></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4" onClick={() => setActiveVideo(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.15)]" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setActiveVideo(null)} className="absolute -top-12 right-0 z-10 p-2 text-muted-foreground hover:text-primary transition-colors">
                <X className="w-8 h-8" />
              </button>
              <iframe src={`https://drive.google.com/file/d/${activeVideo.driveId}/preview`} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen title={activeVideo.title} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mission CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative glass-card p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto rounded-3xl overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)" }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)" }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />

            <Award className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">My Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              "To help brands stand out with strategic, AI-powered design â€” clean visuals, sharp execution, and content that actually moves the needle."
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Let's Build Something Together <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

// Suppress unused Zap import if pre-commit removes
void Zap;

export default About;
