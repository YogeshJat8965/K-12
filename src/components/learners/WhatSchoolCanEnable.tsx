import React from 'react';
import { GraduationCap, Lightbulb, FileText, Users, CheckCircle2 } from 'lucide-react';

export default function WhatSchoolCanEnable() {
  const cards = [
    {
      icon: <GraduationCap className="w-14 h-14 text-white" strokeWidth={1.5} />,
      title: "Future Skills\nCurriculum",
      desc: "Generative AI, Data Science, UX Design, Sustainability, and Product Thinking."
    },
    {
      icon: <Lightbulb className="w-14 h-14 text-white" strokeWidth={1.5} />,
      title: "Experiential\nLearning",
      desc: "Real-world simulations, innovation challenges, and guided project-based learning."
    },
    {
      // Using a composite for Document with Check
      icon: (
        <div className="relative">
          <FileText className="w-[52px] h-[52px] text-white" strokeWidth={1.5} />
          <div className="absolute -bottom-2 -right-2 bg-[#231572] rounded-full p-0.5">
            <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
        </div>
      ),
      title: "Capstone\nDevelopment",
      desc: "Student-led applications, research, and solution-building with measurable outcomes."
    },
    {
      icon: <Users className="w-14 h-14 text-white" strokeWidth={1.5} />,
      title: "Mentorship\nAccess",
      desc: "Structured guidance from educators and industry experts."
    },
  ];

  return (
    <section className="w-full relative py-20 lg:py-24 font-poppins overflow-hidden" style={{ background: 'linear-gradient(135deg, #1C115E 0%, #25167A 100%)' }}>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#3924B3] blur-[120px] opacity-40"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#4128CC] blur-[120px] opacity-30"></div>

        {/* Faint Concentric Circles Bottom Left */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 border-[1px] border-white/5 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 border-[1px] border-white/5 rounded-full"></div>

        {/* Faint Concentric Circles Bottom Right */}
        <div className="absolute top-20 -right-20 w-[500px] h-[500px] border-[1px] border-white/5 rounded-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[42px] lg:text-[46px] font-bold text-white tracking-wide">
            What Your School Can Enable
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-[20px] bg-white/[0.04] border border-white/[0.08] p-8 lg:p-10 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:bg-white/[0.06] duration-300"
            >
              {/* Icon Container with Glow */}
              <div className="relative mb-8 flex justify-center items-center">
                <div className="absolute w-12 h-12 bg-[#6E42FF] blur-[24px] opacity-70 mt-4 rounded-full"></div>
                <div className="relative z-10">
                  {card.icon}
                </div>
              </div>

              {/* Separator Line */}
              <div className="w-6 h-[3px] bg-white/30 rounded-full mb-8"></div>

              {/* Heading */}
              <h3 className="text-white text-[18px] lg:text-[20px] font-bold leading-snug mb-5 whitespace-pre-line">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-white/90 text-[13px] lg:text-[14px] leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
