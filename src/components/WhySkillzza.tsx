import { useState, useCallback, useRef } from 'react';
import { whySkillzza } from '../virtualInternship';
import { School, Target, Factory, Users, Briefcase, Lock, Star } from 'lucide-react';

const wsIcons = [
  <School className="w-7 h-7 text-sky-600" />,
  <Target className="w-7 h-7 text-orange-600" />,
  <Factory className="w-7 h-7 text-green-600" />,
  <Users className="w-7 h-7 text-yellow-600" />,
  <Briefcase className="w-7 h-7 text-pink-600" />,
  <Lock className="w-7 h-7 text-blue-600" />,
];

const iconBg = [
  'bg-sky-100', 'bg-orange-100', 'bg-green-100',
  'bg-yellow-100', 'bg-pink-100', 'bg-blue-100',
];

/* ── Ripple click effect ── */
function RippleCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const idRef = useRef(0);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = idRef.current++;
    setRipples((prev) => [...prev.slice(-3), { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
  };

  return (
    <div className={`relative overflow-hidden ${className || ''}`} onClick={handleClick}>
      {children}
      {ripples.map((r) => (
        <div
          key={r.id}
          className="ripple-effect"
          style={{ left: r.x - 10, top: r.y - 10, width: 20, height: 20 }}
        />
      ))}
    </div>
  );
}

/* ── Floating comparison bubbles ── */
function ComparisonBubbles() {
  const comparisons = [
    { others: 'Generic courses', us: 'Real internships' },
    { others: 'Video-only', us: 'Mentor-guided' },
    { others: 'No outcomes', us: 'Certified results' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {comparisons.map((c, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="glass text-white/50 text-xs font-bold px-3 py-1.5 rounded-full line-through">
            {c.others}
          </span>
          <span className="text-white font-bold text-sm">→</span>
          <span className="bg-yellow-400/90 text-slate-800 text-xs font-black px-3 py-1.5 rounded-full shadow-md">
            {c.us}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function WhySkillzza() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-sky-600 to-blue-700 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl blob" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-300/10 blur-3xl blob blob-delay-2" />

      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <div className="reveal inline-flex items-center gap-2 glass text-white font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-white/30">
            <Star className="w-3.5 h-3.5" />
            Why Skillzza
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl text-white mb-4 flex items-center gap-3 justify-center flex-wrap">
            What Makes Us Different
          </h2>
          <p className="reveal text-white/75 text-lg max-w-xl mx-auto">
            Not just another ed-tech platform — a purposefully designed experience for school students.
          </p>
        </div>

        {/* Comparison bubbles */}
        <div className="reveal">
          <ComparisonBubbles />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whySkillzza.map((item, i) => (
            <RippleCard
              key={i}
              className={`reveal delay-${(i % 3 + 1) * 100} glass rounded-3xl p-7 hover:bg-white/20 transition-all duration-300 cursor-pointer ${
                hoveredIdx === i ? 'scale-[1.03] bg-white/20' : ''
              }`}
            >
              <div
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className={`w-14 h-14 ${iconBg[i]} rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 ${
                  hoveredIdx === i ? 'scale-110 rotate-3' : ''
                }`}>
                  {wsIcons[i]}
                </div>
                <h3 className="font-display text-xl text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </RippleCard>
          ))}
        </div>
      </div>
    </section>
  );
}
