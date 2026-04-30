import { whatGain } from '../virtualInternship';
import { Target, FolderOpen, Wrench, Award, MessageSquare, Sparkles } from 'lucide-react';
import { MascotWithEyes } from './KidElements';

const gainIcons = [
  <Target className="w-8 h-8 text-sky-600" />,
  <FolderOpen className="w-8 h-8 text-orange-600" />,
  <Wrench className="w-8 h-8 text-green-600" />,
  <Award className="w-8 h-8 text-yellow-600" />,
  <MessageSquare className="w-8 h-8 text-pink-600" />,
];

const cardColors = [
  { border: 'border-sky-200 hover:border-sky-400', num: 'text-sky-500 bg-sky-50', icon: 'bg-sky-100' },
  { border: 'border-orange-200 hover:border-orange-400', num: 'text-orange-500 bg-orange-50', icon: 'bg-orange-100' },
  { border: 'border-green-200 hover:border-green-400', num: 'text-green-500 bg-green-50', icon: 'bg-green-100' },
  { border: 'border-yellow-200 hover:border-yellow-400', num: 'text-yellow-600 bg-yellow-50', icon: 'bg-yellow-100' },
  { border: 'border-pink-200 hover:border-pink-400', num: 'text-pink-500 bg-pink-50', icon: 'bg-pink-100' },
];

export default function WhatGain() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-green-100 text-green-700 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Award className="w-3.5 h-3.5" />
            What Students Gain
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl text-slate-800 mb-4 flex items-center gap-3 justify-center flex-wrap">
            5 Life-Changing Outcomes
          </h2>
          <p className="reveal text-slate-500 text-lg max-w-xl mx-auto">
            Every internship is built to deliver real, tangible value for your child's future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatGain.map((item, i) => (
            <div
              key={i}
              className={`reveal delay-${(i % 4 + 1) * 100} card-hover bg-white border-2 ${cardColors[i].border} rounded-3xl p-8 transition-all duration-300 group`}
            >
              <div className={`inline-block ${cardColors[i].num} font-black text-xs px-3 py-1 rounded-full mb-4 tracking-wider`}>
                {item.num}
              </div>

              <div className={`w-14 h-14 ${cardColors[i].icon} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {gainIcons[i]}
              </div>

              <h3 className="font-display text-xl text-slate-800 mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Bonus CTA card */}
          <div className="reveal delay-500 card-hover bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }} />
            <div className="relative z-10">
              <div className="mb-4">
                <MascotWithEyes />
              </div>
              <h3 className="font-display text-xl mb-3">Ready to Start?</h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Help your child discover their perfect track with our 3-minute quiz.
              </p>
            </div>
            <a
              href="#quiz"
              className="relative z-10 mt-6 bg-white text-sky-600 font-black text-sm px-6 py-3 rounded-2xl text-center hover:bg-yellow-300 hover:text-slate-800 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Take the Free Quiz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
