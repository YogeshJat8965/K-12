import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Lightbulb } from 'lucide-react';

import Learning1Img from '../../assets/International Studio/learning 1.png';
import Learning2Img from '../../assets/International Studio/learning 2.png';
import Learning3Img from '../../assets/International Studio/learning 3.png';

gsap.registerPlugin(ScrollTrigger);

// Simple SVG component for the gold sparkles
const Sparkle = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="#FBBF24" />
  </svg>
);

// Custom Target/Goal SVG from previous section
const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="1.5" fill="#2563EB"/>
  </svg>
);

export default function LearningStages() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo('.ls-heading', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.ls-heading',
            start: 'top 85%',
          }
        }
      );

      // Cards staggered reveal
      gsap.fromTo('.ls-card', 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.ls-card-container',
            start: 'top 80%',
          }
        }
      );
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-4 pb-24 bg-white overflow-hidden font-poppins">
      
      {/* Background Decor */}
      {/* Giant light yellow circle top left */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFFBF0] rounded-full -translate-x-1/2 -translate-y-1/4 z-0"></div>
      
      {/* Giant light purple circle bottom right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F3EFFF] rounded-full translate-x-1/3 translate-y-1/3 z-0"></div>

      <div className="max-w-[1050px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 ls-heading">
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A2E] tracking-tight">
            Designed for <span className="text-[#3B82F6]">Multiple</span> Learning Stages
          </h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-10 ls-card-container">
          
          {/* Card 1 */}
          <div className="ls-card bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 hover:border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row overflow-hidden relative group">
            {/* Image Side */}
            <div className="w-full md:w-[45%] lg:w-[48%] h-[260px] md:h-auto shrink-0 relative">
              <img src={Learning1Img} alt="Grades 3-5 Discovery & Exploration" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            
            {/* Content Side */}
            <div className="w-full md:w-[55%] lg:w-[52%] p-6 md:p-10 lg:p-12 pr-24 lg:pr-32 flex flex-col justify-center relative bg-white z-10">
              <span className="text-[#3B82F6] font-semibold text-[14px] mb-2">Grades 3–5</span>
              <h3 className="text-[#1A1A2E] text-[26px] md:text-[30px] font-bold leading-tight mb-3">
                Discovery &<br/>Exploration
              </h3>
              <p className="text-[#6B7280] text-[14.5px] font-medium leading-relaxed">
                Students Develop Curiosity, Creativity, Communication, And Foundational Digital Confidence Through Interactive And Project-Based Experiences.
              </p>

              {/* Icon Decoration Right Side */}
              <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                <Sparkle className="absolute -top-6 -left-6" />
                <div className="w-[64px] h-[64px] rounded-full bg-[#EEF2FF] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Rocket className="w-6 h-6 text-[#3B82F6]" strokeWidth={2} />
                </div>
                <Sparkle className="absolute -bottom-6 -right-6" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="ls-card bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 hover:border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row overflow-hidden relative group">
            <div className="w-full md:w-[45%] lg:w-[48%] h-[260px] md:h-auto shrink-0 relative">
              <img src={Learning2Img} alt="Grades 6-8 Skill Building & Innovation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            
            <div className="w-full md:w-[55%] lg:w-[52%] p-6 md:p-10 lg:p-12 pr-24 lg:pr-32 flex flex-col justify-center relative bg-white z-10">
              <span className="text-[#3B82F6] font-semibold text-[14px] mb-2">Grades 6–8</span>
              <h3 className="text-[#1A1A2E] text-[26px] md:text-[30px] font-bold leading-tight mb-3">
                Skill Building &<br/>Innovation
              </h3>
              <p className="text-[#6B7280] text-[14.5px] font-medium leading-relaxed">
                Learners Begin Applying Problem-Solving, Teamwork, Design Thinking, And Technology Skills Through Guided Challenges And Interdisciplinary Projects.
              </p>

              <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                <Sparkle className="absolute -top-6 -left-6" />
                <div className="w-[64px] h-[64px] rounded-full bg-[#EEF2FF] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Lightbulb className="w-6 h-6 text-[#3B82F6]" strokeWidth={2} />
                </div>
                <Sparkle className="absolute -bottom-6 -right-6" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="ls-card bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 hover:border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row overflow-hidden relative group">
            <div className="w-full md:w-[45%] lg:w-[48%] h-[260px] md:h-auto shrink-0 relative">
              <img src={Learning3Img} alt="Grades 9-12 Advanced Application & Career Readiness" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            
            <div className="w-full md:w-[55%] lg:w-[52%] p-6 md:p-10 lg:p-12 pr-24 lg:pr-32 flex flex-col justify-center relative bg-white z-10">
              <span className="text-[#3B82F6] font-semibold text-[14px] mb-2">Grades 9–12</span>
              <h3 className="text-[#1A1A2E] text-[26px] md:text-[30px] font-bold leading-tight mb-3">
                Advanced Application &<br/>Career Readiness
              </h3>
              <p className="text-[#6B7280] text-[14.5px] font-medium leading-relaxed">
                Students Take Ownership Of Their Learning Trajectory, Developing Deep Expertise, Executing Complex Projects, And Building Portfolios That Bridge Academic Concepts With Future Professional Environments.
              </p>

              <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                <Sparkle className="absolute -top-6 -left-6" />
                <div className="w-[64px] h-[64px] rounded-full bg-[#EEF2FF] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <TargetIcon />
                </div>
                <Sparkle className="absolute -bottom-6 -right-6" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
