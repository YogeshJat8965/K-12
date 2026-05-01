import { useState, useRef } from 'react';
import { whatIs } from '../virtualInternship';
import { Target, Pin, Clock, Users } from 'lucide-react';
import traditionalLearningImg from '../assets/traditional learning.jpg';
import skillzzaWayImg from '../assets/skillzza Way.jpg';

const pillarIcons = [
  <Target className="w-7 h-7 text-sky-600" />,
  <Pin className="w-7 h-7 text-orange-600" />,
  <Clock className="w-7 h-7 text-green-600" />,
  <Users className="w-7 h-7 text-pink-600" />,
];

const pillarColors = [
  { bg: 'bg-sky-50', border: 'border-sky-200 hover:border-sky-400', icon: 'bg-sky-100' },
  { bg: 'bg-orange-50', border: 'border-orange-200 hover:border-orange-400', icon: 'bg-orange-100' },
  { bg: 'bg-green-50', border: 'border-green-200 hover:border-green-400', icon: 'bg-green-100' },
  { bg: 'bg-pink-50', border: 'border-pink-200 hover:border-pink-400', icon: 'bg-pink-100' },
];

export default function WhatIs() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function handleMove(clientX: number) {
    if (!dragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }

  return (
    <section id="what-is" className="py-24 bg-gradient-to-b from-white to-sky-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive comparison slider */}
          <div className="reveal-left">
            <div
              ref={containerRef}
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none h-[440px]"
              onMouseDown={() => { dragging.current = true; }}
              onMouseUp={() => { dragging.current = false; }}
              onMouseLeave={() => { dragging.current = false; }}
              onMouseMove={(e) => handleMove(e.clientX)}
              onTouchStart={() => { dragging.current = true; }}
              onTouchEnd={() => { dragging.current = false; }}
              onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            >
              {/* "Before" side - traditional learning */}
              <div className="absolute inset-0">
                <img
                  src={traditionalLearningImg}
                  alt="Traditional learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/40" />
                <div className="absolute top-4 left-4 bg-red-500/90 text-white font-black text-xs px-3 py-1.5 rounded-full">
                  Traditional Learning
                </div>
              </div>

              {/* "After" side - Skillzza */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
              >
                <img
                  src={skillzzaWayImg}
                  alt="Skillzza learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-sky-900/20" />
                <div className="absolute top-4 right-4 bg-green-500/90 text-white font-black text-xs px-3 py-1.5 rounded-full">
                  Skillzza Way
                </div>
              </div>

              {/* Slider handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>

              {/* Drag hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass text-white text-xs font-bold px-3 py-1.5 rounded-full pointer-events-none">
                Drag to compare
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal-right">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Target className="w-3.5 h-3.5" />
              About the Program
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-slate-800 mb-6 leading-tight flex items-center gap-3 flex-wrap">
              {whatIs.title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              {whatIs.description}
            </p>
            <p className="text-brand-sky font-bold text-base leading-relaxed mb-10 bg-brand-sky/10 rounded-2xl p-5 border-l-4 border-brand-sky flex items-start gap-3">
              <Pin className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-sky" />
              <span className="text-brand-navy/90">{whatIs.note}</span>
            </p>

            <div className="grid grid-cols-2 gap-4">
              {whatIs.pillars.map((p, i) => (
                <div
                  key={i}
                  className={`reveal delay-${(i + 1) * 100} card-hover bg-brand-sky/10 rounded-2xl p-6 shadow-sm border-2 border-brand-sky/30 hover:border-brand-sky transition-all duration-300 group`}
                >
                  <div className="font-black text-brand-navy text-lg mb-2">{p.title}</div>
                  <div className="text-brand-navy/80 text-sm font-medium leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
