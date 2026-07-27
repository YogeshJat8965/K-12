import React from 'react';
import { Award } from 'lucide-react';
import oneFoundationImg from '../../assets/university/one foundation.webp';

export default function LearningPathways() {
  return (
    <section className="w-full bg-white font-poppins pt-24 pb-32">
      <div className="max-w-[1536px] mx-auto px-8 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[#7C3AED] font-bold text-[11px] tracking-widest uppercase mb-4">
            LEARNING PATHWAYS
          </p>
          <h2 className="text-[36px] md:text-[42px] lg:text-[46px] font-extrabold text-[#1A1A2E] leading-tight tracking-tight mb-5">
            One Foundation. Three Professional<br />
            <span className="text-[#7C3AED]">Certificates.</span>
          </h2>
          <div className="w-20 h-[5px] bg-[#7C3AED] rounded-full"></div>
        </div>

        {/* Featured Card */}
        <div className="max-w-[1100px] mx-auto bg-white rounded-[32px] border border-gray-100 shadow-[0_8px_40px_rgba(124,58,237,0.05)] p-8 lg:px-12 lg:py-8 flex flex-col lg:flex-row items-center gap-12 hover:shadow-[0_12px_50px_rgba(124,58,237,0.1)] transition-shadow duration-500">
          
          {/* Left Image */}
          <div className="w-full lg:w-[45%] flex justify-center">
            <img 
              src={oneFoundationImg} 
              alt="One Foundation" 
              className="w-full max-w-[480px] h-auto object-contain scale-[1.15] hover:scale-[1.2] transition-transform duration-700 origin-center" 
            />
          </div>
          
          {/* Right Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-start">
            <h3 className="text-[#1A1A2E] text-[22px] lg:text-[26px] font-extrabold leading-snug mb-5 tracking-tight">
              Adobe Digital Creativity & Generative AI<br />
              <span className="text-[#7C3AED]">20 Hours</span> <span className="text-gray-800 font-bold">(Foundation Journey)</span>
            </h3>
            
            <p className="text-gray-500 font-medium text-[15px] leading-relaxed mb-8">
              Designed for every student across every discipline. Learners complete real projects, 
              earn digital badges, and strengthen their portfolios. After finishing the full journey, 
              they can take the final assessment to earn an SSC-recognised certificate.
            </p>
            
            {/* NSQF Badge Banner */}
            <div className="bg-[#F5F3FF] rounded-full px-6 py-4 flex items-center gap-4 w-full sm:w-auto hover:bg-[#EDE9FE] transition-colors duration-300">
              <div className="bg-[#7C3AED] text-white p-2 rounded-full flex-shrink-0 shadow-md shadow-purple-500/20">
                 <Award size={20} strokeWidth={2.5} />
              </div>
              <p className="text-gray-700 text-[14px]">
                <span className="font-extrabold text-gray-900">NSQF alignment:</span> SSC/N8440, Technology and Business Fundamentals.
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
