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
    <section className="w-full bg-[#FAFAFF] border-y border-[#E5E7EB] font-poppins py-16 lg:py-20" ref={containerRef}>
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">

        {/* Top Tag */}
        <div className="shift-content mb-4">
          <span className="text-[#5B45FF] font-bold text-[11px] md:text-[12px] tracking-[0.15em] uppercase">
            WHY CCMM EXISTS
          </span>
        </div>

        {/* Big Heading */}
        <div className="shift-content mb-10 md:mb-14">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-[#1A1A2E] leading-[1.2] tracking-tight">
            The world is moving from the <br className="hidden md:block" /> Information Age to the Cognitive Age.
          </h2>
        </div>

        {/* The Shift Row */}
        <div className="flex flex-row items-center justify-center gap-4 md:gap-6 mb-12 shift-content">
          <h3 className="text-[22px] sm:text-[28px] lg:text-[36px] font-extrabold text-[#6B7280]">
            Information Age
          </h3>
          <div className="text-[#D97706] text-[22px] sm:text-[28px] lg:text-[36px] font-bold">
            →
          </div>
          <h3 className="text-[22px] sm:text-[28px] lg:text-[36px] font-extrabold text-[#5B45FF]">
            Cognitive Age
          </h3>
        </div>

        {/* Bottom Text */}
        <div className="shift-content flex flex-col items-center gap-6 mb-12 text-[#4B5563] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] font-medium text-center">
          <p className="max-w-3xl">
            Children entering Grade 1 today will graduate into careers, problems, and creative possibilities that don't yet exist - most of them shaped by intelligent machines, agentic systems, and human-AI collaboration. Yet most schools are still asking: <span className="text-[#1A1A2E] font-bold">Where do we begin? What does an AI-ready classroom even look like? How do we know we're on the right track?</span>
          </p>
          <p>
            CCMM closes that gap. It distils global standards and India's ground realities into one cohesive maturity model designed exclusively for schools - from Tier-1 metros to aspirational rural classrooms.
          </p>
        </div>

        {/* BUILT ON Section */}
        <div className="shift-content">
          <span className="text-gray-500 font-semibold text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 block">
            BUILT ON
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {[
              "UNESCO AI COMPETENCY FRAMEWORKS",
              "OECD LEARNING COMPASS 2030",
              "NEP 2020",
              "INDIA'S GROUND REALITIES"
            ].map((tag, idx) => (
              <div key={idx} className="border border-gray-200 text-[#5B45FF] font-semibold text-[10px] md:text-[11px] tracking-[0.1em] px-4 py-2 rounded-sm bg-transparent">
                {tag}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
