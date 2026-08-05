import React from 'react';
import { CheckCircle2, ArrowRight, Users } from 'lucide-react';
import heroImg from '../../assets/educator circle/heroimage.webp';
import { FadeIn3D, WordReveal, StaggerContainer, StaggerItem } from '../animations/ScrollAnimations';

export default function EducatorCircleHero() {
  return (
    <section className="relative w-full bg-white pt-28 pb-12 lg:pt-40 lg:pb-16 font-poppins z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center relative">

          {/* Left Content */}
          <StaggerContainer className="lg:col-span-6 max-w-2xl lg:max-w-[550px] relative z-20">
            <StaggerItem className="mb-6">
              <span className="inline-block bg-[#E8E6FF] text-[#5B32EA] font-bold text-[10px] md:text-[11px] tracking-widest uppercase px-4 py-2 rounded-full">
                FREE FOR EVERY TEACHER • CBSE • ICSE • STATE BOARDS
              </span>
            </StaggerItem>

            <h1 className="text-[36px] sm:text-[40px] md:text-[42px] lg:text-[46px] font-extrabold text-[#1A1A2E] leading-[1.15] tracking-tight mb-6 font-poppins">
              <div className="block">
                <span className="inline-block"><WordReveal text="Where" delay={0.1} /></span>
              </div>
              <div className="block flex-wrap items-baseline gap-2">
                <span className="inline-block"><WordReveal text="India's" delay={0.2} /></span> <span className="inline-block text-[#5B32EA]"><WordReveal text="teachers" delay={0.2} /></span> <span className="inline-block"><WordReveal text="find" delay={0.3} /></span>
              </div>
              <div className="block flex-wrap items-baseline gap-2">
                <span className="inline-block"><WordReveal text="their" delay={0.4} /></span> <span className="inline-block text-[#5B32EA]"><WordReveal text="circle." delay={0.4} /></span>
              </div>
            </h1>

            <StaggerItem className="text-[#4B5563] text-sm md:text-base leading-[1.7] mb-6 font-medium max-w-[500px]">
              A professional community for K-12 Educators. <br />
              Learn to teach with AI, track every CPD hour, and grow from new member to National Educator Leader, alongside teachers across the country.
            </StaggerItem>

            <StaggerItem className="flex items-center gap-2 text-[#4B5563] text-sm md:text-base font-semibold mb-10">
              <CheckCircle2 className="w-5 h-5 text-[#5B32EA]" />
              <span><span className="text-[#5B32EA]">No Fees.</span> Get Your Digital Educator Card In Two Minutes.</span>
            </StaggerItem>

            <StaggerItem className="flex flex-wrap items-center gap-4">
              <button onClick={() => window.location.href = '/signup'} className="flex items-center gap-2 bg-[#5B32EA] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#4A25C7] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-500/30">
                Join for free
                <ArrowRight className="w-4 h-4" />
              </button>

              <button onClick={() => window.location.href = '/contact'} className="flex items-center gap-2 bg-white text-[#5B32EA] border border-gray-200 shadow-sm px-8 py-3.5 rounded-lg font-bold hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all">
                Explore Community
                <Users className="w-4 h-4" />
              </button>
            </StaggerItem>
          </StaggerContainer>

          {/* Right Image */}
          <FadeIn3D delay={0.3} className="lg:col-span-6 relative w-full h-full flex justify-end items-center mt-12 lg:mt-0 z-10 pointer-events-none">
            <div className="lg:absolute right-0 top-1/2 lg:-translate-y-1/2 w-[110%] lg:w-[800px] xl:w-[950px] pointer-events-auto flex justify-end items-center relative">
              <img
                src={heroImg}
                alt="Digital Educators Circle"
                className="w-full h-auto object-contain object-right relative z-10"
              />
            </div>
          </FadeIn3D>

        </div>
      </div>
    </section>
  );
}
