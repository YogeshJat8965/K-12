import React from 'react';
import girlStudentImg from '../../assets/CCMM/image.png';

export default function CcmmCarries() {
  const items = [
    {
      content: (
        <div className="flex flex-col">
          <span className="text-red-400 font-bold text-[11px] tracking-[0.15em] mb-1.5 uppercase">SDG 4</span>
          <span className="text-[#111827] font-bold text-[16px] mb-1.5">Quality Education</span>
          <span className="text-[#4B5563] text-[14px] leading-relaxed font-normal">Inclusive, equitable, lifelong learning for every child.</span>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col">
          <span className="text-orange-400 font-bold text-[11px] tracking-[0.15em] mb-1.5 uppercase">SDG 5</span>
          <span className="text-[#111827] font-bold text-[16px] mb-1.5">Gender Equality</span>
          <span className="text-[#4B5563] text-[14px] leading-relaxed font-normal">Closing the AI gender gap from the classroom upward.</span>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col">
          <span className="text-[#A7475C] font-bold text-[11px] tracking-[0.15em] mb-1.5 uppercase">SDG 8</span>
          <span className="text-[#111827] font-bold text-[16px] mb-1.5">Decent Work & Growth</span>
          <span className="text-[#4B5563] text-[14px] leading-relaxed font-normal">Preparing students for the cognitive economy.</span>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col">
          <span className="text-[#ED662F] font-bold text-[11px] tracking-[0.15em] mb-1.5 uppercase">SDG 9</span>
          <span className="text-[#111827] font-bold text-[16px] mb-1.5">Industry & Innovation</span>
          <span className="text-[#4B5563] text-[14px] leading-relaxed font-normal">Building school-level innovation infrastructure.</span>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col">
          <span className="text-[#DF1567] font-bold text-[11px] tracking-[0.15em] mb-1.5 uppercase">SDG 10</span>
          <span className="text-[#111827] font-bold text-[16px] mb-1.5">Reduced Inequalities</span>
          <span className="text-[#4B5563] text-[14px] leading-relaxed font-normal">Democratising AI access across Tier-1, 2, 3, and rural schools.</span>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col">
          <span className="text-[#124767] font-bold text-[11px] tracking-[0.15em] mb-1.5 uppercase">SDG 17</span>
          <span className="text-[#111827] font-bold text-[16px] mb-1.5">Partnerships for Goals</span>
          <span className="text-[#4B5563] text-[14px] leading-relaxed font-normal">Connecting schools to industry, government, and global ecosystems.</span>
        </div>
      )
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

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8 mt-10">

          {/* List Items (Left) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 w-full lg:w-[55%]">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col text-left border-t-2 border-gray-100 pt-4"
              >
                {item.content}
              </div>
            ))}
          </div>

          {/* Image (Right) */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end lg:-mt-4">
            <img
              src={girlStudentImg}
              alt="Girl Student"
              className="w-full max-w-[360px] object-contain"
            />
          </div>

        </div>

        {/* Bottom Footer Text */}
        <div className="mt-16 border-t border-gray-200 pt-8 flex justify-center text-center w-full">
          <p className="text-[#64748B] text-[14px] font-medium italic leading-relaxed w-full lg:whitespace-nowrap">
            CCMM-certified schools graduate students who don't just understand AI - they understand why it must serve humanity.
          </p>
        </div>

      </div>
    </section>
  );
}
