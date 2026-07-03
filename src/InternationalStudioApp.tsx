import { useEffect, useState } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import InternationalHero from './components/international/InternationalHero';
import InternationalStats from './components/international/InternationalStats';
import InternationalWhatIs from './components/international/InternationalWhatIs';
import InternationalFeatures from './components/international/InternationalFeatures';
import WhatAreStudios from './components/international/WhatAreStudios';
import LearningStages from './components/international/LearningStages';
import EducationChallenge from './components/international/EducationChallenge';
import FutureSkillsStudios from './components/international/FutureSkillsStudios';
import LearningFramework from './components/international/LearningFramework';
import ImplementationFramework from './components/international/ImplementationFramework';
import ResponsibleAI from './components/international/ResponsibleAI';
import ReportingTransparency from './components/international/ReportingTransparency';
import GlobalEducation from './components/international/GlobalEducation';
import TrustedPartnerships from './components/international/TrustedPartnerships';
import Footer from './components/Footer';

export default function InternationalStudioApp() {
  useScrollReveal();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = 'International Studio | Skillzza';

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (height > 0) ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-poppins" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] bg-gray-100">
        <div
          className="h-full bg-[#5B32EA] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      <main className="min-h-screen">
        <InternationalHero />
        <InternationalStats />
        <InternationalWhatIs />
        <InternationalFeatures />
        <WhatAreStudios />
        <LearningStages />
        <EducationChallenge />
        <FutureSkillsStudios />
        <LearningFramework />
        <ImplementationFramework />
        <ResponsibleAI />
        <ReportingTransparency />
        <GlobalEducation />
        <TrustedPartnerships />
        {/* Additional components will be added here */}
        <Footer />
      </main>
    </div>
  );
}
