import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FolderOpen, TrendingUp, CalendarDays, 
  FileText, PieChart, Megaphone 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Digital student\nportfolios",
    icon: FolderOpen,
    color: "#2563EB", // Blue
    bg: "#EFF6FF"
  },
  {
    title: "Progress\ndocumentation",
    icon: TrendingUp, 
    color: "#8B5CF6", // Purple
    bg: "#F5F3FF"
  },
  {
    title: "Mid-year and\nannual showcases",
    icon: CalendarDays,
    color: "#F97316", // Orange
    bg: "#FFF7ED"
  },
  {
    title: "Learning\nreflections",
    icon: FileText,
    color: "#16A34A", // Green
    bg: "#F0FDF4"
  },
  {
    title: "School performance\ndashboards",
    icon: PieChart,
    color: "#E11D48", // Pink
    bg: "#FFF1F2"
  },
  {
    title: "Studio showcase\nevents",
    icon: Megaphone,
    color: "#3B82F6", // Blue
    bg: "#EFF6FF"
  }
];

export default function ReportingTransparency() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.rt-header', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.rt-header', start: 'top 85%' } }
      );

      gsap.fromTo('.rt-card', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.rt-grid', start: 'top 80%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white font-poppins relative overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Row */}
        <div className="rt-header flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-10">
          
          {/* Left Text */}
          <div className="max-w-[650px]">
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A2E] leading-tight mb-4">
              Reporting & <span className="text-[#3B82F6]">Transparency</span>
            </h2>
            <p className="text-[#6B7280] text-[15.5px] leading-relaxed font-medium max-w-[500px]">
              Schools And Parents Receive Structured Visibility Into Student Learning Journeys Through:
            </p>
          </div>

          {/* Right Line Decor */}
          <div className="hidden md:flex flex-1 items-center justify-end w-full">
            <div className="w-[70%] max-w-[350px] flex items-center opacity-70">
              <div className="flex-1 h-[1.5px] bg-[#3B82F6]"></div>
              <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="rt-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="rt-card bg-white rounded-[24px] p-6 lg:p-7 flex items-center gap-6 border-2 border-gray-100 shadow-sm hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] hover:-translate-y-2 transition-all duration-500 group"
              >
                {/* Icon Circle */}
                <div 
                  className="w-[72px] h-[72px] rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: feature.bg }}
                >
                  <Icon size={30} style={{ color: feature.color }} strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="text-[17px] font-bold text-[#1A1A2E] leading-snug whitespace-pre-line">
                  {feature.title}
                </h3>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
