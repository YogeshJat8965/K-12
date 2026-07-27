import ScrollReveal from '../ScrollReveal';
import adobeImg from '../../assets/digital creativity/adobeXskillzza.webp';

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
    <section className="pt-12 pb-4 md:pt-16 md:pb-6 bg-white overflow-hidden relative">
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
        <div className="text-center mb-8 max-w-4xl mx-auto">
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

        {/* Image Display */}
        <div className="max-w-5xl mx-auto relative mt-4">
          <ScrollReveal delay={0.1} direction="up" className="w-full">
            <div className="w-full rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img src={adobeImg} alt="Why Adobe x Skillzza features" className="w-full h-auto object-contain" />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
