import heroImg from './assets/skill studio/hero img.png';
import ScrollReveal from './components/ScrollReveal';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from './hooks/useScrollReveal';
import StudioStats from './components/studio/StudioStats';
import WhatIsSkillzzaClub from './components/studio/WhatIsSkillzzaClub';
import SkillChallenge from './components/studio/SkillChallenge';
import StudioGrid from './components/studio/StudioGrid';
import LearningPathway from './components/studio/LearningPathway';
import ImplementationFramework from './components/studio/ImplementationFramework';
import ImpactFramework from './components/studio/ImpactFramework';
import Partnerships from './components/studio/Partnerships';
import TrustedBy from './components/studio/TrustedBy';

export default function SkillStudioApp() {
  useScrollReveal();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = 'Skill Studio - Empowering Future Innovators | Skillzza';

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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-500/30 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] bg-slate-100">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

        {/* Background Image - Absolute positioned to the right */}
        <div className="absolute top-16 right-0 w-full lg:w-[80%] h-[calc(100%-6rem)] z-0 hidden lg:block">
          <img
            src={heroImg}
            alt="Skill Studio Hero"
            className="w-full h-full object-cover object-right"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 30%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%)'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center">

            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-left">
              <ScrollReveal>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                  The <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Skill Studio</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-snug">
                  Empowering Students with <br className="hidden md:block" />
                  <span className="text-purple-600">Future Skills, Creativity & Innovation</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-slate-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                  An AI-powered learning ecosystem designed to help students explore, build, and excel beyond traditional education.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-purple-200/50 transition-all hover:-translate-y-1 active:scale-95">
                    JOIN THE CLUB
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="group px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:border-purple-600 hover:text-purple-600 transition-all active:scale-95">
                    EXPLORE PROGRAMS
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Mobile Image - only shows on small screens */}
            <div className="w-full mt-12 lg:hidden">
              <img
                src={heroImg}
                alt="Skill Studio Hero"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      <StudioStats />
      <WhatIsSkillzzaClub />
      <SkillChallenge />
      <StudioGrid />
      <LearningPathway />
      <ImplementationFramework />
      <ImpactFramework />
      <TrustedBy />
      <Partnerships />
    </div>
  );
}
