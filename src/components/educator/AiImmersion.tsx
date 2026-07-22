import React from 'react';
import aiImmersionImg from '../../assets/educator circle/ai immersion.png';

export default function AiImmersion() {
  return (
    <section className="w-full bg-white font-poppins pt-24 pb-20 relative overflow-hidden">
      
      {/* Top right light purple gradient */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] bg-[#E0E7FF] rounded-full blur-[100px] opacity-60 pointer-events-none z-0"></div>

      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* Left Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
          
          <p className="text-[#4F46E5] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-4">
            AI IMMERSIVE LEARNING FOR TEACHERS
          </p>
          
          <h2 className="text-[34px] md:text-[42px] lg:text-[48px] font-extrabold text-[#111827] leading-[1.15] tracking-tight mb-4">
            The Educator <span className="text-[#4F46E5]">AI Immersion</span><br className="hidden md:block"/> Programme
          </h2>
          
          {/* Accent Line */}
          <div className="w-[100px] h-[4px] bg-[#4F46E5] rounded-full mb-8"></div>
          
          <p className="text-[#4B5563] font-medium text-[15px] md:text-[16px] leading-relaxed max-w-[95%] mb-12 lg:mb-0">
            A Hands-On, 13-Week Journey Designed To Equip Teachers With Practical 
            AI Fluency - Not Just Theory. Every Phase Ends With A Tangible Classroom 
            Deliverable You Can Use On Monday Morning.
          </p>

        </div>
        
        {/* Right Image */}
        <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end">
          <img 
            src={aiImmersionImg} 
            alt="AI Immersion Programme Interface" 
            className="w-full max-w-[850px] h-auto object-contain transform lg:scale-105 lg:origin-right"
          />
        </div>

      </div>
    </section>
  );
}
