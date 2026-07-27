import { Gift, User, Award, School } from 'lucide-react';
import heroImg from '../../assets/digital creativity/heroimg.webp';
import ScrollReveal from '../ScrollReveal';

export default function CreativityHero() {
  return (
    <section className="relative bg-white text-slate-900 pt-40 md:pt-48 pb-6 md:pb-10 overflow-hidden flex items-center">

      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 flex items-center justify-end overflow-hidden">
        <img
          src={heroImg}
          alt="Digital Creativity Hero Background"
          className="w-full lg:w-[65%] h-auto max-h-screen object-contain object-right opacity-40 lg:opacity-100"
        />

        {/* Left Side Overlay - To hide ghost text and provide clean surface on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full lg:w-[60%] z-[1]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center">

          {/* Content Over the Background */}
          <div className="w-full lg:w-3/5 relative z-20">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-extrabold text-[#0B192C] leading-[1.1] mb-6 tracking-tight">
                Digital Creativity & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C3CF7] to-[#F97316]">AI Skills for K-12</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-2 mb-4 font-bold text-sm tracking-wide">
                <span className="text-slate-900 text-lg">SKILLZZA <span className="text-slate-400 font-normal">×</span></span>
                <span className="text-[#FA0F00] text-lg">POWERED BY ADOBE</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-lg mb-10">
                Empowering students and educators with future-ready digital skills through AI-powered learning using Adobe Express. Aligned with the vision of the National Education Policy 2020, the programme fosters creativity, design thinking, digital literacy, and experiential learning.
              </p>
            </ScrollReveal>

            {/* Feature Points */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-6 sm:gap-10 mb-10">
                {[
                  { icon: Gift, text: "100%\nFree Program", color: "text-[#6C3CF7]" },
                  { icon: User, text: "Expert\nMentorship", color: "text-[#F97316]" },
                  { icon: Award, text: "Digital\nCertificates", color: "text-[#6C3CF7]" },
                  { icon: School, text: "School\nRecognition", color: "text-[#F97316]" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex flex-col items-center text-center gap-2">
                      <Icon className={`w-8 h-8 ${item.color}`} strokeWidth={1.5} />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight whitespace-pre-line">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Buttons */}
            <ScrollReveal delay={0.4}>
              <button className="px-8 py-3.5 bg-gradient-to-r from-[#6C3CF7] to-[#F97316] text-white rounded-full font-bold text-sm sm:text-base hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-wide">
                REGISTER YOUR SCHOOL NOW
              </button>
            </ScrollReveal>
          </div>

        </div>
      </div>

    </section>
  );
}
