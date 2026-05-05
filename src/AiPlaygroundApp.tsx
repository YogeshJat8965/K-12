import { useEffect, useState } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import './aiPlayground.css';
import PlaygroundNavbar from './components/playground/PlaygroundNavbar';
import PlaygroundHero from './components/playground/PlaygroundHero';
import PlaygroundStats from './components/playground/PlaygroundStats';
import PlaygroundWhatIs from './components/playground/PlaygroundWhatIs';
import PlaygroundHowItWorks from './components/playground/PlaygroundHowItWorks';
import AgentLibrary from './components/playground/AgentLibrary';
import LearningPillars from './components/playground/LearningPillars';
import SafetySection from './components/playground/SafetySection';
import JourneyPath from './components/playground/JourneyPath';
import PlaygroundSchools from './components/playground/PlaygroundSchools';
import PlaygroundQuiz from './components/playground/PlaygroundQuiz';
import PlaygroundCta from './components/playground/PlaygroundCta';
import PlaygroundFooter from './components/playground/PlaygroundFooter';

export default function AiPlaygroundApp() {
  useScrollReveal();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = 'Skillzza K-12 - AI Playground | Build Your First AI Agent';

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
    <div className="min-h-screen relative">
      {/* Global Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] bg-slate-100/20">
        <div
          className="h-full playground-progress transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <PlaygroundNavbar />

      <div id="hero"><PlaygroundHero /></div>
      <div id="stats"><PlaygroundStats /></div>
      <div id="what-is-section"><PlaygroundWhatIs /></div>
      <div id="how-it-works-section"><PlaygroundHowItWorks /></div>

      {/* Phase 2 sections */}
      <div id="agents"><AgentLibrary /></div>
      <div id="learning"><LearningPillars /></div>
      <div id="safety"><SafetySection /></div>
      <div id="journey"><JourneyPath /></div>

      {/* Phase 3 sections */}
      <div id="for-schools"><PlaygroundSchools /></div>
      <div id="quiz"><PlaygroundQuiz /></div>
      <div id="cta"><PlaygroundCta /></div>
      <PlaygroundFooter />

      {/* Floating Helper Bot */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce cursor-pointer group hidden md:flex items-center gap-2">
        <div className="bg-white px-3 py-2 rounded-xl shadow-lg border border-purple-100 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 font-bold text-slate-700 text-sm">
          Build Your Agent! 🤖
        </div>
        <div className="w-14 h-14 bg-gradient-to-br from-ai-purple to-ai-magenta rounded-full flex items-center justify-center shadow-2xl border-2 border-white hover:scale-110 transition-transform">
          <span className="text-2xl">🤖</span>
        </div>
      </div>
    </div>
  );
}
