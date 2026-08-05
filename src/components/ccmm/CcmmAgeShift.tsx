import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CcmmAgeShift() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.shift-content', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%'
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-[#FAFAFF] border-y border-[#E5E7EB] font-poppins py-10 lg:py-12" ref={containerRef}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">

        {/* The Shift Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-8 shift-content">

          {/* Left Side */}
          <div className="text-center md:text-right flex-1">
            <span className="block text-[#6B7280] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] mb-1.5">
              Where most schools still teach
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#111827]">
              The Information Age
            </h3>
          </div>

          {/* Minimal Arrow */}
          <div className="text-[#5B45FF] text-2xl sm:text-3xl font-light opacity-60 flex-shrink-0 md:rotate-0 rotate-90">
            →
          </div>

          {/* Right Side */}
          <div className="text-center md:text-left flex-1">
            <span className="block text-[#5B45FF] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] mb-1.5">
              Where today's Grade 1 will build careers
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#5B45FF]">
              The Cognitive Age
            </h3>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="shift-content">
          <p className="text-center text-[#4B5563] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.8] max-w-3xl mx-auto font-medium">
            Children starting school today will graduate into work shaped by intelligent machines. <span className="text-[#111827] font-bold">Most schools know this - few know where they actually stand.</span> That’s the question CCMM answers.
          </p>
        </div>

      </div>
    </section>
  );
}
