import { motion } from 'framer-motion';
import { Sparkles, Workflow, Target, Cpu, Award } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import frameworkImg from '../../assets/skill studio/frameworks img.png';

const steps = [
  {
    number: "01",
    title: "Choose Studios",
    desc: "Select any 3 Skill Studios per year aligned to your school's goals, vision, and student profile.",
    icon: <Sparkles className="w-8 h-8" strokeWidth={1.5} />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100"
  },
  {
    number: "02",
    title: "Flexible Rollout",
    desc: "Term, semester, parallel, or student-choice models – built to fit your existing timetable without disruption.",
    icon: <Workflow className="w-8 h-8" strokeWidth={1.5} />,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100"
  },
  {
    number: "03",
    title: "Structured Execution",
    desc: "Onboarding → weekly sessions → progress tracking → term showcases → annual review.",
    icon: <Target className="w-8 h-8" strokeWidth={1.5} />,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100"
  },
  {
    number: "04",
    title: "Experiential Learning",
    desc: "Hands-on projects, real-world challenges, and guided mentorship embedded in every session.",
    icon: <Cpu className="w-8 h-8" strokeWidth={1.5} />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100"
  },
  {
    number: "05",
    title: "Measurable Outcomes",
    desc: "Portfolios, capstone projects, certifications, and the annual Skillzza Studio Fest.",
    icon: <Award className="w-8 h-8" strokeWidth={1.5} />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100"
  }
];

export default function ImplementationFramework() {
  return (
    <section className="py-24 bg-white relative overflow-hidden w-full">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-100/30 rounded-full blur-[120px] -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Centered and Impactful */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display leading-tight">
              The <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Implementation Framework</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
              Simple. Structured. Outcome-Driven. <br />
              A seamless blueprint for future-ready education.
            </p>
          </ScrollReveal>
        </div>

        {/* The Connected Roadmap */}
        <div className="relative mb-24">
          {/* Connecting Glow Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-10 right-10 h-[2px] bg-slate-100 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up" className="h-full">
                <div className="group relative flex flex-col items-center text-center h-full">
                  
                  {/* The "Node" - Modern Geometric Shape with Icon */}
                  <div className="relative w-24 h-24 mb-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 flex-shrink-0">
                    <div className="absolute inset-0 bg-white rounded-[2rem] shadow-xl group-hover:shadow-purple-200/50 transition-shadow border border-slate-100" />
                    <div className="absolute inset-2 bg-gradient-to-br from-slate-50 to-white rounded-2xl" />
                    
                    {/* Icon */}
                    <div className={`relative z-10 ${step.color} transition-transform duration-500 group-hover:scale-110`}>
                      {step.icon}
                    </div>
                    
                    {/* Pulsing Outer Ring */}
                    <div className={`absolute inset-[-4px] rounded-[2.2rem] border-2 ${step.borderColor} opacity-0 group-hover:opacity-100 transition-opacity animate-pulse`} />
                  </div>

                  {/* Glass Card - Forced h-full for symmetry */}
                  <div className="bg-white/40 backdrop-blur-sm border border-slate-100/50 rounded-[2rem] p-6 pt-10 relative w-full h-full flex flex-col transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-slate-200/50 group-hover:-translate-y-2">
                    {/* Top Accent Line - Hidden on first and last for symmetry as requested */}
                    {index !== 0 && index !== steps.length - 1 && (
                      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 ${step.color.replace('text-', 'bg-')} rounded-b-full opacity-50 group-hover:opacity-100 transition-opacity`} />
                    )}
                    
                    <h3 className="font-bold text-slate-900 mb-4 text-lg leading-tight group-hover:text-purple-600 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                      {step.desc}
                    </p>
                  </div>

                  {/* Step Label (Hidden on small) */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${step.color}`}>
                      Phase {index + 1}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Buttons - Centered and Premium */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <ScrollReveal delay={0.6}>
            <button className="group px-12 py-4 bg-[#1E1B4B] text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-purple-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-purple-900/10">
              REQUEST DEMO
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </button>
          </ScrollReveal>
          
          <ScrollReveal delay={0.7}>
            <button className="px-12 py-4 border-2 border-slate-200 text-slate-600 rounded-full font-bold text-lg hover:border-purple-600 hover:text-purple-600 transition-all hover:scale-105 active:scale-95">
              START PROGRAM
            </button>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
