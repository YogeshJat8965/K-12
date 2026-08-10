import React from 'react';
import { UserCheck, Activity, Lightbulb, MessageSquare, Globe, Mic, ArrowDown } from 'lucide-react';

const stages = [
  {
    id: '01',
    title: 'Member',
    desc: 'Join free, verify, get your educator card.',
    reward: '0 pts',
    icon: UserCheck,
    color: 'bg-slate-100 text-slate-600 border-slate-200'
  },
  {
    id: '02',
    title: 'Active Educator',
    desc: 'Finish the 30-day challenge.',
    reward: '+220 pts · badge',
    icon: Activity,
    color: 'bg-blue-50 text-blue-600 border-blue-200'
  },
  {
    id: '03',
    title: 'Creative Educator',
    desc: 'Share lessons, enter AI Lab challenges.',
    reward: 'badges + CPD',
    icon: Lightbulb,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
  },
  {
    id: '04',
    title: 'Peer Mentor',
    desc: 'Answer forums, guide newcomers.',
    reward: 'recognition',
    icon: MessageSquare,
    color: 'bg-orange-50 text-orange-600 border-orange-200'
  },
  {
    id: '05',
    title: 'Ambassador',
    desc: 'Host circles, run local meetups.',
    reward: '1,000+ pts',
    icon: Globe,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
  },
  {
    id: '06',
    title: 'Fellow & Speaker',
    desc: 'Lead workshops, take the Yugantar national stage.',
    reward: 'top tier',
    icon: Mic,
    color: 'bg-purple-50 text-purple-600 border-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
  }
];

export default function TheAscent() {
  return (
    <section className="w-full relative py-16 lg:py-24 overflow-hidden font-poppins bg-slate-50 border-t border-gray-100">
      
      {/* Modern Tech Background (Grid + Gradient Mesh) */}
      <div className="absolute inset-0 z-0" style={{ backgroundImage: "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.5 }}></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#5B45FF]/10 to-[#EC4899]/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none mix-blend-multiply z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-[#38BDF8]/10 to-[#818CF8]/10 rounded-full blur-[120px] translate-y-1/3 pointer-events-none mix-blend-multiply z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50 z-0 pointer-events-none"></div>

      {/* Decorative Semi-circles in Corners */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-bl from-[#5B45FF]/20 to-transparent rounded-bl-full z-0 opacity-80 border-b border-l border-[#5B45FF]/10"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-tr from-[#EC4899]/10 to-transparent rounded-tr-full z-0 opacity-80 border-t border-r border-[#EC4899]/10"></div>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[#5B32EA] font-bold text-[12px] uppercase tracking-widest mb-4 block">
            THE ASCENT
          </span>
          <h2 className="text-[36px] sm:text-[42px] md:text-[48px] font-extrabold text-[#1A1A2E] leading-[1.15] tracking-tight mb-6">
            One path, from first login<br className="hidden md:block" /> to the national stage.
          </h2>
          <p className="text-[#4B5563] font-medium text-[16px] md:text-[18px] leading-relaxed max-w-3xl">
            Every masterclass attended, lesson shared and question answered earns CirclePoints and CPD. This is a standing you build with your community, not a course you finish.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative w-full max-w-3xl mx-auto">
          
          {/* Center Vertical Line */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 md:-translate-x-1/2 w-[2px] bg-gradient-to-b from-slate-200 via-indigo-200 to-purple-400"></div>

          <div className="flex flex-col gap-12 relative">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={stage.id} className={`flex flex-col md:flex-row items-start md:items-center w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[28px] md:left-1/2 transform -translate-x-1/2 w-[48px] h-[48px] bg-white border-[3px] border-[#FAFAFF] rounded-full flex items-center justify-center z-10 shadow-sm">
                    <div className={`w-full h-full rounded-full flex items-center justify-center ${stage.color} border`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout (Desktop only) */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Card Content */}
                  <div className={`w-full pl-[70px] md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12 lg:pr-16 md:text-right' : 'md:pl-12 lg:pl-16 md:text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
                      
                      {/* Subtle hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className={`flex flex-wrap items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="text-[#64748B] font-bold text-[12px] uppercase tracking-widest">
                            Stage {stage.id}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${stage.color}`}>
                            {stage.reward}
                          </span>
                        </div>
                        
                        <h3 className="text-[#1A1A2E] font-extrabold text-[20px] mb-2">
                          {stage.title}
                        </h3>
                        
                        <p className="text-[#4B5563] font-medium text-[14px] leading-relaxed">
                          {stage.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Arrow Indicator */}
          <div className="absolute bottom-[-40px] left-[28px] md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-purple-500 bg-[#FAFAFF] p-2 rounded-full">
             <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>

        </div>

      </div>
    </section>
  );
}
