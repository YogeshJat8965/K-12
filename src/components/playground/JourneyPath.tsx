import { useEffect, useRef, useState, useCallback } from 'react';
import { journey } from '../../aiPlayground';
import { Compass, BookOpen, Briefcase, Award, Rocket } from 'lucide-react';

const icons = [
  <Compass className="w-6 h-6 text-white" />,
  <BookOpen className="w-6 h-6 text-white" />,
  <Briefcase className="w-6 h-6 text-white" />,
  <Award className="w-6 h-6 text-white" />
];

export default function JourneyPath() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [fillPercent, setFillPercent] = useState(0);
  const [activeNodes, setActiveNodes] = useState<boolean[]>([false, false, false, false]);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    
    // Spine fill calculation
    const rect = sectionRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    
    // Start filling when top of section is at middle of screen
    // Fully filled when bottom of section is at middle of screen
    const start = rect.top - vh * 0.5;
    const distance = rect.height;
    
    let percent = (start * -1) / distance * 100;
    percent = Math.max(0, Math.min(100, percent));
    setFillPercent(percent);

    // Node activation calculation
    const newActiveNodes = [...activeNodes];
    nodeRefs.current.forEach((node, i) => {
      if (!node) return;
      const nodeRect = node.getBoundingClientRect();
      if (nodeRect.top < vh * 0.6) {
        newActiveNodes[i] = true;
      } else {
        newActiveNodes[i] = false;
      }
    });
    
    // Only update state if changed to prevent excessive re-renders
    if (JSON.stringify(newActiveNodes) !== JSON.stringify(activeNodes)) {
      setActiveNodes(newActiveNodes);
    }
  }, [activeNodes]);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return (
    <section id="journey" ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-ai-dark via-indigo-900 to-[#1E1B4B]">
      {/* Decorative stars */}
      <div className="absolute top-20 left-20 text-yellow-300/30 text-2xl sparkle">✦</div>
      <div className="absolute bottom-40 right-20 text-cyan-300/30 text-xl sparkle-2">✦</div>
      <div className="absolute top-1/2 right-40 text-pink-300/30 text-lg sparkle-3">✦</div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 bg-white/10 text-ai-cyan font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-cyan-400/20 backdrop-blur-sm">
            <Rocket className="w-3.5 h-3.5" />
            The Master Plan
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {journey.title}
          </h2>
          <p className="reveal text-purple-200/80 text-lg max-w-2xl mx-auto">
            {journey.description}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          
          {/* Animated Spine */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1.5 md:-translate-x-1/2 bg-white/10 rounded-full">
            <div 
              className="absolute top-0 left-0 w-full rounded-full transition-all duration-300 ease-out shadow-[0_0_15px_rgba(236,72,153,0.8)]"
              style={{ 
                height: `${fillPercent}%`,
                background: 'linear-gradient(to bottom, #7C3AED, #EC4899, #3B82F6, #06B6D4)'
              }}
            />
            {/* Traveling Rocket */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 text-2xl transition-all duration-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              style={{ top: `calc(${fillPercent}% - 15px)` }}
            >
              🚀
            </div>
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-16 md:space-y-24">
            {journey.stages.map((stage, i) => {
              const isActive = activeNodes[i];
              const isEven = i % 2 === 0;

              return (
                <div key={i} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Content - Mobile: always right. Desktop: alternating left/right */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <div 
                      className={`transition-all duration-700 ease-out transform ${
                        isActive 
                          ? 'opacity-100 translate-y-0 translate-x-0' 
                          : `opacity-0 translate-y-10 ${isEven ? 'md:-translate-x-10' : 'md:translate-x-10'}`
                      }`}
                    >
                      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors shadow-xl">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 bg-white/10 text-white`}>
                          Phase {i + 1}: {stage.tag}
                        </div>
                        <h3 className="font-display text-2xl text-white mb-2">{stage.title}</h3>
                        <p className="text-purple-200/70 text-sm leading-relaxed mb-4">{stage.desc}</p>
                        <div className="inline-flex items-center gap-2 text-ai-cyan text-xs font-bold bg-cyan-900/30 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                          <Clock className="w-3.5 h-3.5" />
                          Time: {stage.time}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div 
                    ref={(el) => { nodeRefs.current[i] = el; }}
                    className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 z-10 border-4 border-[#1E1B4B] ${
                      isActive 
                        ? 'bg-gradient-to-br from-ai-pink to-ai-purple shadow-[0_0_20px_rgba(236,72,153,0.5)] scale-110 neural-pulse' 
                        : 'bg-slate-800 scale-90'
                    }`}
                  >
                    <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50 grayscale'}`}>
                      {icons[i]}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
