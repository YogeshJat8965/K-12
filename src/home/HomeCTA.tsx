import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import careerIcon from '../assets/landing page/Homepage (1920x 1080px) – 2/career discovery icon.png';
import schoolIcon from '../assets/landing page/Homepage (1920x 1080px) – 2/institution icon.png';
import teachingIcon from '../assets/landing page/Homepage (1920x 1080px) – 2/teaching icon.png';

gsap.registerPlugin(ScrollTrigger);

export default function HomeCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });

      // Left content
      // tl.from('.cta-badge', { y: -50, opacity: 0, duration: 0.8, ease: 'elastic.out(1, 0.5)' }, 0.2);
      tl.from('.cta-title-base', { opacity: 0, duration: 0.8 }, 0.4);
      tl.from('.cta-title-highlight', { scale: 1.3, opacity: 0, duration: 0.6, ease: 'back.out(1.5)' }, 0.6);
      tl.from('.cta-desc', { y: 20, opacity: 0, duration: 0.6 }, 0.8);

      // Cards float in
      tl.from('.card-parents', { y: 100, opacity: 0, duration: 1, ease: 'power3.out' }, 0.6);
      tl.from('.card-schools', { x: 100, y: -100, opacity: 0, duration: 1, ease: 'power3.out' }, 0.7);
      tl.from('.card-educators', { x: 100, opacity: 0, duration: 1, ease: 'power3.out' }, 0.8);

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .cta-section {
          width: 100%;
          padding: 120px 0;
          font-family: 'DM Sans', sans-serif;
          background-color: #F3F0FF;
          background-image: 
            linear-gradient(to right, rgba(108, 60, 247, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(108, 60, 247, 0.12) 1px, transparent 1px);
          background-size: 40px 40px;
          position: relative;
          overflow: hidden;
        }

        /* Subtle radial fade to make the center pop */
        .cta-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, #F3F0FF 100%);
          pointer-events: none;
        }

        .cta-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          gap: 60px;
          position: relative;
          z-index: 1;
        }

        .cta-left {
          flex: 1;
          max-width: 480px;
        }

        .cta-badge {
          display: inline-block;
          background: #F0F4FF;
          color: #6C3CF7;
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 24px;
        }

        .cta-title {
          font-weight: 800;
          font-size: 42px;
          line-height: 1.2;
          color: #111827;
          margin: 0 0 20px 0;
        }

        .cta-title-highlight {
          color: #6C3CF7;
        }

        .cta-desc {
          font-weight: 400;
          font-size: 16px;
          line-height: 1.6;
          color: #4B5563;
          margin: 0;
        }

        /* Right Side Grid */
        .cta-right {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 24px;
        }

        .cta-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid #E4D8FF;
          padding: 32px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .cta-card:hover {
          transform: translateY(-10px) rotateX(3deg);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }

        .cta-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .cta-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F5F3FF;
        }
        .cta-card-icon img {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }

        .cta-card-label {
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .cta-card-title {
          font-weight: 800;
          font-size: 22px;
          line-height: 1.3;
          margin: 0 0 32px 0;
          flex: 1;
        }

        .cta-card-btn {
          width: 100%;
          padding: 14px 0;
          border-radius: 8px;
          font-weight: 700;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .cta-card-btn::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
          z-index: -1;
        }

        .cta-card-btn:hover::before {
          transform: translateX(100%);
        }

        .cta-card-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        /* Specific Cards */
        .card-parents {
          grid-row: 1 / 3;
          align-self: center;
        }
        .card-parents .cta-card-label { color: #9CA3AF; }
        .card-parents .cta-card-title { color: #111827; }
        .card-parents .cta-card-btn { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #FFFFFF; }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(124, 58, 237, 0); }
          100% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0); }
        }

        .card-schools {
          grid-column: 2;
          grid-row: 1;
          margin-left: -40px;
        }
        .card-schools .cta-card-label { color: #9CA3AF; }
        .card-schools .cta-card-title { color: #111827; }
        .card-schools .cta-card-btn { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #FFFFFF; }

        .card-educators {
          grid-column: 2;
          grid-row: 2;
          margin-left: -40px;
        }
        .card-educators .cta-card-label { color: #9CA3AF; }
        .card-educators .cta-card-title { color: #111827; }
        .card-educators .cta-card-btn { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #FFFFFF; }

        @media (max-width: 1024px) {
          .cta-inner {
            flex-direction: column;
            text-align: center;
          }
          .cta-left {
            max-width: 600px;
          }
          .cta-right {
            width: 100%;
            max-width: 800px;
          }
        }

        @media (max-width: 768px) {
          .cta-right {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .card-parents {
            grid-row: auto;
          }
          .card-schools {
            grid-column: 1;
            grid-row: auto;
            margin-left: 0;
          }
          .card-educators {
            grid-column: 1;
            grid-row: auto;
            margin-left: 0;
          }
          .cta-title {
            font-size: 28px;
          }
          .cta-section {
            padding: 60px 0;
          }
          .cta-inner {
            padding: 0 20px;
          }
          .cta-card {
            padding: 24px;
          }
        }
      `}</style>

      <section className="cta-section" ref={sectionRef}>
        <div className="cta-inner">
          <div className="cta-left">
            {/* <span className="cta-badge">TAKE THE FIRST STEP</span> */}
            <h2 className="cta-title">
              <span className="cta-title-base">Launch Your AI Superpower - </span>
              <span className="cta-title-highlight" style={{ display: 'inline-block' }}>Early</span>
            </h2>
            <p className="cta-desc">
              Master coding, AI, and data skills through real-world projects. Stand out in school, college, and beyond - whichever path you're on.
            </p>
          </div>

          <div className="cta-right">
            {/* Card 1: Parents */}
            <div className="cta-card card-parents">
              <div className="cta-card-header">
                <div className="cta-card-icon"><img src={careerIcon} alt="Career Discovery" /></div>
                <span className="cta-card-label">FOR PARENTS</span>
              </div>
              <h3 className="cta-card-title">Book a Free Career<br />Discovery Call</h3>
              <button className="cta-card-btn">Book a Call →</button>
            </div>

            {/* Card 2: Schools */}
            <div className="cta-card card-schools">
              <div className="cta-card-header">
                <div className="cta-card-icon"><img src={schoolIcon} alt="Institution" /></div>
                <span className="cta-card-label">FOR SCHOOLS</span>
              </div>
              <h3 className="cta-card-title">Become an AI-Ready<br />Institution</h3>
              <button className="cta-card-btn">Schedule Audit →</button>
            </div>

            {/* Card 3: Educators */}
            <div className="cta-card card-educators">
              <div className="cta-card-header">
                <div className="cta-card-icon"><img src={teachingIcon} alt="Teaching" /></div>
                <span className="cta-card-label">FOR EDUCATORS</span>
              </div>
              <h3 className="cta-card-title">Level Up Your Teaching<br />Practice</h3>
              <button className="cta-card-btn">Join Cohort →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
