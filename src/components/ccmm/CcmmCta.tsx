import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

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

      <section className="w-full font-poppins cta-running-gradient relative overflow-hidden py-8 px-6 md:px-12 lg:px-20 border-t-4 border-white/10">

        {/* Subtle noise/texture overlay for a premium feel */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        <div className="max-w-[1536px] mx-auto relative z-10 flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-12">

          <div className="flex-1 text-center md:text-left">

            <h2 className="text-[22px] md:text-[28px] lg:text-[34px] font-extrabold text-white leading-tight mb-2 tracking-tight">
              The cognitive age isn’t coming - it’s here. Take the first measured step.
            </h2>
            <p className="text-white/90 font-medium text-[14px] md:text-[15px] max-w-2xl mx-auto md:mx-0">
              See where your school stands today, and exactly how far the journey goes. Start with a free readiness check or talk to our team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 items-center justify-center">
            <button 
              onClick={(e) => {
                e.preventDefault();
                const banner = document.getElementById('ccmm-banner-section');
                if (banner) {
                  banner.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => banner.click(), 600);
                }
              }}
              className="bg-white text-[#5B45FF] font-bold text-[14px] px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Check your school now
              <ArrowRight className="w-4 h-4" />
            </button>

            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-transparent text-white border border-white/40 font-bold text-[14px] px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white transition-all duration-300 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              Request a discovery call
            </button>
          </div>

        </div>

        {/* Footer Line */}
        <div className="max-w-[1536px] mx-auto mt-6 pt-4 border-t border-white/15 relative z-10 text-center md:text-left flex justify-center md:justify-start">
          <p className="text-white/60 font-semibold text-[11px] md:text-[12px] tracking-widest uppercase">
            Energising young brains <span className="mx-1 md:mx-2 text-white/30">•</span> Empowering educators <span className="mx-1 md:mx-2 text-white/30">•</span> Engineering the future
          </p>
        </div>

      </section>
    </>
  );
}
