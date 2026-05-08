import { useEffect, useState } from 'react';
import PlaygroundHero from './components/playground/PlaygroundHero';
import WhatIsPlayground from './components/playground/WhatIsPlayground';
import HowItWorks from './components/playground/HowItWorks';
import AgentLibrary from './components/playground/AgentLibrary';
import WhatStudentsLearn from './components/playground/WhatStudentsLearn';
import SafetySection from './components/playground/SafetySection';
import MasteryPath from './components/playground/MasteryPath';
import SchoolsEducators from './components/playground/SchoolsEducators';
import PlaygroundEndBanner from './components/playground/PlaygroundEndBanner';
import Navbar from './components/Navbar';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function AiPlaygroundApp() {
  useScrollReveal();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = 'AI Playground - Build Your First AI Agent | Skillzza';

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
    <div className="min-h-screen bg-[#050B1F] text-white selection:bg-purple-500/30 overflow-x-hidden" style={{ backgroundColor: '#050B1F' }}>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <PlaygroundHero />

      {/* What is AI Playground */}
      <WhatIsPlayground />

      {/* How it Works */}
      <HowItWorks />

      {/* Agent Library */}
      <AgentLibrary />

      {/* What Students Learn */}
      <WhatStudentsLearn />

      {/* Safety & Transparency */}
      <SafetySection />

      {/* From Play to Mastery */}
      <MasteryPath />

      {/* For Schools & Educators */}
      <SchoolsEducators />

      {/* End Section */}
      <PlaygroundEndBanner />
      
      {/* Other sections will be added here */}
    </div>
  );
}
