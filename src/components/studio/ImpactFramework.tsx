import { GraduationCap, Puzzle, Lightbulb, UserCheck, BarChart3, FolderOpen, ShieldCheck, CalendarRange, LineChart, Star } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const impactPillars = [
  {
    title: "Knowledge & Concept Mastery",
    desc: "Depth of understanding across studio curricula, measured through rubrics and formative assessments.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "text-purple-600"
  },
  {
    title: "Skill Application & Project Completion",
    desc: "Real-world application through hands-on projects, builds, and submitted capstones.",
    icon: <Puzzle className="w-8 h-8" />,
    color: "text-indigo-600"
  },
  {
    title: "Creativity & Innovation",
    desc: "Originality, problem-solving, and ideation quality tracked across iterations.",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "text-amber-500"
  },
  {
    title: "Confidence & Mindset Development",
    desc: "Growth in presentation, collaboration, resilience, and self-directed learning.",
    icon: <UserCheck className="w-8 h-8" />,
    color: "text-blue-500"
  },
  {
    title: "School-Level Impact Metrics",
    desc: "Cohort-wide performance indicators, engagement analytics, and year-on-year benchmarking.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "text-indigo-500"
  },
  {
    title: "Portfolio & Showcase Cadence",
    desc: "Digital portfolios, mid-year and annual showcases, and performance dashboards.",
    icon: <FolderOpen className="w-8 h-8" />,
    color: "text-amber-600"
  }
];

const reportingItems = [
  {
    desc: "Digital portfolio documentation for every enrolled student.",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "text-purple-500"
  },
  {
    desc: "Structured mid-year and annual showcase events.",
    icon: <CalendarRange className="w-5 h-5" />,
    color: "text-indigo-500"
  },
  {
    desc: "Live performance reporting dashboards for schools and parents.",
    icon: <LineChart className="w-5 h-5" />,
    color: "text-blue-500"
  },
  {
    desc: "Year-end Studio Fest - a flagship celebration of student work.",
    icon: <Star className="w-5 h-5" />,
    color: "text-purple-600"
  }
];

export default function ImpactFramework() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Centered */}
        <div className="mb-20 text-center max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-display leading-tight whitespace-nowrap">
              Impact Measurement Framework
            </h2>
            <p className="text-slate-600 text-lg font-medium">
              Evidence Over Certificates.
            </p>
          </ScrollReveal>
        </div>

        {/* Impact Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24">
          {impactPillars.map((pillar, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="group flex flex-col h-full cursor-default relative">
                {/* Decorative background glow on hover */}
                <div className="absolute -inset-4 bg-slate-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 scale-95 group-hover:scale-100" />
                
                <div className={`${pillar.color} mb-8 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:shadow-lg`}>
                  {pillar.icon}
                </div>
                
                <h3 className="font-bold text-slate-800 mb-4 text-lg leading-tight min-h-[3rem] group-hover:text-purple-600 transition-colors duration-300">
                  {pillar.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-900">
                  {pillar.desc}
                </p>

                {/* Animated bottom bar */}
                <div className={`mt-6 w-0 h-[2px] ${pillar.color.replace('text-', 'bg-')} group-hover:w-full transition-all duration-500 rounded-full opacity-60`} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Reporting & Transparency Box */}
        <ScrollReveal delay={0.6} direction="up">
          <div className="bg-purple-50 rounded-[3rem] p-10 lg:p-14 border border-purple-100 flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden shadow-sm group/box">
            {/* Background Decorative Shimmer */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-purple-200/30 to-transparent skew-x-12 transition-all duration-1000 group-hover/box:left-[100%]" />
            
            {/* Title Part */}
            <div className="lg:w-1/4 relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Reporting & <br />
                <span className="text-purple-600">Transparency</span>
              </h3>
            </div>
            
            {/* Items Part */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {reportingItems.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 items-start group/item">
                  <div className={`${item.color} flex-shrink-0 transition-transform duration-500 group-hover/item:scale-125 group-hover/item:rotate-6 bg-white p-3 rounded-xl shadow-sm`}>
                    {item.icon}
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed group-hover/item:text-slate-900 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
