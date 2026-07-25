import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import LearnersHero from './components/learners/LearnersHero';
// import WhoItsFor from './components/learners/WhoItsFor';
import WhatSchoolCanEnable from './components/learners/WhatSchoolCanEnable';

import SchoolPartnershipOfferings from './components/learners/SchoolPartnershipOfferings';
import InstitutionalImpact from './components/learners/InstitutionalImpact';
import LearnersCTA from './components/learners/LearnersCTA';
import Footer from './components/Footer';

export default function LearnersApp() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = 'Learners | Skill Studio';

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
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-clip bg-white text-slate-900 font-poppins" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] bg-gray-100">
        <div
          className="h-full bg-[#5B32EA] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      <main className="min-h-screen">
        <LearnersHero />
        <WhatSchoolCanEnable />
        <SchoolPartnershipOfferings />
        <InstitutionalImpact />
        {/* <WhoItsFor /> */}
        <LearnersCTA />
        <Footer />
      </main>
    </div>
  );
}
