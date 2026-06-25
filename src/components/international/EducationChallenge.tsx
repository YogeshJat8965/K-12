import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  AlertCircle, 
  GraduationCap, 
  BarChart, 
  Link, 
  Folder, 
  User, 
  Monitor, 
  TrendingUp,
  Bot,
  Settings,
  Globe,
  Leaf,
  Users,
  Rocket,
  BarChart3
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function EducationChallenge() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo('.ec-heading', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.ec-heading',
            start: 'top 85%',
          }
        }
      );

      // Left Card Reveal
      gsap.fromTo(leftCardRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftCardRef.current,
            start: 'top 80%',
          }
        }
      );

      // Right Card Reveal
      gsap.fromTo(rightCardRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightCardRef.current,
            start: 'top 80%',
          }
        }
      );

      // Stagger items inside cards
      gsap.fromTo('.ec-list-item-left',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: leftCardRef.current,
            start: 'top 60%',
          }
        }
      );

      gsap.fromTo('.ec-list-item-right',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rightCardRef.current,
            start: 'top 60%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-24 pb-8 bg-white overflow-hidden font-poppins">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 ec-heading max-w-[800px] mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A2E] tracking-tight mb-4 leading-tight">
            The Challenge in <span className="text-[#3B82F6]">Modern K–12 Education</span>
          </h2>
          <p className="text-[#6B7280] text-[15.5px] font-medium leading-relaxed">
            Schools Globally Are Increasingly Seeking Structured Future-Skills Frameworks That Bridge Classroom Learning With Real-World Application.
          </p>
        </div>

        {/* 2 Column Cards Layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          
          {/* Left Card - RED */}
          <div 
            ref={leftCardRef} 
            className="flex-1 rounded-[32px] p-8 md:p-10 flex flex-col items-center"
            style={{ backgroundColor: '#FF00040D' }}
          >
            <div className="w-16 h-16 rounded-full bg-[#FF0004] flex items-center justify-center mb-6 shadow-md">
              <AlertCircle className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#1A1A2E] text-center leading-tight mb-10 max-w-[280px]">
              Many traditional enrichment activities lack
            </h3>

            <div className="w-full flex flex-col gap-4">
              
              {/* Items */}
              <div className="ec-list-item-left group bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm hover:shadow-[0_8px_30px_rgba(255,0,4,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#FF0004]/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: '#FF00041A' }}>
                  <BarChart className="w-6 h-6" style={{ color: '#FF0004' }} strokeWidth={2} />
                </div>
                <span className="font-bold text-[#1A1A2E] text-[17px]">Measurable outcomes</span>
              </div>

              <div className="ec-list-item-left group bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm hover:shadow-[0_8px_30px_rgba(255,0,4,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#FF0004]/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: '#FF00041A' }}>
                  <Link className="w-6 h-6" style={{ color: '#FF0004' }} strokeWidth={2} />
                </div>
                <span className="font-bold text-[#1A1A2E] text-[17px]">interdisciplinary integration</span>
              </div>

              <div className="ec-list-item-left group bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm hover:shadow-[0_8px_30px_rgba(255,0,4,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#FF0004]/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: '#FF00041A' }}>
                  <Folder className="w-6 h-6" style={{ color: '#FF0004' }} strokeWidth={2} />
                </div>
                <span className="font-bold text-[#1A1A2E] text-[17px]">portfolio development</span>
              </div>

              <div className="ec-list-item-left group bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm hover:shadow-[0_8px_30px_rgba(255,0,4,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#FF0004]/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: '#FF00041A' }}>
                  <User className="w-6 h-6" style={{ color: '#FF0004' }} strokeWidth={2} />
                </div>
                <span className="font-bold text-[#1A1A2E] text-[17px]">career awareness</span>
              </div>

              <div className="ec-list-item-left group bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm hover:shadow-[0_8px_30px_rgba(255,0,4,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#FF0004]/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: '#FF00041A' }}>
                  <Monitor className="w-6 h-6" style={{ color: '#FF0004' }} strokeWidth={2} />
                </div>
                <span className="font-bold text-[#1A1A2E] text-[17px]">technology fluency</span>
              </div>

              <div className="ec-list-item-left group bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm hover:shadow-[0_8px_30px_rgba(255,0,4,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#FF0004]/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: '#FF00041A' }}>
                  <TrendingUp className="w-6 h-6" style={{ color: '#FF0004' }} strokeWidth={2} />
                </div>
                <span className="font-bold text-[#1A1A2E] text-[17px]">structured skill progression</span>
              </div>

            </div>
          </div>

          {/* Right Card - BLUE */}
          <div 
            ref={rightCardRef} 
            className="flex-1 rounded-[32px] p-8 md:p-10 flex flex-col items-center"
            style={{ backgroundColor: '#1A00FF14' }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md" style={{ backgroundColor: '#1A00FF' }}>
              <GraduationCap className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#1A1A2E] text-center leading-tight mb-10 max-w-[320px]">
              At the same time, students are entering a world shaped by
            </h3>

            <div className="w-full flex flex-col gap-4">
              
              {/* Items */}
              <div className="ec-list-item-right group bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm hover:shadow-[0_8px_30px_rgba(26,0,255,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1A00FF]/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" style={{ backgroundColor: '#1A00FF1A' }}>
                  <Bot className="w-6 h-6" style={{ color: '#1A00FF' }} strokeWidth={2} />
                </div>
                <span className="font-bold text-[#1A1A2E] text-[17px]">Artificial Intelligence</span>
              </div>

              <div className="ec-list-item-right group bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm hover:shadow-[0_8px_30px_rgba(26,0,255,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1A00FF]/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" style={{ backgroundColor: '#1A00FF1A' }}>
                  <Settings className="w-6 h-6" style={{ color: '#1A00FF' }} strokeWidth={2} />
                </div>
                <span className="font-bold text-[#1A1A2E] text-[17px]">Automation</span>
              </div>

              <div className="ec-list-item-right group bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm hover:shadow-[0_8px_30px_rgba(26,0,255,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1A00FF]/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" style={{ backgroundColor: '#1A00FF1A' }}>
                  <Globe className="w-6 h-6" style={{ color: '#1A00FF' }} strokeWidth={2} />
                </div>
                <span className="font-bold text-[#1A1A2E] text-[17px]">Digital Transformation</span>
              </div>

              <div className="ec-list-item-right group bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm hover:shadow-[0_8px_30px_rgba(26,0,255,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1A00FF]/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" style={{ backgroundColor: '#1A00FF1A' }}>
                  <Leaf className="w-6 h-6" style={{ color: '#1A00FF' }} strokeWidth={2} />
                </div>
                <span className="font-bold text-[#1A1A2E] text-[17px]">Climate Innovation</span>
              </div>

              <div className="ec-list-item-right group bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm hover:shadow-[0_8px_30px_rgba(26,0,255,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1A00FF]/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" style={{ backgroundColor: '#1A00FF1A' }}>
                  <Users className="w-6 h-6" style={{ color: '#1A00FF' }} strokeWidth={2} />
                </div>
                <span className="font-bold text-[#1A1A2E] text-[17px]">Global Collaboration</span>
              </div>

              <div className="ec-list-item-right group bg-white rounded-2xl p-3 flex items-center gap-4 shadow-sm hover:shadow-[0_8px_30px_rgba(26,0,255,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1A00FF]/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" style={{ backgroundColor: '#1A00FF1A' }}>
                  <Rocket className="w-6 h-6" style={{ color: '#1A00FF' }} strokeWidth={2} />
                </div>
                <span className="font-bold text-[#1A1A2E] text-[17px]">creative Technologies</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="w-full bg-[#F8FAFC] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 mt-16 shadow-sm border border-blue-50 relative z-10">
          <div className="shrink-0">
            <BarChart3 className="w-10 h-10 text-[#3B82F6]" strokeWidth={1.5} />
          </div>
          <p className="text-[#1A1A2E] text-[15px] font-semibold leading-relaxed md:text-left text-center max-w-[900px]">
            Skillzza Studios Are Designed To Help Schools Prepare Students For This Rapidly Evolving Future Through Applied Learning Experiences Aligned With Global Education Trends.
          </p>
        </div>

      </div>
    </section>
  );
}
