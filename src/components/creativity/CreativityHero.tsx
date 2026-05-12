import { Check, Play, ArrowRight } from 'lucide-react';
import heroImg from '../../assets/digital creativity/hero img.png';
import ScrollReveal from '../ScrollReveal';

export default function CreativityHero() {
  return (
    <section className="relative min-h-screen bg-[#2D2D2D] text-white pt-32 pb-20 overflow-hidden flex items-center">

      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Digital Creativity Hero Background"
          className="w-full h-full object-cover object-right lg:object-center opacity-40 lg:opacity-100"
        />

        {/* Left Side Overlay - To hide ghost text and provide clean surface */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/95 to-transparent w-full lg:w-[60%] z-[1]" />

        {/* Overall subtle dimming */}
        <div className="absolute inset-0 bg-black/10 z-[2]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center">

          {/* Content Over the Background */}
          <div className="w-full lg:w-3/5 relative z-20">
            <ScrollReveal>
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-6 tracking-tight uppercase">
                Digital Creativity & AI Skills for K-12
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-10 tracking-tight uppercase font-display">
                SKILLZZA <span className="text-slate-300">×</span> <br className="hidden xl:block" />
                POWERED BY <span className="text-[#FA0F00]">ADOBE</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="border-l-4 border-[#FA0F00] pl-5 mb-12">
                <p className="text-slate-100 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
                  Empowering students and educators with future-ready digital skills through AI-powered learning using Adobe Express. Aligned with the vision of the National Education Policy 2020, the programme fosters creativity, design thinking, digital literacy, and experiential learning.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature Points */}
            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {[
                  "100% Free Program",
                  "Expert Mentorship",
                  "Digital Certificates",
                  "School Recognition"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-[#FA0F00] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={5} />
                      </div>
                    </div>
                    <span className="text-lg font-bold text-white tracking-wide leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Buttons - Dark Red with Red Border as per SS 41 */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="group px-8 py-3.5 bg-[#800000]/80 border-2 border-[#FA0F00] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#800000] transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-tight">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                  REGISTER YOUR SCHOOL NOW
                </button>
                <button className="group px-8 py-3.5 bg-[#800000]/80 border-2 border-[#FA0F00] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#800000] transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-tight">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                  REGISTER AS TEACHER
                </button>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

    </section>
  );
}
