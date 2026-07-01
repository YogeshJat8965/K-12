import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../../assets/International Studio/1st.png';
import img2 from '../../assets/International Studio/2nd.png';
import img3 from '../../assets/International Studio/3rd.png';
import img4 from '../../assets/International Studio/4th.png';
import img5 from '../../assets/International Studio/5th.png';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "1",
    title: "Select Studios",
    desc: "Schools choose Studio combinations aligned with institutional vision, grade bands, and student interests.",
    color: "#7C3AED", // Purple
    image: img1,
    tags: []
  },
  {
    num: "2",
    title: "Flexible Rollout",
    desc: "Implementation models are adapted to existing academic structures with minimal operational disruption.",
    color: "#7C3AED", // Purple
    image: img2,
    tags: []
  },
  {
    num: "3",
    title: "Structured Execution",
    desc: "The framework includes onboarding, educator orientation, weekly sessions, Activity tracking, and annual review cycles.",
    color: "#7C3AED", // Purple
    image: img3,
    tags: [
      "onboarding", "educator orientation", "weekly sessions",
      "Activity tracking", "showcase preparation", "annual review cycles"
    ]
  },
  {
    num: "4",
    title: "Experiential Learning",
    desc: "Students engage in practical activities, interdisciplinary challenges, collaborative builds, and guided mentorship.",
    color: "#7C3AED", // Purple
    image: img4,
    tags: []
  },
  {
    num: "5",
    title: "Measurable Outcomes",
    desc: "Schools receive portfolio evidence, progress tracking, student reflections, performance insights, and showcase documentation.",
    color: "#7C3AED", // Purple
    image: img5,
    tags: [
      "portfolio evidence", "progress tracking", "student reflections",
      "performance insights", "showcase documentation"
    ]
  }
];

export default function ImplementationFramework() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.imp-intro',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.imp-intro', start: 'top 85%' } }
      );

      gsap.fromTo('.imp-step-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.imp-timeline', start: 'top 75%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-[#FAFBFC] overflow-hidden font-poppins">

      <div className="max-w-[1300px] mx-auto px-4 md:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 imp-intro">
          <h2 className="text-[36px] md:text-[44px] font-extrabold text-[#1A1A2E] tracking-tight">
            The <span className="text-[#6C3CF7]">Implementation</span> Framework
          </h2>
          <p className="mt-4 text-[#6B7280] font-medium text-[16px]">
            Simple. Structured. Scalable.
          </p>
        </div>

        {/* Horizontal Timeline Layout */}
        <div className="imp-timeline relative w-full mt-10">
          
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-4 relative">
            
            {steps.map((step, idx) => (
              <div key={idx} className="imp-step-card flex-1 flex flex-col items-center group w-full">

                {/* Card Container */}
                <div className="bg-white rounded-[24px] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(108,60,247,0.15)] border border-gray-100 p-6 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 w-full h-full min-h-[320px]">
                  
                  {/* Image */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mb-6 flex items-center justify-center">
                    <img src={step.image} alt={step.title} className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[17px] mb-3 leading-tight" style={{ color: step.color }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4B5563] text-[13px] font-medium leading-relaxed">
                    {step.desc}
                  </p>
                  
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
