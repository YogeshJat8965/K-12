import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EducatorHero from './components/educator/EducatorHero';
import TeacherAtCenter from './components/educator/TeacherAtCenter';
import MembershipBenefits from './components/educator/MembershipBenefits';
import AiImmersion from './components/educator/AiImmersion';
import CurriculumSprints from './components/educator/CurriculumSprints';
import TheAscent from './components/educator/TheAscent';
import CommunityCircles from './components/educator/CommunityCircles';
import ProgrammeCalendar from './components/educator/ProgrammeCalendar';
import WhatWeDo from './components/educator/WhatWeDo';
import MembershipTiers from './components/educator/MembershipTiers';
import NationalNetwork from './components/educator/NationalNetwork';
import EducatorBanner from './components/educator/EducatorBanner';

export default function EducatorApp() {
  useEffect(() => {
    document.title = 'Educator Circle | Skillzza';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 w-full bg-white">
        <EducatorHero />
        <TeacherAtCenter />
        <MembershipBenefits />
        <AiImmersion />
        <CurriculumSprints />
        <TheAscent />
        <CommunityCircles />
        <WhatWeDo />
        <ProgrammeCalendar />
        <MembershipTiers />
        <NationalNetwork />
        <EducatorBanner />
      </main>
      
      <Footer />
    </div>
  );
}
