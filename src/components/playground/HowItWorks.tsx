import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import newImg from '../../assets/AI playground/new-img.png';
import { useSplitReveal } from '../../hooks/useSplitReveal';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useSplitReveal('.hiw-h2', 'words', 0.06, 0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imgRef.current) {
        gsap.from(imgRef.current, {
          y: 40,
          opacity: 0,
          duration: 1.2,
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

  return (
    <>
      <style>{`
        .hiw-section {
          width: 100%;
          padding: 20px 40px 40px;
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
          margin: 0 0 30px;
          letter-spacing: -0.5px;
        }

        .hiw-h2 .purple {
          color: #6C3CF7;
        }

        .hiw-image-wrapper {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hiw-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1024px) {
          .hiw-section { padding: 20px 20px 40px; }
          .hiw-h2 { font-size: 2.2rem; }
        }

        @media (max-width: 768px) {
          .hiw-section { padding: 20px 16px 30px; }
          .hiw-subtitle { margin-bottom: 20px; }
          .hiw-timeline-line { left: 40px; }
          .hiw-h2 { font-size: 1.8rem; line-height: 1.2; }
        }

        @media (max-width: 480px) {
          .hiw-h2 { font-size: 1.5rem; }
        }
      `}</style>

      {/* <section className="hiw-section" ref={sectionRef}>
        <div className="hiw-container">
          <div className="hiw-badge">HOW IT WORKS</div>
          
          <h2 className="hiw-h2">
            From Curiosity to Creation in <span className="purple">4 Steps</span>
          </h2>

          <div className="hiw-image-wrapper" ref={imgRef}>
            <img src={newImg} alt="How It Works" className="hiw-image" />
          </div>
        </div>
      </section> */}
    </>
  );
}
