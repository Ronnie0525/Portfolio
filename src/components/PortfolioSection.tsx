import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, ChevronRight, Building, GraduationCap, Truck, UtensilsCrossed, Cake, Sparkles, Shield, Briefcase, Video, Heart, Shirt, PartyPopper, Calendar, Monitor, Landmark, LayoutDashboard, FileCheck, Bug, Home, Trash2, Sofa, FlaskConical, Leaf, TreePine, Sun, Droplet, Box, Zap, Factory, Recycle, Moon, Glasses, CircleDot, ArrowRight, TrendingUp, Globe, Hammer, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialMediaGallery from "@/components/SocialMediaGallery";
import UIUXPortfolioGrid from "@/components/portfolio/UIUXPortfolioGrid";

// Import branding thumbnails
import dspsThumb from "@/assets/portfolio/branding/dsps-thumb.jpg";
import salamThumb from "@/assets/portfolio/branding/salam-thumb.jpg";
import almasarThumb from "@/assets/portfolio/branding/almasar-thumb.jpg";
import habitmahshiThumb from "@/assets/portfolio/branding/habitmahshi-thumb.jpg";
import bakepointThumb from "@/assets/portfolio/branding/bakepoint-thumb.jpg";
import artisticImageryThumb from "@/assets/portfolio/branding/artisticimagery-thumb.jpg";

// Import videography thumbnails
import weddingThumb from "@/assets/portfolio/videography/wedding-thumb.jpg";
import event1Thumb from "@/assets/portfolio/videography/event1-thumb.jpg";
import rampThumb from "@/assets/portfolio/videography/ramp-thumb.jpg";
import galaThumb from "@/assets/portfolio/videography/gala-thumb.jpg";
import celebrationThumb from "@/assets/portfolio/videography/celebration-thumb.jpg";

// UI/UX replaced with UIForge + BuildFlow platform section

// Import 2D Animation thumbnails
import protectPestThumb from "@/assets/portfolio/animation/protect-pest-thumb.jpg";
import familyPestThumb from "@/assets/portfolio/animation/family-pest-thumb.jpg";
import wasteCollectionThumb from "@/assets/portfolio/animation/waste-collection-thumb.jpg";
import oldFurnitureThumb from "@/assets/portfolio/animation/old-furniture-thumb.jpg";
import chemicalSafetyThumb from "@/assets/portfolio/animation/chemical-safety-thumb.jpg";
import safetyPesticideThumb from "@/assets/portfolio/animation/safety-pesticide-thumb.jpg";
import farmPestThumb from "@/assets/portfolio/animation/farm-pest-thumb.jpg";
import antsEverywhereThumb from "@/assets/portfolio/animation/ants-everywhere-thumb.jpg";

// Import 3D Animation thumbnails
import realEstate3dThumb from "@/assets/portfolio/3d-animation/3r-realestate-thumb.jpg";
import ead1Thumb from "@/assets/portfolio/3d-animation/ead1-thumb.jpg";
import ead2Thumb from "@/assets/portfolio/3d-animation/ead2-thumb.jpg";
import ead3Thumb from "@/assets/portfolio/3d-animation/ead3-thumb.jpg";
import virtualThumb from "@/assets/portfolio/3d-animation/virtual-thumb.jpg";
import shamsThumb from "@/assets/portfolio/3d-animation/shams-thumb.jpg";
import tadweer1Thumb from "@/assets/portfolio/3d-animation/tadweer1-thumb.jpg";
import cabiloThumb from "@/assets/portfolio/3d-animation/cabilo-thumb.jpg";
import excelpixelsThumb from "@/assets/portfolio/3d-animation/excelpixels-thumb.jpg";
import elecaasThumb from "@/assets/portfolio/3d-animation/elecaas-thumb.jpg";
import hpThumb from "@/assets/portfolio/3d-animation/hp-thumb.jpg";
import adnoc1Thumb from "@/assets/portfolio/3d-animation/adnoc1-thumb.jpg";
import degree5Thumb from "@/assets/portfolio/3d-animation/5degree-thumb.jpg";
import adsscThumb from "@/assets/portfolio/3d-animation/adssc-thumb.jpg";
import farmThumb from "@/assets/portfolio/3d-animation/farm-thumb.jpg";
import privoThumb from "@/assets/portfolio/3d-animation/privo-thumb.jpg";
import salam3dThumb from "@/assets/portfolio/3d-animation/salam-thumb.jpg";
import houseExteriorThumb from "@/assets/portfolio/3d-animation/house-exterior-thumb.jpg";
import linesLiaisonThumb from "@/assets/portfolio/3d-animation/lines-liaison-thumb.jpg";
import adnoc2Thumb from "@/assets/portfolio/3d-animation/adnoc2-thumb.jpg";
import adnecThumb from "@/assets/portfolio/3d-animation/adnec-thumb.jpg";
import alDomaryThumb from "@/assets/portfolio/3d-animation/al-domary-thumb.jpg";
import millionCafeThumb from "@/assets/portfolio/3d-animation/1million-cafe-thumb.jpg";
import tadweer2Thumb from "@/assets/portfolio/3d-animation/tadweer2-thumb.jpg";
import ramadanThumb from "@/assets/portfolio/3d-animation/ramadan-thumb.jpg";

// Import Motion Design thumbnails
import motion1Thumb from "@/assets/portfolio/motion/motion-1-thumb.jpg";
import motion2Thumb from "@/assets/portfolio/motion/motion-2-thumb.jpg";
import motion3Thumb from "@/assets/portfolio/motion/motion-3-thumb.jpg";
import motion4Thumb from "@/assets/portfolio/motion/motion-4-thumb.jpg";
import motion5Thumb from "@/assets/portfolio/motion/motion-5-thumb.jpg";
import motion6Thumb from "@/assets/portfolio/motion/motion-6-thumb.jpg";
interface PortfolioProject {
  id: string;
  name: string;
  description: string;
  industry: string;
  thumbnail: string;
  icon: React.ReactNode;
  links: {
    label: string;
    url: string;
  }[];
}
const brandingProjects: PortfolioProject[] = [{
  id: "dsps",
  name: "DSPS",
  description: "Laboratory Science School",
  industry: "Education",
  thumbnail: dspsThumb,
  icon: <GraduationCap className="w-3 h-3" />,
  links: [{
    label: "View",
    url: "https://drive.google.com/file/d/1DzV74nA6Mjl_5qcTgHp0ctYIzrsKriLf/view"
  }]
}, {
  id: "salam",
  name: "SALAM",
  description: "Autism School",
  industry: "Education",
  thumbnail: salamThumb,
  icon: <GraduationCap className="w-3 h-3" />,
  links: [{
    label: "View",
    url: "https://drive.google.com/file/d/1MXgh1rQNMGdUksqf4oCs17WqfVNaSFD2/view"
  }]
}, {
  id: "almasar",
  name: "ALMASAR",
  description: "Delivery Company",
  industry: "Logistics",
  thumbnail: almasarThumb,
  icon: <Truck className="w-3 h-3" />,
  links: [{
    label: "View",
    url: "https://drive.google.com/file/d/1jw8bbASc40bD3pVwV27lWyu9c9vZs0v4/view"
  }]
}, {
  id: "habitmahshi",
  name: "HABIT MAHSHI",
  description: "Arabic Food Restaurant",
  industry: "Food & Beverage",
  thumbnail: habitmahshiThumb,
  icon: <UtensilsCrossed className="w-3 h-3" />,
  links: [{
    label: "View",
    url: "https://drive.google.com/file/d/1mycx-T17ZnFH2qRC-jbs5di_rUZNPsf4/view"
  }]
}, {
  id: "bakepoint",
  name: "Bake Point",
  description: "Pastry & Bread Company UAE",
  industry: "Bakery",
  thumbnail: bakepointThumb,
  icon: <Cake className="w-3 h-3" />,
  links: [{
    label: "View",
    url: "https://drive.google.com/file/d/1a0hkNEfDVR-unOZKDtFUdGI_6BYXpaFm/view"
  }]
}, {
  id: "artisticimagery",
  name: "Artistic Imagery",
  description: "AI Advertising Company",
  industry: "Technology",
  thumbnail: artisticImageryThumb,
  icon: <Sparkles className="w-3 h-3" />,
  links: [{
    label: "View",
    url: "https://drive.google.com/file/d/1Bkm682V74IBkge32Uq8WvA4AjQrf5f-M/view"
  }]
}];
const videographyProjects: PortfolioProject[] = [{
  id: "wedding",
  name: "Wedding Film",
  description: "Cinematic Wedding Coverage",
  industry: "Events",
  thumbnail: weddingThumb,
  icon: <Heart className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1YpsnJBB2Ypx7Fub-3x8PvLwBHpAMi6L-/view"
  }]
}, {
  id: "event1",
  name: "Corporate Event",
  description: "Corporate Event Coverage",
  industry: "Events",
  thumbnail: event1Thumb,
  icon: <Calendar className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1A-0MdYbHS3LTDUESRhbe16mPL-P6_tvE/view"
  }]
}, {
  id: "ramp",
  name: "Fashion Ramp",
  description: "Fashion Show Coverage",
  industry: "Fashion",
  thumbnail: rampThumb,
  icon: <Shirt className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1Eg-XqQTTfnJfBH1y8b_q49lEbC1p-Ugk/view"
  }]
}, {
  id: "gala",
  name: "Gala Night",
  description: "Gala Event Coverage",
  industry: "Events",
  thumbnail: galaThumb,
  icon: <PartyPopper className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1BqKmNvT5R8X3Pn4LsWdH7jFgC2vY9mZx/view"
  }]
}, {
  id: "celebration",
  name: "Celebration",
  description: "Special Occasion Coverage",
  industry: "Events",
  thumbnail: celebrationThumb,
  icon: <PartyPopper className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1CdLnOvU6S9Y4Qo5MtXeI8kGhD3wZ0nAy/view"
  }]
}];
// UI/UX uses the dedicated portfolio grid component
const animationProjects: PortfolioProject[] = [{
  id: "protect-pest",
  name: "Protect from Pest",
  description: "Pest Control Awareness",
  industry: "Environment",
  thumbnail: protectPestThumb,
  icon: <Bug className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1u_OZvDZh5_tsACSxWSMKlXQBjJYwUeUd/view"
  }]
}, {
  id: "family-pest",
  name: "Family & Pest",
  description: "Home Pest Prevention",
  industry: "Home Care",
  thumbnail: familyPestThumb,
  icon: <Home className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/11cZx3Z8JJA_VNqGFAkCX2UC_oQROjxYl/view"
  }]
}, {
  id: "waste-collection",
  name: "Waste Collection",
  description: "Waste Management",
  industry: "Environment",
  thumbnail: wasteCollectionThumb,
  icon: <Trash2 className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1RNEI-1cmB2mbEpePlWBwATvPR8nxlJZK/view"
  }]
}, {
  id: "old-furniture",
  name: "Old Furniture",
  description: "Furniture Disposal",
  industry: "Home Care",
  thumbnail: oldFurnitureThumb,
  icon: <Sofa className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1HjIqTsV1X4C9Yu0RzAiN3pLmI8bE5sGf/view"
  }]
}, {
  id: "chemical-safety",
  name: "Chemical Safety",
  description: "Chemical Handling",
  industry: "Safety",
  thumbnail: chemicalSafetyThumb,
  icon: <FlaskConical className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1IkJrUtW2Y5D0Zv1SyBjO4qMnJ9cF6tHg/view"
  }]
}, {
  id: "safety-pesticide",
  name: "Pesticide Safety",
  description: "Safe Pesticide Use",
  industry: "Environment",
  thumbnail: safetyPesticideThumb,
  icon: <Leaf className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1JlKsVuX3Z6E1Aw2TzCkP5rNoK0dG7uIh/view"
  }]
}];
const animation3dProjects: PortfolioProject[] = [{
  id: "3r-realestate",
  name: "3R Real Estate",
  description: "Property Visualization",
  industry: "Real Estate",
  thumbnail: realEstate3dThumb,
  icon: <Building className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1upvPoSRKxQEkt7dy98w_jBEJ-phUee_r/view"
  }]
}, {
  id: "ead1",
  name: "EAD Campaign 1",
  description: "Environment Agency",
  industry: "Government",
  thumbnail: ead1Thumb,
  icon: <TreePine className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1QNocucrQNsHg8SFJIGYABn-5dn7Un_IW/view"
  }]
}, {
  id: "shams",
  name: "Shams Power",
  description: "Solar Energy",
  industry: "Energy",
  thumbnail: shamsThumb,
  icon: <Sun className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1ZpKQQYUiNRWApfJe6Rc6tHcdXEw7kj5O/view"
  }]
}, {
  id: "tadweer1",
  name: "Tadweer",
  description: "Waste Management",
  industry: "Environment",
  thumbnail: tadweer1Thumb,
  icon: <Recycle className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1KmLtWvY4A7F2Bx3UyDlQ6sPoL1eH8vJi/view"
  }]
}, {
  id: "excelpixels",
  name: "ExcelPixels",
  description: "Tech Company",
  industry: "Technology",
  thumbnail: excelpixelsThumb,
  icon: <Monitor className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1LnMuXwZ5B8G3Cy4VzEmR7tQpM2fI9wKj/view"
  }]
}, {
  id: "adnoc1",
  name: "ADNOC",
  description: "Oil & Gas Giant",
  industry: "Energy",
  thumbnail: adnoc1Thumb,
  icon: <Droplet className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1MoNvYxA6C9H4Dz5WyFnS8uRqN3gJ0xLk/view"
  }]
}, {
  id: "cabilo",
  name: "Cabilo",
  description: "Product Visualization",
  industry: "Product",
  thumbnail: cabiloThumb,
  icon: <Box className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1NpOwZyB7D0I5Ea6XzGoT9vSrO4hK1yMl/view"
  }]
}, {
  id: "elecaas",
  name: "Elecaas",
  description: "Electrical Services",
  industry: "Energy",
  thumbnail: elecaasThumb,
  icon: <Zap className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1OqPxAzC8E1J6Fb7YyHpU0wTsP5iL2zNm/view"
  }]
}];
const motionDesignProjects: PortfolioProject[] = [{
  id: "motion1",
  name: "Motion Design 1",
  description: "Dynamic Animation",
  industry: "Creative",
  thumbnail: motion1Thumb,
  icon: <Sparkles className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1IqkxAnIi3OQP8YBFrxdAhqXMIK1HGrGy/view"
  }]
}, {
  id: "motion2",
  name: "Motion Design 2",
  description: "Visual Effects",
  industry: "Creative",
  thumbnail: motion2Thumb,
  icon: <Sparkles className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1bS5T-BnmQrOKf_FGqp7FnOQxmvj0KGP3/view"
  }]
}, {
  id: "motion3",
  name: "Motion Design 3",
  description: "Title Sequence",
  industry: "Creative",
  thumbnail: motion3Thumb,
  icon: <Sparkles className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1o8TF2hDUlKvXdfN2E_TBjwv1J-LY7Dsy/view"
  }]
}, {
  id: "motion4",
  name: "Motion Design 4",
  description: "Kinetic Typography",
  industry: "Creative",
  thumbnail: motion4Thumb,
  icon: <Sparkles className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1PrQyBaD9F2K7Gc8ZyIqV1xUsQ6jM3aOn/view"
  }]
}, {
  id: "motion5",
  name: "Motion Design 5",
  description: "Logo Animation",
  industry: "Creative",
  thumbnail: motion5Thumb,
  icon: <Sparkles className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1QsSzCbE0G3L8Hd9AyJrW2yVtR7kN4bPp/view"
  }]
}, {
  id: "motion6",
  name: "Motion Design 6",
  description: "Brand Animation",
  industry: "Creative",
  thumbnail: motion6Thumb,
  icon: <Sparkles className="w-3 h-3" />,
  links: [{
    label: "Watch",
    url: "https://drive.google.com/file/d/1RtTaCcF1H4M9Ie0BzKsX3zWuS8lO5cQq/view"
  }]
}];
type CategoryTab = "branding" | "uiux" | "social" | "videography" | "photography" | "website";
const tabInfo = {
  branding: {
    title: "Branding",
    subtitle: "Brand Identity & Visual Design Projects",
    emoji: "🎨"
  },
  uiux: {
    title: "UI/UX",
    subtitle: "Website & Application Design",
    emoji: "🖥️"
  },
  social: {
    title: "Social Media",
    subtitle: "Social Media Design & Management",
    emoji: "📱"
  },
  videography: {
    title: "Videography",
    subtitle: "Events, Weddings & Fashion Films",
    emoji: "📹"
  },
  photography: {
    title: "Photography",
    subtitle: "Professional Photography & Visual Stories",
    emoji: "📷"
  },
  website: {
    title: "Website",
    subtitle: "Web Design & Development Projects",
    emoji: "🌐"
  }
};
const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState<CategoryTab>("branding");
  const isUIUX = activeTab === "uiux";
  const isSocial = activeTab === "social";
  const isPhotography = activeTab === "photography";
  const isWebsite = activeTab === "website";
  const isSpecialTab = isUIUX || isSocial || isPhotography || isWebsite;
  const currentProjects = activeTab === "branding" ? brandingProjects : activeTab === "videography" ? videographyProjects : brandingProjects;
  return <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <span className="text-primary font-heading text-sm uppercase tracking-widest">My Work</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="flex flex-wrap justify-center gap-2 mb-8">
          {(["branding", "uiux", "social", "videography", "photography", "website"] as CategoryTab[]).map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeTab === tab ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/0.4)]" : "bg-background/50 text-muted-foreground hover:text-foreground hover:bg-primary/10 border border-border"}`}>
              {tabInfo[tab].emoji} {tabInfo[tab].title}
            </button>)}
        </motion.div>

        {/* Tab Header Info */}
        {!isSpecialTab && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {tabInfo[activeTab].title} <span className="text-primary">Portfolio</span>
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {tabInfo[activeTab].subtitle}
              </p>
            </div>
            <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full font-medium">
              {currentProjects.length} Projects
            </span>
          </motion.div>
        )}

        {/* Projects Grid or UIForge/BuildFlow */}
        <AnimatePresence mode="wait">
          {isSocial ? (
            <motion.div key="social-gallery" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <SocialMediaGallery showHeading={false} />
            </motion.div>
          ) : isUIUX ? (
            <motion.div key="uiux-portfolio" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <UIUXPortfolioGrid />
            </motion.div>
          ) : isPhotography ? (
            <motion.div key="photography" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <div className="text-center py-8">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Photography <span className="text-primary">Portfolio</span></h3>
                <p className="text-sm text-muted-foreground mb-6">Professional Photography & Visual Stories</p>
                <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-[5px] bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all text-sm font-medium">
                  View Full Gallery <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ) : isWebsite ? (
            <motion.div key="website" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <div className="text-center py-8">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Website <span className="text-primary">Portfolio</span></h3>
                <p className="text-sm text-muted-foreground mb-6">Web Design & Development Projects</p>
                <Link to="/client-projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-[5px] bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all text-sm font-medium">
                  View Web Projects <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {currentProjects.map(project => <motion.div key={project.id} className="group relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <a href={project.links[0]?.url} {...(project.links[0]?.url.includes('.pdf') || project.links[0]?.url.includes('drive.google.com') ? {} : { target: "_blank", rel: "noopener noreferrer" })} className="block">
                  <div className="relative overflow-hidden rounded-xl bg-background/50 border border-border/50 hover:border-primary/40 transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img src={project.thumbnail} alt={project.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="flex items-center gap-1.5">
                        <span className="text-primary">{project.icon}</span>
                        <h4 className="font-medium text-xs text-foreground truncate">{project.name}</h4>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[9px] font-medium text-primary-foreground bg-primary/90 px-2 py-0.5 rounded-full">{project.industry}</span>
                    </div>
                  </div>
                </a>
              </motion.div>)}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        
      </div>
    </section>;
};
export default PortfolioSection;