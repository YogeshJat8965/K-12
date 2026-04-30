import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { hero } from '../virtualInternship';
import { Star, Sparkles, Rocket, ChevronDown } from 'lucide-react';

const words = ['Doctors', 'Engineers', 'Scientists', 'Designers', 'Entrepreneurs', 'Leaders'];

/* ── Mouse-following eyes ── */
function FollowingEyes() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const move = (ref: HTMLDivElement | null) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const angle = Math.atan2(dy, dx);
      const maxMove = rect.width * 0.22;
      const dist = Math.min(Math.sqrt(dx * dx + dy * dy), maxMove * 4);
      const ratio = Math.min(dist / 300, 1);
      const px = Math.cos(angle) * maxMove * ratio;
      const py = Math.sin(angle) * maxMove * ratio;
      const pupil = ref.querySelector('.pupil') as HTMLElement;
      if (pupil) pupil.style.transform = `translate(${px}px, ${py}px)`;
    };
    move(leftRef.current);
    move(rightRef.current);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-200 to-orange-200 shadow-2xl border-4 border-yellow-400/50">
        <div className="absolute bottom-16 left-8 w-16 h-10 bg-pink-300/40 rounded-full blur-md" />
        <div className="absolute bottom-16 right-8 w-16 h-10 bg-pink-300/40 rounded-full blur-md" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-24 h-12 border-b-[6px] border-orange-400 rounded-b-full" />

        <div ref={leftRef} className="absolute top-16 left-[22%] w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-inner border-2 border-slate-200 overflow-hidden">
          <div className="pupil absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-full transition-transform duration-100 ease-out">
            <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-white/60 rounded-full" />
          </div>
        </div>

        <div ref={rightRef} className="absolute top-16 right-[22%] w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-inner border-2 border-slate-200 overflow-hidden">
          <div className="pupil absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-full transition-transform duration-100 ease-out">
            <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-white/60 rounded-full" />
          </div>
        </div>

        <div className="absolute top-8 left-[22%] w-20 sm:w-24 h-2 bg-orange-500/60 rounded-full -rotate-6" />
        <div className="absolute top-8 right-[22%] w-20 sm:w-24 h-2 bg-orange-500/60 rounded-full rotate-6" />

        <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 sparkle" />
        <Star className="absolute -bottom-2 -left-4 w-6 h-6 text-orange-400 sparkle-2" />
        <Star className="absolute top-1/2 -right-6 w-5 h-5 text-yellow-500 sparkle-3" />
      </div>
    </div>
  );
}

/* ── Particles ── */
function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 6 + 6,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.3 + 0.15,
    })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white particle"
          style={{
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const target = words[wordIdx];
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
      setWordIdx((i) => (i + 1) % words.length);
    }
  }, [displayed, deleting, wordIdx]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-500 via-blue-600 to-blue-800">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full bg-sky-400/20 blur-[100px] blob" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-blue-300/15 blur-[120px] blob blob-delay-2" />
        <Particles />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        <Sparkles className="absolute top-24 left-[30%] w-6 h-6 text-yellow-300/50 sparkle" />
        <Star className="absolute top-[35%] right-[25%] w-5 h-5 text-yellow-200/40 sparkle-2" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 glass text-white font-bold text-sm px-5 py-2.5 rounded-full mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                {hero.grades}
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.1] mb-3">
                Give Your Child a<br />
                <span className="shimmer-text">Head Start</span><br />
                Beyond Academics
              </h1>

              <div className="font-display text-2xl sm:text-3xl text-white/90 mb-6 mt-3 h-10 flex items-center gap-2">
                <span>Train Future</span>
                <span className="text-yellow-300 min-w-[180px]">
                  {displayed}
                  <span className="cursor text-yellow-300">|</span>
                </span>
              </div>

              <p className="text-blue-100/90 text-lg leading-relaxed mb-8 max-w-lg">
                Skillzza Virtual Internships are structured, mentor-led, project-based experiences — giving students a real edge before college even begins.
              </p>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {hero.badges.map((b, i) => (
                  <div key={i} className="glass text-white text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/25 transition-colors duration-200">
                    <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {b.replace('✓ ', '')}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#quiz" className="group relative bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2.5 overflow-hidden">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                  <Sparkles className="w-5 h-5 relative" />
                  <span className="relative">Take the Quiz</span>
                  <span className="relative text-yellow-200 text-xs font-bold ml-1">+100 XP</span>
                </a>
                <a href="#tracks" className="glass text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-white/25 transition-all duration-300 flex items-center gap-2.5">
                  <Rocket className="w-5 h-5" />
                  Explore Internships
                </a>
                <a href="#for-parents" className="text-white/70 font-bold text-base px-6 py-4 rounded-2xl hover:text-white transition-colors duration-200 flex items-center gap-2">
                  Book Consultation
                </a>
              </div>
            </div>

            <div className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <FollowingEyes />
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/50 text-xs font-bold">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-white/50" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 50C180 90 360 10 540 50C720 90 900 10 1080 50C1260 90 1350 30 1440 50V100H0V50Z" fill="white" />
          </svg>
        </div>
      </section>
  );
}
