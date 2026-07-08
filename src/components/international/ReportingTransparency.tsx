import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import reportingImg from '../../assets/International Studio/Reporting & Transparency.png';

gsap.registerPlugin(ScrollTrigger);

export default function ReportingTransparency() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.rt-header', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.rt-header', start: 'top 85%' } }
      );

      gsap.fromTo('.rt-card', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.rt-card', start: 'top 80%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 bg-[#F9F9F9] font-poppins relative overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Row */}
        <div className="rt-header flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-0 gap-8 md:gap-10">
          
          {/* Left Text */}
          <div className="max-w-[650px]">
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A2E] leading-tight mb-4">
              Reporting & <span className="text-[#7C3AED]">Transparency</span>
            </h2>
            <p className="text-[#6B7280] text-[15.5px] leading-relaxed font-medium max-w-[500px]">
              Schools And Parents Receive Structured Visibility Into Student Learning Journeys Through:
            </p>
          </div>

          {/* Right Line Decor */}
          <div className="hidden md:flex flex-1 items-center justify-end w-full">
            <div className="w-[70%] max-w-[350px] flex items-center opacity-70">
              <div className="flex-1 h-[1.5px] bg-[#3B82F6]"></div>
              <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="rt-card w-full flex justify-center mt-0">
          <img 
            src={reportingImg} 
            alt="Reporting & Transparency" 
            className="w-full max-w-[1100px] h-auto object-contain" 
          />
        </div>

      </div>
    </section>
  );
}
