import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import LeftImg from '../../assets/AI playground/Mask Group 42.png';
import Icon1 from '../../assets/AI playground/Group 27533.svg';
import Icon2 from '../../assets/AI playground/Group 27633.svg';
import Icon3 from '../../assets/AI playground/Group 27634.svg';

gsap.registerPlugin(ScrollTrigger);

export default function WhatIsPlayground() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current) {
        gsap.from(containerRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .wip-section {
          width: 100%;
          padding: 60px 80px;
          background: #ffffff;
          font-family: 'Poppins', sans-serif;
          display: flex;
          justify-content: center;
        }

        .wip-container {
          max-width: 1600px;
          width: 100%;
          background: transparent linear-gradient(270deg, rgba(245,245,250,0.82) 0%, rgba(255,255,255,0.82) 81%, rgba(245,245,250,0.82) 100%) 0% 0% no-repeat padding-box;
          border-radius: 20px;
          display: flex;
          align-items: stretch;
          overflow: hidden;
        }

        .wip-left {
          flex: 0 0 40%;
          max-width: 40%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          position: relative;
        }

        .wip-left img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom center;
          margin-bottom: 20px; /* Moved image slightly up */
        }

        .wip-right {
          flex: 0 0 60%;
          max-width: 60%;
          padding: 60px 60px 60px 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .wip-h2 {
          font-weight: 800;
          font-size: clamp(32px, 3.5vw, 44px);
          line-height: 1.15;
          color: #1A1A2E;
          margin: 0 0 24px;
        }

        .wip-h2 .purple {
          color: #6C3CF7;
          display: block;
        }

        .wip-p {
          font-weight: 400;
          font-size: 15px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0 0 20px;
          max-width: 650px;
        }

        .wip-features {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 24px;
          flex-wrap: nowrap; /* Forces cards onto a single line */
        }

        .wip-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1 1 0; /* Distribute space evenly */
          min-width: 0; /* Prevents overflow from pushing cards */
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .wip-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.04);
        }

        .wip-card-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wip-card-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .wip-card-text {
          display: flex;
          flex-direction: column;
          overflow: hidden; /* For tight spaces */
        }

        .wip-card-label {
          font-size: 12px;
          font-weight: 600; /* Reduced from 800 to make it more readable */
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
          white-space: nowrap;
        }

        .wip-label-1 { color: #A855F7; }
        .wip-label-2 { color: #14B8A6; }
        .wip-label-3 { color: #F59E0B; }

        .wip-card-value {
          font-size: clamp(12px, 1.2vw, 14px);
          font-weight: 700;
          color: #1A1A2E;
          white-space: nowrap;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1200px) {
          .wip-section { padding: 40px 48px; }
          .wip-left { flex: 0 0 38%; max-width: 38%; }
          .wip-right { flex: 0 0 62%; max-width: 62%; padding: 40px 40px 40px 20px; }
          .wip-card { flex-direction: column; text-align: center; align-items: center; padding: 16px 12px; gap: 8px; }
          .wip-card-text { align-items: center; }
        }

        @media (max-width: 900px) {
          .wip-section { padding: 40px 32px; }
          .wip-container { flex-direction: column; align-items: center; }
          .wip-left { flex: 1; max-width: 100%; width: 100%; padding-top: 40px; }
          .wip-left img { width: 70%; height: auto; }
          .wip-right { flex: 1; max-width: 100%; width: 100%; padding: 40px 32px; }
          .wip-features { flex-wrap: wrap; }
          .wip-card { flex-direction: row; text-align: left; align-items: center; min-width: 100%; }
          .wip-card-text { align-items: flex-start; }
        }

        @media (max-width: 600px) {
          .wip-section { padding: 40px 20px; }
          .wip-right { padding: 32px 20px; }
          .wip-left img { width: 90%; }
        }
      `}</style>

      <section className="wip-section" ref={sectionRef}>
        <div className="wip-container" ref={containerRef}>
          <div className="wip-left">
            <img src={LeftImg} alt="Girl using AI Playground on a laptop" />
          </div>
          
          <div className="wip-right">
            <h2 className="wip-h2">
              What is an
              <span className="purple">AI Playground?</span>
            </h2>

            <p className="wip-p">
              Think of it as a creative workshop for AI - but without the complexity. Students explore a library of ready-made AI agents (mini-assistants designed for specific interests), customise them to their voice and style, and share what they create with friends, classmates, and teachers.
            </p>

            <p className="wip-p">
              No coding. No setup. No overwhelm. Just pick, tweak, build, share - and discover what AI can do when you're the one in charge.
            </p>

            <div className="wip-features">
              <div className="wip-card">
                <div className="wip-card-icon">
                  <img src={Icon1} alt="For Ages" />
                </div>
                <div className="wip-card-text">
                  <span className="wip-card-label wip-label-1">FOR AGES</span>
                  <span className="wip-card-value">Grades 5-12</span>
                </div>
              </div>

              <div className="wip-card">
                <div className="wip-card-icon">
                  <img src={Icon2} alt="Skill Level" />
                </div>
                <div className="wip-card-text">
                  <span className="wip-card-label wip-label-2">SKILL LEVEL</span>
                  <span className="wip-card-value">Zero to Creative</span>
                </div>
              </div>

              <div className="wip-card">
                <div className="wip-card-icon">
                  <img src={Icon3} alt="Time to First Agent" />
                </div>
                <div className="wip-card-text">
                  <span className="wip-card-label wip-label-3">TIME TO FIRST AGENT</span>
                  <span className="wip-card-value">Under 10 Minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
