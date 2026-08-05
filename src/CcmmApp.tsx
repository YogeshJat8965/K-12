import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CcmmHero from './components/ccmm/CcmmHero';
import CcmmAgeShift from './components/ccmm/CcmmAgeShift';
import CcmmBanner from './components/ccmm/CcmmBanner';
import CcmmReportForm from './components/ccmm/CcmmReportForm';
import CcmmPillars from './components/ccmm/CcmmPillars';
import CcmmWhyExists from './components/ccmm/CcmmWhyExists';
import CcmmStages from './components/ccmm/CcmmStages';
import CcmmMeasures from './components/ccmm/CcmmMeasures';
import CcmmCertification from './components/ccmm/CcmmCertification';
import CcmmCarries from './components/ccmm/CcmmCarries';
import CcmmJourney from './components/ccmm/CcmmJourney';
import CcmmWhySchool from './components/ccmm/CcmmWhySchool';
import CcmmBegin from './components/ccmm/CcmmBegin';
import CcmmCta from './components/ccmm/CcmmCta';

export default function CcmmApp() {
  useEffect(() => {
    document.title = 'CCMM | Skillzza';
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 w-full bg-white overflow-x-hidden">
        <CcmmHero />
        <CcmmAgeShift />
        <CcmmBanner />
        <CcmmReportForm />
        <CcmmPillars />
        {/* <CcmmWhyExists /> */}
        <CcmmStages />
        {/* <CcmmMeasures /> */}
        <CcmmCertification />
        <CcmmCarries />
        {/* <CcmmJourney /> */}
        {/* <CcmmWhySchool /> */}
        {/* <CcmmBegin /> */}
        <CcmmCta />
      </main>
      
      <Footer />
    </div>
  );
}
