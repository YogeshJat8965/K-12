import React from 'react';
import { BookOpen, Presentation, Monitor, Award, ShieldCheck, Users } from 'lucide-react';

export default function CcmmMeasures() {
  const measures = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8B5CF6]">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          <circle cx="12" cy="7" r="1.5"></circle>
          <circle cx="16" cy="4" r="1"></circle>
          <circle cx="10" cy="3" r="1"></circle>
          <path d="M12 5.5V3"></path>
          <path d="M12 5.5L15 4.5"></path>
          <path d="M12 5.5L10 4"></path>
        </svg>
      ),
      title: 'Curriculum & Learning',
      titleColor: 'text-[#8B5CF6]',
      bg: 'bg-[#F5F3FF]',
      desc: 'Depth, Integration, and Relevance of AI and Emerging-Tech Learning'
    },
    {
      icon: <Presentation className="w-8 h-8 text-[#3B82F6]" strokeWidth={1.5} />,
      title: 'Educator Capability',
      titleColor: 'text-[#3B82F6]',
      bg: 'bg-[#EFF6FF]',
      desc: 'Teacher Confidence, Training, and use of AI in pedagogy'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#10B981]">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
          <path d="M14 22H6a2 2 0 0 1-2-2v-6"></path>
          <path d="M2 14h6"></path>
          <path d="M8 22v-4"></path>
        </svg>
      ),
      title: 'Infrastructure & Platform',
      titleColor: 'text-[#10B981]',
      bg: 'bg-[#ECFDF5]',
      desc: 'Digital and Physical Readiness, Access, and the CoE'
    },
    {
      icon: <Award className="w-8 h-8 text-[#F59E0B]" strokeWidth={1.5} />,
      title: 'Student Outcomes',
      titleColor: 'text-[#F59E0B]',
      bg: 'bg-[#FFFBEB]',
      desc: 'Skills, Portfolios, Projects, and Demonstrable Capability'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#F43F5E]" strokeWidth={1.5} />,
      title: 'Ethics & Governance',
      titleColor: 'text-[#F43F5E]',
      bg: 'bg-[#FFF1F2]',
      desc: 'Responsible AI, Data, Safety, and Policy Frameworks'
    },
    {
      icon: <Users className="w-8 h-8 text-[#06B6D4]" strokeWidth={1.5} />,
      title: 'Leadership & Culture',
      titleColor: 'text-[#06B6D4]',
      bg: 'bg-[#ECFEFF]',
      desc: 'Vision, Strategy, Community Engagement, and SDG Alignment'
    }
  ];

  return (
    <section className="w-full bg-white font-poppins py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-[#111827] leading-[1.1] tracking-tight mb-4">
            What <span className="text-[#5B45FF]">CCMM</span> Measures
          </h2>
          <p className="text-[#4B5563] font-medium text-[15px] md:text-[16px] leading-relaxed max-w-3xl">
            The CCMM Diagnostic Assesses A School Across Six Dimensions And 30+ Indicators, Conducted By Skillzza's Certified Assessors:
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {measures.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${item.bg}`}>
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h4 className={`text-[17px] md:text-[19px] font-bold mb-1.5 ${item.titleColor}`}>
                  {item.title}
                </h4>
                <p className="text-[#374151] font-medium text-[14px] md:text-[15px] leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="w-full bg-[#F5F3FF] border border-[#EDE9FE] rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_4px_20px_rgba(91,69,255,0.05)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left w-full lg:w-3/4">
            
            {/* Banner Text */}
            <div className="flex-1 py-1">
              <p className="text-[#4B5563] font-medium text-[15px] md:text-[17px] leading-relaxed">
                Each school receives a confidential, scored <span className="text-[#5B45FF] font-bold">CCMM Maturity Report</span><br className="hidden md:block"/>
                with a precise current stage, a gap analysis,<br className="hidden md:block"/>
                and a customised transformation roadmap.
              </p>
            </div>
          </div>

          {/* Dotted Flag Graphic */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-end shrink-0 mt-4 lg:mt-0">
            <svg width="220" height="88" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
              {/* Dotted path */}
              <path d="M10 50 C 40 50, 60 40, 80 40 C 100 40, 110 30, 130 30" stroke="#C4B5FD" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              {/* Points on path */}
              <circle cx="10" cy="50" r="3" fill="#A78BFA" />
              <circle cx="50" cy="45" r="3" fill="#A78BFA" />
              <circle cx="90" cy="40" r="3" fill="#A78BFA" />
              <circle cx="130" cy="30" r="4" fill="#5B45FF" />
              {/* Flag Pole */}
              <line x1="130" y1="30" x2="130" y2="10" stroke="#5B45FF" strokeWidth="2" strokeLinecap="round" />
              {/* Flag */}
              <path d="M130 10 L 145 15 L 130 20 Z" fill="#5B45FF" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
