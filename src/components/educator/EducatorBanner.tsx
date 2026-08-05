import React from 'react';
import { ArrowRight } from 'lucide-react';
import bannerImg from '../../assets/educator circle/banner.webp';

export default function EducatorBanner() {
  return (
    <section className="w-full bg-white py-2 md:py-6 flex justify-center font-poppins">
      <div className="w-full relative flex items-center justify-center">
 
        {/* Banner Image Container */}
        <div className="relative w-full overflow-hidden shadow-lg group">
          <img
            src={bannerImg}
            alt="Join the Educator Circle"
            className="w-full h-[180px] md:h-[220px] lg:h-[260px] object-cover object-left md:object-center"
          />

          {/* Absolute Overlay Button on Right Side */}
          <div className="absolute right-[5%] md:right-[10%] top-[72%] md:top-1/2 -translate-y-1/2 flex items-center z-10">
            <button onClick={() => window.location.href = '/login'} className="bg-white text-[#4F46E5] font-bold py-1.5 px-3.5 md:py-3 md:px-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:bg-[#F5F3FF] transition-all duration-300 flex items-center gap-1.5 md:gap-2 text-[10px] md:text-[14px]">
              <span className="md:hidden">Join free</span>
              <span className="hidden md:inline">Join the circle free</span>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
