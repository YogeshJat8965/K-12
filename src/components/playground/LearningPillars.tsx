import { useState } from 'react';
import { learningPillars } from '../../aiPlayground';
import { BrainCircuit, Cpu } from 'lucide-react';

export default function LearningPillars() {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const colors = [
    'from-ai-purple to-violet-500',
    'from-ai-pink to-rose-400',
    'from-ai-blue to-cyan-500',
    'from-teal-400 to-emerald-500',
    'from-orange-400 to-amber-500',
    'from-indigo-500 to-ai-purple'
  ];

  return (
    <section id="learning" className="py-24 bg-[#EFF6FF] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <div className="reveal inline-flex items-center gap-2 bg-blue-100 text-ai-blue font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <BrainCircuit className="w-3.5 h-3.5" />
            Skill Development
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl text-slate-800 mb-6 max-w-3xl mx-auto leading-tight">
            {learningPillars.title}
          </h2>
          <p className="reveal text-slate-600 text-lg">
            {learningPillars.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left: Orbit Visualization */}
          <div className="reveal-left w-full lg:w-1/2 flex justify-center relative min-h-[400px] sm:min-h-[500px]">
            {/* Center Brain */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-ai-blue to-ai-purple rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)] z-20 neural-pulse">
              <Cpu className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
            </div>

            {/* Orbit Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-blue-200/50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full border border-purple-200/50 border-dashed" />

            {/* Orbiting Icons */}
            {learningPillars.pillars.map((pillar, i) => {
              const angle = (i * 360) / learningPillars.pillars.length;
              const radius = i % 2 === 0 ? 190 : 120; // Alternate between outer and inner ring (sm sizes)
              const smRadius = i % 2 === 0 ? 140 : 90;
              
              // We'll use CSS to position them fixed around the circle for a clean look, 
              // rather than animating the whole rotation which can be dizzying
              const rad = (angle * Math.PI) / 180;
              const top = `calc(50% + ${Math.sin(rad) * radius}px)`;
              const left = `calc(50% + ${Math.cos(rad) * radius}px)`;
              
              return (
                <div 
                  key={i}
                  className={`absolute w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-xl sm:text-2xl cursor-pointer transition-all duration-300 z-30
                    ${activePillar === i ? 'scale-125 ring-4 ring-blue-300' : 'hover:scale-110 hover:shadow-xl'}`}
                  style={{ 
                    top: `calc(50% + ${Math.sin(rad) * (typeof window !== 'undefined' && window.innerWidth < 640 ? smRadius : radius)}px)`, 
                    left: `calc(50% + ${Math.cos(rad) * (typeof window !== 'undefined' && window.innerWidth < 640 ? smRadius : radius)}px)`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${i * 0.2}s`
                  }}
                  onMouseEnter={() => setActivePillar(i)}
                  onClick={() => setActivePillar(i)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[i]} opacity-10 rounded-2xl`} />
                  {pillar.icon}
                </div>
              );
            })}
          </div>

          {/* Right: Pillar Cards Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid sm:grid-cols-2 gap-4">
              {learningPillars.pillars.map((pillar, i) => (
                <div 
                  key={i}
                  className={`reveal bg-white rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer
                    ${activePillar === i 
                      ? 'border-blue-400 shadow-[0_10px_30px_rgba(59,130,246,0.15)] scale-[1.02]' 
                      : 'border-transparent shadow-sm hover:shadow-md hover:border-blue-100'}`}
                  onMouseEnter={() => setActivePillar(i)}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors[i]} flex items-center justify-center text-white shadow-md`}>
                      {pillar.icon}
                    </div>
                    <h3 className="font-bold text-slate-800 leading-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className={`text-sm text-slate-600 leading-relaxed overflow-hidden transition-all duration-300
                    ${activePillar === i || activePillar === null ? 'opacity-100 max-h-40' : 'opacity-60 max-h-20'}`}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
