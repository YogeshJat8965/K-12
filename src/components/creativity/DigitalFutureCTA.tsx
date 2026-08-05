import ScrollReveal from '../ScrollReveal';
import girlBannerImg from '../../assets/educator circle/girl banner img.png';
export default function DigitalFutureCTA() {
  return (
    <section className="py-4 md:py-6 relative overflow-visible bg-running-gradient z-10">


      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left side: Content */}
          <div className="w-full md:w-3/5 lg:w-3/5 text-left flex flex-col items-start justify-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-4 tracking-tight leading-[1.2] lg:whitespace-nowrap">
                Register your School for DCAIS program
              </h2>
              <p className="text-sm md:text-base text-slate-700 font-medium mb-6 max-w-2xl leading-relaxed">
                Bring Adobe-powered creativity and AI into everyday classroom learning and empower your students for the future a head start on the AI era.
              </p>

              <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
            {/* Left Button */}
            <div className="relative group w-full sm:w-auto">
              <div className="absolute inset-0 bg-[#8E1111]/40 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <a href="/contact" className="relative w-full sm:w-auto bg-gradient-to-b from-[#8E1111] to-[#5C0A0A] border border-[#4A0808] text-white/90 text-sm md:text-base font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300">
                <span className="text-[10px] leading-none text-red-300">▶</span>
                BECOME A CHANGE EDUCATOR
              </a>
            </div>

            {/* Right Button */}
            <div className="relative group w-full sm:w-auto">
              <div className="absolute inset-0 bg-[#E61E1E]/40 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <a href="/signup" className="relative w-full sm:w-auto bg-gradient-to-b from-[#E61E1E] to-[#BD1313] border border-[#9A0F0F] text-white text-sm md:text-base font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_15px_rgba(230,30,30,0.2)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="text-[10px] leading-none relative z-10 text-red-200">▶</span>
                <span className="relative z-10 uppercase">REGISTER YOUR SCHOOL</span>

                {/* Sparkle Icon */}
                <svg
                  className="absolute -bottom-3 -right-3 w-12 h-12 text-white opacity-30 group-hover:rotate-90 group-hover:scale-125 transition-transform duration-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </a>
            </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side: Image */}
          <div className="w-full md:w-2/5 lg:w-2/5 flex items-end justify-center md:justify-end mt-8 md:mt-0 relative md:min-h-[250px]">
            <ScrollReveal delay={0.2} direction="left" className="md:absolute md:right-0 md:-bottom-6 lg:-bottom-6">
              <img 
                src={girlBannerImg} 
                alt="School registration banner" 
                className="w-full max-w-[320px] md:max-w-none md:w-[400px] lg:w-[450px] xl:w-[500px] h-auto object-contain drop-shadow-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
