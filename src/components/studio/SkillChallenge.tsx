import { motion } from 'framer-motion';
import CountUp from './CountUp';
import ScrollReveal from '../ScrollReveal';

const challenges = [
  {
    percentage: 87,
    label: "Skill Gaps in K-12 Education",
    color: "from-purple-600 to-indigo-600"
  },
  {
    percentage: 72,
    label: "Limited Career Alignment in School Activities",
    color: "from-purple-600 to-indigo-600"
  },
  {
    percentage: 68,
    label: "Low Measurable Skill Tracking",
    color: "from-purple-600 to-indigo-600"
  },
  {
    percentage: 81,
    label: "Minimal Real-World Application Exposure",
    color: "from-purple-600 to-indigo-600"
  },
  {
    percentage: 94,
    label: "High Demand for Future Skills Integration",
    color: "from-purple-600 to-indigo-600"
  }
];

export default function SkillChallenge() {
  return (
    <section className="py-12 bg-[#F8F7FF] text-slate-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200/50 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/50 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <ScrollReveal>
            <div className="inline-block px-4 py-1.5 bg-purple-600/10 border border-purple-600/20 rounded-full text-purple-600 font-bold text-sm tracking-widest uppercase mb-6">
              THE CHALLENGE
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight text-slate-900">
              Bridging the <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Skills Gap</span> in K-12 Education
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Independent research across K-12 institutions reveals systemic gaps in how schools 
              prepare students for an AI-driven world. Our Skill Studios are designed to close 
              these gaps with measurable outcomes.
            </p>
          </ScrollReveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {challenges.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-purple-200 shadow-sm hover:shadow-xl hover:shadow-purple-200/30 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between overflow-hidden">
                <div className="relative z-10">
                  <div className={`text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-br ${item.color}`}>
                    <CountUp to={item.percentage} suffix="%" duration={2.5} />
                  </div>
                  
                  {/* Stylized Progress Bar */}
                  <div className="w-full h-2 bg-slate-100 rounded-full mb-6 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 + 0.5 }}
                      className={`h-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>

                  <p className="text-slate-700 font-bold text-lg leading-snug">
                    {item.label}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
