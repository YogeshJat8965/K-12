import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    handler(mq);
    mq.addEventListener('change', handler as (e: MediaQueryListEvent) => void);
    return () => mq.removeEventListener('change', handler as (e: MediaQueryListEvent) => void);
  }, []);

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
          flex-direction: column;
          gap: 14px;
        }
        @media (min-width: 769px) {
          .hm-inner {
            flex-direction: row;
            gap: 24px;
          }
        }

        /* ═══ LEFT CARD ═══ */
        .hm-left {
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
        @media (min-width: 769px) {
          .hm-left { flex: 1; }
        }
        .hm-left h2 {
          font-weight: 700;
          font-size: 25px;
          line-height: 1.35;
          color: #fff;
          margin: 0 0 24px;
          max-width: calc(100% - 150px);
          position: relative;
          z-index: 2;
        }
        .hm-left-sub {
          font-weight: 400;
          font-size: clamp(11px, 0.95vw, 14px);
          line-height: 1.7;
          color: rgba(255,255,255,0.85);
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
          font-size: clamp(11px, 0.85vw, 13px);
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
          background: linear-gradient(270deg, #F0F4FE 0%, #FFFFFF 49%, #EDF1FE 100%);
          box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
          border-radius: 20px;
          padding: 44px 44px 36px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        @media (min-width: 769px) {
          .hm-right { flex: 1; }
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
          .hm-br-desk { display: none; }
          .hm-inner {
            flex-direction: column !important;
          }
          .hm-left, .hm-right {
            flex: none !important;
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

        /* ═══ MOBILE ═══ */
        @media (max-width: 768px) {
          .hm-section {
            padding: 0 !important;
            overflow-x: hidden !important;
          }
          .hm-inner {
            flex-direction: column !important;
            gap: 14px !important;
          }
          .hm-left {
            flex: none !important;
            width: 100% !important;
            padding: 22px 18px 22px !important;
            border-radius: 14px !important;
            min-height: auto !important;
          }
          .hm-left h2 {
            font-size: 17px !important;
            line-height: 1.35 !important;
            max-width: calc(100% - 90px) !important;
            margin-bottom: 10px !important;
          }
          .hm-left-sub {
            font-size: 11.5px !important;
            line-height: 1.55 !important;
            max-width: calc(100% - 90px) !important;
            margin-bottom: 10px !important;
          }
          .hm-left-line {
            margin: 8px 0 8px !important;
            max-width: calc(100% - 100px) !important;
          }
          .hm-left-footer {
            font-size: 10.5px !important;
            max-width: calc(100% - 100px) !important;
          }
          .hm-robot {
            width: 95px !important;
            right: 4px !important;
            bottom: 0px !important;
          }
          .hm-right {
            flex: none !important;
            width: 100% !important;
            padding: 22px 18px 20px !important;
            border-radius: 14px !important;
            min-height: auto !important;
          }
          .hm-right h2 {
            font-size: 18px !important;
            line-height: 1.3 !important;
            margin-bottom: 10px !important;
          }
          .hm-right-sub {
            font-size: 12.5px !important;
            line-height: 1.55 !important;
          }
          .hm-tags {
            margin-top: 16px !important;
            gap: 8px !important;
          }
          .hm-tag {
            padding: 5px 12px !important;
            font-size: 11px !important;
          }
          .hm-mobile-img {
            width: 100% !important;
            max-width: 100% !important;
            max-height: none !important;
            height: auto !important;
            display: block;
            object-fit: contain;
            object-position: center center;
            margin: 0;
            transform: none !important;
            border-radius: 0;
          }
        }
      `}</style>

      <section className="hm-section" ref={sectionRef}>
        {isMobile ? (
          /* ═══ MOBILE: Show image instead of cards ═══ */
          <img
            src="/landing/responsive-mission.png"
            alt="Skillzza Mission"
            className="hm-mobile-img"
          />
        ) : (
          /* ═══ DESKTOP: Original two-card layout ═══ */
          <div className="hm-inner">
            {/* LEFT */}
            <div className="hm-left" ref={leftCardRef} style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
              <h2>
                We're not just teaching AI.<br className="hm-br-desk" />
                We're shaping the minds that<br className="hm-br-desk" />
                will shape the future.
              </h2>
              <p className="hm-left-sub">
                Every programme, every studio, every internship is designed around one question
                <span style={{ display: 'block', marginTop: '6px', fontWeight: 600, color: '#ffffff' }}>
                  what will tomorrow's world need from today's student?
                </span>
              </p>
              <img src="/landing/robot.png" alt="" className="hm-robot" ref={robotRef} />
            </div>

            {/* RIGHT */}
            <div className="hm-right" ref={rightCardRef}>
              {/* <div className="hm-badge-r">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                <span>Globally Aligned</span>
              </div> */}
              <h2>Aligned with global education standards.</h2>
              <p className="hm-right-sub">NEP 2020, International Baccalaureate, Cambridge, and UN SDG frameworks – our learning architecture meets the world where it is headed.</p>
              <div className="hm-tags">
                {['NEP 2020', 'IB Framework', 'Cambridge', 'UN SDGs'].map(t => (
                  <span className="hm-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
