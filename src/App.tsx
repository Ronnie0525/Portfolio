import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import HireMe from "./pages/HireMe";
import ClientProjects from "./pages/ClientProjects";
import UIUXProjectDetail from "./pages/portfolio/UIUXProjectDetail";

import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import BrandingService from "./pages/services/BrandingService";
import UIUXService from "./pages/services/UIUXService";
import GraphicService from "./pages/services/GraphicService";
import AIService from "./pages/services/AIService";
import SocialService from "./pages/services/SocialService";
import VideoService from "./pages/services/VideoService";
import EditingService from "./pages/services/EditingService";
import PhotographyService from "./pages/services/PhotographyService";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/branding" element={<BrandingService />} />
              <Route path="/services/uiux" element={<UIUXService />} />
              <Route path="/services/graphic" element={<GraphicService />} />
              <Route path="/services/ai" element={<AIService />} />
              <Route path="/services/social" element={<SocialService />} />
              <Route path="/services/video" element={<VideoService />} />
              <Route path="/services/editing" element={<EditingService />} />
              <Route path="/services/photography" element={<PhotographyService />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/uiux/:projectId" element={<UIUXProjectDetail />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hire-me" element={<HireMe />} />
              <Route path="/client-projects" element={<ClientProjects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
  </ThemeProvider>
);

export default App;
