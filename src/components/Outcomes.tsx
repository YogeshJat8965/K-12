import { outcomes } from '../virtualInternship';
import { Award, FolderOpen, CreditCard, Star, MessageSquare, BarChart3 } from 'lucide-react';
import { MiniEyes } from './KidElements';

const outcomeIcons = [
  <Award className="w-6 h-6 text-yellow-600" />,
  <FolderOpen className="w-6 h-6 text-sky-600" />,
  <CreditCard className="w-6 h-6 text-green-600" />,
  <Star className="w-6 h-6 text-orange-600" />,
  <MessageSquare className="w-6 h-6 text-pink-600" />,
  <BarChart3 className="w-6 h-6 text-blue-600" />,
];

const iconColors = [
  'bg-yellow-100', 'bg-sky-100', 'bg-green-100',
  'bg-orange-100', 'bg-pink-100', 'bg-blue-100',
];

export default function Outcomes() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-sky-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <div className="reveal inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Award className="w-3.5 h-3.5" />
              What You Earn
            </div>
            <h2 className="reveal font-display text-4xl md:text-5xl text-slate-800 mb-6 flex items-center gap-3 flex-wrap">
              Real Outcomes,
              <MiniEyes size={50} className="hidden sm:inline-flex" />
            </h2>
            <p className="reveal text-slate-500 text-lg mb-10 leading-relaxed font-display text-2xl">
              <span className="gradient-text-sky">Not Just Certificates</span>
            </p>
            <p className="reveal text-slate-500 text-lg mb-10 leading-relaxed">
              At the end of every internship, students walk away with tangible proof of their work and growth.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {outcomes.map((o, i) => (
                <div
                  key={i}
                  className={`reveal delay-${(i % 4 + 1) * 100} card-hover bg-white rounded-2xl p-5 shadow-md border border-slate-100 flex items-start gap-4`}
                >
                  <div className={`w-12 h-12 ${iconColors[i]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {outcomeIcons[i]}
                  </div>
                  <div>
                    <div className="font-black text-slate-800 text-sm mb-1">{o.title}</div>
                    <div className="text-slate-500 text-xs leading-relaxed">{o.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="reveal-right relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Student celebrating achievement"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl shadow-2xl p-5 float">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-2">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="text-white font-black text-sm text-center">Verified</div>
              <div className="text-white/80 text-xs text-center">Certificate</div>
            </div>

            {/* Passport card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 float float-delay border border-slate-100">
              <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <div className="font-black text-slate-800 text-xs">Digital Skill Passport</div>
                <div className="text-slate-500 text-[10px]">Shareable via QR code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
