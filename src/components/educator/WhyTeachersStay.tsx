import React from 'react';
import { BookOpen, Users, FileBarChart, TrendingUp } from 'lucide-react';

const pillars = [
  {
    id: 'learn',
    title: 'Learn',
    desc: 'Practical AI teaching from experts and partners - never just theory. Monthly masterclasses, Adobe creativity sessions, Vedya AI workshops.',
    icon: BookOpen,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'hover:border-blue-200',
    glow: 'group-hover:bg-blue-50/50'
  },
  {
    id: 'connect',
    title: 'Connect',
    desc: 'Find your people the moment you join - peer, subject and state circles, forums, and cross-school collaborations.',
    icon: Users,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'hover:border-emerald-200',
    glow: 'group-hover:bg-emerald-50/50'
  },
  {
    id: 'track',
    title: 'Track',
    desc: 'A passport that builds your professional record for you: auto CPD after each event, logged external training, an annual report ready to export.',
    icon: FileBarChart,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'hover:border-indigo-200',
    glow: 'group-hover:bg-indigo-50/50'
  },
  {
    id: 'rise',
    title: 'Rise',
    desc: 'Turn contribution into recognition: CCMM badges and features, Mentor and Ambassador roles, and national Yugantar recognition.',
    icon: TrendingUp,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'hover:border-purple-200',
    glow: 'group-hover:bg-purple-50/50'
  }
];

export default function WhyTeachersStay() {
  return (
    <section className="w-full bg-white py-24 font-poppins relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#5B32EA] font-bold text-[12px] uppercase tracking-widest mb-4 block">
            WHY TEACHERS STAY
          </span>
          <h2 className="text-[34px] sm:text-[40px] md:text-[44px] font-extrabold text-[#1A1A2E] leading-[1.15] tracking-tight mb-6">
            Four things, working together for your growth.
          </h2>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 relative group overflow-hidden ${pillar.border}`}
              >
                {/* Subtle Hover Gradient Background */}
                <div className={`absolute inset-0 transition-colors duration-500 opacity-0 group-hover:opacity-100 ${pillar.glow}`}></div>

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${pillar.bg} ${pillar.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-[#1A1A2E] font-extrabold text-[22px] mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-[#4B5563] font-medium text-[15px] lg:text-[16px] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
