import React from 'react';
import { CalendarCheck, Award, BookOpen, Presentation } from 'lucide-react';

export default function CcmmCarries() {
  const items = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B45FF]">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <path d="M8 14h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M8 18h.01"></path>
          {/* Checkmark overlay */}
          <circle cx="17.5" cy="17.5" r="4.5" fill="white" stroke="#5B45FF" />
          <path d="M15.5 17.5l1.5 1.5 2.5-2.5" stroke="#5B45FF" />
        </svg>
      ),
      iconBg: 'bg-[#F5F3FF]',
      lineColor: 'border-[#5B45FF]',
      text: (
        <>
          A <span className="text-[#5B45FF] font-bold">2-year validity</span> with re-assessment for renewal and upgrade
        </>
      )
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B45FF]">
          <path d="M12 15c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path>
          <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"></path>
          {/* Star inside */}
          <path d="M12 4l1.5 3h3.5l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3.5z"></path>
        </svg>
      ),
      iconBg: 'bg-[#F5F3FF]',
      lineColor: 'border-[#5B45FF]',
      text: (
        <>
          An official <span className="text-[#5B45FF] font-bold">CCMM digital badge</span> for the school's website, communications, and admissions material
        </>
      )
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B45FF]">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          {/* Inner pages */}
          <path d="M6 7h4"></path>
          <path d="M6 11h4"></path>
          <path d="M18 7h-4"></path>
          <path d="M18 11h-4"></path>
        </svg>
      ),
      iconBg: 'bg-[#F5F3FF]',
      lineColor: 'border-[#5B45FF]',
      text: (
        <>
          Inclusion in the <span className="text-[#5B45FF] font-bold">CCMM Index of AI-Ready Schools</span> — the national registry of certified institutions
        </>
      )
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#5B45FF]">
          <circle cx="12" cy="7" r="4"></circle>
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
          {/* Podium */}
          <path d="M4 21h16"></path>
          <path d="M6 21v3h12v-3"></path>
        </svg>
      ),
      iconBg: 'bg-[#F5F3FF]',
      lineColor: 'border-[#5B45FF]',
      text: (
        <>
          Recognition at the annual <span className="text-[#5B45FF] font-bold">Nova Education Leadership Summit</span>
        </>
      )
    }
  ];

  return (
    <section className="w-full bg-white font-poppins py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-[24px] md:text-[28px] font-extrabold text-[#111827] leading-tight">
            Every CCMM Certification carries
          </h2>
        </div>

        {/* List Items */}
        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-[20px] p-6 lg:p-7 flex items-center gap-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(91,69,255,0.12)] hover:border-[#5B45FF]/30 transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#5B45FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Icon */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center shrink-0 relative z-10 ${item.iconBg} group-hover:scale-110 group-hover:shadow-md transition-all duration-500`}>
                {item.icon}
              </div>

              {/* Separator & Text */}
              <div className={`flex-1 border-l-2 ${item.lineColor} pl-6 py-2 relative z-10 border-opacity-70 group-hover:border-opacity-100 transition-all duration-300`}>
                <p className="text-[#374151] font-medium text-[16px] md:text-[18px] leading-relaxed group-hover:text-[#111827] transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
