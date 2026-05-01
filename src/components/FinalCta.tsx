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
    <div className="p-4 lg:p-12 bg-white">
      <section className="relative rounded-[3rem] overflow-hidden border-2 border-brand-sky/20 shadow-2xl">
        {/* The actual background container */}
        <div className="relative bg-gradient-to-br from-brand-sky/10 via-white to-brand-yellow/5 rounded-[3rem] overflow-hidden">
          {/* ParticleBackground hidden or updated for light theme */}
          {/* <ParticleBackground /> */}

          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-sky/20 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-yellow/10 blur-[100px] pointer-events-none" />

          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle, #0B2447 2px, transparent 2px)',
            backgroundSize: '40px 40px',
          }} />

          <div className="max-w-4xl mx-auto px-6 py-20 lg:py-28 text-center relative z-10">
            <div className="flex items-center justify-center gap-4 mb-10">
              <MascotWithEyes />
              <div className="w-16 h-16 bg-gradient-to-br from-brand-sky to-blue-500 rounded-2xl flex items-center justify-center float shadow-xl">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="reveal inline-flex items-center gap-2 bg-brand-sky/20 text-brand-navy font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full mb-8 border border-brand-sky/10 shadow-sm">
              <Zap className="w-4 h-4 text-brand-sky" />
              Limited Time Offer
            </div>

            <h2 className="reveal font-display text-4xl md:text-6xl text-brand-navy mb-6 leading-tight">
              {finalCta.headline}
            </h2>
            <p className="reveal text-brand-navy/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              {finalCta.subline}
            </p>

            {/* Countdown */}
            <div className="reveal mb-10 bg-white shadow-xl border border-brand-sky/10 rounded-3xl p-8 inline-block">
              <p className="text-brand-navy/60 text-sm font-bold mb-6 uppercase tracking-widest">Early bird enrollment closes in</p>
              <div className="flex items-center justify-center gap-3">
                {[
                  { val: 3, label: 'Days' },
                  { val: 14, label: 'Hrs' },
                  { val: 27, label: 'Min' },
                  { val: 53, label: 'Sec' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="bg-brand-sky/5 rounded-xl px-3 py-2 min-w-[56px] border border-brand-sky/10">
                      <div className="text-brand-navy font-black text-3xl tabular-nums">{String(item.val).padStart(2, '0')}</div>
                    </div>
                    <div className="text-brand-navy/40 text-[10px] font-black mt-2 tracking-widest uppercase">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="reveal flex flex-wrap gap-5 justify-center mb-16">
              <a
                href="#quiz"
                className="bg-gradient-to-r from-brand-sky to-blue-500 text-white font-black text-xl px-12 py-5 rounded-2xl shadow-xl shadow-brand-sky/20 flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <Sparkles className="w-6 h-6" />
                Take the Free Quiz
              </a>
              <a
                href="#tracks"
                className="bg-white border-2 border-brand-sky/20 text-brand-navy font-bold text-xl px-12 py-5 rounded-2xl flex items-center gap-3 hover:bg-brand-sky/5 transition-colors"
              >
                <Rocket className="w-6 h-6" />
                Explore Internships
              </a>
            </div>

            {/* Contact */}
            <div className="reveal flex flex-wrap justify-center gap-8 bg-brand-sky/5 inline-flex mx-auto px-10 py-5 rounded-full border border-brand-sky/10">
              <a
                href={`mailto:${finalCta.email}`}
                className="flex items-center gap-2 text-brand-navy/70 font-bold hover:text-brand-navy transition-colors"
              >
                <Mail className="w-5 h-5 text-brand-sky" />
                {finalCta.email}
              </a>
              <span className="text-brand-navy/10">|</span>
              <span className="flex items-center gap-2 text-brand-navy/70 font-bold hover:text-brand-navy transition-colors cursor-pointer">
                <Globe className="w-5 h-5 text-brand-sky" />
                {finalCta.website}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
