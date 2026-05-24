import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, Rocket, Eye, TrendingUp, Award, Users, Briefcase, Share2, Camera, Film, Sparkles, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const metrics = [
  { value: "1", label: "Year Experience", icon: Award },
  { value: "20+", label: "Projects Delivered", icon: Briefcase },
  { value: "AI", label: "Powered Workflow", icon: Users },
  { value: "PH→AE", label: "Philippines & Dubai", icon: TrendingUp }
];

const capabilities = [
  {
    icon: Palette,
    title: "Graphic Design & Brand",
    description: "Logos, brand systems, and print-ready collateral — clean, consistent, and ready to deploy."
  },
  {
    icon: Eye,
    title: "UI/UX & Web Design",
    description: "Conversion-focused, responsive interfaces from wireframes to polished, dev-ready handoff."
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Content calendars, scroll-stopping visuals, captions, and community management on every major platform."
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Product, lifestyle, and event shots with a strong sense of light, composition, and post-production."
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Reels, ads, and short brand stories — color-graded, sound-designed, and cut for impact."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Workflow",
    description: "AI tools layered into every stage — from ideation to delivery — for faster, sharper output."
  }
];

const journey = [
  {
    location: "Philippines",
    title: "Where it started",
    description: "Began my design journey working with local startups and small businesses — learning the fundamentals of brand, typography, and clean visual systems."
  },
  {
    location: "Dubai, UAE",
    title: "Where I am now",
    description: "Continuing as a freelance graphic designer in Dubai — working on social media, UI/UX, photography, and video edits for UAE brands, with AI tools layered into every step of my workflow."
  }
];

const SaberBorderCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative group ${className}`}>
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`saber-exp-${Math.random().toString(36).slice(2)}`} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <rect
        x="1" y="1"
        width="calc(100% - 2px)" height="calc(100% - 2px)"
        rx="12" ry="12"
        fill="none"
        stroke="hsl(var(--primary) / 0.3)"
        strokeWidth="1"
      />
      <rect
        x="1" y="1"
        width="calc(100% - 2px)" height="calc(100% - 2px)"
        rx="12" ry="12"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeDasharray="60 300"
        className="animate-[saber-dash_4s_linear_infinite]"
        style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary)))" }}
      />
    </svg>
    {children}
  </div>
);

const Experience = () => {
  return (
    <Layout>
      <SEOHead
        title="Experience — Ronnie Balonon Jr. | Graphic Designer Dubai"
        description="Ronnie Balonon Jr. — 1 year of combined design experience across the Philippines and Dubai. Branding, UI/UX, social, photography, and video editing — powered by AI."
        keywords="freelance designer Dubai, Philippines graphic designer, AI designer UAE, Ronnie Balonon"
        canonicalUrl="/experience"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary font-heading text-sm uppercase tracking-widest rounded-[5px] mb-6">
              My Experience
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6 leading-tight">
              1 Year. <br />
              <span className="text-gradient">Real Client Work.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              I'm Ronnie Balonon — a freelance graphic designer with 1 year of combined experience between the Philippines and Dubai, focused on social media, UI/UX, photography, and video editing, all powered by AI.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="rounded-[5px]" asChild>
                <Link to="/contact">
                  Start Your Project <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-[5px] border-primary/30 hover:bg-primary/10" asChild>
                <Link to="/portfolio">
                  View My Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {metrics.map((metric) => (
              <motion.div key={metric.label} variants={fadeInUp} className="text-center">
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-heading text-4xl md:text-5xl font-bold text-gradient">{metric.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-heading text-sm uppercase tracking-widest">My Mission</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-6">
              Building Brands That <span className="text-gradient">Command Attention</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe every brand deserves to be unforgettable. I pair clean design fundamentals with AI-powered tools to create social posts, websites, photography, and video edits that don't just look good — they actually move the needle. One year in, every project still gets the same hands-on care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-heading text-sm uppercase tracking-widest">What I Do</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">
              My <span className="text-gradient">Core Skills</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {capabilities.map((cap) => (
              <motion.div key={cap.title} variants={fadeInUp}>
                <SaberBorderCard>
                  <div className="glass-card p-8 rounded-xl hover-lift h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <cap.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3">{cap.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
                  </div>
                </SaberBorderCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-heading text-sm uppercase tracking-widest">My Journey</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">
              From the <span className="text-gradient">Philippines to Dubai</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {journey.map((step, index) => (
              <motion.div
                key={step.location}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 pb-12 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-5 h-5 -translate-x-[11px] rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary)/0.5)]" />
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-heading font-bold rounded-[5px] mb-3">
                  <Globe className="w-3.5 h-3.5" /> {step.location}
                </span>
                <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-heading text-sm uppercase tracking-widest">Why Work With Me</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-8">
              What Sets Me <span className="text-gradient">Apart</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { icon: Rocket, title: "Speed & Precision", desc: "Fast turnaround without sacrificing quality — AI-assisted production keeps timelines tight and output sharp." },
              { icon: Eye, title: "Hands-On & Direct", desc: "No middlemen, no handoffs. You talk directly to me, the person designing your work — clearer briefs, faster iterations." },
              { icon: Zap, title: "AI-First Approach", desc: "AI is layered into every part of my workflow — ideation, generation, refinement — so the work ships faster and looks current." }
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <SaberBorderCard>
                  <div className="glass-card p-8 rounded-xl text-center hover-lift h-full">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </SaberBorderCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <SaberBorderCard>
              <div className="glass-card p-10 md:p-16 text-center rounded-2xl">
                <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">
                  Ready to Build Something <span className="text-gradient">Together</span>?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Let's make your brand stand out — sharper visuals, faster turnaround, AI-powered workflow. One designer, fully focused on your project.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="hero" size="lg" className="rounded-[5px]" asChild>
                    <Link to="/contact">
                      Start a Project <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-[5px] border-primary/30 hover:bg-primary/10" asChild>
                    <Link to="/contact">
                      Contact Me
                    </Link>
                  </Button>
                </div>
              </div>
            </SaberBorderCard>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
