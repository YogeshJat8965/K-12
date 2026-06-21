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

gsap.registerPlugin(ScrollTrigger);

export default function AgentLibrary() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.al-card');
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
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
          background: #2E166A; /* Dark purple background for cards */
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          text-align: left;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .al-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
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
          .al-section { padding: 60px 32px; }
          .al-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .al-section { padding: 60px 20px; }
          .al-grid { grid-template-columns: 1fr; }
          .al-card { padding: 16px; gap: 12px; }
          .al-card-icon { width: 56px; height: 56px; }
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
                <div className="al-card-icon">
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
