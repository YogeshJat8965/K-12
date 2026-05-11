import { Users, School, Code, GraduationCap } from 'lucide-react';
import CountUp from './CountUp';
import ScrollReveal from '../ScrollReveal';

const stats = [
  {
    icon: <Users className="w-10 h-10 text-purple-600" />,
    value: 150000,
    suffix: "",
    label: "Students",
    delay: 0
  },
  {
    icon: <School className="w-10 h-10 text-purple-600" />,
    value: 150,
    suffix: "+",
    label: "Partner Schools",
    delay: 0.1
  },
  {
    icon: <Code className="w-10 h-10 text-purple-600" />,
    value: 100,
    suffix: "+",
    label: "AI Projects",
    delay: 0.2
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-purple-600" />,
    value: 700,
    suffix: "+",
    label: "Educator Cohorts Upskilled",
    delay: 0.3
  }
];

export default function StudioStats() {
  return (
    <section className="py-12 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-5 px-4 ${
                index !== stats.length - 1 ? 'lg:border-r border-slate-100' : ''
              }`}
            >
              <ScrollReveal delay={stat.delay} direction="up">
                <div className="p-3 bg-purple-50 rounded-2xl">
                  {stat.icon}
                </div>
              </ScrollReveal>
              
              <div className="flex flex-col">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  <CountUp to={stat.value} suffix={stat.suffix} delay={stat.delay} />
                </div>
                <div className="text-slate-500 font-medium text-sm md:text-base uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
