import React from 'react';

export default function CcmmWhoItsFor() {
  const points = [
    "CBSE, ICSE, IB, Cambridge & State Board schools",
    "Single-campus & multi-campus groups",
    "Metros, Tier-2/3 cities & aspirational districts",
    "International schools serving NRI & global learners",
    "Government & PPP schools with state education departments"
  ];

  return (
    <section className="w-full bg-[#F3F4F6] font-poppins py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-start max-w-6xl mb-12">
          <span className="text-[#5B45FF] font-bold text-[13px] uppercase tracking-widest mb-4 block">
            WHO IT'S FOR
          </span>
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#111827] leading-[1.15] tracking-tight mb-6 lg:whitespace-nowrap">
            Built for forward-looking school leaders
          </h2>
          <p className="text-[#4B5563] font-medium text-[16px] md:text-[18px] leading-relaxed w-full lg:whitespace-nowrap">
            Ideal for leaders ready to commit to a structured, measurable, multi-year transformation.
          </p>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-4 items-center">
          {points.map((text, idx) => (
            <div 
              key={idx} 
              className="bg-[#F4F3ED] border border-[#E5E4DE] px-5 py-4 flex items-center justify-center"
            >
              <span className="text-[#334155] font-medium text-[15px] md:text-[16px] leading-snug">
                {text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
