import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { useScrollReveal } from './hooks/useScrollReveal';
import PlaygroundHero from './components/playground/PlaygroundHero';
import WhatIsPlayground from './components/playground/WhatIsPlayground';
import HowItWorks from './components/playground/HowItWorks';
import AgentLibrary from './components/playground/AgentLibrary';
import AgentBuilderBanner from './components/playground/AgentBuilderBanner';
import WhatStudentsLearn from './components/playground/WhatStudentsLearn';
import SafeByDesign from './components/playground/SafeByDesign';
import SchoolsAndEducators from './components/playground/SchoolsAndEducators';
import PlayToMastery from './components/playground/PlayToMastery';
import CtaBanner from './components/playground/CtaBanner';

export default function AiPlaygroundApp() {
  useScrollReveal();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = 'AI Playground | Skillzza';

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (height > 0) ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] bg-gray-100">
        <div
          className="h-full bg-[#5B32EA] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      <main className="min-h-screen">
        <PlaygroundHero />
        <WhatIsPlayground />
        <HowItWorks />
        <AgentLibrary />
        <AgentBuilderBanner />
        <WhatStudentsLearn />
        <SafeByDesign />
        <PlayToMastery />
        <SchoolsAndEducators />
        <CtaBanner />
      </main>
    </div>
  );
}
