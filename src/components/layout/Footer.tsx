import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook, Palette, Layout, Image, Sparkles, Share2, Video, Film, Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AlconLogo from "@/components/AlconLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Brand Identity & Visual Design", path: "/services/branding", icon: Palette },
    { name: "Web UI/UX Design", path: "/services/uiux", icon: Layout },
    { name: "Graphic Design & Marketing", path: "/services/graphic", icon: Image },
    { name: "AI Video", path: "/services/ai", icon: Sparkles },
    { name: "Social Media Management", path: "/services/social", icon: Share2 },
    { name: "Videography", path: "/services/video", icon: Video },
    { name: "Photography", path: "/services/photography", icon: Camera },
    { name: "Video Editing", path: "/services/editing", icon: Film },
  ];

  const portfolio = [
    { name: "Branding", path: "/portfolio?category=branding" },
    { name: "UI/UX Design", path: "/portfolio?category=uiux" },
    { name: "Social Media", path: "/portfolio?category=social" },
    { name: "Videography", path: "/portfolio?category=videography" },
    { name: "Photography", path: "/portfolio?category=photography" },
  ];

  return (
    <footer className="relative" style={{ background: "#ffffff", borderTop: "1px solid rgba(123,47,190,0.15)" }}>
      {/* CTA Banner */}
      <div className="container-custom py-12 border-b border-purple-primary/20">
        <div className="relative overflow-hidden rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, rgba(123,47,190,0.2), rgba(232,121,249,0.05), transparent)" }}>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-black">
                Ready to Make Your Brand Impossible to Ignore?
              </h3>
              <p className="text-black/60 max-w-md">
                Let's create work that performs — clean design, on-brand content, and AI-powered turnaround.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild className="text-black font-mono uppercase tracking-wider" style={{ background: "linear-gradient(135deg, #7B2FBE, #E879F9)" }}>
                <Link to="/contact" className="flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-purple-primary/50 text-black hover:bg-purple-primary/10">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <AlconLogo />
            </Link>
            <p className="text-black/42 mb-6 max-w-sm text-sm leading-relaxed">
              Graphic designer with strong knowledge in Artificial Intelligence, based in Dubai. Social media, UI/UX, photography, and video editing — crafted to make your brand impossible to ignore.
            </p>

            {/* Contact Icons */}
            <div className="flex items-center gap-3">
              <a href="mailto:ronniebalonon1996@gmail.com" className="w-10 h-10 rounded-lg bg-purple-primary/10 flex items-center justify-center hover:bg-purple-primary/20 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5 text-purple-glow" />
              </a>
              <a href="https://wa.me/971543763091" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-purple-primary/10 flex items-center justify-center hover:bg-purple-primary/20 transition-colors" aria-label="WhatsApp">
                <Phone className="w-5 h-5 text-purple-glow" />
              </a>
              <a href="https://www.instagram.com/ronnieeee25/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-purple-primary/10 flex items-center justify-center hover:bg-purple-primary/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-purple-glow" />
              </a>
              <a href="https://www.facebook.com/ronnieeee25" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-purple-primary/10 flex items-center justify-center hover:bg-purple-primary/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-purple-glow" />
              </a>
              <a href="https://www.tiktok.com/@ronnie.balonon" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-purple-primary/10 flex items-center justify-center hover:bg-purple-primary/20 transition-colors" aria-label="TikTok">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-purple-glow" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.81 20.1a6.34 6.34 0 0 0 10.86-4.43V9.4a8.16 8.16 0 0 0 4.77 1.52V7.5a4.85 4.85 0 0 1-1.85-.81Z"/></svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-6 text-purple-glow flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-primary" />
              Services
            </h4>
            <ul className="space-y-2">
              {services.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center gap-2 text-sm text-black/42 hover:text-black transition-colors group">
                    <link.icon className="w-3.5 h-3.5 text-purple-mid/50 group-hover:text-purple-glow transition-colors" />
                    <span className="animated-underline">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-6 text-purple-glow flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-primary" />
              Portfolio
            </h4>
            <ul className="space-y-2">
              {portfolio.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-black/42 hover:text-black transition-colors animated-underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/portfolio" className="inline-flex items-center gap-1 mt-4 text-xs text-purple-glow hover:underline">
              View All Work
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-primary/15" style={{ background: "rgba(255,255,255,0.5)" }}>
        <div className="container-custom py-6">
          <div className="flex justify-center items-center">
            <p className="text-sm text-black/42">
              © {currentYear} Ronnie Balonon Jr. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
