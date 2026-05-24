import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

import carouselA from "@/assets/portfolio/social/carousel-a.jpg";
import carouselB from "@/assets/portfolio/social/carousel-b.jpg";
import carouselC from "@/assets/portfolio/social/carousel-c.jpg";
import carouselD from "@/assets/portfolio/social/carousel-d.jpg";
import nexusOtc01 from "@/assets/portfolio/social/nexus-otc-01.jpg";
import nexusOtc02 from "@/assets/portfolio/social/nexus-otc-02.jpg";
import nexusOtc03 from "@/assets/portfolio/social/nexus-otc-03.jpg";
import nexusOtc04 from "@/assets/portfolio/social/nexus-otc-04.jpg";
import socialDark from "@/assets/portfolio/social/turnkey-dark-2.jpg";
import socialWhite from "@/assets/portfolio/social/turnkey-white-2.jpg";
import socialGreen from "@/assets/portfolio/social/turnkey-green-2.jpg";
import gcgraDark from "@/assets/portfolio/social/gcgra-dark.jpg";
import gcgraWhite from "@/assets/portfolio/social/gcgra-white.jpg";
import gcgraGold from "@/assets/portfolio/social/gcgra-gold.jpg";
import turnkeyWhite3 from "@/assets/portfolio/social/turnkey-white-3.jpg";
import turnkeyBlack3 from "@/assets/portfolio/social/turnkey-black-3.jpg";
import turnkeyGold3 from "@/assets/portfolio/social/turnkey-gold-3.jpg";
import gcgraGamingDark from "@/assets/portfolio/social/gcgra-gaming-dark.jpg";
import cryptoWhite from "@/assets/portfolio/social/crypto-white.jpg";
import gcgraGamingGold from "@/assets/portfolio/social/gcgra-gaming-gold.jpg";
import linkedinCrypto1 from "@/assets/portfolio/social/linkedin-crypto-1.jpg";
import linkedinCrypto2 from "@/assets/portfolio/social/linkedin-crypto-2.jpg";
import linkedinCrypto3 from "@/assets/portfolio/social/linkedin-crypto-3.jpg";
import brokerDealer1 from "@/assets/portfolio/social/broker-dealer-1.jpg";
import brokerDealer2 from "@/assets/portfolio/social/broker-dealer-2.jpg";
import brokerDealer3 from "@/assets/portfolio/social/broker-dealer-3.jpg";
import crypto49k1 from "@/assets/portfolio/social/crypto-49k-1.jpg";
import crypto49k2 from "@/assets/portfolio/social/crypto-49k-2.jpg";
import crypto49k3 from "@/assets/portfolio/social/crypto-49k-3.jpg";
import turnkeySolutionDark from "@/assets/portfolio/social/turnkey-solution-dark.jpg";
import brokerDealerWhite from "@/assets/portfolio/social/broker-dealer-white.jpg";
import cryptoPlatformPurple from "@/assets/portfolio/social/crypto-platform-purple.jpg";
import cryptoPlatformB from "@/assets/portfolio/social/crypto-platform-b.jpg";
import brokerDealerC2 from "@/assets/portfolio/social/broker-dealer-c2.jpg";
import itsecSecurity from "@/assets/portfolio/social/itsec-security.jpg";
import itsecCryptoDark from "@/assets/portfolio/social/crypto-platform-01.jpg";
import itsecCryptoWhite from "@/assets/portfolio/social/crypto-platform-02.jpg";
import itsecCryptoGold from "@/assets/portfolio/social/crypto-platform-03.jpg";
import svgCryptoLicensing1 from "@/assets/portfolio/social/svg-crypto-licensing-1.jpg";
import svgCryptoLicensing2 from "@/assets/portfolio/social/svg-crypto-licensing-2.jpg";
import svgCryptoLicensing3 from "@/assets/portfolio/social/svg-crypto-licensing-3.jpg";
import svgCryptoLicensing4 from "@/assets/portfolio/social/svg-crypto-licensing-4.jpg";
import alconAds01 from "@/assets/portfolio/social/alcon-ads-01.jpg";
import alconAds02 from "@/assets/portfolio/social/alcon-ads-02.jpg";
import alconAds03 from "@/assets/portfolio/social/alcon-ads-03.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const allImages = [
  { src: alconAds01, alt: "Ronnie Balonon Jr. white label web services – launch your own website, dark purple theme" },
  { src: alconAds02, alt: "Ronnie Balonon Jr. logo and brand identity design – clean white background with purple accents" },
  { src: alconAds03, alt: "Ronnie Balonon Jr. social media management – dark theme with social platform icons and robotic hand" },
  { src: socialGreen, alt: "Turnkey crypto solution social media design – green dark theme with trading interface" },
  { src: socialWhite, alt: "Turnkey crypto solution social media design – clean white theme layout" },
  { src: socialDark, alt: "Turnkey crypto solution social media design – dark premium theme" },
  { src: gcgraDark, alt: "GCGRA gaming regulatory authority social media post – dark theme" },
  { src: gcgraWhite, alt: "GCGRA gaming regulatory authority social media post – white theme" },
  { src: gcgraGold, alt: "GCGRA gaming regulatory authority social media post – gold accent theme" },
  { src: turnkeyWhite3, alt: "Turnkey exchange platform promotional design – white background" },
  { src: turnkeyBlack3, alt: "Turnkey exchange platform promotional design – black background" },
  { src: turnkeyGold3, alt: "Turnkey exchange platform promotional design – gold accent" },
  { src: gcgraGamingDark, alt: "GCGRA gaming compliance social media graphic – dark theme" },
  { src: cryptoWhite, alt: "Cryptocurrency exchange platform design – white clean layout" },
  { src: gcgraGamingGold, alt: "GCGRA gaming compliance social media graphic – gold theme" },
  { src: linkedinCrypto1, alt: "LinkedIn crypto trading platform promotional post – variant 1" },
  { src: linkedinCrypto2, alt: "LinkedIn crypto trading platform promotional post – variant 2" },
  { src: linkedinCrypto3, alt: "LinkedIn crypto trading platform promotional post – variant 3" },
  { src: brokerDealer1, alt: "Broker dealer fintech social media design – variant 1" },
  { src: brokerDealer2, alt: "Broker dealer fintech social media design – variant 2" },
  { src: brokerDealer3, alt: "Broker dealer fintech social media design – variant 3" },
  { src: crypto49k1, alt: "Bitcoin 49K milestone crypto social media post – variant 1" },
  { src: crypto49k2, alt: "Bitcoin 49K milestone crypto social media post – variant 2" },
  { src: crypto49k3, alt: "Bitcoin 49K milestone crypto social media post – variant 3" },
  { src: turnkeySolutionDark, alt: "Turnkey white-label crypto solution – dark theme promotional design" },
  { src: brokerDealerWhite, alt: "Broker dealer platform social media design – white background" },
  { src: cryptoPlatformPurple, alt: "Crypto trading platform social media design – purple theme" },
  { src: cryptoPlatformB, alt: "Cryptocurrency platform social media design – dark variant" },
  { src: brokerDealerC2, alt: "Broker dealer fintech social media carousel – variant 2" },
];

interface SocialMediaGalleryProps {
  showHeading?: boolean;
}

const carouselSections = [
  {
    title: "SVG Crypto Licensing",
    subtitle: "Connected carousel showcasing crypto licensing solutions — from licensing made easy to trusted advisor worldwide",
    slides: [
      { src: svgCryptoLicensing1, alt: "SVG crypto licensing made easy – bring the client I do the rest, blue and white minimalist design" },
      { src: svgCryptoLicensing2, alt: "SVG lost leads missed commissions – clients asking about crypto licenses in Dubai promotional carousel slide" },
      { src: svgCryptoLicensing3, alt: "SVG partner program – join SVG partner program, refer crypto clients, get paid up to 20% commission, no experience needed" },
      { src: svgCryptoLicensing4, alt: "SVG VARA trusted by founders lawyers advisors worldwide – trusted by founders, lawyers and advisors, SVG is force behind Dubai's complex VARA submissions" },
    ],
  },
];

const CarouselSection = ({ title, subtitle, slides }: { title: string; subtitle: string; slides: { src: string; alt: string }[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h3 className="font-heading text-xl md:text-2xl font-bold text-center mb-2">
        {title} <span className="text-gradient">Carousel</span>
      </h3>
      <p className="text-muted-foreground text-center text-sm mb-8 max-w-lg mx-auto">{subtitle}</p>
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden rounded-2xl">
          <div className="flex">
            {slides.map((slide, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
                <div className="px-1">
                  <img src={slide.src} alt={slide.alt} className="w-full h-auto rounded-xl object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors disabled:opacity-30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors disabled:opacity-30"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === selectedIndex ? "bg-primary w-6" : "bg-white/20 hover:bg-white/40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SocialMediaGallery = ({ showHeading = true }: SocialMediaGalleryProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? allImages : allImages.slice(0, 6);

  return (
    <div>
      {showHeading && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.span variants={fadeInUp} className="text-primary font-heading text-sm uppercase tracking-widest">
            Featured Work
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl font-bold mt-4">
            Social Media <span className="text-gradient">Designs</span>
          </motion.h2>
        </motion.div>
      )}

      {/* Connected Carousel Sections */}
      {carouselSections.map((section, sIdx) => (
        <CarouselSection key={sIdx} title={section.title} subtitle={section.subtitle} slides={section.slides} />
      ))}

      {/* Grid Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h3 className="font-heading text-xl md:text-2xl font-bold text-center mb-2">
          Social Media <span className="text-gradient">Posts</span>
        </h3>
        <p className="text-muted-foreground text-center text-sm max-w-lg mx-auto">
          Individual post designs across fintech, gaming, and cybersecurity industries
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {visibleImages.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: i >= 6 ? (i - 6) * 0.05 : 0 }}
              className="rounded-2xl overflow-hidden glass-card hover-lift"
            >
              <img src={item.src} alt={item.alt} className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {!showAll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-10"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(true)}
            className="group relative"
          >
            View More Designs
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-flex"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.span>
          </Button>
        </motion.div>
      )}

      {showAll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-10"
        >
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setShowAll(false)}
          >
            Show Less
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default SocialMediaGallery;