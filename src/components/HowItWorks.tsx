import { howItWorks } from '../virtualInternship';
import { Clock, Calendar, Monitor, Search, GraduationCap, BookOpen, Hammer, Trophy } from 'lucide-react';
import { RocketMascot } from './KidElements';

const stepIcons = [
  <Search className="w-7 h-7 text-white" />,
  <GraduationCap className="w-7 h-7 text-white" />,
  <BookOpen className="w-7 h-7 text-white" />,
  <Hammer className="w-7 h-7 text-white" />,
  <Trophy className="w-7 h-7 text-white" />,
];

const stepColors = [
  { bg: 'bg-sky-500', light: 'bg-sky-50 border-sky-200', text: 'text-sky-600' },
  { bg: 'bg-green-500', light: 'bg-green-50 border-green-200', text: 'text-green-600' },
  { bg: 'bg-orange-500', light: 'bg-orange-50 border-orange-200', text: 'text-orange-600' },
  { bg: 'bg-yellow-500', light: 'bg-yellow-50 border-yellow-200', text: 'text-yellow-600' },
  { bg: 'bg-pink-500', light: 'bg-pink-50 border-pink-200', text: 'text-pink-600' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-sky-100 text-sky-700 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Search className="w-3.5 h-3.5" />
            The Journey
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl text-slate-800 mb-4 flex items-center gap-3 justify-center flex-wrap">
            {howItWorks.title}
          </h2>
          <p className="reveal text-slate-500 text-lg max-w-xl mx-auto mb-8">
            {howItWorks.subtitle}
          </p>

          {/* Quick facts */}
          <div className="reveal flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-slate-100">
              <Calendar className="w-4 h-4 text-sky-500" />
              <span className="font-bold text-slate-700 text-sm">{howItWorks.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-slate-100">
              <Clock className="w-4 h-4 text-orange-500" />
              <span className="font-bold text-slate-700 text-sm">{howItWorks.weeklyEffort} / week</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-slate-100">
              <Monitor className="w-4 h-4 text-green-500" />
              <span className="font-bold text-slate-700 text-sm">{howItWorks.format}</span>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-sky-300 via-green-300 via-orange-300 to-pink-300 rounded-full z-0" />

          <div className="grid lg:grid-cols-5 gap-6 relative z-10">
            {howItWorks.steps.map((step, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100} flex flex-col items-center text-center`}>
                <div className={`w-16 h-16 ${stepColors[i].bg} rounded-2xl flex items-center justify-center shadow-lg mb-5 wiggle-hover cursor-default`}>
                  {stepIcons[i]}
                </div>

                <div className={`${stepColors[i].light} border-2 rounded-2xl p-5 w-full card-hover`}>
                  <div className={`font-black text-xs uppercase tracking-wider mb-2 ${stepColors[i].text}`}>
                    Step {step.num}
                  </div>
                  <h3 className="font-display text-lg text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal mt-20 rounded-3xl overflow-hidden shadow-2xl relative">
          <img
            src="https://images.pexels.com/photos/8566328/pexels-photo-8566328.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Students working together"
            className="w-full h-56 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-blue-600/50 flex items-center px-10">
            <div className="flex items-center gap-6">
              <div className="hidden md:block">
                <RocketMascot />
              </div>
              <div>
                <h3 className="font-display text-3xl text-white mb-2">Your child's journey starts with one click.</h3>
                <a
                  href="#quiz"
                  className="inline-flex items-center gap-2 mt-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 font-black px-8 py-3 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <Search className="w-4 h-4" />
                  Discover Their Track
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
