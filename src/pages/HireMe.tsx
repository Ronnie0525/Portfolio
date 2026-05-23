import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Award, Users, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import LeadFormModal from "@/components/LeadFormModal";

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const benefits = [
  { icon: Award, title: "1 Year Experience", description: "Fresh perspective with real, delivered client work" },
  { icon: Zap, title: "AI-Powered Workflow", description: "Cutting-edge AI tools for sharper output, faster" },
  { icon: Users, title: "20+ Projects Delivered", description: "Across branding, social, web, photography & video" },
  { icon: Clock, title: "On-Time Delivery", description: "Reliable timelines you can count on" }
];

const packages = [
  { name: "Brand Identity", includes: ["Logo Design", "Brand Guidelines", "Business Cards", "Social Templates"], ideal: "Startups & Rebrands" },
  { name: "Web Design", includes: ["UI/UX Design", "Responsive Layout", "SEO Optimization", "Webflow Development"], ideal: "Businesses & Agencies" },
  { name: "Full Marketing", includes: ["Brand Identity", "Web Design", "Social Media", "AI Automation"], ideal: "Growing Companies" }
];

const process = [
  { step: "01", title: "Discovery", description: "Understand your goals, audience, and vision" },
  { step: "02", title: "Strategy", description: "Develop a tailored creative and marketing plan" },
  { step: "03", title: "Creation", description: "Design and develop your deliverables" },
  { step: "04", title: "Launch", description: "Deploy, optimize, and ensure success" }
];

const faqs = [
  { q: "What's your typical project timeline?", a: "Timelines vary by scope. Brand identity: 2-4 weeks. Web design: 4-8 weeks. Full marketing packages: 6-12 weeks." },
  { q: "Do you work with international clients?", a: "Yes! I work with clients globally while being based in Dubai, UAE." },
  { q: "What's included in your packages?", a: "All packages include source files, revisions, and ongoing support. Specific deliverables depend on the package." },
  { q: "How do we communicate during projects?", a: "Regular updates via WhatsApp, email, or video calls based on your preference." }
];

const HireMe = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <Layout>
      <SEOHead 
        title="Hire Ronnie Balonon Jr. — Freelance Designer Dubai"
        description="Hire Ronnie Balonon Jr.'s freelance designer for your next project. 1 year experience in branding, UI/UX design, motion graphics, video production, and digital marketing. Based in Dubai, serving clients worldwide."
        keywords="hire freelance designer Dubai, hire freelance designers Dubai, freelance branding team Dubai, hire UI/UX designers Dubai"
        canonicalUrl="/hire-me"
        breadcrumbs={[{ name: "Hire Me", url: "/hire-me" }]}
      />
      <LeadFormModal open={isLeadFormOpen} onOpenChange={setIsLeadFormOpen} />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container-custom relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-4xl mx-auto">
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Build Your Brand <span className="text-gradient">With Intelligence</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
              Ready to transform your brand with stunning design and AI-powered marketing? Let's create something extraordinary together.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => setIsLeadFormOpen(true)}>
                <MessageCircle className="w-5 h-5" />
                Start Your Project
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://wa.me/971543763091" target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={fadeInUp} className="glass-card p-6 text-center hover-lift">
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4"><benefit.icon className="w-7 h-7 text-primary" /></div>
                <h3 className="font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-heading text-sm uppercase tracking-widest">Expertise</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">What I <span className="text-gradient">Specialize In</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="glass-card p-8 hover-lift">
                <h3 className="font-heading text-xl font-bold mb-4">{pkg.name}</h3>
                <p className="text-sm text-primary mb-6">Ideal for: {pkg.ideal}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (<li key={item} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" />{item}</li>))}
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/portfolio">View Examples</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-heading text-sm uppercase tracking-widest">Process</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">How I <span className="text-gradient">Work</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4"><span className="font-heading text-xl font-bold text-primary">{step.step}</span></div>
                <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-primary font-heading text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">Common <span className="text-gradient">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="font-heading font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Ready to <span className="text-gradient">Start</span>?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Let's discuss your project and create something amazing together.</p>
          <Button variant="hero" size="xl" onClick={() => setIsLeadFormOpen(true)}>
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HireMe;
