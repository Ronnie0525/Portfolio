import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:ronniebalonon1996@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    toast({ title: "Opening email client...", description: "Your message is being prepared." });
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Ronnie Balonon Jr. Dubai"
        description="Get in touch with Ronnie Balonon Jr. for branding, UI/UX design, motion graphics, video production, or any creative project. Based in Dubai, serving clients worldwide."
        keywords="contact Ronnie Balonon Jr., freelance designer Dubai contact, hire freelance designer Dubai, branding inquiry UAE"
        canonicalUrl="/contact"
        schemaType="contact"
        breadcrumbs={[{ name: "Contact", url: "/contact" }]}
      />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="text-center max-w-4xl mx-auto">
            <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest">Get In Touch</motion.span>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Let's <span className="text-gradient">Connect</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Ready to start your project? Let's discuss how I can help bring your vision to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <a href="mailto:ronniebalonon1996@gmail.com" className="flex items-center gap-4 glass-card p-4 rounded-xl hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">Email</p><p className="font-medium">ronniebalonon1996@gmail.com</p></div>
                </a>
                <a href="https://wa.me/971543763091" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass-card p-4 rounded-xl hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Phone className="w-5 h-5 text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">WhatsApp</p><p className="font-medium">+971 54 376 3091</p></div>
                </a>
                <div className="flex items-center gap-4 glass-card p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">Location</p><p className="font-medium">Dubai, UAE</p></div>
                </div>
              </div>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="https://wa.me/971543763091" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" />Message Me on WhatsApp</a>
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="font-heading text-2xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-background/50" />
                    <Input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-background/50" />
                  </div>
                  <Input placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required className="bg-background/50" />
                  <Textarea placeholder="Your Message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required className="bg-background/50" />
                  <Button type="submit" variant="hero" size="lg" className="w-full"><Send className="w-5 h-5" />Send Message</Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;