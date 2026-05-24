import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Blocks, Bot, Church, Hammer, Hexagon, Leaf, ArrowRight, ExternalLink, Layers, Coins, Rocket } from "lucide-react";

const platforms = [
  { name: "UIForge", url: "https://www.uiforge.site/", icon: Blocks, description: "UI Component Library" },
  { name: "WorshipPlatform", url: "https://www.vineyardchrist.com/", icon: Church, description: "Church Management System" },
  { name: "Buildflow", url: "https://www.buildflow-tech.com", icon: Hammer, description: "Construction Tech Platform" },
  { name: "Pixela", url: "https://www.pixela-ai.com", icon: Hexagon, description: "AI Vector & Animation Generator" },
  { name: "Global Harvest", url: "https://www.globalharvest.online/", icon: Leaf, description: "Agriculture & Sustainability" },
  { name: "ForgeSuite", url: "https://www.forgesuite.online", icon: Layers, description: "All-in-One Business Suite" },
  { name: "ForgeCrypto", url: "https://www.forgecrypto.online", icon: Coins, description: "Crypto & Web3 Platform" },
];

interface DigitalPlatformMegaDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const DigitalPlatformMegaDropdown = ({ isOpen, onClose }: DigitalPlatformMegaDropdownProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed left-0 right-0 top-[73px] pt-2 z-[1001] flex justify-center px-4"
          onMouseLeave={onClose}
        >
          <div className="relative">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-purple-500/30 via-purple-500/10 to-transparent" />
            <div className="absolute -inset-1 rounded-2xl blur-xl bg-purple-500/10" />

            <div className="relative rounded-2xl overflow-hidden w-[740px]" style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(40px) saturate(180%)",
            }}>
              {/* Animated top border */}
              <div className="h-[1px] w-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(90deg, transparent, #a855f7, #e879f9, #a855f7, transparent)" }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
              </div>

              <div className="p-5">
                <div className="grid grid-cols-2 gap-x-6 gap-y-0.5">
                  {platforms.map((platform, index) => (
                    <motion.div
                      key={platform.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.025, duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition-all duration-300 group relative overflow-hidden hover:bg-white/[0.04]"
                      >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/[0.06] via-transparent to-transparent" />
                        <div className="relative w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center transition-all duration-300 flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-purple-500/80 group-hover:to-fuchsia-500/80 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                          <platform.icon className="w-4 h-4 text-black/40 group-hover:text-black transition-all duration-300" />
                        </div>
                        <div className="min-w-0 flex-1 relative z-10">
                          <p className="text-[13px] font-medium text-black/70 group-hover:text-black transition-colors duration-300">{platform.name}</p>
                          <p className="text-[11px] text-black/25 group-hover:text-black/45 leading-tight transition-colors">{platform.description}</p>
                        </div>
                        <ExternalLink className="w-3 h-3 text-black/0 group-hover:text-black/40 transition-all duration-300" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-3 border-t border-white/[0.04]" style={{ background: "rgba(168,85,247,0.03)" }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-[11px] text-black/30">
                    <span className="flex items-center gap-1.5"><Rocket className="w-3 h-3 text-purple-400" /><strong className="text-black/60 font-semibold">8+</strong> Platforms</span>
                    <span><strong className="text-black/60 font-semibold">Full-Stack</strong> Development</span>
                  </div>
                  <Link 
                    to="/digital-platforms" 
                    onClick={onClose}
                    className="flex items-center gap-1.5 text-[11px] font-semibold text-black px-4 py-1.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    style={{ background: "linear-gradient(135deg, #7B2FBE, #a855f7)" }}
                  >
                    View All Platforms
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DigitalPlatformMegaDropdown;
