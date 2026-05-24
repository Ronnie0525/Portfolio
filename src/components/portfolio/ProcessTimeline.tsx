import { motion } from "framer-motion";
import { Search, PenTool, Palette, Layers, TestTube, Send } from "lucide-react";

interface ProcessTimelineProps {
  accentColor: string;
}

const steps = [
  { icon: Search, label: "Research", desc: "User interviews, competitive analysis, persona creation" },
  { icon: PenTool, label: "Wireframes", desc: "Low-fidelity layouts, information architecture, user flows" },
  { icon: Palette, label: "Visual Design", desc: "High-fidelity mockups, design system, component library" },
  { icon: Layers, label: "Prototyping", desc: "Interactive prototypes, micro-interactions, motion design" },
  { icon: TestTube, label: "Testing", desc: "Usability testing, A/B testing, accessibility audit" },
  { icon: Send, label: "Handoff", desc: "Developer specs, asset export, design QA" },
];

const ProcessTimeline = ({ accentColor }: ProcessTimelineProps) => (
  <div className="space-y-8">
    <div className="text-center space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] font-bold" style={{ color: accentColor }}>Methodology</p>
      <h2 className="font-heading text-2xl md:text-3xl font-bold">Design Process</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center space-y-3"
          >
            <div
              className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center border border-black/15"
              style={{ background: `${accentColor}15` }}
            >
              <Icon className="w-6 h-6" style={{ color: accentColor }} />
            </div>
            <div>
              <div className="text-sm font-bold mb-1">{step.label}</div>
              <div className="text-[11px] text-[#B0B0B8] leading-relaxed">{step.desc}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute" />
            )}
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default ProcessTimeline;
