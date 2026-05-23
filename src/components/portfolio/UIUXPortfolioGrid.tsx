import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { uiuxProjects } from "@/data/uiuxProjectsData";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const UIUXPortfolioGrid = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent"
        >
          UI/UX Design Portfolio
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-base md:text-lg text-zinc-400 leading-relaxed">
          Specializing in user-centered design across fintech, e-commerce, food tech, and retail — from research and wireframing to pixel-perfect interfaces and interactive prototypes.
        </motion.p>
        {/* Stat badges */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
          {["6 Case Studies", "50+ Screens Designed", "Figma & Adobe XD", "Dubai, UAE"].map(stat => (
            <span key={stat} className="px-4 py-2 rounded-full text-xs font-medium text-zinc-300 bg-white/5 border border-white/10">
              {stat}
            </span>
          ))}
        </motion.div>
        {/* Gradient divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {uiuxProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default UIUXPortfolioGrid;
