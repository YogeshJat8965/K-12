import React, { useState } from 'react';
import bannerImg from '../../assets/digital creativity/bannerimg.png';
import CCMMQuizModal from '../CCMMQuizModal';

export default function CcmmBanner() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <>
      <section
        className="w-full bg-[#0690D7] text-white overflow-hidden relative cursor-pointer group"
        onClick={() => setIsQuizOpen(true)}
      >
        <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 min-h-[220px] md:min-h-[280px] flex flex-col-reverse md:flex-row items-stretch justify-between relative">

          {/* Left Text Content */}
          <div className="w-full md:w-[65%] py-10 md:py-12 relative z-10 flex flex-col justify-center items-start">
            <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-tight mb-4 md:mb-5">
              Find your school’s maturity stage
            </h2>
            <p className="text-white/95 text-[15px] sm:text-base md:text-lg leading-relaxed max-w-2xl font-medium mb-6">
              <span className="font-bold text-[#FFD100]">Free · 2 minutes · 6 questions.</span> Answer six quick questions to see your estimated CCMM stage - the same axes our assessors score against on campus. Each option carries a score of 0–3.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsQuizOpen(true);
              }}
              className="bg-[#111827] hover:bg-[#1f2937] text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
            >
              Take your CCMM Assessment
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[35%] flex justify-center md:justify-end items-end relative z-10 pt-8 md:pt-0">
            <img
              src={bannerImg}
              alt="CCMM Assessment Banner"
              className="h-[200px] md:h-[280px] lg:h-[300px] object-contain object-bottom"
            />
          </div>

        </div>
      </section>

      <CCMMQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </>
  );
}
