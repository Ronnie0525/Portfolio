import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Shield, CreditCard, TrendingUp, Leaf, Palette, Globe, CheckCircle2, Users, Award, Zap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const clientProjects = [
  {
    name: "Malath Investment",
    tagline: "Premium Investment Platform",
    url: "https://www.malathinvestment.com",
    icon: TrendingUp,
    gradient: "from-blue-500 via-indigo-400 to-purple-500",
    glowColor: "rgba(99,102,241,0.35)",
    description: "Created a sophisticated digital presence for Malath Investment — a premium investment and financial advisory firm. The design communicates trust, exclusivity, and financial expertise through every interaction.",
    services: ["Web Design & Development", "UI/UX Design", "Brand Positioning", "Visual Identity"],
    impact: "Elevated brand perception and positioned Malath as a trusted name in the investment sector.",
  },
  {
    name: "Global Harvest",
    tagline: "Global Agriculture & Harvest Platform",
    url: "https://www.globalharvest.online/",
    icon: Leaf,
    gradient: "from-lime-400 via-green-400 to-lime-500",
    glowColor: "rgba(132,204,22,0.35)",
    description: "Designed and developed a modern digital platform for Global Harvest — connecting agricultural communities worldwide with tools for farm management, crop tracking, and marketplace connectivity.",
    services: ["Web Design & Development", "UI/UX Design", "Platform Strategy", "Brand Identity"],
    impact: "Empowering global agriculture stakeholders with a cutting-edge digital platform that bridges communities and markets.",
  },
  {
    name: "Tina Port",
    tagline: "Creative Portfolio & Personal Brand",
    url: "https://www.tinaramos.online/",
    icon: Palette,
    gradient: "from-rose-500 via-pink-400 to-fuchsia-500",
    glowColor: "rgba(244,63,94,0.35)",
    description: "Crafted a stunning personal portfolio website for Tina Ramos — a creative professional showcasing her work with an elegant, modern design. The site blends aesthetics with functionality to leave a lasting impression on visitors and potential clients.",
    services: ["Web Design & Development", "UI/UX Design", "Brand Identity", "Content Strategy"],
    impact: "Established a compelling online presence that elevates Tina's personal brand and attracts new creative opportunities.",
  },
  {
    name: "UHUD",
    tagline: "Premium Real Estate & Property Development",
    url: "https://www.uhud.online",
    icon: Building2,
    gradient: "from-amber-700 via-yellow-700 to-amber-800",
    glowColor: "rgba(180,130,70,0.35)",
    description: "Designed and developed a sophisticated web presence for UHUD — a premium real estate and property development company. The platform embodies desert-inspired elegance with warm, earthy tones that reflect the brand's identity and regional heritage.",
    services: ["Web Design & Development", "UI/UX Design", "Brand Identity", "Digital Strategy"],
    impact: "Delivered a high-end digital experience that captures UHUD's premium positioning and drives qualified property inquiries.",
  },
];

const stats = [
  { icon: Globe, value: "6+", label: "Live Client Websites" },
  { icon: Users, value: "100K+", label: "Monthly Visitors Served" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
  { icon: Zap, value: "< 3s", label: "Avg. Load Time" },
];

const ClientProjects = () => {
  return (
    <Layout>
      <SEOHead
        title="Client Web Projects — Live Websites Built"
        description="Explore live client websites designed and developed by Ronnie Balonon Jr. From cybersecurity brands to investment platforms — high-impact web solutions for businesses worldwide."
        keywords="web design portfolio Dubai, web development agency, client websites, Ronnie Balonon Jr. projects, web design Dubai"
        canonicalUrl="/client-projects"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest">
              Client Web Projects
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Websites That <span className="text-gradient">Drive Results</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every project is a live, revenue-generating website — designed to dominate search, convert visitors, and establish market authority.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding">
        <div className="container-custom space-y-16">
          {clientProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden relative group"
            >
              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700`}
              />

              <div className="p-8 md:p-12 lg:p-14 relative z-10">
                <div className="grid lg:grid-cols-5 gap-10 items-start">
                  {/* Left — Info */}
                  <div className="lg:col-span-3 space-y-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
                        style={{ boxShadow: `0 0 30px ${project.glowColor}` }}
                      >
                        <project.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold">{project.name}</h2>
                        <p className="text-sm text-muted-foreground">{project.tagline}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-primary mb-3">Services Delivered</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right — Impact + CTA */}
                  <div className="lg:col-span-2 flex flex-col justify-between gap-8">
                    <div className="glass-card rounded-xl p-6 border border-primary/10">
                      <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-primary mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Impact
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.impact}
                      </p>
                    </div>

                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm
                        bg-gradient-to-r ${project.gradient} text-black
                        shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300`}
                      style={{ boxShadow: `0 0 25px ${project.glowColor}` }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Visit Live Website
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto rounded-2xl"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Your Website?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's create a high-performance website that positions your brand, converts visitors, and drives real business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/hire-me">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">
                  View Full Portfolio
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ClientProjects;
