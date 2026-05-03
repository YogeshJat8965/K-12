import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { hero } from '../../aiPlayground';
import { Sparkles, Rocket, Play, Shield, Bot, Code2, Users } from 'lucide-react';
import { AiBotMascot } from './AiBotMascot';

const agentNames = ['Story Weaver', 'Code Companion', 'Space Explorer', 'Debate Buddy', 'Math Mentor', 'Career Coach', 'Science Explorer', 'Wellness Guide'];

/* ── Neural Network Canvas ── */
function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; r: number; dx: number; dy: number; op: number; color: string }[] = [];
    let animId: number;
    let mouse = { x: -1000, y: -1000 };

    const colors = [
      'rgba(124, 58, 237, 0.7)',  // purple
      'rgba(236, 72, 153, 0.6)',  // pink
      'rgba(6, 182, 212, 0.6)',   // cyan
      'rgba(59, 130, 246, 0.5)',  // blue
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 900;
      init();
    };

    const init = () => {
      particles = [];
      const count = window.innerWidth < 768 ? 40 : 90;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2.5 + 0.8,
          dx: (Math.random() - 0.5) * 0.4,
          dy: (Math.random() - 0.5) * 0.4,
          op: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        // Move
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.3 - dist / 500})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + (dist < 150 ? 1.5 : 0), 0, Math.PI * 2);
        ctx.fillStyle = dist < 150 ? 'rgba(6, 182, 212, 0.8)' : p.color;
        ctx.fill();

        // Outer glow for close particles
        if (dist < 100) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r + 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(6, 182, 212, ${0.15 - dist / 700})`;
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouse);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
}

/* ── Floating Code Snippets ── */
function FloatingCode() {
  const snippets = useMemo(() => [
    { text: 'agent.create()', left: '8%', top: '15%', delay: 0 },
    { text: 'prompt.refine()', left: '85%', top: '25%', delay: 1.5 },
    { text: 'ai.think()', left: '12%', top: '70%', delay: 3 },
    { text: 'model.learn()', left: '78%', top: '75%', delay: 2 },
    { text: '<Agent />', left: '90%', top: '55%', delay: 4 },
  ], []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {snippets.map((s, i) => (
        <div
          key={i}
          className="absolute font-mono text-xs sm:text-sm text-purple-300/30 badge-float hidden lg:block"
          style={{ left: s.left, top: s.top, animationDelay: `${s.delay}s` }}
        >
          {s.text}
        </div>
      ))}
    </div>
  );
}

export default function PlaygroundHero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  /* Typewriter effect cycling agent names */
  useEffect(() => {
    const target = agentNames[wordIdx];
    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % agentNames.length);
    }
  }, [displayed, deleting, wordIdx]);

  const badgeIcons = [<Code2 className="w-3.5 h-3.5" />, <Bot className="w-3.5 h-3.5" />, <Shield className="w-3.5 h-3.5" />, <Users className="w-3.5 h-3.5" />];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-[#FDF4FF] to-blue-50">
      {/* Background is solid #A392FF now, removed mesh animations for cleaner look */}

      {/* Floating Code */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[{ text: 'agent.create()', left: '8%', top: '15%', delay: 0 }, { text: 'prompt.refine()', left: '85%', top: '25%', delay: 1.5 }, { text: 'ai.think()', left: '12%', top: '70%', delay: 3 }, { text: 'model.learn()', left: '78%', top: '75%', delay: 2 }, { text: '<Agent />', left: '90%', top: '55%', delay: 4 }].map((s, i) => (
          <div key={i} className="absolute font-mono text-xs sm:text-base font-black text-black/80 badge-float hidden lg:block drop-shadow-md" style={{ left: s.left, top: s.top, animationDelay: `${s.delay}s` }}>
            {s.text}
          </div>
        ))}
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #7C3AED 1.5px, transparent 1.5px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 text-ai-purple font-black tracking-widest uppercase text-xs px-5 py-2.5 rounded-full mb-8 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ai-purple opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ai-purple" />
              </span>
              {hero.tag}
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] text-slate-800 leading-[1.1] mb-3">
              Build Your First<br />
              <span className="gradient-text-rainbow-ai">AI Agent</span><br />
              in Minutes.
            </h1>

            {/* Typewriter */}
            <div className="font-display text-2xl sm:text-3xl text-slate-500 mb-6 mt-3 h-10 flex items-center gap-2">
              <span>Meet your</span>
              <span className="text-ai-purple min-w-[200px]">
                {displayed}
                <span className="cursor text-ai-purple">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-lg font-medium">
              {hero.subline}
            </p>

            {/* Badge Pills */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {hero.badges.map((b, i) => (
                <div key={i} className={`bg-white/80 backdrop-blur-md border border-purple-100 text-slate-700 text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:shadow-md transition-all duration-200 badge-float`} style={{ animationDelay: `${i * 0.3}s` }}>
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-ai-purple">
                    {badgeIcons[i]}
                  </div>
                  {b}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#agents" className="group relative bg-gradient-to-r from-ai-purple to-ai-magenta text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-purple-200 hover:shadow-purple-300 hover:scale-105 transition-all duration-300 flex items-center gap-2.5 overflow-hidden">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                <Sparkles className="w-5 h-5 relative" />
                <span className="relative">Try the Playground</span>
              </a>
              <a href="#how-it-works" className="bg-white text-slate-700 border border-purple-100 shadow-sm font-bold text-base px-8 py-4 rounded-2xl hover:bg-purple-50 transition-all duration-300 flex items-center gap-2.5 hover:shadow-md">
                <Play className="w-5 h-5 text-ai-purple" />
                Watch 2-Min Demo
              </a>
              <a href="#for-schools" className="text-slate-500 font-bold text-base px-6 py-4 rounded-2xl hover:text-ai-purple transition-colors duration-200 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                For Schools
              </a>
            </div>
          </div>

          {/* Right: AI Bot Mascot */}
          <div className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <AiBotMascot />
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50C180 90 360 10 540 50C720 90 900 10 1080 50C1260 90 1350 30 1440 50V100H0V50Z" fill="#FAFAFE" />
        </svg>
      </div>
    </section>
  );
}
