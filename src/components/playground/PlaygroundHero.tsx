import { ArrowRight, Play } from 'lucide-react';
import fullHeroImg from '../../assets/AI Playground/full hero section img.png';
import ScrollReveal from '../ScrollReveal';

export default function PlaygroundHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050B1F] mt-[70px]">
      {/* Background Image - Absolute but driving the aspect ratio of a spacer */}
      <div className="relative w-full">
        <img 
          src={fullHeroImg} 
          alt="AI Playground Hero" 
          className="w-full h-auto block"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="flex flex-col lg:flex-row items-center -translate-y-[5%] md:-translate-y-[10%] lg:-translate-y-[15%]">
              
              {/* LEFT CONTENT */}
              <div className="w-full lg:w-[55%] text-left">
                <ScrollReveal>
                  <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight mb-4">
                    Build Your First <br />
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-300% animate-gradient">
                      AI Agent
                    </span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-100 mb-6 leading-snug">
                    No coding. No complexity. Just curiosity.
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <p className="text-slate-300/80 text-sm md:text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed font-normal">
                    AI Playground is a safe, plug-and-play creative space <br className="hidden lg:block" /> 
                    where students pick a prebuilt AI agent, shape it to their <br className="hidden lg:block" /> 
                    own interests, and bring their ideas to life.
                  </p>
                </ScrollReveal>

                {/* Feature List */}
                <ScrollReveal delay={0.3}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 py-2">
                    {[
                      { label: "No Code", sub: "Needed" },
                      { label: "Prebuilt", sub: "Agents" },
                      { label: "Safe &", sub: "Moderated" },
                      { label: "Parent", sub: "Visible" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col border-r border-white/10 last:border-0 pr-4">
                        <span className="text-slate-100 font-bold text-[10px] md:text-sm lg:text-base">{item.label}</span>
                        <span className="text-slate-500 text-[8px] md:text-xs font-medium">{item.sub}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Buttons */}
                <ScrollReveal delay={0.4}>
                  <div className="flex flex-row items-center gap-3 flex-wrap lg:flex-nowrap">
                    <button className="px-5 py-3 md:px-6 md:py-4 rounded-xl bg-gradient-to-r from-purple-400 to-purple-600 text-white font-bold text-[9px] md:text-[11px] tracking-widest uppercase hover:scale-105 transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2 group whitespace-nowrap">
                      TRY THE PLAYGROUND <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-5 py-3 md:px-6 md:py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-[9px] md:text-[11px] tracking-widest uppercase hover:bg-white/10 transition-all flex items-center gap-2 group whitespace-nowrap">
                      <Play className="w-4 h-4 fill-white" /> WATCH 2-MIN DEMO
                    </button>
                    <button className="px-5 py-3 md:px-6 md:py-4 rounded-xl bg-transparent border border-white/10 text-slate-400 font-bold text-[9px] md:text-[11px] tracking-widest uppercase hover:border-white/30 hover:text-white transition-all whitespace-nowrap">
                      FOR SCHOOLS
                    </button>
                  </div>
                </ScrollReveal>
              </div>

              {/* RIGHT SIDE (Empty for image clarity) */}
              <div className="hidden lg:block flex-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
