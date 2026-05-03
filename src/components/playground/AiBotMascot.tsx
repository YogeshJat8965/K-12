import { useRef, useCallback, useEffect } from 'react';

/* ── Purple AI Bot Mascot with Mouse-Following Eyes ── */
export function AiBotMascot({ className = '', size = 'lg' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
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
      const maxMoveX = rect.width * 0.2;
      const maxMoveY = rect.height * 0.25;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const ratio = Math.min(dist / 300, 1);
      const px = Math.cos(angle) * maxMoveX * ratio;
      const py = Math.sin(angle) * maxMoveY * ratio;
      const pupil = ref.querySelector('.ai-pupil') as HTMLElement;
      if (pupil) {
        pupil.style.transform = `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`;
      }
    };
    move(leftRef.current);
    move(rightRef.current);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const sizes = {
    sm: { container: 'w-20 h-20', eye: 'w-5 h-6', pupil: 'w-3 h-3', antenna: 'h-6 -top-6', antennaOrb: 'w-3 h-3 -top-2', ear: 'w-3 h-10', smile: 'w-6 h-3 bottom-4', gap: 'gap-3' },
    md: { container: 'w-48 h-48', eye: 'w-10 h-12', pupil: 'w-6 h-6', antenna: 'h-8 -top-8', antennaOrb: 'w-4 h-4 -top-3', ear: 'w-4 h-14', smile: 'w-10 h-5 bottom-8', gap: 'gap-5' },
    lg: { container: 'w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80', eye: 'w-14 h-16 sm:w-16 sm:h-20', pupil: 'w-8 h-8 sm:w-10 sm:h-10', antenna: 'h-10 -top-10', antennaOrb: 'w-6 h-6 -top-4', ear: 'w-4 sm:w-6 h-16 sm:h-20', smile: 'w-12 h-6 sm:w-16 sm:h-8 bottom-10 sm:bottom-14', gap: 'gap-6 sm:gap-10' },
  };
  const s = sizes[size];

  return (
    <div className={`relative flex items-center justify-center w-full h-full ${className}`}>
      <div className={`relative ${s.container} bg-gradient-to-br from-ai-purple to-ai-purple-deep rounded-[3rem] sm:rounded-[4rem] shadow-[0_20px_50px_rgba(124,58,237,0.4)] border-[8px] sm:border-[12px] border-purple-200/30 flex items-center justify-center hover:-translate-y-2 transition-transform duration-500 will-change-transform`}>

        {/* Antenna */}
        <div className={`absolute ${s.antenna} left-1/2 -translate-x-1/2 w-2 bg-purple-300/60 rounded-full flex justify-center`}>
          <div className={`absolute ${s.antennaOrb} bg-ai-cyan rounded-full antenna-pulse`} />
        </div>

        {/* Ear pieces */}
        <div className={`absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 ${s.ear} bg-purple-400/40 rounded-l-2xl border-4 border-r-0 border-purple-300/30`} />
        <div className={`absolute -right-5 sm:-right-7 top-1/2 -translate-y-1/2 ${s.ear} bg-purple-400/40 rounded-r-2xl border-4 border-l-0 border-purple-300/30`} />

        {/* Visor / Face */}
        <div className="relative w-[85%] h-[82%] bg-gradient-to-b from-slate-900 to-ai-dark rounded-[2.5rem] sm:rounded-[3rem] shadow-inner border-4 sm:border-8 border-indigo-900/80 overflow-hidden flex flex-col items-center">

          {/* Glass reflection */}
          <div className="absolute top-2 sm:top-4 left-4 right-4 h-1/3 bg-white/5 rounded-t-[2rem] rounded-b-[4rem] blur-[2px] transform -rotate-12 scale-110" />

          {/* Eyes */}
          <div className={`absolute top-[30%] sm:top-1/3 w-full flex justify-center ${s.gap}`}>
            {/* Left Eye */}
            <div ref={leftRef} className={`${s.eye} bg-ai-cyan/20 rounded-[2rem] shadow-[0_0_20px_rgba(6,182,212,0.4)] overflow-hidden relative eye-glow border border-cyan-400/30`}>
              <div className={`ai-pupil absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${s.pupil} bg-ai-cyan rounded-full transition-transform duration-[50ms] ease-out flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.6)]`}>
                <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full shadow-[0_0_5px_white]" />
                <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 w-1.5 h-1.5 bg-white/60 rounded-full" />
              </div>
            </div>

            {/* Right Eye */}
            <div ref={rightRef} className={`${s.eye} bg-ai-cyan/20 rounded-[2rem] shadow-[0_0_20px_rgba(6,182,212,0.4)] overflow-hidden relative eye-glow border border-cyan-400/30`}>
              <div className={`ai-pupil absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${s.pupil} bg-ai-cyan rounded-full transition-transform duration-[50ms] ease-out flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.6)]`}>
                <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full shadow-[0_0_5px_white]" />
                <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 w-1.5 h-1.5 bg-white/60 rounded-full" />
              </div>
            </div>
          </div>

          {/* Digital Smile */}
          <div className={`absolute ${s.smile} border-b-[5px] sm:border-b-[6px] border-ai-pink rounded-b-full shadow-[0_0_15px_rgba(236,72,153,0.4)]`} />
        </div>

        {/* Decorative sparkles */}
        <div className="absolute -top-4 -right-4 w-6 h-6 text-ai-cyan sparkle text-lg">✦</div>
        <div className="absolute -bottom-2 -left-4 w-5 h-5 text-ai-pink sparkle-2 text-sm">✦</div>
        <div className="absolute top-[60%] -right-6 w-4 h-4 text-ai-purple sparkle-3 text-xs">✦</div>
      </div>
    </div>
  );
}

/* ── Small inline bot eyes ── */
export function MiniBotEyes({ className = '' }: { className?: string }) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const move = (ref: HTMLDivElement | null) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
      const ratio = Math.min(Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2) / 250, 1);
      const pupil = ref.querySelector('.mini-ai-pupil') as HTMLElement;
      if (pupil) pupil.style.transform = `translate(${Math.cos(angle) * 3 * ratio}px, ${Math.sin(angle) * 3 * ratio}px)`;
    };
    move(leftRef.current);
    move(rightRef.current);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <div ref={leftRef} className="w-8 h-8 bg-gradient-to-br from-ai-purple to-ai-purple-deep rounded-full overflow-hidden shadow-md border-2 border-purple-300/30 flex items-center justify-center">
        <div className="mini-ai-pupil w-3 h-3 bg-ai-cyan rounded-full transition-transform duration-100 shadow-[0_0_6px_rgba(6,182,212,0.6)]">
          <div className="w-1 h-1 bg-white rounded-full mt-0.5 ml-0.5" />
        </div>
      </div>
      <div ref={rightRef} className="w-8 h-8 bg-gradient-to-br from-ai-purple to-ai-purple-deep rounded-full overflow-hidden shadow-md border-2 border-purple-300/30 flex items-center justify-center">
        <div className="mini-ai-pupil w-3 h-3 bg-ai-cyan rounded-full transition-transform duration-100 shadow-[0_0_6px_rgba(6,182,212,0.6)]">
          <div className="w-1 h-1 bg-white rounded-full mt-0.5 ml-0.5" />
        </div>
      </div>
    </div>
  );
}
