import React from 'react';
import girlStudentImg from '../../assets/CCMM/image.png';

export default function CcmmCarries() {
  const leftItems = [
    {
      code: 'SDG 4',
      codeColor: 'text-red-400',
      title: 'Quality Education',
      desc: 'Inclusive, equitable, lifelong learning for every child.'
    },
    {
      code: 'SDG 8',
      codeColor: 'text-[#A7475C]',
      title: 'Decent Work & Growth',
      desc: 'Preparing students for the cognitive economy.'
    },
    {
      code: 'SDG 10',
      codeColor: 'text-[#DF1567]',
      title: 'Reduced Inequalities',
      desc: 'Democratising AI access across Tier-1, 2, 3, and rural schools.'
    }
  ];

  const rightItems = [
    {
      code: 'SDG 5',
      codeColor: 'text-orange-400',
      title: 'Gender Equality',
      desc: 'Closing the AI gender gap from the classroom upward.'
    },
    {
      code: 'SDG 9',
      codeColor: 'text-[#ED662F]',
      title: 'Industry & Innovation',
      desc: 'Building school-level innovation infrastructure.'
    },
    {
      code: 'SDG 17',
      codeColor: 'text-[#124767]',
      title: 'Partnerships for Goals',
      desc: 'Connecting schools to industry, government, and global ecosystems.'
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] font-poppins py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="mb-12 text-left flex flex-col items-start w-full">
          <span className="text-[#5B45FF] font-bold text-[13px] uppercase tracking-widest mb-3 block">
            PURPOSE
          </span>
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-extrabold text-[#111827] leading-[1.15] mb-4 lg:whitespace-nowrap">
            Aligned to the UN Sustainable Development Goals
          </h2>
          <p className="text-[#4B5563] font-medium text-[15px] md:text-[17px] leading-relaxed lg:whitespace-nowrap">
            CCMM is built on a conviction: AI in schools must serve a higher purpose than productivity. Every element maps to a relevant SDG.
          </p>
        </div>

        {/* Content Wrapper: Left (SDG 4, 8, 10), Center (Image), Right (SDG 5, 9, 17) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-10">

          {/* Left Column (SDG 4, 8, 10) */}
          <div className="w-full lg:w-[32%] flex flex-col gap-6">
            {leftItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col text-left border-t-2 border-gray-100 pt-4"
              >
                <span className={`${item.codeColor} font-bold text-[11px] tracking-[0.15em] mb-1.5 uppercase`}>
                  {item.code}
                </span>
                <span className="text-[#111827] font-bold text-[16px] mb-1.5">
                  {item.title}
                </span>
                <span className="text-[#4B5563] text-[14px] leading-relaxed font-normal">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Center Column (SDG Wheel Image) */}
          <div className="w-full lg:w-[36%] flex justify-center items-center my-4 lg:my-0">
            <img
              src={girlStudentImg}
              alt="Sustainable Development Goals"
              className="w-full max-w-[420px] object-contain"
            />
          </div>

          {/* Right Column (SDG 5, 9, 17) */}
          <div className="w-full lg:w-[32%] flex flex-col gap-6">
            {rightItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col text-left border-t-2 border-gray-100 pt-4"
              >
                <span className={`${item.codeColor} font-bold text-[11px] tracking-[0.15em] mb-1.5 uppercase`}>
                  {item.code}
                </span>
                <span className="text-[#111827] font-bold text-[16px] mb-1.5">
                  {item.title}
                </span>
                <span className="text-[#4B5563] text-[14px] leading-relaxed font-normal">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Footer Text */}
        <div className="mt-8 flex justify-center text-center w-full">
          <p className="text-[#64748B] text-[14px] font-medium italic leading-relaxed w-full lg:whitespace-nowrap">
            CCMM-certified schools graduate students who don't just understand AI - they understand why it must serve humanity.
          </p>
        </div>

      </div>
    </section>
  );
}
