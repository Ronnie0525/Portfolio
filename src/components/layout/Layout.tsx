import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWidget from "@/components/FloatingWidget";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff", color: "#fff" }}>
      <CustomCursor />
      <ScrollReveal />
      <Navbar />
      <main className="pt-[73px]">{children}</main>
      <Footer />
      <FloatingWidget />
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
