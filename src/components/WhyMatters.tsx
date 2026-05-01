import { useEffect, useRef, useState, useCallback } from 'react';
import { whyMatters } from '../virtualInternship';
import { X, Check, AlertTriangle, TrendingUp } from 'lucide-react';

export default function WhyMatters() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [struckItems, setStruckItems] = useState<Set<number>>(new Set());
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [panelsVisible, setPanelsVisible] = useState(false);
  const [bridgeVisible, setBridgeVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    // Panels slide in
    if (rect.top < vh * 0.7) {
      setPanelsVisible(true);
    }

    // Strike items as user scrolls deeper
    const progress = Math.max(0, (vh * 0.5 - rect.top) / (rect.height * 0.4));
    const gapCount = whyMatters.currentGap.length;
    const newStruck = new Set<number>();
    for (let i = 0; i < gapCount; i++) {
      if (progress > (i + 1) / (gapCount + 1)) {
        newStruck.add(i);
      }
    }
    setStruckItems(newStruck);

    // Check items with slight delay
    const shiftCount = whyMatters.shiftInEducation.length;
    const newChecked = new Set<number>();
    for (let i = 0; i < shiftCount; i++) {
      if (progress > (i + 1.5) / (shiftCount + 2)) {
        newChecked.add(i);
      }
    }
    setCheckedItems(newChecked);

    // Bridge appears
    if (progress > 0.6) {
      setBridgeVisible(true);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    setTimeout(handleScroll, 300);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 overflow-hidden relative">
      {/* Background: the split illustration */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/why-matters-split.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/95 to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-orange-100 text-orange-700 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            The Problem We Solve
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-slate-800 mb-4">
            {whyMatters.title}
          </h2>
          <p className="reveal text-slate-500 text-lg max-w-2xl mx-auto">
            {whyMatters.subtitle}
          </p>
        </div>

        {/* Split screen panels */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 mb-12 items-stretch">

          {/* LEFT: The Problem */}
          <div className={`split-left ${panelsVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl lg:rounded-r-none p-8 lg:p-10 border-2 border-red-100 h-full relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-100/30 rounded-full blur-[60px] pointer-events-none" />

              <div className="flex items-center gap-3 mb-8">
                {/* <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div> */}
                <div>
                  <h3 className="font-display text-2xl text-slate-800">The Current Gap</h3>
                  <p className="text-red-400 text-xs font-bold uppercase tracking-wider">What's broken today</p>
                </div>
              </div>

              <div className="space-y-5">
                {whyMatters.currentGap.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className={`mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      struckItems.has(i) ? 'bg-red-400 rotate-12 scale-110' : 'bg-red-100'
                    }`}>
                      <X className={`w-4 h-4 transition-colors duration-300 ${struckItems.has(i) ? 'text-white' : 'text-red-400'}`} />
                    </div>
                    <span className="text-slate-700 font-semibold text-base leading-relaxed transition-all duration-500">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Visual indicator */}
              <div className="mt-8 flex items-center gap-2 text-red-300 text-sm font-bold">
                <div className="w-full h-1 bg-red-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-300 to-red-400 rounded-full transition-all duration-700"
                    style={{ width: `${(struckItems.size / whyMatters.currentGap.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: The Solution */}
          <div className={`split-right ${panelsVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl lg:rounded-l-none p-8 lg:p-10 border-2 border-green-100 h-full relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-100/30 rounded-full blur-[60px] pointer-events-none" />

              <div className="flex items-center gap-3 mb-8">
                {/* <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div> */}
                <div>
                  <h3 className="font-display text-2xl text-slate-800">The Shift in Education</h3>
                  <p className="text-green-500 text-xs font-bold uppercase tracking-wider">What's changing now</p>
                </div>
              </div>

              <div className="space-y-5">
                {whyMatters.shiftInEducation.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className={`check-appear mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      checkedItems.has(i) ? 'checked bg-green-500' : 'bg-green-100'
                    }`}>
                      <Check className={`w-4 h-4 transition-colors duration-300 ${checkedItems.has(i) ? 'text-white' : 'text-green-400'}`} />
                    </div>
                    <span className={`text-slate-700 font-semibold text-base leading-relaxed transition-all duration-500 ${
                      checkedItems.has(i) ? 'text-slate-800' : 'text-slate-400'
                    }`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Visual indicator */}
              <div className="mt-8 flex items-center gap-2 text-green-300 text-sm font-bold">
                <div className="w-full h-1 bg-green-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-300 to-emerald-400 rounded-full transition-all duration-700"
                    style={{ width: `${(checkedItems.size / whyMatters.shiftInEducation.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bridge Banner */}
        <div className={`transition-all duration-700 ${bridgeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-brand-sky/10 border-2 border-brand-sky/20 rounded-3xl p-6 lg:p-4 text-center max-w-4xl mx-auto shadow-sm">
            <p className="text-xl md:text-2xl text-brand-navy font-semibold leading-relaxed max-w-2xl mx-auto">
              {whyMatters.bridge}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
