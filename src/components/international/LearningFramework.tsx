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

import frameworkImg from '../../assets/International Studio/xxx.png';

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
    <section ref={sectionRef} className="relative w-full py-8 bg-white overflow-hidden font-poppins">
      
      {/* Background Decor Elements */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-[#EFF6FF] rounded-full -translate-x-1/2 blur-3xl z-0 opacity-60"></div>
      
      {/* Dot Grid Pattern (Bottom Right) */}
      <div className="absolute bottom-10 right-5 w-32 h-64 z-0 opacity-40 hidden lg:block" style={{ backgroundImage: 'radial-gradient(#9CA3AF 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 lf-intro">
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

        {/* Image Display */}
        <div className="w-full flex justify-center items-center mt-6">
          <div className="w-full max-w-[1200px] bg-white rounded-[32px] shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden min-h-[450px] flex items-center justify-center p-2">
             <img src={frameworkImg} alt="Learning Framework" className="w-full h-auto object-contain rounded-[28px]" />
          </div>
        </div>

      </div>
    </section>
  );
}
