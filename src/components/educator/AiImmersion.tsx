import React, { useState } from 'react';
import { Lock, Clock, Award, FolderCheck, ChevronRight } from 'lucide-react';
import imgStage1 from '../../assets/educator circle/ai immersion.webp';
import imgStage2 from '../../assets/educator circle/lesson design.webp';
import imgStage3 from '../../assets/educator circle/ai powered.webp';
import imgOrientation from '../../assets/educator circle/ai orientation.webp';
import imgDigital from '../../assets/educator circle/digital.webp';
import imgCenter from '../../assets/educator circle/teacher at center.png';
import imgHero from '../../assets/educator circle/heroimage.webp';
import imgRocket from '../../assets/educator circle/rocket.webp';
import imgBanner from '../../assets/educator circle/banner.webp';
import imgM1 from '../../assets/educator circle/stages/AI Orientation & Vedya AI Studio.png';
import imgM2 from '../../assets/educator circle/stages/Prompt Craft for Teachers.png';
import imgM3 from '../../assets/educator circle/stages/Lesson & Curriculum Design.png';
import imgM4 from '../../assets/educator circle/stages/Assessment, Feedback & Grading.png';
import imgM5 from '../../assets/educator circle/stages/Personalised & Inclusive Learning.png';
import imgM6 from '../../assets/educator circle/stages/Digital Creativity with Adobe.png';
import imgM7 from '../../assets/educator circle/stages/Beat the Admin: AI for Workload.png';
import imgM8 from '../../assets/educator circle/stages/Responsible AI & DPDP.png';
import imgM9 from '../../assets/educator circle/stages/Lead the Change.png';
import imgM10 from '../../assets/educator circle/stages/Showcase & Certification.png';

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
        takeaway: 'Your AI readiness profile',
        image: imgM1
      },
      {
        id: 'M2',
        title: 'Prompt Craft for Teachers',
        desc: 'The one skill everything else builds on. Learn to brief AI like a teaching assistant, for your subject and board.',
        timing: 'Week 2–3',
        cpd: '3 hrs',
        takeaway: 'Your subject prompt library',
        image: imgM2
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
        takeaway: 'A unit of AI-augmented lessons',
        image: imgM3
      },
      {
        id: 'M4',
        title: 'Assessment, Feedback & Grading',
        desc: 'Generate question banks, mark against rubrics and draft personalised feedback in minutes - and win back your evenings.',
        timing: 'Week 6',
        cpd: '3 hrs',
        takeaway: 'Your AI assessment toolkit',
        image: imgM4
      },
      {
        id: 'M5',
        title: 'Personalised & Inclusive Learning',
        desc: 'Surface learning gaps early, differentiate for mixed-ability rooms, and support neurodiverse and multilingual learners.',
        timing: 'Week 7',
        cpd: '3 hrs',
        takeaway: 'A personalised learning plan',
        image: imgM5
      },
      {
        id: 'M6',
        title: 'Digital Creativity with Adobe',
        desc: 'Combine Adobe creativity tools with AI to build rich, multimodal projects across arts, STEM and humanities.',
        timing: 'Week 8',
        cpd: '3 hrs',
        takeaway: 'A multimodal project template',
        image: imgM6
      },
      {
        id: 'M7',
        title: 'Beat the Admin: AI for Workload',
        desc: 'Report-card comments, parent messages, worksheets and lesson admin - templated and automated so paperwork stops eating your week.',
        timing: 'Week 9',
        cpd: '3 hrs',
        takeaway: 'Your admin automation pack',
        image: imgM7
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
        takeaway: 'Your classroom AI charter',
        image: imgM8
      },
      {
        id: 'M9',
        title: 'Lead the Change',
        desc: 'For senior teachers and HODs - run a school AI audit, mentor peers and build a school-wide roadmap against CCMM standards.',
        timing: 'Week 11',
        cpd: '3 hrs',
        takeaway: 'Your school AI roadmap',
        image: imgM9
      },
      {
        id: '★',
        title: 'Capstone · Showcase & Certification',
        desc: 'Present your AI-integrated classroom project to the Circle. Earn your certificate, CCMM badge and updated passport.',
        timing: 'Week 12',
        cpd: '2 hrs',
        takeaway: 'Skillzza AI Educator Certificate + badge',
        image: imgM10
      }
    ]
  }
];

export default function AiImmersion() {
  const [activeTab, setActiveTab] = useState(1);
  const activeStage = stagesData.find(s => s.id === activeTab);

  return (
    <section className="w-full bg-white font-poppins py-2 lg:py-4 relative overflow-hidden">

      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8E6FF] rounded-full blur-[120px] opacity-40 pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[1050px] mx-auto mb-16">
          <span className="text-[#5B32EA] font-bold text-[12px] uppercase tracking-widest mb-4 block">
            THE AI IMMERSION PROGRAMME
          </span>
          <h2 className="text-[30px] sm:text-[38px] md:text-[42px] font-extrabold text-[#1A1A2E] leading-[1.15] tracking-tight mb-6 lg:whitespace-nowrap">
            12 weeks, three stages, one classroom-ready portfolio.
          </h2>
          <p className="text-[#4B5563] font-medium text-[16px] md:text-[18px] leading-relaxed max-w-[950px]">
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

        {/* Alternating Module Rows */}
        <div className="flex flex-col gap-16 lg:gap-24 mb-20 max-w-6xl mx-auto">
          {activeStage?.modules.map((mod, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
            >
              
              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#E8E6FF] text-[#5B32EA] flex items-center justify-center font-black text-[16px]">
                    {mod.id}
                  </div>
                  <h4 className="text-[#1A1A2E] font-bold text-[20px] lg:text-[26px]">{mod.title}</h4>
                </div>
                
                <p className="text-[#4B5563] text-[16px] lg:text-[17px] leading-relaxed font-medium mb-8">
                  {mod.desc}
                </p>
                
                {/* Meta info stacked */}
                <div className="flex flex-col gap-4 text-[14px] font-medium w-full">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 w-full">
                    <Clock className="w-5 h-5 text-gray-400 shrink-0" />
                    <span className="text-[#64748B] uppercase tracking-wider text-[11px] font-bold w-20 shrink-0">Timing:</span>
                    <span className="text-[#1A1A2E] font-semibold">{mod.timing}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#F8F9FF] rounded-lg p-3 w-full">
                    <Award className="w-5 h-5 text-indigo-300 shrink-0" />
                    <span className="text-[#5B32EA] uppercase tracking-wider text-[11px] font-bold w-20 shrink-0">CPD:</span>
                    <span className="text-[#5B32EA] font-bold bg-white px-3 py-1 rounded-md shadow-sm">{mod.cpd}</span>
                  </div>
                  <div className="flex items-start sm:items-center gap-3 bg-emerald-50 rounded-lg p-3 w-full">
                    <FolderCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 sm:mt-0" />
                    <span className="text-emerald-700 uppercase tracking-wider text-[11px] font-bold w-20 shrink-0 mt-1 sm:mt-0">Takeaway:</span>
                    <span className="text-[#1A1A2E] font-semibold leading-snug">{mod.takeaway}</span>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-gray-100 relative group">
                  <div className="absolute inset-0 bg-[#5B32EA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <img 
                    src={mod.image} 
                    alt={mod.title} 
                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
              </div>

            </div>
          ))}
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
