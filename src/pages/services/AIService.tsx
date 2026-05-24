import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, CheckCircle2, ArrowLeft, Play, Sparkles, ImageIcon, Film, Wand2, Layers, Zap, BookOpen, X, Video } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import heroImage from "@/assets/services/ai-hero.jpg";
import aiVideoThumb from "@/assets/portfolio/ai-video-thumb.jpg";
import aiVideoThumb2 from "@/assets/portfolio/ai-video-thumb-2.jpg";
import aiVideoThumb3 from "@/assets/portfolio/ai-video-thumb-3.jpg";
import aiVideoThumb4 from "@/assets/portfolio/ai-video-thumb-4.jpg";
import aiVideoThumb5 from "@/assets/portfolio/ai-video-thumb-5.jpg";
import aiVideoThumb6 from "@/assets/portfolio/ai-video-thumb-6.jpg";
import aiVideoThumb7 from "@/assets/portfolio/ai-video-thumb-7.jpg";
import aiVideoThumbProj1 from "@/assets/portfolio/ai-video-thumb-proj1.jpg";
import aiVideoThumbProj2 from "@/assets/portfolio/ai-video-thumb-proj2.jpg";
import aiVideoThumb8 from "@/assets/portfolio/ai-video-thumb-8.jpg";
import aiVideoThumbCryptoA from "@/assets/portfolio/ai-video-thumb-crypto-a.jpg";
import aiVideoThumbCryptoB from "@/assets/portfolio/ai-video-thumb-crypto-b.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const storyboardSteps = [
  {
    step: "01",
    icon: ImageIcon,
    title: "Upload Your Image",
    description: "Start with a single photo, illustration, or concept art. My AI analyzes composition, depth, and subject matter to understand your creative vision.",
    highlight: "Any image becomes the first frame of your story"
  },
  {
    step: "02",
    icon: BookOpen,
    title: "Craft Your Storyboard",
    description: "Define scenes, transitions, and narrative flow. My AI storyboard generator maps out your visual story with professional pacing and cinematic structure.",
    highlight: "AI-powered scene planning & shot composition"
  },
  {
    step: "03",
    icon: Wand2,
    title: "AI Brings It to Life",
    description: "Watch as artificial intelligence transforms static images into fluid, cinematic motion. Characters move, cameras pan, and your story unfolds in stunning detail.",
    highlight: "Image-to-video AI generation with cinematic quality"
  },
  {
    step: "04",
    icon: Film,
    title: "Professional Output",
    description: "Receive broadcast-ready AI-generated video content optimized for social media, advertising, presentations, and brand storytelling campaigns.",
    highlight: "Ready for YouTube, Instagram, TikTok & ads"
  }
];

const capabilities = [
  {
    icon: Layers,
    title: "AI Storyboard Creation",
    description: "Transform concepts into structured visual narratives with AI-powered storyboarding that plans every scene, angle, and transition."
  },
  {
    icon: ImageIcon,
    title: "Image-to-Video Generation",
    description: "Convert static images into dynamic, living video content. Product photos become 3D showcases. Portraits become cinematic moments."
  },
  {
    icon: Film,
    title: "AI Video Production",
    description: "Full-scale video production powered by generative AI — from explainer videos to brand stories, produced in hours instead of weeks."
  },
  {
    icon: Wand2,
    title: "AI Content Automation",
    description: "Automate repetitive content creation. Generate variations, localize campaigns, and scale your video marketing effortlessly."
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Data-driven AI marketing systems that optimize targeting, personalize campaigns, and maximize ROI on autopilot."
  },
  {
    icon: Bot,
    title: "Custom AI Solutions",
    description: "Bespoke AI tools and platforms built for your business — chatbots, recommendation engines, predictive analytics, and more."
  }
];

const outcomes = [
  "AI storyboard from image to video pipeline",
  "Cinematic AI video generation for brands",
  "Automated social media video content at scale",
  "AI-powered marketing campaign automation",
  "Image-to-video conversion with professional quality",
  "Smart audience targeting & conversion optimization",
  "AI content generation for multi-platform distribution",
  "Performance analytics & real-time AI insights"
];

const process = [
  { step: "01", title: "Discovery & Vision", description: "I deep-dive into your brand, audience, and goals to craft a tailored AI content strategy" },
  { step: "02", title: "Storyboard & Script", description: "AI-assisted storyboarding maps out your visual narrative with precision and creative flair" },
  { step: "03", title: "AI Generation", description: "Cutting-edge generative AI transforms your storyboard into cinematic video content" },
  { step: "04", title: "Refine & Deliver", description: "Professional post-production polish, format optimization, and multi-platform delivery" }
];

const AIService = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{ title: string; driveId: string } | null>(null);

  return (
    <Layout>
      <SEOHead
        title="AI Video Generation & Storyboard to Video Dubai"
        description="Professional AI video production, image-to-video generation, and AI storyboard creation in Dubai. Transform static images into cinematic AI-generated videos for marketing, social media & brand storytelling."
        keywords="AI video generation Dubai, image to video AI, AI storyboard, AI marketing automation, generative AI video production, AI content creation UAE, storyboard to video"
        canonicalUrl="/services/ai"
        schemaType="service"
        serviceName="AI Video Generation & Storyboard"
        serviceDescription="Professional AI video production and storyboard-to-video creation services using cutting-edge generative AI technology in Dubai and UAE."
        breadcrumbs={[{ name: "Services", url: "/services" }, { name: "AI Video", url: "/services/ai" }]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="AI Video Generation & Storyboard to Video Production Dubai" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 tech-grid opacity-20" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeInUp}>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-heading text-sm uppercase tracking-widest">AI-Powered Creative</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              From Image to <span className="text-gradient">Living Video</span> — AI Storyboard Magic
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-4">
              Turn any image into a cinematic AI-generated video. I build professional storyboards that come alive through generative AI — creating stunning brand stories, marketing content, and social media videos that captivate audiences.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-base text-muted-foreground/80 mb-8">
              AI video production · Image-to-video generation · Storyboard creation · Marketing automation
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/hire-me">
                  Start Your AI Project
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

      {/* AI Video Sample */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-heading text-xs uppercase tracking-[0.3em]">See It In Action</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              AI-Generated <span className="text-gradient">Video Sample</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This video was created using AI — from a single image to a fully animated, cinematic sequence. No traditional filming. No complex editing. Just AI-powered storytelling.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--orange-glow)/0.3)]">
              <div className="aspect-video bg-card relative">
                {showVideo ? (
                  <iframe
                    src="https://drive.google.com/file/d/1-VKAf2VtExNlIiKuCzu8EVgYc2XEZbIC/preview"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="AI Generated Storyboard to Video Sample"
                  />
                ) : (
                  <button onClick={() => setShowVideo(true)} className="w-full h-full relative group cursor-pointer">
                    <img src={aiVideoThumb} alt="AI Video Generation Demo - Image to Video" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-500 flex items-center justify-center">
                      <motion.div className="relative" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                        <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_30px_hsl(var(--orange-glow)/0.5)] group-hover:shadow-[0_0_50px_hsl(var(--orange-glow)/0.7)] transition-shadow">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </div>
                        <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping" />
                      </motion.div>
                    </div>
                  </button>
                )}
              </div>
              <div className="p-5 bg-card/80 backdrop-blur-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm">AI Storyboard → Video Demo</h3>
                    <p className="text-xs text-muted-foreground">{showVideo ? "Now playing" : "Click to watch the AI magic"}</p>
                  </div>
                </div>
                {!showVideo && (
                  <button onClick={() => setShowVideo(true)} className="flex items-center gap-2 text-primary font-heading text-sm font-semibold hover:gap-3 transition-all">
                    Watch Now <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two AI Video Showcases */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-primary font-heading text-sm uppercase tracking-widest">More AI Videos</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-4">
              AI Video <span className="text-gradient">Showcase</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Click to watch these AI-generated videos directly on this page.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { title: "AI Video Project 1", driveId: "1RPe7OKJa3H6Pym6A4l0jOLwhRWqr-IYl", thumb: aiVideoThumbProj1 },
              { title: "AI Video Project 2", driveId: "1IqWKt-GraiGZA4boK_jqpekUazUJpFHN", thumb: aiVideoThumbProj2 },
              { title: "AI Cinematic Storyboard Video", driveId: "1UTqDjIBS5gO-A3M8Vlbq_5iReb8QgKBl", thumb: aiVideoThumb2 },
              { title: "AI Motion & Visual Storytelling", driveId: "1VdKxuaLvsKwztPrCLvRPKsX2O9SS2SP5", thumb: aiVideoThumb3 },
              { title: "AI Neural Network Animation", driveId: "1y6_U2gZzDKOW5rV1rA1AtBJT-EXsrg9o", thumb: aiVideoThumb4 },
              { title: "AI Storyboard Reel Production", driveId: "1H97SvZrt3o4wcFqgMsh-plTu7nyeDWJx", thumb: aiVideoThumb5 },
              { title: "AI Cinematic Light Trail Video", driveId: "1_mo7JOBLlKpGQgvyGGdhCKlcJl9MkPaa", thumb: aiVideoThumb6 },
              { title: "AI Motion Design Showcase", driveId: "1chbrT9lVa08_gk88JH3SlNUVyy25S3de", thumb: aiVideoThumb7 },
              { title: "AI Creative Video Reel", driveId: "14XahtquMBzZ3c7lgYKQgGswzBMZeE8DN", thumb: aiVideoThumb8 },
              { title: "AI Crypto Platform A", driveId: "1PzPxR_lZzu2uD9pftgvoIxEys-_MfIj-", thumb: aiVideoThumbCryptoA },
              { title: "AI Crypto Platform B", driveId: "1PStGsFhAvjI5CXbR4KCMZb6U4ITpSr24", thumb: aiVideoThumbCryptoB },
            ].map((video, index) => (
              <motion.div
                key={video.driveId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-video border border-primary/10 hover:border-primary/40 transition-all duration-300 bg-background">
                  <img src={video.thumb} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-all duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <motion.div className="relative" whileHover={{ scale: 1.1 }}>
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.4)] group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-300">
                        <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping opacity-0 group-hover:opacity-100" />
                    </motion.div>
                    <span className="font-heading text-sm text-muted-foreground group-hover:text-foreground transition-colors">{video.title}</span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Video className="w-5 h-5 text-primary/60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.15)]"
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

      {/* Storyboard Process — The Hero Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-primary font-heading text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              From Still Image to <span className="text-gradient">Cinematic Story</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Every great video starts with a single image. My AI storyboard pipeline transforms your static visuals into breathtaking, living narratives — frame by frame, scene by scene.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storyboardSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass-card p-6 rounded-2xl relative group hover-lift"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-heading text-3xl font-bold text-primary/20">{item.step}</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="text-xs text-primary font-heading font-semibold bg-primary/5 rounded-lg px-3 py-2">
                  ✦ {item.highlight}
                </div>
                {index < storyboardSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-primary font-heading text-sm uppercase tracking-widest">AI Capabilities</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-6">
              Everything AI Can Do <span className="text-gradient">For Your Brand</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From automated storyboard creation to full-scale AI video production — I deliver cutting-edge generative AI solutions that revolutionize how brands create content.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get + Process */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-heading text-sm uppercase tracking-widest">Deliverables</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-6">
                What You <span className="text-gradient">Get</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                A complete AI-powered content production system — from storyboard to finished video, optimized for every platform and audience.
              </p>
              <ul className="space-y-3">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8 rounded-2xl">
              <h3 className="font-heading text-xl font-bold mb-6">My 4-Step Process</h3>
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

      {/* Why AI Video */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-heading text-sm uppercase tracking-widest">Why AI Video</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-6">
                The Future of <span className="text-gradient">Content Creation</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: "10×", label: "Faster Production", desc: "What takes weeks with traditional video takes hours with AI" },
                { stat: "70%", label: "Cost Reduction", desc: "No crews, no studios — just intelligent automation" },
                { stat: "∞", label: "Scalable Content", desc: "Generate unlimited variations for A/B testing and localization" }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="font-heading text-5xl font-bold text-gradient mb-2">{item.stat}</div>
                  <h3 className="font-heading font-bold mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center rounded-2xl scanline"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to Turn Your Images Into <span className="text-gradient">Living Stories</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create AI-powered storyboards and cinematic videos that captivate your audience. From a single image to a full brand story — the future of content starts here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/hire-me">
                  Start Your AI Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/ai-lab">
                  Try AI Lab Free
                  <Sparkles className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AIService;
