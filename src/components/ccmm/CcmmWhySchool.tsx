import React from 'react';
import { ShieldCheck, Target, Network, Users, Award } from 'lucide-react';
import whySchoolImg from '../../assets/CCMM/why school.webp';

export default function CcmmWhySchool() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
      text: (
        <>
          It is the <span className="text-[#5B45FF] font-bold">only AI maturity model</span> built specifically for K-12 schools in the Indian context.
        </>
      )
    },
    {
      icon: <Target className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
      text: (
        <>
          It is <span className="text-[#5B45FF] font-bold">outcome-led, not vendor-led</span> - Skillzza is accountable for transformation, not just delivery.
        </>
      )
    },
    {
      icon: <Network className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
      text: (
        <>
          It comes with the full <span className="text-[#5B45FF] font-bold">Skillzza Nova K-12 AI Learning Ecosystem</span> - Skill Studios, the Vedya AI Co-Pilot, Virtual Internships, the Digital Skill Passport, and more.
        </>
      )
    },
    {
      icon: <Users className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
      text: (
        <>
          It carries the credibility of a national network of CXOs and industry leaders through our sister platform, <span className="text-[#5B45FF] font-bold">CXO TechBOT</span>, and partners including <span className="text-[#5B45FF] font-bold">Adobe</span>.
        </>
      )
    },
    {
      icon: <Award className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
      text: (
        <>
          It produces <span className="text-[#5B45FF] font-bold">tangible, marketable proof of leadership</span> - a CCMM certification that parents, regulators, and the community recognise and trust.
        </>
      )
    }
  ];

  return (
    <section className="w-full bg-white font-poppins py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Cards Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-[#111827] leading-[1.1] tracking-tight mb-10">
              Why Schools<br />
              Choose <span className="text-[#5B45FF]">CCMM</span>
            </h2>

            <div className="flex flex-col gap-4 w-full">
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-6 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(91,69,255,0.08)] hover:border-[#5B45FF]/40 transition-all duration-300 group cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#F5F3FF] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    {reason.icon}
                  </div>

                  {/* Separator & Text */}
                  <div className="flex-1 border-l-2 border-gray-100 group-hover:border-[#5B45FF]/40 pl-5 py-1 transition-colors duration-300">
                    <p className="text-[#4B5563] font-medium text-[14px] md:text-[15px] leading-relaxed group-hover:text-[#111827] transition-colors duration-300">
                      {reason.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative group">
            <div className="absolute inset-0 bg-[#5B45FF]/15 rounded-3xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
            <img 
              src={whySchoolImg} 
              alt="Students working on laptops" 
              className="w-full h-auto object-cover rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] group-hover:shadow-[0_15px_40px_rgba(91,69,255,0.15)] transition-shadow duration-500 max-w-[700px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
