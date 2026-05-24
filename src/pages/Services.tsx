import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Monitor, Image, Bot, Share2, Camera, Film, CheckCircle2 } from "lucide-react";
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

const services = [
  {
    id: "branding",
    icon: Palette,
    title: "Brand Identity & Visual Design",
    description: "Create cohesive brand identities that resonate with your target audience and establish a powerful market presence.",
    outcomes: [
      "Complete logo design and brand guidelines",
      "Brand strategy and positioning",
      "Visual identity system",
      "Stationery and collateral design",
      "Brand style guide documentation"
    ],
    whatYouGet: "A comprehensive brand package including logo variations, color palettes, typography systems, and usage guidelines."
  },
  {
    id: "uiux",
    icon: Monitor,
    title: "Web UI/UX Design",
    description: "SEO-optimized, responsive landing pages and web interfaces designed for conversions and exceptional user experience.",
    outcomes: [
      "Custom website and app design",
      "SEO-optimized landing pages",
      "Responsive layouts for all devices",
      "User experience optimization",
      "Production-ready design handoff"
    ],
    whatYouGet: "Pixel-perfect, dev-ready designs optimized for search engines and built for conversion."
  },
  {
    id: "graphic",
    icon: Image,
    title: "Graphic Design & Marketing Creatives",
    description: "High-impact visual assets for digital and print marketing that capture attention and drive engagement.",
    outcomes: [
      "Social media graphics and templates",
      "Advertising creatives (digital & print)",
      "Marketing collateral",
      "Infographics and presentations",
      "Email marketing templates"
    ],
    whatYouGet: "Scroll-stopping visuals optimized for each platform, ready for immediate deployment."
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Video Generation & Storyboard to Video",
    description: "Transform static images into cinematic AI-generated videos. Professional AI storyboard creation, image-to-video generation, and marketing automation.",
    outcomes: [
      "AI storyboard from image to video",
      "Cinematic AI video generation",
      "Image-to-video conversion",
      "AI marketing automation",
      "Scalable AI content production"
    ],
    whatYouGet: "A complete AI-powered pipeline â€” from a single image to a living, cinematic video story ready for every platform."
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Management",
    description: "Complete social media management with content planning, creation, and performance optimization.",
    outcomes: [
      "Content calendar and strategy",
      "Post design and copywriting",
      "Community management",
      "Performance reporting",
      "Paid advertising campaigns"
    ],
    whatYouGet: "A fully managed social media presence with measurable engagement growth."
  },
  {
    id: "video",
    icon: Camera,
    title: "Videography & Photography",
    description: "Professional video production and photography services for brands, products, and events.",
    outcomes: [
      "Corporate videography",
      "Product photography",
      "Event coverage",
      "Lifestyle shoots",
      "Behind-the-scenes content"
    ],
    whatYouGet: "High-resolution files, color-graded and ready for marketing use."
  },
  {
    id: "editing",
    icon: Film,
    title: "Video Editing & Post-production",
    description: "Professional video editing with dynamic transitions, effects, and sound design.",
    outcomes: [
      "Cinematic video editing",
      "Color grading and correction",
      "Sound design and mixing",
      "Subtitles and captions",
      "Format optimization"
    ],
    whatYouGet: "Polished, platform-optimized videos ready for distribution."
  }
];

const Services = () => {
  return (
    <Layout>
      <SEOHead 
        title="Freelance Creative Services in Dubai â€” Ronnie Balonon Jr."
        description="Professional freelance designer offering branding, graphic design, UI/UX & web design, motion graphics, video production, and digital marketing. Flexible freelance services with direct communication and faster delivery."
        keywords="freelance advertising services Dubai, freelance branding Dubai, freelance graphic designer Dubai, freelance UI/UX design Dubai, freelance motion graphics Dubai, freelance video production Dubai, creative freelance team Dubai"
        canonicalUrl="/services"
        schemaType="service"
      />
      {/* Hero Section */}
      <section className="hero-dark relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest">
              Freelance Creative Services
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Freelance <span className="text-gradient">Creative Solutions</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
              An independent freelance team delivering professional branding, design, video production, and digital marketing â€” with direct communication, faster turnaround, and personalized attention.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                variants={fadeInUp}
                className="glass-card p-8 md:p-10 rounded-2xl hover-lift scroll-mt-24"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Service Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl font-bold">{service.title}</h2>
                        <p className="text-muted-foreground mt-2">{service.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-heading text-sm uppercase tracking-wider text-primary mb-4">Key Outcomes</h4>
                        <ul className="space-y-2">
                          {service.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-heading text-sm uppercase tracking-wider text-primary mb-4">What You Get</h4>
                        <p className="text-sm text-muted-foreground">{service.whatYouGet}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col justify-center items-center lg:items-end gap-4">
                    <Button variant="hero" asChild>
                      <Link to={`/services/${service.id}`}>
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto rounded-2xl"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Explore My Work
            </h2>
            <p className="text-muted-foreground mb-8">
              Check out my portfolio to see examples of work across all creative disciplines. From branding to motion graphics, each project showcases my commitment to quality and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/portfolio">
                  View Portfolio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;