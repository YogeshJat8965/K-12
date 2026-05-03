import { useEffect, useRef, useState, useCallback } from 'react';
import { howItWorks } from '../../aiPlayground';
import { Search, Palette, Wrench, Trophy, Sparkles, Rocket } from 'lucide-react';

const stepIcons = [
  <Search className="w-6 h-6 text-white" />,
  <Palette className="w-6 h-6 text-white" />,
  <Wrench className="w-6 h-6 text-white" />,
  <Trophy className="w-6 h-6 text-white" />,
];

const stepGradients = [
  'from-ai-purple to-violet-600',
  'from-ai-pink to-rose-500',
  'from-ai-blue to-indigo-500',
  'from-ai-cyan to-teal-500',
];

const stepColors = [
  { light: 'bg-purple-50', border: 'border-purple-200', text: 'text-ai-purple', ring: 'ring-purple-200' },
  { light: 'bg-pink-50', border: 'border-pink-200', text: 'text-ai-pink', ring: 'ring-pink-200' },
  { light: 'bg-blue-50', border: 'border-blue-200', text: 'text-ai-blue', ring: 'ring-blue-200' },
  { light: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-ai-cyan', ring: 'ring-cyan-200' },
];

const stepImages = [
  'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500',
];

const stepTags = ['Browse & discover!', 'Make it yours!', 'See it come alive!', 'Show the world!'];

export default function PlaygroundHowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(-1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const vh = window.innerHeight;
    let latest = -1;

    stepRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      if (rect.top < vh * 0.75) {
        ref.classList.add('visible');
        if (rect.top < vh * 0.5 && rect.bottom > 0) latest = i;
      }
    });

    setActiveStep(latest);
  }, []);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    setTimeout(handleScroll, 200);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  const fillPercent = activeStep >= 0 ? ((activeStep + 1) / howItWorks.steps.length) * 100 : 0;

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 lg:py-32 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-purple-50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-pink-50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="reveal inline-flex items-center gap-2 bg-purple-100 text-ai-purple font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Rocket className="w-3.5 h-3.5" />
            The Journey
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-slate-800 mb-4">
            {howItWorks.title}
          </h2>
          <p className="reveal text-slate-500 text-lg max-w-xl mx-auto">
            {howItWorks.subtitle}
          </p>
        </div>

        {/* ── Horizontal Timeline (Desktop) / Vertical (Mobile) ── */}

        {/* Desktop: Horizontal Progress Bar */}
        <div className="hidden lg:block mb-12">
          <div className="relative mx-12">
            {/* Base line */}
            <div className="timeline-h-spine" style={{ '--timeline-fill': `${fillPercent}%` } as React.CSSProperties} />

            {/* Step nodes */}
            <div className="absolute top-0 left-0 right-0 flex justify-between -translate-y-1/2">
              {howItWorks.steps.map((step, i) => {
                const isActive = i <= activeStep;
                const isCurrent = i === activeStep;
                return (
                  <div key={i} className={`step-node ${isActive ? 'completed' : 'bg-purple-100'} ${isCurrent ? 'active' : ''} shadow-lg`}>
                    <div className={`${isActive ? 'text-white' : 'text-purple-300'}`}>
                      {stepIcons[i]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step Cards */}
        <div className="grid lg:grid-cols-4 gap-6">
          {howItWorks.steps.map((step, i) => {
            const colors = stepColors[i];
            const isActive = i <= activeStep;

            return (
              <div
                key={i}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="step-card-ai"
              >
                {/* Mobile step indicator */}
                <div className="lg:hidden flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stepGradients[i]} flex items-center justify-center shadow-md`}>
                    {stepIcons[i]}
                  </div>
                  <div className={`${colors.text} font-black text-xs uppercase tracking-widest`}>Step {step.num}</div>
                </div>

                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden mb-5 h-44 group">
                  <img
                    src={stepImages[i]}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${stepGradients[i]}`}>
                    Step {step.num}
                  </div>
                </div>

                {/* Content */}
                <div className={`bg-white rounded-2xl p-5 border-2 ${isActive ? colors.border : 'border-slate-100'} shadow-sm hover:shadow-lg transition-all duration-300`}>
                  <h3 className="font-display text-xl text-slate-800 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">
                    {step.desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <Sparkles className={`w-4 h-4 ${colors.text}`} />
                    <span className={`text-xs font-bold ${colors.text}`}>{stepTags[i]}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-16 pt-12 border-t border-purple-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-ai-purple flex-shrink-0">
              <Rocket className="w-7 h-7" />
            </div>
            <div>
              <span className="text-ai-purple font-black text-[10px] uppercase tracking-[0.2em] mb-1 block">Ready to begin?</span>
              <h3 className="font-display text-2xl lg:text-3xl text-slate-800 leading-tight">
                Your first AI agent is just 4 steps away.
              </h3>
            </div>
          </div>
          <a
            href="#agents"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-ai-purple to-ai-magenta text-white font-black px-10 py-4.5 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-300/25 whitespace-nowrap"
          >
            <Sparkles className="w-5 h-5" />
            Explore Agents
          </a>
        </div>
      </div>
    </section>
  );
}
