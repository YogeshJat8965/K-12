import React from 'react';
import { Award, Star, Medal, Gem, Trophy } from 'lucide-react';

export default function CcmmCertification() {
  const certifications = [
    {
      icon: <Award className="w-6 h-6" strokeWidth={2} />,
      level: 'Bronze',
      title: 'Emerging Cognitive School',
      desc: 'A school that has laid strong AI foundations and begun its transformation.'
    },
    {
      icon: <Medal className="w-6 h-6" strokeWidth={2} />,
      level: 'Silver',
      title: 'Integrated Cognitive School',
      desc: 'A school that has woven AI meaningfully across curriculum and teaching.'
    },
    {
      icon: <Star className="w-6 h-6" strokeWidth={2} />,
      level: 'Gold',
      title: 'Advanced Cognitive School',
      desc: 'A regional leader with a thriving CoE, strong outcomes, and robust governance.'
    },
    {
      icon: <Gem className="w-6 h-6" strokeWidth={2} />,
      level: 'Platinum',
      title: 'Cognitive Leader School',
      desc: 'A benchmark institution shaping the future of AI education in India.'
    },
    {
      icon: <Trophy className="w-6 h-6" strokeWidth={2} />,
      level: 'Pinnacle',
      title: 'Yugantar School of the Year',
      desc: 'The annual flagship honour, awarded to the most outstanding Cognitive School in the national network.'
    }
  ];

  return (
    <section className="w-full bg-[#F8F7FF] font-poppins py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#111827] leading-[1.15] tracking-tight mb-6">
            CCMM School Certification <span className="text-[#5B45FF]">Journey</span>
          </h2>
          <p className="text-[#4B5563] font-medium text-[15px] md:text-[16px] leading-relaxed max-w-3xl">
            At The End Of The CCMM Journey, Every School Is Awarded A Certification That Reflects Its Demonstrated Maturity. The CCMM Badge Is A Recognisable Mark Of Trust For Parents, Boards, Regulators, And The Wider Community
          </p>
        </div>

        {/* 5 Grid Cards (Vertical layout based on user screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-6">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[24px] pt-10 px-6 pb-6 relative shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Top Purple Border Line */}
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-[#5B45FF] rounded-b-md" />
              
              {/* Centered Icon */}
              <div className="w-14 h-14 rounded-full bg-[#F5F3FF] text-[#5B45FF] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:shadow-[0_4px_15px_rgba(91,69,255,0.2)] transition-all duration-300 shrink-0">
                {cert.icon}
              </div>

              {/* Small Separator Line */}
              <div className="w-6 h-0.5 bg-[#5B45FF] mb-5 mx-auto" />

              {/* Text Content */}
              <h4 className="text-[15px] xl:text-[16px] font-bold text-[#111827] leading-snug mb-3 text-center">
                CCMM <span className="text-[#5B45FF]">{cert.level}</span><br />
                <span className="font-semibold text-gray-700 text-[14px]">{cert.title}</span>
              </h4>
              <p className="text-[#6B7280] font-medium text-[13px] xl:text-[14px] leading-relaxed flex-1 text-center">
                {cert.desc}
              </p>

              {/* Bottom Dotted Pattern */}
              <div className="mt-8 text-[#5B45FF]/20 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="2" cy="2" r="1.5" />
                  <circle cx="10" cy="2" r="1.5" />
                  <circle cx="18" cy="2" r="1.5" />
                  <circle cx="2" cy="10" r="1.5" />
                  <circle cx="10" cy="10" r="1.5" />
                  <circle cx="18" cy="10" r="1.5" />
                  <circle cx="2" cy="18" r="1.5" />
                  <circle cx="10" cy="18" r="1.5" />
                  <circle cx="18" cy="18" r="1.5" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
