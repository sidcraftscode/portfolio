"use client";
import HeroSection from "./components/HeroSection";
import TabsSection from "./components/TabsSection";
import PortfolioSection from "./components/PortfolioSection"; 
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="text-white">
    <HeroSection />
    <TabsSection />
    <PortfolioSection />
    <Contact />
  </div>
  );
}
