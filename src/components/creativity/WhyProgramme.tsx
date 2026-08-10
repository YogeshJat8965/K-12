import { Layout, Sparkles, Mic, Rocket, Palette, Users } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const benefits = [
  {
    icon: Layout,
    title: "One studio for every project",
    desc: "A single editor that does it all - students can turn a written biography into a short film, or build a narrated science explainer with music, in just a few steps.",
    gradient: "from-amber-400 to-orange-600",
    shape: "rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]",
  },
  {
    icon: Sparkles,
    title: "AI that sparks ideas",
    desc: "Built-in generative AI helps students break through a blank page and create original, high-quality images ready to drop straight into a project.",
    gradient: "from-blue-400 to-indigo-600",
    shape: "rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]",
  },
  {
    icon: Mic,
    title: "Give lessons a voice",
    desc: "Students record their own narration and use it to bring animated characters to life - a fresh way to practise communication while they create.",
    gradient: "from-emerald-400 to-teal-600",
    shape: "rounded-[40%_60%_70%_30%_/_40%_50%_50%_60%]",
  },
  {
    icon: Rocket,
    title: "A head start for every project",
    desc: "Thousands of education-focused templates, graphics, photos and videos mean students never have to begin from scratch.",
    gradient: "from-purple-400 to-pink-600",
    shape: "rounded-[70%_30%_50%_50%_/_30%_30%_70%_70%]",
  },
  {
    icon: Palette,
    title: "Draw, paint and explore",
    desc: "A full set of digital art tools - more than fifty brushes from charcoal to watercolour, plus drawing templates and effects to play with.",
    gradient: "from-red-400 to-rose-600",
    shape: "rounded-[50%_50%_20%_80%_/_20%_80%_50%_50%]",
  },
  {
    icon: Users,
    title: "Better together",
    desc: "Students build the same project as a team inside Adobe Express, sharing feedback and following each other’s progress as the work takes shape.",
    gradient: "from-fuchsia-400 to-purple-600",
    shape: "rounded-[30%_70%_40%_60%_/_50%_30%_70%_50%]",
  }
];

export default function WhyProgramme() {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display tracking-tight leading-tight px-4">
              What students can create with Adobe Express
            </h2>

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
