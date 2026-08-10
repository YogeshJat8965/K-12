import React from 'react';
import { CheckCircle, Zap, ShieldCheck } from 'lucide-react';

const explorerFeatures = [
  'Full community & circle access',
  'Weekly peer circles by subject & state',
  'Monthly live masterclasses',
  'Auto CPD from every event',
  'AI Lab challenges & lesson library',
  'Digital educator card'
];

const practitionerFeatures = [
  'Everything in Explorer',
  'Full 12-week AI Immersion Programme',
  'CCMM certification & digital badge',
  'Vedya AI priority access',
  'Full Skill Passport & appraisal-ready CPD report',
  'Leadership track & peer-mentor certification',
  'National Yugantar showcase eligibility'
];

export default function MembershipTiers() {
  return (
    <section className="w-full bg-[#FAFAFF] py-2 lg:py-4 font-poppins relative overflow-hidden border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#5B32EA] font-bold text-[12px] uppercase tracking-widest mb-4 block">
            MEMBERSHIP
          </span>
          <h2 className="text-[36px] sm:text-[42px] md:text-[46px] font-extrabold text-[#1A1A2E] leading-[1.15] tracking-tight mb-6">
            Two simple layers. Free to join.
          </h2>
          <p className="text-[#4B5563] font-medium text-[16px] md:text-[18px] leading-relaxed">
            Every educator gets full community access free, forever. One paid membership unlocks the complete AI Immersion Programme, certification and the full CPD passport.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-12">

          {/* Explorer Tier */}
          <div 
            onClick={() => window.location.href = '/login'}
            className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm flex flex-col relative group hover:border-gray-300 transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer"
          >
            <span className="text-[#64748B] font-bold text-[11px] uppercase tracking-widest mb-2 block">
              COMMUNITY · FREE FOREVER
            </span>
            <h3 className="text-[#1A1A2E] font-extrabold text-[32px] mb-2">Explorer</h3>
            <div className="flex flex-col mb-8 pb-8 border-b border-gray-100">
              <span className="text-[#1A1A2E] font-black text-[40px] leading-none mb-2">₹0</span>
              <span className="text-[#64748B] font-medium text-[14px]">no card needed</span>
            </div>

            <ul className="flex flex-col gap-4 flex-grow mb-10">
              {explorerFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
                  <span className="text-[#4B5563] font-medium text-[15px]">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#F8F9FA] p-4 rounded-xl text-center">
              <p className="text-[#4B5563] font-semibold text-[13px] leading-relaxed">
                Perfect for getting started and earning CPD from live sessions.
              </p>
            </div>
          </div>

          {/* Practitioner Tier */}
          <div 
            onClick={() => window.location.href = '/login'}
            className="bg-[#1A1A2E] rounded-3xl p-8 lg:p-10 border border-[#2A2A4A] shadow-[0_20px_60px_rgba(91,50,234,0.15)] flex flex-col relative group transform md:-translate-y-4 hover:-translate-y-5 transition-all duration-300 overflow-hidden cursor-pointer hover:shadow-[0_30px_70px_rgba(91,50,234,0.25)]"
          >

            {/* Glowing accents */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#5B32EA]/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#EC4899]/10 rounded-full blur-[60px] pointer-events-none"></div>

            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#5B32EA] to-[#EC4899]"></div>

            <span className="text-[#A78BFA] font-bold text-[11px] uppercase tracking-widest mb-2 block flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" /> PRO · CERTIFIED · EVERYTHING, ONE PRICE
            </span>
            <h3 className="text-white font-extrabold text-[32px] mb-2">Practitioner</h3>
            <div className="flex flex-col mb-8 pb-8 border-b border-[#2A2A4A]">
              <span className="text-white font-black text-[40px] leading-none mb-2">₹899 <span className="text-[20px] text-gray-400 font-bold">/ year</span></span>
              <span className="text-gray-400 font-medium text-[14px]">Billed annually</span>
            </div>

            <ul className="flex flex-col gap-4 flex-grow mb-10 relative z-10">
              {practitionerFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2 bg-emerald-400"></span>
                  <span className={`font-medium text-[15px] ${idx === 0 ? 'text-white font-semibold' : 'text-gray-300'}`}>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#5B32EA] p-4 rounded-xl text-center shadow-lg shadow-indigo-500/20 relative z-10">
              <p className="text-white font-semibold text-[13px] leading-relaxed">
                Everything to get certified, save time and lead - under ₹75 a month.
              </p>
            </div>
          </div>

        </div>

        {/* Govt/Rural Banner */}
        <div className="w-full bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-full">
            <h4 className="text-[#1A1A2E] font-bold text-[16px] mb-2">Government & rural school teachers</h4>
            <p className="text-[#4B5563] text-[14px] leading-relaxed font-medium lg:whitespace-nowrap">
              You are eligible for <strong className="text-emerald-700">free Practitioner access</strong>. Apply through your District Education Office partner to get your account upgraded automatically.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
