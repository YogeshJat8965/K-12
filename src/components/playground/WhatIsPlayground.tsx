import { Users, Clock, Zap } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

export default function WhatIsPlayground() {
  const cards = [
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      label: "FOR AGES",
      value: "Grades 5–12"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      label: "SKILL LEVEL",
      value: "Zero to Creative"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      label: "TIME TO FIRST AGENT",
      value: "Under 10 Minutes"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="what-is">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-[40%] text-left">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                What is an <br />
                <span className="text-purple-600">AI Playground?</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Think of it as a creative workshop for AI – but without the complexity. 
                Students explore a library of ready-made AI agents, customise them to 
                their voice and style, and share what they create.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-600 font-semibold text-lg">
                <span className="text-purple-600">Pick, tweak, build, share and discover</span> what AI can 
                do when you're the one in charge.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-3 gap-5">
            {cards.map((card, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="bg-white p-7 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(107,33,168,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-start text-left h-full border border-white">
                  <div className="mb-8 p-4 bg-purple-50 rounded-2xl">
                    {card.icon}
                  </div>
                  <span className="text-purple-600 font-black text-[10px] tracking-[0.2em] uppercase mb-3">
                    {card.label}
                  </span>
                  <span className="text-slate-900 font-bold text-lg leading-tight whitespace-nowrap">
                    {card.value}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
