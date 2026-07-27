import { ShieldCheck, Eye, Lock, Users, GraduationCap, Clock } from 'lucide-react';
import standingMan from '../../assets/AI Playground/standing man.webp';
import ScrollReveal from '../ScrollReveal';

export default function SafetySection() {
  const safetyPoints = [
    {
      title: "Content Moderation, Always On",
      desc: "Every conversation is scanned in real-time against child-safety policies - inappropriate content is blocked before it ever reaches the student.",
      icon: <ShieldCheck className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Parent Dashboard",
      desc: "Parents see their child's agents, conversation summaries, and time spent - complete visibility without intrusive monitoring.",
      icon: <Eye className="w-6 h-6 text-purple-600" />
    },
    {
      title: "No Personal Data Sharing",
      desc: "Agents never ask for real names, contact details, addresses, or personal information. Full stop.",
      icon: <Lock className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Teacher-Moderated at School",
      desc: "When deployed in classrooms, teachers have admin-level visibility into cohort usage and student creations.",
      icon: <Users className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Educator-Approved Agents",
      desc: "Every prebuilt agent is designed with curriculum experts and pre-tested with age-appropriate safeguards.",
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Time & Usage Limits",
      desc: "Built-in guardrails help families and schools set healthy usage limits - no endless scroll dynamics.",
      icon: <Clock className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Safe by Design. <span className="text-purple-600">Transparent by Default.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto italic">
              "Because 'AI for kids' should mean safety first - not safety eventually."
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Image */}
          <div className="w-full lg:w-[45%]">
            <ScrollReveal>
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-200 rounded-[3rem] rotate-3 scale-95 opacity-50 blur-2xl group-hover:rotate-0 transition-all duration-700" />
                <img 
                  src={standingMan} 
                  alt="AI Safety" 
                  className="relative w-full h-auto rounded-[3rem] shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Points */}
          <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
            {safetyPoints.map((point, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="flex flex-col items-start group">
                  <div className="mb-4 p-3 bg-white rounded-xl shadow-sm border border-slate-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    {point.icon}
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-purple-600 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Our Promise Footer */}
        {/* <div className="mt-24 pt-16 border-t border-slate-200 text-center">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Promise to Parents</h3>
            <p className="text-slate-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed italic">
              "If our Playground wouldn't feel right for our own children, it doesn't belong on your child's screen. Every design decision is made with that filter first."
            </p>
          </ScrollReveal>
        </div> */}
      </div>
    </section>
  );
}
