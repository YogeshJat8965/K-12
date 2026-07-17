import React from 'react';
import timelineImg from '../../assets/university/industries readiness.png';

export default function IndustryReadiness() {
  return (
    <section className="w-full bg-white font-poppins pt-16 pb-0 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-8 md:px-20 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center relative z-20">
          <p className="text-[#7C3AED] font-bold text-[11px] tracking-widest uppercase mb-4">
            COMPLETE LEARNING JOURNEY
          </p>
          <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-extrabold text-[#1A1A2E] leading-tight tracking-tight">
            Every Student's Path To <span className="text-[#7C3AED]">Industry</span><br />
            Readiness
          </h2>
        </div>

        {/* Timeline Image with negative margins to kill whitespace built into the image */}
        <div className="w-full flex justify-center mt-[-20px] md:mt-[-50px] lg:mt-[-80px] mb-[-40px] md:mb-[-80px] lg:mb-[-120px] relative z-10 pointer-events-none">
          <img 
            src={timelineImg} 
            alt="Path to Industry Readiness Timeline" 
            className="w-full max-w-[1400px] h-auto object-contain pointer-events-auto"
          />
        </div>

      </div>
    </section>
  );
}
