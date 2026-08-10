import React from 'react';
import roadmapImg from '../../assets/CCMM/roadmap.png';

export default function CcmmJourney() {
  const steps = [
    {
      num: '01',
      title: 'Assess',
      desc: 'A confidential diagnostic benchmarks your school against the CCMM framework.'
    },
    {
      num: '02',
      title: 'Roadmap',
      desc: 'You receive a private maturity report and a phased roadmap tailored to your institution.'
    },
    {
      num: '03',
      title: 'Transform',
      desc: 'We partner with you to put it into practice across capability, curriculum, and infrastructure.'
    },
    {
      num: '04',
      title: 'Certify',
      desc: "Re-assessment confirms your progress and awards the CCMM certification tier you've earned."
    },
    {
      num: '05',
      title: 'Evolve',
      desc: 'You join the CCMM School Network and keep advancing as the landscape shifts.'
    }
  ];

  return (
    <section className="w-full bg-white font-poppins py-16 lg:py-24 overflow-hidden relative">
      <div className="w-full max-w-[1536px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 px-6">
          <span className="text-[#5B45FF] font-bold text-[13px] uppercase tracking-widest mb-4 block">
            HOW IT WORKS
          </span>
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#111827] leading-[1.15] tracking-tight">
            The CCMM journey
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 pl-6 md:pl-12 lg:pl-20 pr-0">
          
          {/* Left Side: Timeline */}
          <div className="w-full lg:w-[40%] flex flex-col items-start pr-6 lg:pr-0">

            {/* Timeline */}
            <div className="relative border-l-[3px] border-[#F3F4F6] pl-8 pb-4 ml-3 flex flex-col gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-white border-[3px] border-[#F3F4F6] flex items-center justify-center group-hover:border-[#5B45FF] group-hover:bg-[#F5F3FF] transition-all duration-300 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-transparent group-hover:bg-[#5B45FF] transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="text-[#111827] font-bold text-[22px] md:text-[24px]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#4B5563] font-medium text-[15px] md:text-[16px] leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-[60%] flex justify-end">
          <div className="relative w-full flex justify-end items-center group">
            <img 
              src={roadmapImg} 
              alt="CCMM Roadmap" 
              className="w-full h-auto max-h-[800px] object-cover object-right relative z-10 lg:translate-x-12"
              style={{ objectPosition: 'right center' }}
            />
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
