import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 80 seconds, then every 80 seconds
    const showPopup = () => {
      setIsOpen(true);
    };

    const timer = setTimeout(showPopup, 120000); // Show after 2 minutes
    const interval = setInterval(showPopup, 180000); // Repeat every 3 minutes

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[9999]"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          >
            <div className="relative glass-card p-8 rounded-2xl border border-primary/20 shadow-2xl w-[90%] max-w-md">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Content */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-heading text-2xl font-bold mb-3">
                  Let's Work <span className="text-gradient">Together!</span>
                </h3>

                <p className="text-muted-foreground mb-6">
                  Looking for a creative partner? Download my CV or get in touch to start your next project.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1" 
                    asChild
                    onClick={handleClose}
                  >
                    <a href="/Alvin_Jampazar_CV.pdf" download className="flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download CV
                    </a>
                  </Button>

                  <Button 
                    variant="hero" 
                    className="flex-1" 
                    asChild
                    onClick={handleClose}
                  >
                    <Link to="/hire-me" className="flex items-center justify-center gap-2">
                      Hire About Me!
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PromoPopup;
