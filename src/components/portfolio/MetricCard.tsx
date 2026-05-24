import { motion } from "framer-motion";

interface MetricCardProps {
  label: string;
  value: string;
  accentColor: string;
  delay?: number;
}

const MetricCard = ({ label, value, accentColor, delay = 0 }: MetricCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="rounded-2xl border border-white/[0.06] backdrop-blur-xl p-6 text-center"
    style={{ background: `linear-gradient(160deg, ${accentColor}08, rgba(10,10,15,0.9))` }}
  >
    <div className="text-3xl md:text-4xl font-bold font-heading mb-2" style={{ color: accentColor }}>
      {value}
    </div>
    <div className="text-sm text-[#B0B0B8]">{label}</div>
  </motion.div>
);

export default MetricCard;
