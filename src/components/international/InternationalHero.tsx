import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar } from 'lucide-react';
import { useSplitReveal } from '../../hooks/useSplitReveal';
import { useMagneticRipple } from '../../hooks/usePremiumHover';

gsap.registerPlugin(ScrollTrigger);

export default function InternationalHero() {
  const heroRef = useRef<HTMLElement>(null);

  useSplitReveal('.ih-h1', 'lines', 0.07, 0.1);
  useSplitReveal('.ih-sub', 'words', 0.02, 0.3);
  useMagneticRipple('.ih-btn', 0.5);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Small title
      gsap.from('.ih-top-title', { y: -20, opacity: 0, duration: 0.8, ease: 'power3.out' });

      // Buttons
      gsap.from('.ih-btn-wrapper', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        delay: 0.4
      });

      // Floating Background Elements
      gsap.to('.float-element-1', { y: -15, rotation: 5, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.float-element-2', { y: 15, rotation: -5, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 });
      gsap.to('.float-element-3', { y: -10, x: 10, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });
      gsap.to('.float-element-4', { y: 20, x: -10, duration: 4.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.2 });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .ih-section {
          width: 100%;
          background: #FAFBFF; /* Very light blue-ish white */
          padding-top: 110px;
          padding-bottom: 0px;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ----- Background Shapes & Ornaments ----- */
        /* Left giant yellow curve */
        .ih-bg-left {
          position: absolute;
          left: -15%;
          top: 10%;
          width: 30%;
          padding-bottom: 30%;
          background: radial-gradient(circle, rgba(255, 248, 220, 0.6) 0%, rgba(255, 250, 235, 0) 70%);
          border-radius: 50%;
          z-index: 0;
        }

        /* Right giant blue curve */
        .ih-bg-right {
          position: absolute;
          right: -10%;
          bottom: -10%;
          width: 35%;
          padding-bottom: 35%;
          border: 1px solid rgba(59, 130, 246, 0.15);
          border-radius: 50%;
          z-index: 0;
        }
        .ih-bg-right-inner {
          position: absolute;
          right: -5%;
          bottom: -5%;
          width: 25%;
          padding-bottom: 25%;
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          z-index: 0;
        }

        /* Ornaments SVG containers */
        .ih-ornament {
          position: absolute;
          z-index: 1;
        }

        /* ----- Content Layout ----- */
        .ih-content {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-direction: column;
          z-index: 10;
        }

        .ih-top-title {
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.5px;
          color: #3B82F6; /* Blue */
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .ih-h1 {
          font-weight: 700;
          font-size: clamp(36px, 4.5vw, 56px);
          line-height: 1.2;
          color: #1A1A2E; /* Dark grey/black */
          margin: 0 0 28px;
          letter-spacing: -0.5px;
        }
        .ih-h1 .blue { color: #2563EB; }

        .ih-sub {
          font-weight: 500;
          font-size: 16px;
          line-height: 1.8;
          color: #6B7280; /* Gray text */
          margin: 0 auto 24px;
          max-width: 900px;
        }

        .ih-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 16px;
          margin-bottom: 40px;
        }

        .ih-btn {
          border: none; cursor: pointer;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          border-radius: 8px;
          padding: 12px 28px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          white-space: nowrap;
          font-size: 14.5px;
        }
        .ih-btn:hover { transform: translateY(-2px); }

        .ih-btn-primary {
          background: #3B82F6; color: #fff;
          box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
        }
        .ih-btn-primary:hover {
          background: #2563EB;
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }

        .ih-btn-secondary {
          background: #ffffff; color: #3B82F6;
          border: 1px solid #93C5FD;
        }
        .ih-btn-secondary:hover { background: #EFF6FF; border-color: #3B82F6; }

        .ih-bottom-text {
          font-weight: 700;
          font-size: 16px;
          color: #1A1A2E;
        }

        @media (max-width: 768px) {
          .ih-h1 { font-size: 2.2rem; }
          .ih-btns { flex-direction: column; width: 100%; gap: 12px; }
          .ih-btn-wrapper { width: 100%; }
          .ih-btns button { width: 100%; }
        }
      `}</style>

      <section className="ih-section" ref={heroRef}>
        
        {/* ----- Background Elements ----- */}
        <div className="ih-bg-left"></div>
        <div className="ih-bg-right"></div>
        <div className="ih-bg-right-inner"></div>

        {/* Left Side Ornaments */}
        <svg className="ih-ornament float-element-1" style={{ top: '20%', left: '10%' }} width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#FDE047" fillOpacity="0.6"/>
        </svg>

        <svg className="ih-ornament float-element-2" style={{ top: '45%', left: '8%' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#93C5FD" strokeWidth="2" fill="none" />
        </svg>

        <svg className="ih-ornament" style={{ top: '15%', left: '5%' }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="4" fill="#93C5FD" />
        </svg>

        <svg className="ih-ornament" style={{ top: '22%', left: '4%' }} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="3" fill="#93C5FD" />
        </svg>

        {/* Right Side Ornaments */}
        <svg className="ih-ornament float-element-3" style={{ top: '15%', right: '12%' }} width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Paper Airplane/Rocket shape matching screenshot */}
          <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* Dashed line representing flight path */}
        <svg className="ih-ornament" style={{ top: '25%', right: '8%' }} width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 140 Q 50 80 140 10" stroke="#FDE047" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
        </svg>

        <svg className="ih-ornament float-element-4" style={{ top: '18%', right: '6%' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="#93C5FD" fillOpacity="0.8"/>
        </svg>

        <svg className="ih-ornament float-element-1" style={{ top: '55%', right: '10%' }} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#93C5FD" fillOpacity="0.6"/>
        </svg>


        {/* ----- Main Content ----- */}
        <div className="ih-content">
          <div className="ih-top-title">
            FUTURE SKILLS STUDIOS FOR NEXT-GENERATION LEARNING
          </div>

          <h1 className="ih-h1">
            Empowering Students for an<br />
            <span className="blue">AI-Driven Future</span>
          </h1>

          <p className="ih-sub">
            Skillzza K-12 Studios Is A Future-Focused Experiential Learning Ecosystem Designed To Help Students Build Creativity, Problem-Solving Abilities, Digital Fluency, Leadership, And Real-World Skills Beyond Traditional Classroom Education.
          </p>

          <p className="ih-sub" style={{ marginBottom: '32px' }}>
            Built For Progressive Schools And Future-Ready Learners, Skillzza Combines Emerging Technologies, Interdisciplinary Learning, Hands-On Projects, And Measurable Outcomes Within A Structured School-Integrated Framework
          </p>

          <div className="ih-btns">
            <div className="ih-btn-wrapper">
              <button className="ih-btn ih-btn-primary">
                Explore studios <span style={{ marginLeft: '4px' }}>→</span>
              </button>
            </div>
            <div className="ih-btn-wrapper">
              <button className="ih-btn ih-btn-secondary">
                Schedule A Discover Session <Calendar size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
