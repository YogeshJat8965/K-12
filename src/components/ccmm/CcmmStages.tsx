import React from 'react';
import img1 from '../../assets/CCMM/5 stages/1.webp';
import img2 from '../../assets/CCMM/5 stages/2.webp';
import img3 from '../../assets/CCMM/5 stages/3.webp';
import img4 from '../../assets/CCMM/5 stages/4.webp';
import img5 from '../../assets/CCMM/5 stages/5.webp';

export default function CcmmStages() {
  const stages = [
    {
      img: img1,
      title: 'Aware',
      badge: 'Baseline',
      titleColor: 'text-[#16A34A]', // Green
      bgTint: 'bg-[#F0FDF4]',
      borderColor: 'border-[#16A34A]/30',
      badgeColor: 'text-[#64748B]', // Baseline (Slate)
      desc: 'AI is recognised as a future imperative. The assessment sets your baseline.'
    },
    {
      img: img2,
      title: 'Emerging',
      badge: 'Bronze',
      titleColor: 'text-[#2563EB]', // Blue
      bgTint: 'bg-[#EFF6FF]',
      borderColor: 'border-[#2563EB]/30',
      badgeColor: 'text-[#A97142]', // Bronze
      desc: 'Basic AI & digital literacy begins. Select teachers trained; pilots run.'
    },
    {
      img: img3,
      title: 'Integrated',
      badge: 'Silver',
      titleColor: 'text-[#9333EA]', // Purple
      bgTint: 'bg-[#FAF5FF]',
      borderColor: 'border-[#9333EA]/30',
      badgeColor: 'text-[#8492A6]', // Silver
      desc: 'AI & emerging tech embedded across grades. Most educators AI-literate. CoE begun.'
    },
    {
      img: img4,
      title: 'Advanced',
      badge: 'Gold',
      titleColor: 'text-[#EA580C]', // Orange
      bgTint: 'bg-[#FFF7ED]',
      borderColor: 'border-[#EA580C]/30',
      badgeColor: 'text-[#D99F16]', // Gold
      desc: 'A functional CoE runs. Curriculum is industry-aligned. Students lead innovation.'
    },
    {
      img: img5,
      title: 'Cognitive',
      badge: 'Platinum',
      titleColor: 'text-[#CA8A04]', // Gold/Yellow
      bgTint: 'bg-[#FEFCE8]',
      borderColor: 'border-[#CA8A04]/30',
      badgeColor: 'text-[#708090]', // Platinum
      desc: 'A recognised hub - contributing research, hosting programmes, mentoring schools.'
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] font-poppins py-16 lg:py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">

          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#0F172A] leading-[1.15] tracking-tight mb-6">
            FIVE STAGES OF COGNITIVE MATURITY
          </h2>
          <p className="text-[#475569] font-medium text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
            Every school sits somewhere on this ascent
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`flex flex-col bg-white rounded-3xl overflow-hidden border-2 ${stage.borderColor} shadow-[0_8px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group`}
            >
              {/* Image Section */}
              <div className="w-full aspect-[4/3] overflow-hidden relative">
                <img
                  src={stage.img}
                  alt={stage.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Section */}
              <div className={`flex flex-col flex-1 items-center text-center p-6 lg:p-5 xl:p-6 ${stage.bgTint} transition-colors duration-300 relative`}>

                <h4 className={`text-[22px] font-bold mb-3 ${stage.titleColor}`}>
                  {stage.title}
                </h4>

                <p className="text-[#334155] text-[14px] leading-[1.6] font-medium mb-5">
                  {stage.desc}
                </p>



              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="max-w-3xl mx-auto text-center bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
            <span className="font-bold text-[#0F172A]">Each stage is scored across 30+ indicators</span> - the full rubric is walked through with your leadership team during the diagnostic.
          </p>
        </div>

      </div>
    </section>
  );
}
