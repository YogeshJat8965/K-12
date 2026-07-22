import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ target, prefix = "", suffix = "", className = "" }: { target: number, prefix?: string, suffix?: string, className?: string }) => {
  const nodeRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!nodeRef.current) return;
    
    const obj = { val: 0 };
    const el = nodeRef.current;
    
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        onUpdate: () => {
          el.innerHTML = `${prefix}${Math.floor(obj.val)}${suffix}`;
        }
      });
    });
    
    return () => ctx.revert();
  }, [target, prefix, suffix]);
  
  return <h3 ref={nodeRef} className={className}>{prefix}0{suffix}</h3>;
};

export default function FutureOfEducation() {
  return (
    <>
      {/* SECTION 1: Future of Education Text & Image */}
      <section className="w-full bg-white font-poppins pt-20 pb-12 lg:pb-24 overflow-hidden border-b border-gray-50">
        <div className="max-w-[1536px] mx-auto px-8 md:px-20">
          
          {/* Centered Text Content */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
            <p className="text-[#7C3AED] font-bold text-[11px] tracking-widest uppercase mb-4 lg:mb-5 text-center w-full">
              THE FUTURE OF EDUCATION
            </p>
            <h2 className="text-[32px] md:text-[42px] lg:text-[46px] font-extrabold text-[#1A1A2E] leading-tight tracking-tight mb-6 lg:mb-8 text-center w-full">
              Universities Need More Than <span className="relative inline-block text-[#7C3AED]">
                Degrees
                {/* Custom purple underline */}
                <span className="absolute left-0 -bottom-2 w-full h-[5px] bg-[#7C3AED] rounded-full"></span>
              </span>.
            </h2>
            <p className="text-gray-600 font-bold text-[15px] leading-relaxed mb-6 text-center w-full max-w-2xl mx-auto">
              Today's Graduates Are Expected To Think Creatively, Communicate Effectively, 
              Leverage AI Responsibly, And Build Professional Portfolios That Demonstrate Real-
              World Capabilities.
            </p>
            <p className="text-gray-500 font-semibold text-[15px] leading-relaxed text-center w-full max-w-3xl mx-auto">
              The Adobe Digital Creativity & AI Skills Centre Enables Universities To Bridge The 
              Gap Between Academic Learning And Industry Expectations Through An 
              Integrated Ecosystem Of Creativity, Artificial Intelligence, And Experiential 
              Learning.
            </p>
          </div>
          
        </div>
      </section>

      {/* SECTION 2: The Numbers Behind the Shift */}
      <section className="w-full bg-white font-poppins pt-16 lg:pt-24 pb-24 overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-8 md:px-20">
          <div className="flex flex-col items-center">
          <p className="text-[#7C3AED] font-bold text-[11px] tracking-widest uppercase mb-4">
            WHY THIS MATTERS
          </p>
          <h2 className="text-[36px] lg:text-[42px] font-extrabold text-[#1A1A2E] leading-tight tracking-tight mb-4 text-center">
            The <span className="text-[#7C3AED]">Numbers</span> Behind The Shift
          </h2>
          <p className="text-gray-500 font-bold text-[13px] leading-relaxed max-w-3xl text-center mb-8">
            Artificial Intelligence, Technological Literacy, And Creative Thinking Rank The Highest Among The Fastest-
            Growing Skills By 2030, As Per The World Economic Forum's Future Of Jobs Report.
          </p>
          
          <div className="w-16 h-[5px] bg-[#7C3AED] rounded-full mb-12"></div>
          
          {/* Gradient Card */}
          <div className="w-full bg-gradient-to-r from-[#7B61FF] via-[#A855F7] to-[#EC4899] rounded-3xl p-6 md:p-8 lg:p-12 shadow-[0_20px_50px_rgba(124,58,237,0.15)] relative overflow-hidden">
            {/* Subtle light flares inside the gradient card */}
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4 lg:gap-x-0 divide-x-0 lg:divide-x divide-white/20 relative z-10">
              
              {/* Item 1 */}
              <div className="flex flex-col items-center text-center px-1 md:px-2 lg:px-4">
                <Counter target={1} prefix="#" className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-4 tracking-tight" />
                <p className="text-white font-bold text-[11px] sm:text-[12px] lg:text-[13px] leading-tight mb-3">
                  AI & Big Data - fastest<br />growing skill
                </p>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col items-center text-center px-1 md:px-2 lg:px-4">
                <Counter target={4} prefix="#" className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-4 tracking-tight" />
                <p className="text-white font-bold text-[11px] sm:text-[12px] lg:text-[13px] leading-tight mb-3">
                  Creative Thinking - future<br />workforce skill
                </p>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col items-center text-center px-1 md:px-2 lg:px-4">
                <Counter target={20} suffix="+" className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold mb-2 sm:mb-3 md:mb-4 tracking-tight" />
                <p className="text-white font-bold text-[11px] sm:text-[12px] lg:text-[13px] leading-tight">
                  Adobe professional<br />applications included
                </p>
              </div>
              
              {/* Item 4 */}
              <div className="flex flex-col items-center text-center px-1 md:px-2 lg:px-4">
                <Counter target={100} suffix="GB" className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold mb-2 sm:mb-3 md:mb-4 tracking-tight" />
                <p className="text-white font-bold text-[11px] sm:text-[12px] lg:text-[13px] leading-tight">
                  Creative Cloud storage<br />included per user
                </p>
              </div>
              
              {/* Item 5 */}
              <div className="flex flex-col items-center text-center px-1 md:px-2 lg:px-4">
                <Counter target={10} className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold mb-2 sm:mb-3 md:mb-4 tracking-tight" />
                <p className="text-white font-bold text-[11px] sm:text-[12px] lg:text-[13px] leading-tight">
                  Industry-aligned courses,<br />NSQF aligned
                </p>
              </div>
              
              {/* Item 6 */}
              <div className="flex flex-col items-center text-center px-1 md:px-2 lg:px-4 border-r-0">
                <Counter target={3} className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-4 tracking-tight" />
                <p className="text-white font-bold text-[11px] sm:text-[12px] lg:text-[13px] leading-tight">
                  Professional certificate<br />pathways
                </p>
              </div>
              
            </div>
          </div>
          
          </div>
        </div>
      </section>
    </>
  );
}
