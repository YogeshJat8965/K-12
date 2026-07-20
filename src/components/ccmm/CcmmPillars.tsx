import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Target, BrainCircuit, Puzzle, ShieldCheck, Lightbulb, BookOpen, Presentation, Bot, TrendingUp, MonitorPlay, Cpu, Trophy, Monitor, Briefcase, Contact, Users, Route } from 'lucide-react';

export default function CcmmPillars() {
  const [activePillar, setActivePillar] = useState(0);

  // We define the data structure. Currently only Pillar 1 content is provided,
  // so we'll duplicate it for the others as placeholders until content is ready.
  const pillars = [
    {
      num: '1',
      title: 'A Universal Algorithm for Schools to Energise Young Brains',
      // subtitle: '(Aligned to the United Nations Sustainable Development Goals)',
      p1: 'CCMM is built as a universal, replicable model — a school in a metro and a school in a Tier-3 town are measured on the same principled framework, scaled to their context.',
      p2: 'At its heart is a simple conviction: AI education should not just create operators of technology, but thinkers who understand why technology must serve humanity. Every CCMM school is mapped directly to the UN Sustainable Development Goals, so students learn to apply emerging tech to real problems — clean water, climate, health, equity, and livelihoods.',
      sdgTitle: 'SDG alignment:',
      sdgText: 'Quality Education (4), Gender Equality (5), Decent Work & Economic Growth (8), Industry, Innovation & Infrastructure (9), Reduced Inequalities (10), and Partnerships for the Goals (17).',
      points: [
        {
          icon: <BrainCircuit className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'Computational and cognitive thinking',
          desc: 'embedded across subjects, not bolted on'
        },
        {
          icon: <Puzzle className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'Problem-first AI projects',
          desc: 'anchored to local SDG challenges'
        },
        {
          icon: <ShieldCheck className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'Ethics, bias, and responsible-AI literacy',
          desc: 'from the earliest grades'
        },
        {
          icon: <Lightbulb className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'A culture of curiosity, experimentation,',
          desc: 'and fearless engagement with new technology'
        }
      ]
    },
    {
      num: '2',
      title: 'Empowering Educators for a Better Tomorrow',
      subtitle: '',
      p1: 'No AI transformation survives without confident teachers. CCMM treats educators as the single most important multiplier — and invests in them first.',
      p2: "Through the CCMM journey, schools build a structured educator capability path supported by Vedya AI, Skillzza Nova's AI Co-Pilot, which acts as a always-on teaching assistant for lesson design, differentiation, assessment, and classroom AI integration.",
      sdgTitle: 'A school is only as AI-ready as its most hesitant teacher.',
      sdgText: 'CCMM closes that gap.',
      pointsTitle: 'This pillar delivers:',
      points: [
        {
          icon: <BookOpen className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'Continuous Professional Development (CPD)',
          desc: 'in AI pedagogy, mapped to clear competency levels'
        },
        {
          icon: <Presentation className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'Hands-on training',
          desc: 'to teach with AI and to teach about AI'
        },
        {
          icon: <Bot className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'The Vedya AI Co-Pilot',
          desc: "in every educator's hands to reduce workload and elevate teaching quality"
        },
        {
          icon: <TrendingUp className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'A measurable shift',
          desc: 'from teacher anxiety to teacher leadership in the cognitive classroom'
        }
      ]
    },
    {
      num: '3',
      title: 'Setting Up a World-Class Centre of Excellence on AI',
      subtitle: '',
      p1: 'CCMM helps every certified school establish a Centre of Excellence (CoE) on AI — a visible, physical-plus-digital hub that becomes the beating heart of innovation on campus.',
      p2: '',
      sdgTitle: 'The CoE Is What Transforms CCMM From A Certificate On A Wall Into A Living, Daily Experience For Students And Staff.',
      sdgText: '',
      pointsTitle: 'The CCMM CoE Blueprint Covers',
      points: [
        {
          icon: <Lightbulb className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'A dedicated AI & Innovation Studio',
          desc: 'space — maker tools, compute, and collaboration zones'
        },
        {
          icon: <MonitorPlay className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'The full Skillzza Nova LMS and AI Playground',
          desc: 'as the digital backbone'
        },
        {
          icon: <Cpu className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'Structured Skill Studios',
          desc: 'spanning AI, data, robotics, design, sustainability, and emerging tech'
        },
        {
          icon: <ShieldCheck className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'A governance and ethics charter',
          desc: 'for responsible AI use across the school'
        },
        {
          icon: <Trophy className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'A flagship annual showcase',
          desc: 'that turns student work into community pride'
        }
      ]
    },
    {
      num: '4',
      title: 'Industry-Relevant Curriculum',
      subtitle: '',
      p1: 'The final pillar ensures that what students learn maps directly to what the world will demand of them.',
      p2: "CCMM integrates Skillzza Nova's industry-relevant K-12 curriculum — co-shaped with the network of senior technology leaders and CXOs across our sister platform, CXO TechBOT — so that classroom learning connects to genuine industry pathways.",
      sdgTitle: 'The result:',
      sdgText: 'students leave not just with marks, but with demonstrable, marketable, future-proof skills.',
      pointsTitle: 'This Pillar Provides',
      points: [
        {
          icon: <Monitor className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'Application-driven Skill Studios',
          desc: 'that build real, portfolio-ready capability'
        },
        {
          icon: <Briefcase className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'Virtual Internships',
          desc: 'that give students authentic, simulated industry experience'
        },
        {
          icon: <Contact className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'The Digital Skill Passport',
          desc: '— a verifiable, lifelong record of every skill a student earns'
        },
        {
          icon: <Users className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'The Skill DNA Profile',
          desc: "— a behavioural and aptitude map that guides each learner's path"
        },
        {
          icon: <Route className="w-6 h-6 text-[#5B45FF]" strokeWidth={2} />,
          title: 'Clear bridges',
          desc: 'from school to higher education, industry, and entrepreneurship'
        }
      ]
    }
  ];

  const handlePrev = () => {
    setActivePillar((prev) => (prev === 0 ? pillars.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePillar((prev) => (prev === pillars.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePillar((prev) => (prev === pillars.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [pillars.length]);

  const current = pillars[activePillar];

  return (
    <section className="w-full bg-white font-poppins py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-[#111827] leading-[1.1] tracking-tight mb-4">
              The Four Pillars of <span className="text-[#5B45FF]">CCMM</span>
            </h2>
            <div className="w-16 h-1 bg-[#5B45FF] mb-6 rounded-full"></div>
            <p className="text-[#4B5563] font-medium text-[15px] md:text-[17px] leading-relaxed">
              Every CCMM Assessment And Transformation Is Built On Four Foundational Pillars. Together, They Form The Universal Algorithm That Energises A School For The Cognitive Age.
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={handlePrev}
              className="w-14 h-14 rounded-full bg-[#5B45FF] text-white flex items-center justify-center hover:bg-[#4a35ea] hover:-translate-y-1 transition-all shadow-lg hover:shadow-[0_8px_20px_rgba(91,69,255,0.3)]"
            >
              <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
            </button>
            <button 
              onClick={handleNext}
              className="w-14 h-14 rounded-full bg-[#5B45FF] text-white flex items-center justify-center hover:bg-[#4a35ea] hover:-translate-y-1 transition-all shadow-lg hover:shadow-[0_8px_20px_rgba(91,69,255,0.3)]"
            >
              <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Main Card */}
        <div className="w-full bg-white border border-gray-100 rounded-[32px] p-6 md:p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)] relative">
          
          {/* We map through all to keep them in DOM but hide non-active for smooth transition if needed, 
              or just render active. We'll render active directly for simplicity and instant swap. */}
          <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
            
            {/* Left Side Content */}
            <div className="w-full xl:w-[55%] flex flex-col items-start">
              <div className="flex flex-col mb-8">
                <h3 className="text-[24px] md:text-[32px] lg:text-[36px] font-extrabold text-[#111827] leading-[1.15] tracking-tight mb-2">
                  {current.title}
                </h3>
                {current.subtitle && (
                  <p className="text-[#5B45FF] italic font-medium text-[15px] md:text-[17px]">
                    {current.subtitle}
                  </p>
                )}
              </div>

              <div className="text-[#374151] font-medium text-[15px] md:text-[16px] leading-relaxed space-y-6 mb-10 pr-0 xl:pr-6">
                <p>
                  <span className="font-bold text-[#111827]">{current.p1.split('—')[0]}—</span>
                  {current.p1.split('—')[1]}
                </p>
                <p>
                  {current.p2.includes('UN Sustainable Development Goals') ? (
                    <>
                      {current.p2.split('UN Sustainable Development Goals')[0]}
                      <span className="font-bold text-[#111827]">UN Sustainable Development Goals</span>
                      {current.p2.split('UN Sustainable Development Goals')[1]}
                    </>
                  ) : current.p2}
                </p>
              </div>

              <div className="w-full bg-[#F5F3FF] border border-[#EDE9FE] rounded-2xl p-6 flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0 text-[#5B45FF]">
                  <Target className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <p className="text-[#4B5563] text-[14px] md:text-[15px] leading-relaxed font-medium">
                  <span className="text-[#5B45FF] font-bold">{current.sdgTitle}</span> {current.sdgText}
                </p>
              </div>
            </div>

            {/* Right Side Content (Points) */}
            <div className="w-full xl:w-[45%] flex flex-col bg-white">
              <h4 className="text-[#5B45FF] font-bold text-[18px] md:text-[20px] mb-6 px-2">
                This pillar energises young brains through:
              </h4>
              
              <div className="flex flex-col gap-4">
                {current.points.length > 0 ? (
                  current.points.map((point, idx) => (
                    <div 
                      key={idx}
                      className="w-full bg-[#F5F3FF]/40 border border-purple-50/50 rounded-2xl p-5 md:p-6 flex items-center gap-5 hover:bg-[#F5F3FF] hover:border-[#EDE9FE] transition-colors duration-300 group"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {point.icon}
                      </div>
                      <div className="flex flex-col">
                        <h5 className="text-[#5B45FF] font-bold text-[15px] md:text-[16px] mb-0.5">
                          {point.title}
                        </h5>
                        <p className="text-[#4B5563] font-medium text-[14px] leading-snug">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="w-full h-full min-h-[300px] border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-medium">
                    Content for this pillar is pending.
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {pillars.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActivePillar(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activePillar === idx 
                  ? 'w-10 bg-[#5B45FF]' 
                  : 'w-2.5 bg-gray-200 hover:bg-[#5B45FF]/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
