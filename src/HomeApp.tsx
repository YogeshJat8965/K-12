import { useEffect, useRef, Suspense, lazy } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import Navbar from './components/Navbar';
import HomeHero from './home/HomeHero';
import HomeMission from './home/HomeMission';
import HomeTrusted from './home/HomeTrusted';
import HomeAbout from './home/HomeAbout';
import HomeEcosystem from './home/HomeEcosystem';
import HomeExecution from './home/HomeExecution';
import HomeJourney from './home/HomeJourney';
import HomePhilosophy from './home/HomePhilosophy';
import HomeAdobe from './home/HomeAdobe';
import HomeCompare from './home/HomeCompare';
import HomeReady from './home/HomeReady';
import HomeCTA from './home/HomeCTA';
import './home/HomeResponsive.css';
import HomeLearningEcosystem from './home/HomeLearningEcosystem';
import Footer from './components/Footer';

const ParticlesBackground = lazy(() => import('./home/ParticlesBackground'));

gsap.registerPlugin(ScrollTrigger);

// Global default to replay animations when scrolling back
ScrollTrigger.defaults({
  toggleActions: 'play none none reverse'
});

export default function HomeApp() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initialize Lenis (Smooth Scroll)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);

    gsap.ticker.lagSmoothing(0);

    // 2. Scroll Progress Bar
    gsap.to(progressRef.current, {
      scaleX: 1,
      transformOrigin: 'left center',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: "'Poppins', sans-serif" }}>
      
      {/* Scroll Progress Line */}
      <div 
        ref={progressRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '3px',
          background: '#6C2BD9',
          zIndex: 9999,
          transform: 'scaleX(0)',
          transformOrigin: 'left center',
        }}
      />

      {/* Global Subtle Particles Background */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.2 }}>
        <Suspense fallback={null}>
          <ParticlesBackground />
        </Suspense>
      </div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <div>
          <HomeHero />
          <HomeMission />
          <HomeTrusted />
          <HomeAbout />
          <HomeLearningEcosystem />
          {/* <HomeCompare /> */}
          {/* <HomeExecution /> */}
          <HomeJourney />
          <HomePhilosophy />
          <HomeAdobe />
          <HomeEcosystem />
          <HomeReady />
          {/* <HomeCTA /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
