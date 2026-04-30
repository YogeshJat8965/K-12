import { useState, useRef, useCallback, useEffect } from 'react';
import { finalCta } from '../virtualInternship';
import { Mail, Globe, Sparkles, Rocket, Star, Zap } from 'lucide-react';
import { MascotWithEyes, MiniEyes } from './KidElements';

/* ── Magnetic button ── */
function MagneticButton({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.05)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = btnRef.current;
    if (el) el.style.transform = 'translate(0, 0) scale(1)';
  }, []);

  return (
    <a
      ref={btnRef}
      href={href}
      className={`magnetic-btn ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}

/* ── Countdown timer ── */
function CountdownTimer() {
  const [time, setTime] = useState({ d: 3, h: 14, m: 27, s: 53 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { d, h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        if (d < 0) { d = 0; h = 0; m = 0; s = 0; }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      {[
        { val: time.d, label: 'Days' },
        { val: time.h, label: 'Hrs' },
        { val: time.m, label: 'Min' },
        { val: time.s, label: 'Sec' },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="glass rounded-xl px-3 py-2 min-w-[48px] border border-white/20 count-pulse">
            <div className="text-white font-black text-xl tabular-nums">{pad(item.val)}</div>
          </div>
          <div className="text-white/50 text-[10px] font-bold mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function FinalCta() {
  return (
    <section className="py-24 bg-gradient-to-br from-sky-500 via-blue-600 to-blue-700 overflow-hidden relative">
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-sky-300/20 blur-3xl blob" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-400/15 blur-3xl blob blob-delay-2" />

      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <Star className="absolute top-20 left-1/4 w-5 h-5 text-yellow-300/50 sparkle" />
      <Star className="absolute top-1/3 right-1/4 w-4 h-4 text-yellow-200/50 sparkle-2" />
      <Star className="absolute bottom-1/4 left-1/3 w-6 h-6 text-yellow-300/40 sparkle-3" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <MascotWithEyes />
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center float shadow-xl">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <MiniEyes size={60} />
        </div>

        <div className="reveal inline-flex items-center gap-2 glass text-white font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-white/30">
          <Zap className="w-3.5 h-3.5" />
          Limited Time Offer
        </div>

        <h2 className="reveal font-display text-4xl md:text-6xl text-white mb-4 leading-tight">
          {finalCta.headline}
        </h2>
        <p className="reveal text-white/80 text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
          {finalCta.subline}
        </p>

        {/* Countdown */}
        <div className="reveal mb-4">
          <p className="text-white/60 text-sm font-bold mb-3">Early bird enrollment closes in:</p>
          <CountdownTimer />
        </div>

        {/* Quiz note card */}
        <div className="reveal glass rounded-2xl px-6 py-4 inline-block mb-10 border border-white/20">
          <p className="text-white font-bold text-base flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            {finalCta.quizNote}
          </p>
        </div>

        {/* CTAs with magnetic effect */}
        <div className="reveal flex flex-wrap gap-4 justify-center mb-14">
          <MagneticButton
            href="#quiz"
            className="pulse-ring bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-black text-lg px-10 py-4 rounded-2xl shadow-xl shadow-orange-500/25 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Take the Free Quiz
          </MagneticButton>
          <MagneticButton
            href="#tracks"
            className="glass border-2 border-white/50 text-white font-bold text-lg px-10 py-4 rounded-2xl flex items-center gap-2"
          >
            <Rocket className="w-5 h-5" />
            Explore Internships
          </MagneticButton>
          <MagneticButton
            href="#for-parents"
            className="bg-white text-sky-700 font-bold text-lg px-10 py-4 rounded-2xl flex items-center gap-2"
          >
            Book Consultation
          </MagneticButton>
        </div>

        {/* Contact */}
        <div className="reveal flex flex-wrap justify-center gap-6">
          <a
            href={`mailto:${finalCta.email}`}
            className="flex items-center gap-2 text-white/80 font-bold hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            {finalCta.email}
          </a>
          <span className="text-white/40">|</span>
          <span className="flex items-center gap-2 text-white/80 font-bold">
            <Globe className="w-4 h-4" />
            {finalCta.website}
          </span>
        </div>
      </div>
    </section>
  );
}
