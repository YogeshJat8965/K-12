import React from 'react';

export default function CcmmCertification() {
  const certifications = [
    {
      level: 'Bronze',
      title: 'STAGE 2 · EMERGING',
      desc: 'Recognises foundational commitment to AI literacy, basic infrastructure, and initial educator training.',
      color: '#A97142', // Bronze
      bgTint: 'bg-[#FDF8F3]',
      borderColor: 'border-[#A97142]/30'
    },
    {
      level: 'Silver',
      title: 'STAGE 3 · INTEGRATED',
      desc: 'Recognises schoolwide AI-curriculum integration, majority educator certification, and active student programmes.',
      color: '#8492A6', // Silver
      bgTint: 'bg-[#F4F4F5]',
      borderColor: 'border-[#8492A6]/30',
      isHighlight: true // In screenshot, silver looks like it has a white bg & shadow drop, but user said keep design same.
    },
    {
      level: 'Gold',
      title: 'STAGE 4 · ADVANCED',
      desc: 'Recognises a fully operational AI CoE, industry-aligned curriculum, and demonstrable student innovation.',
      color: '#D99F16', // Gold
      bgTint: 'bg-[#FDFBF2]',
      borderColor: 'border-[#D99F16]/30'
    },
    {
      level: 'Platinum',
      title: 'STAGE 5 · COGNITIVE',
      desc: 'The highest tier - reserved for institutions shaping the future of K-12 cognitive education in their region.',
      color: '#708090', // Platinum
      bgTint: 'bg-[#F2F4F7]',
      borderColor: 'border-[#708090]/30'
    },
    {
      level: 'Pinnacle',
      title: 'YUGANTAR · ANNUAL',
      desc: 'School of the Year - one Platinum school per region, for landmark contribution to cognitive education.',
      color: '#2563EB', // Pinnacle (Blue/Purple)
      bgTint: 'bg-[#EFF6FF]',
      borderColor: 'border-[#2563EB]/30'
    }
  ];

  return (
    <section className="w-full bg-[#F4F2EE] font-poppins py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
          <span className="text-[#5B45FF] font-bold text-[13px] uppercase tracking-[0.15em] mb-4 block">
            THE CREDENTIAL
          </span>
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#111827] leading-[1.15] tracking-tight mb-6">
            A recognised mark of AI-ready schools
          </h2>
          <p className="text-[#4B5563] font-medium text-[15px] md:text-[17px] leading-relaxed w-full max-w-[1100px]">
            Not a participation badge - an audited, evidence-backed credential issued by Skillzza Learning Technologies under its K-12 signature programme.Every completed journey earns a tiered, time-bound certification.
          </p>
        </div>

        {/* 5 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {certifications.map((cert, idx) => {
            const bgClass = 'bg-white border-gray-200 shadow-sm';

            return (
              <div
                key={idx}
                className={`${bgClass} rounded-sm pt-8 px-6 pb-8 relative border flex flex-col h-full group hover:-translate-y-2 transition-all duration-300 text-left`}
              >
                {/* Top Border Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[4px] transition-all duration-300 group-hover:h-[6px]"
                  style={{ backgroundColor: cert.color }}
                />

                {/* Text Content */}
                <h4 className="text-[20px] font-extrabold text-[#111827] leading-snug mb-3">
                  {cert.level}
                </h4>
                <span className="font-bold text-gray-500 text-[10px] uppercase tracking-[0.15em] mb-4 block">
                  {cert.title}
                </span>

                <p className="text-[#4B5563] font-medium text-[14px] leading-relaxed flex-1">
                  {cert.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Checklist Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <span className="text-gray-500 font-bold text-[11px] text-center uppercase tracking-[0.15em] mb-8 block">
            EVERY CERTIFICATION INCLUDES
          </span>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] bg-white border border-gray-100 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-start gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5B45FF] mt-2 shrink-0"></div>
              <p className="text-[#334155] font-medium text-[13px] leading-relaxed">
                An official CCMM certificate signed by Skillzza Learning Technologies
              </p>
            </div>
            <div className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] bg-white border border-gray-100 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-start gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5B45FF] mt-2 shrink-0"></div>
              <p className="text-[#334155] font-medium text-[13px] leading-relaxed">
                A digital badge for your website, communications, and admissions material
              </p>
            </div>
            <div className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] bg-white border border-gray-100 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-start gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5B45FF] mt-2 shrink-0"></div>
              <p className="text-[#334155] font-medium text-[13px] leading-relaxed">
                Inclusion in the annual CCMM Index of AI-Ready Schools
              </p>
            </div>
            <div className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] bg-white border border-gray-100 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-start gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5B45FF] mt-2 shrink-0"></div>
              <p className="text-[#334155] font-medium text-[13px] leading-relaxed">
                Recognition at the Skillzza Nova Education Leadership Summit
              </p>
            </div>
            <div className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] bg-white border border-gray-100 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-start gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5B45FF] mt-2 shrink-0"></div>
              <p className="text-[#334155] font-medium text-[13px] leading-relaxed">
                A formal media announcement across Skillzza and CXO TechBOT platforms
              </p>
            </div>
          </div>

          <p className="text-gray-500 font-medium text-[14px] italic mt-12 text-center">
            Certifications are valid for two years, with re-assessment cycles that keep schools evolving as the technology landscape shifts.
          </p>
        </div>

      </div>
    </section>
  );
}
