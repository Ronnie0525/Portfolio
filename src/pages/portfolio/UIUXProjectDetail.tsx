import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Wrench, User, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import MetricCard from "@/components/portfolio/MetricCard";
import ProcessTimeline from "@/components/portfolio/ProcessTimeline";
import DesignSystemPreview from "@/components/portfolio/DesignSystemPreview";
import TestimonialBlock from "@/components/portfolio/TestimonialBlock";
import { uiuxProjects } from "@/data/uiuxProjectsData";
import { Button } from "@/components/ui/button";

// Screen component maps
import { CryptoDashboard, CryptoTokenDetail, CryptoSend, CryptoStaking, CryptoOnboarding, CryptoSecurity } from "@/components/portfolio/screens/CryptoVaultScreens";
import { ThreadsHome, ThreadsProduct, ThreadsSizeGuide, ThreadsCart, ThreadsCheckout, ThreadsConfirmed } from "@/components/portfolio/screens/ThreadsScreens";
import { CartlyHome, CartlySearch, CartlyProduct, CartlyCompare, CartlyCart, CartlyTracking } from "@/components/portfolio/screens/CartlyScreens";
import { BrewHausMenu, BrewHausBuilder, BrewHausBean, BrewHausTracking, BrewHausRewards, BrewHausStores } from "@/components/portfolio/screens/BrewHausScreens";
import { PetalOccasions, PetalGallery, PetalDetail, PetalMessage, PetalDelivery, PetalTracking } from "@/components/portfolio/screens/PetalStemScreens";
import { MobilixHome, MobilixDetail, MobilixCompare, MobilixQuiz, MobilixReviews, MobilixTradeIn } from "@/components/portfolio/screens/MobilixScreens";

const screenMap: Record<string, { component: React.FC; label: string }[]> = {
  cryptovault: [
    { component: CryptoDashboard, label: "Dashboard" },
    { component: CryptoTokenDetail, label: "Token Analytics" },
    { component: CryptoSend, label: "Send" },
    { component: CryptoStaking, label: "Staking" },
    { component: CryptoOnboarding, label: "Onboarding" },
    { component: CryptoSecurity, label: "Security" },
  ],
  threads: [
    { component: ThreadsHome, label: "Home" },
    { component: ThreadsProduct, label: "Product Detail" },
    { component: ThreadsSizeGuide, label: "Size Guide" },
    { component: ThreadsCart, label: "Shopping Cart" },
    { component: ThreadsCheckout, label: "Checkout" },
    { component: ThreadsConfirmed, label: "Order Confirmed" },
  ],
  cartly: [
    { component: CartlyHome, label: "Homepage" },
    { component: CartlySearch, label: "Search Results" },
    { component: CartlyProduct, label: "Product Detail" },
    { component: CartlyCompare, label: "Compare" },
    { component: CartlyCart, label: "Cart" },
    { component: CartlyTracking, label: "Order Tracking" },
  ],
  brewhaus: [
    { component: BrewHausMenu, label: "Coffee Menu" },
    { component: BrewHausBuilder, label: "Drink Builder" },
    { component: BrewHausBean, label: "Bean Origins" },
    { component: BrewHausTracking, label: "Order Tracking" },
    { component: BrewHausRewards, label: "Rewards" },
    { component: BrewHausStores, label: "Store Locator" },
  ],
  "petal-stem": [
    { component: PetalOccasions, label: "Occasions" },
    { component: PetalGallery, label: "Gallery" },
    { component: PetalDetail, label: "Bouquet Detail" },
    { component: PetalMessage, label: "Gift Message" },
    { component: PetalDelivery, label: "Delivery" },
    { component: PetalTracking, label: "Order Tracking" },
  ],
  mobilix: [
    { component: MobilixHome, label: "Home" },
    { component: MobilixDetail, label: "Phone Detail" },
    { component: MobilixCompare, label: "Compare" },
    { component: MobilixQuiz, label: "Phone Quiz" },
    { component: MobilixReviews, label: "Reviews" },
    { component: MobilixTradeIn, label: "Trade-In" },
  ],
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const UIUXProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = uiuxProjects.find(p => p.id === projectId);
  const currentIndex = uiuxProjects.findIndex(p => p.id === projectId);
  const nextProject = uiuxProjects[(currentIndex + 1) % uiuxProjects.length];

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Project not found</h1>
            <Button variant="outline" asChild>
              <Link to="/portfolio?category=uiux">Back to Portfolio</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const Icon = project.icon;
  const screens = screenMap[project.id] || [];

  return (
    <Layout>
      <SEOHead
        title={`${project.name} — UI/UX Case Study`}
        description={`${project.tagline}. A UI/UX design case study by Ronnie Balonon Jr. — freelance product designer for startups and brands worldwide.`}
        keywords={`${project.name} UI design, UI/UX case study, app interface design portfolio, digital product designer, freelance product designer`}
        canonicalUrl={`/portfolio/uiux/${project.id}`}
        schemaType="project"
        projectSchema={{ name: project.name, description: project.tagline, url: `/portfolio/uiux/${project.id}` }}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden" style={{ background: `linear-gradient(135deg, ${project.accentFrom}20, #07070A 60%)` }}>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 pb-16 pt-32">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/portfolio?category=uiux" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/20" style={{ background: `${project.accentFrom}30` }}>
                <Icon className="w-6 h-6" style={{ color: project.accentFrom }} />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] border border-white/20" style={{ background: project.badgeColor, color: project.badgeTextColor }}>{project.badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white" style={{ fontFamily: "Space Grotesk" }}>{project.name}</h1>
            <p className="text-xl text-white/70">{project.tagline}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[{ icon: User, text: "Role: UI/UX Designer" },{ icon: Calendar, text: `Duration: ${project.duration}` },{ icon: Wrench, text: `Tools: ${project.tools}` },{ icon: Clock, text: `Year: ${project.year}` }].map(m => (
                <div key={m.text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white/80">
                  <m.icon className="w-3.5 h-3.5" style={{ color: project.accentFrom }} /><span className="text-xs">{m.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3 rounded-2xl border border-white/[0.08] backdrop-blur-xl p-8 space-y-4" style={{ background: "rgba(255,255,255,0.03)" }}>
              <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: project.accentFrom }}>The Challenge</p>
              <p className="text-[#6B6B76] leading-relaxed">{project.challenge}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 rounded-2xl border border-white/[0.08] backdrop-blur-xl p-8 space-y-4" style={{ background: "rgba(255,255,255,0.03)" }}>
              <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: project.accentFrom }}>The Solution</p>
              <p className="text-[#6B6B76] leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-12">
            {project.metrics.map((m, i) => (
              <MetricCard key={m.label} label={m.label} value={m.value} accentColor={project.accentFrom} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <ProcessTimeline accentColor={project.accentFrom} />
        </div>
      </section>

      {/* High-Fidelity Screens */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] font-bold" style={{ color: project.accentFrom }}>The Showcase</p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "Space Grotesk" }}>High-Fidelity Screens</h2>
            <p className="text-[#6B6B76] max-w-2xl mx-auto text-sm">Key screens from the final design, showcasing the end-to-end user experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {screens.map((screen, i) => {
              const ScreenComponent = screen.component;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <ScreenComponent />
                  <div className="text-sm font-medium text-[#6B6B76]">{screen.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <DesignSystemPreview colors={project.designSystem.colors} fonts={project.designSystem.fonts} accentColor={project.accentFrom} />
        </div>
      </section>

      {/* Testimonial & Next */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 space-y-12">
          <TestimonialBlock quote={project.testimonial.quote} author={project.testimonial.author} accentColor={project.accentFrom} />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group cursor-pointer" onClick={() => navigate(`/portfolio/uiux/${nextProject.id}`)}>
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden backdrop-blur-xl transition-all duration-500 group-hover:border-white/20" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="flex items-center gap-6 p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${nextProject.accentFrom}20` }}>
                  <nextProject.icon className="w-5 h-5" style={{ color: nextProject.accentFrom }} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#6B6B76] uppercase tracking-widest mb-1">Next Project</p>
                  <h3 className="text-lg font-bold text-white">{nextProject.name}</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-[#6B6B76] group-hover:text-white transition-colors group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default UIUXProjectDetail;
