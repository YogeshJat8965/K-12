import { useEffect, useRef, useCallback, useState } from 'react';
import { whatGain } from '../virtualInternship';
import { Target, FolderOpen, Wrench, Award, MessageSquare, Sparkles } from 'lucide-react';

/* ── Icons per benefit ── */
const gainIcons = [
  <Target className="w-5 h-5" />,
  <FolderOpen className="w-5 h-5" />,
  <Wrench className="w-5 h-5" />,
  <Award className="w-5 h-5" />,
  <MessageSquare className="w-5 h-5" />,
];

/* ── Color theme per benefit ── */
const benefitThemes = Array(5).fill({
  icon: 'bg-brand-sky text-white',
  bar: 'bg-brand-sky',
  num: 'text-brand-sky',
  ring: 'ring-brand-sky/20',
  hover: 'hover:bg-brand-sky/5'
});

export default function WhatGain() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  /* ── Scroll-triggered row reveals ── */
  const handleScroll = useCallback(() => {
    rowRefs.current.forEach((ref) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.82) {
        ref.classList.add('visible');
      }
    });
  }, []);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    setTimeout(handleScroll, 300);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-brand-sky/20 text-brand-navy font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Award className="w-3.5 h-3.5" />
            What Students Gain
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-brand-navy mb-4">
            5 Life-Changing Outcomes
          </h2>
          <p className="reveal text-brand-navy/60 text-base md:text-lg max-w-3xl mx-auto md:whitespace-nowrap">
            Every internship is built to deliver real, tangible value for your child's future.
          </p>
        </div>

        {/* Two-column layout: Image + Benefits */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* LEFT: Illustration (sticky on desktop) */}
          <div className="lg:col-span-2 relative lg:sticky lg:top-24">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/what-gain-journey.png"
                alt="Student growth journey"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Glow overlay that changes with hover */}
              <div className={`absolute inset-0 transition-all duration-500 rounded-3xl ${
                hoveredIdx !== null
                  ? 'bg-gradient-to-t from-slate-900/50 to-transparent'
                  : 'bg-gradient-to-t from-slate-900/20 to-transparent'
              }`} />

              {/* Floating highlight label */}
              {hoveredIdx !== null && (
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg pop-in">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${benefitThemes[hoveredIdx].icon} flex items-center justify-center flex-shrink-0`}>
                      {gainIcons[hoveredIdx]}
                    </div>
                    <div>
                      <div className="font-black text-slate-800 text-sm">{whatGain[hoveredIdx].title}</div>
                      <div className="text-slate-500 text-xs">Outcome {whatGain[hoveredIdx].num}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mini CTA below image */}
            <div className="mt-6 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-5 text-center relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }} />
              <div className="relative z-10">
                <p className="text-white/90 text-sm font-bold mb-3">
                  Help your child discover their perfect track
                </p>
                <a
                  href="#quiz"
                  className="inline-flex items-center gap-2 bg-white text-sky-600 font-black text-sm px-5 py-2.5 rounded-xl hover:bg-yellow-300 hover:text-slate-800 transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  Take the Free Quiz
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Benefit rows */}
          <div className="lg:col-span-3 space-y-2">
            {whatGain.map((item, i) => {
              const theme = benefitThemes[i];
              return (
                <div
                  key={i}
                  ref={(el) => { rowRefs.current[i] = el; }}
                  className={`benefit-row group`}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div className={`flex items-start gap-3 p-3 lg:p-4 rounded-2xl border-2 border-transparent ${theme.hover} transition-all duration-300 cursor-default ${
                    hoveredIdx === i ? `ring-2 ${theme.ring} bg-white shadow-lg` : 'bg-white/50'
                  }`}>
                    {/* Number */}
                    <div className={`font-display text-xl lg:text-2xl font-bold ${theme.num} opacity-40 group-hover:opacity-100 transition-opacity duration-300 leading-none mt-1 select-none flex-shrink-0 w-8 text-right`}>
                      {item.num}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-base lg:text-lg text-slate-800 mb-1 leading-snug group-hover:text-slate-900 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Progress bar */}
                      <div className="benefit-progress">
                        <div
                          className={`benefit-progress-fill ${theme.bar}`}
                          style={{ transitionDelay: `${i * 0.15}s` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
