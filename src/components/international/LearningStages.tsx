import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Lightbulb } from 'lucide-react';

import Learning1Img from '../../assets/International Studio/learning 1.png';
import Learning2Img from '../../assets/International Studio/learning 2.png';
import Learning3Img from '../../assets/International Studio/learning 3.png';

gsap.registerPlugin(ScrollTrigger);

const Sparkle = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="#FBBF24" />
  </svg>
);

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="1.5" fill="#2563EB"/>
  </svg>
);

export default function LearningStages() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Discovery & Exploration",
    "Skill Building",
    "Advanced Application"
  ];

  // Animate card content on tab change
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

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
      
      gsap.fromTo('.ls-tabs', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.ls-heading',
            start: 'top 85%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-4 pb-12 md:pb-24 bg-white overflow-hidden font-poppins">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#FFFBF0] rounded-full -translate-x-1/4 -translate-y-[10%] z-0"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#F3EFFF] rounded-full translate-x-1/4 translate-y-[10%] z-0"></div>

      <div className="max-w-[1050px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 ls-heading">
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A2E] tracking-tight">
            Designed for <span className="text-[#7C3AED]">Multiple</span> Learning Stages
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 ls-tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-[15px] font-semibold transition-all duration-300 ${
                activeTab === index 
                ? 'bg-[#3B82F6] text-white shadow-md' 
                : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards Container */}
        <div className="flex flex-col ls-card-container">
          <div ref={cardRef}>
            {/* Card 1 */}
            {activeTab === 0 && (
              <div className="ls-card bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden relative group">
                <div className="w-full md:w-[45%] lg:w-[48%] h-[260px] md:h-[auto] md:min-h-[300px] shrink-0 relative">
                  <img src={Learning1Img} alt="Grades 3-5 Discovery & Exploration" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="w-full md:w-[55%] lg:w-[52%] px-6 pb-6 pt-1 md:p-10 lg:p-12 md:pr-24 lg:pr-32 flex flex-col justify-center relative bg-white z-10">
                  <span className="text-[#3B82F6] font-semibold text-[14px] mb-2">Grades 3–5</span>
                  <h3 className="text-[#1A1A2E] text-[26px] md:text-[30px] font-bold leading-tight mb-3">
                    Discovery &<br/>Exploration
                  </h3>
                  <p className="text-[#6B7280] text-[14.5px] font-medium leading-relaxed">
                    Students Develop Curiosity, Creativity, Communication, And Foundational Digital Confidence Through Interactive And Project-Based Experiences.
                  </p>

                  <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                    <Sparkle className="absolute -top-6 -left-6" />
                    <div className="w-[64px] h-[64px] rounded-full bg-[#EEF2FF] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Rocket className="w-6 h-6 text-[#3B82F6]" strokeWidth={2} />
                    </div>
                    <Sparkle className="absolute -bottom-6 -right-6" />
                  </div>
                </div>
              </div>
            )}

            {/* Card 2 */}
            {activeTab === 1 && (
              <div className="ls-card bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden relative group">
                <div className="w-full md:w-[45%] lg:w-[48%] h-[260px] md:h-[auto] md:min-h-[300px] shrink-0 relative">
                  <img src={Learning2Img} alt="Grades 6-8 Skill Building & Innovation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="w-full md:w-[55%] lg:w-[52%] px-6 pb-6 pt-1 md:p-10 lg:p-12 md:pr-24 lg:pr-32 flex flex-col justify-center relative bg-white z-10">
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
            )}

            {/* Card 3 */}
            {activeTab === 2 && (
              <div className="ls-card bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden relative group">
                <div className="w-full md:w-[45%] lg:w-[48%] h-[260px] md:h-[auto] md:min-h-[300px] shrink-0 relative">
                  <img src={Learning3Img} alt="Grades 9-12 Advanced Application & Career Readiness" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="w-full md:w-[55%] lg:w-[52%] px-6 pb-6 pt-1 md:p-10 lg:p-12 md:pr-24 lg:pr-32 flex flex-col justify-center relative bg-white z-10">
                  <span className="text-[#3B82F6] font-semibold text-[14px] mb-2">Grades 9–12</span>
                  <h3 className="text-[#1A1A2E] text-[26px] md:text-[30px] font-bold leading-tight mb-3">
                    Advanced Application &<br/>Career Readiness
                  </h3>
                  <p className="text-[#6B7280] text-[14.5px] font-medium leading-relaxed">
                    Students Focus On Real-World Problem Solving, Advanced Tools, Entrepreneurship, And Portfolio Creation To Prepare For Future Careers.
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
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
