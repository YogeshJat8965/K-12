import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FileText, GraduationCap, Landmark,
  Heart, Users, Network, Leaf
} from 'lucide-react';
import globalEducationImg from '../../assets/International Studio/global education.png';

gsap.registerPlugin(ScrollTrigger);

const trends = [
  { text: "NEP 2020", icon: FileText },
  { text: "Experiential Learning Models", icon: GraduationCap },
  { text: "UNESCO Future Competencies", icon: Landmark },
  { text: "Social-Emotional Learning Principles", icon: Heart },
  { text: "Global Citizenship Education", icon: Users },
  { text: "Interdisciplinary Learning Approaches", icon: Network },
  { text: "Sustainable Development Goals (SDGs)", icon: Leaf }
];

export default function GlobalEducation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ge-left',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      gsap.fromTo('.ge-right',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full pt-8 md:pt-12 pb-8 md:pb-12 bg-[#FAFAFA] overflow-hidden font-poppins relative">
      {/* Background Decor Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#E0E7FF] rounded-full blur-[120px] opacity-60 z-0"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-[#DBEAFE] rounded-full blur-[150px] opacity-50 z-0"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 w-full">
          <div className="max-w-[850px] w-full ge-left">
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A2E] leading-tight mb-3">
              Alignment with <span className="text-[#7C3AED] whitespace-nowrap">Global Education</span>
            </h2>

            {/* Blue Line Divider */}
            <div className="w-[80px] h-[4px] bg-[#3B82F6] mb-4"></div>

            <p className="text-[#6B7280] text-[15px] font-medium">
              Our studios are designed in alignment with
            </p>
          </div>

          {/* Right Line Decor */}
          <div className="hidden md:flex w-full max-w-[350px] justify-end mt-4 opacity-70">
            <div className="w-[90%] flex items-center">
              <div className="flex-1 h-[1.5px] bg-[#3B82F6]"></div>
              <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
            </div>
          </div>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-10 lg:gap-16 pt-2">

          {/* Left List */}
          <div className="flex-1 w-full max-w-[600px] ge-left shrink-0">
            <div className="flex flex-col gap-3">
              {trends.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-5 px-5 py-3.5 bg-white border border-[#BFDBFE] rounded-[8px] hover:border-blue-400 hover:shadow-[0_8px_30px_-10px_rgba(59,130,246,0.2)] hover:-translate-y-0.5 transition-all duration-300 w-full group"
                  >
                    <Icon className="text-[#3B82F6] w-[20px] h-[20px] shrink-0 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    <span className="text-[15px] font-semibold text-[#1A1A2E] leading-tight tracking-wide">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full ge-right flex justify-center -mt-24 -mb-28 lg:justify-end lg:-mt-[220px] xl:-mt-[250px] lg:-mb-8 xl:-mb-16">
            <img
              src={globalEducationImg}
              alt="Global Education Trends"
              className="w-full max-w-[650px] lg:max-w-[850px] lg:scale-125 xl:scale-[1.35] lg:origin-top lg:translate-x-4 h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
