import { ChevronsRight } from 'lucide-react';
import womenImg from '../assets/virtual internship/women img.webp';
import ScrollReveal from './ScrollReveal';

export default function WhyMatters() {
  return (
    <section id="why-matters" className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered Heading & Intro */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h2 className="mb-6">
            Why Virtual Internships Matter Today
          </h2>
          <p className="text-lg md:text-xl font-normal max-w-4xl mx-auto">
            Students today are required to make some of the most important decisions of their lives - choosing streams, careers, and colleges - often without ever experiencing what those paths actually involve.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-stretch">
          {/* Left Content (Cards + Bridge Text) */}
          {/* Use translate-y-[-10px] etc here to nudge up/down */}
          <div className="flex flex-col justify-between h-full py-1 transform transition-transform duration-300">
            {/* Two Cards with Arrow */}
            <div className="flex flex-col xl:flex-row xl:items-stretch items-center gap-4 relative mb-12">
              {/* Card 1: The Current Gap */}
              <ScrollReveal delay={0.1} rotateY={-15} direction="right">
                <div className="flex-1 w-full bg-white rounded-[1.2rem] border border-slate-100 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-full">
                  <div
                    className="bg-[#023463] px-6 py-4 text-white font-bold text-[11px] tracking-widest uppercase relative"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)' }}
                  >
                    THE CURRENT GAP
                  </div>
                  <div className="p-8 space-y-4 flex-grow">
                    {[
                      "Textbooks explain concepts, not careers.",
                      "Schools focus on marks, not exposure.",
                      "Students lack clarity, direction, and confidence."
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#023463] mt-2 flex-shrink-0" />
                        <p className="text-slate-700 font-semibold text-[14px] leading-snug">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Arrow Circle */}
              <div className="w-12 h-12 rounded-full bg-[#023463] flex items-center justify-center shadow-lg flex-shrink-0 z-20 hidden xl:flex -mx-4 border-[4px] border-white self-center">
                <ChevronsRight className="w-5 h-5 text-white" />
              </div>

              {/* Card 2: The Shift in Education */}
              <ScrollReveal delay={0.3} rotateY={15} direction="left">
                <div className="flex-1 w-full bg-white rounded-[1.2rem] border border-slate-100 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-full">
                  <div
                    className="bg-[#4114D4] px-6 py-4 text-white font-bold text-[11px] tracking-widest uppercase"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)' }}
                  >
                    THE SHIFT IN EDUCATION
                  </div>
                  <div className="p-8 space-y-4 flex-grow">
                    {[
                      "NEP 2020 emphasises experiential learning from Grade 6.",
                      "Top global universities value projects, portfolios, and initiative.",
                      "The future workforce demands skills, not just degrees."
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4114D4] mt-2 flex-shrink-0" />
                        <p className="text-slate-700 font-semibold text-[14px] leading-snug">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Bottom Text */}
            <div className="text-left">
              <p className="text-slate-800 font-extrabold text-xl md:text-2xl leading-tight">
                Virtual internships bridge this gap - <span className="text-[#023463]">transforming learning from passive to practical.</span>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100/40 to-transparent rounded-3xl blur-2xl -z-10" />
            <img
              src={womenImg}
              alt="Successful Student"
              className="w-full h-full object-cover rounded-2xl shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
