import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CcmmHero from './components/ccmm/CcmmHero';
import CcmmAiReady from './components/ccmm/CcmmAiReady';
import CcmmWhyExists from './components/ccmm/CcmmWhyExists';
import CcmmPillars from './components/ccmm/CcmmPillars';
import CcmmStages from './components/ccmm/CcmmStages';
import CcmmMeasures from './components/ccmm/CcmmMeasures';
import CcmmCertification from './components/ccmm/CcmmCertification';
import CcmmCarries from './components/ccmm/CcmmCarries';
import CcmmJourney from './components/ccmm/CcmmJourney';
import CcmmWhySchool from './components/ccmm/CcmmWhySchool';
import CcmmBegin from './components/ccmm/CcmmBegin';

export default function CcmmApp() {
  useEffect(() => {
    document.title = 'CCMM | Skillzza';
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 w-full bg-white overflow-x-hidden">
        <CcmmHero />
        <CcmmAiReady />
        <CcmmWhyExists />
        <CcmmPillars />
        <CcmmStages />
        <CcmmMeasures />
        <CcmmCertification />
        <CcmmCarries />
        <CcmmJourney />
        <CcmmWhySchool />
        <CcmmBegin />
      </main>
      
      <Footer />
    </div>
  );
}
