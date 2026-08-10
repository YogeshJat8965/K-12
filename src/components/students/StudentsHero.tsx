import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import heroImg from '../../assets/for students/main hero img.png';

export default function StudentsHero() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center bg-white text-gray-900 pt-20 sm:pt-24 lg:pt-24 pb-10 lg:pb-10 overflow-hidden font-poppins"
    >
      {/* Background Image - hidden on mobile, shown on md+ */}
      <div
        className="absolute inset-x-0 bottom-0 top-0 z-0 bg-[length:auto_85%] bg-center bg-no-repeat lg:bg-right hidden md:block"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Gradient overlay - md+ only */}
      <div className="absolute inset-x-0 bottom-0 top-0 z-0 bg-gradient-to-r from-white via-white/95 to-transparent hidden md:block lg:w-[65%]"></div>

      {/* Full white overlay on mobile so text is always readable */}
      <div className="absolute inset-0 z-0 bg-white/95 md:hidden"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left pt-4 sm:pt-8 lg:pt-10 lg:pl-10 xl:pl-16">

          <div className="text-[#8B5CF6] text-[11px] sm:text-[13px] font-bold tracking-widest uppercase mb-3 sm:mb-4 flex items-center gap-2 font-poppins">
            <span>FOR STUDENTS</span>
            <span className="text-[#8B5CF6]/50">|</span>
            <span>AGES 13-22</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.25] tracking-tight mb-5 sm:mb-6 font-poppins text-gray-900">
            You're not just<br />
            learning about the future.<br />
            <span className="bg-gradient-to-r from-[#A78BFA] via-[#D946EF] to-[#FF6644] text-transparent bg-clip-text">
              You're building it.
            </span>
          </h1>

          <p className="text-gray-700 text-[14px] sm:text-[16px] md:text-[17px] leading-[1.7] mb-6 sm:mb-8 max-w-full font-medium">
            School teaches you formulas and facts. But what about the skills the real <br /> world actually demands? <br /> What if you want to launch a project,<br /> solve a global problem, or use AI to tell your story?
          </p>

          <div className="mb-4 w-full">
            <h3 className="text-[#8B5CF6] text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-poppins">
              If you've ever asked yourself...
            </h3>
            <ul className="flex flex-col gap-4 sm:gap-5 mb-6 sm:mb-8">
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 min-w-[22px]">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[1.5px] border-[#8B5CF6] flex items-center justify-center">
                    <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B5CF6]" />
                  </div>
                </div>
                <span className="text-gray-700 text-[13px] sm:text-[15px] font-medium leading-snug">How can I learn something real - not just textbook theory?</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 min-w-[22px]">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[1.5px] border-[#8B5CF6] flex items-center justify-center">
                    <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B5CF6]" />
                  </div>
                </div>
                <span className="text-gray-700 text-[13px] sm:text-[15px] font-medium leading-snug">Can I actually build an app, start a movement, or pitch a new idea?</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 min-w-[22px]">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-[1.5px] border-[#8B5CF6] flex items-center justify-center">
                    <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8B5CF6]" />
                  </div>
                </div>
                <span className="text-gray-700 text-[13px] sm:text-[15px] font-medium leading-snug">What if I want to change the world with AI?</span>
              </li>
            </ul>
          </div>

          <p className="text-[15px] sm:text-[17px] text-gray-700 font-medium mb-8 sm:mb-10">
            Then <span className="text-[#F59E0B] font-bold">Skillzza k-12</span> is built for you.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('student-journey-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#F59E0B] via-[#E82194] to-[#8B5CF6] rounded-full text-white font-bold text-[13px] sm:text-[14px] tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(232,33,148,0.5)] hover:scale-105 font-poppins"
          >
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
