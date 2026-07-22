import React from 'react';
import journeyImg from '../../assets/CCMM/journey.png';

export default function CcmmJourney() {
  return (
    <section className="w-full bg-[#FAFAFA] font-poppins py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#111827] leading-[1.15] tracking-tight">
            The CCMM journey - <span className="text-[#5B45FF]">How it works</span>
          </h2>
        </div>

        {/* Journey Image Container */}
        <div className="w-full bg-white rounded-3xl p-4 md:p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(91,69,255,0.08)] transition-shadow duration-500 flex justify-center items-center">
          <img 
            src={journeyImg} 
            alt="The CCMM Journey" 
            className="w-full h-auto object-contain rounded-xl max-w-[1200px]"
          />
        </div>

      </div>
    </section>
  );
}
