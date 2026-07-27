import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bot, BrainCircuit, Sparkles, BookOpen, Rocket, Code2, Cpu, Globe } from 'lucide-react';

import Icon1 from '../../assets/AI playground/Group 27639.svg';
import Icon2 from '../../assets/AI playground/Group 27640.svg';
import Icon3 from '../../assets/AI playground/Group 27641.svg';
import Icon4 from '../../assets/AI playground/Group 27642.svg';
import Icon5 from '../../assets/AI playground/Group 27643.svg';
import imgStoryWeaver from '../../assets/AI playground/Story Weaver.webp';
import imgHomework from '../../assets/AI playground/Homework Helper.webp';
import imgCareer from '../../assets/AI playground/Career Coach.webp';
import imgDebate from '../../assets/AI playground/Debate Buddy.webp';
import imgScience from '../../assets/AI playground/Science Explorer.webp';
import imgMath from '../../assets/AI playground/Math Mentor.webp';
import imgCode from '../../assets/AI playground/Code Companion.webp';
import imgClimate from '../../assets/AI playground/Climate Strategist.webp';
import imgLanguage from '../../assets/AI playground/Language Buddy.webp';
import imgWellness from '../../assets/AI playground/Wellness Guide.webp';
import imgSpace from '../../assets/AI playground/Space Explorer.webp';
import imgHistory from '../../assets/AI playground/History Time Machine.webp';

import { useSplitReveal } from '../../hooks/useSplitReveal';
import { use3DTilt } from '../../hooks/usePremiumHover';

gsap.registerPlugin(ScrollTrigger);

export default function AgentLibrary() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useSplitReveal('.al-h2', 'lines', 0.08, 0);
  useSplitReveal('.al-subtitle-1', 'lines', 0.05, 0.1);
  useSplitReveal('.al-subtitle-2', 'lines', 0.03, 0.2);
  use3DTilt('.al-card', 10, 1.02);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gridRef.current.style.perspective = '1200px';
        const cards = Array.from(gridRef.current.querySelectorAll('.al-card'));
        
        cards.forEach((card, index) => {
          const row = Math.floor(index / 4);
          const delay = row * 0.15 + (index % 4) * 0.08;
          
          gsap.from(card, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: delay,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const agents = [
    {
      title: "Story Weaver",
      desc: "Co-write stories, invent characters, and build fictional worlds with a creative writing companion.",
      image: imgStoryWeaver
    },
    {
      title: "Homework Helper",
      desc: "A patient tutor that explains concepts, walks through problems, and answers doubts across subjects.",
      image: imgHomework
    },
    {
      title: "Career Coach",
      desc: "Explore career options, understand different paths, and get guidance tailored to your interests.",
      image: imgCareer
    },
    {
      title: "Debate Buddy",
      desc: "Practise argumentation, prepare for debates, and strengthen critical thinking with a sparring partner.",
      image: imgDebate
    },
    {
      title: "Science Explorer",
      desc: "Ask big questions, design experiments, and understand how the world works through curiosity-led chats.",
      image: imgScience
    },
    {
      title: "Math Mentor",
      desc: "Break down tricky problems step by step, practise techniques, and build confidence in numbers.",
      image: imgMath
    },
    {
      title: "Code Companion",
      desc: "Learn to code, debug errors, and build your first programmes with a friendly coding buddy.",
      image: imgCode
    },
    {
      title: "Climate Strategist",
      desc: "Explore sustainability scenarios, model climate solutions, and design ideas to help the planet.",
      image: imgClimate
    },
    {
      title: "Language Buddy",
      desc: "Practise English, Hindi, French, Spanish, or Mandarin through natural conversation.",
      image: imgLanguage
    },
    {
      title: "Wellness Guide",
      desc: "Mindfulness prompts, journaling companions, and gentle support for emotional well-being.",
      image: imgWellness
    },
    {
      title: "Space Explorer",
      desc: "Journey through galaxies, understand space missions, and ask anything about the universe.",
      image: imgSpace
    },
    {
      title: "History Time Machine",
      desc: "Travel through time, meet historical figures, and explore events through immersive storytelling.",
      image: imgHistory
    }
  ];

  return (
    <>
      <style>{`
        /* Floating Background Icons */
        .al-bg-icon {
          position: absolute;
          color: rgba(108, 60, 247, 0.08); /* Very subtle purple */
          z-index: 0;
          pointer-events: none;
        }

        .al-bg-icon-1 { top: 8%; left: 3%; animation: floatIcon1 15s ease-in-out infinite; }
        .al-bg-icon-2 { top: 15%; right: 4%; animation: floatIcon2 18s ease-in-out infinite; }
        .al-bg-icon-3 { top: 45%; left: 2%; animation: floatIcon3 20s ease-in-out infinite; }
        .al-bg-icon-4 { bottom: 12%; right: 3%; animation: floatIcon1 16s ease-in-out infinite reverse; }
        .al-bg-icon-5 { bottom: 5%; left: 10%; animation: floatIcon2 19s ease-in-out infinite; }
        .al-bg-icon-6 { top: 60%; right: 2%; animation: floatIcon3 17s ease-in-out infinite reverse; }
        .al-bg-icon-7 { top: 2%; left: 45%; animation: floatIcon2 22s ease-in-out infinite; }
        .al-bg-icon-8 { bottom: 1%; right: 35%; animation: floatIcon1 14s ease-in-out infinite; }

        @keyframes floatIcon1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(40px, -50px) rotate(15deg); }
          66% { transform: translate(-20px, 30px) rotate(-10deg); }
        }
        @keyframes floatIcon2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-40px, 35px) rotate(-15deg); }
          66% { transform: translate(30px, -45px) rotate(10deg); }
        }
        @keyframes floatIcon3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(35px, 50px) rotate(20deg); }
          66% { transform: translate(-30px, -35px) rotate(-15deg); }
        }

        .al-section {
          width: 100%;
          padding: 40px 40px;
          background: #e8e4fdff; /* Light purple background */
          font-family: 'Poppins', sans-serif;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .al-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .al-h2 {
          font-weight: 800;
          font-size: clamp(32px, 4vw, 46px);
          color: #1A1A2E; /* Dark text for light theme */
          margin: 0 0 16px;
          letter-spacing: -0.5px;
        }

        .al-subtitle-1 {
          font-size: 20px;
          font-weight: 600;
          color: #1A1A2E;
          margin: 0 0 24px;
        }
        
        .al-subtitle-1 .pink {
          color: #6C3CF7; /* Vibrant purple accent */
        }

        .al-subtitle-2 {
          font-size: 16px;
          line-height: 1.6;
          color: #4A4A68;
          max-width: 900px;
          margin: 0 auto 60px;
          font-weight: 400;
        }

        .al-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .al-card {
          position: relative;
          background: #FFFFFF;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          text-align: left;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05); /* Soft shadow like the screenshot */
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          cursor: pointer;
        }

        .al-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(108, 60, 247, 0.15);
        }

        .al-card-image-wrapper {
          width: 100%;
          height: 180px; /* Taller image area as in screenshot */
          background: #F0F0F5;
          overflow: hidden;
        }

        .al-card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Full bleed image */
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .al-card:hover .al-card-image-wrapper img {
          transform: scale(1.08);
        }

        .al-card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .al-card-title-wrapper {
          border-left: 3px solid #6C3CF7; /* Purple left border exactly like screenshot */
          padding-left: 12px;
          margin-bottom: 12px;
        }

        .al-card-title {
          color: #1A1A2E;
          font-size: 16px;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
        }

        .al-card-desc {
          color: #4A4A68;
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
          padding-left: 15px; /* Align slightly with title */
          font-weight: 400;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1200px) {
          .al-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 900px) {
          .al-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .al-section { padding: 40px 20px; }
        }

        @media (max-width: 600px) {
          .al-section { padding: 30px 16px; }
          .al-subtitle { margin-bottom: 30px; }
          .al-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>

      <section className="al-section" ref={sectionRef}>
        {/* Floating Background Icons */}
        <div className="al-bg-icon al-bg-icon-1"><Bot size={140} strokeWidth={1} /></div>
        <div className="al-bg-icon al-bg-icon-2"><BrainCircuit size={120} strokeWidth={1} /></div>
        <div className="al-bg-icon al-bg-icon-3"><Sparkles size={90} strokeWidth={1} /></div>
        <div className="al-bg-icon al-bg-icon-4"><BookOpen size={130} strokeWidth={1} /></div>
        <div className="al-bg-icon al-bg-icon-5"><Rocket size={110} strokeWidth={1} /></div>
        <div className="al-bg-icon al-bg-icon-6"><Code2 size={120} strokeWidth={1} /></div>
        <div className="al-bg-icon al-bg-icon-7"><Cpu size={80} strokeWidth={1} /></div>
        <div className="al-bg-icon al-bg-icon-8"><Globe size={150} strokeWidth={1} /></div>

        <div className="al-container">
          <h2 className="al-h2">The Prebuilt Agent Library</h2>
          
          <div className="al-subtitle-1">
            Start with Agents. <span className="pink">Endless possibilities.</span>
          </div>
          
          <p className="al-subtitle-2">
            Every agent is designed by educators and AI experts, pre-tested for age-appropriate content, 
            and ready for students to customise. Pick one that matches your interest - or remix several to 
            create something entirely new.
          </p>

          <div className="al-grid" ref={gridRef}>
            {agents.map((agent, idx) => (
              <div key={idx} className="al-card">
                <div className="al-card-image-wrapper">
                  <img src={agent.image} alt={agent.title} />
                </div>
                <div className="al-card-content">
                  <div className="al-card-title-wrapper">
                    <h3 className="al-card-title">{agent.title}</h3>
                  </div>
                  <p className="al-card-desc">{agent.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
