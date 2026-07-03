import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, Rocket, ChevronsRight } from 'lucide-react';
import WhyVIImg from '../../assets/virtual internship/why VI.png';

gsap.registerPlugin(ScrollTrigger);

export default function WhyVIMatters() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left text animations
      gsap.from('.wvm-eyebrow, .wvm-heading, .wvm-desc', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Cards animation
      gsap.from('.wvm-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.wvm-cards-wrapper',
          start: 'top 80%',
        }
      });

      gsap.from('.wvm-arrow-btn', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.5)',
        delay: 0.4,
        scrollTrigger: {
          trigger: '.wvm-cards-wrapper',
          start: 'top 80%',
        }
      });

      gsap.from('.wvm-bottom-highlight', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.wvm-bottom-highlight',
          start: 'top 90%',
        }
      });

      // Right image animation
      gsap.from(rightRef.current, {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .wvm-section {
          width: 100%;
          padding: 80px 40px;
          background-color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .wvm-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 20px; /* Reduced gap to allow left part to be wider */
        }

        .wvm-left {
          flex: 1;
          max-width: 800px; /* Increased max-width */
        }

        .wvm-eyebrow {
          font-size: 13px; /* Slightly larger */
          font-weight: 600;
          color: #6C3CF7;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }

        .wvm-heading {
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 800;
          color: #1A1A2E;
          line-height: 1.1;
          margin: 0 0 20px;
          letter-spacing: -1px;
        }

        .wvm-heading .purple {
          color: #6C3CF7;
        }

        .wvm-desc {
          font-size: 18px; /* Increased from 16px */
          line-height: 1.7;
          color: #4B5563;
          margin: 0 0 40px;
          font-weight: 500;
        }

        .wvm-cards-wrapper {
          display: flex;
          align-items: stretch;
          gap: 24px;
          position: relative;
          margin-bottom: 40px;
        }

        .wvm-card {
          flex: 1;
          background: #FFFFFF;
          border: 1px solid #F3F4F6;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .wvm-card-header {
          background: #F8F9FC;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid #F3F4F6;
        }

        .wvm-header-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(108, 60, 247, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6C3CF7;
          flex-shrink: 0;
          background: #FFFFFF;
        }

        .wvm-card-title {
          font-size: 13px; /* Increased from 12px */
          font-weight: 700;
          color: #6C3CF7;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0;
          border-bottom: 2px solid rgba(108, 60, 247, 0.3);
          padding-bottom: 2px;
        }

        .wvm-card-body {
          padding: 24px 20px 24px 36px;
          position: relative;
          flex: 1;
        }

        .wvm-timeline-line {
          position: absolute;
          left: 24px;
          top: 36px;
          bottom: 36px;
          width: 1px;
          background-color: #E5E7EB;
        }

        .wvm-list-item {
          position: relative;
          padding-bottom: 16px;
          margin-bottom: 16px;
          border-bottom: 1px solid #F3F4F6;
        }

        .wvm-list-item:last-child {
          padding-bottom: 0;
          margin-bottom: 0;
          border-bottom: none;
        }

        .wvm-timeline-dot {
          position: absolute;
          left: -16px;
          top: 6px; /* Adjusted slightly down for bigger text */
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #6C3CF7;
          box-shadow: 0 0 0 3px rgba(108, 60, 247, 0.2);
        }

        .wvm-list-item-text {
          font-size: 15px; /* Increased from 13px */
          line-height: 1.5;
          color: #374151;
          margin: 0;
          padding-left: 8px;
          font-weight: 500;
        }

        .wvm-arrow-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #6C3CF7;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(108, 60, 247, 0.3);
          z-index: 10;
        }

        .wvm-bottom-highlight {
          font-size: clamp(20px, 2vw, 24px);
          font-style: italic;
          font-weight: 700;
          color: #1A1A2E;
          line-height: 1.4;
          margin: 0;
        }

        .wvm-bottom-highlight .purple {
          color: #6C3CF7;
        }

        .wvm-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .wvm-image {
          width: 100%;
          max-width: 600px;
          height: auto;
          object-fit: contain;
          transform: translateY(-40px);
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1200px) {
          .wvm-container { gap: 40px; }
        }

        @media (max-width: 1024px) {
          .wvm-container { flex-direction: column; }
          .wvm-left { max-width: 100%; }
          .wvm-right { width: 100%; max-width: 600px; }
        }

        @media (max-width: 600px) {
          .wvm-section { padding: 60px 20px; }
          .wvm-cards-wrapper { flex-direction: column; gap: 40px; }
          .wvm-arrow-btn { transform: translate(-50%, -50%) rotate(90deg); top: auto; left: 50%; margin-top: -20px; position: relative; } /* Arrow between cards vertically */
          .wvm-timeline-line { left: 24px; top: 32px; bottom: 32px; }
        }
      `}</style>

      <section className="wvm-section" ref={sectionRef}>
        <div className="wvm-container">
          
          <div className="wvm-left" ref={leftRef}>
            <span className="wvm-eyebrow">THE CASE FOR CHANGE</span>
            <h2 className="wvm-heading">
              Why Virtual Internships<br />
              <span className="purple">Matter Today</span>
            </h2>
            <p className="wvm-desc">
              Students Today Are Required To Make Some Of The Most Important Decisions Of 
              Their Lives - Choosing Streams, Careers, And Colleges - Often Without Ever 
              Experiencing What Those Paths Actually Involve.
            </p>

            <div className="wvm-cards-wrapper">
              <div className="wvm-card">
                <div className="wvm-card-header">
                  {/* <div className="wvm-header-icon">
                    <AlertTriangle size={16} strokeWidth={2.5} />
                  </div> */}
                  <h3 className="wvm-card-title">THE CURRENT GAP</h3>
                </div>
                <div className="wvm-card-body">
                  <div className="wvm-timeline-line"></div>
                  
                  <div className="wvm-list-item">
                    <div className="wvm-timeline-dot"></div>
                    <p className="wvm-list-item-text">Textbooks explain concepts,<br/>not careers.</p>
                  </div>
                  <div className="wvm-list-item">
                    <div className="wvm-timeline-dot"></div>
                    <p className="wvm-list-item-text">Schools focus on marks, not<br/>exposure</p>
                  </div>
                  <div className="wvm-list-item">
                    <div className="wvm-timeline-dot"></div>
                    <p className="wvm-list-item-text">Students lack clarity, direction,<br/>and confidence.</p>
                  </div>
                </div>
              </div>

              <div className="wvm-arrow-btn">
                <ChevronsRight size={20} strokeWidth={3} />
              </div>

              <div className="wvm-card">
                <div className="wvm-card-header">
                  {/* <div className="wvm-header-icon">
                    <Rocket size={16} strokeWidth={2.5} />
                  </div> */}
                  <h3 className="wvm-card-title">THE SHIFT IN EDUCATION</h3>
                </div>
                <div className="wvm-card-body">
                  <div className="wvm-timeline-line"></div>
                  
                  <div className="wvm-list-item">
                    <div className="wvm-timeline-dot"></div>
                    <p className="wvm-list-item-text">NEP 2020 emphasises experiential<br/>learning from Grade 6.</p>
                  </div>
                  <div className="wvm-list-item">
                    <div className="wvm-timeline-dot"></div>
                    <p className="wvm-list-item-text">Top global universities value<br/>projects, portfolios, and initiative</p>
                  </div>
                  <div className="wvm-list-item">
                    <div className="wvm-timeline-dot"></div>
                    <p className="wvm-list-item-text">The future workforce demands<br/>skills, not just degrees.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="wvm-bottom-highlight">
              Virtual Internships Bridge This Gap - Transforming<br className="hidden md:block" />
              Learning From <span className="purple">Passive</span> To <span className="purple">Practical</span>.
            </p>
          </div>

          <div className="wvm-right" ref={rightRef}>
            <img src={WhyVIImg} alt="Why Virtual Internships Matter" className="wvm-image" />
          </div>

        </div>
      </section>
    </>
  );
}
