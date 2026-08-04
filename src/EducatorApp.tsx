import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import EducatorHero from './components/educator/EducatorHero';
// import WhoItsFor from './components/learners/WhoItsFor';
import SupportEducators from './components/educator/SupportEducators';
import SchoolPartnershipOfferings from './components/learners/SchoolPartnershipOfferings';
import EducatorInstitutionalImpact from './components/educator/EducatorInstitutionalImpact';
import EducatorWhyItMatters from './components/educator/EducatorWhyItMatters';
import EducatorCTA from './components/educator/EducatorCTA';
import Footer from './components/Footer';

export default function EducatorApp() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = 'For Educator | Skillzza';

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
        <EducatorHero />
        <SupportEducators />
        <EducatorInstitutionalImpact />
        <EducatorWhyItMatters />
        {/* <WhoItsFor /> */}
        <EducatorCTA />
        <Footer />
      </main>
    </div>
  );
}
