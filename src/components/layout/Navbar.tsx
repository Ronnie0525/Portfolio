import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Mail, Phone, Sparkles, Briefcase, Cpu, Wrench, User, Palette, Layout, Image, Play, Layers, Box, Share2, Video, Film, Camera, Blocks, Bot, Church, Hammer, Hexagon, Leaf, Shield, CreditCard, TrendingUp, FileText, Coins, Building2, GraduationCap, type LucideIcon } from "lucide-react";
import AlconLogo from "@/components/AlconLogo";
import PortfolioDropdown from "@/components/PortfolioDropdown";
import ServicesMegaDropdown from "@/components/ServicesMegaDropdown";
import DigitalPlatformMegaDropdown from "@/components/DigitalPlatformMegaDropdown";

interface ExternalItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavItem {
  name: string;
  path: string;
  isMegaServices?: boolean;
  isPortfolio?: boolean;
  isMegaPlatform?: boolean;
  dropdown?: { name: string; path: string; icon: LucideIcon }[];
  externalDropdown?: ExternalItem[];
}

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio", isPortfolio: true },
  {
    name: "Profile",
    path: "/about",
    dropdown: [
      { name: "About", path: "/about", icon: User },
      { name: "Experience", path: "/experience", icon: Briefcase },
      { name: "Tools", path: "/tools", icon: Wrench },
      { name: "Blog", path: "/blog", icon: FileText }
    ]
  },
  {
    name: "Client Web Project",
    path: "/client-projects",
    externalDropdown: [
      { name: "Malath Investment", url: "https://www.malathinvestment.com", icon: TrendingUp },
      { name: "Global Harvest", url: "https://www.globalharvest.online/", icon: Leaf },
      { name: "Tina Port", url: "https://www.tinaramos.online/", icon: Palette },
      { name: "UHUD", url: "https://www.uhud.online", icon: Building2 }
    ] as ExternalItem[]
  }
];

const mobileServiceItems = [
  { name: "Brand Identity & Visual Design", path: "/services/branding", icon: Palette },
  { name: "Web UI/UX Design", path: "/services/uiux", icon: Layout },
  { name: "Graphic Design & Marketing", path: "/services/graphic", icon: Image },
  { name: "AI Video", path: "/services/ai", icon: Sparkles },
  { name: "Social Media Management", path: "/services/social", icon: Share2 },
  { name: "Videography", path: "/services/video", icon: Video },
  { name: "Photography", path: "/services/photography", icon: Camera },
  { name: "Video Editing", path: "/services/editing", icon: Film }
];

const mobilePlatformItems = [
  { name: "UIForge", url: "https://www.uiforge.site/", icon: Blocks },
  { name: "WorshipPlatform", url: "https://www.vineyardchrist.com/", icon: Church },
  { name: "Buildflow", url: "https://www.buildflow-tech.com", icon: Hammer },
  { name: "Pixela", url: "https://www.pixela-ai.com", icon: Hexagon },
  { name: "Global Harvest", url: "https://www.globalharvest.online/", icon: Leaf },
  { name: "ForgeCrypto", url: "https://www.forgecrypto.online", icon: Coins }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAllMega = () => {
    setPortfolioDropdownOpen(false);
    setServicesDropdownOpen(false);
    setPlatformDropdownOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000]">
      {/* Top accent line */}
      <div className="h-[1px] w-full" style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(123,47,190,0.6) 20%, rgba(232,121,249,0.8) 50%, rgba(123,47,190,0.6) 80%, transparent 100%)"
      }} />

      <div className="overflow-visible transition-all duration-500" style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.6)",
        backdropFilter: "blur(30px) saturate(200%)",
        borderBottom: scrolled ? "1px solid rgba(123,47,190,0.15)" : "1px solid transparent"
      }}>
        <div className="container-custom">
          <div className="flex items-center justify-between" style={{ height: 72 }}>
            {/* Logo */}
            <Link to="/" className="flex items-center group" aria-label="Ronnie Balonon Jr. - Home">
              <div className="relative">
                <AlconLogo animate={true} />
                {/* Hover glow behind logo */}
                <div className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: "radial-gradient(circle, rgba(123,47,190,0.15) 0%, transparent 70%)"
                }} />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5 relative">
              {navItems.map(item => (
                <div 
                  key={item.name} 
                  className={item.isPortfolio || item.isMegaServices || item.isMegaPlatform ? "static" : "relative"}
                  onMouseEnter={() => {
                    closeAllMega();
                    if (item.isPortfolio) setPortfolioDropdownOpen(true);
                    else if (item.isMegaServices) setServicesDropdownOpen(true);
                    else if (item.isMegaPlatform) setPlatformDropdownOpen(true);
                    else if (item.dropdown || item.externalDropdown) setActiveDropdown(item.name);
                  }} 
                  onMouseLeave={() => {
                    if (!item.isPortfolio && !item.isMegaServices && !item.isMegaPlatform) {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <Link 
                    to={item.path} 
                    className={`relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 flex items-center gap-1.5 rounded-lg group ${
                      isActive(item.path) 
                        ? "text-black" 
                        : activeDropdown === item.name || (item.isPortfolio && portfolioDropdownOpen) || (item.isMegaServices && servicesDropdownOpen) || (item.isMegaPlatform && platformDropdownOpen) 
                          ? "text-black" 
                          : "text-black/55 hover:text-black"
                    }`}
                  >
                    {/* Active indicator dot */}
                    {isActive(item.path) && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-accent" />
                    )}
                    <span>{item.name}</span>
                    {(item.dropdown || item.isPortfolio || item.isMegaServices || item.isMegaPlatform || item.externalDropdown) && (
                      <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>

                  {/* Standard Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: -4 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -4 }} 
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} 
                        className="absolute top-full left-0 pt-2 w-64 z-[100]"
                      >
                        <div className="relative">
                          <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-purple-500/25 via-purple-500/8 to-transparent" />
                          <div className="relative p-2 rounded-xl overflow-hidden" style={{ 
                            background: "rgba(255,255,255,0.95)", 
                            backdropFilter: "blur(40px) saturate(180%)",
                          }}>
                            <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
                              <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
                            </div>
                            {item.dropdown.map((subItem, i) => (
                              <motion.div key={subItem.name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03, duration: 0.2 }}>
                                <Link 
                                  to={subItem.path} 
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-black/60 hover:text-black rounded-lg transition-all duration-300 group relative overflow-hidden hover:bg-black/5"
                                >
                                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/[0.06] via-transparent to-transparent" />
                                  {subItem.icon && (
                                    <div className="w-7 h-7 rounded-md bg-black/5 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500/80 group-hover:to-fuchsia-500/80 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all duration-300">
                                      <subItem.icon className="w-3.5 h-3.5 text-black/70 group-hover:text-black transition-colors duration-300" />
                                    </div>
                                  )}
                                  <span className="relative z-10">{subItem.name}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* External Dropdown Menu */}
                  <AnimatePresence>
                    {item.externalDropdown && activeDropdown === item.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: -4 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -4 }} 
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} 
                        className="absolute top-full left-0 pt-2 w-60 z-[100]"
                      >
                        <div className="relative">
                          <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-purple-500/25 via-purple-500/8 to-transparent" />
                          <div className="relative p-2 rounded-xl overflow-hidden" style={{ 
                            background: "rgba(255,255,255,0.95)", 
                            backdropFilter: "blur(40px) saturate(180%)",
                          }}>
                            <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
                              <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
                            </div>
                            {item.externalDropdown.map((subItem: ExternalItem, i: number) => (
                              <motion.div key={subItem.name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03, duration: 0.2 }}>
                                <a 
                                  href={subItem.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-black/60 hover:text-black rounded-lg transition-all duration-300 group relative overflow-hidden hover:bg-black/5"
                                >
                                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/[0.06] via-transparent to-transparent" />
                                  <div className="w-7 h-7 rounded-md bg-black/5 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500/80 group-hover:to-fuchsia-500/80 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all duration-300">
                                    <subItem.icon className="w-3.5 h-3.5 text-black/70 group-hover:text-black transition-colors duration-300" />
                                  </div>
                                  <span className="relative z-10">{subItem.name}</span>
                                </a>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mega Dropdowns */}
                  {item.isPortfolio && (
                    <PortfolioDropdown isOpen={portfolioDropdownOpen} onClose={() => setPortfolioDropdownOpen(false)} />
                  )}
                  {item.isMegaServices && (
                    <ServicesMegaDropdown isOpen={servicesDropdownOpen} onClose={() => setServicesDropdownOpen(false)} />
                  )}
                  {item.isMegaPlatform && (
                    <DigitalPlatformMegaDropdown isOpen={platformDropdownOpen} onClose={() => setPlatformDropdownOpen(false)} />
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="relative flex items-center gap-2 px-5 py-2 rounded-[5px] font-medium text-sm text-black overflow-hidden group transition-all duration-300 hover:scale-[1.03]"
                style={{ 
                  background: "rgba(123,47,190,0.15)",
                }}
              >
                {/* Saber border animation */}
                <span className="absolute inset-0 rounded-[5px] overflow-hidden pointer-events-none">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="198" height="38" rx="4" ry="4" fill="none" stroke="url(#navSaberGrad)" strokeWidth="1.5"
                      strokeDasharray="60 140"
                      style={{ animation: "saber-dash 3s linear infinite" }}
                    />
                    <defs>
                      <linearGradient id="navSaberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="30%" stopColor="#7B2FBE" />
                        <stop offset="50%" stopColor="#E879F9" />
                        <stop offset="70%" stopColor="#7B2FBE" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute inset-0 rounded-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ boxShadow: "0 0 20px rgba(123,47,190,0.4), inset 0 0 15px rgba(123,47,190,0.1)" }} />
                <Sparkles className="w-3.5 h-3.5 relative z-10 text-purple-300" />
                <span className="relative z-10">Contact</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden relative p-2 text-black" aria-label="Toggle menu">
              <div className="relative z-10">
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }} 
            className="lg:hidden" style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(30px)", borderBottom: "1px solid rgba(123,47,190,0.12)" }}
          >
            <div className="container-custom py-6 mx-[10px]">
              {/* Mobile Brand Header */}
              <div className="flex items-center gap-4 pb-6 mb-6 border-b border-black/15">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-primary to-purple-accent flex items-center justify-center">
                  <span className="font-heading font-bold text-black text-base">R</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-base text-black">Ronnie Balonon Jr.</p>
                  <p className="text-xs text-black/70">Designer · AI · Dubai</p>
                </div>
              </div>

              {/* Mobile Nav Links */}
              <nav className="space-y-1 mb-6" aria-label="Mobile navigation">
                {/* Services - Collapsible */}
                <div>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === "mobile-services" ? null : "mobile-services")}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-semibold text-black hover:bg-black/5 transition-colors"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 text-black/70 transition-transform duration-200 ${activeDropdown === "mobile-services" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "mobile-services" && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <Link to="/services" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-6 py-2.5 text-sm text-purple-glow font-medium hover:bg-black/5 transition-all">
                          View All Services
                        </Link>
                        {mobileServiceItems.map(item => (
                          <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-6 py-2.5 text-sm text-black/80 hover:text-black hover:bg-black/5 transition-all">
                            <item.icon className="w-4 h-4 text-purple-mid/40" />
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Portfolio */}
                <Link to="/portfolio" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-base font-semibold text-black hover:bg-black/5 transition-colors">
                  Portfolio
                </Link>

                {/* Company */}
                {navItems.filter(i => i.name === "Company").map(item => (
                  <div key={item.name}>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === "mobile-expertise" ? null : "mobile-expertise")}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-semibold text-black hover:bg-black/5 transition-colors"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 text-black/70 transition-transform duration-200 ${activeDropdown === "mobile-expertise" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "mobile-expertise" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                          {item.dropdown?.map(subItem => (
                            <Link key={subItem.name} to={subItem.path} onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-6 py-2.5 text-sm text-black/80 hover:text-black hover:bg-black/5 transition-all">
                              <subItem.icon className="w-4 h-4 text-purple-mid/40" />
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Digital Platforms */}
                <div>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === "mobile-platforms" ? null : "mobile-platforms")}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-semibold text-black hover:bg-black/5 transition-colors"
                  >
                    Digital Platform
                    <ChevronDown className={`w-4 h-4 text-black/70 transition-transform duration-200 ${activeDropdown === "mobile-platforms" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "mobile-platforms" && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <Link to="/digital-platforms" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-6 py-2.5 text-sm text-purple-glow font-medium hover:bg-black/5 transition-all">
                          View All Platforms
                        </Link>
                        {mobilePlatformItems.map(item => (
                          <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-6 py-2.5 text-sm text-black/80 hover:text-black hover:bg-black/5 transition-all">
                            <item.icon className="w-4 h-4 text-purple-mid/40" />
                            {item.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Client Web Projects */}
                {navItems.filter(i => i.name === "Client Web Project").map(item => (
                  <div key={item.name}>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === "mobile-clients" ? null : "mobile-clients")}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-semibold text-black hover:bg-black/5 transition-colors"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 text-black/70 transition-transform duration-200 ${activeDropdown === "mobile-clients" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "mobile-clients" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                          {item.externalDropdown?.map((subItem: ExternalItem) => (
                            <a key={subItem.name} href={subItem.url} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-6 py-2.5 text-sm text-black/80 hover:text-black hover:bg-black/5 transition-all">
                              <subItem.icon className="w-4 h-4 text-purple-mid/40" />
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Mobile CTAs */}
              <div className="space-y-3 pt-4 border-t border-black/15">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="relative flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-medium text-sm text-black overflow-hidden group transition-all duration-300" style={{ background: "linear-gradient(135deg, #7B2FBE, #E879F9)" }}>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Sparkles className="w-4 h-4" />
                  Contact
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-black/15 space-y-2">
                <a href="mailto:ronniebalonon1996@gmail.com" className="flex items-center gap-2 text-sm text-black/70 hover:text-purple-glow">
                  <Mail className="w-4 h-4" />
                  ronniebalonon1996@gmail.com
                </a>
                <a href="https://wa.me/971543763091" className="flex items-center gap-2 text-sm text-black/70 hover:text-purple-glow">
                  <Phone className="w-4 h-4" />
                  +971 54 376 3091
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
