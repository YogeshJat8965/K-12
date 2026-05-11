import { Settings, Layout, Shield, Network, GraduationCap, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const pathways = [
  {
    title: "Curated Selection:",
    desc: "Schools select exactly 3 studios per academic year for focused depth.",
    icon: <Settings className="w-8 h-8" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    title: "Flexible Deployment:",
    desc: "Term-based, semester-based, or parallel-track models built to fit your timetable.",
    icon: <Layout className="w-8 h-8" />,
    color: "text-indigo-700",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200"
  },
  {
    title: "Balanced Domain Mix:",
    desc: "Every year blends STEM, Humanities, and Life Skills for holistic development.",
    icon: <Shield className="w-8 h-8" />,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    title: "Future-Skills Integration:",
    desc: "Emerging technology, critical thinking, and ethics built into every academic year.",
    icon: <Network className="w-8 h-8" />,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    title: "Structured Showcase:",
    desc: "Each year closes with a formal evaluation framework and student showcase.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

const HexagonIcon = ({ children, color, borderColor }: { children: React.ReactNode, color: string, borderColor: string }) => (
  <div className={`relative w-20 h-20 mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
    <svg viewBox="0 0 100 100" className={`absolute inset-0 w-full h-full fill-white stroke-[3] ${color} ${borderColor} drop-shadow-sm`}>
      <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" className="stroke-current fill-transparent" />
    </svg>
    <div className={`relative z-10 ${color}`}>
      {children}
    </div>
  </div>
);

export default function LearningPathway() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display leading-tight">
              The Skill <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Learning Pathway</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-slate-600 text-lg md:text-xl font-medium">
              Focused Depth, Measurable Impact.
            </p>
          </ScrollReveal>
        </div>

        {/* Pathway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
          {pathways.map((item, index) => (
            <div key={index} className="group flex flex-col items-center text-center">
              <ScrollReveal delay={index * 0.1} direction="up">
                <div className="flex justify-center">
                  <HexagonIcon color={item.color} borderColor={item.borderColor}>
                    {item.icon}
                  </HexagonIcon>
                </div>
                
                <h3 className="text-slate-900 font-bold text-lg mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {item.desc}
                </p>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <ScrollReveal delay={0.5}>
            <button className="group px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-purple-200/50 transition-all hover:-translate-y-1 active:scale-95 w-full sm:w-auto">
              DESIGN YOUR STUDIO MIX
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </ScrollReveal>
          
          <ScrollReveal delay={0.6}>
            <button className="px-10 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-bold text-lg hover:bg-purple-50 transition-all active:scale-95 w-full sm:w-auto">
              SCHEDULE DISCOVERY SESSION
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
