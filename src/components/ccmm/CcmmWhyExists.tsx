import React from 'react';

export default function CcmmWhyExists() {
  const cards = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B45FF]">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <polyline points="9 13 6 10 9 7"></polyline>
          <line x1="11" y1="14" x2="13" y2="6"></line>
          <polyline points="15 13 18 10 15 7"></polyline>
        </svg>
      ),
      bg: 'bg-[#EDE9FE]',
      lineColor: 'bg-[#5B45FF]',
      desc: 'Is our curriculum genuinely preparing students for an AI-driven world, or just adding a "coding club"?'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B45FF]">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      bg: 'bg-[#EDE9FE]',
      lineColor: 'bg-[#5B45FF]',
      desc: 'Are our teachers confident and capable with AI, or quietly anxious about it?'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B45FF]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      ),
      bg: 'bg-[#EDE9FE]',
      lineColor: 'bg-[#5B45FF]',
      desc: 'Do we have the infrastructure, governance, and ethics framework to use AI responsibly?'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B45FF]">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      bg: 'bg-[#EDE9FE]',
      lineColor: 'bg-[#5B45FF]',
      desc: 'How do we compare to the best schools in India — and the world?'
    }
  ];

  return (
    <section className="w-full bg-white font-poppins py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
          <div className="flex flex-col">
            <h2 className="text-[34px] md:text-[42px] lg:text-[48px] font-extrabold text-[#111827] leading-[1.1] tracking-tight mb-2">
              Why <span className="text-[#5B45FF]">CCMM</span> Exists
            </h2>
            <div className="w-16 h-1 bg-[#5B45FF] rounded-full"></div>
          </div>
          
          {/* Decorative Line on right side */}
          <div className="hidden md:flex items-center flex-1 max-w-sm justify-end ml-auto">
            <div className="w-full h-0.5 bg-[#5B45FF]"></div>
            <div className="w-3 h-3 rounded-full bg-[#5B45FF] ml-[-2px]"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-4xl mb-12">
          <p className="text-[#4B5563] font-medium text-[15px] md:text-[17px] leading-relaxed mb-6">
            The World Is Moving From The Information Age To The <span className="text-[#5B45FF] font-semibold">Cognitive Age.</span>
          </p>
          <p className="text-[#111827] font-bold text-[15px] md:text-[17px] leading-relaxed mb-6">
            The Children In Classrooms Today Will Graduate Into A Workforce Where Artificial Intelligence, Generative AI, And Autonomous Agents Are Not Specialist Tools But The Basic Grammar Of Every Profession — From Medicine And Law To Design, Manufacturing, And Agriculture.
          </p>
          <p className="text-[#5B45FF] font-bold text-[15px] md:text-[17px] leading-relaxed">
            Yet Most Schools Have No Structured Way To Know:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(91,69,255,0.12)] hover:-translate-y-2 hover:border-[#5B45FF]/30 transition-all duration-300 ease-out flex flex-col items-center text-center group relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-50/0 to-purple-50/0 group-hover:from-transparent group-hover:to-purple-50/50 transition-all duration-500 pointer-events-none"></div>

              <div className="mb-6 flex flex-col items-center relative z-10">
                <div className={`w-20 h-20 rounded-full ${card.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:-translate-y-1 duration-300 ease-out`}>
                  {card.icon}
                </div>
                <div className={`w-6 h-0.5 ${card.lineColor} transition-all duration-300 group-hover:w-10`}></div>
              </div>
              <p className="text-[#4B5563] font-medium text-[14px] leading-relaxed relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="w-full bg-[#F5F3FF] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm border border-purple-50">
          <div className="w-16 h-16 rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B45FF]">
              <circle cx="12" cy="8" r="6"></circle>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
            </svg>
          </div>
          <p className="text-[#4B5563] font-medium text-[15px] leading-relaxed">
            <span className="text-[#5B45FF] font-bold">CCMM answers all of these.</span> It replaces guesswork and one-off workshops with a single, coherent transformation standard that a school can be measured against, improve on, and proudly certify.
          </p>
        </div>

      </div>
    </section>
  );
}
