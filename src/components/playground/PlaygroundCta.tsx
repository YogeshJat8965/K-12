import { finalCta } from '../../aiPlayground';
import { Sparkles, Play, Rocket, Mail, Globe } from 'lucide-react';
import { AiBotMascot } from './AiBotMascot';
import { useEffect, useRef } from 'react';

/* ── Interactive Particle Background ── */
function CtaParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; r: number; dx: number; dy: number; color: string }[] = [];
    let animId: number;

    const colors = ['#7C3AED', '#EC4899', '#06B6D4'];

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 600;
      init();
    };

    const init = () => {
      particles = [];
      const count = window.innerWidth < 768 ? 30 : 60;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 1,
          dy: (Math.random() - 0.5) * 1 - 0.5, // slightly drifting up
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Add glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
      });
      animId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />;
}

export default function PlaygroundCta() {
  return (
    <section id="cta" className="relative bg-gradient-to-br from-ai-dark via-[#31115F] to-indigo-950 py-24 lg:py-32 overflow-hidden">
      <CtaParticles />

      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ai-purple/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ai-cyan/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Inner scan line */}
          <div className="absolute inset-0 scan-line opacity-20 pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Mascot & Sparkles */}
            <div className="reveal-left flex justify-center lg:justify-start relative">
              <AiBotMascot size="lg" />
            </div>

            {/* Right: Content & Buttons */}
            <div className="reveal-right text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 text-cyan-300 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-cyan-400/20">
                <Sparkles className="w-4 h-4" />
                Start Your Journey
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                {finalCta.headline}
              </h2>
              
              <p className="text-purple-200/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                {finalCta.subline}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-12">
                <button className="bg-gradient-to-r from-ai-cyan to-ai-blue text-white font-black px-8 py-4.5 rounded-2xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 group">
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  {finalCta.ctas[0].label.replace('▶ ', '')}
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4.5 rounded-2xl transition-colors flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  {finalCta.ctas[1].label.replace('▶ ', '')}
                </button>
                <button className="bg-transparent hover:bg-white/5 border-2 border-dashed border-purple-400/50 hover:border-purple-400 text-purple-200 font-bold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 sm:w-full lg:w-auto">
                  <Rocket className="w-5 h-5" />
                  {finalCta.ctas[2].label.replace('▶ ', '')}
                </button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start text-sm font-bold text-purple-200/60 pt-8 border-t border-white/10">
                <a href={`mailto:${finalCta.email}`} className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> {finalCta.email}
                </a>
                <span className="hidden sm:block text-white/20">•</span>
                <a href={`https://${finalCta.website}`} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <Globe className="w-4 h-4" /> {finalCta.website}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
