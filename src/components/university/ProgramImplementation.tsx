import React from 'react';
import registrationImg from '../../assets/university/registration to launch.png';

export default function ProgramImplementation() {
  return (
    <section className="w-full bg-[#F8FBFD] font-poppins pt-20 pb-24">
      <div className="max-w-[1536px] mx-auto px-8 md:px-20">
        
        {/* Header Section */}
        <div className="w-full max-w-4xl relative z-10">
          <p className="text-[#7C3AED] font-bold text-[11px] tracking-widest uppercase mb-4">
            PROGRAM IMPLEMENTATION
          </p>
          <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-extrabold text-[#1A1A2E] leading-tight tracking-tight">
            From Registration To <span className="text-[#7C3AED]">Launch</span> -<br />
            A Guided Rollout
          </h2>
        </div>

        {/* Implementation Image */}
        <div className="w-full mx-auto flex justify-center -mt-6 lg:-mt-12 relative z-0">
          <img 
            src={registrationImg} 
            alt="From Registration To Launch - A Guided Rollout" 
            className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
          />
        </div>

      </div>
    </section>
  );
}
