import { useEffect, useState } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import CreativityPreHero from './components/creativity/CreativityPreHero';
import CreativityHero from './components/creativity/CreativityHero';
import CreativeAI from './components/creativity/CreativeAI';
import WhyProgramme from './components/creativity/WhyProgramme';
import EcosystemTransformation from './components/creativity/EcosystemTransformation';
import StakeholderValue from './components/creativity/StakeholderValue';
import LevelsSection from './components/creativity/LevelsSection';
import FlagshipSection from './components/creativity/FlagshipSection';
import WhyAdobeSkillzza from './components/creativity/WhyAdobeSkillzza';
import DigitalFutureCTA from './components/creativity/DigitalFutureCTA';
import Footer from './components/Footer';

export default function DigitalCreativityApp() {
  useScrollReveal();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = 'Digital Creativity & AI Skills - Skillzza';

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#2D2D2D] text-white selection:bg-red-500/30 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-[#FA0F00] via-purple-500 to-indigo-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      <main>
        <CreativityPreHero />
        <CreativityHero />
        {/* <CreativeAI /> */}
        <WhyProgramme />
        <EcosystemTransformation />
        <StakeholderValue />
        <LevelsSection />
        <FlagshipSection />
        {/* <WhyAdobeSkillzza /> */}
        <div id="dcais-program"><DigitalFutureCTA /></div>
        {/* Future sections will be added here */}
        <Footer />
      </main>

    </div>
  );
}
