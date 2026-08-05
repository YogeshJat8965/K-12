import React from 'react';

export default function CcmmCertification() {
  const certifications = [
    {
      level: 'Bronze',
      title: 'Emerging Cognitive School',
      desc: 'Stage 2 - foundational AI literacy, basic infrastructure, initial educator training',
      color: '#A97142', // Bronze
      bgTint: 'bg-[#FDF8F3]',
      borderColor: 'border-[#A97142]/30'
    },
    {
      level: 'Silver',
      title: 'Integrated Cognitive School',
      desc: 'Stage 3 - schoolwide AI curriculum, majority educator certification, active student programmes',
      color: '#8492A6', // Silver
      bgTint: 'bg-[#F4F4F5]',
      borderColor: 'border-[#8492A6]/30'
    },
    {
      level: 'Gold',
      title: 'Advanced Cognitive School',
      desc: 'Stage 4 - fully operational AI Centre of Excellence, industry-aligned curriculum, student innovation',
      color: '#D99F16', // Gold
      bgTint: 'bg-[#FDFBF2]',
      borderColor: 'border-[#D99F16]/30'
    },
    {
      level: 'Platinum',
      title: 'Cognitive Leader School',
      desc: 'Stage 5 - shaping the future of K–12 cognitive education in the region',
      color: '#708090', // Platinum
      bgTint: 'bg-[#F2F4F7]',
      borderColor: 'border-[#708090]/30'
    },
    {
      level: 'Pinnacle',
      title: 'Yugantar School of the Year',
      desc: 'Annual - one Platinum school per region, for landmark contribution to cognitive transformation',
      color: '#2563EB', // Pinnacle (Blue/Purple)
      bgTint: 'bg-[#EFF6FF]',
      borderColor: 'border-[#2563EB]/30'
    }
  ];

  return (
    <section className="w-full bg-[#F8F7FF] font-poppins py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
          <span className="text-[#C19859] font-bold text-[13px] uppercase tracking-widest mb-4 block">
            CERTIFICATION TIERS
          </span>
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#111827] leading-[1.15] tracking-tight mb-6 lg:whitespace-nowrap">
            A mark parents, regulators & peers recognise
          </h2>
          <p className="text-[#4B5563] font-medium text-[15px] md:text-[16px] leading-relaxed max-w-3xl">
            Complete the journey and your school earns an audited, time-bound CCMM certification - not a participation badge.
          </p>
        </div>

        {/* 5 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`${cert.bgTint} rounded-[24px] pt-10 px-6 pb-6 relative shadow-[0_8px_30px_rgba(0,0,0,0.04)] border-2 ${cert.borderColor} flex flex-col h-full group hover:-translate-y-2 transition-all duration-300`}
            >
              {/* Top Border Line with specific color */}
              <div
                className="absolute top-0 left-8 right-8 h-[4px] rounded-b-md transition-all duration-300 group-hover:h-[6px]"
                style={{ backgroundColor: cert.color }}
              />



              {/* Text Content */}
              <h4 className="text-[15px] xl:text-[16px] font-bold text-[#111827] leading-snug mb-3 text-center">
                <span style={{ color: cert.color }}>{cert.level}</span><br />
                <span className="font-semibold text-gray-700 text-[14px] mt-1 block">{cert.title}</span>
              </h4>
              <p className="text-[#6B7280] font-medium text-[13px] xl:text-[14px] leading-relaxed flex-1 text-center">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="max-w-4xl mx-auto mt-12 text-center bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <p className="text-[#475569] text-sm md:text-[15px] font-medium leading-relaxed">
            Every certification includes a digital badge, inclusion in the annual CCMM Index of AI-Ready Schools, and recognition at the Skillzza Nova Education Leadership Summit. Valid two years, with re-assessment cycles.
          </p>
        </div>

      </div>
    </section>
  );
}
