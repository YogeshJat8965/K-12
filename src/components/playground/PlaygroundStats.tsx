import { useEffect, useRef, useState } from 'react';
import { stats } from '../../aiPlayground';
import { Bot, Clock, GraduationCap, Brain } from 'lucide-react';

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(target / 30);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 40);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

const icons = [
  <Bot className="w-7 h-7 text-white" />,
  <Clock className="w-7 h-7 text-white" />,
  <GraduationCap className="w-7 h-7 text-white" />,
  <Brain className="w-7 h-7 text-white" />,
];

const gradients = [
  'from-ai-purple to-ai-magenta',
  'from-ai-pink to-rose-500',
  'from-ai-blue to-indigo-500',
  'from-ai-cyan to-teal-500',
];

const funFacts = [
  '12 prebuilt agents covering creativity, academics, science, and more!',
  'Most students build their first agent before they finish one YouTube video.',
  'From Grade 5 to Grade 12 — every student finds their perfect match.',
  'Prompt thinking, AI literacy, coding logic, creative confidence & more!',
];

export default function PlaygroundStats() {
  return (
    <section className="py-20 bg-[#FAFAFE] relative -mt-1 pt-24">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 relative z-20">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`reveal delay-${(i + 1) * 100} flip-card relative overflow-hidden rounded-3xl ring-4 ring-purple-200/30 h-52`}
            >
              <div className="flip-card-inner absolute inset-0">
                {/* Front */}
                <div className={`flip-card-front absolute inset-0 bg-gradient-to-br ${gradients[i]} p-7 text-white text-center shadow-lg flex flex-col items-center justify-center stat-shimmer`}>
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    {icons[i]}
                  </div>
                  <div className="font-display text-5xl font-bold mb-1">
                    <CountUp target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-white/80 font-bold text-sm uppercase tracking-wide">
                    {s.label}
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-white/10" />
                </div>

                {/* Back */}
                <div className={`flip-card-back absolute inset-0 bg-gradient-to-br ${gradients[i]} p-7 text-white text-center shadow-lg flex flex-col items-center justify-center`}>
                  <div className="text-3xl mb-3">
                    {['🤖', '⚡', '🎓', '🧠'][i]}
                  </div>
                  <div className="font-bold text-sm leading-relaxed px-2">
                    {funFacts[i]}
                  </div>
                  <div className="text-white/50 text-xs mt-3 font-bold">Hover to flip back</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
