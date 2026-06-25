import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Lightbulb, ShieldCheck, Rocket, Briefcase, Building2, Box } from 'lucide-react';
import { AnimatedCounter } from '../../components/studio/Animations';

import FourImage from '../../assets/International Studio/4 image.png';

gsap.registerPlugin(ScrollTrigger);

export default function InternationalFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        }
      });

      // 5 Icons Row
      if (iconsRef.current) {
        gsap.from(iconsRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: iconsRef.current,
            start: 'top 85%',
          }
        });
      }

      // Large Image
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          }
        });
      }

      // Stats Bar
      if (statsRef.current) {
        gsap.from(statsRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 90%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 bg-[#FDFDFD] overflow-hidden font-poppins">
      
      {/* ----- Background Decor ----- */}
      {/* Top right circular overlay */}
      <div className="absolute top-0 right-0 w-[40%] pb-[40%] border-[1.5px] border-blue-100 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none z-0"></div>
      <div className="absolute top-[10%] right-[10%] w-6 h-6 border-[2px] border-blue-200 rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <h2 ref={titleRef} className="text-center font-bold text-[22px] md:text-[28px] text-[#1A1A2E] mb-16">
          Designed for Schools That Want to Build
        </h2>

        {/* 5 Icons Row */}
        <div ref={iconsRef} className="w-full flex flex-wrap md:flex-nowrap justify-between items-start gap-y-10 mb-20 relative z-20">
          
          {/* Icon 1 */}
          <div className="flex flex-col items-center flex-1 relative group">
            <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
              <GraduationCap className="w-7 h-7 text-[#3B82F6]" />
            </div>
            <p className="text-center font-bold text-[#1A1A2E] text-[15px] leading-snug">
              Future-ready<br />learners
            </p>
            {/* Divider */}
            <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gray-200"></div>
          </div>

          {/* Icon 2 */}
          <div className="flex flex-col items-center flex-1 relative group">
            <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
              <Lightbulb className="w-7 h-7 text-[#3B82F6]" />
            </div>
            <p className="text-center font-bold text-[#1A1A2E] text-[15px] leading-snug">
              Creative<br />thinkers
            </p>
            {/* Divider */}
            <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gray-200"></div>
          </div>

          {/* Icon 3 */}
          <div className="flex flex-col items-center flex-1 relative group">
            <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
              <ShieldCheck className="w-7 h-7 text-[#3B82F6]" />
            </div>
            <p className="text-center font-bold text-[#1A1A2E] text-[15px] leading-snug">
              Responsible<br />digital citizens
            </p>
            {/* Divider */}
            <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gray-200"></div>
          </div>

          {/* Icon 4 */}
          <div className="flex flex-col items-center flex-1 relative group">
            <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
              <Rocket className="w-7 h-7 text-[#3B82F6]" />
            </div>
            <p className="text-center font-bold text-[#1A1A2E] text-[15px] leading-snug">
              Young<br />innovators
            </p>
            {/* Divider */}
            <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gray-200"></div>
          </div>

          {/* Icon 5 */}
          <div className="flex flex-col items-center flex-1 group">
            <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
              <Briefcase className="w-7 h-7 text-[#3B82F6]" />
            </div>
            <p className="text-center font-bold text-[#1A1A2E] text-[15px] leading-snug">
              Career aware<br />students
            </p>
          </div>
        </div>
      </div>

      {/* 4 Image - Truly full width and pulled UP significantly to overlap logos */}
      <div ref={imageRef} className="w-full relative z-0 flex justify-center pointer-events-none -mt-40">
        <img 
          src={FourImage} 
          alt="International Studio Students" 
          className="w-full h-auto max-w-none object-contain"
        />
      </div>

      {/* Re-open container for Stats Row */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-20 flex flex-col items-center">
        {/* Stats Row - Negative margin to overlap bottom of image */}
        <div ref={statsRef} className="w-full max-w-[1200px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 border border-gray-50 relative z-20 -mt-20">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-5 flex-1 justify-center md:border-r border-gray-100 w-full group">
            <div className="w-16 h-16 rounded-full bg-[#F3EFFF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <GraduationCap className="w-8 h-8 text-[#6B3CF6]" />
            </div>
            <div>
              <h3 className="text-[22px] font-bold text-slate-900 leading-tight">
                <AnimatedCounter end={149999} suffix=" +" />
              </h3>
              <p className="text-[13px] font-medium text-gray-500 mt-1">Students Engaged</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-5 flex-1 justify-center md:border-r border-gray-100 w-full group">
            <div className="w-16 h-16 rounded-full bg-[#FFF8EB] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Building2 className="w-8 h-8 text-[#F59E0B]" />
            </div>
            <div>
              <h3 className="text-[22px] font-bold text-slate-900 leading-tight">
                <AnimatedCounter end={150} suffix="+" />
              </h3>
              <p className="text-[13px] font-medium text-gray-500 mt-1">Partner Schools & Institutions</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-5 flex-1 justify-center md:border-r border-gray-100 w-full group">
            <div className="w-16 h-16 rounded-full bg-[#FFEBEB] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Box className="w-8 h-8 text-[#EF4444]" />
            </div>
            <div>
              <h3 className="text-[22px] font-bold text-slate-900 leading-tight">
                <AnimatedCounter end={100} suffix="+" />
              </h3>
              <p className="text-[13px] font-medium text-gray-500 mt-1">Student Innovation Projects</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-5 flex-1 justify-center w-full group">
            <div className="w-16 h-16 rounded-full bg-[#E8FAED] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <GraduationCap className="w-8 h-8 text-[#10B981]" />
            </div>
            <div>
              <h3 className="text-[22px] font-bold text-slate-900 leading-tight">
                <AnimatedCounter end={699} suffix="+" />
              </h3>
              <p className="text-[13px] font-medium text-gray-500 mt-1">Educator Cohorts Upskilled</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
