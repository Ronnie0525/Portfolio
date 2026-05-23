import { motion } from "framer-motion";

// Client logos
import tadweer from "@/assets/clients/tadweer.png";
import eagle from "@/assets/clients/eagle.png";
import tornado from "@/assets/clients/tornado.png";
import adnoc from "@/assets/clients/adnoc.png";
import excelpixels from "@/assets/clients/excelpixels.png";
import svg from "@/assets/clients/svg.png";
import cabsy from "@/assets/clients/cabsy.png";
import nluminaire from "@/assets/clients/nluminaire.png";
import shams from "@/assets/clients/shams.png";
import elecaas from "@/assets/clients/elecaas.png";
import environmentAgency from "@/assets/clients/environment-agency.png";
import addedLogo1 from "@/assets/clients/added-logo-1.png";
import addedLogo2 from "@/assets/clients/added-logo-2.png";
import itsec from "@/assets/clients/itsec.png";
import tradebank from "@/assets/clients/tradebank.png";
import verifx from "@/assets/clients/verifx.png";

const clients = [
  { name: "Tadweer", logo: tadweer },
  { name: "Eagle Environment", logo: eagle },
  { name: "Tornado Group", logo: tornado },
  { name: "ADNOC Ruwais", logo: adnoc },
  { name: "Excel Pixels", logo: excelpixels },
  { name: "SVG", logo: svg },
  { name: "Cabsy", logo: cabsy },
  { name: "nLuminaire", logo: nluminaire },
  { name: "Shams Power", logo: shams },
  { name: "Elecaas", logo: elecaas },
  { name: "Environment Agency Abu Dhabi", logo: environmentAgency },
  { name: "Added Logo 1", logo: addedLogo1 },
  { name: "Added Logo 2", logo: addedLogo2 },
  { name: "TradeBank", logo: tradebank },
  { name: "Verifx", logo: verifx },
];

const ClientLogos = () => {
  // Duplicate array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 relative overflow-hidden bg-background">
      {/* Cybersecurity grid overlay */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Top and bottom glowing borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container-custom relative z-10 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-primary font-heading text-sm uppercase tracking-widest">Trusted By</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">
            Clients I've <span className="text-gradient">Worked With</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite scrolling container */}
      <div className="relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-10" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling track - using CSS animation for seamless loop */}
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll-left gap-8 md:gap-12">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="relative flex-shrink-0 group"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-4 bg-primary/0 group-hover:bg-primary/10 rounded-xl blur-xl transition-all duration-500" />
                
                {/* Logo container with cyber styling */}
                <div className="relative glass-card px-8 py-6 rounded-xl border border-primary/10 group-hover:border-primary/30 transition-all duration-300 min-w-[180px] md:min-w-[220px] flex items-center justify-center h-24">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/40" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/40" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/40" />
                  
                  {/* Logo */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 max-w-[160px] md:max-w-[180px] w-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                  
                  {/* Hover scan line */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl overflow-hidden">
                    <div className="absolute left-0 right-0 h-px bg-primary/50 animate-scan-line" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex animate-scroll-left gap-8 md:gap-12" aria-hidden="true">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-duplicate-${index}`}
                className="relative flex-shrink-0 group"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-4 bg-primary/0 group-hover:bg-primary/10 rounded-xl blur-xl transition-all duration-500" />
                
                {/* Logo container with cyber styling */}
                <div className="relative glass-card px-8 py-6 rounded-xl border border-primary/10 group-hover:border-primary/30 transition-all duration-300 min-w-[180px] md:min-w-[220px] flex items-center justify-center h-24">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/40" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/40" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/40" />
                  
                  {/* Logo */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 max-w-[160px] md:max-w-[180px] w-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                  
                  {/* Hover scan line */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl overflow-hidden">
                    <div className="absolute left-0 right-0 h-px bg-primary/50 animate-scan-line" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-4 w-1 h-8 bg-primary/30 -translate-y-1/2" />
      <div className="absolute top-1/2 right-4 w-1 h-8 bg-primary/30 -translate-y-1/2" />
    </section>
  );
};

export default ClientLogos;
