import React from 'react';
import { Calendar } from 'lucide-react';
import heroImg from '../../assets/CCMM/hero.png';

export default function CcmmHero() {
  return (
    <section className="w-full bg-[#EFEFFB] font-poppins pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden relative">
      {/* Background soft blob */}
      <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-purple-50/40 rounded-bl-[100%] z-0 pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between relative lg:min-h-[550px]">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[55%] lg:max-w-[750px] flex flex-col items-start text-left relative z-20 pt-4 lg:py-10">
            <h1 className="text-[42px] md:text-[54px] lg:text-[62px] font-extrabold text-[#111827] leading-[1.1] tracking-tight mb-6">
              
              Cognitive Computing <br />
              <span className="text-[#5B45FF]">Maturity Model</span>
            </h1>

            <h3 className="text-[18px] md:text-[22px] font-bold text-[#111827] leading-snug mb-5 max-w-lg">
              Skillzza's signature AI Maturity Assessment & Certification for K-12 Schools
            </h3>

            <p className="text-[#4B5563] font-medium text-[15px] md:text-[17px] leading-relaxed max-w-xl mb-10">
              A universal algorithm for schools to energise young brains in the world of Emerging Technologies (aligned to the United Nations Sustainable Development Goals)
            </p>

            <button className="bg-[#5B45FF] hover:bg-[#4a35ea] text-white font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-lg shadow-[0_8px_20px_rgba(91,69,255,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto">
              <Calendar className="w-5 h-5" strokeWidth={2.5} />
              <span>Request a CCMM's Discover Call</span>
            </button>
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
