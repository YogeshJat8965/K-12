import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BgImage from '../../assets/AI playground/ChatGPT Image Jun 22, 2026, 02_18_18 AM.png';

import { useSplitReveal } from '../../hooks/useSplitReveal';
import { useMagneticRipple } from '../../hooks/usePremiumHover';

gsap.registerPlugin(ScrollTrigger);

export default function CtaBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useSplitReveal('.cta-title', 'words', 0.05, 0);
  useSplitReveal('.cta-subtitle', 'lines', 0.03, 0.1);
  useMagneticRipple('.cta-btn', 0.5);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 85%',
        }
      });
      
      gsap.from('.cta-btn-wrapper', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        delay: 0.3,
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 85%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .cta-section {
          width: 100%;
          padding: 80px 40px 120px 40px;
          background: #FFFFFF;
          font-family: 'Poppins', sans-serif;
        }

        .cta-container {
          max-width: 1360px;
          margin: 0 auto;
          border-radius: 20px;
          background: #09023B url('${BgImage}') center center no-repeat;
          background-size: cover;
          padding: 80px 40px 60px 40px;
          position: relative;
          overflow: hidden;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
        }

        .cta-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .cta-title {
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 24px;
          line-height: 1.3;
        }

        .cta-title span {
          color: #FFC107; /* Yellow highlight */
        }

        .cta-subtitle {
          font-size: 18px;
          font-style: italic;
          color: #E2E8F0;
          margin: 0 0 48px;
          font-weight: 400;
        }

        .cta-buttons {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 64px;
        }

        .cta-btn {
          background: #111A3A; /* Solid dark blue */
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 16px 32px;
          color: #FFC107;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          background: #1A2652;
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        .cta-footer {
          font-size: 14px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .cta-container {
            padding: 60px 24px 40px 24px;
            border-radius: 16px;
            background-position: center left; /* Keep robot somewhat visible */
          }
          .cta-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            gap: 16px;
          }
          .cta-btn {
            width: 100%;
          }
        }
      `}</style>

      <section className="cta-section">
        <div className="cta-container" ref={containerRef}>
          <div className="cta-content">
            
            <h2 className="cta-title">
              Ready to Build Your<br />
              <span>First AI Agent?</span>
            </h2>
            
            <p className="cta-subtitle">
              Start free. No credit card. No setup. Just curiosity, a name, and an idea.
            </p>

            <div className="cta-buttons">
              <div className="cta-btn-wrapper"><button className="cta-btn">START BUILDING FREE</button></div>
              <div className="cta-btn-wrapper"><button className="cta-btn">WATCH THE 2-MIN DEMO</button></div>
              <div className="cta-btn-wrapper"><button className="cta-btn">BOOK A SCHOOL DEMO</button></div>
            </div>

            <p className="cta-footer">
              playground@skillzza.com &nbsp;|&nbsp; www.skillzza.com/playground
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
