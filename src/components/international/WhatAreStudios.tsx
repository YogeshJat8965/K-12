import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Box,
  Leaf,
  Users,
  Lightbulb,
  Brain,
  MessageSquareText,
  Monitor,
  ShieldCheck,
  Presentation,
  Target
} from 'lucide-react';

import SkillStudiosImg from '../../assets/International Studio/skill studios.png';

gsap.registerPlugin(ScrollTrigger);

export default function WhatAreStudios() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side (Image)
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftRef.current,
            start: 'top 80%',
          }
        }
      );

      // Right side (Content)
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightRef.current,
            start: 'top 80%',
          }
        }
      );

      // Stagger grid items
      if (rightRef.current) {
        gsap.fromTo('.studio-grid-item',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: '.studio-grid-item',
              start: 'top 90%',
            }
          }
        );
      }

      // Bottom banner
      gsap.fromTo(bottomRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bottomRef.current,
            start: 'top 90%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-12 md:pt-24 pb-12 bg-white overflow-hidden font-poppins">

      {/* ----- Background Decor ----- */}
      {/* Right giant yellow circle */}
      <div className="absolute right-0 top-[10%] w-[600px] h-[600px] bg-[#FFFBF0] rounded-full translate-x-1/2 z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col gap-8 md:gap-16">

        {/* Top 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-center lg:items-start">

          {/* Left Column - Image & Decorations */}
          <div ref={leftRef} className="flex-1 w-full relative">
            {/* Top-left purple circle */}
            <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#F3EFFF] rounded-full z-0"></div>

            {/* Main Image */}
            <img
              src={SkillStudiosImg}
              alt="Students in Skillzza Studio"
              className="relative z-10 w-full h-[550px] lg:h-[600px] object-cover rounded-3xl shadow-xl"
            />

            {/* Bottom dashed curve and rocket */}
            <div className="absolute top-[100%] left-24 w-[350px] h-[150px] z-20 pointer-events-none">
              <svg width="350" height="150" viewBox="0 0 350 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Curved dashed line entirely below the image. Starts exactly at top edge (y=0 of this SVG). */}
                <path d="M 0 0 C 20 100, 150 120, 270 55" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="6 6" fill="none" strokeLinecap="round" />

                {/* Static Rocket/Paper Plane at the end of the path */}
                <g transform="translate(235, 45) scale(1.8) rotate(-15)">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* Right Column - Content */}
          <div ref={rightRef} className="flex-1 w-full flex flex-col relative z-10 pt-4">

            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A2E] leading-tight mb-6">
              What Are <span className="text-[#7C3AED]">Skillzza Studios?</span>
            </h2>

            <p className="text-[#4B5563] text-[15.5px] leading-relaxed font-medium mb-4">
              Skillzza Studios Are Structured Experiential Learning Environments That Complement Academic Education With Future-Ready Competencies.
            </p>
            <p className="text-[#4B5563] text-[15.5px] leading-relaxed font-medium mb-8">
              Rather Than Focusing Only On Participation-Based Activities, Skillzza Enables Students To Build Measurable Skills, Real-World Exposure, Digital Portfolios, And Interdisciplinary Thinking Through Guided Learning Experiences.
            </p>

            <div className="flex items-center gap-4 mb-8">
              {/* <div className="w-12 h-12 bg-[#EEF2FF] rounded-xl flex items-center justify-center">
                <Box className="w-6 h-6 text-[#6B3CF6]" />
              </div> */}
              <h4 className="font-bold text-[#1A1A2E] text-[17px]">
                Each Studio Combines
              </h4>
            </div>

            {/* 8 Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">

              <div className="studio-grid-item bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <Leaf className="w-8 h-8 text-[#7C3AED] mb-3" />
                <p className="text-[12px] font-bold text-[#1A1A2E] leading-tight">Hands-on<br />learning</p>
              </div>

              <div className="studio-grid-item bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-8 h-8 text-[#7C3AED] mb-3" />
                <p className="text-[12px] font-bold text-[#1A1A2E] leading-tight">Collaborative<br />projects</p>
              </div>

              <div className="studio-grid-item bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <Lightbulb className="w-8 h-8 text-[#7C3AED] mb-3" />
                <p className="text-[12px] font-bold text-[#1A1A2E] leading-tight">Creativity and<br />innovation</p>
              </div>

              <div className="studio-grid-item bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <Brain className="w-8 h-8 text-[#7C3AED] mb-3" />
                <p className="text-[12px] font-bold text-[#1A1A2E] leading-tight">Critical<br />thinking</p>
              </div>

              <div className="studio-grid-item bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <MessageSquareText className="w-8 h-8 text-[#7C3AED] mb-3" />
                <p className="text-[12px] font-bold text-[#1A1A2E] leading-tight">Communication<br />skills</p>
              </div>

              <div className="studio-grid-item bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <Monitor className="w-8 h-8 text-[#7C3AED] mb-3" />
                <p className="text-[12px] font-bold text-[#1A1A2E] leading-tight">Digital<br />literacy</p>
              </div>

              <div className="studio-grid-item bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <ShieldCheck className="w-8 h-8 text-[#7C3AED] mb-3" />
                <p className="text-[12px] font-bold text-[#1A1A2E] leading-tight">Ethical technology<br />awareness</p>
              </div>

              <div className="studio-grid-item bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <Presentation className="w-8 h-8 text-[#7C3AED] mb-3" />
                <p className="text-[12px] font-bold text-[#1A1A2E] leading-tight">Presentation and<br />showcase opportunities</p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div ref={bottomRef} className="w-full bg-[#F3F6FA] rounded-xl p-8 flex items-center justify-center gap-6 relative z-10 mt-12 mb-0">
          <p className="text-[#1A1A2E] text-[16px] font-semibold leading-relaxed text-center whitespace-nowrap overflow-hidden text-ellipsis md:whitespace-normal">
            The Learning Model Is Designed To Help Students Move From Exploration To Application.While Building Confidence And Self-Direction.
          </p>
        </div>

      </div>
    </section>
  );
}
