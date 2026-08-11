import React, { useState, useEffect } from 'react';
import { 
  CalendarDays, CalendarCheck, CalendarClock, CalendarRange,
  PenTool, Shield, Palette,
  Play, Users, Award,
  TrendingUp, Compass,
  Star, Triangle, Trophy
} from 'lucide-react';

export default function ProgrammeCalendar() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle through the months
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const monthsData = [
    {
      id: 'october',
      label: 'OCTOBER',
      color: '#A855F7',
      lightColor: '#F3E8FF',
      pieIcon: <CalendarDays size={20} />,
      events: [
        {
          iconBg: 'bg-purple-100', iconColor: 'text-purple-600',
          icon: <PenTool size={18} />,
          title: 'AI LESSON DESIGN SPRINT - 3-DAY INTENSIVE',
          date: '7-9 OCT', badge: 'LIVE, ONLINE', badgeColor: 'text-purple-600'
        },
        {
          iconBg: 'bg-purple-100', iconColor: 'text-purple-600',
          icon: <Shield size={18} />,
          title: 'WORLD YOUTH SKILLS DAY - EDUCATOR ROUNDTABLE',
          date: '15 OCT', badge: 'LIVE', badgeColor: 'text-purple-600'
        },
        {
          iconBg: 'bg-purple-100', iconColor: 'text-purple-600',
          icon: <Palette size={18} />,
          title: 'ADOBE × SKILLZZA DIGITAL CREATIVITY WORKSHOP',
          date: '18 OCT', badge: 'WORKSHOP', badgeColor: 'text-purple-600'
        }
      ]
    },
    {
      id: 'november',
      label: 'NOVEMBER',
      color: '#4F46E5',
      lightColor: '#E0E7FF',
      pieIcon: <CalendarCheck size={20} />,
      events: [
        {
          iconBg: 'bg-blue-100', iconColor: 'text-blue-600',
          icon: <Play size={18} />,
          title: 'VEDYA AI FOR EDUCATORS - DEEP DIVE MASTERCLASS',
          date: '6 NOV', badge: null
        },
        {
          iconBg: 'bg-blue-100', iconColor: 'text-blue-600',
          icon: <Users size={18} />,
          title: 'AI EDUCATOR SHOWCASE - COHORT 1 DEMO DAY',
          date: '22 NOV', badge: null
        },
        {
          iconBg: 'bg-blue-100', iconColor: 'text-blue-600',
          icon: <Award size={18} />,
          title: 'CCMM CERTIFICATION ROUND 1 OPENS',
          date: '28 NOV', badge: null
        }
      ]
    },
    {
      id: 'december',
      label: 'DECEMBER',
      color: '#F97316',
      lightColor: '#FFEDD5',
      pieIcon: <CalendarClock size={20} />,
      events: [
        {
          iconBg: 'bg-orange-100', iconColor: 'text-orange-600',
          icon: <TrendingUp size={18} />,
          title: 'AI SCHOOL LEADERSHIP BOOTCAMP - ASCENT TRACK',
          date: '4-6 DEC', badge: null
        },
        {
          iconBg: 'bg-orange-100', iconColor: 'text-orange-600',
          icon: <Users size={18} />,
          title: 'ROUNDTABLE: AI IN RURAL INDIA CLASSROOMS',
          date: '19 DEC', badge: null
        },
        {
          iconBg: 'bg-orange-100', iconColor: 'text-orange-600',
          icon: <Compass size={18} />,
          title: 'COHORT 2 AI ORIENTATION SPRINT - OPENS',
          date: '29 DEC', badge: null
        }
      ]
    },
    {
      id: 'january',
      label: 'JANUARY',
      color: '#E11D48',
      lightColor: '#FCE7F3',
      pieIcon: <CalendarRange size={20} />,
      events: [
        {
          iconBg: 'bg-rose-100', iconColor: 'text-rose-600',
          icon: <Star size={18} />,
          title: 'ANNUAL SKILLZZA EDUCATORS SUMMIT',
          date: 'JAN', badge: 'VENUE TBC', badgeColor: 'text-rose-600'
        },
        {
          iconBg: 'bg-rose-100', iconColor: 'text-rose-600',
          icon: <Triangle size={18} />,
          title: 'ADOBE DIGITAL CREATIVITY MASTERCLASS SERIES',
          date: 'JAN', badge: '4 SESSIONS', badgeColor: 'text-rose-600'
        },
        {
          iconBg: 'bg-rose-100', iconColor: 'text-rose-600',
          icon: <Trophy size={18} />,
          title: 'YUGANTAR - NATIONAL AI EDUCATOR AWARDS',
          date: 'JANUARY', badge: null
        }
      ]
    }
  ];

  // SVG Arc generator
  const getArcPath = (cx: number, cy: number, r: number, R: number, startAngle: number, endAngle: number) => {
    const polarToCartesian = (centerX: number, centerY: number, radius: number, angle: number) => ({
      x: centerX + radius * Math.cos(angle * Math.PI / 180),
      y: centerY + radius * Math.sin(angle * Math.PI / 180)
    });

    const p1 = polarToCartesian(cx, cy, R, startAngle);
    const p2 = polarToCartesian(cx, cy, R, endAngle);
    const p3 = polarToCartesian(cx, cy, r, endAngle);
    const p4 = polarToCartesian(cx, cy, r, startAngle);

    const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

    return [
      `M ${p1.x} ${p1.y}`,
      `A ${R} ${R} 0 ${largeArc} 1 ${p2.x} ${p2.y}`,
      `L ${p3.x} ${p3.y}`,
      `A ${r} ${r} 0 ${largeArc} 0 ${p4.x} ${p4.y}`,
      'Z'
    ].join(' ');
  };

  const angles = [
    { start: -90, end: -48 },
    { start: -44, end: -2 },
    { start: 2, end: 44 },
    { start: 48, end: 90 }
  ];

  const activeData = monthsData[activeIndex];

  // Extracted Dial component to use in both desktop and mobile layouts
  const renderDial = () => (
    <div className="relative w-[400px] h-[700px] shrink-0">
      {/* SVG Background Arcs */}
      <svg width="400" height="700" viewBox="0 0 400 700" className="absolute top-0 left-0 overflow-visible">
        {monthsData.map((m, i) => {
          const isActive = activeIndex === i;
          const r = 120;
          const R = isActive ? 340 : 300; // Scaled up very slightly again
          const d = getArcPath(0, 350, r, R, angles[i].start, angles[i].end);
          
          return (
            <path 
              key={i} 
              d={d} 
              fill={isActive ? m.color : m.lightColor} 
              className={`transition-all duration-700 cursor-pointer origin-[0px_350px] ${isActive ? '' : 'hover:scale-105'}`}
              onClick={() => setActiveIndex(i)}
            />
          );
        })}
      </svg>
      
      {/* HTML Absolute Overlays for Icons and Text */}
      {monthsData.map((m, i) => {
        const isActive = activeIndex === i;
        const midAngle = (angles[i].start + angles[i].end) / 2;
        const midR = isActive ? 230 : 210; // Adjusted for new radii
        const cx = 0; 
        const cy = 350;
        
        const x = cx + midR * Math.cos(midAngle * Math.PI / 180);
        const y = cy + midR * Math.sin(midAngle * Math.PI / 180);

        return (
          <div 
            key={i}
            className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-700 cursor-pointer"
            style={{ left: `${x}px`, top: `${y}px` }}
            onClick={() => setActiveIndex(i)}
          >
            <div 
              className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-lg transition-transform duration-700 ${isActive ? 'scale-125' : 'scale-100'}`} 
              style={{ backgroundColor: m.color, color: 'white' }}
            >
              {m.pieIcon}
            </div>
            <span 
              className={`font-bold tracking-widest transition-colors duration-700 ${isActive ? 'text-white text-[16px]' : 'text-[15px]'}`} 
              style={{ color: isActive ? 'white' : m.color }}
            >
              {m.label}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="w-full bg-white font-poppins py-10 lg:py-10 relative overflow-hidden min-h-[700px] flex items-center">
      
      {/* Desktop Dial - Absolutely positioned with a tiny gap on the left, slightly lower */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 mt-12 z-0 hidden lg:block">
        <div className="transform scale-[0.85] xl:scale-[0.95] origin-left">
          {renderDial()}
        </div>
      </div>

      <div className="max-w-[1536px] w-full mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row">
          
          {/* Mobile Dial */}
          <div className="w-full flex justify-start mb-6 lg:hidden ml-2 md:ml-4 overflow-hidden h-[430px] md:h-[450px] -mt-12 md:-mt-8">
            <div className="transform scale-[0.6] md:scale-[0.75] origin-top-left">
              {renderDial()}
            </div>
          </div>

          {/* Spacer for desktop dial */}
          <div className="hidden lg:block lg:w-[35%] xl:w-[30%] shrink-0"></div>

          {/* Main Content (Header + Card) */}
          <div className="flex-1 w-full flex flex-col">
            
            {/* Header */}
            <div className="mb-12">
              <p className="text-[#4F46E5] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-4">
                COMING UP
              </p>
              <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-extrabold text-[#111827] leading-[1.2] tracking-tight mb-4">
                Programme Calendar <span className="text-gray-300 font-normal mx-1">·</span> <span className="text-[#4F46E5]">2026</span>
              </h2>
              <p className="text-[#4B5563] font-medium text-[15px] md:text-[16px] leading-relaxed max-w-2xl">
                All Community Activities Are Free For Members. Live Sessions Are Recorded And Shared Within 24 Hours.
              </p>
            </div>

            {/* Right Card Area */}
            <div 
              key={activeIndex}
              className="w-full bg-white border border-gray-200 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[24px] p-6 lg:p-10 flex flex-col animate-[fadeInUp_0.5s_ease-out] min-h-[400px]"
            >
              {activeData.events.map((event, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row md:items-center gap-4 lg:gap-6 py-6 ${idx !== activeData.events.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  
                  {/* Icon */}
                  <div className={`w-[52px] h-[52px] shrink-0 rounded-2xl flex items-center justify-center ${event.iconBg} ${event.iconColor}`}>
                    {event.icon}
                  </div>
                  
                  {/* Title */}
                  <div className="flex-1">
                    <h4 className="text-[11px] md:text-[12px] lg:text-[13px] font-bold text-[#111827] uppercase tracking-wide leading-relaxed">
                      {event.title}
                    </h4>
                  </div>
                  
                  {/* Date & Badge */}
                  <div className="flex flex-row items-center md:justify-end gap-3 shrink-0 ml-auto whitespace-nowrap">
                    <span className="text-[12px] md:text-[13px] lg:text-[14px] text-gray-500 font-semibold tracking-wide">
                      {event.date}
                    </span>
                    {event.badge && (
                      <>
                        <span className="hidden md:block text-gray-300">·</span>
                        <span className={`text-[11px] md:text-[12px] lg:text-[13px] font-bold tracking-wider uppercase ${event.badgeColor}`}>
                          {event.badge}
                        </span>
                      </>
                    )}
                  </div>
                  
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
