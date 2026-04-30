import { useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { GamificationProvider, useGamification } from './context/GamificationContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhatIs from './components/WhatIs';
import WhyMatters from './components/WhyMatters';
import WhatGain from './components/WhatGain';
import HowItWorks from './components/HowItWorks';
import Tracks from './components/Tracks';
import Outcomes from './components/Outcomes';
import Quiz from './components/Quiz';
import ForParentsSchools from './components/ForParentsSchools';
import WhySkillzza from './components/WhySkillzza';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import GamificationBar from './components/GamificationBar';

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
  { id: 'final-cta', el: 'final-cta' },
];

function AppContent() {
  useScrollReveal();
  const { visitSection } = useGamification();

  useEffect(() => {
    document.title = 'Skillzza — Virtual Internships for Grades 6–12';
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
    <div className="min-h-screen pb-16">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="stats"><Stats /></div>
      <div id="what-is"><WhatIs /></div>
      <div id="why-matters"><WhyMatters /></div>
      <div id="what-gain"><WhatGain /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="tracks"><Tracks /></div>
      <div id="outcomes"><Outcomes /></div>
      <div id="quiz"><Quiz /></div>
      <div id="for-parents"><ForParentsSchools /></div>
      <div id="why-skillzza"><WhySkillzza /></div>
      <div id="final-cta"><FinalCta /></div>
      <Footer />
      {/* <GamificationBar /> */}
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
