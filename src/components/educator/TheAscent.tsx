import React from 'react';
import { Star } from 'lucide-react';
import onePathImg from '../../assets/educator circle/one  path.png';

export default function TheAscent() {
  return (
    <section className="w-full bg-[#E6E6E6] font-poppins pt-24 pb-24 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header Content */}
        <div className="flex flex-col items-start text-left max-w-4xl mb-[-5px]">
          <p className="text-[#4F46E5] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-4 leading-loose">
            THE ASCENT<br />
            EARN CIRCLEPOINTS, CLIMB THE RANKS
          </p>

          <h2 className="text-[34px] md:text-[42px] lg:text-[46px] font-extrabold text-[#111827] leading-[1.2] tracking-tight mb-6">
            One Path, From First Login To The <br className="hidden md:block" />
            <span className="text-[#4F46E5]">National Stage.</span>
          </h2>

          <p className="text-[#4B5563] font-medium text-[15px] md:text-[16px] leading-relaxed max-w-3xl">
            Every Masterclass Attended, Lesson Shared, And Question Answered Moves You Up. This Isn't A Course You Finish - It's A Standing You Build With Your Community.
          </p>
        </div>

        {/* Content Image */}
        <div className="w-full flex justify-center lg:justify-start my-4 md:my-0">
          <img
            src={onePathImg}
            alt="One path from first login to the national stage"
            className="w-full max-w-full lg:max-w-[1300px] xl:max-w-[1400px] h-auto object-contain transform scale-[1.08] md:scale-100 transition-transform origin-center"
          />
        </div>

        {/* Top Banner migrated from Community Circles */}
        <div className="w-full bg-[#F8FAFC] border border-[#F1F5F9] rounded-[20px] py-5 px-6 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-6 shadow-md -mt-13 lg:-mt-12 relative z-20 mb-4 mx-auto max-w-5xl">

          <div className="flex items-start md:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#F97316] border border-gray-50 shrink-0 mt-0.5 md:mt-0">
              <Star className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <p className="text-gray-600 text-[14px] md:text-[15px] font-medium leading-snug pt-1 md:pt-0">
              <span className="text-[#F97316] font-bold">100 pts</span> for a complete Skill DNA profile
            </p>
          </div>

          <div className="hidden md:block w-[1px] h-6 bg-gray-200"></div>

          <div className="flex items-center gap-3 pl-14 md:pl-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0"></div>
            <p className="text-gray-600 text-[14px] md:text-[15px] font-medium">
              <span className="text-[#4F46E5] font-bold">50 pts</span> per masterclass
            </p>
          </div>

          <div className="hidden md:block w-[1px] h-6 bg-gray-200"></div>

          <div className="flex items-center gap-3 pl-14 md:pl-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] shrink-0"></div>
            <p className="text-gray-600 text-[14px] md:text-[15px] font-medium">
              Points for every contribution
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
