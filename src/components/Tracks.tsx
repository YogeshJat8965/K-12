import { useState, useRef, useCallback } from 'react';
import { tracks } from '../virtualInternship';
import { Cpu, Briefcase, Palette, Rocket, Leaf, Heart, Megaphone, Shield, ChevronDown } from 'lucide-react';

const trackIcons = [
  <Cpu className="w-8 h-8 text-white" />,
  <Briefcase className="w-8 h-8 text-white" />,
  <Palette className="w-8 h-8 text-white" />,
  <Rocket className="w-8 h-8 text-white" />,
  <Leaf className="w-8 h-8 text-white" />,
  <Heart className="w-8 h-8 text-white" />,
  <Megaphone className="w-8 h-8 text-white" />,
  <Shield className="w-8 h-8 text-white" />,
];

const safeColors: Record<string, { card: string; badge: string; text: string; iconBg: string }> = {
  'from-blue-500 to-purple-600':  { card: 'from-sky-500 to-blue-700',    badge: 'bg-white/20 text-white', text: 'text-sky-600', iconBg: 'bg-white/20' },
  'from-green-500 to-teal-600':   { card: 'from-green-500 to-teal-600', badge: 'bg-white/20 text-white', text: 'text-green-600', iconBg: 'bg-white/20' },
  'from-pink-500 to-rose-600':    { card: 'from-pink-500 to-rose-600',  badge: 'bg-white/20 text-white', text: 'text-pink-600', iconBg: 'bg-white/20' },
  'from-indigo-500 to-blue-700':  { card: 'from-sky-500 to-blue-700',   badge: 'bg-white/20 text-white', text: 'text-sky-600', iconBg: 'bg-white/20' },
  'from-green-400 to-emerald-600':{ card: 'from-green-400 to-emerald-600', badge: 'bg-white/20 text-white', text: 'text-emerald-600', iconBg: 'bg-white/20' },
  'from-amber-400 to-orange-500': { card: 'from-amber-400 to-orange-500', badge: 'bg-white/20 text-white', text: 'text-orange-600', iconBg: 'bg-white/20' },
  'from-cyan-500 to-blue-600':    { card: 'from-cyan-500 to-blue-600', badge: 'bg-white/20 text-white', text: 'text-cyan-600', iconBg: 'bg-white/20' },
  'from-violet-500 to-purple-700':{ card: 'from-blue-600 to-sky-700',   badge: 'bg-white/20 text-white', text: 'text-sky-600', iconBg: 'bg-white/20' },
};

/* ── 3D Tilt card wrapper ── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (el) el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

/* ── Ripple effect on click ── */
function RippleWrapper({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const idRef = useRef(0);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = idRef.current++;
    setRipples((prev) => [...prev.slice(-3), { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
    onClick?.();
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

export default function Tracks() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="tracks" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-orange-100 text-orange-700 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Rocket className="w-3.5 h-3.5" />
            Career Tracks
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl text-slate-800 mb-4 flex items-center gap-3 justify-center flex-wrap">
            8 Exciting Career Worlds
          </h2>
          <p className="reveal text-slate-500 text-lg max-w-xl mx-auto">
            Hover to tilt, click to explore. Each track is a portal into a real career domain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tracks.map((t, i) => {
            const c = safeColors[t.color] || safeColors['from-blue-500 to-purple-600'];
            const isActive = active === i;
            return (
              <TiltCard key={i} className={`reveal delay-${(i % 4 + 1) * 100}`}>
                <RippleWrapper
                  className={`rounded-3xl cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl`}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <div className={`bg-gradient-to-br ${c.card} p-6 min-h-[220px] flex flex-col justify-between relative overflow-hidden rounded-3xl`}>
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }} />

                    <div className="relative z-10">
                      <div className={`${c.badge} text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 inline-block border border-white/20`}>
                        {t.tagline}
                      </div>
                      <div className={`w-14 h-14 ${c.iconBg} rounded-2xl flex items-center justify-center mb-3`}>
                        {trackIcons[i]}
                      </div>
                      <h3 className="font-display text-white text-lg leading-snug">{t.title}</h3>
                    </div>

                    <div className="relative z-10 flex items-center gap-1 mt-3">
                      <span className="text-white/70 text-xs font-bold">
                        {isActive ? 'Show less' : 'Learn more'}
                      </span>
                      <ChevronDown className={`w-3.5 h-3.5 text-white/70 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  <div className={`bg-white transition-all duration-300 overflow-hidden rounded-b-3xl ${
                    isActive ? 'max-h-40 py-4 px-5' : 'max-h-0'
                  }`}>
                    <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
                    <a
                      href="#quiz"
                      className={`inline-block mt-3 ${c.text} font-black text-xs hover:underline`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Take quiz for this track →
                    </a>
                  </div>
                </RippleWrapper>
              </TiltCard>
            );
          })}
        </div>

        {/* Marquee strip */}
        <div className="reveal mt-14 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 py-4">
          <div className="marquee-inner flex gap-8 whitespace-nowrap">
            {[...tracks, ...tracks].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-slate-600 font-bold text-sm">
                <span>{t.title}</span>
                <span className="text-slate-300">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
