import React from 'react';

const ChartIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    {/* Base line */}
    <rect x="8" y="44" width="40" height="4" rx="2" fill="#5B32EA" />
    
    {/* Bars */}
    <rect x="12" y="32" width="6" height="12" rx="1.5" fill="#5B32EA" />
    <rect x="22" y="24" width="6" height="20" rx="1.5" fill="#5B32EA" />
    <rect x="32" y="16" width="6" height="28" rx="1.5" fill="#5B32EA" />
    
    {/* Arrow */}
    <path 
      d="M12 24 L22 16 L28 20 L40 8" 
      stroke="#5B32EA" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M32 8 H40 V16" 
      stroke="#5B32EA" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

const WavePattern = () => (
  <svg 
    width="500" 
    height="120" 
    viewBox="0 0 500 120" 
    fill="none" 
    className="absolute right-0 top-0 h-full opacity-[0.35] pointer-events-none hidden md:block"
  >
    <path d="M0,120 C100,120 200,20 350,50 C420,65 470,30 500,20" stroke="#5B32EA" strokeWidth="2" strokeDasharray="1 5" strokeLinecap="round" fill="none" />
    <path d="M20,130 C120,130 220,30 370,60 C440,75 480,40 500,30" stroke="#5B32EA" strokeWidth="2" strokeDasharray="1 5" strokeLinecap="round" fill="none" />
    <path d="M40,140 C140,140 240,40 390,70 C460,85 490,50 500,40" stroke="#5B32EA" strokeWidth="2" strokeDasharray="1 5" strokeLinecap="round" fill="none" />
    <path d="M60,150 C160,150 260,50 410,80 C480,95 500,60 500,50" stroke="#5B32EA" strokeWidth="2" strokeDasharray="1 5" strokeLinecap="round" fill="none" />
    <path d="M80,160 C180,160 280,60 430,90 C490,105 500,70 500,60" stroke="#5B32EA" strokeWidth="2" strokeDasharray="1 5" strokeLinecap="round" fill="none" />
  </svg>
);

const TriangleIcon = ({ className }: { className?: string }) => (
  <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" className={className}>
    <path d="M10 6L0 12V0L10 6Z" />
  </svg>
);

import { FadeIn3D, WordReveal, StaggerContainer, StaggerItem } from '../animations/ScrollAnimations';

export default function LearnersCTA() {
  return (
    <section className="w-full bg-[#F5F7FA] pb-24 font-poppins pt-4">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col gap-10">
        
        {/* Top Banner */}
        <FadeIn3D delay={0.1} y={40}>
          <div className="bg-white rounded-[24px] p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6 lg:gap-8 relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(91,50,234,0.08)] group">
            
            <div className="w-[100px] h-[100px] rounded-full bg-[#F4EFFF] flex items-center justify-center shrink-0 z-10 transition-transform duration-500 group-hover:scale-110">
              <ChartIcon />
            </div>
            
            <div className="hidden md:block w-[1.5px] h-[70px] bg-gray-100 z-10" />
            
            <div className="z-10 flex-1 text-center md:text-left pr-0 md:pr-40">
              <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-extrabold text-[#1A1A2E] mb-2 leading-[1.2]">
                Deliver Measurable, Portfolio-Backed Outcomes
              </h3>
              <p className="text-[#6B7280] text-[15px] md:text-[16px]">
                Deliver measurable, portfolio-backed student outcomes to parents and boards.
              </p>
            </div>

            <WavePattern />
          </div>
        </FadeIn3D>

        {/* Bottom CTA Banner */}
        <FadeIn3D delay={0.2} y={40}>
          <div className="bg-gradient-to-r from-[#6731EA] via-[#9146EA] to-[#C95DEB] rounded-[24px] px-8 py-10 lg:px-12 lg:py-10 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-[0_12px_40px_rgba(103,49,234,0.3)] hover:shadow-[0_16px_50px_rgba(103,49,234,0.4)] transition-shadow duration-300 relative overflow-hidden">
            
            {/* Very subtle glow effect overlay */}
            <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex-1 max-w-[600px] text-center lg:text-left z-10">
              <h2 className="text-[32px] md:text-[38px] lg:text-[40px] font-extrabold text-white leading-[1.2] mb-3 tracking-tight max-w-[500px] lg:max-w-none mx-auto lg:mx-0">
                Transform Learning Into Measurable Impact
              </h2>
              <p className="text-white/95 text-[14px] md:text-[15px] font-semibold leading-[1.6] max-w-[500px] lg:max-w-[90%] mx-auto lg:mx-0">
                Equip Your Students To Think Critically, Build Confidently, And Lead Responsibly In An AI-Driven World
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 z-10">
              <button className="bg-white text-[#6731EA] font-extrabold text-[13px] md:text-[14px] px-6 py-3.5 md:py-4 rounded-[12px] flex items-center justify-center gap-2.5 hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all shadow-[0_8px_20px_rgba(0,0,0,0.1)]">
                <TriangleIcon className="w-2.5 h-3" /> REQUEST A DEMO
              </button>
              <button className="border-[2px] border-white/80 text-white font-extrabold text-[13px] md:text-[14px] px-6 py-3.5 md:py-4 rounded-[12px] flex items-center justify-center gap-2.5 hover:bg-white/10 hover:border-white hover:scale-105 active:scale-95 transition-all">
                <TriangleIcon className="w-2.5 h-3 opacity-90" /> PARTNER WITH SKILLZZA K-12
              </button>
            </div>

          </div>
        </FadeIn3D>

      </div>
    </section>
  );
}
