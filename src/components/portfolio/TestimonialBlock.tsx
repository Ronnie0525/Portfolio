import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialBlockProps {
  quote: string;
  author: string;
  accentColor: string;
}

const TestimonialBlock = ({ quote, author, accentColor }: TestimonialBlockProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="rounded-2xl border border-white/[0.06] backdrop-blur-xl p-8 md:p-12 text-center max-w-3xl mx-auto"
    style={{ background: `linear-gradient(160deg, ${accentColor}06, rgba(255,255,255,0.95))` }}
  >
    <Quote className="w-8 h-8 mx-auto mb-6 opacity-30" style={{ color: accentColor }} />
    <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-6 italic text-black/90">
      "{quote}"
    </blockquote>
    <cite className="text-sm not-italic font-bold" style={{ color: accentColor }}>
      — {author}
    </cite>
  </motion.div>
);

export default TestimonialBlock;
