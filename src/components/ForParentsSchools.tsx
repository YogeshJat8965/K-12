import { useState } from 'react';
import { designedFor, forParents, forSchools } from '../virtualInternship';
import { ShieldCheck, CheckCircle2, ArrowRight, GraduationCap } from 'lucide-react';
import parentsImg from '../assets/virtual internship/For Parents.jpeg';
import schoolsImg from '../assets/virtual internship/For Schools & Educators.jpeg';

export default function ForParentsSchools() {
  const [activeTab, setActiveTab] = useState<'parents' | 'schools'>('parents');

  return (
    <section id="parents" className="py-12 lg:py-16 bg-gradient-to-t from-violet-900 via-violet-400 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── 1. Designed For Students Strip ── */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="mb-4">
              Designed Specifically for  <span className="text-[#A855F7]">School Students</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-normal">
              Virtual Internships are not adapted from regular programmes - they are purpose-built for school learners, with age-appropriate pacing, safeguards, and support.

            </p>
          </div>

          <div className="flex overflow-x-auto pt-4 pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 gap-4 lg:gap-6 snap-x custom-scrollbar">
            {designedFor.map((item, i) => {
              const icons = ['🎯', '🪜', '⏱️', '🛡️', '🧑‍🏫'];
              const colors = ['bg-sky-100 text-sky-600', 'bg-orange-100 text-orange-600', 'bg-green-100 text-green-600', 'bg-purple-100 text-purple-600', 'bg-pink-100 text-pink-600'];

              // Split item into title and desc roughly
              const parts = item.split(': ');
              const title = parts.length > 1 ? parts[0] : `Feature ${i + 1}`;
              const desc = parts.length > 1 ? parts[1] : item;

              return (
                <div key={i} className="min-w-[280px] lg:min-w-0 bg-white rounded-3xl p-8 shadow-sm border border-purple-200 snap-center hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4 ${colors[i % colors.length]}`}>
                    {icons[i % icons.length]}
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg mb-3">{title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-normal">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 2. Trust Tabs (Parents / Schools) ── */}
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-purple-200 overflow-hidden relative">

          {/* Tab Switcher */}
          <div className="flex border-b border-slate-100 relative z-10 bg-white">
            <button
              onClick={() => setActiveTab('parents')}
              className={`flex-1 py-6 flex items-center justify-center font-bold text-xl lg:text-2xl transition-all ${activeTab === 'parents'
                ? 'text-blue-600 bg-blue-50/50'
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                }`}
            >
              For Parents
            </button>
            <div className="w-px bg-slate-100" />
            <button
              onClick={() => setActiveTab('schools')}
              className={`flex-1 py-6 flex items-center justify-center font-bold text-xl lg:text-2xl transition-all ${activeTab === 'schools'
                ? 'text-emerald-600 bg-emerald-50/50'
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                }`}
            >
              For Schools
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8 lg:p-12 relative overflow-hidden">
            {/* Background decorative blob */}
            <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[100px] pointer-events-none transition-colors duration-1000 ${activeTab === 'parents' ? 'bg-blue-50/60' : 'bg-emerald-50/60'
              }`} />

            {/* PARENTS CONTENT */}
            {activeTab === 'parents' && (
              <div className="flex flex-col lg:flex-row gap-12 items-center animate-fade-in relative z-10">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                    <ShieldCheck className="w-4 h-4" /> Trusted by Families
                  </div>
                  <h3 className="text-3xl lg:text-4xl text-slate-800 mb-4">
                    {forParents.subtitle}
                  </h3>
                  <div className="space-y-4 mt-8">
                    {forParents.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-blue-500 transition-all">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed font-normal">{point}</p>
                      </div>
                    ))}
                  </div>
                  <button className="mt-10 inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                    View Parent Dashboard <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 w-full relative">
                  <img
                    src={parentsImg}
                    alt="Parent and child learning"
                    className="w-full h-[400px] object-cover rounded-[2rem] relative z-10 shadow-2xl"
                  />
                </div>
              </div>
            )}

            {/* SCHOOLS CONTENT */}
            {activeTab === 'schools' && (
              <div className="flex flex-col lg:flex-row gap-12 items-center animate-fade-in relative z-10">
                <div className="flex-1 w-full relative order-2 lg:order-1">
                  <img
                    src={schoolsImg}
                    alt="Modern classroom"
                    className="w-full h-[400px] object-cover rounded-[2rem] relative z-10 shadow-2xl"
                  />
                </div>
                <div className="flex-1 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                    <GraduationCap className="w-4 h-4" /> Partner with Us
                  </div>
                  <h3 className="text-3xl lg:text-4xl text-slate-800 mb-4">
                    {forSchools.subtitle}
                  </h3>
                  <div className="space-y-4 mt-8">
                    {forSchools.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed font-normal">{point}</p>
                      </div>
                    ))}
                  </div>
                  <button className="mt-10 inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
                    Request School Demo <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── 3. Trust Badges Strip ── */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 lg:gap-8 reveal">
          {['NEP 2020 Aligned', '100% Ad-Free & Safe', 'Industry Mentors', 'Verifiable Certificates'].map((badge, i) => (
            <div key={i} className="trust-badge-shine bg-white border border-slate-200 text-slate-600 font-bold text-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              {badge}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
