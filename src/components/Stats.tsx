import { Code2, Target, CalendarClock, Users2 } from 'lucide-react';

const pillars = [
  {
    icon: <Code2 className="w-8 h-8 text-white" />,
    title: 'Application-Driven',
    desc: 'Students learn by doing, not by reading.',
    color: 'from-indigo-600 to-purple-600',
    accent: 'bg-indigo-600'
  },
  {
    icon: <Target className="w-8 h-8 text-white" />,
    title: 'Outcome-Focused',
    desc: 'Every internship leads to a tangible project.',
    color: 'from-rose-500 to-pink-600',
    accent: 'bg-rose-500'
  },
  {
    icon: <CalendarClock className="w-8 h-8 text-white" />,
    title: 'Flexible & Self-Paced',
    desc: 'Designed to fit around school schedules.',
    color: 'from-blue-500 to-cyan-500',
    accent: 'bg-blue-500'
  },
  {
    icon: <Users2 className="w-8 h-8 text-white" />,
    title: 'Mentor-Guided',
    desc: 'Learn with expert mentors and get real feedback.',
    color: 'from-emerald-500 to-teal-600',
    accent: 'bg-emerald-500'
  }
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">
            What Is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Virtual Internship</span>?
          </h2>
          <div className="space-y-4">
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              A virtual internship is a structured, online work experience where students engage in real-world, industry-inspired tasks - designed to simulate how professionals actually work.
            </p>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Unlike traditional learning models that focus on theory, virtual internships are <span className="font-bold text-slate-700">application-driven</span>, <span className="font-bold text-slate-700">outcome-focused</span>, <span className="font-bold text-slate-700">flexible</span>, and <span className="font-bold text-slate-700">mentor-guided</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-[2rem] p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border border-slate-100/80"
            >
              {/* Floating Icon */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className="scale-90">{p.icon}</div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">
                {p.desc}
              </p>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-5 left-1/2 -translate-x-1/2 w-10 h-1 ${p.accent} rounded-full opacity-40 group-hover:w-16 group-hover:opacity-100 transition-all duration-300`} />
            </div>
          ))}
        </div>

        {/* Horizontal Info Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-6 md:p-8 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] border border-purple-100/50 flex flex-col md:flex-row items-center gap-6 group hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
              <span className="text-3xl">🎓</span>
            </div>
            <p className="text-slate-700 font-medium leading-relaxed text-center md:text-left">
              While such experiences have traditionally been available only to university students, <span className="text-purple-700 font-bold">Skillzza</span> brings this powerful model to <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-md font-bold text-sm">Grades 6-12</span> - ensuring early exposure in a safe, age-appropriate environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


