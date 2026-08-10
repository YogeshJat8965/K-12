import React from 'react';

export default function CcmmWhySchool() {
  const points = [
    {
      num: '01',
      desc: 'The only AI maturity model built specifically for K–12 schools in the Indian context.'
    },
    {
      num: '02',
      desc: 'Outcome-led, not vendor-led - Skillzza is accountable for transformation, not just delivery.'
    },
    {
      num: '03',
      desc: 'Comes with the full Skillzza Nova K–12 AI Learning Ecosystem behind every engagement.'
    },
    {
      num: '04',
      desc: 'Carries the credibility of Skillzza Learning Technologies - backed by industry partners and a national network of CXOs through CXO TechBOT.'
    },
    {
      num: '05',
      desc: 'Produces tangible, marketable proof of leadership parents, regulators, and the community recognise.'
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] font-poppins py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#5B45FF] font-bold text-[13px] uppercase tracking-widest mb-3 block">
            The difference
          </span>
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#111827] leading-tight tracking-tight">
            Why schools choose CCMM
          </h2>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-center justify-center text-center relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(91,69,255,0.1)] hover:border-[#5B45FF]/30 transition-all duration-300 cursor-pointer ${idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B45FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <p className="text-[#334155] font-medium text-[14px] md:text-[15px] leading-relaxed relative z-10 group-hover:text-[#111827] transition-colors duration-300">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
