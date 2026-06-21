import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Icon1 from '../../assets/AI playground/Group 27654.svg';
import Icon2 from '../../assets/AI playground/Group 27655.svg';
import Icon3 from '../../assets/AI playground/Group 27656.svg';
import Icon4 from '../../assets/AI playground/Group 27657.svg';

gsap.registerPlugin(ScrollTrigger);

export default function SchoolsAndEducators() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sae-header > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.sae-grid',
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      title: "Teacher Admin Dashboard",
      desc: "Cohort-level visibility, engagement analytics, and the ability to curate which agents are available during class time.",
      icon: Icon1,
      bgColor: "#F3F6FD",
      lineColor: "#4A76FD"
    },
    {
      title: "Lesson Plan Library",
      desc: "Ready-to-use lesson plans mapping each prebuilt agent to specific curriculum outcomes across subjects.",
      icon: Icon2,
      bgColor: "#F0EFF6",
      lineColor: "#3C139D"
    },
    {
      title: "Classroom Competitions",
      desc: "Pre-designed creative challenges - 'Build the Best Story Weaver', 'Design a Wellness Agent' - ready to run in class.",
      icon: Icon3,
      bgColor: "#EEF7F2",
      lineColor: "#0F8242"
    },
    {
      title: "Integration With Studios",
      desc: "Students use Playground agents to warm up before diving into deeper Skill Studios - creating a seamless learning flow.",
      icon: Icon4,
      bgColor: "#FCF4EE",
      lineColor: "#F19A20"
    }
  ];

  return (
    <>
      <style>{`
        .sae-section {
          width: 100%;
          padding: 100px 40px;
          background: #FFFFFF;
          font-family: 'Poppins', sans-serif;
        }

        .sae-container {
          max-width: 1360px;
          margin: 0 auto;
        }

        .sae-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .sae-title {
          font-size: clamp(32px, 4vw, 42px);
          font-weight: 800;
          color: #1A1A2E;
          margin: 0 0 16px;
        }

        .sae-title span {
          color: #4A4AF4; /* Purple/Blue accent color */
        }

        .sae-subtitle {
          font-size: 18px;
          line-height: 1.6;
          color: #6B7280;
          max-width: 1200px; /* Increased to allow 2 lines without wrapping */
          margin: 0 auto;
        }

        .sae-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          width: 100%;
        }

        .sae-card {
          border-radius: 20px;
          padding: 40px;
          display: flex;
          align-items: center; /* Center icon and text vertically */
          gap: 40px;
          position: relative;
          overflow: hidden; /* For the bottom line to be contained if necessary, but actually we want it flush */
        }

        .sae-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 5%;
          width: 90%;
          height: 6px;
          border-radius: 6px 6px 0 0;
        }

        .sae-icon {
          flex: 0 0 110px; /* Decreased from 173px to match text height */
          width: 110px;
          height: 110px;
          background-size: contain !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
        }

        .sae-content {
          flex: 1;
        }

        .sae-card-title {
          font-size: 24px;
          font-weight: 700;
          color: #1A1A2E;
          margin: 0 0 16px;
        }

        .sae-card-desc {
          font-size: 16px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .sae-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .sae-card {
            flex-direction: column;
            padding: 32px 24px;
            gap: 24px;
            align-items: flex-start;
          }
          .sae-icon {
            width: 120px;
            height: 120px;
            flex: 0 0 120px;
          }
          .sae-card-title {
            font-size: 20px;
          }
        }
      `}</style>

      <section className="sae-section" ref={sectionRef}>
        <div className="sae-container">
          
          <div className="sae-header">
            <h2 className="sae-title">For <span>Schools & Educators</span></h2>
            <p className="sae-subtitle">
              Bring AI Playground into your classroom as a structured, moderated learning tool - not a black-box toy.<br />
              Perfect for AI clubs, computer labs, creative writing periods, and cross-disciplinary projects.
            </p>
          </div>

          <div className="sae-grid">
            {cards.map((card, idx) => (
              <div 
                key={idx} 
                className="sae-card" 
                ref={el => { cardsRef.current[idx] = el; }}
                style={{ backgroundColor: card.bgColor }}
              >
                <style>{`
                  .sae-card:nth-child(${idx + 1})::after {
                    background-color: ${card.lineColor};
                  }
                `}</style>
                <div className="sae-icon" style={{ background: `transparent url('${card.icon}') 0% 0% no-repeat padding-box` }}></div>
                <div className="sae-content">
                  <h4 className="sae-card-title">{card.title}</h4>
                  <p className="sae-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
