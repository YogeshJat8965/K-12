import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ClipboardCheck, Clock, Settings, GraduationCap, TrendingUp
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Select Studios",
    desc: "Schools choose Studio combinations aligned with institutional vision, grade bands, and student interests.",
    icon: ClipboardCheck,
    color: "#8B5CF6", // Purple
    bg: "#F5F3FF",
    hoverClass: "hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]",
    tags: []
  },
  {
    num: "02",
    title: "Flexible Rollout",
    desc: "Implementation models are adapted to existing academic structures with minimal operational disruption.",
    icon: Clock,
    color: "#22C55E", // Green
    bg: "#F0FDF4",
    hoverClass: "hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]",
    tags: []
  },
  {
    num: "03",
    title: "Structured Execution",
    desc: "The framework includes:",
    icon: Settings,
    color: "#F97316", // Orange
    bg: "#FFF7ED",
    hoverClass: "hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]",
    tags: [
      "onboarding", "educator orientation", "weekly sessions",
      "Activity tracking", "showcase preparation", "annual review cycles"
    ]
  },
  {
    num: "04",
    title: "Experiential Learning Delivery",
    desc: "Students engage in practical activities, interdisciplinary challenges, collaborative builds, and guided mentorship.",
    icon: GraduationCap,
    color: "#3B82F6", // Blue
    bg: "#EFF6FF",
    hoverClass: "hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]",
    tags: []
  },
  {
    num: "05",
    title: "Measurable Outcomes",
    desc: "Schools receive:",
    icon: TrendingUp,
    color: "#EF4444", // Red
    bg: "#FEF2F2",
    hoverClass: "hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]",
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

      gsap.fromTo('.imp-step',
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.imp-timeline', start: 'top 75%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-[#FAFBFC] overflow-hidden font-poppins">

      {/* Background Decor Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#EFF6FF] rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl z-0 opacity-80"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#FFFBEB] rounded-full -translate-x-1/2 blur-3xl z-0 opacity-60"></div>

      {/* Bottom Right Graphic */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full border-[3px] border-[#3B82F6] z-0 opacity-20 hidden lg:block"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] rounded-full border-[2px] border-[#3B82F6] z-0 opacity-10 hidden lg:block"></div>

      <div className="max-w-[1100px] mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 imp-intro">
          <span className="text-[#3B82F6] font-bold text-[15px] mb-3 block">
            Simple. Structured. Scalable.
          </span>
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A2E] tracking-tight">
            The <span className="text-[#3B82F6]">Implementation</span> Framework
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="imp-timeline relative w-full flex flex-col gap-8 md:gap-10 pb-10">

          {/* Main Vertical Dashed Line */}
          <div className="absolute left-[30px] md:left-[50px] top-[40px] bottom-[40px] w-[2px] border-l-[1.5px] border-dashed border-[#3B82F6]/40 z-0"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div key={idx} className="imp-step relative flex items-center w-full z-10 group">

                {/* Timeline Node + Horizontal Dashed Line */}
                <div className="relative w-[60px] md:w-[100px] shrink-0 flex items-center justify-center">
                  {/* The outer circle */}
                  <div className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-full bg-[#EFF6FF] flex items-center justify-center z-10 relative transition-transform duration-500 group-hover:scale-125 shadow-sm border border-white">
                    {/* The inner solid dot */}
                    <div className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] rounded-full bg-[#3B82F6] shadow-sm"></div>
                  </div>
                  {/* Horizontal Dashed Line */}
                  <div className="absolute left-[50%] right-0 top-1/2 border-t-[1.5px] border-dashed border-[#3B82F6]/40 -z-0 hidden md:block"></div>
                </div>

                {/* Card Content */}
                <div className={`flex-1 bg-white rounded-[20px] md:rounded-[24px] shadow-sm border-2 border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${step.hoverClass} hover:-translate-y-2 transition-all duration-500 relative z-10`}>

                  {/* Icon Block */}
                  <div
                    className="w-[72px] h-[72px] md:w-[88px] md:h-[88px] rounded-[20px] flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: step.bg }}
                  >
                    <Icon size={34} style={{ color: step.color }} strokeWidth={1.5} />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col justify-center flex-1">
                    <h3 className="text-[20px] md:text-[22px] font-bold text-[#1A1A2E] mb-2 leading-tight">
                      {step.num} - {step.title}
                    </h3>
                    <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Tags (if any) */}
                    {step.tags && step.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {step.tags.map((tag, i) => (
                          <div
                            key={i}
                            className="bg-[#EFF6FF] px-3.5 py-1.5 rounded-lg flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0"></div>
                            <span className="text-[#3B82F6] font-semibold text-[13px] md:text-[13.5px]">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
