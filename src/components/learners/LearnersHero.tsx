import { Play } from 'lucide-react';
import learnersHeroImg from '../../assets/learners/hero-img.png';
import { FadeIn3D, WordReveal, StaggerContainer, StaggerItem } from '../animations/ScrollAnimations';

export default function LearnersHero() {
  return (
    <section className="relative w-full bg-white pt-32 pb-0 lg:pt-40 lg:pb-0 font-poppins z-10" style={{ overflow: 'clip', overflowClipMargin: 'content-box' }}>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <StaggerContainer className="max-w-xl">
            <StaggerItem className="inline-block text-[#5B32EA] font-semibold text-sm tracking-wider uppercase mb-6">
              FOR SCHOOLS | K-12 PARTNERSHIPS
            </StaggerItem>

            <h1 className="text-[44px] md:text-[56px] lg:text-[64px] font-extrabold text-[#1A1A2E] leading-[1.1] mb-6">
              <WordReveal text="Enabling" delay={0.1} /><br />
              <span className="text-[#5B32EA]"><WordReveal text="Future-Ready" delay={0.2} /></span><br />
              <WordReveal text="Learning at Scale" delay={0.3} />
            </h1>

            <StaggerItem className="text-[#6B7280] text-base md:text-lg leading-[1.8] mb-10 font-medium">
              Schools today must go beyond curriculum delivery to build real-world competencies. SKILLZZA K-12 enables institutions to integrate AI, innovation, and experiential learning into everyday education, preparing students for an evolving, technology-driven future.
            </StaggerItem>

            <StaggerItem className="flex flex-wrap items-center gap-4 pb-8">
              <button onClick={() => window.location.href = '/contact'} className="flex items-center gap-2 bg-[#5B32EA] text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-[#4A25C7] hover:scale-105 active:scale-95 transition-all">
                <Play className="w-4 h-4 fill-current" />
                Start Learning
              </button>

              <button className="flex items-center gap-2 bg-white text-[#5B32EA] border-2 border-[#5B32EA] px-6 py-3.5 rounded-lg font-semibold hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all">
                <Play className="w-4 h-4 fill-current" />
                Partner with us
              </button>
            </StaggerItem>
          </StaggerContainer>

          {/* Right Image */}
          <FadeIn3D delay={0.3} rotateY={-10} rotateX={5} className="relative w-full flex justify-center lg:justify-end items-end mb-[-40px] lg:mb-[-60px]">
            <div className="relative w-[112%] lg:w-[118%]">
              <img
                src={learnersHeroImg}
                alt="Students learning together"
                className="w-full h-auto object-cover rounded-[40px] relative z-10"
              />
            </div>
          </FadeIn3D>

        </div>
      </div>
    </section>
  );
}
