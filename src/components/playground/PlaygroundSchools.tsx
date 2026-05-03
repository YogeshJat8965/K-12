import { forSchools } from '../../aiPlayground';
import { School, ArrowRight } from 'lucide-react';

const cardImages = [
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=500',
];

export default function PlaygroundSchools() {
  return (
    <section id="for-schools" className="py-24 bg-[#F0F9FF] relative overflow-hidden">
      {/* Decorative SVG pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306B6D4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-blue-100/80 text-blue-600 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-blue-200">
            <School className="w-4 h-4" />
            Classroom Ready
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-slate-800 mb-6">
            {forSchools.title}
          </h2>
          <p className="reveal text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mb-4">
            {forSchools.subtitle}
          </p>
          <p className="reveal text-ai-cyan font-bold bg-cyan-50 inline-block px-5 py-2.5 rounded-xl border border-cyan-100">
            {forSchools.useCase}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {forSchools.features.map((feature, i) => (
            <div 
              key={i} 
              className="reveal bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={cardImages[i]} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <span className="text-3xl filter drop-shadow-md">{feature.icon}</span>
                  <h3 className="font-display text-2xl text-white drop-shadow-md">{feature.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA / Trust strip */}
        <div className="reveal trust-badge-shine bg-white rounded-3xl p-8 border border-blue-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4 z-10">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
              <School className="w-8 h-8 text-ai-blue" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-xl">Deploy in your school today</h4>
              <p className="text-slate-500">Zero technical setup required. Full admin control.</p>
            </div>
          </div>
          <button className="z-10 group bg-slate-800 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-3 transition-colors shadow-lg">
            Request School Access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
