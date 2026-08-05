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
            <div className="inline-block border border-[#5B45FF]/30 bg-[#5B45FF]/10 text-[#5B45FF] font-bold text-[13px] tracking-wide uppercase px-4 py-1.5 rounded-full mb-6">
              The first AI-maturity standard built for schools
            </div>

            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[46px] xl:text-[50px] font-extrabold text-[#1A1A2E] leading-[1.15] tracking-tight mb-6">
              How AI-ready is your <br className="hidden md:block" />
              <span className="text-[#5B45FF]">school, really?</span>
            </h1>

            <p className="text-[#6B7280] text-base md:text-lg leading-[1.8] font-medium max-w-xl mb-8">
              The Cognitive Computing Maturity Model is Skillzza’s diagnostic that scores your school, maps the gap, and certifies your readiness for the cognitive age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <button onClick={() => window.location.href = '#'} className="bg-[#5B45FF] hover:bg-[#4a35ea] text-white font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-lg shadow-[0_8px_20px_rgba(91,69,255,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
                Take the 2-minute check
              </button>
              <button onClick={() => window.location.href = '/contact'} className="bg-white hover:bg-gray-50 text-[#111827] border-2 border-gray-200 font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-lg shadow-sm hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                <Calendar className="w-5 h-5 text-[#5B45FF]" strokeWidth={2.5} />
                <span>Book a discovery call</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[#4B5563] text-[14px] md:text-[15px] font-medium bg-white/50 backdrop-blur-sm py-2 px-4 rounded-xl border border-gray-100 shadow-sm inline-flex">
              <span>5 maturity stages</span>
              <span className="w-1 h-1 rounded-full bg-[#5B45FF]"></span>
              <span>30+ indicators</span>
              <span className="w-1 h-1 rounded-full bg-[#5B45FF]"></span>
              <span>4 transformation pillars</span>
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
