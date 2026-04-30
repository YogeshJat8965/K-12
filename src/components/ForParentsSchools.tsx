import { useState } from 'react';
import { forParents, forSchools, designedFor } from '../virtualInternship';
import { Check, Shield, Users, GraduationCap, Clock, Eye, Heart } from 'lucide-react';
import { MascotWithEyes } from './KidElements';

const designedIcons = [
  <GraduationCap className="w-5 h-5 text-white" />,
  <Users className="w-5 h-5 text-white" />,
  <Clock className="w-5 h-5 text-white" />,
  <Shield className="w-5 h-5 text-white" />,
  <Heart className="w-5 h-5 text-white" />,
];

const designedColors = [
  'bg-sky-500', 'bg-green-500', 'bg-orange-500', 'bg-pink-500', 'bg-yellow-500',
];

export default function ForParentsSchools() {
  const [activeTab, setActiveTab] = useState<'parents' | 'schools'>('parents');

  return (
    <section id="for-parents" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Designed For */}
        <div>
          <div className="text-center mb-12">
            <div className="reveal inline-flex items-center gap-2 bg-sky-100 text-sky-700 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Shield className="w-3.5 h-3.5" />
              Designed For Students
            </div>
            <h2 className="reveal font-display text-4xl md:text-5xl text-slate-800 flex items-center gap-3 justify-center flex-wrap">
              Built Around Your Child
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {designedFor.map((item, i) => {
              const [title, ...rest] = item.split(':');
              return (
                <div key={i} className={`reveal delay-${(i % 3 + 1) * 100} card-hover bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-100 group`}>
                  <div className={`w-10 h-10 ${designedColors[i]} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {designedIcons[i]}
                  </div>
                  <div className="font-black text-slate-800 text-sm mb-2">{title}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{rest.join(':').trim()}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tab switcher for Parents / Schools */}
        <div>
          {/* Tab buttons */}
          <div className="flex justify-center mb-10">
            <div className="bg-slate-100 rounded-2xl p-1.5 flex gap-1">
              <button
                onClick={() => setActiveTab('parents')}
                className={`px-8 py-3 rounded-xl font-black text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'parents'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <Eye className="w-4 h-4" />
                For Parents
              </button>
              <button
                onClick={() => setActiveTab('schools')}
                className={`px-8 py-3 rounded-xl font-black text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'schools'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                For Schools
              </button>
            </div>
          </div>

          {/* Tab content */}
          <div className="relative overflow-hidden" style={{ minHeight: 400 }}>
            {/* Parents tab */}
            <div className={`absolute inset-0 transition-all duration-400 ${
              activeTab === 'parents' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
            }`}>
              <div className="grid lg:grid-cols-2 gap-10">
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/8566490/pexels-photo-8566490.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Parent supporting child"
                    className="w-full h-56 object-cover object-center"
                  />
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 border border-orange-100">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 font-black text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                      <Eye className="w-3.5 h-3.5" />
                      For Parents
                    </div>
                    <h3 className="font-display text-2xl text-slate-800 mb-2">{forParents.subtitle}</h3>
                    <ul className="mt-4 space-y-3">
                      {forParents.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-600 text-sm font-semibold leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Mascot on the side */}
                <div className="hidden lg:flex flex-col items-center justify-center gap-6">
                  <MascotWithEyes />
                  <div className="text-center">
                    <div className="font-display text-2xl text-slate-800 mb-2">We've Got You Covered</div>
                    <p className="text-slate-500 text-sm">Full transparency, regular updates, and a dedicated support channel for parents.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schools tab */}
            <div className={`absolute inset-0 transition-all duration-400 ${
              activeTab === 'schools' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
            }`}>
              <div className="grid lg:grid-cols-2 gap-10">
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/8566510/pexels-photo-8566510.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Classroom learning"
                    className="w-full h-56 object-cover object-center"
                  />
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-green-100">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-black text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                      <GraduationCap className="w-3.5 h-3.5" />
                      For Schools
                    </div>
                    <h3 className="font-display text-2xl text-slate-800 mb-2">{forSchools.subtitle}</h3>
                    <ul className="mt-4 space-y-3">
                      {forSchools.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-600 text-sm font-semibold leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden lg:flex flex-col items-center justify-center gap-6">
                  <MascotWithEyes />
                  <div className="text-center">
                    <div className="font-display text-2xl text-slate-800 mb-2">Partner With Us</div>
                    <p className="text-slate-500 text-sm">Integrate Skillzza into your school's co-curricular program seamlessly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
