import React from 'react';

export default function WhyPartner() {
  return (
    <section className="w-full bg-gradient-to-r from-[#8360fa] to-[#ed85de] font-poppins py-10 lg:py-12">
      <div className="max-w-[1536px] mx-auto px-8 md:px-20 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <p className="text-white font-semibold text-[11px] tracking-[0.15em] uppercase mb-2 opacity-90">
          WHY PARTNER WITH US?
        </p>
        
        {/* Main Heading */}
        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-extrabold text-white leading-tight tracking-tight mb-4">
          We Don't Just Deliver Courses
        </h2>
        
        {/* Subtitle / Paragraph */}
        <p className="text-white text-[14px] md:text-[16px] lg:text-[17px] font-medium max-w-[1000px] leading-[1.7] opacity-95">
          We Help Universities Establish A Sustainable Creative AI Ecosystem That Equips Students With Globally Relevant Digital Skills, Professional Credentials, And Practical Experience Aligned With The Future Of Work.
        </p>
        
      </div>
    </section>
  );
}
