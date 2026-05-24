import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { UIUXProject } from "@/data/uiuxProjectsData";
import CryptoVaultMockup from "./mockups/CryptoVaultMockup";
import ThreadsMockup from "./mockups/ThreadsMockup";
import CartlyMockup from "./mockups/CartlyMockup";
import BrewHausMockup from "./mockups/BrewHausMockup";
import PetalStemMockup from "./mockups/PetalStemMockup";
import MobilixMockup from "./mockups/MobilixMockup";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const mockupMap: Record<string, React.FC> = {
  cryptovault: CryptoVaultMockup,
  threads: ThreadsMockup,
  cartly: CartlyMockup,
  brewhaus: BrewHausMockup,
  "petal-stem": PetalStemMockup,
  mobilix: MobilixMockup,
};

interface ProjectCardProps {
  project: UIUXProject;
  index: number;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const Icon = project.icon;
  const Mockup = mockupMap[project.id];

  return (
    <motion.div variants={fadeInUp} className="group relative">
      <Link to={`/portfolio/uiux/${project.id}`}>
        <div
          className="relative rounded-2xl overflow-hidden border border-black/15 backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.02]"
          style={{ background: "rgba(255,255,255,0.04)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 25px 60px -15px ${project.accentGlow}`;
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          {/* Mini UI Mockup */}
          <div className="relative aspect-video overflow-hidden rounded-t-2xl">
            {Mockup && <Mockup />}
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center border border-black/15"
                  style={{ background: `${project.accentFrom}15` }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: project.accentFrom }} />
                </div>
                <span className="text-sm font-semibold text-zinc-200">{project.name}</span>
              </div>
              <span
                className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.08em] border border-black/15"
                style={{ background: project.badgeColor, color: project.badgeTextColor }}
              >
                {project.badge}
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
              {project.tagline}
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs font-semibold transition-all duration-300 group-hover:gap-3" style={{ color: project.accentFrom }}>
              View Case Study
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
