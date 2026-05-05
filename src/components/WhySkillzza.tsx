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
    <section id="why-skillzza" ref={sectionRef} className="py-12 lg:py-16 bg-slate-50 overflow-hidden relative">
      {/* Light theme background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-white blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-sky/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="reveal inline-flex items-center gap-2 bg-white text-brand-sky font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-brand-navy/10">
            <Sparkles className="w-3.5 h-3.5" />
            The Skillzza Difference
          </div>
          <h2 className="reveal mb-6">
            Why Skillzza Virtual Internships
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-[2rem] border border-brand-navy/10 shadow-2xl overflow-hidden relative">

          {/* Table Header */}
          <div className="grid grid-cols-2 text-center border-b border-brand-navy/5 bg-brand-navy/5 backdrop-blur-md">
            <div className="py-6 px-4">
              <span className="font-bold text-xl lg:text-2xl text-brand-navy/50">Other Programs</span>
            </div>
            <div className="py-6 px-4 relative">
              <div className="absolute inset-0 bg-brand-sky/10" />
              <span className="font-extrabold text-2xl lg:text-3xl relative z-10">
                <span className="text-[#023463]">Skillzza</span>{' '}
                <span className="bg-gradient-to-r from-[#8947B3] to-[#B26EE3] bg-clip-text text-transparent">Nova</span>
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-brand-navy/5">
            {comparisonData.map((row, i) => (
              <div
                key={i}
                ref={(el) => { rowRefs.current[i] = el; }}
                className="table-row-item grid grid-cols-2 relative group compare-row"
              >
                {/* OTHERS COLUMN */}
                <div className="py-6 px-4 lg:px-8 flex items-center gap-4 group-hover:opacity-100 transition-opacity">
                  <XCircle className="w-6 h-6 text-brand-navy/30 flex-shrink-0 hidden sm:block" />
                  <span className="text-slate-600 font-semibold text-sm lg:text-base">
                    {row.others}
                  </span>
                </div>

                {/* SKILLZZA COLUMN */}
                <div className="compare-glow py-6 px-4 lg:px-8 relative bg-brand-sky/5">
                  <div className="relative z-10 flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-sky flex-shrink-0" />
                    <span className="text-brand-navy font-extrabold text-sm lg:text-lg">
                      {row.skillzza}
                    </span>
                  </div>
                  {/* Hover subtle background highlight */}
                  <div className="absolute inset-0 bg-brand-sky/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
