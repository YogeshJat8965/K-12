import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Icon1 from '../../assets/AI playground/Group 27635.svg';
import Icon2 from '../../assets/AI playground/Group 27636.svg';
import Icon3 from '../../assets/AI playground/Group 27637.svg';
import Icon4 from '../../assets/AI playground/Group 27638.svg';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.hiw-card');
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
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

  const steps = [
    {
      id: "01",
      title: "Pick an Agent",
      desc: "Browse 12+ prebuilt AI agents across creativity, academics, science, wellness, and more. Each one has a clear purpose and personality.",
      theme: "blue",
      icon: Icon1
    },
    {
      id: "02",
      title: "Customise It",
      desc: "Give your agent a name, tweak how it talks, choose its knowledge focus, and add your own twist - all through simple sliders and prompts.",
      theme: "purple",
      icon: Icon2
    },
    {
      id: "03",
      title: "Build & Test",
      desc: "Chat with your agent, test how it responds, and refine it until it feels right. Every iteration teaches prompt-thinking and AI logic.",
      theme: "green",
      icon: Icon3
    },
    {
      id: "04",
      title: "Share & Showcase",
      desc: "Share your creation with friends and classmates, get feedback, or showcase it at the annual Skillzza AI Showcase.",
      theme: "orange",
      icon: Icon4
    }
  ];

  return (
    <>
      <style>{`
        .hiw-section {
          width: 100%;
          padding: 80px;
          background: #ffffff;
          font-family: 'Poppins', sans-serif;
          text-align: center;
        }

        .hiw-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
        }

        .hiw-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #F6F4FD;
          border: 1px solid #EAE3FE;
          border-radius: 40px;
          padding: 8px 20px;
          color: #6C3CF7;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hiw-h2 {
          font-weight: 800;
          font-size: clamp(32px, 3vw, 42px);
          color: #1A1A2E;
          margin: 0 0 60px;
          letter-spacing: -0.5px;
        }

        .hiw-h2 .purple {
          color: #6C3CF7;
        }

        .hiw-cards-wrapper {
          position: relative;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          text-align: left;
        }

        /* The horizontal dotted line behind the cards */
        .hiw-dotted-line {
          position: absolute;
          top: 59%; /* Shifted lower */
          transform: translateY(-50%);
          left: 5%;
          right: 5%;
          z-index: 0;
          text-align: left;
          font: normal normal normal 30px/46px Poppins;
          letter-spacing: 0px;
          color: #5C6165;
          opacity: 0.78;
          overflow: hidden;
          white-space: nowrap;
          pointer-events: none; /* So it doesn't block card hovers */
        }

        .hiw-card {
          position: relative;
          z-index: 1; /* Stays above the dotted line */
          flex: 1;
          border-radius: 16px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          border: 1px solid #D2D3D3; /* Applied to all */
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hiw-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.04);
        }

        /* Specific Backgrounds based on user request */
        .hiw-card.theme-blue { background: #EEF2FE 0% 0% no-repeat padding-box; }
        .hiw-card.theme-blue .hiw-number { color: #8C9FFF; }

        .hiw-card.theme-purple { background: #F5F3FE 0% 0% no-repeat padding-box; }
        .hiw-card.theme-purple .hiw-number { color: #A173FF; }

        .hiw-card.theme-green { background: #EDFFF7 0% 0% no-repeat padding-box; }
        .hiw-card.theme-green .hiw-number { color: #56D08B; }

        .hiw-card.theme-orange { background: #FFF7EE 0% 0% no-repeat padding-box; }
        .hiw-card.theme-orange .hiw-number { color: #FFB87A; }

        .hiw-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .hiw-icon-box {
          width: 90px; /* Increased icon size further */
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
        }
        
        .hiw-icon-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .hiw-number {
          font-size: 22px;
          font-weight: 700;
          opacity: 0.8;
        }

        .hiw-card-title {
          font-size: 18px;
          font-weight: 600; /* Normal bold instead of extra bold */
          color: #1A1A2E;
          margin: 0 0 12px;
        }

        .hiw-card-desc {
          font-size: 13px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1024px) {
          .hiw-section { padding: 60px 40px; }
          .hiw-cards-wrapper { flex-wrap: wrap; gap: 20px; }
          .hiw-card { flex: 0 0 calc(50% - 10px); }
          .hiw-dotted-line { display: none; }
        }

        @media (max-width: 600px) {
          .hiw-section { padding: 60px 20px; }
          .hiw-card { flex: 0 0 100%; }
        }
      `}</style>

      <section className="hiw-section" ref={sectionRef}>
        <div className="hiw-container">
          <div className="hiw-badge">HOW IT WORKS</div>
          
          <h2 className="hiw-h2">
            From Curiosity to Creation in <span className="purple">4 Steps</span>
          </h2>

          <div className="hiw-cards-wrapper" ref={cardsRef}>
            <div className="hiw-dotted-line">
              ........................................................................................................................................................................................................................................................................................................................................................................................................
            </div>
            
            {steps.map((step, idx) => (
              <div key={idx} className={`hiw-card theme-${step.theme}`}>
                <div className="hiw-card-header">
                  <div className="hiw-icon-box">
                    <img src={step.icon} alt={step.title} />
                  </div>
                  <div className="hiw-number">{step.id}</div>
                </div>
                <h3 className="hiw-card-title">{step.title}</h3>
                <p className="hiw-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
