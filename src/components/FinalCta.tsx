import { useState, useRef, useCallback, useEffect } from 'react';
import { finalCta } from '../virtualInternship';
import { Mail, Globe, Sparkles, Rocket, Star, Zap } from 'lucide-react';
import { MascotWithEyes } from './KidElements';

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
          <div className="glass rounded-xl px-3 py-2 min-w-[48px] border border-white/20 count-pulse shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <div className="text-white font-black text-2xl tabular-nums drop-shadow-md">{pad(item.val)}</div>
          </div>
          <div className="text-white/80 text-[11px] font-bold mt-2 tracking-wider uppercase">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Interactive Particle Background ── */
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number, y: number, r: number, dx: number, dy: number, op: number }[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 800;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 30 : 80;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2 + 0.5,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          op: Math.random() * 0.5 + 0.1
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        // Move
        p.x += p.dx;
        p.y += p.dy;
        
        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - dist/500})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + (dist < 100 ? 1 : 0), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.op + (dist < 100 ? 0.3 : 0)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
}

export default function FinalCta() {
  return (
    <div className="p-4 lg:p-8 bg-slate-950">
      <section className="relative rounded-[3rem] overflow-hidden animated-gradient-border shadow-2xl p-[3px]">
        {/* The actual background container */}
        <div className="relative bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700 rounded-[calc(3rem-3px)] overflow-hidden">
          <ParticleBackground />

          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-sky-300/20 blur-[100px] blob pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-pink-400/15 blur-[100px] blob blob-delay-2 pointer-events-none" />

          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '40px 40px',
          }} />

          <Star className="absolute top-20 left-1/4 w-5 h-5 text-yellow-300/60 sparkle pointer-events-none" />
          <Star className="absolute top-1/3 right-1/4 w-4 h-4 text-yellow-200/60 sparkle-2 pointer-events-none" />
          <Star className="absolute bottom-1/4 left-1/3 w-6 h-6 text-yellow-300/50 sparkle-3 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 py-24 text-center relative z-10">
            <div className="flex items-center justify-center gap-4 mb-8">
              <MascotWithEyes />
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center float shadow-2xl border border-white/20">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="reveal inline-flex items-center gap-2 glass text-white font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-8 border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <Zap className="w-4 h-4 text-yellow-300" />
              Limited Time Offer
            </div>

            <h2 className="reveal font-display text-4xl md:text-6xl text-white mb-6 leading-tight drop-shadow-lg">
              {finalCta.headline}
            </h2>
            <p className="reveal text-white/90 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
              {finalCta.subline}
            </p>

            {/* Countdown */}
            <div className="reveal mb-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-6 inline-block shadow-2xl">
              <p className="text-white/80 text-sm font-bold mb-4 uppercase tracking-widest">Early bird enrollment closes in</p>
              <CountdownTimer />
            </div>

            {/* Quiz note card */}
            <div className="reveal glass rounded-2xl px-6 py-4 inline-flex items-center justify-center mx-auto mb-12 border border-white/20 shadow-xl">
              <p className="text-white font-bold text-base flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                {finalCta.quizNote}
              </p>
            </div>

            {/* CTAs with magnetic effect */}
            <div className="reveal flex flex-wrap gap-5 justify-center mb-16">
              <MagneticButton
                href="#quiz"
                className="pulse-ring bg-gradient-to-r from-orange-400 to-yellow-400 text-slate-900 font-black text-xl px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(251,146,60,0.4)] flex items-center gap-3 border border-yellow-300/50"
              >
                <Sparkles className="w-6 h-6" />
                Take the Free Quiz
              </MagneticButton>
              <MagneticButton
                href="#tracks"
                className="glass border-2 border-white/50 text-white font-bold text-xl px-10 py-5 rounded-2xl flex items-center gap-3 hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Rocket className="w-6 h-6" />
                Explore Internships
              </MagneticButton>
            </div>

            {/* Contact */}
            <div className="reveal flex flex-wrap justify-center gap-8 bg-black/10 inline-flex mx-auto px-8 py-4 rounded-full border border-white/5">
              <a
                href={`mailto:${finalCta.email}`}
                className="flex items-center gap-2 text-white/80 font-bold hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                {finalCta.email}
              </a>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-2 text-white/80 font-bold hover:text-white transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
                {finalCta.website}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
