import ScrollReveal from '../ScrollReveal';

export default function DigitalFutureCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#E8E8ED]">
      {/* --- Abstract Creative Background --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FA0F00]/5 via-purple-500/5 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-[#FA0F00]/20 blur-xl rounded-full" />
            <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center rotate-12 relative z-10 border border-slate-100">
              <svg className="w-8 h-8 text-[#FA0F00]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display mb-6 tracking-tight">
            Ready to Transform Your Digital Future?
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Empowering students. Your Digital Future? Enthasthastic inwentrasnoes and creativity, expeponvert and neeo your encnonastiocsatiny or mrinmariewly programms your dolite creatve!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Left Button */}
            <div className="relative group w-full sm:w-auto">
              <div className="absolute inset-0 bg-[#8E1111]/40 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <button className="relative w-full sm:w-auto bg-gradient-to-b from-[#8E1111] to-[#5C0A0A] border border-[#4A0808] text-white/90 text-sm md:text-base font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300">
                <span className="text-[10px] leading-none text-red-300">▶</span>
                BECOME THE CHANGE EDUCATOR
              </button>
            </div>

            {/* Right Button */}
            <div className="relative group w-full sm:w-auto">
              <div className="absolute inset-0 bg-[#E61E1E]/40 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <button className="relative w-full sm:w-auto bg-gradient-to-b from-[#E61E1E] to-[#BD1313] border border-[#9A0F0F] text-white text-sm md:text-base font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_15px_rgba(230,30,30,0.2)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="text-[10px] leading-none relative z-10 text-red-200">▶</span>
                <span className="relative z-10">BUILD YOUR CREATIVE FUTURE</span>
                
                {/* Sparkle Icon */}
                <svg 
                  className="absolute -bottom-3 -right-3 w-12 h-12 text-white opacity-30 group-hover:rotate-90 group-hover:scale-125 transition-transform duration-700" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
