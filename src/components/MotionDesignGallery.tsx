import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Sparkles } from "lucide-react";

// Import motion thumbnails
import motion1Thumb from "@/assets/portfolio/motion/motion-1-thumb.jpg";
import motion2Thumb from "@/assets/portfolio/motion/motion-2-thumb.jpg";
import motion3Thumb from "@/assets/portfolio/motion/motion-3-thumb.jpg";
import motion4Thumb from "@/assets/portfolio/motion/motion-4-thumb.jpg";
import motion5Thumb from "@/assets/portfolio/motion/motion-5-thumb.jpg";
import motion6Thumb from "@/assets/portfolio/motion/motion-6-thumb.jpg";
import motion7Thumb from "@/assets/portfolio/motion/motion-7-thumb.jpg";
import motion8Thumb from "@/assets/portfolio/motion/motion-8-thumb.jpg";
import motion9Thumb from "@/assets/portfolio/motion/motion-9-thumb.jpg";
import motion10Thumb from "@/assets/portfolio/motion/motion-10-thumb.jpg";
import motion11Thumb from "@/assets/portfolio/motion/motion-11-thumb.jpg";

interface MotionProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  driveUrl: string;
}

const motionProjects: MotionProject[] = [
  { id: "m1", title: "Motion Design 1", description: "Dynamic Animation", thumbnail: motion1Thumb, driveUrl: "https://drive.google.com/file/d/1IqkxAnIi3OQP8YBFrxdAhqXMIK1HGrGy/preview" },
  { id: "m2", title: "Motion Design 2", description: "Visual Effects", thumbnail: motion2Thumb, driveUrl: "https://drive.google.com/file/d/1bS5T-BnmQrOKf_FGqp7FnOQxmvj0KGP3/preview" },
  { id: "m3", title: "Motion Design 3", description: "Title Sequence", thumbnail: motion3Thumb, driveUrl: "https://drive.google.com/file/d/1o8TF2hDUlKvXdfN2E_TBjwv1J-LY7Dsy/preview" },
  { id: "m4", title: "Motion Design 4", description: "Kinetic Typography", thumbnail: motion4Thumb, driveUrl: "https://drive.google.com/file/d/1PrQyBaD9F2K7Gc8ZyIqV1xUsQ6jM3aOn/preview" },
  { id: "m5", title: "Motion Design 5", description: "Logo Animation", thumbnail: motion5Thumb, driveUrl: "https://drive.google.com/file/d/1QsSzCbE0G3L8Hd9AyJrW2yVtR7kN4bPp/preview" },
  { id: "m6", title: "Motion Design 6", description: "Brand Animation", thumbnail: motion6Thumb, driveUrl: "https://drive.google.com/file/d/1RtTaCcF1H4M9Ie0BzKsX3zWuS8lO5cQq/preview" },
  { id: "m7", title: "Motion Design 7", description: "Social Media Motion", thumbnail: motion7Thumb, driveUrl: "https://drive.google.com/file/d/1IqkxAnIi3OQP8YBFrxdAhqXMIK1HGrGy/preview" },
  { id: "m8", title: "Motion Design 8", description: "Promotional Video", thumbnail: motion8Thumb, driveUrl: "https://drive.google.com/file/d/1bS5T-BnmQrOKf_FGqp7FnOQxmvj0KGP3/preview" },
  { id: "m9", title: "Motion Design 9", description: "Event Animation", thumbnail: motion9Thumb, driveUrl: "https://drive.google.com/file/d/1o8TF2hDUlKvXdfN2E_TBjwv1J-LY7Dsy/preview" },
  { id: "m10", title: "Motion Design 10", description: "Product Animation", thumbnail: motion10Thumb, driveUrl: "https://drive.google.com/file/d/1PrQyBaD9F2K7Gc8ZyIqV1xUsQ6jM3aOn/preview" },
  { id: "m11", title: "Motion Design 11", description: "Infographic Animation", thumbnail: motion11Thumb, driveUrl: "https://drive.google.com/file/d/1QsSzCbE0G3L8Hd9AyJrW2yVtR7kN4bPp/preview" },
];

const MotionDesignGallery = () => {
  const [activeVideo, setActiveVideo] = useState<MotionProject | null>(null);

  return (
    <div className="space-y-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <span className="text-primary font-heading text-sm uppercase tracking-[0.2em]">
          Motion Design
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-3">
          Dynamic <span className="text-gradient">Motion Graphics</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Kinetic typography, logo animations, brand reveals, and visual effects — crafted with After Effects and Cinema 4D.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {["11 Projects", "After Effects", "Cinema 4D", "Kinetic Typography"].map(stat => (
            <span key={stat} className="px-4 py-2 rounded-full text-xs font-medium text-muted-foreground bg-card border border-border">
              {stat}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {motionProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group cursor-pointer"
            onClick={() => setActiveVideo(project)}
          >
            <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300">
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_20px_hsl(var(--orange-glow)/0.5)]">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span className="text-xs text-primary uppercase tracking-wider font-medium">Motion Design</span>
                </div>
                <h3 className="font-heading text-sm font-semibold">{project.title}</h3>
                <p className="text-xs text-muted-foreground">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src={activeVideo.driveUrl}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={activeVideo.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MotionDesignGallery;
