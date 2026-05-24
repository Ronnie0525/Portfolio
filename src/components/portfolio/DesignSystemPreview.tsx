import { motion } from "framer-motion";

interface DesignSystemPreviewProps {
  colors: { name: string; hex: string }[];
  fonts: string[];
  accentColor: string;
}

const DesignSystemPreview = ({ colors, fonts, accentColor }: DesignSystemPreviewProps) => (
  <div className="space-y-8">
    <div className="text-center space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] font-bold" style={{ color: accentColor }}>Design System</p>
      <h2 className="font-heading text-2xl md:text-3xl font-bold">Components & Tokens</h2>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/[0.06] backdrop-blur-xl p-8 space-y-8"
      style={{ background: `linear-gradient(160deg, ${accentColor}04, rgba(255,255,255,0.95))` }}
    >
      {/* Color Palette */}
      <div>
        <div className="text-sm font-bold mb-4 text-[#B0B0B8]">Color Palette</div>
        <div className="flex flex-wrap gap-4">
          {colors.map(c => (
            <div key={c.hex} className="text-center space-y-2">
              <div className="w-14 h-14 rounded-xl border border-white/[0.06]" style={{ background: c.hex }} />
              <div className="text-[10px] text-[#B0B0B8]">{c.name}</div>
              <div className="text-[9px] text-black/30 font-mono">{c.hex}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div>
        <div className="text-sm font-bold mb-4 text-[#B0B0B8]">Typography</div>
        <div className="space-y-3">
          {fonts.map(f => (
            <div key={f} className="flex items-baseline gap-4">
              <span className="text-[10px] uppercase tracking-widest text-black/30 w-20">{f}</span>
              <span className="text-lg font-bold" style={{ fontFamily: f }}>The quick brown fox</span>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div>
        <div className="text-sm font-bold mb-4 text-[#B0B0B8]">Button Styles</div>
        <div className="flex flex-wrap gap-3">
          <div className="px-5 py-2.5 rounded-xl text-xs font-bold text-black" style={{ background: accentColor }}>Primary</div>
          <div className="px-5 py-2.5 rounded-xl text-xs font-bold border border-white/10 text-black/70">Secondary</div>
          <div className="px-5 py-2.5 rounded-xl text-xs font-bold text-black/50 hover:text-black/70">Ghost</div>
        </div>
      </div>
    </motion.div>
  </div>
);

export default DesignSystemPreview;
