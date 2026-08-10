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
    <section className="w-full relative py-16 lg:py-24 overflow-hidden font-poppins bg-slate-50">
      {/* Modern Tech Background (Grid + Gradient Mesh) */}
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.5 }}></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#5B45FF]/10 to-[#EC4899]/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-[#38BDF8]/10 to-[#818CF8]/10 rounded-full blur-[120px] translate-y-1/3 pointer-events-none mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50 z-0"></div>

      {/* Decorative Semi-circles in Corners */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-bl from-[#5B45FF]/20 to-transparent rounded-bl-full z-0 opacity-80 border-b border-l border-[#5B45FF]/10"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-tr from-[#EC4899]/10 to-transparent rounded-tr-full z-0 opacity-80 border-t border-r border-[#EC4899]/10"></div>

      <div className="max-w-[1536px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto mb-12">
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
        <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-center">
          {points.map((text, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] px-5 py-4 flex items-center justify-center transition-transform hover:-translate-y-1"
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
