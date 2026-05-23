import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

import realEstateThumb from "@/assets/portfolio/3d-animation/3r-realestate-thumb.jpg";
import naturesGroveThumb from "@/assets/portfolio/3d-animation/natures-grove-thumb.jpg";
import springWingsThumb from "@/assets/portfolio/3d-animation/spring-wings-thumb.jpg";
import interactiveSpaceThumb from "@/assets/portfolio/3d-animation/interactive-space-thumb.jpg";
import virtualThumb from "@/assets/portfolio/3d-animation/virtual-thumb.jpg";
import shamsThumb from "@/assets/portfolio/3d-animation/shams-thumb.jpg";
import farmThumb from "@/assets/portfolio/3d-animation/farm-thumb.jpg";
import cabiloThumb from "@/assets/portfolio/3d-animation/cabilo-thumb.jpg";
import excelpixelsThumb from "@/assets/portfolio/3d-animation/excelpixels-thumb.jpg";
import elecaasThumb from "@/assets/portfolio/3d-animation/elecaas-thumb.jpg";

interface Video3DItem {
  title: string;
  category: string;
  thumbnail: string;
  driveId: string;
}

const videos: Video3DItem[] = [
  { title: "3R Real Estate", category: "Architectural Walkthrough", thumbnail: realEstateThumb, driveId: "1upvPoSRKxQEkt7dy98w_jBEJ-phUee_r" },
  { title: "The Natures Grove", category: "Landscape Visualization", thumbnail: naturesGroveThumb, driveId: "1QNocucrQNsHg8SFJIGYABn-5dn7Un_IW" },
  { title: "Spring Wings", category: "3D Product Animation", thumbnail: springWingsThumb, driveId: "1aYYC_nQ3qkxgava-5jwrQzcGtB_0wE62" },
  { title: "Interactive Space", category: "Interior Visualization", thumbnail: interactiveSpaceThumb, driveId: "1YnM7kzbow4RP8A8_qqv0dfI-7qYPWX9G" },
  { title: "Virtual X", category: "Virtual Reality 3D", thumbnail: virtualThumb, driveId: "1amAN93Go1xXYBNI5iFnzveWopQy2JIKm" },
  { title: "SHAMS Office", category: "Office Visualization", thumbnail: shamsThumb, driveId: "1omjfAfOeGy4pA4CXZQ3JGp_DpfHqcbmN" },
  { title: "Tadweer Farm", category: "Environmental 3D", thumbnail: farmThumb, driveId: "1JqZbBk-aWiR9915nSyWNUN94yxVOQqyd" },
  { title: "Cabilo Office", category: "Corporate Interior", thumbnail: cabiloThumb, driveId: "1N45GamoFY7gdD-JkEPGo03tP-aaZXy44" },
  { title: "Excel Pixel Office", category: "Office Walkthrough", thumbnail: excelpixelsThumb, driveId: "1BewX14NSqdQq5mL1TR8-LsDU1bWuZtWg" },
  { title: "ELECAAS Workflow", category: "Process Visualization", thumbnail: elecaasThumb, driveId: "1BewX14NSqdQq5mL1TR8-LsDU1bWuZtWg" },
];

const Video3DShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<Video3DItem | null>(null);

  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-heading text-sm uppercase tracking-widest">Portfolio Showreel</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 mb-4">
              3D Animation <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my 3D visualization and animation work — from architectural walkthroughs to product renders. Click any project to watch the full video.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                <div className="relative rounded-xl overflow-hidden aspect-video border border-primary/10 hover:border-primary/40 transition-all duration-300">
                  <img
                    src={video.thumbnail}
                    alt={`${video.title} - 3D Animation by Ronnie Balonon Jr. Dubai`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_30px_hsl(var(--orange-glow)/0.5)] group-hover:scale-110 group-hover:shadow-[0_0_40px_hsl(var(--orange-glow)/0.7)] transition-all duration-300">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xs text-primary font-heading uppercase tracking-wider mb-1">{video.category}</p>
                    <h3 className="font-heading font-bold text-foreground text-lg">{video.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_60px_hsl(var(--orange-glow)/0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 z-10 p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <iframe
                src={`https://drive.google.com/file/d/${activeVideo.driveId}/preview`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={activeVideo.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Video3DShowcase;
