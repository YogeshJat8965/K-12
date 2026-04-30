import { useEffect, useRef, useMemo, useCallback, useState } from 'react';
import { outcomes } from '../virtualInternship';
import { Award, FolderOpen, CreditCard, Star, MessageSquare, BarChart3, Trophy, Sparkles } from 'lucide-react';

/* ── Outcome icons ── */
const outcomeIcons = [
  <Award className="w-7 h-7 text-white" />,
  <FolderOpen className="w-7 h-7 text-white" />,
  <CreditCard className="w-7 h-7 text-white" />,
  <Star className="w-7 h-7 text-white" />,
  <MessageSquare className="w-7 h-7 text-white" />,
  <BarChart3 className="w-7 h-7 text-white" />,
];

/* ── Badge gradients ── */
const badgeGradients = [
  'from-yellow-400 to-amber-500',
  'from-sky-400 to-blue-500',
  'from-emerald-400 to-green-500',
  'from-orange-400 to-red-400',
  'from-pink-400 to-rose-500',
  'from-indigo-400 to-purple-500',
];

/* ── Badge background colors for hex ── */
const badgeBg = [
  'bg-gradient-to-br from-yellow-400 to-amber-500',
  'bg-gradient-to-br from-sky-400 to-blue-500',
  'bg-gradient-to-br from-emerald-400 to-green-500',
  'bg-gradient-to-br from-orange-400 to-red-400',
  'bg-gradient-to-br from-pink-400 to-rose-500',
  'bg-gradient-to-br from-indigo-400 to-purple-500',
];

/* ── Floating confetti particles ── */
function ConfettiParticles() {
  const particles = useMemo(() => {
    const colors = ['#fbbf24', '#3b82f6', '#22c55e', '#f97316', '#ec4899', '#8b5cf6'];
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      color: colors[i % colors.length],
      size: Math.random() * 6 + 3,
      duration: Math.random() * 3 + 3,
      delay: Math.random() * 4,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            '--conf-duration': `${p.duration}s`,
            '--conf-delay': `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export default function Outcomes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [unlocked, setUnlocked] = useState<Set<number>>(new Set());
  const [allUnlocked, setAllUnlocked] = useState(false);

  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    if (rect.top < vh * 0.6) {
      const progress = (vh * 0.6 - rect.top) / (rect.height * 0.3);
      const newUnlocked = new Set<number>();
      for (let i = 0; i < outcomes.length; i++) {
        if (progress > i * 0.2) {
          newUnlocked.add(i);
        }
      }
      setUnlocked(newUnlocked);
      if (newUnlocked.size === outcomes.length) {
        setAllUnlocked(true);
      }
    }
  }, []);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    setTimeout(handleScroll, 300);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
      {/* Confetti */}
      {allUnlocked && <ConfettiParticles />}

      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="reveal inline-flex items-center gap-2 glass text-white font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-white/20">
            <Trophy className="w-3.5 h-3.5 text-yellow-300" />
            Achievement Wall
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Real Outcomes,
          </h2>
          <p className="reveal font-display text-2xl lg:text-3xl mb-6">
            <span className="gradient-text-warm">Not Just Certificates</span>
          </p>
          <p className="reveal text-white/60 text-lg max-w-xl mx-auto">
            At the end of every internship, students walk away with tangible proof of their work and growth.
          </p>
        </div>

        {/* Trophy banner image */}
        <div className="reveal rounded-3xl overflow-hidden shadow-2xl mb-16 relative group">
          <img
            src="/images/outcomes-trophy.png"
            alt="Student achievements showcase"
            className="w-full h-48 lg:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <span className="text-white/70 text-sm font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              Scroll to unlock achievements
            </span>
            <span className="text-yellow-300 text-sm font-black">
              {unlocked.size}/{outcomes.length} unlocked
            </span>
          </div>
        </div>

        {/* Achievement badges grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {outcomes.map((o, i) => (
            <div
              key={i}
              className={`outcome-badge stagger-${i + 1} ${unlocked.has(i) ? 'unlocked' : ''} flex flex-col items-center text-center group`}
            >
              {/* Hexagonal badge */}
              <div className="relative mb-4">
                <div className={`hex-badge ${badgeBg[i]} shadow-lg ${
                  unlocked.has(i) ? 'shelf-glow' : 'opacity-40 grayscale'
                }`}>
                  {outcomeIcons[i]}

                  {/* Tooltip */}
                  <div className="badge-tooltip">
                    <div className="bg-white rounded-xl px-4 py-3 shadow-xl min-w-[200px] text-left">
                      <div className="font-black text-slate-800 text-sm mb-1">{o.title}</div>
                      <div className="text-slate-500 text-xs leading-relaxed">{o.desc}</div>
                    </div>
                    <div className="w-3 h-3 bg-white rotate-45 mx-auto -mt-1.5" />
                  </div>
                </div>

                {/* Lock / unlock indicator */}
                {!unlocked.has(i) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-slate-700/80 rounded-full flex items-center justify-center">
                      <span className="text-sm">🔒</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className={`font-display text-sm lg:text-base leading-snug transition-all duration-500 ${
                unlocked.has(i) ? 'text-white' : 'text-white/30'
              }`}>
                {o.title}
              </h3>

              {/* Mini description on mobile */}
              <p className={`text-xs leading-relaxed mt-1 lg:hidden transition-all duration-500 ${
                unlocked.has(i) ? 'text-white/50' : 'text-white/20'
              }`}>
                {o.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Unlock progress bar */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="flex items-center justify-between text-sm font-bold mb-2">
            <span className="text-white/50">Achievement Progress</span>
            <span className="text-yellow-300">{Math.round((unlocked.size / outcomes.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-full transition-all duration-700"
              style={{ width: `${(unlocked.size / outcomes.length) * 100}%` }}
            />
          </div>
          {allUnlocked && (
            <div className="text-center mt-4 pop-in">
              <span className="text-yellow-300 font-black text-sm flex items-center justify-center gap-2">
                <Trophy className="w-4 h-4" />
                🎉 All achievements unlocked!
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
