import React from 'react';
import mainImg from '../../assets/digital creativity/main img.png';

export default function CreativityPreHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center font-poppins pt-16 bg-[#8B63F8]">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20 z-0"
        style={{ backgroundImage: `url(${mainImg})` }}
      >
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1000px] mx-auto px-6 text-center flex flex-col items-center justify-center">
        <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-bold text-white leading-[1.2] mb-6 uppercase tracking-wider">
          Digital Creativity & <br className="hidden md:block" /> AI Skills for K–12
        </h1>

        <p className="text-[16px] md:text-[20px] lg:text-[24px] text-white/95 font-medium leading-relaxed max-w-4xl mx-auto">
          A 100% free, NEP 2020-aligned programme bringing digital creativity, generative AI and AI literacy into K–12 classrooms on Adobe Express with Adobe Creative Educator certification
        </p>
      </div>
    </section>
  );
}
