import React from 'react';
import { CheckCircle2, Clock, UploadCloud, Download, Plus, FileText, ChevronRight, Award, ShieldCheck, FilePlus, Timer } from 'lucide-react';

export default function EducatorPassport() {
  const cpdSteps = [
    {
      title: '1. Show up',
      desc: 'Attend any masterclass, workshop or AI Lab, or log training you did elsewhere.'
    },
    {
      title: '2. Logged for you',
      desc: 'CPD hours land in your passport automatically. No forms, no chasing signatures.'
    },
    {
      title: '3. Export at appraisal',
      desc: 'Download one clean, dated report for your review or re-registration.'
    }
  ];

  const features = [
    { title: 'Credited automatically', desc: 'Every event logs CPD the moment you attend.' },
    { title: 'Add your own training', desc: 'School INSET and external courses live in one record.' },
    { title: '8 sponsored hours a year', desc: 'Free, on top of everything you attend.' },
    { title: 'Appraisal-ready report', desc: 'Export a clean annual PDF in one click.' }
  ];

  return (
    <section className="w-full bg-[#FAFAFF] py-20 lg:py-28 font-poppins relative overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Top Centered Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#5B32EA] font-bold text-[12px] uppercase tracking-widest mb-4 block">
            THE PASSPORT
          </span>
          <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-extrabold text-[#1A1A2E] leading-[1.15] tracking-tight mb-6 lg:whitespace-nowrap">
            Your CPD, tracked and appraisal-ready.
          </h2>
          <p className="text-[#4B5563] font-medium text-[16px] md:text-[18px] leading-relaxed">
            Most teachers lose hours chasing certificates before every review. The Digital Skill Passport records your professional growth as it happens - then hands you a clean report when you need it.
          </p>
        </div>

        {/* 3-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">

          {/* Column 1: How it adds up */}
          <div className="flex flex-col">
            <h3 className="text-[#1A1A2E] font-bold text-[20px] mb-6">How your CPD adds up</h3>
            <div className="flex flex-col gap-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-indigo-100">
              {cpdSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 relative z-10">
                  <div className="w-[24px] h-[24px] rounded-full bg-white border-2 border-[#5B32EA] flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-[#1A1A2E] font-bold text-[16px] mb-1">{step.title}</h4>
                    <p className="text-[#4B5563] text-[14px] leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What it does */}
          <div className="flex flex-col">
            <h3 className="text-[#1A1A2E] font-bold text-[20px] mb-6">What the passport does</h3>
            <div className="flex flex-col gap-5">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#5B32EA]/30 transition-colors">
                  <h4 className="text-[#1A1A2E] font-bold text-[14px] mb-1">{feature.title}</h4>
                  <p className="text-[#64748B] text-[12px] leading-snug font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Right Content - Mock UI Dashboard */}
          <div className="flex justify-center relative group w-full">
            {/* Background glowing blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#5B32EA]/10 blur-[80px] rounded-full -z-10 group-hover:bg-[#5B32EA]/20 transition-all duration-700"></div>

            {/* Ledger Card */}
            <div className="w-full max-w-[420px] bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">

              {/* Header inside card */}
              <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
                <div>
                  <h4 className="text-[#5B32EA] font-bold text-[11px] tracking-widest uppercase mb-1">YOUR CPD LEDGER</h4>
                  <h3 className="text-[#1A1A2E] font-extrabold text-[24px]">CPD Hours</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#5B32EA]">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Stats Rows */}
              <div className="flex flex-col gap-5">

                <div className="flex items-center justify-between group/row cursor-pointer p-2 -mx-2 rounded-lg hover:bg-[#F8F9FA] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8E6FF] text-[#5B32EA] flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-[#1A1A2E] font-bold text-[15px]">Skillzza sessions</h5>
                      <p className="text-[#64748B] text-[12px] font-medium">Verified automatically</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <span className="text-[#1A1A2E] font-black text-[18px]">5.0</span>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover/row:text-[#5B32EA] transition-colors" />
                  </div>
                </div>

                <div className="flex items-center justify-between group/row cursor-pointer p-2 -mx-2 rounded-lg hover:bg-[#F8F9FA] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                      <FilePlus className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-[#1A1A2E] font-bold text-[15px]">External & school</h5>
                      <p className="text-[#64748B] text-[12px] font-medium">Self-reported logs</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <span className="text-[#1A1A2E] font-black text-[18px]">3.0</span>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover/row:text-[#5B32EA] transition-colors" />
                  </div>
                </div>

                <div className="flex items-center justify-between group/row cursor-pointer p-2 -mx-2 rounded-lg hover:bg-[#F8F9FA] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                      <Timer className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-[#1A1A2E] font-bold text-[15px]">Pending review</h5>
                      <p className="text-[#64748B] text-[12px] font-medium">Under verification</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <span className="text-[#1A1A2E] font-black text-[18px]">2.0</span>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover/row:text-[#5B32EA] transition-colors" />
                  </div>
                </div>

              </div>

              {/* Total Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h5 className="text-[#64748B] font-bold text-[13px] uppercase tracking-wider mb-0.5">Total this year</h5>
                  <div className="text-[#1A1A2E] font-black text-[32px] leading-none">8.0 <span className="text-[16px] text-[#64748B] font-bold">hrs</span></div>
                </div>
                <button className="bg-[#5B32EA] text-white p-3 rounded-full hover:scale-105 hover:bg-[#4A25C7] transition-all shadow-md shadow-indigo-500/30">
                  <Download className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
