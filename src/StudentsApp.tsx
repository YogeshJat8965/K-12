import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentsHero from './components/students/StudentsHero';
import StudentJourney from './components/students/StudentJourney';
import StageDetails from './components/students/StageDetails';
import AlwaysOnSupport from './components/students/AlwaysOnSupport';
import IsThisYou from './components/students/IsThisYou';
import StudentsCTA from './components/students/StudentsCTA';
import { LenisProvider } from './components/studio/Animations';
import './components/studio/Animations.css';

export default function StudentsApp() {
  useEffect(() => {
    document.title = 'For Students | Skillzza';
    window.scrollTo(0, 0);
  }, []);

  return (
    <LenisProvider>
      <div className="students-page min-h-screen font-poppins bg-[#070514] overflow-x-hidden">
        <Navbar />
        
        <main>
          <StudentsHero />
          <StudentJourney />
          <StageDetails />
          <AlwaysOnSupport />
          <IsThisYou />
          <StudentsCTA />
        </main>

        <Footer />
      </div>
    </LenisProvider>
  );
}
