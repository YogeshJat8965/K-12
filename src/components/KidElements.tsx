import { useRef, useCallback, useEffect } from 'react';

/* ── Small mouse-following eyes (for embedding in sections) ── */
export function MiniEyes({ size = 80, className = '' }: { size?: number; className?: string }) {
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
      const maxMove = rect.width * 0.2;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const ratio = Math.min(dist / 250, 1);
      const px = Math.cos(angle) * maxMove * ratio;
      const py = Math.sin(angle) * maxMove * ratio;
      const pupil = ref.querySelector('.mini-pupil') as HTMLElement;
      if (pupil) pupil.style.transform = `translate(${px}px, ${py}px)`;
    };
    move(leftRef.current);
    move(rightRef.current);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const eyeW = size * 0.35;
  const pupilW = size * 0.18;
  const gap = size * 0.08;

  return (
    <div className={`inline-flex items-center gap-${gap > 4 ? 2 : 1} ${className}`}>
      <div
        ref={leftRef}
        className="bg-white rounded-full shadow-inner border border-slate-200 overflow-hidden"
        style={{ width: eyeW, height: eyeW }}
      >
        <div
          className="mini-pupil bg-slate-800 rounded-full transition-transform duration-100 ease-out"
          style={{
            width: pupilW,
            height: pupilW,
            margin: 'auto',
            marginTop: (eyeW - pupilW) / 2,
            position: 'relative',
          }}
        >
          <div className="absolute bg-white rounded-full" style={{ width: pupilW * 0.3, height: pupilW * 0.3, top: '15%', left: '15%' }} />
        </div>
      </div>
      <div
        ref={rightRef}
        className="bg-white rounded-full shadow-inner border border-slate-200 overflow-hidden"
        style={{ width: eyeW, height: eyeW }}
      >
        <div
          className="mini-pupil bg-slate-800 rounded-full transition-transform duration-100 ease-out"
          style={{
            width: pupilW,
            height: pupilW,
            margin: 'auto',
            marginTop: (eyeW - pupilW) / 2,
            position: 'relative',
          }}
        >
          <div className="absolute bg-white rounded-full" style={{ width: pupilW * 0.3, height: pupilW * 0.3, top: '15%', left: '15%' }} />
        </div>
      </div>
    </div>
  );
}

/* ── Wobble character that bounces on hover ── */
export function WobbleCharacter({ emoji, size = 64, className = '' }: { emoji: string; size?: number; className?: string }) {
  return (
    <div
      className={`inline-block wiggle-hover cursor-pointer select-none ${className}`}
      style={{ fontSize: size, lineHeight: 1 }}
    >
      {emoji}
    </div>
  );
}

/* ── Bouncing mascot with eyes ── */
export function MascotWithEyes({ className = '' }: { className?: string }) {
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
      const maxMove = 4;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const ratio = Math.min(dist / 200, 1);
      const px = Math.cos(angle) * maxMove * ratio;
      const py = Math.sin(angle) * maxMove * ratio;
      const pupil = ref.querySelector('.mascot-pupil') as HTMLElement;
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
    <div className={`relative float ${className}`}>
      {/* Body */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 shadow-lg border-2 border-sky-300/50 flex items-center justify-center gap-1.5 relative">
        {/* Left eye */}
        <div ref={leftRef} className="w-6 h-6 bg-white rounded-full overflow-hidden shadow-inner">
          <div className="mascot-pupil w-3 h-3 bg-slate-800 rounded-full transition-transform duration-100 ease-out mx-auto mt-1.5 relative">
            <div className="absolute w-1 h-1 bg-white rounded-full top-0.5 left-0.5" />
          </div>
        </div>
        {/* Right eye */}
        <div ref={rightRef} className="w-6 h-6 bg-white rounded-full overflow-hidden shadow-inner">
          <div className="mascot-pupil w-3 h-3 bg-slate-800 rounded-full transition-transform duration-100 ease-out mx-auto mt-1.5 relative">
            <div className="absolute w-1 h-1 bg-white rounded-full top-0.5 left-0.5" />
          </div>
        </div>
        {/* Smile */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-3 border-b-2 border-white/70 rounded-b-full" />
      </div>
      {/* Little feet */}
      <div className="flex justify-center gap-4 -mt-1">
        <div className="w-4 h-3 bg-sky-600 rounded-b-full" />
        <div className="w-4 h-3 bg-sky-600 rounded-b-full" />
      </div>
    </div>
  );
}

/* ── Rocket with flame that flickers ── */
export function RocketMascot({ className = '' }: { className?: string }) {
  return (
    <div className={`relative float-slow ${className}`}>
      <div className="text-5xl">🚀</div>
      {/* Flame */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-3 h-4 bg-orange-400 rounded-b-full fire-flicker" />
        <div className="w-2 h-3 bg-yellow-400 rounded-b-full fire-flicker -mt-1" />
      </div>
    </div>
  );
}

/* ── Star burst decoration ── */
export function StarBurst({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <div className="relative">
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-40" />
        <div className="absolute inset-0 w-4 h-4 bg-yellow-400 rounded-full" />
      </div>
    </div>
  );
}
