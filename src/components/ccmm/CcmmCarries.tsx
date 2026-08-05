import React from 'react';
import girlStudentImg from '../../assets/CCMM/girl student.png';

export default function CcmmCarries() {
  const items = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B45FF]">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      iconBg: 'bg-[#F5F3FF]',
      lineColor: 'border-[#5B45FF]',
      text: (
        <>
          <span className="text-[#5B45FF] font-bold">UNESCO AI Competency Frameworks</span>
        </>
      )
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B45FF]">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
      ),
      iconBg: 'bg-[#F5F3FF]',
      lineColor: 'border-[#5B45FF]',
      text: (
        <>
          <span className="text-[#5B45FF] font-bold">OECD Learning Compass 2030</span>
        </>
      )
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B45FF]">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      iconBg: 'bg-[#F5F3FF]',
      lineColor: 'border-[#5B45FF]',
      text: (
        <>
          <span className="text-[#5B45FF] font-bold">NEP 2020</span>
        </>
      )
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B45FF]">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          <path d="M12 10v4"></path>
          <path d="M10 12h4"></path>
        </svg>
      ),
      iconBg: 'bg-[#F5F3FF]',
      lineColor: 'border-[#5B45FF]',
      text: (
        <>
          <span className="text-[#5B45FF] font-bold">CBSE · ICSE · IB · Cambridge alignment</span>
        </>
      )
    }
  ];

  return (
    <section className="w-full bg-white font-poppins py-10 lg:py-14 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="mb-8 text-center flex flex-col items-center">
          <span className="text-[#5B45FF] font-bold text-[13px] uppercase tracking-widest mb-2 block">
            CREDIBILITY
          </span>
          <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-extrabold text-[#111827] leading-tight mb-2 lg:whitespace-nowrap">
            Built on global standards, grounded in Indian realities
          </h2>
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-10 max-w-[1000px] mx-auto">
          
          {/* List Items (Left) */}
          <div className="flex flex-col gap-3 w-full lg:w-[55%]">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-[16px] p-4 lg:p-5 flex items-center gap-6 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(91,69,255,0.1)] hover:border-[#5B45FF]/30 transition-all duration-300 relative overflow-hidden group cursor-pointer"
              >
                {/* Subtle hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#5B45FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 relative z-10 ${item.iconBg} group-hover:scale-110 group-hover:shadow-sm transition-all duration-500`}>
                  <div className="scale-75 origin-center">{item.icon}</div>
                </div>

                {/* Separator & Text */}
                <div className={`flex-1 border-l-2 ${item.lineColor} pl-5 py-1 relative z-10 border-opacity-70 group-hover:border-opacity-100 transition-all duration-300 text-left`}>
                  <p className="text-[#374151] font-medium text-[15px] md:text-[17px] leading-relaxed group-hover:text-[#111827] transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image (Right) */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
            <img 
              src={girlStudentImg} 
              alt="Girl Student" 
              className="w-full max-w-[400px] object-contain" 
            />
          </div>

        </div>

      </div>
    </section>
  );
}
