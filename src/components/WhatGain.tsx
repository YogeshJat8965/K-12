import { Compass, FolderOpen, Brain, Award, Target } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const gains = [
  {
    title: "Career Clarity\nBefore It Matters",
    description: "Explore multiple domains - AI, space, business, design, sustainability, wellness - before making life-shaping stream and career decisions.",
    icon: Compass,
    color: "#7C3AED", // Violet
    iconBg: "bg-[#7C3AED]"
  },
  {
    title: "A Portfolio\nThat Stands Out",
    description: "Every internship produces a real project - a prototype, report, or presentation - that strengthens college applications.",
    icon: FolderOpen,
    color: "#2563EB", // Blue
    iconBg: "bg-[#2563EB]"
  },
  {
    title: "Future-Ready\nSkill Development",
    description: "Exposure to high-demand skills: AI & Data, Product Thinking, Financial Literacy, Digital Creativity, Problem Solving.",
    icon: Brain,
    color: "#0D9488", // Teal
    iconBg: "bg-[#0D9488]"
  },
  {
    title: "Verified\nCredentials",
    description: "A Digital Skill Passport and certificates that demonstrate initiative and capability beyond academics - shareable with schools, colleges, and future platforms.",
    icon: Award,
    color: "#EA580C", // Orange
    iconBg: "bg-[#EA580C]"
  },
  {
    title: "Confidence &\nReal-World Thinking",
    description: "Communication, ownership, critical thinking, and execution - built through solving real problems.",
    icon: Target,
    color: "#BE185D", // Pink
    iconBg: "bg-[#BE185D]"
  }
];

export default function WhatGain() {
  return (
    <section id="what-gain" className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center mb-10">
          What Students Gain
        </h2>

        <div className="bg-white rounded-[1.5rem] border border-slate-100 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.08)] p-2 lg:p-4 overflow-x-auto lg:overflow-x-visible hide-scrollbar">
          <div className="flex flex-col lg:flex-row min-w-[1100px] lg:min-w-0">
            {gains.map((item, i) => (
              <ScrollReveal 
                key={i} 
                delay={i * 0.1} 
                rotateX={20} 
                scale={0.95}
                className="flex-1 flex flex-col"
              >
                <div 
                  className={`h-full p-8 flex flex-col gap-6 ${
                    i !== gains.length - 1 ? 'lg:border-r border-slate-100' : ''
                  } group hover:bg-slate-50/50 transition-all duration-500 cursor-default hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg shadow-current/20 group-hover:scale-125 group-hover:rotate-[10deg] group-hover:shadow-xl transition-all duration-500 ease-out`}>
                      <item.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                    </div>
                    <h3 
                      className="font-bold text-[15px] leading-tight whitespace-pre-line group-hover:scale-105 transition-transform duration-500 origin-left"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 text-[13px] leading-relaxed font-normal group-hover:text-slate-900 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


