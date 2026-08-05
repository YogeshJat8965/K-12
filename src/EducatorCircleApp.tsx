import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// The new Hero we will build soon
// import EducatorCircleHero from './components/educator/EducatorCircleHero'; 

import WhatWeDo from './components/educator/WhatWeDo';
import TeacherAtCenter from './components/educator/TeacherAtCenter';
import TheAscent from './components/educator/TheAscent';
import MembershipTiers from './components/educator/MembershipTiers';
import MembershipBenefits from './components/educator/MembershipBenefits';
import NationalNetwork from './components/educator/NationalNetwork';
import CommunityCircles from './components/educator/CommunityCircles';
import CurriculumSprints from './components/educator/CurriculumSprints';
import AiImmersion from './components/educator/AiImmersion';
import ProgrammeCalendar from './components/educator/ProgrammeCalendar';
import EducatorBanner from './components/educator/EducatorBanner';

export default function EducatorCircleApp() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = 'The Educator Circle | Skillzza';

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
        {/* <EducatorCircleHero /> */}
        <TeacherAtCenter />
        <WhatWeDo />
        <TheAscent />
        <MembershipTiers />
        <MembershipBenefits />
        <NationalNetwork />
        <CommunityCircles />
        <CurriculumSprints />
        <AiImmersion />
        <ProgrammeCalendar />
        <EducatorBanner />
      </main>

      <Footer />
    </div>
  );
}
