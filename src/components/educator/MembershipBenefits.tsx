import React from 'react';
import { BookOpen, Users, ClipboardCheck, Award } from 'lucide-react';
import plantElementImg from '../../assets/educator circle/plant-element.png';
import rocketImg from '../../assets/educator circle/rocket.png';

export default function MembershipBenefits() {
  const cards = [
    {
      title: 'Learn',
      icon: <BookOpen className="w-10 h-10 text-[#4F46E5]" strokeWidth={2} />,
      desc: 'Practical AI teaching, led by experts and partners - never just theory.',
      bullets: [
        'Monthly live masterclasses',
        'Adobe digital creativity sessions',
        'Vedya AI hands-on workshops',
      ]
    },
    {
      title: 'Connect',
      icon: <Users className="w-10 h-10 text-[#4F46E5]" strokeWidth={2} />,
      desc: 'Find your people the moment you join.',
      bullets: [
        'Peer, subject & state circles',
        'Forums and discussion threads',
        'Cross-school collaborations',
      ]
    },
    {
      title: 'Track',
      icon: <ClipboardCheck className="w-10 h-10 text-[#4F46E5]" strokeWidth={2} />,
      desc: 'A passport that builds your professional record for you.',
      bullets: [
        'Auto CPD credit after each event',
        'Log school & external training',
        'Annual report, ready to download',
      ]
    },
    {
      title: 'Rise',
      icon: <Award className="w-10 h-10 text-[#4F46E5]" strokeWidth={2} />,
      desc: 'Turn contribution into recognition.',
      bullets: [
        'CCMM badges & monthly features',
        'Mentor, Ambassador & Speaker roles',
        'National Yugantar recognition',
      ]
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFC] font-poppins pt-24 pb-32 relative overflow-hidden">
      
      {/* Background Dots Pattern (Center) */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] pointer-events-none z-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(#C7D2FE 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      {/* Floating Plus Top Right */}
      <div className="absolute top-[15%] right-[8%] text-[#4F46E5] opacity-20 pointer-events-none z-0 hidden lg:block animate-pulse">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 4v16m-8-8h16" />
        </svg>
      </div>

      {/* Floating Circle Top Left */}
      <div className="absolute top-[10%] left-[10%] text-[#818CF8] opacity-30 pointer-events-none z-0 hidden lg:block">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>

      {/* Floating Star Middle Left */}
      <div className="absolute top-[50%] left-[3%] text-[#6366F1] opacity-15 pointer-events-none z-0 hidden xl:block">
        <svg width="64" height="64" viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,15 61,35 83,38 67,54 71,76 50,65 29,76 33,54 17,38 39,35" />
        </svg>
      </div>

      {/* Floating Dashed Ring Middle Right */}
      <div className="absolute top-[55%] right-[4%] text-[#818CF8] opacity-25 pointer-events-none z-0 hidden xl:block">
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      {/* Floating Plus Bottom Center */}
      <div className="absolute bottom-[10%] left-[45%] text-[#4F46E5] opacity-20 pointer-events-none z-0 hidden md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 4v16m-8-8h16" />
        </svg>
      </div>
      
      {/* Background Graphic: Left plant element */}
      <div className="absolute bottom-[20px] lg:bottom-[40px] left-[-20px] pointer-events-none z-0 hidden lg:block opacity-80">
        <img src={plantElementImg} alt="Background element" className="w-[240px] lg:w-[280px] h-auto object-contain" />
      </div>

      {/* Background Graphic: Right rocket element */}
      <div className="absolute bottom-[60px] lg:bottom-[80px] right-[10px] lg:right-[30px] pointer-events-none z-0 hidden lg:block opacity-80">
        <img src={rocketImg} alt="Background rocket" className="w-[200px] lg:w-[230px] h-auto object-contain" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-extrabold text-[#111827] leading-[1.2] tracking-tight mb-3">
            What <span className="text-[#4F46E5]">Membership</span> Gives You
          </h2>
          <p className="text-[#4F46E5] font-bold text-[10px] md:text-[11px] tracking-widest uppercase">
            FOUR THINGS, WORKING TOGETHER FOR YOUR GROWTH
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(79,70,229,0.08)] hover:border-[#E0E7FF] group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-[78px] h-[48px] md:w-[84px] md:h-[84px] rounded-full bg-[#E0E7FF] bg-opacity-70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#E0E7FF] transition-all duration-300">
                {card.icon}
              </div>
              
              {/* Content Container */}
              <div className="flex flex-col flex-1 mt-1 sm:mt-0">
                <h3 className="text-[#4F46E5] text-[21px] md:text-[23px] font-bold mb-1.5 leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-[#4B5563] text-[13px] md:text-[14px] font-medium leading-relaxed pb-3 mb-3 border-b border-[#EEF2FF]">
                  {card.desc}
                </p>
                
                <ul className="flex flex-col gap-2.5">
                  {card.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] mt-[6px] flex-shrink-0 shadow-sm"></span>
                      <span className="text-[#4B5563] text-[12px] md:text-[13px] font-medium leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
