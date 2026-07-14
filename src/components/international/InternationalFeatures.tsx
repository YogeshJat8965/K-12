import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Lightbulb, ShieldCheck, Rocket, Briefcase, Building2, Box } from 'lucide-react';
import { AnimatedCounter } from '../../components/studio/Animations';

import FourImage from '../../assets/International Studio/4 image.png';
import DesignedImage from '../../assets/International Studio/Designed for Schools That Want to Build.png';

gsap.registerPlugin(ScrollTrigger);

export default function InternationalFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        });
      }

      // Removed 5 Icons Row GSAP block as it's replaced by an image
      if (iconsRef.current) {
        gsap.from(iconsRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: iconsRef.current,
            start: 'top 85%',
          }
        });
      }

      // Large Image
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-0 pb-0 bg-[#FBF7EC] overflow-hidden font-poppins mt-0">
      
      {/* ----- Background Decor ----- */}
      {/* Top right circular overlay */}
      <div className="absolute top-0 right-0 w-[40%] pb-[40%] border-[1.5px] border-blue-100 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none z-0"></div>
      <div className="absolute top-[10%] right-[10%] w-6 h-6 border-[2px] border-blue-200 rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* New Designed For Schools Image */}
        <div ref={iconsRef} className="w-full max-w-[1200px] flex justify-center relative z-20">
          <img 
            src={DesignedImage} 
            alt="Designed for Schools That Want to Build" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
