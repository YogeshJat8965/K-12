import { Target, Ship, Calendar } from 'lucide-react';
import bannerImg from '../assets/virtual internship/last banner section.png';

export default function LastBanner() {
  return (
    <section className="w-full relative overflow-hidden h-[260px] md:h-[340px] lg:h-[400px] flex items-center">
      <img
        src={bannerImg}
        alt="Skillzza Banner"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[2.8rem] font-bold leading-[1.6] mb-10 tracking-tight">
            Start Your Child's Journey <br />
            From <span className="text-[#8B5CF6]">Curiosity</span> to <span className="text-[#8B5CF6]">Capability.</span>
          </h2>

          <div className="flex flex-wrap gap-4">
            {/* Take the Quiz */}
            <button className="bg-purple-600 hover:bg-purple-700 text-slate-900 px-7 py-3.5 rounded-xl font-bold flex items-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg shadow-yellow-500/20 uppercase text-[11px] tracking-wide">
              <Target className="w-5 h-5" />
              TAKE THE QUIZ
            </button>

            {/* Explore Internships */}
            <button className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white px-7 py-3.5 rounded-xl font-bold flex items-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-500/20 uppercase text-[11px] tracking-wide">
              <Ship className="w-5 h-5" />
              EXPLORE INTERNSHIPS
            </button>

            {/* Book a Consultation */}
            <button className="bg-[#0F172A]/40 hover:bg-[#0F172A]/60 border border-white/20 text-white px-7 py-3.5 rounded-xl font-bold flex items-center gap-3 transition-all transform hover:-translate-y-1 backdrop-blur-sm uppercase text-[11px] tracking-wide">
              <Calendar className="w-5 h-5" />
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
