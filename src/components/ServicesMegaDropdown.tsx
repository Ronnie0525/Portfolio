import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Layout, Image, Play, Layers, Box, Sparkles, Share2, Video, Film, Camera, ArrowRight, FileText, GraduationCap } from "lucide-react";

const designServices = [
  { name: "Brand Identity", path: "/services/branding", icon: Palette, description: "Logo, identity & brand systems" },
  { name: "Web UI/UX Design", path: "/services/uiux", icon: Layout, description: "Web & mobile interfaces" },
  { name: "Graphic Design", path: "/services/graphic", icon: Image, description: "Print & digital marketing" },
  { name: "White Label", path: "/services/white-label", icon: Layers, description: "Ready-made rebrandable websites" },
];

const videoServices = [
  { name: "Motion Design", path: "/services/motion", icon: Play, description: "Motion graphics & effects" },
  { name: "2D Animation", path: "/services/2d-animation", icon: Layers, description: "Explainer & educational" },
  { name: "3D Animation", path: "/services/3d-animation", icon: Box, description: "Architectural & product" },
  { name: "AI Video", path: "/services/ai", icon: Sparkles, description: "AI-powered video creation" },
];

const mediaServices = [
  { name: "Social Media", path: "/services/social", icon: Share2, description: "Content & strategy" },
  { name: "Videography", path: "/services/video", icon: Video, description: "Cinematic video production" },
  { name: "Photography", path: "/services/photography", icon: Camera, description: "Professional photo shoots" },
  { name: "Video Editing", path: "/services/editing", icon: Film, description: "Post-production & editing" },
  { name: "Weekend Tutorials", path: "/services/tutorials", icon: GraduationCap, description: "Live creative workshops", isNew: true },
];

interface ServicesMegaDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServiceItem = ({ item, index, onClose, isNew }: { item: any; index: number; onClose: () => void; isNew?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -12 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.025, duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
  >
    <Link
      to={item.path}
      onClick={onClose}
      className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl transition-all duration-300 group relative overflow-hidden hover:bg-white/[0.04]"
    >
      {/* Hover gradient sweep */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/[0.06] via-transparent to-transparent" />
      
      <div className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
        isNew 
          ? 'bg-gradient-to-br from-purple-500/30 to-fuchsia-500/20 group-hover:from-purple-500 group-hover:to-fuchsia-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
          : 'bg-white/[0.04] group-hover:bg-gradient-to-br group-hover:from-purple-500/80 group-hover:to-fuchsia-500/80 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]'
      }`}>
        <item.icon className={`w-4 h-4 transition-all duration-300 ${
          isNew ? 'text-purple-300 group-hover:text-black' : 'text-black/40 group-hover:text-black'
        }`} />
      </div>
      <div className="min-w-0 flex-1 relative z-10">
        <div className="flex items-center gap-2">
          <p className="text-[13px] font-medium text-black/70 group-hover:text-black transition-colors duration-300">{item.name}</p>
          {isNew && (
            <span className="text-[8px] font-bold uppercase tracking-widest bg-gradient-to-r from-purple-500 to-fuchsia-500 text-black px-1.5 py-0.5 rounded-full leading-none">
              NEW
            </span>
          )}
        </div>
        <p className="text-[11px] text-black/25 group-hover:text-black/45 leading-tight transition-colors">{item.description}</p>
      </div>
      <ArrowRight className="w-3 h-3 text-black/0 group-hover:text-black/40 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
    </Link>
  </motion.div>
);

const ServicesMegaDropdown = ({ isOpen, onClose }: ServicesMegaDropdownProps) => {
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
          {/* Outer glow */}
          <div className="relative">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-purple-500/30 via-purple-500/10 to-transparent" />
            <div className="absolute -inset-1 rounded-2xl blur-xl bg-purple-500/10" />
            
            <div className="relative rounded-2xl overflow-hidden w-[960px]" style={{
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

              {/* Content */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-8">
                  {/* Design Column */}
                  <div>
                    <div className="flex items-center gap-2.5 mb-4 px-1">
                      <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 flex items-center justify-center">
                        <Palette className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400/80">Design</span>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/20 to-transparent" />
                    </div>
                    <div className="space-y-0.5">
                      {designServices.map((item, i) => (
                        <ServiceItem key={item.path} item={item} index={i} onClose={onClose} />
                      ))}
                    </div>
                  </div>

                  {/* Video & Animation Column */}
                  <div className="border-x border-white/[0.04] px-4">
                    <div className="flex items-center gap-2.5 mb-4 px-1">
                      <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 flex items-center justify-center">
                        <Play className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400/80">Animation</span>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/20 to-transparent" />
                    </div>
                    <div className="space-y-0.5">
                      {videoServices.map((item, i) => (
                        <ServiceItem key={item.path} item={item} index={i + 4} onClose={onClose} />
                      ))}
                    </div>
                  </div>

                  {/* Media & Production Column */}
                  <div>
                    <div className="flex items-center gap-2.5 mb-4 px-1">
                      <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 flex items-center justify-center">
                        <Camera className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400/80">Media</span>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/20 to-transparent" />
                    </div>
                    <div className="space-y-0.5">
                      {mediaServices.map((item, i) => (
                        <ServiceItem key={item.path} item={item} index={i + 8} onClose={onClose} isNew={(item as any).isNew} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-3 border-t border-white/[0.04]" style={{ background: "rgba(168,85,247,0.03)" }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-[11px] text-black/30">
                    <span><strong className="text-black/60 font-semibold">4</strong> Core Skills</span>
                    <span><strong className="text-black/60 font-semibold">20+</strong> Projects</span>
                    <span><strong className="text-black/60 font-semibold">AI</strong> Powered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link to="/proposals" onClick={onClose} className="flex items-center gap-1.5 text-[11px] font-medium text-black/35 hover:text-black/70 transition-colors">
                      <FileText className="w-3 h-3" />
                      Proposals
                    </Link>
                    <Link
                      to="/services"
                      onClick={onClose}
                      className="flex items-center gap-1.5 text-[11px] font-semibold text-black px-4 py-1.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                      style={{ background: "linear-gradient(135deg, #7B2FBE, #a855f7)" }}
                    >
                      All Services
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicesMegaDropdown;
