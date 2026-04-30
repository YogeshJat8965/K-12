import { useState, useEffect, useRef } from 'react';
import { tracks } from '../virtualInternship';
import { Search, ChevronRight, Compass, ArrowRight } from 'lucide-react';

/* ── Mapping images to tracks based on index ── */
const trackImages = [
  '/images/track-ai.png',
  '/images/track-business.png',
  '/images/track-creative.png',
  '/images/track-space.png',
  '/images/track-climate.png',
  '/images/track-wellness.png',
  '/images/track-media.png',
  '/images/track-leadership.png',
];

export default function Tracks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ROTATION_TIME = 6000; // 6 seconds per track
  const progressInterval = useRef<number>();

  // Auto-rotate logic
  useEffect(() => {
    if (isPaused) {
      clearInterval(progressInterval.current);
      return;
    }

    const intervalTime = 50; // update progress every 50ms
    const step = (intervalTime / ROTATION_TIME) * 100;

    progressInterval.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIdx((current) => (current + 1) % tracks.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(progressInterval.current);
  }, [activeIdx, isPaused]);

  // When manually selecting a track, reset progress
  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
  };

  const activeTrack = tracks[activeIdx];

  return (
    <section id="tracks" className="py-20 lg:py-28 overflow-hidden bg-slate-900 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-40 mix-blend-color-dodge pointer-events-none" style={{
        background: `radial-gradient(circle at 30% 50%, var(--tw-gradient-from) 0%, transparent 50%)`,
        // We pick up the color from the active track class indirectly, but for simple BG we can just use a static soft glow
      }} />
      <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br ${activeTrack.color} opacity-10 transition-colors duration-1000 blur-3xl`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 glass text-white font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-white/20">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            Explore the Universe of Careers
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            8 Future-Ready Domains
          </h2>
          <p className="reveal text-white/60 text-lg max-w-2xl mx-auto">
            Choose a world to explore. Each track is designed to give students a taste of real-world problem solving.
          </p>
        </div>

        {/* ── Main Carousel Layout ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch h-[800px] lg:h-[600px]">

          {/* LEFT: Active Track Hero (60%) */}
          <div 
            className="lg:w-3/5 h-1/2 lg:h-full relative rounded-[2rem] overflow-hidden shadow-2xl group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* The Image */}
            <img 
              key={activeIdx} // key forces re-render for animation
              src={trackImages[activeIdx]} 
              alt={activeTrack.title}
              className="w-full h-full object-cover transition-transform duration-10000 group-hover:scale-105"
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent transition-colors duration-500`} />
            
            {/* Content overlay */}
            <div key={`content-${activeIdx}`} className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end track-hero-enter-active">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{activeTrack.icon}</span>
                <span className="text-white/80 font-bold text-xs uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {activeTrack.tagline}
                </span>
              </div>
              
              <h3 className="font-display text-3xl lg:text-5xl text-white mb-4 leading-tight">
                {activeTrack.title}
              </h3>
              
              <p className="text-white/70 text-base lg:text-lg max-w-xl mb-8 leading-relaxed">
                {activeTrack.desc}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#quiz" 
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${activeTrack.color} text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg`}
                >
                  <Search className="w-4 h-4" />
                  Is this track for me?
                </a>
              </div>
            </div>

            {/* Auto-rotate progress bar */}
            <div className="track-progress">
              <div 
                className="track-progress-fill" 
                style={{ width: `${progress}%` }} 
              />
            </div>
          </div>

          {/* RIGHT: Thumbnail Selector (40%) */}
          <div 
            className="lg:w-2/5 h-1/2 lg:h-full flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {tracks.map((track, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`track-thumb text-left w-full p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border ${
                    isActive 
                      ? 'bg-white/10 border-white/20 backdrop-blur-md' 
                      : 'bg-transparent border-transparent hover:bg-white/5'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-all ${
                    isActive ? `bg-gradient-to-br ${track.color} shadow-lg` : 'bg-white/5 grayscale opacity-50'
                  }`}>
                    {track.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-bold truncate transition-colors ${isActive ? 'text-white' : 'text-white/60'}`}>
                      {track.title}
                    </h4>
                    {isActive && (
                      <p className="text-white/40 text-xs font-medium uppercase tracking-wider mt-1 truncate">
                        {track.tagline}
                      </p>
                    )}
                  </div>
                  
                  {isActive && (
                    <ChevronRight className="w-5 h-5 text-white/50 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

        </div>

        {/* Bottom Marquee Strip (kept from original but restyled to match dark theme) */}
        <div className="mt-16 reveal border-y border-white/10 py-6 overflow-hidden flex whitespace-nowrap opacity-60">
           <div className="animate-marquee flex gap-16 items-center min-w-full">
            {[...tracks, ...tracks].map((track, i) => (
              <div key={i} className="flex items-center gap-3 text-white/50">
                <span className="text-xl grayscale opacity-50">{track.icon}</span>
                <span className="font-display tracking-wide uppercase text-sm">{track.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
