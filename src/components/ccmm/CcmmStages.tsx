import React from 'react';
import img1 from '../../assets/CCMM/5 stages/1.png';
import img2 from '../../assets/CCMM/5 stages/2.png';
import img3 from '../../assets/CCMM/5 stages/3.png';
import img4 from '../../assets/CCMM/5 stages/4.png';
import img5 from '../../assets/CCMM/5 stages/5.png';

export default function CcmmStages() {
  const stages = [
    {
      img: img1,
      title: 'Aware',
      titleColor: 'text-[#16A34A]',
      bgTint: 'bg-[#F0FDF4]',
      desc: 'AI is discussed but not yet structured. Isolated initiatives, no framework, no shared strategy.'
    },
    {
      img: img2,
      title: 'Emerging',
      titleColor: 'text-[#2563EB]',
      bgTint: 'bg-[#EFF6FF]',
      desc: 'Foundational programmes begin. Some teacher training, early student exposure, basic infrastructure.'
    },
    {
      img: img3,
      title: 'Integrated',
      titleColor: 'text-[#7C3AED]',
      bgTint: 'bg-[#F5F3FF]',
      desc: 'AI is woven across the curriculum. Confident teachers, active CoE, measurable student outcomes.'
    },
    {
      img: img4,
      title: 'Advanced',
      titleColor: 'text-[#EA580C]',
      bgTint: 'bg-[#FFF7ED]',
      desc: 'The school leads in its region. Strong governance, student innovation, industry and community linkages.'
    },
    {
      img: img5,
      title: 'Cognitive',
      titleColor: 'text-[#D97706]',
      bgTint: 'bg-[#FEFCE8]',
      desc: "A genuinely future-ready institution. AI is part of the school's identity, ethics, and daily culture."
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] font-poppins py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#111827] leading-[1.15] tracking-tight mb-6">
            The CCMM Maturity Model - <br /> <span className="text-[#5B45FF]">Five Stages</span>
          </h2>
          <p className="text-[#4B5563] font-medium text-[15px] md:text-[16px] leading-relaxed max-w-3xl">
            CCMM Places Every School On A Clear Five-Stage Maturity Curve. The Diagnostic Identifies Exactly Where You Stand Today The Roadmap Shows How To Advance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stages.map((stage, index) => (
            <div 
              key={index} 
              className={`flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group`}
            >
              {/* Image Section */}
              <div className="w-full aspect-[4/3] overflow-hidden relative">
                <img 
                  src={stage.img} 
                  alt={stage.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Section */}
              <div className={`flex flex-col flex-1 items-center text-center p-6 lg:p-5 xl:p-6 ${stage.bgTint} transition-colors duration-300`}>
                <h4 className={`text-[20px] font-bold mb-4 ${stage.titleColor}`}>
                  {stage.title}
                </h4>
                <p className="text-[#374151] text-[13.5px] leading-relaxed font-medium">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
