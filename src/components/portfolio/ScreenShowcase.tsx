import { motion } from "framer-motion";
import { Monitor, Smartphone } from "lucide-react";

interface ScreenShowcaseProps {
  screens: string[];
  accentColor: string;
  projectName: string;
}

const ScreenShowcase = ({ screens, accentColor, projectName }: ScreenShowcaseProps) => (
  <div className="space-y-8">
    <div className="text-center space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] font-bold" style={{ color: accentColor }}>The Showcase</p>
      <h2 className="font-heading text-2xl md:text-3xl font-bold">High-Fidelity Screens</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {screens.map((screen, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="group rounded-2xl border border-black/15 overflow-hidden backdrop-blur-xl hover:scale-[1.02] transition-transform duration-500"
          style={{ background: `linear-gradient(160deg, ${accentColor}06, rgba(255,255,255,0.95))` }}
        >
          {/* Screen mockup area */}
          <div className="aspect-[4/3] relative" style={{ background: `linear-gradient(135deg, ${accentColor}10, ${accentColor}05)` }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {i % 2 === 0 ? (
                <Monitor className="w-12 h-12 text-black/55" />
              ) : (
                <Smartphone className="w-10 h-10 text-black/55" />
              )}
            </div>
            {/* Device frame decoration */}
            <div className="absolute inset-3 rounded-lg border border-black/10" />
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-black/[0.06]" />
          </div>
          <div className="p-4">
            <div className="text-sm font-medium leading-snug">{screen}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ScreenShowcase;
