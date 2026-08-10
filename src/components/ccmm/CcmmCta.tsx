import React from 'react';
import { ArrowRight, FileCheck } from 'lucide-react';

export default function CcmmCta() {
  return (
    <>
      <style>{`
        @keyframes runningGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .cta-running-gradient {
          background: linear-gradient(
            -45deg, 
            #1E3A8A, /* dark blue */
            #5B45FF, /* brand purple */
            #3B82F6, /* bright blue */
            #0F172A  /* slate */
          );
          background-size: 300% 300%;
          animation: runningGradient 12s ease infinite;
        }
      `}</style>

      <section className="w-full font-poppins cta-running-gradient relative overflow-hidden py-8 lg:py-10 px-6 md:px-12 lg:px-20 border-t-4 border-white/10">

        {/* Subtle noise/texture overlay for a premium feel */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center text-center">

          {/* Top Tag */}
          <span className="text-white/80 font-bold text-[11px] uppercase tracking-[0.2em] mb-2 block">
            Begin your school's journey
          </span>

          {/* Main Heading */}
          <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-extrabold text-white leading-tight mb-3 tracking-tight">
            The cognitive age isn't coming. It's here.
          </h2>

          {/* Description */}
          <p className="text-white/90 font-medium text-[14px] md:text-[15px] max-w-2xl mx-auto leading-relaxed mb-6">
            The schools that act today will define what learning looks like for the next generation. Take the first measured, confident step - tailored to your institution.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 items-center justify-center w-full">
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-[#5B45FF] font-bold text-[13px] px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 hover:shadow-md transition-all duration-300 whitespace-nowrap"
            >
              Request a CCMM Discovery Call
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                const banner = document.getElementById('ccmm-banner-section');
                if (banner) {
                  banner.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => banner.click(), 600);
                }
              }}
              className="bg-transparent text-white border-2 border-white/40 font-bold text-[13px] px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white transition-all duration-300 whitespace-nowrap"
            >
              <FileCheck className="w-4 h-4" />
              Get a free audit
            </button>
          </div>

        </div>

        {/* Footer Text Lines */}
        {/* <div className="max-w-[1000px] mx-auto mt-8 pt-4 border-t border-white/15 relative z-10 text-center flex flex-col items-center gap-1.5">
          <p className="text-white font-bold text-[13px] tracking-wide">
            Skillzza Learning Technologies
          </p>
          <p className="text-white/70 font-semibold text-[10px] md:text-[11px] tracking-[0.1em] uppercase">
            Energising young brains <span className="mx-1.5 text-white/30">•</span> Empowering educators <span className="mx-1.5 text-white/30">•</span> Engineering the future
          </p>
          <p className="text-white/60 font-medium text-[11px] mt-0.5">
            CCMM - The Cognitive Computing Maturity Model. A Skillzza Nova Signature Programme.
          </p>
        </div> */}

      </section>
    </>
  );
}
