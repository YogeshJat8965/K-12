import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  BarChart3, 
  BrainCircuit, 
  PenTool, 
  Bot, 
  Users, 
  Globe2,
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Data structure for cards to make the layout cleaner
const studios = [
  {
    title: "Gen AI &\nDeep Tech Studio",
    desc: "Students explore Artificial Intelligence, emerging technologies, prompt engineering, and ethical AI applications through hands-on learning and guided innovation projects.",
    theme: "purple",
    icon: BrainCircuit,
    tags: ["Generative AI", "AI Fundamentals", "Prompt Engineering", "Emerging Technologies", "AI Ethics", "Creative AI Tools"],
    colorHex: "#6366F1", // Indigo/Purple
    bgHex: "#EEF2FF",
    hoverClass: "hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]"
  },
  {
    title: "Digital Creativity\n& AI Studio",
    subtitle: "Powered by Adobe",
    desc: "Students learn modern digital creativity using industry-relevant tools for design, storytelling, branding, visual communication, and AI-assisted creative workflows.",
    theme: "blue",
    icon: PenTool,
    tags: ["Graphic Design", "Digital Storytelling", "Creative Media", "Visual Communication", "Content Creation", "AI-Powered Creativity"],
    colorHex: "#2563EB", // Blue
    bgHex: "#EFF6FF",
    hoverClass: "hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.3)]"
  },
  {
    title: "AI Builders\nStudio",
    desc: "Students develop foundational AI engineering and computational thinking skills through beginner-friendly innovation projects and intelligent systems exploration.",
    theme: "green",
    icon: Bot,
    tags: ["AI Applications", "Intelligent Systems", "Automation Logic", "Problem-Solving", "AI Innovation Challenges"],
    colorHex: "#16A34A", // Green
    bgHex: "#F0FDF4",
    hoverClass: "hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]"
  },
  {
    title: "Future Leaders &\nEntrepreneurship Studio",
    desc: "Students build leadership, collaboration, entrepreneurial thinking, innovation mindset, and communication skills through practical activities and real-world simulations.",
    theme: "orange",
    icon: Users,
    tags: ["Leadership", "Entrepreneurship", "Team Collaboration", "Design Thinking", "Innovation Mindset", "Communication Skills"],
    colorHex: "#EA580C", // Orange
    bgHex: "#FFF7ED",
    hoverClass: "hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]"
  },
  {
    title: "Global Ambassador &\nWorld Affairs Studio",
    desc: "Students explore global citizenship, diplomacy, sustainability, international affairs, and cross-cultural communication.",
    theme: "teal",
    icon: Globe2,
    tags: ["Global Awareness", "Public Policy Basics", "Sustainable Development", "Communication", "International Perspectives", "Cross-cultural Understanding"],
    colorHex: "#0D9488", // Teal
    bgHex: "#F0FDFA",
    hoverClass: "hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]"
  }
];

export default function FutureSkillsStudios() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.fromTo('.fss-intro', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.fss-intro', start: 'top 85%' } }
      );

      // Cards stagger
      gsap.fromTo('.fss-card', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.fss-grid', start: 'top 80%' } }
      );
      
      // Bottom button
      gsap.fromTo('.fss-btn', 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.fss-btn', start: 'top 95%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-8 pb-24 bg-[#FAFBFC] overflow-hidden font-poppins">
      
      {/* Background Decor Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-[#FFFBF0] rounded-full -translate-x-1/2 blur-2xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F3EFFF] rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl z-0"></div>
      
      {/* Dot Grid Pattern (Bottom Right) */}
      <div className="absolute bottom-20 right-10 w-32 h-32 z-0 opacity-40 hidden lg:block" style={{ backgroundImage: 'radial-gradient(#9CA3AF 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-16 fss-intro max-w-[850px]">
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A2E] tracking-tight mb-6">
            Our Future <span className="text-[#3B82F6]">Skills Studios</span>
          </h2>
          <p className="text-[#6B7280] text-[16px] font-medium leading-relaxed">
            A Curated Portfolio Of Immersive Skill Studios Designed To Build Capability, Confidence, Creativity, And Future Readiness.
          </p>
        </div>

        {/* Cards Grid - Top 3 */}
        <div className="fss-grid w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {studios.slice(0, 3).map((studio, idx) => {
            const Icon = studio.icon;
            return (
              <div 
                key={`top-${idx}`} 
                className={`fss-card bg-white rounded-[24px] p-6 lg:p-7 flex flex-col shadow-sm border-2 border-gray-100 ${studio.hoverClass} hover:-translate-y-2 transition-all duration-500 group`}
              >
                {/* Top Half */}
                <div className="flex gap-4 mb-5">
                  {/* Icon Block */}
                  <div 
                    className="w-[64px] h-[64px] rounded-[18px] flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: studio.bgHex }}
                  >
                    <Icon size={28} style={{ color: studio.colorHex }} strokeWidth={1.5} />
                  </div>
                  
                  {/* Title */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-[#1A1A2E] text-[21px] font-bold leading-tight whitespace-pre-line">
                      {studio.title}
                    </h3>
                    {studio.subtitle && (
                      <span className="text-[#3B82F6] text-[12px] font-bold mt-1 italic">
                        {studio.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-[#6B7280] text-[14.5px] leading-relaxed mb-6 flex-grow">
                  {studio.desc}
                </p>

                <div className="w-full h-[1px] bg-gray-100 mb-5"></div>

                {/* Bottom Half: Tags */}
                <div>
                  <h4 className="text-[14px] font-bold mb-3" style={{ color: studio.colorHex }}>
                    Key Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {studio.tags.map((tag, i) => (
                      <div 
                        key={i} 
                        className="px-3 py-1.5 rounded-full flex items-center gap-1.5"
                        style={{ backgroundColor: studio.bgHex }}
                      >
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: studio.colorHex }}></div>
                        <span className="text-[11.5px] md:text-[12px] font-bold whitespace-nowrap" style={{ color: studio.colorHex }}>
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cards Grid - Bottom 2 (Centered) */}
        <div className="fss-grid w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:max-w-[66.666%] mb-16 mx-auto">
          {studios.slice(3, 5).map((studio, idx) => {
            const Icon = studio.icon;
            return (
              <div 
                key={`bot-${idx}`} 
                className={`fss-card bg-white rounded-[24px] p-6 lg:p-7 flex flex-col shadow-sm border-2 border-gray-100 ${studio.hoverClass} hover:-translate-y-2 transition-all duration-500 group`}
              >
                {/* Top Half */}
                <div className="flex gap-4 mb-5">
                  {/* Icon Block */}
                  <div 
                    className="w-[64px] h-[64px] rounded-[18px] flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                    style={{ backgroundColor: studio.bgHex }}
                  >
                    <Icon size={28} style={{ color: studio.colorHex }} strokeWidth={1.5} />
                  </div>
                  
                  {/* Title */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-[#1A1A2E] text-[21px] font-bold leading-tight whitespace-pre-line">
                      {studio.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[#6B7280] text-[14.5px] leading-relaxed mb-6 flex-grow">
                  {studio.desc}
                </p>

                <div className="w-full h-[1px] bg-gray-100 mb-5"></div>

                {/* Bottom Half: Tags */}
                <div>
                  <h4 className="text-[14px] font-bold mb-3" style={{ color: studio.colorHex }}>
                    Key Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {studio.tags.map((tag, i) => (
                      <div 
                        key={i} 
                        className="px-3 py-1.5 rounded-full flex items-center gap-1.5"
                        style={{ backgroundColor: studio.bgHex }}
                      >
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: studio.colorHex }}></div>
                        <span className="text-[11.5px] md:text-[12px] font-bold whitespace-nowrap" style={{ color: studio.colorHex }}>
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Button */}
        <button className="fss-btn mt-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] flex items-center gap-2 transition-colors shadow-md hover:shadow-lg">
          Explore all studios <ArrowRight size={18} strokeWidth={2.5} />
        </button>

      </div>
    </section>
  );
}
