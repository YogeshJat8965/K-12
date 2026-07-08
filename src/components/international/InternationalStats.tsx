import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedCounter } from '../../components/studio/Animations';

gsap.registerPlugin(ScrollTrigger);

export default function InternationalStats() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (statsRef.current) {
        gsap.from(statsRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 90%',
          }
        });
      }
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={statsRef} className="w-full bg-[#F4F0FF] border-t border-[#D8C8FF] py-8 md:py-12 font-poppins relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-center">
        
        {/* Stat 1 */}
        <div className="flex flex-col items-center flex-1">
          <h3 className="text-[40px] md:text-[48px] font-bold text-[#7C3AED] leading-none mb-2">
            <AnimatedCounter end={149999} suffix="+" />
          </h3>
          <p className="text-[15px] font-medium text-[#4B5563]">Students Engaged</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center flex-1">
          <h3 className="text-[40px] md:text-[48px] font-bold text-[#7C3AED] leading-none mb-2">
            <AnimatedCounter end={150} suffix="+" />
          </h3>
          <p className="text-[15px] font-medium text-[#4B5563]">Partner Schools & Institutions</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center flex-1">
          <h3 className="text-[40px] md:text-[48px] font-bold text-[#7C3AED] leading-none mb-2">
            <AnimatedCounter end={100} suffix="+" />
          </h3>
          <p className="text-[15px] font-medium text-[#4B5563]">Student Innovation Projects</p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center flex-1">
          <h3 className="text-[40px] md:text-[48px] font-bold text-[#7C3AED] leading-none mb-2">
            <AnimatedCounter end={699} suffix="+" />
          </h3>
          <p className="text-[15px] font-medium text-[#4B5563]">Educator Cohorts Upskilled</p>
        </div>

      </div>
    </div>
  );
}
