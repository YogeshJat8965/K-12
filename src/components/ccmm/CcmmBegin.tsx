import React from 'react';
import { Calendar } from 'lucide-react';
import beginImg from '../../assets/CCMM/begin.webp';

export default function CcmmBegin() {
  return (
    <section className="w-full bg-[#FAFAFA] font-poppins py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative group">
            <div className="absolute inset-0 bg-[#5B45FF]/15 rounded-[24px] transform -translate-x-4 -translate-y-4 -z-10 group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>
            <img 
              src={beginImg} 
              alt="Educators and professionals in a meeting" 
              className="w-full h-auto object-cover rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_15px_40px_rgba(91,69,255,0.12)] transition-shadow duration-500 max-w-[750px]"
            />
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-extrabold text-[#111827] leading-[1.1] tracking-tight mb-4">
              Begin Your School's<br />
              <span className="text-[#5B45FF]">CCMM</span> Journey
            </h2>
            
            {/* Small Purple Line */}
            <div className="w-16 h-1 bg-[#5B45FF] rounded-full mb-8"></div>

            <h3 className="text-[18px] md:text-[22px] font-semibold text-[#5B45FF] leading-snug mb-6">
              The cognitive age is not coming. It is already here.
            </h3>

            <p className="text-[#4B5563] font-medium text-[15px] md:text-[17px] leading-relaxed max-w-xl mb-10">
              The Schools That Act Today Will Define What Learning Looks Like For The Next Generation. Skillzza Invites You To Take The First Measured, Confident Step On That Journey.
            </p>

            <button onClick={() => window.location.href = '/contact'} className="flex items-center gap-3 bg-[#5B45FF] text-white font-semibold text-[15px] md:text-[16px] px-8 py-4 rounded-lg shadow-[0_4px_15px_rgba(91,69,255,0.3)] hover:bg-[#4A34EE] hover:shadow-[0_8px_25px_rgba(91,69,255,0.4)] hover:-translate-y-1 transition-all duration-300">
              <Calendar className="w-5 h-5" />
              Request a CCMM's Discover Call
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
