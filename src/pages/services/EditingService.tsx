import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Film, CheckCircle2, ArrowLeft, Play, X, Sparkles, Scissors, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import heroImage from "@/assets/services/editing-hero.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const outcomes = [
  "Cinematic video editing",
  "Color grading and correction",
  "Sound design and mixing",
  "Subtitles and captions",
  "Format optimization"
];

const process = [
  { step: "01", title: "Review", description: "Analyze footage and plan the edit structure" },
  { step: "02", title: "Assembly", description: "Create rough cut with key sequences" },
  { step: "03", title: "Refine", description: "Polish transitions, timing, and pacing" },
  { step: "04", title: "Finish", description: "Color grade, sound mix, and final export" }
];

interface FeaturedVideo {
  title: string;
  subtitle: string;
  description: string;
  driveId: string;
  icon: React.ReactNode;
  gradient: string;
}

const featuredVideos: FeaturedVideo[] = [
  {
    title: "Cinematic Reel",
    subtitle: "Showreel",
    description: "A dynamic compilation showcasing cinematic transitions, color grading, and storytelling through professional post-production.",
    driveId: "1EYHOJ8i1yfPCPvkBuGRY93zS-S3WR7-j",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-primary/30 via-primary/10 to-transparent",
  },
  {
    title: "Precision Cuts",
    subtitle: "Editing Craft",
    description: "Frame-perfect editing with seamless pacing, rhythm-driven cuts, and narrative flow that keeps audiences engaged.",
    driveId: "1EYHOJ8i1yfPCPvkBuGRY93zS-S3WR7-j",
    icon: <Scissors className="w-6 h-6" />,
    gradient: "from-accent/30 via-accent/10 to-transparent",
  },
  {
    title: "Color & Grade",
    subtitle: "Post-Production",
    description: "Transforming raw footage with cinematic color grading, mood enhancement, and professional finishing touches.",
    driveId: "1ALrDWgKT1dD7N9M4zWDcZSkbYFqv0utL",
    icon: <Palette className="w-6 h-6" />,
    gradient: "from-primary/20 via-accent/10 to-transparent",
  },
];

const EditingService = () => {
  const [activeVideo, setActiveVideo] = useState<FeaturedVideo | null>(null);

  return (
    <Layout>
      <SEOHead
        title="Video Editing Services Dubai"
        description="Professional video editing and post-production services in Dubai — color grading, visual effects, sound design, and cinematic editing for corporate, social media, and brand content."
        keywords="video editing Dubai, post-production Dubai, color grading UAE, visual effects Dubai, video editor, corporate video editing, social media video editing"
        canonicalUrl="/services/editing"
        schemaType="service"
        serviceName="Video Editing & Post-Production"
        serviceDescription="Professional video editing and post-production services including color grading, visual effects, sound design, and cinematic editing in Dubai and UAE."
        breadcrumbs={[{ name: "Services", url: "/services" }, { name: "Video Editing", url: "/services/editing" }]}
      />
      {/* Hero Section */}
      <section className="hero-dark relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Video Editing & Post-production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 tech-grid opacity-20" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp}>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Film className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-heading text-sm uppercase tracking-widest">Service</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Video Editing & <span className="text-gradient">Post-production</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
              Professional video editing with dynamic transitions, effects, and sound design. Transform raw footage into polished, cinematic content.
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

      {/* Featured Video Showcase */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-heading text-sm uppercase tracking-widest">Featured Work</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-4">
              Editing <span className="text-gradient">Showcase</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch my latest video editing projects — cinematic cuts, color grading, and post-production excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                <div className="relative rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/50 transition-all duration-500 bg-card shadow-lg hover:shadow-[0_0_40px_hsl(var(--orange-glow)/0.15)]">
                  {/* Video Thumbnail Area */}
                  <div className="relative aspect-video overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient}`} />
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
                    
                    {/* Decorative grid lines */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/4 left-0 right-0 h-px bg-primary/50" />
                      <div className="absolute top-2/4 left-0 right-0 h-px bg-primary/30" />
                      <div className="absolute top-3/4 left-0 right-0 h-px bg-primary/50" />
                      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-primary/30" />
                      <div className="absolute left-3/4 top-0 bottom-0 w-px bg-primary/30" />
                    </div>

                    {/* Center play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_40px_hsl(var(--orange-glow)/0.5)] group-hover:scale-110 group-hover:shadow-[0_0_60px_hsl(var(--orange-glow)/0.7)] transition-all duration-500">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>

                    {/* Corner badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-primary/30 flex items-center gap-2">
                      <span className="text-primary">{video.icon}</span>
                      <span className="text-xs font-heading uppercase tracking-wider text-primary">{video.subtitle}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {video.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm font-heading uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-4 h-4" />
                      Watch Now
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-heading text-sm uppercase tracking-widest">What You Get</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-6">
                Polished, Platform-Optimized <span className="text-gradient">Videos</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Polished, platform-optimized videos ready for distribution. Professional post-production that brings your vision to life.
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

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center rounded-2xl scanline"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to Polish Your Footage?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's turn your raw footage into cinematic content.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/portfolio?category=videography">
                View My Work
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_60px_hsl(var(--orange-glow)/0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 z-10 p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <iframe
                src={`https://drive.google.com/file/d/${activeVideo.driveId}/preview`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={activeVideo.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default EditingService;
