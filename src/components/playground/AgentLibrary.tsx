import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Icon1 from '../../assets/AI playground/Group 27639.svg';
import Icon2 from '../../assets/AI playground/Group 27640.svg';
import Icon3 from '../../assets/AI playground/Group 27641.svg';
import Icon4 from '../../assets/AI playground/Group 27642.svg';
import Icon5 from '../../assets/AI playground/Group 27643.svg';
import Icon6 from '../../assets/AI playground/Group 27644.svg';
import Icon7 from '../../assets/AI playground/Group 27645.svg';
import Icon8 from '../../assets/AI playground/Group 27646.svg';
import Icon9 from '../../assets/AI playground/Group 27647.svg';
import Icon10 from '../../assets/AI playground/Group 27648.svg';
import Icon11 from '../../assets/AI playground/Group 27649.svg';
import Icon12 from '../../assets/AI playground/Group 27650.svg';

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
          const delay = row * 0.2 + (index % 4) * 0.08;
          
          gsap.from(card, {
            rotationX: -20,
            y: -30,
            z: -300,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.2)',
            delay: delay,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const agents = [
    {
      title: "STORY WEAVER",
      desc: "Co-write stories, invent characters, and build fictional worlds with a creative writing companion.",
      icon: Icon1
    },
    {
      title: "HOMEWORK HELPER",
      desc: "A patient tutor that explains concepts, walks through problems, and answers doubts across subjects.",
      icon: Icon2
    },
    {
      title: "CAREER COACH",
      desc: "Explore career options, understand different paths, and get guidance tailored to your interests.",
      icon: Icon3
    },
    {
      title: "DEBATE BUDDY",
      desc: "Practise argumentation, prepare for debates, and strengthen critical thinking with a sparring partner.",
      icon: Icon4
    },
    {
      title: "SCIENCE EXPLORER",
      desc: "Ask big questions, design experiments, and understand how the world works through curiosity-led chats.",
      icon: Icon5
    },
    {
      title: "MATH MENTOR",
      desc: "Break down tricky problems step by step, practise techniques, and build confidence in numbers.",
      icon: Icon6
    },
    {
      title: "CODE COMPANION",
      desc: "Learn to code, debug errors, and build your first programmes with a friendly coding buddy.",
      icon: Icon7
    },
    {
      title: "CLIMATE STRATEGIST",
      desc: "Explore sustainability scenarios, model climate solutions, and design ideas to help the planet.",
      icon: Icon8
    },
    {
      title: "LANGUAGE BUDDY",
      desc: "Practise English, Hindi, French, Spanish, or Mandarin through natural conversation.",
      icon: Icon9
    },
    {
      title: "WELLNESS GUIDE",
      desc: "Mindfulness prompts, journaling companions, and gentle support for emotional well-being.",
      icon: Icon10
    },
    {
      title: "SPACE EXPLORER",
      desc: "Journey through galaxies, understand space missions, and ask anything about the universe.",
      icon: Icon11
    },
    {
      title: "HISTORY TIME MACHINE",
      desc: "Travel through time, meet historical figures, and explore events through immersive storytelling.",
      icon: Icon12
    }
  ];

  return (
    <>
      <style>{`
        .al-section {
          width: 100%;
          padding: 80px 40px;
          background: #6C3CF7; /* Vibrant purple from screenshot */
          font-family: 'Poppins', sans-serif;
          text-align: center;
        }

        .al-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
        }

        .al-h2 {
          font-weight: 700;
          font-size: 46px;
          color: #FFFFFF;
          margin: 0 0 16px;
        }

        .al-subtitle-1 {
          font-size: 20px;
          font-weight: 500; /* Reduced boldness */
          color: #FFFFFF;
          margin: 0 0 24px;
        }
        
        .al-subtitle-1 .pink {
          color: #E83D8E; /* Pink/Magenta color */
        }

        .al-subtitle-2 {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          max-width: 900px;
          margin: 0 auto 60px;
          font-weight: 400;
        }

        .al-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .al-card {
          position: relative;
          background: #2E166A; /* Dark purple background for cards */
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          text-align: left;
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          overflow: hidden;
        }

        .al-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
          transition: all 0.6s ease;
          z-index: 1;
          pointer-events: none;
        }

        .al-card:hover {
          background: #3A1F85;
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 20px 40px rgba(108, 60, 247, 0.4);
        }

        .al-card:hover::before {
          animation: shine 0.8s forwards;
        }

        @keyframes shine {
          100% {
            left: 200%;
          }
        }

        .al-card-icon {
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .al-card-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .al-card-content {
          display: flex;
          flex-direction: column;
        }

        .al-card-title {
          color: #FFFFFF; /* High contrast white */
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0 0 8px;
        }

        .al-card-desc {
          color: rgba(255, 255, 255, 0.85); /* Highly readable white-gray */
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
          font-weight: 400;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1300px) {
          .al-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 1024px) {
          .al-section { padding: 60px 20px; }
          .al-grid { grid-template-columns: repeat(3, 1fr); }
          .al-h2 { font-size: 2.2rem; }
          .al-card-title { font-size: 12px; }
          .al-card-desc { font-size: 12px; }
        }

        @media (max-width: 768px) {
          .al-section { padding: 60px 16px; }
          .al-grid { grid-template-columns: repeat(2, 1fr); }
          .al-h2 { font-size: 1.8rem; line-height: 1.2; }
          .al-card { flex-direction: column; align-items: flex-start; gap: 12px; padding: 20px; }
          .al-card-icon { width: 56px; height: 56px; }
        }

        @media (max-width: 480px) {
          .al-h2 { font-size: 1.5rem; }
          .al-grid { grid-template-columns: 1fr; }
          .al-card-icon { width: 48px; height: 48px; }
        }
      `}</style>

      <section className="al-section" ref={sectionRef}>
        <div className="al-container">
          <h2 className="al-h2">The Prebuilt Agent Library</h2>
          
          <div className="al-subtitle-1">
            12 starter agents. <span className="pink">Endless possibilities.</span>
          </div>
          
          <p className="al-subtitle-2">
            Every agent is designed by educators and AI experts, pre-tested for age-appropriate content, 
            and ready for students to customise. Pick one that matches your interest - or remix several to 
            create something entirely new.
          </p>

          <div className="al-grid" ref={gridRef}>
            {agents.map((agent, idx) => (
              <div key={idx} className="al-card">
                <div className="al-card-icon tilt-pop">
                  <img src={agent.icon} alt={agent.title} />
                </div>
                <div className="al-card-content">
                  <h3 className="al-card-title">{agent.title}</h3>
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
