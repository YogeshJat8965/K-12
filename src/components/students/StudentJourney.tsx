import React from 'react';
import stepsImg from '../../assets/for students/steps.webp';

export default function StudentJourney() {
  return (
    <section id="student-journey-section" className="w-full bg-[#030425] text-white flex flex-col items-center overflow-hidden font-poppins">
      
      {/* Top Content */}
      <div className="text-center px-4 sm:px-6 pt-12 sm:pt-16 pb-0 flex flex-col items-center">
        <h4 className="text-[#8B5CF6] text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-3 font-poppins">
          THE STUDENT JOURNEY
        </h4>
        <h2 className="text-white text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold mb-3 sm:mb-4 font-poppins tracking-tight px-2">
          From First Spark to Future-Ready
        </h2>
        <p className="text-[#D1D5DB] text-[13px] sm:text-[15px] md:text-[16px] max-w-xl sm:max-w-2xl mx-auto leading-snug px-2">
          Skillzza k-12 is built as a <span className="text-[#B283FF]">five-stage</span> journey.<br className="hidden sm:block" />
          Start anywhere. Move at your own pace. Stack programmes as you grow.
        </p>
      </div>

      {/* Image with NO GAP */}
      <div className="w-full max-w-[1200px] mx-auto flex justify-center m-0 p-0 leading-none">
        <img 
          src={stepsImg} 
          alt="The Student Journey Steps" 
          className="w-full h-auto object-contain block m-0 p-0"
        />
      </div>

      {/* Bottom Content */}
      <div className="text-center px-4 sm:px-6 pt-0 pb-12 sm:pb-20 flex flex-col items-center relative z-10 -mt-4 sm:-mt-10 md:-mt-14">
        <p className="text-[#D1D5DB] text-[13px] sm:text-[15px] md:text-[16px] max-w-xl sm:max-w-2xl mx-auto leading-snug drop-shadow-md">
          <span className="text-[#B283FF] font-semibold">Fourteen programmes.</span> One continuous learning path.<br />
          Every student's journey is unique.
        </p>
      </div>

    </section>
  );
}
