import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import heroImg from '../../assets/for students/heroImg.webp';

export default function StudentsHero() {
  return (
    <section 
      className="relative w-full min-h-screen flex items-center bg-[#070514] text-white pt-20 sm:pt-24 lg:pt-24 pb-20 lg:pb-28 overflow-hidden font-poppins"
    >
      {/* Background Image — hidden on mobile, shown on md+ */}
      <div 
        className="absolute inset-x-0 bottom-0 top-16 sm:top-20 lg:top-24 z-0 bg-cover bg-center bg-no-repeat lg:bg-right hidden md:block"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      
      {/* Gradient overlay — md+ only */}
      <div className="absolute inset-x-0 bottom-0 top-16 sm:top-20 lg:top-24 z-0 bg-gradient-to-r from-[#070514] via-[#070514]/90 to-transparent hidden md:block lg:w-[60%]"></div>

      {/* Full dark overlay on mobile so text is always readable */}
      <div className="absolute inset-0 z-0 bg-[#070514]/95 md:hidden"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left pt-4 sm:pt-8 lg:pt-10">
          
          <div className="text-[#B283FF] text-[11px] sm:text-[13px] font-bold tracking-widest uppercase mb-3 sm:mb-4 flex items-center gap-2 font-poppins">
            <span>FOR STUDENTS</span>
            <span className="text-[#B283FF]/50">|</span>
            <span>AGES 13-22</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.25] tracking-tight mb-5 sm:mb-6 font-poppins">
            You're not just<br />
            learning about the future.<br />
            <span className="bg-gradient-to-r from-[#A78BFA] via-[#D946EF] to-[#FF6644] text-transparent bg-clip-text">
              You're building it.
            </span>
          </h1>

          <p className="text-[#D1D5DB] text-[14px] sm:text-[16px] md:text-[17px] leading-[1.7] mb-6 sm:mb-8 max-w-full sm:max-w-[90%] font-medium">
            School teaches you formulas and facts. But what about the skills the real world actually demands? What if you want to launch a project, solve a global problem, or use AI to tell your story?
          </p>

          <div className="mb-4 w-full">
            <h3 className="text-[#B283FF] text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-poppins">
              If you've ever asked yourself...
            </h3>
            <ul className="flex flex-col gap-4 sm:gap-5 mb-6 sm:mb-8">
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 min-w-[22px]">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[1.5px] border-[#8B5CF6] flex items-center justify-center">
                    <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B5CF6]" />
                  </div>
                </div>
                <span className="text-[#D1D5DB] text-[13px] sm:text-[15px] font-medium leading-snug">How can I learn something real - not just textbook theory?</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 min-w-[22px]">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[1.5px] border-[#8B5CF6] flex items-center justify-center">
                    <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B5CF6]" />
                  </div>
                </div>
                <span className="text-[#D1D5DB] text-[13px] sm:text-[15px] font-medium leading-snug">Can I actually build an app, start a movement, or pitch a new idea?</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 min-w-[22px]">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[1.5px] border-[#8B5CF6] flex items-center justify-center">
                    <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B5CF6]" />
                  </div>
                </div>
                <span className="text-[#D1D5DB] text-[13px] sm:text-[15px] font-medium leading-snug">What if I want to change the world with AI?</span>
              </li>
            </ul>
          </div>

          <p className="text-[15px] sm:text-[17px] text-[#D1D5DB] font-medium mb-8 sm:mb-10">
            Then <span className="text-[#F59E0B] font-bold">Skillzza k-12</span> is built for you.
          </p>

          <button className="group relative flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#F59E0B] via-[#E82194] to-[#8B5CF6] rounded-full text-white font-bold text-[13px] sm:text-[14px] tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(232,33,148,0.5)] hover:scale-105 font-poppins">
            <span>Explore Programmes</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </button>
          
        </div>
      </div>
    </section>
  );
}
