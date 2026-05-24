import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Megaphone,
  LayoutTemplate,
  Camera,
  Clapperboard,
  MapPin,
  Bot,
  Zap,
  Mail,
  MessageCircle,
  Quote,
  Facebook,
  Instagram,
  Download,
} from "lucide-react";

import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import HeroParticles from "@/components/HeroParticles";
import PortfolioSection from "@/components/PortfolioSection";
import { HERO_BG } from "@/lib/storage";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.81 20.1a6.34 6.34 0 0 0 10.86-4.43V9.4a8.16 8.16 0 0 0 4.77 1.52V7.5a4.85 4.85 0 0 1-1.85-.81Z" />
  </svg>
);

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 },
  }),
};

const skills = [
  {
    icon: Megaphone,
    title: "Social Media Management",
    body: "Content strategy, calendars, captions, and on-brand visuals that grow audiences across every major platform.",
    href: "/services/social",
  },
  {
    icon: LayoutTemplate,
    title: "UI/UX & Web Design",
    body: "Clean, conversion-focused interfaces and full website designs — from wireframes to polished, responsive layouts.",
    href: "/services/uiux",
  },
  {
    icon: Camera,
    title: "Photography",
    body: "Product, lifestyle, and event photography with a strong eye for light, composition, and post-production.",
    href: "/services/photography",
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    body: "Reels, ads, and brand stories — color-graded, sound-designed, and cut for maximum impact.",
    href: "/services/editing",
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    // Reveal any scroll-reveal elements that exist after navigation
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <SEOHead
        title="Ronnie Balonon Jr. | Graphic Designer & AI Creative — Dubai"
        description="Ronnie Balonon Jr. — Dubai-based graphic designer with strong AI knowledge. Social media, UI/UX & web design, photography, and video editing."
      />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center overflow-hidden noise-overlay scanline"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden
        />
        {/* Subtle readability overlay — keeps the image visible */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/40 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
          aria-hidden
        />
        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-60">
          <HeroParticles />
        </div>
        {/* Floating glow orbs — softer so the image isn't washed out */}
        <div
          aria-hidden
          className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-[#7B2FBE]/15 blur-[120px]"
          style={{ animation: "hero-orb-1 8s ease-in-out infinite alternate" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -right-10 w-[420px] h-[420px] rounded-full bg-[#E879F9]/15 blur-[120px]"
          style={{ animation: "hero-orb-2 10s ease-in-out infinite alternate" }}
        />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="container-custom relative z-10 py-20"
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 backdrop-blur"
          >
            <MapPin className="w-4 h-4 text-[#E879F9]" />
            <span className="label-style text-muted-foreground">
              Based in Dubai, UAE
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-6 max-w-5xl text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05]"
          >
            Hi, I'm <span className="text-gradient">Ronnie Balonon</span>
            <br />
            Graphic Designer <span className="text-glow">powered by AI.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground"
          >
            I blend strong design fundamentals with cutting-edge AI tools to craft
            social media, UI/UX, photography, and video work that gets noticed —
            and gets results.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href={`${import.meta.env.BASE_URL}Ronnie_Balonon_CV.pdf`}
              download="Ronnie_Balonon_CV.pdf"
              className="cta-style group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7B2FBE] to-[#E879F9] px-7 py-4 text-white hover:opacity-90 transition-all glow-purple hover:scale-[1.02] min-w-[180px]"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </a>
            <Link
              to="/contact"
              className="cta-style group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-4 hover:border-[#E879F9]/60 hover:bg-card transition-all backdrop-blur min-w-[180px]"
            >
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Hire me
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-14 inline-flex items-center gap-2 text-[#E879F9]"
          >
            <Bot className="w-4 h-4" />
            <span className="label-style">Strong knowledge in Artificial Intelligence</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="flex flex-col items-center gap-2 opacity-60">
            <span className="label-style text-muted-foreground">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#E879F9] to-transparent" />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section-padding gradient-section relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#7B2FBE]/10 blur-[120px]"
        />
        <div className="container-custom relative">
          <div data-reveal="fade-up" className="max-w-2xl">
            <span className="label-style text-[#E879F9]">What I do</span>
            <h2 className="mt-3">
              Skills & <span className="text-gradient">services</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Four disciplines, one creative direction — designed to make your brand
              look sharper and move faster.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {skills.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="h-full"
              >
                <Link
                  to={s.href}
                  className="glass-card hover-lift p-7 group flex flex-col h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B2FBE] to-[#E879F9] flex items-center justify-center glow-purple-sm group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-tight">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground text-base flex-1">{s.body}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-[#E879F9] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PORTFOLIO (existing rich component) */}
      <PortfolioSection />

      {/* ABOUT */}
      <section className="section-padding relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#E879F9]/10 blur-[140px]"
        />
        <div className="container-custom grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <span className="label-style text-[#E879F9]">About</span>
            <h2 className="mt-3">
              Creative work, <br />
              <span className="text-gradient">with an AI edge.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/ronnieeee25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-border bg-card/60 flex items-center justify-center hover:border-[#E879F9]/60 hover:text-[#E879F9] hover:scale-110 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ronnieeee25/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-border bg-card/60 flex items-center justify-center hover:border-[#E879F9]/60 hover:text-[#E879F9] hover:scale-110 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@ronnie.balonon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-11 h-11 rounded-full border border-border bg-card/60 flex items-center justify-center hover:border-[#E879F9]/60 hover:text-[#E879F9] hover:scale-110 transition-all"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-lg text-muted-foreground"
          >
            <div className="glass-card p-6 relative">
              <Quote className="w-8 h-8 text-[#E879F9]/60 mb-3" />
              <p className="text-foreground text-xl leading-relaxed">
                "I'm a Dubai-based graphic designer with strong knowledge in
                Artificial Intelligence. I help brands and creators ship work
                that's not just beautiful — it's strategic and built for today's
                fast-moving platforms."
              </p>
            </div>
            <p>
              From scroll-stopping social posts and full website designs to
              high-end photography and video edits, I bring a multidisciplinary
              skill set to every project — and use AI to push the quality higher
              and the turnaround faster.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {[
                { k: "1", v: "Year experience" },
                { k: "20+", v: "Projects delivered" },
                { k: "AI", v: "Powered workflow" },
                { k: "PH → AE", v: "Philippines & Dubai" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.v}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="glass-card p-4 hover-lift flex flex-col justify-center h-[96px]"
                >
                  <div className="text-2xl font-bold text-gradient whitespace-nowrap leading-tight">
                    {stat.k}
                  </div>
                  <div className="label-style text-muted-foreground mt-1 leading-tight">
                    {stat.v}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                to="/experience"
                className="cta-style inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 hover:border-[#E879F9]/60 transition-colors"
              >
                <Zap className="w-4 h-4 text-[#E879F9]" /> My experience
              </Link>
              <Link
                to="/tools"
                className="cta-style inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 hover:border-[#E879F9]/60 transition-colors"
              >
                <Bot className="w-4 h-4 text-[#E879F9]" /> Tools I use
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CONTACT CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card relative overflow-hidden p-8 md:p-14 lg:p-20">
            <div
              aria-hidden
              className="absolute -top-32 -right-20 w-[400px] h-[400px] rounded-full bg-[#7B2FBE]/25 blur-[120px]"
            />
            <div
              aria-hidden
              className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-[#E879F9]/20 blur-[120px]"
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="label-style text-[#E879F9]">Get in touch</span>
                <h2 className="mt-3">
                  Let's build <br />
                  <span className="text-gradient">something great.</span>
                </h2>
                <p className="mt-5 text-lg text-muted-foreground max-w-md">
                  Have a project in mind, or just want to say hi? I'm always open
                  to new collaborations — reach me directly on any of these
                  channels.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-4"
              >
                <a
                  href="mailto:ronniebalonon1996@gmail.com"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card/60 p-5 hover:border-[#E879F9]/60 hover:bg-card transition-all"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B2FBE] to-[#E879F9] flex items-center justify-center flex-shrink-0 group-hover:rotate-3 transition-transform">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="label-style text-muted-foreground">Email</div>
                      <div className="font-medium truncate">
                        ronniebalonon1996@gmail.com
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[#E879F9] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </a>

                <a
                  href="https://wa.me/971543763091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card/60 p-5 hover:border-[#E879F9]/60 hover:bg-card transition-all"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B2FBE] to-[#E879F9] flex items-center justify-center flex-shrink-0 group-hover:rotate-3 transition-transform">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="label-style text-muted-foreground">
                        WhatsApp
                      </div>
                      <div className="font-medium">+971 54 376 3091</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[#E879F9] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
