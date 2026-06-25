import { useEffect, useState } from 'react';
import { ArrowRight, Play, CheckCircle2, Rocket, Award, CheckSquare } from 'lucide-react';
import rightImage from '../assets/virtual internship/ChatGPT Image May 4, 2026, 10_58_30 PM.png';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden pt-16">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex justify-end bg-white">
        {/* Gradient fade for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full lg:hidden z-10" />

        {/* The Image with CSS Mask for seamless blending */}
        <div className="w-full lg:w-[48%] h-full relative z-0 lg:translate-x-8 xl:translate-x-12">
          <img
            src={rightImage}
            alt="Virtual Internship Student"
            className="w-full h-full object-cover object-[80%_center] lg:object-right"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%)',
              maskImage: 'linear-gradient(to right, transparent, black 30%)'
            }}
          />
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-4 lg:gap-8 items-center">

          {/* Left Content */}
          <div className={`max-w-[700px] transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.25rem] font-bold text-slate-900 leading-[1.05] mb-6 tracking-tight">
              Give Your Child <br />
              a Head Start - <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] whitespace-nowrap inline-block">
                Beyond Academics
              </span>
            </h1>

            {/* Subline */}
            <div className="border-l-4 border-[#6D28D9] pl-5 mb-12">
              <p className="text-slate-700 text-lg sm:text-xl font-normal leading-relaxed">
                In today's world, marks alone are no longer enough. <br className="hidden sm:block" />
                Students need exposure, skills, and proof of capability.
              </p>
            </div>

            {/* 4 Feature Circles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              {/* Item 1 */}
              <ScrollReveal delay={0.1} rotateX={30} scale={0.9}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-purple-100 bg-white shadow-sm flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-6 h-6 text-[#6D28D9]" />
                  </div>
                  <p className="text-[13px] sm:text-sm font-bold text-slate-800 leading-tight">
                    Explore<br />
                    <span className="text-slate-500 font-normal">careers early</span>
                  </p>
                </div>
              </ScrollReveal>

              {/* Item 2 */}
              <ScrollReveal delay={0.2} rotateX={30} scale={0.9}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-orange-100 bg-white shadow-sm flex items-center justify-center mb-3">
                    <CheckSquare className="w-6 h-6 text-orange-500" />
                  </div>
                  <p className="text-[13px] sm:text-sm font-bold text-slate-800 leading-tight">
                    Build<br />
                    <span className="text-slate-500 font-normal">real-world projects</span>
                  </p>
                </div>
              </ScrollReveal>

              {/* Item 3 */}
              <ScrollReveal delay={0.3} rotateX={30} scale={0.9}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-pink-100 bg-white shadow-sm flex items-center justify-center mb-3">
                    <Rocket className="w-6 h-6 text-pink-500" />
                  </div>
                  <p className="text-[13px] sm:text-sm font-bold text-slate-800 leading-tight">
                    Develop<br />
                    <span className="text-slate-500 font-normal">future-ready skills</span>
                  </p>
                </div>
              </ScrollReveal>

              {/* Item 4 */}
              <ScrollReveal delay={0.4} rotateX={30} scale={0.9}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-green-100 bg-white shadow-sm flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-emerald-500" />
                  </div>
                  <p className="text-[13px] sm:text-sm font-bold text-slate-800 leading-tight">
                    Earn<br />
                    <span className="text-slate-500 font-normal">verified credentials</span>
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* CTAs */}
            <ScrollReveal delay={0.6} direction="up" distance={30}>
              <div className="flex flex-wrap items-center gap-6">
                <button className="bg-[#4114d4] hover:bg-[#340eb0] text-white rounded-full px-8 py-4 font-bold flex items-center gap-3 transition-colors shadow-lg shadow-[#4114d4]/30 hover:shadow-[#4114d4]/50 hover:-translate-y-1 transition-all duration-300">
                  EXPLORE INTERNSHIPS
                  <ArrowRight size={20} />
                </button>

                <button className="flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full border-2 border-purple-200 group-hover:border-[#4114d4] bg-white transition-colors flex items-center justify-center shadow-sm">
                    <Play className="w-5 h-5 text-[#4114d4] fill-[#4114d4] ml-1" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-slate-900 text-sm tracking-wide group-hover:text-[#4114d4] transition-colors">WATCH VIDEO</div>
                    <div className="text-slate-500 text-xs font-medium">See how it works</div>
                  </div>
                </button>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Spacer (Content is handled by background image) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
