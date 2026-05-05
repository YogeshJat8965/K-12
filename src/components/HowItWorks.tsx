import { Search, FolderOpen, BookOpen, Monitor, Share2, Clock, Calendar, Wifi, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    title: "Discover",
    desc: "Students take a short interest and aptitude assessment to identify suitable career paths.",
    icon: Search,
    color: "#7C3AED", // Violet
    borderColor: "border-[#7C3AED]"
  },
  {
    title: "Enroll in a Studio",
    desc: "They select a domain-specific internship and receive a real-world problem statement.",
    icon: FolderOpen,
    color: "#2563EB", // Blue
    borderColor: "border-[#2563EB]"
  },
  {
    title: "Learn & Apply",
    desc: "Through guided modules, students learn relevant concepts and apply them to practical tasks.",
    icon: BookOpen,
    color: "#0D9488", // Teal
    borderColor: "border-[#0D9488]"
  },
  {
    title: "Build a Capstone",
    desc: "Students create a final deliverable - a product prototype, business pitch, or analytical report.",
    icon: Monitor,
    color: "#EA580C", // Orange
    borderColor: "border-[#EA580C]"
  },
  {
    title: "Earn & Showcase",
    desc: "Upon completion, students receive certification and a portfolio-ready project they can showcase.",
    icon: Share2,
    color: "#BE185D", // Pink
    borderColor: "border-[#BE185D]"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="mb-4">
            How the Program Works
          </h2>
          <p className="text-lg font-normal">
            A structured journey that mirrors real workplace experiences.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto">
          {/* Timeline Steps */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-16 relative">
              {/* Desktop Connecting Line */}
              <div className="absolute top-12 left-12 right-12 h-[2px] bg-slate-100 -z-10 hidden md:block" />

              {steps.map((item, i) => (
                <ScrollReveal 
                  key={i} 
                  delay={i * 0.15} 
                  rotateY={i % 2 === 0 ? 15 : -15}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex-1 flex flex-col items-center text-center group">
                    {/* Circle Icon */}
                    <div className="relative mb-8">
                      <div
                        className={`w-24 h-24 rounded-full border-[3px] bg-white flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl ${item.borderColor}`}
                      >
                        <item.icon className="w-10 h-10" style={{ color: item.color }} />
                      </div>

                      {/* Connecting Line with Arrowhead (Desktop) */}
                      {i !== steps.length - 1 && (
                        <div className="absolute top-1/2 left-[calc(100%+1rem)] w-[calc(100%-2rem)] lg:w-[calc(100%+2rem)] h-[2px] bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 hidden md:flex items-center -translate-y-1/2 z-0">
                          <div className="absolute right-0 w-2 h-2 border-t-2 border-r-2 border-slate-300 rotate-45" />
                        </div>
                      )}
                    </div>

                    {/* Text Content */}
                    <div className="space-y-4 px-2 w-full">
                      <h3 className="font-extrabold text-lg lg:text-xl text-[#023463] group-hover:text-blue-600 transition-colors whitespace-nowrap">
                        {item.title}
                      </h3>
                      <div className="min-h-[60px]">
                        <p className="text-slate-500 text-[13px] lg:text-[14px] leading-relaxed font-normal mx-auto">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Program Details Bar */}
        <div className="mt-20 max-w-6xl mx-auto bg-violet-50/50 rounded-2xl border border-violet-100 overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-violet-200">
            {/* Duration */}
            <div className="flex-1 py-4 px-8 flex items-center justify-center gap-4">
              <div className="text-[9px] font-bold text-violet-400 uppercase tracking-widest">DURATION</div>
              <div className="text-base lg:text-lg font-extrabold text-[#023463] whitespace-nowrap">4-6 Weeks</div>
            </div>

            {/* Weekly Effort */}
            <div className="flex-1 py-4 px-8 flex items-center justify-center gap-4">
              <div className="text-[9px] font-bold text-violet-400 uppercase tracking-widest">WEEKLY EFFORT</div>
              <div className="text-base lg:text-lg font-extrabold text-[#023463] whitespace-nowrap">3-5 Hours</div>
            </div>

            {/* Format */}
            <div className="flex-1 py-4 px-8 flex items-center justify-center gap-4">
              <div className="text-[9px] font-bold text-violet-400 uppercase tracking-widest">FORMAT</div>
              <div className="text-base lg:text-lg font-extrabold text-[#023463] whitespace-nowrap">100% Online, Self-Paced</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
