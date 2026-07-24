import { useEffect, useState } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { GamificationProvider, useGamification } from './context/GamificationContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import StatsBar from './components/StatsBar';
import WhatIs from './components/WhatIs';
import WhyMatters from './components/WhyMatters';
import WhatGain from './components/WhatGain';
import HowItWorks from './components/HowItWorks';
import Tracks from './components/Tracks';
import Outcomes from './components/Outcomes';
import Quiz from './components/Quiz';
import ForParentsSchools from './components/ForParentsSchools';
import WhySkillzza from './components/WhySkillzza';
import LastBanner from './components/LastBanner';
import Footer from './components/Footer';
import VIHero from './components/virtual-internship/VIHero';
import WhatIsVI from './components/virtual-internship/WhatIsVI';
import WhyVIMatters from './components/virtual-internship/WhyVIMatters';
import WhatVIGain from './components/virtual-internship/WhatVIGain';
import HowProgramWorks from './components/virtual-internship/HowProgramWorks';
import ExploreTracks from './components/virtual-internship/ExploreTracks';
import WalkAway from './components/virtual-internship/WalkAway';
import DesignedForStudents from './components/virtual-internship/DesignedForStudents';
import ParentsSchools from './components/virtual-internship/ParentsSchools';
import WhySkillzzaVI from './components/virtual-internship/WhySkillzzaVI';
import VICtaBanner from './components/virtual-internship/VICtaBanner';

const sections = [
  { id: 'hero', el: 'hero' },
  { id: 'stats', el: 'stats' },
  { id: 'what-is', el: 'what-is' },
  { id: 'why-matters', el: 'why-matters' },
  { id: 'what-gain', el: 'what-gain' },
  { id: 'how-it-works', el: 'how-it-works' },
  { id: 'tracks', el: 'tracks' },
  { id: 'outcomes', el: 'outcomes' },
  { id: 'quiz', el: 'quiz' },
  { id: 'for-parents', el: 'for-parents' },
  { id: 'why-skillzza', el: 'why-skillzza' },
];

function AppContent() {
  useScrollReveal();
  const { visitSection } = useGamification();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = 'Skillzza - Virtual Internships for Grades 6-12';

    // Scroll progress handler
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) visitSection(sectionId);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timer = setTimeout(() => {
      sections.forEach((s) => {
        const el = document.getElementById(s.el);
        if (el) observer.observe(el);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [visitSection]);

  return (
    <div className="min-h-screen relative">
      {/* Global Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] bg-slate-100/20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      {/* NEW VIRTUAL INTERNSHIP CONTENT */}
      <div id="vi-hero"><VIHero /></div>
      {/* <div id="vi-what-is"><WhatIsVI /></div> */}
      <div id="vi-why-matters"><WhyVIMatters /></div>
      <div id="vi-what-gain"><WhatVIGain /></div>
      <div id="vi-how-program-works"><HowProgramWorks /></div>
      <div id="vi-explore-tracks"><ExploreTracks /></div>
      <div id="vi-walk-away"><WalkAway /></div>
      <div id="vi-designed-for-students"><DesignedForStudents /></div>
      <div id="vi-parents-schools"><ParentsSchools /></div>
      <div id="vi-why-skillzza"><WhySkillzzaVI /></div>
      <div id="vi-cta-banner"><VICtaBanner /></div>
      <Footer />

      {/* 
        ========================================================================
        OLD VIRTUAL INTERNSHIP SECTIONS - COMMENTED OUT FOR REDESIGN
        ========================================================================
      */}
      {/* 
      <div id="hero"><Hero /></div>
      <div id="why-matters"><WhyMatters /></div>
      <div id="what-gain"><WhatGain /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="tracks"><Tracks /></div>
      <div id="outcomes"><Outcomes /></div>
      <div id="for-parents"><ForParentsSchools /></div>
      <div id="why-skillzza"><WhySkillzza /></div>
      <div id="stats-bar"><StatsBar /></div>
      <LastBanner /> 
      */}

      {/* Floating Helper Mascot */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce cursor-pointer group hidden md:flex items-center gap-2">
        <div className="bg-white px-3 py-2 rounded-xl shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 font-bold text-slate-700 text-sm">
          Keep Exploring! 🚀
        </div>
        <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl border-2 border-white hover:scale-110 transition-transform">
          <span className="text-2xl">👩‍🚀</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <GamificationProvider>
      <AppContent />
    </GamificationProvider>
  );
}

export default App;
