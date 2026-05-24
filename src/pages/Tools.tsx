import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Image, PenTool, Sparkles, Clapperboard, Box, Globe, Bot, MessageSquare, Layers, Sun, Cpu, Film, Wand2, Paintbrush, Monitor, Music, FileCheck, Flame, Puzzle, Palette, Camera, Zap, Star, CircuitBoard, Lightbulb, Rocket, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } };

const softwareTools = [
  { name: "Adobe Photoshop", icon: Image, desc: "Photo retouching, compositing & digital art creation" },
  { name: "Adobe Illustrator", icon: PenTool, desc: "Vector graphics, logos & scalable brand assets" },
  { name: "Adobe Premiere Pro", icon: Clapperboard, desc: "Professional video editing & post-production" },
  { name: "Adobe InDesign", icon: Layers, desc: "Print layouts, editorial & multi-page documents" },
  { name: "Adobe Lightroom", icon: Sun, desc: "Photo color grading & batch processing" },
  { name: "Adobe Audition", icon: Music, desc: "Audio editing, mixing & sound design" },
  { name: "Adobe Encoder", icon: Film, desc: "Media encoding & format optimization" },
  { name: "Adobe Acrobat", icon: FileCheck, desc: "PDF creation, forms & document workflows" },
  { name: "Adobe XD", icon: Monitor, desc: "UI/UX prototyping & interactive design" },
  { name: "Figma", icon: Paintbrush, desc: "Collaborative UI design & design systems" },
  { name: "Visual Studio", icon: Monitor, desc: "Code editing, debugging & development" },
];

const aiPlatforms = [
  { name: "ChatGPT", icon: MessageSquare, desc: "AI copywriting, strategy & content generation" },
  { name: "Claude AI", icon: Bot, desc: "Advanced reasoning & long-form content" },
  { name: "Midjourney", icon: Camera, desc: "AI image generation & concept art" },
  { name: "Leonardo AI", icon: Wand2, desc: "AI-powered creative visuals & textures" },
  { name: "Adobe Firefly", icon: Flame, desc: "Generative AI within Creative Cloud" },
  { name: "Runway ML", icon: Rocket, desc: "AI video generation & editing" },
  { name: "Kling AI", icon: Zap, desc: "AI video synthesis & motion generation" },
  { name: "Sora", icon: Film, desc: "Text-to-video AI by OpenAI" },
  { name: "Dreaminia AI", icon: Star, desc: "AI-powered dream-like visual creation" },
  { name: "Magnific AI", icon: Lightbulb, desc: "AI image upscaling & enhancement" },
  { name: "Envato Elements AI", icon: CircuitBoard, desc: "AI-assisted creative asset library" },
  { name: "Freepik AI", icon: Palette, desc: "AI image & vector generation" },
  { name: "Cursor AI", icon: Heart, desc: "AI-powered code editor & development" },
];

const categories = [
  { id: "all", label: "All Tools" },
  { id: "software", label: "Professional Software" },
  { id: "ai", label: "AI Platforms" },
];

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedTools = activeCategory === "software" ? softwareTools :
    activeCategory === "ai" ? aiPlatforms :
    [...softwareTools, ...aiPlatforms];

  return (
    <Layout>
      <SEOHead
        title="Design & AI Tools Stack | Expert Creative Technology"
        description="Explore the professional design software and AI platforms I use for branding, social media, UI/UX, photography, and video editing. Adobe Creative Suite, Figma, Midjourney, ChatGPT & more."
        keywords="designer tools, AI design tools, Adobe Creative Suite, Figma, Midjourney, ChatGPT, creative technology stack, design automation"
        canonicalUrl="/tools"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-4xl mx-auto">
            <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest">Creative Technology Stack</motion.span>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              The Arsenal Behind <span className="text-gradient">Every Pixel</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Great design isn't just talent — it's mastering the right tools. From industry-standard software like Adobe Creative Suite and Figma to revolutionary AI platforms like Midjourney and ChatGPT, every project is powered by a carefully curated technology ecosystem built for speed, precision, and creative excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/50">
            {[
              { value: "18+", label: "Professional Software" },
              { value: "13+", label: "AI Platforms" },
              { value: "10+", label: "Years of Mastery" },
              { value: "100%", label: "Workflow Efficiency" },
            ].map((stat) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="py-8 text-center">
                <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-heading text-sm uppercase tracking-widest">Design & Production</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">Professional Software That Defines Industry Standards</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every brand deserves pixel-perfect execution. With hands-on experience across the Adobe Creative Suite and Figma, I deliver designs that don't just look stunning — they perform. From high-fidelity UI prototypes in Figma to clean print layouts in InDesign, each tool is chosen with purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's a brand identity in Illustrator, a polished video edit in Premiere Pro, or a lifestyle shoot graded in Lightroom — mastery of these tools means faster turnaround, higher quality, and designs that scale across every medium.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-3 gap-3">
              {softwareTools.slice(0, 9).map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-4 text-center hover-lift group cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium text-xs">{tool.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Full Software Grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {softwareTools.map((tool) => (
              <motion.div key={tool.name} variants={fadeInUp} className="glass-card p-5 flex items-start gap-4 hover-lift group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <tool.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm">{tool.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* AI Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1 grid grid-cols-3 gap-3">
              {aiPlatforms.slice(0, 9).map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-4 text-center hover-lift group cursor-default relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                      <tool.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-medium text-xs">{tool.name}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <span className="text-primary font-heading text-sm uppercase tracking-widest">Artificial Intelligence</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">AI-Powered Creativity That Accelerates Results</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The future of design is AI-augmented — and I'm already there. By integrating platforms like Midjourney for rapid concept visualization, ChatGPT for strategic copywriting, and Runway ML for AI-driven video production, every project benefits from faster ideation, smarter iteration, and output that would take traditional workflows 10x longer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                AI don't replace creativity — it supercharges it. From generating mood boards in seconds with Leonardo AI to upscaling imagery with Magnific AI, these tools allow me to explore more ideas, refine faster, and deliver concepts that push creative boundaries while staying on budget and on schedule.
              </p>
            </motion.div>
          </div>

          {/* Full AI Grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiPlatforms.map((tool) => (
              <motion.div key={tool.name} variants={fadeInUp} className="glass-card p-5 flex items-start gap-4 hover-lift group relative overflow-hidden">
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/0 transition-all duration-500" />
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <tool.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm">{tool.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-heading text-sm uppercase tracking-widest">Why It Matters</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">Tools Are Only as Powerful as the Expert Behind Them</h2>
            <p className="text-muted-foreground leading-relaxed">
              Owning a camera doesn't make you a photographer. Similarly, having access to 30+ professional tools means nothing without deep expertise in each one. Every tool in this stack has been battle-tested across hundreds of real-world projects — from startup MVPs to enterprise brand systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Speed Without Sacrifice", desc: "AI-accelerated workflows cut production time by up to 60% without compromising on quality or creative vision." },
              { title: "End-to-End Capability", desc: "From initial concept sketch to final deployed website — one designer, one seamless pipeline, zero handoff friction." },
              { title: "Future-Ready Approach", desc: "Continuously adopting emerging tools and AI platforms ensures your brand stays ahead of design trends, not behind them." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center">
                <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Ready to Work With a Tech-Powered Creative Expert?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop settling for designers who use one tool. Get a creative partner who commands an entire technology ecosystem — delivering faster, smarter, and more impactful results for your brand.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/hire-me">Let's Build Something Extraordinary <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Tools;
