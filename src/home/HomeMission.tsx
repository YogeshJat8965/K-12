import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLImageElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {
      // Left Card: 3D Flip
      if (leftCardRef.current) {
        gsap.from(leftCardRef.current, {
          rotationY: 90,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        });
      }

      // Right Card: Slide up
      if (rightCardRef.current) {
        gsap.from(rightCardRef.current, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        });
      }

      // Robot animation removed as requested

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .hm-section {
          width: 100%;
          background: #fff;
          padding: clamp(40px,4vw,80px) clamp(20px,4vw,80px);
          font-family: 'Poppins', sans-serif;
          box-sizing: border-box;
        }
        .hm-inner {
          max-width: 1640px;
          margin: 0 auto;
          display: flex;
          gap: 24px;
        }

        /* ═══ LEFT CARD ═══ */
        .hm-left {
          flex: 1;
          background: linear-gradient(179deg, #431AA4 0%, #431AA4 100%);
          box-shadow: 0px 3px 6px rgba(67,26,164,0.18);
          border-radius: 20px;
          padding: 44px 44px 36px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .hm-badge-l {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #E8703A;
          border-radius: 30px;
          padding: 6px 16px;
          width: fit-content;
          margin-bottom: 32px;
        }
        .hm-badge-l svg { flex-shrink: 0; }
        .hm-badge-l span {
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 1.8px;
          color: #fff;
          text-transform: uppercase;
        }
        .hm-left h2 {
          font-weight: 700;
          font-size: 26px;
          line-height: 1.35;
          color: #fff;
          margin: 0 0 24px;
          max-width: calc(100% - 200px);
          position: relative;
          z-index: 2;
        }
        .hm-left-sub {
          font-weight: 400;
          font-size: clamp(13px, 1vw, 16px);
          line-height: 1.7;
          color: rgba(255,255,255,0.7);
          margin: 0;
          max-width: calc(100% - 180px);
          position: relative;
          z-index: 2;
        }
        .hm-left-line {
          width: 100%;
          max-width: 360px;
          height: 1px;
          background: rgba(255,255,255,0.2);
          margin: auto 0 16px;
        }
        .hm-left-footer {
          font-size: clamp(12px, 0.85vw, 14px);
          font-style: italic;
          color: rgba(255,255,255,0.55);
        }
        .hm-robot {
          position: absolute;
          bottom: 0; right: 0;
          width: clamp(150px, 18vw, 258px);
          height: auto;
          pointer-events: none;
          z-index: 1;
        }

        /* ═══ RIGHT CARD ═══ */
        .hm-right {
          flex: 1;
          background: linear-gradient(270deg, #F0F4FE 0%, #FFFFFF 49%, #EDF1FE 100%);
          box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
          border-radius: 20px;
          padding: 44px 44px 36px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .hm-badge-r {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fff;
          border: 1.5px solid #A7F3D0;
          border-radius: 30px;
          padding: 6px 16px;
          width: fit-content;
          margin-bottom: 32px;
        }
        .hm-badge-r span {
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 1.8px;
          color: #059669;
          text-transform: uppercase;
        }
        .hm-right h2 {
          font-weight: 700;
          font-size: 32px;
          line-height: 1.35;
          color: #1A1A2E;
          margin: 0 0 24px;
        }
        .hm-right-sub {
          font-weight: 400;
          font-size: clamp(13px, 1vw, 16px);
          line-height: 1.7;
          color: #84888B;
          margin: 0 0 auto;
        }
        .hm-tags {
          margin-top: 36px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .hm-tag {
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 40px;
          padding: 8px 20px;
          font-size: clamp(11px, 0.8vw, 13px);
          font-weight: 500;
          color: #374151;
          cursor: default;
          transition: border-color 0.2s, color 0.2s;
        }
        .hm-tag:hover {
          border-color: #6C3CF7;
          color: #6C3CF7;
        }

        @media (max-width: 1024px) {
          .hm-inner {
            flex-direction: column !important;
          }
          .hm-left, .hm-right {
            width: 100% !important;
            padding: 32px 24px 28px !important;
          }
          .hm-left *, .hm-right * {
            word-break: normal !important;
            overflow-wrap: normal !important;
            white-space: normal !important;
          }
          .hm-robot {
            width: 140px !important;
          }
        }
      `}</style>

      <section className="hm-section" ref={sectionRef}>
        <div className="hm-inner">

          {/* LEFT */}
          <div className="hm-left" ref={leftCardRef} style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
            <div className="hm-badge-l">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <span>Our Mission</span>
            </div>
            <h2>We're not just teaching AI. We're shaping the minds that will shape the future.</h2>
            <p className="hm-left-sub">Every programme, every studio, every internship is designed around one question – what will tomorrow's world need from today's student?</p>
            <div className="hm-left-line" />
            <div className="hm-left-footer">Purposeful by design. Future-first in approach.</div>
            <img src="/landing/robot.png" alt="" className="hm-robot" ref={robotRef} />
          </div>

          {/* RIGHT */}
          <div className="hm-right" ref={rightCardRef}>
            <div className="hm-badge-r">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              <span>Globally Aligned</span>
            </div>
            <h2>Powered by Skillzza. Aligned with global education standards.</h2>
            <p className="hm-right-sub">NEP 2020, International Baccalaureate, Cambridge, and UN SDG frameworks – our learning architecture meets the world where it is headed.</p>
            <div className="hm-tags">
              {['NEP 2020', 'IB Framework', 'Cambridge', 'UN SDGs'].map(t => (
                <span className="hm-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
