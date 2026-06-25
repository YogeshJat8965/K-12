import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ClipboardList, Calendar, Users, Target,
  Puzzle, Book, CalendarDays, Layers, Clock, School,
  Network, FlaskConical, BookOpen, Lightbulb, UserCircle, Heart, Star,
  Rocket, FileText, Trophy, Users as UsersIcon, Presentation, UserCheck,
  BarChart, ClipboardCheck
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const frameworkSteps = [
  {
    num: "01",
    title: "Curated Studio Selection",
    desc: "Schools select three Studios annually based on student needs, institutional priorities, and learning goals.",
    icon: ClipboardList,
    rightType: "horizontal-details",
    items: [
      { icon: Calendar, title: "Annual Selection", sub: "Planned, purposeful studio selection" },
      { icon: Users, title: "3 Studios", sub: "Focused choices for maximum impact" },
      { icon: Target, title: "Needs Aligned", sub: "Based on student and institutional needs" }
    ]
  },
  {
    num: "02",
    title: "Flexible Integration Models",
    desc: "Studios can be implemented through models that fit your school's structure and schedule.",
    icon: Puzzle,
    rightType: "vertical-icons",
    items: [
      { icon: Book, title: "Term-Based\nModules" },
      { icon: CalendarDays, title: "Semester\nSystems" },
      { icon: Layers, title: "Parallel\nLearning Tracks" },
      { icon: Clock, title: "After-School\nEnrichment" },
      { icon: School, title: "Integrated\nSchool Schedules" }
    ]
  },
  {
    num: "03",
    title: "Balanced Learning Ecosystem",
    desc: "Every academic cycle blends STEM learning with essential life and future skills.",
    icon: Network,
    rightType: "vertical-icons",
    items: [
      { icon: FlaskConical, title: "STEM\nLearning" },
      { icon: BookOpen, title: "Humanities" },
      { icon: Lightbulb, title: "Creativity" },
      { icon: UserCircle, title: "Leadership" },
      { icon: Heart, title: "Wellbeing" },
      { icon: Star, title: "Life Skills" }
    ]
  },
  {
    num: "04",
    title: "Experiential Learning Approach",
    desc: "Students learn through hands-on experiences that build confidence, curiosity, and real-world competence.",
    icon: Rocket,
    rightType: "vertical-icons",
    items: [
      { icon: FileText, title: "Projects" },
      { icon: Trophy, title: "Challenges" },
      { icon: UsersIcon, title: "Collaboration" },
      { icon: Presentation, title: "Presentations" },
      { icon: FlaskConical, title: "Experimentation" },
      { icon: UserCheck, title: "Mentorship" }
    ]
  },
  {
    num: "05",
    title: "Structured Showcase Model",
    desc: "Each cycle concludes with meaningful showcases that celebrate learning and drive continuous improvement.",
    icon: Trophy,
    rightType: "horizontal-simple",
    items: [
      { icon: BarChart, title: "Portfolio\nPresentations" },
      { icon: UsersIcon, title: "Student\nShowcases" },
      { icon: Lightbulb, title: "Innovation\nExhibitions" },
      { icon: ClipboardCheck, title: "Reflection\nAssessments" }
    ]
  }
];

export default function LearningFramework() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.fromTo('.lf-intro', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.lf-intro', start: 'top 85%' } }
      );

      // Cards stagger
      gsap.fromTo('.lf-step', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.lf-timeline', start: 'top 75%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-[#FAFBFC] overflow-hidden font-poppins">
      
      {/* Background Decor Elements */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-[#EFF6FF] rounded-full -translate-x-1/2 blur-3xl z-0 opacity-60"></div>
      
      {/* Dot Grid Pattern (Bottom Right) */}
      <div className="absolute bottom-10 right-5 w-32 h-64 z-0 opacity-40 hidden lg:block" style={{ backgroundImage: 'radial-gradient(#9CA3AF 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 lf-intro">
          <span className="text-[#2563EB] font-bold text-[15px] mb-3 block">
            Focused Depth. Measurable Growth.
          </span>
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A2E] tracking-tight mb-5">
            The Skillzza <span className="text-[#3B82F6]">Learning Framework</span>
          </h2>
          <p className="text-[#6B7280] text-[16px] font-medium leading-relaxed max-w-[800px] mx-auto">
            Schools Select Three Studios Annually Based On Student Needs, Institutional Priorities, And Learning Goals.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="lf-timeline relative w-full flex flex-col gap-6 md:gap-8">
          
          {/* Dashed Vertical Line */}
          <div className="absolute left-[24px] md:left-[36px] top-10 bottom-10 w-[2px] border-l-2 border-dashed border-blue-200 z-0 hidden md:block"></div>

          {frameworkSteps.map((step, idx) => {
            const MainIcon = step.icon;
            
            return (
              <div key={idx} className="lf-step relative flex items-center gap-4 md:gap-8 w-full z-10 group">
                
                {/* Timeline Number Node */}
                <div className="hidden md:flex flex-col items-center shrink-0 w-[72px]">
                  <div className="w-[52px] h-[52px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[20px] shadow-md relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {step.num}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1 bg-white rounded-[24px] shadow-sm border border-gray-100 p-8 md:p-10 flex flex-col xl:flex-row gap-6 md:gap-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  
                  {/* Card Left: Text & Main Icon */}
                  <div className="xl:w-[38%] xl:shrink-0 flex gap-6">
                    {/* Circle Icon */}
                    <div className="w-[72px] h-[72px] rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                      <MainIcon className="w-9 h-9 text-[#2563EB]" strokeWidth={1.5} />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-[20px] md:text-[22px] font-bold text-[#1A1A2E] mb-3 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-[#6B7280] text-[15px] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Vertical Divider (Desktop) */}
                  <div className="hidden xl:block w-[1px] bg-gray-100 shrink-0"></div>

                  {/* Card Right: Dynamic Items */}
                  <div className="flex-1 flex items-center">
                    
                    {/* Right Type 1: Horizontal Details (Card 01) */}
                    {step.rightType === "horizontal-details" && (
                      <div className="w-full flex flex-col sm:flex-row gap-6 justify-between items-center">
                        {step.items.map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <div key={i} className="flex gap-4 items-center">
                              <div className="w-14 h-14 rounded-[16px] bg-blue-50 flex items-center justify-center shrink-0">
                                <Icon className="w-7 h-7 text-[#2563EB]" strokeWidth={1.5} />
                              </div>
                              <div>
                                <h4 className="text-[15px] font-bold text-[#1A1A2E] leading-tight mb-1.5">{item.title}</h4>
                                <p className="text-[#6B7280] text-[12.5px] leading-tight max-w-[130px]">{item.sub}</p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}

                    {/* Right Type 2: Vertical Icons (Cards 02, 03, 04) */}
                    {step.rightType === "vertical-icons" && (
                      <div className="w-full grid grid-cols-3 sm:grid-cols-5 xl:flex xl:flex-row justify-between gap-5">
                        {step.items.map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <div key={i} className="flex flex-col items-center text-center gap-3.5">
                              <div className="w-14 h-14 rounded-[16px] bg-blue-50/70 flex items-center justify-center">
                                <Icon className="w-7 h-7 text-[#2563EB]" strokeWidth={1.5} />
                              </div>
                              <span className="text-[13.5px] font-bold text-[#1A1A2E] whitespace-pre-line leading-tight">
                                {item.title}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    )}

                    {/* Right Type 3: Horizontal Simple (Card 05) */}
                    {step.rightType === "horizontal-simple" && (
                      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 justify-between">
                        {step.items.map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <div key={i} className="flex items-center gap-3.5">
                              <div className="w-12 h-12 rounded-[14px] bg-blue-50 flex items-center justify-center shrink-0">
                                <Icon className="w-6 h-6 text-[#2563EB]" strokeWidth={1.5} />
                              </div>
                              <span className="text-[14px] font-bold text-[#1A1A2E] whitespace-pre-line leading-tight">
                                {item.title}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
