import { Play } from 'lucide-react';
import teacherImg from '../../assets/teacher.png';
import { FadeIn3D, WordReveal, StaggerContainer, StaggerItem } from '../animations/ScrollAnimations';

export default function EducatorHero() {
  return (
    <section className="relative w-full bg-white pt-32 pb-0 lg:pt-40 lg:pb-0 font-poppins z-10" style={{ overflow: 'clip', overflowClipMargin: 'content-box' }}>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <StaggerContainer className="max-w-2xl lg:max-w-[650px]">

            <h1 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[46px] xl:text-[50px] font-extrabold text-[#1A1A2E] leading-[1.15] tracking-tight mb-6">
              <span className="whitespace-normal md:whitespace-nowrap"><WordReveal text="Future-Ready Teaching," delay={0.1} /></span><br className="hidden md:block" />
              <span className="text-[#5B32EA] whitespace-normal md:whitespace-nowrap"><WordReveal text="Powered by AI" delay={0.2} /></span><br className="hidden md:block" />
              {/* <span className="whitespace-normal md:whitespace-nowrap"><WordReveal text="Human Insight" delay={0.3} /></span> */}
            </h1>

            <StaggerItem className="text-[#6B7280] text-base md:text-lg leading-[1.8] mb-4 font-medium">
              The role of educators is rapidly evolving. In an era shaped by artificial intelligence, shifting student needs, and blended classrooms, you're not just teaching content - you're shaping futures.
            </StaggerItem>

            <StaggerItem className="text-[#6B7280] text-base md:text-lg leading-[1.8] mb-4 font-medium">
              At SKILLZZA K-12, we believe educators deserve more than tools, they deserve real partnership. Whether you're a schoolteacher, private tutor, curriculum designer, or academic leader, we empower you to stay ahead of the curve, without losing your human touch.
            </StaggerItem>

            <StaggerItem className="text-[#1A1A2E] text-base md:text-lg leading-[1.8] mb-10 font-bold">
              The future of learning isn't AI vs teachers - it's AI with teachers.
            </StaggerItem>

            <StaggerItem className="flex flex-wrap items-center gap-4 pb-8">
              <button onClick={() => window.location.href = '/signup'} className="flex items-center gap-2 bg-[#5B32EA] text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-[#4A25C7] hover:scale-105 active:scale-95 transition-all">
                <Play className="w-4 h-4 fill-current" />
                Join for free
              </button>

              <button onClick={() => window.location.href = '/contact'} className="flex items-center gap-2 bg-white text-[#5B32EA] border-2 border-[#5B32EA] px-6 py-3.5 rounded-lg font-semibold hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all">
                <Play className="w-4 h-4 fill-current" />
                Explore Community
              </button>
            </StaggerItem>
          </StaggerContainer>

          {/* Right Image */}
          <FadeIn3D delay={0.3} rotateY={-10} rotateX={5} className="relative w-full flex justify-center lg:justify-end items-end mb-[-40px] lg:mb-[-60px]">
            <div className="relative w-[112%] lg:w-[118%]">
              <img
                src={teacherImg}
                alt="Educators working together"
                className="w-full h-auto object-cover rounded-[40px] relative z-10"
              />
            </div>
          </FadeIn3D>

        </div>
      </div>
    </section>
  );
}
