import { Zap, Cpu, BookOpenCheck, Users2, Award, Palette } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const benefits = [
  {
    icon: Zap,
    title: "Future-Ready Skills",
    desc: "Equipping students with essential digital skills that prepare them for the future workforce and creative economy.",
    gradient: "from-amber-400 to-orange-600",
    shape: "rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]", // Blob
  },
  {
    icon: Cpu,
    title: "Classroom Innovation",
    desc: "Integrating cutting-edge AI tools and creative methodologies to transform traditional classroom learning.",
    gradient: "from-blue-400 to-indigo-600",
    shape: "rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]", // Organic
  },
  {
    icon: BookOpenCheck,
    title: "Curriculum Aligned",
    desc: "Ensuring all learning modules are perfectly aligned with educational standards and the vision of NEP 2020.",
    gradient: "from-emerald-400 to-teal-600",
    shape: "rounded-[40%_60%_70%_30%_/_40%_50%_50%_60%]", // Squircle
  },
  {
    icon: Users2,
    title: "Collaborative Learning",
    desc: "Fostering a collaborative environment where students and educators can learn, create, and share together.",
    gradient: "from-purple-400 to-pink-600",
    shape: "rounded-[70%_30%_50%_50%_/_30%_30%_70%_70%]", // Shield-like
  },
  {
    icon: Award,
    title: "Recognition & Certification",
    desc: "Providing industry-recognized digital certificates and school-wide recognition for creative excellence.",
    gradient: "from-red-400 to-rose-600",
    shape: "rounded-[50%_50%_20%_80%_/_20%_80%_50%_50%]", // Teardrop
  },
  {
    icon: Palette,
    title: "Creative Tools",
    desc: "Access to professional-grade creative tools like Adobe Express and a wealth of educational resources.",
    gradient: "from-fuchsia-400 to-purple-600",
    shape: "rounded-[30%_70%_40%_60%_/_50%_30%_70%_50%]", // Star-ish
  }
];

export default function WhyProgramme() {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-24">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display tracking-tight leading-tight">
              Why This Programme?
            </h2>
            <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg font-medium">
              A comprehensive educational journey designed to empower the next generation of digital creators.
            </p>
          </ScrollReveal>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="p-8 rounded-3xl bg-[#FAFCFD] border border-slate-100 hover:border-[#FA0F00]/20 transition-all duration-500 group hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 flex flex-col h-full">
                
                {/* Abstract Geometric Icon */}
                <div className="mb-8 relative w-16 h-16">
                  {/* Background Shape */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-20 ${benefit.shape} transition-transform duration-700 group-hover:rotate-[30deg] group-hover:scale-125`}
                  />
                  {/* Floating Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <benefit.icon className={`w-8 h-8 text-slate-900 group-hover:text-white transition-colors duration-500 z-10`} strokeWidth={2} />
                  </div>
                  {/* Hover Background Fill */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 ${benefit.shape} transition-all duration-500 -z-0 scale-75 group-hover:scale-100`}
                  />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-display tracking-tight group-hover:text-[#FA0F00] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                  {benefit.desc}
                </p>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
