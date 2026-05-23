import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Layers, Smartphone, Palette, PenTool, Users, Target, Figma, MonitorSmartphone, MousePointerClick, LayoutGrid, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import LayoutWrapper from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import UIUXPortfolioGrid from "@/components/portfolio/UIUXPortfolioGrid";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const services = [
  { icon: PenTool, title: "User Research & Strategy", desc: "Deep-dive into user behavior, competitor analysis, and data-driven personas to build products people actually want." },
  { icon: LayoutGrid, title: "Wireframing & Prototyping", desc: "Low to high-fidelity wireframes and interactive prototypes that validate ideas before a single pixel is designed." },
  { icon: Palette, title: "Visual & UI Design", desc: "Pixel-perfect interfaces with custom design systems, typography, and color palettes tailored to your brand." },
  { icon: MousePointerClick, title: "Interaction Design", desc: "Micro-interactions, animations, and transitions that make your product feel alive and intuitive." },
  { icon: MonitorSmartphone, title: "Responsive Design", desc: "Seamless experiences across desktop, tablet, and mobile — every breakpoint is intentional." },
  { icon: Users, title: "Usability Testing", desc: "Real user testing and heuristic evaluations to identify friction and optimize conversion." },
];

const process = [
  { step: "01", title: "Discovery", desc: "Understand your business goals, target users, and market landscape through stakeholder interviews and competitive research." },
  { step: "02", title: "Wireframing", desc: "Map user flows and create low-fidelity wireframes to establish information architecture and interaction patterns." },
  { step: "03", title: "Visual Design", desc: "Craft high-fidelity UI design with a custom design system — colors, typography, components, and spacing." },
  { step: "04", title: "Prototype & Test", desc: "Build interactive prototypes, conduct usability testing, and iterate until every interaction feels effortless." },
];

const stats = [
  { value: "50+", label: "Screens Designed" },
  { value: "6", label: "Case Studies" },
  { value: "4.8★", label: "Avg. Client Rating" },
  { value: "100%", label: "On-Time Delivery" },
];

const UIUXService = () => {
  return (
    <LayoutWrapper>
      <SEOHead
        title="UI UX Freelance Designer Dubai | App & Web Design"
        description="Ronnie Balonon Jr. is a UI/UX freelance designer in Dubai delivering user research, wireframing, prototyping, and pixel-perfect interfaces for fintech, e-commerce, and SaaS products. Design that converts."
        keywords="UI UX freelance designer Dubai, UX design Dubai, app design Dubai, web design UAE, product design Dubai, Figma Dubai, wireframing, prototyping, mobile app design Dubai, user experience design Dubai"
        canonicalUrl="/services/uiux"
        schemaType="service"
        serviceName="UI/UX Design Services"
        serviceDescription="Expert UI/UX design services for web and mobile applications including user research, wireframing, prototyping, and pixel-perfect interface design in Dubai and UAE."
        breadcrumbs={[{ name: "Services", url: "/services" }, { name: "UI/UX Design", url: "/services/uiux" }]}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-background to-background" />
          <div className="absolute inset-0 tech-grid opacity-20" />
          {/* Floating shapes */}
          <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/4 right-[15%] w-64 h-64 rounded-3xl border border-violet-500/20 bg-violet-500/5 blur-sm" />
          <motion.div animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-1/4 right-[25%] w-40 h-40 rounded-full border border-primary/20 bg-primary/5 blur-sm" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeInUp}>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" /> Back to Services
              </Link>
            </motion.div>
            <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest block mb-4">
              UI/UX Design Services
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              I Design Interfaces <br />People <span className="text-gradient">Love to Use.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              From fintech dashboards to e-commerce platforms — we craft user-centered digital experiences that look stunning and convert. Every pixel has purpose, every interaction tells a story.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-xl font-heading uppercase tracking-wider text-sm">
                <Link to="/contact">
                  Start a Project <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl font-heading uppercase tracking-wider text-sm">
                <Link to="/portfolio?category=uiux">
                  View Case Studies
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-border/50 bg-card/50">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-14 max-w-2xl mx-auto">
              <span className="text-primary font-heading text-xs uppercase tracking-[0.3em] block mb-4">What I Do</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                End-to-End <span className="text-gradient">Design Services</span>
              </h2>
              <p className="text-muted-foreground">
                From initial research to final hand-off — every phase of the design process is handled with precision, strategy, and creative excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div key={i} variants={fadeInUp} className="glass-card rounded-xl p-6 hover-lift group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-heading text-xs uppercase tracking-[0.3em] block mb-4">My Process</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                From Idea to <span className="text-gradient">Pixel-Perfect</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                A proven 4-stage design methodology that ensures every project is grounded in research, validated through testing, and delivered with craftsmanship.
              </p>
              <ul className="space-y-4">
                {["User-centered approach backed by real data", "Iterative design with continuous feedback loops", "Design systems that scale with your product", "Seamless developer handoff with Figma specs"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8 rounded-2xl">
              <div className="space-y-6">
                {process.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="font-heading font-bold text-primary">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="section-padding">
        <div className="container-custom">
          <UIUXPortfolioGrid />
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center">
            <motion.div variants={fadeInUp} className="mb-10">
              <span className="text-primary font-heading text-xs uppercase tracking-[0.3em] block mb-4">Tools & Expertise</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Industry-Standard <span className="text-gradient">Design Tools</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              {["Figma", "Adobe XD", "Protopie", "Maze", "Hotjar", "Adobe Illustrator", "Lottie", "Framer", "Miro", "FigJam"].map(tool => (
                <span key={tool} className="px-5 py-2.5 rounded-full text-sm font-medium text-foreground bg-background border border-border hover:border-primary/50 transition-colors">
                  {tool}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 md:p-12 text-center rounded-2xl">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Have a Product That Needs Better UX?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're launching a new app or redesigning an existing platform — let's create an experience your users will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-xl font-heading uppercase tracking-wider text-sm">
                <Link to="/get-quote">
                  Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl font-heading uppercase tracking-wider text-sm">
                <Link to="/portfolio?category=uiux">
                  Explore All Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </LayoutWrapper>
  );
};

export default UIUXService;
