import { useEffect, useRef, useState } from 'react';
import { stats } from '../virtualInternship';
import { Rocket, Calendar, Award, GraduationCap } from 'lucide-react';
import { MascotWithEyes } from './KidElements';

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

const colors = [
  { gradient: 'from-sky-400 to-blue-600', icon: 'bg-white/20', ring: 'ring-sky-300/30', back: 'from-sky-500 to-blue-700' },
  { gradient: 'from-orange-400 to-amber-500', icon: 'bg-white/20', ring: 'ring-orange-300/30', back: 'from-orange-500 to-amber-600' },
  { gradient: 'from-green-400 to-emerald-600', icon: 'bg-white/20', ring: 'ring-green-300/30', back: 'from-green-500 to-emerald-700' },
  { gradient: 'from-pink-400 to-rose-600', icon: 'bg-white/20', ring: 'ring-pink-300/30', back: 'from-pink-500 to-rose-700' },
];

const icons = [
  <Rocket className="w-7 h-7 text-white" />,
  <Calendar className="w-7 h-7 text-white" />,
  <Award className="w-7 h-7 text-white" />,
  <GraduationCap className="w-7 h-7 text-white" />,
];

const funFacts = [
  'Students who intern early are 3x more confident in career choices!',
  'Our shortest program packs more practice than a full semester.',
  'Every student builds at least 2 real-world projects.',
  'Alumni report 40% better college applications.',
];

export default function Stats() {
  return (
    <section className="py-16 bg-white relative -mt-1">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="absolute -top-10 right-4 z-10 hidden md:block">
          <MascotWithEyes />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`reveal delay-${(i + 1) * 100} flip-card relative overflow-hidden rounded-3xl ring-4 ${colors[i].ring} h-52`}
            >
              <div className="flip-card-inner absolute inset-0">
                {/* Front */}
                <div className={`flip-card-front absolute inset-0 bg-gradient-to-br ${colors[i].gradient} p-7 text-white text-center shadow-lg flex flex-col items-center justify-center`}>
                  <div className={`w-14 h-14 ${colors[i].icon} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
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
                <div className={`flip-card-back absolute inset-0 bg-gradient-to-br ${colors[i].back} p-7 text-white text-center shadow-lg flex flex-col items-center justify-center`}>
                  <div className="text-3xl mb-3">
                    {['🚀', '📅', '🏆', '🎓'][i]}
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
