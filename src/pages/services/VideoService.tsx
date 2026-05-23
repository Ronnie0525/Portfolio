import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Camera, CheckCircle2, ArrowLeft, Play, X, Heart, Calendar, Shirt, PartyPopper, Video, Sparkles, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import heroImage from "@/assets/services/video-hero.jpg";

import weddingThumb from "@/assets/portfolio/videography/wedding-thumb.jpg";
import event1Thumb from "@/assets/portfolio/videography/event1-thumb.jpg";
import rampThumb from "@/assets/portfolio/videography/ramp-thumb.jpg";
import galaThumb from "@/assets/portfolio/videography/gala-thumb.jpg";
import celebrationThumb from "@/assets/portfolio/videography/celebration-thumb.jpg";

interface VideoProject {
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  driveId: string;
  icon: React.ReactNode;
  gradient: string;
}

const videoProjects: VideoProject[] = [
  {
    title: "Wedding Film",
    subtitle: "Cinematic",
    description: "A beautifully captured cinematic wedding film with emotional storytelling, elegant transitions, and timeless moments.",
    thumbnail: weddingThumb,
    driveId: "1YpsnJBB2Ypx7Fub-3x8PvLwBHpAMi6L-",
    icon: <Heart className="w-6 h-6" />,
    gradient: "from-primary/30 via-primary/10 to-transparent",
  },
  {
    title: "Corporate Event",
    subtitle: "Corporate",
    description: "Professional corporate event coverage with dynamic angles, highlight reels, and polished post-production.",
    thumbnail: event1Thumb,
    driveId: "1A-0MdYbHS3LTDUESRhbe16mPL-P6_tvE",
    icon: <Calendar className="w-6 h-6" />,
    gradient: "from-accent/30 via-accent/10 to-transparent",
  },
  {
    title: "Fashion Ramp",
    subtitle: "Fashion",
    description: "High-energy fashion show coverage capturing the runway's drama, designer looks, and backstage atmosphere.",
    thumbnail: rampThumb,
    driveId: "1Eg-XqQTTfnJfBH1y8b_q49lEbC1p-Ugk",
    icon: <Shirt className="w-6 h-6" />,
    gradient: "from-primary/20 via-accent/10 to-transparent",
  },
  {
    title: "Gala Night",
    subtitle: "Event",
    description: "Elegant gala event coverage showcasing the venue, entertainment, and memorable moments of the evening.",
    thumbnail: galaThumb,
    driveId: "1BqKmNvT5R8X3Pn4LsWdH7jFgC2vY9mZx",
    icon: <PartyPopper className="w-6 h-6" />,
    gradient: "from-primary/30 via-primary/10 to-transparent",
  },
  {
    title: "Celebration Event",
    subtitle: "Special Occasion",
    description: "Vibrant special occasion coverage with candid moments, speeches, and joyful celebrations beautifully filmed.",
    thumbnail: celebrationThumb,
    driveId: "1CdLnOvU6S9Y4Qo5MtXeI8kGhD3wZ0nAy",
    icon: <Video className="w-6 h-6" />,
    gradient: "from-accent/30 via-primary/10 to-transparent",
  },
  {
    title: "Cinematic Showreel",
    subtitle: "Showreel",
    description: "A dynamic compilation showcasing cinematic transitions, color grading, and storytelling through professional videography.",
    thumbnail: rampThumb,
    driveId: "1EYHOJ8i1yfPCPvkBuGRY93zS-S3WR7-j",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-primary/30 via-primary/10 to-transparent",
  },
  {
    title: "Behind the Scenes",
    subtitle: "BTS",
    description: "An intimate look at the production process — capturing the crew, setups, and raw energy behind every shoot.",
    thumbnail: event1Thumb,
    driveId: "1EYHOJ8i1yfPCPvkBuGRY93zS-S3WR7-j",
    icon: <Film className="w-6 h-6" />,
    gradient: "from-accent/30 via-accent/10 to-transparent",
  },
  {
    title: "Highlight Reel",
    subtitle: "Best Moments",
    description: "A curated highlight reel of the best videography moments — vibrant colors, cinematic angles, and unforgettable scenes.",
    thumbnail: celebrationThumb,
    driveId: "1ALrDWgKT1dD7N9M4zWDcZSkbYFqv0utL",
    icon: <Play className="w-6 h-6" />,
    gradient: "from-primary/20 via-accent/10 to-transparent",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const outcomes = [
  "Corporate videography",
  "Event coverage",
  "Promotional videos",
  "Behind-the-scenes content",
  "Documentary-style films"
];

const process = [
  { step: "01", title: "Pre-Production", description: "Planning, scripting, and shot list preparation" },
  { step: "02", title: "Production", description: "Professional shooting with cinema-grade equipment" },
  { step: "03", title: "Post-Production", description: "Editing, color grading, and sound design" },
  { step: "04", title: "Delivery", description: "Final files in all required formats" }
];

const VideoService = () => {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);

  return (
    <Layout>
      <SEOHead
        title="Video Production Dubai | Corporate & Brand Videos"
        description="Professional video production services in Dubai — corporate videos, brand films, event coverage, wedding videography, and fashion films. Cinematic storytelling from concept to final cut by Ronnie Balonon Jr.."
        keywords="video production Dubai, corporate video Dubai, brand video Dubai, videography Dubai, wedding videography UAE, event video production, cinematic video Dubai, freelance designer Dubai"
        canonicalUrl="/services/video"
        schemaType="service"
        serviceName="Videography & Video Production"
        serviceDescription="Professional videography and video production services including corporate videos, event coverage, weddings, fashion films, and brand storytelling in Dubai and UAE."
        breadcrumbs={[{ name: "Services", url: "/services" }, { name: "Videography", url: "/services/video" }]}
      />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Videography" className="w-full h-full object-cover" />
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
              Professional <span className="text-gradient">Videography</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
              Professional video production services for brands, products, and events. Capture your story with cinematic quality.
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

      {/* What You Get */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-heading text-sm uppercase tracking-widest">What You Get</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-6">
                High-Resolution <span className="text-gradient">Content</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                High-resolution files, color-graded and ready for marketing use. Professional quality that elevates your brand.
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

      {/* Featured Video Showcase */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary font-heading text-sm uppercase tracking-widest">Featured Work</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-4">
              Video <span className="text-gradient">Showcase</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch my latest videography projects — cinematic films, event coverage, and professional production.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoProjects.map((video, index) => (
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
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-background/30 group-hover:bg-background/50 transition-colors duration-300" />

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

      {/* Video Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <button onClick={() => setActiveVideo(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10">
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://drive.google.com/file/d/${activeVideo.driveId}/preview`}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 md:p-12 text-center rounded-2xl scanline">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to Capture Your Story?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create stunning video content that showcases your brand.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/hire-me">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default VideoService;
