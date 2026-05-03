import { useEffect, useRef } from 'react';
import { safety } from '../../aiPlayground';
import { ShieldCheck, CheckCircle2, Lock, Eye, Users, HeartHandshake } from 'lucide-react';

const icons = [
  <ShieldCheck className="w-6 h-6 text-emerald-500" />,
  <Eye className="w-6 h-6 text-ai-blue" />,
  <Lock className="w-6 h-6 text-ai-purple" />,
  <Users className="w-6 h-6 text-ai-pink" />,
  <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
  <HeartHandshake className="w-6 h-6 text-amber-500" />
];

export default function SafetySection() {
  const checkmarkRefs = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('checked');
          }
        });
      },
      { threshold: 0.5 }
    );

    checkmarkRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="safety" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#7C3AED 2px, transparent 2px), linear-gradient(90deg, #7C3AED 2px, transparent 2px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left: Content & Image */}
          <div className="reveal-left">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-emerald-200">
              <ShieldCheck className="w-4 h-4" />
              100% Kid Safe
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl text-slate-800 mb-6 leading-tight">
              {safety.title}
            </h2>
            
            <p className="text-ai-purple font-bold text-xl mb-6">
              {safety.subtitle}
            </p>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              {safety.description}
            </p>

            {/* Parent Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" 
                alt="Parent and child using computer safely"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg border-l-4 border-emerald-500">
                  <p className="font-bold text-slate-800 italic text-sm md:text-base">
                    "{safety.parentPromise}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="reveal-right fade-up-stagger">
            <div className="grid sm:grid-cols-2 gap-5">
              {safety.features.map((feature, i) => (
                <div 
                  key={i} 
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-ai-purple/30 hover:shadow-[0_10px_30px_rgba(124,58,237,0.1)] transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                      {icons[i]}
                    </div>
                    
                    {/* Animated Checkmark */}
                    <svg 
                      ref={el => checkmarkRefs.current[i] = el}
                      className="check-appear w-6 h-6 text-emerald-500" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h3 className="font-bold text-slate-800 text-lg mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.desc}
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
