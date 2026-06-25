import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import responsibleAiImg from '../../assets/International Studio/responsible AI.png';

gsap.registerPlugin(ScrollTrigger);

export default function ResponsibleAI() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.rai-left', 
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      gsap.fromTo('.rai-right', 
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-white overflow-hidden font-poppins">
      
      {/* Subtle Background Blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EFF6FF] rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl z-0 opacity-60"></div>

      <div className="max-w-[1250px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center rai-left py-6">
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A2E] leading-tight mb-5">
            Responsible <span className="text-[#3B82F6]">AI & Digital<br className="hidden md:block" /> Citizenship</span>
          </h2>
          
          {/* Blue Line Divider */}
          <div className="w-[80px] h-[4px] bg-[#3B82F6] mb-14 rounded-full"></div>
          
          <p className="text-[#6B7280] text-[16px] leading-relaxed mb-6 font-medium pr-0 md:pr-10">
            Skillzza Integrates Ethical Technology Practices, Responsible AI Usage, Digital Wellbeing, Cyber Awareness, And Safe Online Behavior Across All Studio Experiences.
          </p>
          
          <p className="text-[#6B7280] text-[16px] leading-relaxed font-medium pr-0 md:pr-10">
            Students Are Encouraged To Become Not Only Technology Users — But Thoughtful, Responsible, And Ethical Innovators.
          </p>
        </div>

        {/* Right Image Container - Square Aspect Ratio */}
        <div className="w-full md:w-[45%] lg:w-[420px] shrink-0 rai-right relative aspect-square">
          <div className="w-full h-full rounded-[28px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(59,130,246,0.3)] border-[4px] border-white ring-1 ring-gray-100/50">
            <img 
              src={responsibleAiImg} 
              alt="Responsible AI & Digital Citizenship" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
