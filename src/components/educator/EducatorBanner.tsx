import React from 'react';
import { ArrowRight } from 'lucide-react';
import bannerImg from '../../assets/educator circle/banner.png';

export default function EducatorBanner() {
  return (
    <section className="w-full bg-white py-12 md:py-24 flex justify-center font-poppins">
      <div className="w-full max-w-[1536px] mx-auto px-4 md:px-12 relative flex items-center justify-center">

        {/* Banner Image Container */}
        <div className="relative w-full rounded-[32px] overflow-hidden shadow-lg group">
          <img
            src={bannerImg}
            alt="Join the Educator Circle"
            className="w-full h-[180px] md:h-[220px] lg:h-[260px] object-cover object-center"
          />

          {/* Absolute Overlay Button on Right Side */}
          <div className="absolute right-[5%] md:right-[10%] top-[70%] -translate-y-1/2 flex items-center z-10">
            <button className="bg-white text-[#4F46E5] font-bold py-1.5 px-3 md:py-2.5 md:px-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:bg-[#F5F3FF] transition-all duration-300 flex items-center gap-1.5 text-[11px] md:text-[13px]">
              Join the circle free
              <ArrowRight className="w-2.5 h-3 md:w-3.5 md:h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
