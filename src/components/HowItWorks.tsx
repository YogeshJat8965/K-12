import { useEffect, useRef, useState, useCallback } from 'react';
import { howItWorks } from '../virtualInternship';
import { Clock, Calendar, Monitor, Search, GraduationCap, BookOpen, Hammer, Trophy, Rocket, Sparkles } from 'lucide-react';

/* ── Step images (generated illustrations) ── */
const stepImages = [
  '/images/step1-discover.png',
  '/images/step2-enroll.png',
  '/images/step3-learn.png',
  '/images/step4-build.png',
  '/images/step5-earn.png',
];

/* ── Step icons (Lucide) ── */
const stepIcons = [
  <Search className="w-6 h-6 lg:w-7 lg:h-7 text-white" />,
  <GraduationCap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />,
  <BookOpen className="w-6 h-6 lg:w-7 lg:h-7 text-white" />,
  <Hammer className="w-6 h-6 lg:w-7 lg:h-7 text-white" />,
  <Trophy className="w-6 h-6 lg:w-7 lg:h-7 text-white" />,
];

/* ── Color themes per step ── */
const stepThemes = [
  {
    bg: 'bg-sky-500',
    gradient: 'from-sky-500 to-blue-600',
    light: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-600',
    shadow: 'shadow-sky-200/50',
    ring: 'ring-sky-200',
  },
  {
    bg: 'bg-emerald-500',
    gradient: 'from-emerald-500 to-green-600',
    light: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-600',
    shadow: 'shadow-emerald-200/50',
    ring: 'ring-emerald-200',
  },
  {
    bg: 'bg-orange-500',
    gradient: 'from-orange-500 to-amber-600',
    light: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600',
    shadow: 'shadow-orange-200/50',
    ring: 'ring-orange-200',
  },
  {
    bg: 'bg-yellow-500',
    gradient: 'from-yellow-500 to-amber-500',
    light: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-600',
    shadow: 'shadow-yellow-200/50',
    ring: 'ring-yellow-200',
  },
  {
    bg: 'bg-pink-500',
    gradient: 'from-pink-500 to-rose-600',
    light: 'bg-pink-50',
    border: 'border-pink-200',
    text: 'text-pink-600',
    shadow: 'shadow-pink-200/50',
    ring: 'ring-pink-200',
  },
];

/* ── Floating decorative elements between steps ── */
const floatingEmojis = ['✨', '🌟', '⭐', '💫'];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [activeStep, setActiveStep] = useState<number>(-1);

  /* ── Scroll-linked spine fill + step reveals ── */
  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    const spine = spineRef.current;
    if (!section || !spine) return;

    const sectionRect = section.getBoundingClientRect();
    const sectionTop = sectionRect.top;
    const sectionHeight = sectionRect.height;
    const viewportHeight = window.innerHeight;

    // Calculate spine fill based on scroll position within section
    const scrolledInto = viewportHeight - sectionTop;
    const fillPercent = Math.min(Math.max((scrolledInto / sectionHeight) * 100, 0), 100);
    spine.style.setProperty('--spine-fill', `${fillPercent}%`);

    // Check visibility of each step
    const newVisible = new Set<number>();
    let latestActive = -1;

    stepRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const stepCenter = rect.top + rect.height / 2;

      if (stepCenter < viewportHeight * 0.85) {
        newVisible.add(i);
        ref.classList.add('visible');
        if (stepCenter < viewportHeight * 0.6 && stepCenter > 0) {
          latestActive = i;
        }
      }
    });

    setVisibleSteps(newVisible);
    setActiveStep(latestActive);
  }, []);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial check
    setTimeout(handleScroll, 200);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  /* ── Parallax on images ── */
  useEffect(() => {
    const handleParallax = () => {
      const imgs = sectionRef.current?.querySelectorAll('.parallax-img img');
      if (!imgs) return;
      imgs.forEach((img) => {
        const rect = (img as HTMLElement).parentElement!.getBoundingClientRect();
        const viewH = window.innerHeight;
        const inView = rect.top < viewH && rect.bottom > 0;
        if (inView) {
          const progress = (viewH - rect.top) / (viewH + rect.height);
          const offset = (progress - 0.5) * 30; // subtle parallax
          (img as HTMLElement).style.transform = `translateY(${offset}px) scale(1.05)`;
        }
      });
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-sky-50 overflow-hidden relative"
    >
      {/* Background deco */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-sky-100/50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-orange-100/30 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="reveal inline-flex items-center gap-2 bg-sky-100 text-sky-700 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Rocket className="w-3.5 h-3.5" />
            The Journey
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-brand-navy mb-4">
            {howItWorks.title}
          </h2>
          <p className="reveal text-brand-navy/60 text-lg max-w-xl mx-auto mb-10">
            {howItWorks.subtitle}
          </p>

          {/* Quick facts */}
          <div className="reveal flex flex-wrap justify-center gap-4">
            <div className="fact-pill flex items-center gap-2 bg-white/80 rounded-full px-6 py-3 shadow-lg">
              <Calendar className="w-4 h-4 text-sky-500" />
              <span className="font-bold text-slate-700 text-sm">{howItWorks.duration}</span>
            </div>
            <div className="fact-pill flex items-center gap-2 bg-white/80 rounded-full px-6 py-3 shadow-lg">
              <Clock className="w-4 h-4 text-orange-500" />
              <span className="font-bold text-slate-700 text-sm">{howItWorks.weeklyEffort} / week</span>
            </div>
            <div className="fact-pill flex items-center gap-2 bg-white/80 rounded-full px-6 py-3 shadow-lg">
              <Monitor className="w-4 h-4 text-green-500" />
              <span className="font-bold text-slate-700 text-sm">{howItWorks.format}</span>
            </div>
          </div>
        </div>

        {/* ── Vertical Timeline ── */}
        <div className="relative">
          {/* Spine */}
          <div ref={spineRef} className="timeline-spine hidden lg:block" />

          {/* Traveling rocket */}
          <div className="timeline-rocket hidden lg:block">🚀</div>

          {/* Steps */}
          <div className="space-y-8 lg:space-y-4">
            {howItWorks.steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              const theme = stepThemes[i];
              const isActive = activeStep === i;

              return (
                <div
                  key={i}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className={`timeline-step ${isLeft ? 'step-left' : 'step-right'}`}
                >
                  {/* Content side */}
                  <div className="timeline-step-content">
                    <div className="step-card bg-white border border-slate-100 shadow-xl relative overflow-hidden">
                      {/* Decorative dot pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04]" style={{
                        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                        backgroundSize: '12px 12px',
                      }} />

                      {/* Step badge */}
                      <div className={`inline-flex items-center gap-2 ${theme.text} font-black text-xs uppercase tracking-widest mb-4`}>
                        <span className={`w-6 h-6 rounded-lg bg-gradient-to-br ${theme.gradient} text-white text-[10px] font-black flex items-center justify-center`}>
                          {step.num}
                        </span>
                        Step {step.num}
                      </div>

                      <h3 className="font-display text-2xl lg:text-3xl text-brand-navy mb-3 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-brand-navy/70 text-base leading-relaxed relative z-10 font-medium">
                        {step.desc}
                      </p>

                      {/* Fun tag */}
                      <div className="mt-4 flex items-center gap-2">
                        <Sparkles className={`w-4 h-4 ${theme.text}`} />
                        <span className={`text-xs font-bold ${theme.text}`}>
                          {['Find your path!', 'Choose your adventure!', 'Knowledge unlocked!', 'Create something amazing!', 'You did it!'][i]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className={`timeline-node bg-gradient-to-br ${theme.gradient} shadow-xl ${isActive ? 'active ring-4 ' + theme.ring : ''}`}>
                    {stepIcons[i]}
                  </div>

                  {/* Image side */}
                  <div className="timeline-step-image">
                    <div className="parallax-img h-56 lg:h-64 relative group">
                      <img
                        src={stepImages[i]}
                        alt={`Step ${step.num}: ${step.title}`}
                        className="rounded-3xl"
                        loading="lazy"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-end p-5">
                        <span className="text-white font-bold text-sm flex items-center gap-2">
                          {stepIcons[i]}
                          {step.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating decorative emojis */}
          {floatingEmojis.map((emoji, i) => (
            <div
              key={i}
              className={`absolute hidden lg:block text-2xl pointer-events-none ${
                i % 2 === 0 ? 'float' : 'float-rotate'
              }`}
              style={{
                top: `${15 + i * 22}%`,
                left: i % 2 === 0 ? '2%' : 'auto',
                right: i % 2 === 1 ? '2%' : 'auto',
                opacity: 0.5,
              }}
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* ── Bottom CTA Simplified ── */}
        <div className="reveal mt-16 pt-12 border-t border-brand-sky/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-brand-sky/10 rounded-2xl flex items-center justify-center text-brand-sky flex-shrink-0">
              <Rocket className="w-7 h-7" />
            </div>
            <div>
              <span className="text-brand-sky font-black text-[10px] uppercase tracking-[0.2em] mb-1 block">Ready to begin?</span>
              <h3 className="font-display text-2xl lg:text-3xl text-brand-navy leading-tight">
                Your child's journey starts with one click.
              </h3>
            </div>
          </div>
          <a
            href="#quiz"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-sky to-blue-500 text-white font-black px-10 py-4.5 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-brand-sky/25 whitespace-nowrap"
          >
            <Search className="w-7 h-7" />
            Discover Their Track
          </a>
        </div>
      </div>
    </section>
  );
}
