import React, { useState } from 'react';
import { ArrowRight, Sparkles, Compass, Briefcase } from 'lucide-react';
import SkillDnaQuizModal from './SkillDnaQuizModal';

export default function StudentsCTA() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  return (
    <section className="w-full font-poppins relative overflow-hidden">
      <div className="w-full relative z-10">

        {/* Full-width CTA Banner */}
        <div className="relative w-full overflow-hidden p-8 py-16 md:py-20 shadow-2xl">

          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2E1065] via-[#4C1D95] to-[#7C3AED] z-0" />

          {/* Decorative Orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EC4899]/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#06B6D4]/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none z-0" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">

            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white mb-8 tracking-tight">
              Ready to begin?
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-4xl mx-auto">

              {/* Button 1 */}
              <button 
                onClick={(e) => { e.preventDefault(); setIsQuizOpen(true); }}
                className="group w-full md:w-1/3 relative flex items-center justify-center gap-3 px-6 py-4 lg:py-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
              >
                {/* <Sparkles className="w-5 h-5 text-[#F59E0B]" /> */}
                <span className="text-white font-semibold text-[15px] lg:text-[16px] tracking-wide">Take the Skill DNA Test</span>
                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/50 transition-colors duration-300 pointer-events-none" />
              </button>

              {/* Button 2 */}
              <button 
                onClick={() => window.location.href = '/skill-studio'}
                className="group w-full md:w-1/3 relative flex items-center justify-center gap-3 px-6 py-4 lg:py-5 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] hover:from-[#F472B6] hover:to-[#A78BFA] shadow-lg rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(236,72,153,0.3)]"
              >
                {/* <Compass className="w-5 h-5 text-white" /> */}
                <span className="text-white font-bold text-[15px] lg:text-[16px] tracking-wide">Explore Studios</span>
              </button>

              {/* Button 3 */}
              <button 
                onClick={() => window.location.href = '/virtual-internship'}
                className="group w-full md:w-1/3 relative flex items-center justify-center gap-3 px-6 py-4 lg:py-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
              >
                {/* <Briefcase className="w-5 h-5 text-[#06B6D4]" /> */}
                <span className="text-white font-semibold text-[15px] lg:text-[16px] tracking-wide">Apply for Internship</span>
                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/50 transition-colors duration-300 pointer-events-none" />
              </button>

            </div>

          </div>
        </div>
      </div>
      <SkillDnaQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  );
}
