import React from 'react';
import { Calendar } from 'lucide-react';
import heroImg from '../../assets/CCMM/hero.webp';

export default function CcmmHero() {
  return (
    <section className="w-full bg-[#EFEFFB] font-poppins pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden relative">
      {/* Background soft blob */}
      <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-purple-50/40 rounded-bl-[100%] z-0 pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between relative lg:min-h-[550px]">

          {/* Left Text Content */}
          <div className="w-full lg:w-[55%] lg:max-w-[750px] flex flex-col items-start text-left relative z-20 pt-4 lg:py-10">
            <div className="flex flex-col gap-1.5 mb-6">
              <span className="text-[#5B45FF] font-bold text-[12px] md:text-[13px] tracking-[0.15em] uppercase">
                THE COGNITIVE COMPUTING MATURITY MODEL
              </span>
              <span className="text-gray-500 font-semibold text-[11px] md:text-[12px] tracking-[0.1em] uppercase">
                ONE QUESTION DEFINES THE ERA →
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[46px] xl:text-[50px] font-extrabold text-[#1A1A2E] leading-[1.15] tracking-tight mb-6">
              How AI-ready is <br className="hidden md:block" />
              your school, <span className="text-[#5B45FF]">really?</span>
            </h1>

            <p className="text-[#6B7280] text-base md:text-lg leading-[1.8] font-medium max-w-xl mb-8">
              CCMM is Skillzza's certification framework that measures where your school stands today, prescribes a stage-wise transformation roadmap, and certifies you when you arrive. Not a course - a transformation standard, built for Indian schools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const banner = document.getElementById('ccmm-banner-section');
                  if (banner) {
                    banner.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => banner.click(), 600);
                  }
                }}
                className="bg-[#5B45FF] hover:bg-[#4a35ea] text-white font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-lg shadow-[0_8px_20px_rgba(91,69,255,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Register your school</span>
                <span className="text-xl leading-none">→</span>
              </button>
              <button onClick={() => window.location.href = '/contact'} className="bg-transparent hover:bg-white/50 text-[#1A1A2E] border-2 border-gray-300 font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-lg shadow-sm hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                <span>Get a free audit</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[#4B5563] text-[11px] md:text-[12px] font-bold tracking-[0.1em] uppercase bg-white/50 backdrop-blur-sm py-3 px-5 rounded-xl border border-gray-100 shadow-sm inline-flex">
              <span>AWARE</span>
              <span className="text-gray-400">→</span>
              <span>EMERGING</span>
              <span className="text-gray-400">→</span>
              <span>INTEGRATED</span>
              <span className="text-gray-400">→</span>
              <span>ADVANCED</span>
              <span className="text-gray-400">→</span>
              <span>COGNITIVE</span>
            </div>
          </div>

          {/* Right Image (Absolute on Desktop to make it larger) */}
          <div className="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-10 xl:-right-12 lg:w-[550px] xl:w-[600px] relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0 pointer-events-none">
            <img
              src={heroImg}
              alt="Cognitive Computing Maturity Model"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
