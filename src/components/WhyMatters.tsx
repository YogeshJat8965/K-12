import { whyMatters } from '../virtualInternship';
import { X, Check, ArrowRight, AlertTriangle, TrendingUp, Link2 } from 'lucide-react';

export default function WhyMatters() {
  return (
    <section className="py-24 bg-sky-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-orange-100 text-orange-700 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            The Problem We Solve
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl text-slate-800 mb-4 flex items-center gap-3 justify-center flex-wrap">
            {whyMatters.title}
          </h2>
          <p className="reveal text-slate-500 text-lg max-w-2xl mx-auto">
            {whyMatters.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Current Gap */}
          <div className="reveal delay-100 card-hover bg-white rounded-3xl p-8 shadow-lg border-2 border-red-100 hover:border-red-300 transition-all duration-300">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <X className="w-7 h-7 text-red-500" />
            </div>
            <h3 className="font-display text-2xl text-slate-800 mb-5">The Current Gap</h3>
            <ul className="space-y-4">
              {whyMatters.currentGap.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-slate-600 font-semibold text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bridge */}
          <div className="reveal delay-200 card-hover bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 shadow-xl text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }} />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5 float">
                <Link2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl mb-4">The Bridge</h3>
              <p className="text-white/90 font-bold text-base leading-relaxed mb-6">
                {whyMatters.bridge}
              </p>
              <div className="flex gap-2 flex-wrap justify-center">
                <span className="glass text-white text-xs font-bold px-3 py-1.5 rounded-full">Practical</span>
                <span className="glass text-white text-xs font-bold px-3 py-1.5 rounded-full">Structured</span>
                <span className="glass text-white text-xs font-bold px-3 py-1.5 rounded-full">Outcome-Driven</span>
              </div>
              <div className="mt-6">
                <ArrowRight className="w-6 h-6 text-white/60 mx-auto float" />
              </div>
            </div>
          </div>

          {/* Shift in Education */}
          <div className="reveal delay-300 card-hover bg-white rounded-3xl p-8 shadow-lg border-2 border-green-100 hover:border-green-300 transition-all duration-300">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-green-500" />
            </div>
            <h3 className="font-display text-2xl text-slate-800 mb-5">The Shift in Education</h3>
            <ul className="space-y-4">
              {whyMatters.shiftInEducation.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-slate-600 font-semibold text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
