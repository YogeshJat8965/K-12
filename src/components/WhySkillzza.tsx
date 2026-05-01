import { useEffect, useRef, useCallback } from 'react';
import { whySkillzza } from '../virtualInternship';
import { Sparkles, XCircle, CheckCircle2 } from 'lucide-react';

export default function WhySkillzza() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = useCallback(() => {
    rowRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        // Add a slight staggered delay based on index for the rows to slide in
        setTimeout(() => {
          ref.classList.add('visible');
        }, i * 150);
      }
    });
  }, []);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    setTimeout(handleScroll, 300);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  // Derive "Others" content from WhySkillzza to show contrast
  const comparisonData = [
    { others: "Repurposed adult courses", skillzza: whySkillzza[0].title },
    { others: "Passive video watching", skillzza: whySkillzza[1].title },
    { others: "Theoretical academic concepts", skillzza: whySkillzza[2].title },
    { others: "Automated multiple-choice grading", skillzza: whySkillzza[3].title },
    { others: "Generic completion certificates", skillzza: whySkillzza[4].title },
    { others: "Unmonitored public forums", skillzza: whySkillzza[5].title },
  ];

  return (
    <section id="why-skillzza" ref={sectionRef} className="py-20 lg:py-32 bg-slate-950 overflow-hidden relative">
      {/* Dark theme background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-slate-800 text-sky-400 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-slate-700">
            <Sparkles className="w-3.5 h-3.5" />
            The Skillzza Difference
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Why We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Different</span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl overflow-hidden relative">

          {/* Table Header */}
          <div className="grid grid-cols-2 text-center border-b border-slate-800 bg-slate-900/50 backdrop-blur-md">
            <div className="py-6 px-4">
              <span className="font-display text-xl lg:text-2xl text-slate-500">Other Programs</span>
            </div>
            <div className="py-6 px-4 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-blue-600/10" />
              <span className="font-display text-xl lg:text-2xl text-white relative z-10 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">Skillzza Nova</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-800">
            {comparisonData.map((row, i) => (
              <div
                key={i}
                ref={(el) => { rowRefs.current[i] = el; }}
                className="table-row-item grid grid-cols-2 relative group compare-row"
              >
                {/* OTHERS COLUMN */}
                <div className="py-6 px-4 lg:px-8 flex items-center gap-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  <XCircle className="w-6 h-6 text-slate-500 flex-shrink-0 hidden sm:block" />
                  <span className="text-slate-400 font-medium text-sm lg:text-base">
                    {row.others}
                  </span>
                </div>

                {/* SKILLZZA COLUMN */}
                <div className="compare-glow py-6 px-4 lg:px-8 relative bg-gradient-to-r from-sky-900/10 to-transparent">
                  <div className="relative z-10 flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-sky-400 flex-shrink-0 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                    <span className="text-white font-bold text-sm lg:text-lg">
                      {row.skillzza}
                    </span>
                  </div>
                  {/* Hover subtle background highlight */}
                  <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Social Proof / Trust Banner */}
        <div className="mt-16 reveal">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }} />

            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h3 className="font-display text-2xl lg:text-3xl text-white mb-3">
                "It feels like stepping into the real world."
              </h3>
              <p className="text-blue-100 font-medium">
                - A Grade 9 Student after completing the AI Track
              </p>
            </div>

            <div className="relative z-10 flex -space-x-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-14 h-14 rounded-full border-4 border-indigo-600 bg-indigo-200 overflow-hidden shadow-lg">
                  <img
                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e2e8f0`}
                    alt="Student avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-14 h-14 rounded-full border-4 border-indigo-600 bg-yellow-400 flex items-center justify-center font-bold text-slate-800 shadow-lg text-sm">
                +2k
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
