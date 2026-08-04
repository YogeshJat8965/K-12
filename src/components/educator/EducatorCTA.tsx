import React from 'react';
import { FadeIn3D } from '../animations/ScrollAnimations';

const TriangleIcon = ({ className }: { className?: string }) => (
  <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" className={className}>
    <path d="M10 6L0 12V0L10 6Z" />
  </svg>
);

export default function EducatorCTA() {
  return (
    <section className="w-full bg-white pb-16 font-poppins pt-4">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col gap-10">

        <FadeIn3D delay={0.2} y={40}>
          <div className="bg-gradient-to-r from-[#6731EA] via-[#9146EA] to-[#C95DEB] rounded-[24px] px-6 py-8 lg:px-12 lg:py-10 flex flex-col items-center text-center gap-8 shadow-[0_12px_40px_rgba(103,49,234,0.3)] hover:shadow-[0_16px_50px_rgba(103,49,234,0.4)] transition-shadow duration-300 relative overflow-hidden">

            {/* Very subtle glow effect overlay */}
            <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="max-w-[800px] z-10">
              <h2 className="text-[32px] md:text-[38px] lg:text-[42px] font-extrabold text-white leading-[1.2] mb-3 tracking-tight">
                Join the Educator Movement
              </h2>
              <p className="text-white/95 text-[15px] md:text-[17px] font-medium leading-[1.6]">
                Three ways to start your SKILLZZA K-12 journey today.
              </p>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 w-full z-10">
              <button className="bg-white text-[#6731EA] font-extrabold text-[13px] md:text-[14px] px-6 py-4 rounded-[12px] flex items-center justify-center gap-2.5 hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all shadow-[0_8px_20px_rgba(0,0,0,0.1)]">
                <TriangleIcon className="w-2.5 h-3" /> BECOME A MENTOR
              </button>
              <button className="bg-white text-[#6731EA] font-extrabold text-[13px] md:text-[14px] px-6 py-4 rounded-[12px] flex items-center justify-center gap-2.5 hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all shadow-[0_8px_20px_rgba(0,0,0,0.1)]">
                <TriangleIcon className="w-2.5 h-3" /> GET THE EDUCATOR KIT
              </button>
              <button className="border-[2px] border-white/80 text-white font-extrabold text-[13px] md:text-[14px] px-6 py-4 rounded-[12px] flex items-center justify-center gap-2.5 hover:bg-white/10 hover:border-white hover:scale-105 active:scale-95 transition-all">
                <TriangleIcon className="w-2.5 h-3 opacity-90" /> BOOK A SCHOOL WORKSHOP
              </button>
            </div>




          </div>
        </FadeIn3D>

      </div>
    </section>
  );
}
