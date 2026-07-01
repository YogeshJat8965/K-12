import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Laptop, Target, Timer, UserCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhatIsVI() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations for text
      gsap.from('.wivi-h2', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      gsap.from('.wivi-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Staggered cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.wivi-card');
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          }
        });
      }

      gsap.from('.wivi-footer-text', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.wivi-footer-text',
          start: 'top 90%',
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      title: "Application-Driven",
      desc: "Students Learn By Doing, Not By Reading. Every Concept Is Applied To A Real Task.",
      icon: <Laptop size={24} strokeWidth={1.75} />,
      colorClass: "wivi-icon-blue"
    },
    {
      title: "Outcome-Focused",
      desc: "Every Internship Leads To A Tangible Project - A Deliverable That Proves Capability.",
      icon: <Target size={24} strokeWidth={1.75} />,
      colorClass: "wivi-icon-purple"
    },
    {
      title: "Flexible",
      desc: "Self-Paced Learning Experiences Designed To Fit Around A Student's Schedule.",
      icon: <Timer size={24} strokeWidth={1.75} />,
      colorClass: "wivi-icon-green"
    },
    {
      title: "Mentor-Guided",
      desc: "Structured Modules Paired With Expert Mentorship And Real Feedback.",
      icon: <UserCheck size={24} strokeWidth={1.75} />,
      colorClass: "wivi-icon-orange"
    }
  ];

  return (
    <>
      <style>{`
        .wivi-section {
          width: 100%;
          padding: 60px 40px 100px; /* Added top padding */
          background-color: #F8FAFC; /* Subtle background added */
          font-family: 'Poppins', sans-serif;
          text-align: center;
        }

        .wivi-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
        }

        .wivi-h2 {
          font-weight: 700;
          font-size: clamp(32px, 3.5vw, 40px);
          color: #1A1A2E;
          margin: 0 0 16px; /* Slightly reduced margin */
        }

        .wivi-subtitle {
          font-size: 18px;
          line-height: 1.7;
          color: #5C6165;
          max-width: 100%; /* Allows <br> to control wrapping */
          margin: 0 auto 8px; /* Reduced bottom gap from 16px to 8px */
          font-weight: 500;
        }

        .wivi-subtitle-highlight {
          color: #6C3CF7;
          font-weight: 600;
        }

        .wivi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 60px;
        }

        .wivi-card {
          background: #FFFFFF;
          border: 1px solid #F1F1F5;
          border-radius: 16px;
          padding: 20px; /* Reduced padding for smaller height */
          display: flex;
          align-items: flex-start;
          text-align: left;
          gap: 12px; /* Reduced gap */
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .wivi-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
          border-color: #E2E2E8;
        }

        .wivi-icon-box {
          width: 48px; /* Reduced from 56px */
          height: 48px; /* Reduced from 56px */
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Icon Colors */
        .wivi-icon-blue .wivi-icon-box { background: rgba(59, 130, 246, 0.12); color: #3B82F6; }
        .wivi-icon-purple .wivi-icon-box { background: rgba(168, 85, 247, 0.12); color: #A855F7; }
        .wivi-icon-green .wivi-icon-box { background: rgba(34, 197, 94, 0.12); color: #22C55E; }
        .wivi-icon-orange .wivi-icon-box { background: rgba(245, 158, 11, 0.12); color: #F59E0B; }

        .wivi-card-content {
          flex: 1;
        }

        .wivi-card-title {
          font-size: 15px; /* Slightly smaller */
          font-weight: 700;
          color: #1A1A2E;
          margin: 0 0 6px; /* Reduced margin */
        }

        .wivi-card-desc {
          font-size: 12px; /* Slightly smaller */
          line-height: 1.5;
          color: #6B7280;
          margin: 0;
          font-weight: 500;
        }

        .wivi-footer-text {
          font-size: 18px;
          line-height: 1.7;
          color: #5C6165;
          max-width: 100%; /* Allows <br> to control wrapping */
          margin: 0 auto;
          font-weight: 500;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1200px) {
          .wivi-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }

        @media (max-width: 768px) {
          .wivi-section { padding: 60px 24px; }
          .wivi-grid { grid-template-columns: 1fr; gap: 16px; }
          .wivi-h2 { font-size: 28px; }
          .wivi-subtitle, .wivi-footer-text { font-size: 16px; }
        }
      `}</style>

      <section className="wivi-section" ref={sectionRef}>
        <div className="wivi-container">
          
          <h2 className="wivi-h2">What Is A Virtual Internship?</h2>
          
          <p className="wivi-subtitle">
            A Virtual Internship Is A Structured, Online Work Experience Where Students Engage In Real-World, Industry-Inspired Tasks -<br className="hidden md:block" />
            Designed To Simulate How Professionals Actually Work. Unlike Traditional Learning Models That Focus On Theory, Virtual<br className="hidden md:block" />
            Internships Are <span className="wivi-subtitle-highlight">Application-Driven, Outcome-Focused, Flexible, And Mentor-Guided.</span>
          </p>

          <div className="wivi-grid" ref={cardsRef}>
            {cards.map((card, idx) => (
              <div key={idx} className={`wivi-card ${card.colorClass}`}>
                <div className="wivi-icon-box">
                  {card.icon}
                </div>
                <div className="wivi-card-content">
                  <h3 className="wivi-card-title">{card.title}</h3>
                  <p className="wivi-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="wivi-footer-text">
            While Such Experiences Have Traditionally Been Available Only To University Students, Skillzza Brings This Powerful Model To<br className="hidden md:block" />
            <span className="wivi-subtitle-highlight">Grades 6-12</span> - Ensuring Early Exposure In A Safe, Age-Appropriate Environment.
          </p>
          
        </div>
      </section>
    </>
  );
}
