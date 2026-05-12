import ScrollReveal from '../ScrollReveal';

const pointsColumn1 = [
  {
    title: "Globally Recognised Certification",
    desc: "Adobe Creative Educator credentials carry international weight for teachers."
  },
  {
    title: "Industry-Grade Tools",
    desc: "Students learn on Adobe Express - the same platform used by professional creators and designers worldwide."
  },
  {
    title: "NEP 2020 Aligned",
    desc: "Every module maps to experiential learning, creativity, and multidisciplinary mandates of India's education policy."
  }
];

const pointsColumn2 = [
  {
    title: "Zero Cost to Schools",
    desc: "A fully funded programme - schools and students pay nothing to participate."
  },
  {
    title: "End-to-End Support",
    desc: "From onboarding to showcase, Skillzza manages curriculum, mentorship, and recognition on behalf of Adobe."
  }
];

export default function WhyAdobeSkillzza() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* --- Adobe Creative Cloud Inspired Background Elements --- */}
      {/* Top Left Blob */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FA0F00]/10 to-[#ff9a9e]/10 blur-[100px] rounded-full mix-blend-multiply -translate-x-1/2 -translate-y-1/2 animate-blob" />
      
      {/* Bottom Right Blob */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#a18cd1]/10 to-[#fbc2eb]/10 blur-[100px] rounded-full mix-blend-multiply translate-x-1/3 translate-y-1/3 animate-blob animation-delay-2000" />
      
      {/* Center Colorful Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-red-400/5 blur-[80px] rounded-[100%] mix-blend-multiply -translate-x-1/2 -translate-y-1/2" />

      {/* Floating Abstract Shapes */}
      <div className="absolute top-20 right-[15%] w-16 h-16 border-[6px] border-[#FA0F00]/20 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" />
      <div className="absolute bottom-32 left-[10%] w-12 h-12 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-lg rotate-45 animate-pulse pointer-events-none" />
      <div className="absolute top-1/3 left-[5%] text-[#FA0F00]/20 text-6xl font-black pointer-events-none">+</div>
      <div className="absolute bottom-1/4 right-[8%] w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-orange-400/20 border-r-[15px] border-r-transparent rotate-12 animate-[bounce_4s_infinite] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FA0F00] animate-ping" />
              <span className="text-[#FA0F00] font-bold text-sm tracking-wide uppercase">Strategic Partnership</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 font-display mb-6 tracking-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA0F00] to-[#800000]">Adobe</span> × Skillzza
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              A partnership that combines global industry leadership with India's most forward-thinking K-12 ecosystem. Together, we bring creativity, design, and AI to every classroom - at scale, with credibility, and at zero cost to participating schools.
            </p>
          </ScrollReveal>
        </div>

        {/* Two Columns Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          
          {/* Connecting line behind cards (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FA0F00]/20 to-transparent -z-10" />

          {/* Column 1 */}
          <ScrollReveal delay={0.1} direction="up" className="h-full">
            <div className="group relative bg-white/60 backdrop-blur-xl border border-[#FA0F00]/20 rounded-[2.5rem] p-8 md:p-12 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(250,15,0,0.1)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              {/* Card internal glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FA0F00]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <ul className="space-y-8 relative z-10">
                {pointsColumn1.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-5">
                    <div className="relative mt-1.5 flex-shrink-0">
                      <div className="w-3 h-3 bg-gradient-to-br from-[#FA0F00] to-red-700 rounded-sm rotate-45 shadow-[0_0_10px_rgba(250,15,0,0.3)] group-hover:rotate-[225deg] transition-transform duration-700" />
                    </div>
                    <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                      <strong className="font-bold text-slate-900 block mb-1 text-lg">{item.title}</strong> 
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Column 2 */}
          <ScrollReveal delay={0.2} direction="up" className="h-full">
            <div className="group relative bg-white/60 backdrop-blur-xl border border-[#FA0F00]/20 rounded-[2.5rem] p-8 md:p-12 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(250,15,0,0.1)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              {/* Card internal glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <ul className="space-y-8 relative z-10">
                {pointsColumn2.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-5">
                    <div className="relative mt-1.5 flex-shrink-0">
                      <div className="w-3 h-3 bg-gradient-to-br from-[#FA0F00] to-red-700 rounded-sm rotate-45 shadow-[0_0_10px_rgba(250,15,0,0.3)] group-hover:rotate-[225deg] transition-transform duration-700" />
                    </div>
                    <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                      <strong className="font-bold text-slate-900 block mb-1 text-lg">{item.title}</strong> 
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
