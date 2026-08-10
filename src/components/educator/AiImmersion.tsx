import React, { useState } from 'react';
import { Lock, Clock, Award, FolderCheck, ChevronRight } from 'lucide-react';

const stagesData = [
  {
    id: 1,
    tabTitle: 'Stage 1 · Foundations',
    subtitle: 'Weeks 1–3 · get confident',
    modules: [
      {
        id: 'M1',
        title: 'AI Orientation & Vedya AI Studio',
        desc: 'A welcoming on-ramp for every teacher - no tech background needed. Meet Vedya AI hands-on and see how classrooms are already changing.',
        timing: 'Week 1',
        cpd: '2 hrs',
        takeaway: 'Your AI readiness profile'
      },
      {
        id: 'M2',
        title: 'Prompt Craft for Teachers',
        desc: 'The one skill everything else builds on. Learn to brief AI like a teaching assistant, for your subject and board.',
        timing: 'Week 2–3',
        cpd: '3 hrs',
        takeaway: 'Your subject prompt library'
      }
    ]
  },
  {
    id: 2,
    tabTitle: 'Stage 2 · Classroom Craft',
    subtitle: 'Weeks 4–9 · save time, teach better',
    modules: [
      {
        id: 'M3',
        title: 'Lesson & Curriculum Design',
        desc: 'Build differentiated lessons, content variations and a full teaching unit with AI - mapped to NCERT and your state curriculum.',
        timing: 'Week 4–5',
        cpd: '4 hrs',
        takeaway: 'A unit of AI-augmented lessons'
      },
      {
        id: 'M4',
        title: 'Assessment, Feedback & Grading',
        tag: 'time-saver',
        desc: 'Generate question banks, mark against rubrics and draft personalised feedback in minutes - and win back your evenings.',
        timing: 'Week 6',
        cpd: '3 hrs',
        takeaway: 'Your AI assessment toolkit'
      },
      {
        id: 'M5',
        title: 'Personalised & Inclusive Learning',
        desc: 'Surface learning gaps early, differentiate for mixed-ability rooms, and support neurodiverse and multilingual learners.',
        timing: 'Week 7',
        cpd: '3 hrs',
        takeaway: 'A personalised learning plan'
      },
      {
        id: 'M6',
        title: 'Digital Creativity with Adobe',
        desc: 'Combine Adobe creativity tools with AI to build rich, multimodal projects across arts, STEM and humanities.',
        timing: 'Week 8',
        cpd: '3 hrs',
        takeaway: 'A multimodal project template'
      },
      {
        id: 'M7',
        title: 'Beat the Admin: AI for Workload',
        tag: 'time-saver',
        desc: 'Report-card comments, parent messages, worksheets and lesson admin - templated and automated so paperwork stops eating your week.',
        timing: 'Week 9',
        cpd: '3 hrs',
        takeaway: 'Your admin automation pack'
      }
    ]
  },
  {
    id: 3,
    tabTitle: 'Stage 3 · Responsible & Leading',
    subtitle: 'Weeks 10–12 · own it and lead',
    modules: [
      {
        id: 'M8',
        title: 'Responsible AI & DPDP',
        desc: 'Build a principled practice - data privacy under the DPDP Act, academic integrity, bias, and critical thinking about AI.',
        timing: 'Week 10',
        cpd: '2 hrs',
        takeaway: 'Your classroom AI charter'
      },
      {
        id: 'M9',
        title: 'Lead the Change',
        desc: 'For senior teachers and HODs - run a school AI audit, mentor peers and build a school-wide roadmap against CCMM standards.',
        timing: 'Week 11',
        cpd: '3 hrs',
        takeaway: 'Your school AI roadmap'
      },
      {
        id: '★',
        title: 'Capstone · Showcase & Certification',
        desc: 'Present your AI-integrated classroom project to the Circle. Earn your certificate, CCMM badge and updated passport.',
        timing: 'Week 12',
        cpd: '2 hrs',
        takeaway: 'Skillzza AI Educator Certificate + badge'
      }
    ]
  }
];

export default function AiImmersion() {
  const [activeTab, setActiveTab] = useState(1);
  const activeStage = stagesData.find(s => s.id === activeTab);

  return (
    <section className="w-full bg-white font-poppins py-20 lg:py-28 relative overflow-hidden">

      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8E6FF] rounded-full blur-[120px] opacity-40 pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#5B32EA] font-bold text-[12px] uppercase tracking-widest mb-4 block">
            THE AI IMMERSION PROGRAMME
          </span>
          <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-extrabold text-[#1A1A2E] leading-[1.15] tracking-tight mb-6">
            12 weeks, three stages, one classroom-ready portfolio.
          </h2>
          <p className="text-[#4B5563] font-medium text-[16px] md:text-[18px] leading-relaxed">
            A hands-on upskilling journey aligned to NEP 2020 and NCERT. Each stage builds on the last - from confident first steps to leading AI in your school - and every module hands you a tool you can use in class the next morning. The full journey banks around 28 CPD hours, credited straight to your passport.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          {stagesData.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setActiveTab(stage.id)}
              className={`px-6 py-4 rounded-xl font-bold text-[15px] transition-all duration-300 w-full sm:w-auto flex flex-col items-center justify-center ${activeTab === stage.id
                ? 'bg-[#5B32EA] text-white shadow-lg shadow-indigo-500/25 scale-105'
                : 'bg-[#F8F9FA] text-[#4B5563] hover:bg-[#E8E6FF] hover:text-[#5B32EA]'
                }`}
            >
              <span>{stage.tabTitle}</span>
              <span className={`text-[11px] font-medium mt-1 ${activeTab === stage.id ? 'text-indigo-100' : 'text-[#64748B]'}`}>
                {stage.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* Content Table / Cards */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden mb-12">

          {/* Desktop Table Header (hidden on mobile) */}
          <div className="hidden lg:grid grid-cols-12 gap-6 p-6 bg-[#F8F9FA] border-b border-gray-100 text-[#64748B] font-bold text-[12px] uppercase tracking-wider">
            <div className="col-span-6">MODULE</div>
            <div className="col-span-2">TIMING</div>
            <div className="col-span-1">CPD</div>
            <div className="col-span-3">YOU'LL WALK AWAY WITH</div>
          </div>

          {/* Module List */}
          <div className="flex flex-col divide-y divide-gray-100">
            {activeStage?.modules.map((mod, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 p-6 hover:bg-[#FAFAFF] transition-colors items-center group">

                {/* Module Details */}
                <div className="lg:col-span-6 flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#E8E6FF] text-[#5B32EA] flex items-center justify-center font-black text-[16px]">
                    {mod.id}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-[#1A1A2E] font-bold text-[16px]">{mod.title}</h4>
                      {mod.tag && (
                        <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {mod.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[#4B5563] text-[13px] leading-relaxed font-medium">
                      {mod.desc}
                    </p>
                  </div>
                </div>

                {/* Timing (Mobile & Desktop) */}
                <div className="lg:col-span-2 flex items-center gap-2 lg:gap-0">
                  <span className="lg:hidden text-[#64748B] font-bold text-[11px] uppercase tracking-wider w-24">Timing:</span>
                  <div className="flex items-center gap-2 text-[#4B5563] font-semibold text-[14px]">
                    <Clock className="w-4 h-4 text-gray-400 hidden lg:block" />
                    {mod.timing}
                  </div>
                </div>

                {/* CPD (Mobile & Desktop) */}
                <div className="lg:col-span-1 flex items-center gap-2 lg:gap-0">
                  <span className="lg:hidden text-[#64748B] font-bold text-[11px] uppercase tracking-wider w-24">CPD:</span>
                  <div className="flex items-center gap-2 text-[#5B32EA] font-bold text-[14px] bg-[#E8E6FF] px-3 py-1 rounded-full w-fit">
                    {mod.cpd}
                  </div>
                </div>

                {/* Takeaway (Mobile & Desktop) */}
                <div className="lg:col-span-3 flex items-start lg:items-center gap-2 lg:gap-0">
                  <span className="lg:hidden text-[#64748B] font-bold text-[11px] uppercase tracking-wider w-24 shrink-0 mt-0.5">Takeaway:</span>
                  <div className="flex items-start gap-2 text-[#1A1A2E] font-semibold text-[14px]">
                    <FolderCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 lg:mt-0" />
                    {mod.takeaway}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
            <Lock className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-gray-300 text-[14px] leading-relaxed font-medium">
            <strong className="text-white">Member-exclusive</strong> the full curriculum - prompt libraries, subject toolkits and the CCMM maturity framework - unlocks the day you join. <span className="text-gray-400">Reserved for members and partner schools.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
