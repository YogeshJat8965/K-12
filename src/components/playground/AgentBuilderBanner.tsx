import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import RobotImg from '../../assets/AI playground/Mask Group 41.png';

gsap.registerPlugin(ScrollTrigger);

export default function AgentBuilderBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bannerRef.current) {
        gsap.from(bannerRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 85%',
          }
        });
      }
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .abb-section {
          width: 100%;
          /* This creates the two-tone background: top half is purple matching AgentLibrary, bottom half is white */
          background: linear-gradient(to bottom, #6C3CF7 50%, #FFFFFF 50%);
          padding: 60px 40px;
          display: flex;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
        }

        .abb-container {
          max-width: 1100px; /* Reduced overall width */
          width: 100%;
          background: #2E166A; /* Match the dark purple from screenshot */
          border-radius: 16px;
          display: flex;
          align-items: center;
          position: relative;
          min-height: 240px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .abb-left {
          flex: 0 0 350px; /* Reduced width for tighter layout */
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .abb-image-wrapper {
          position: absolute;
          left: -20px; /* Slight overflow to the left if needed, or perfectly aligned */
          top: 50%;
          transform: translateY(-50%);
          width: 380px; /* Image smaller */
          height: 263px;
          background: transparent url('${RobotImg}') center center no-repeat padding-box;
          background-size: contain;
          opacity: 1;
        }

        .abb-right {
          flex: 1;
          padding: 40px 60px 40px 40px; /* Added left padding to shift text right */
          color: #FFFFFF;
        }

        .abb-h3 {
          font-size: 25px;
          font-weight: 700;
          margin: 0 0 12px;
          letter-spacing: 0.5px;
          color: #FFFFFF;
        }

        .abb-p {
          font-size: 16px;
          line-height: 1.6;
          color: #FFFFFF; /* All texts white */
          margin: 0;
          max-width: 650px;
        }

        .abb-p b {
          color: #FFFFFF;
          font-weight: 700;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1024px) {
          .abb-section { padding: 40px 32px; }
          .abb-container { flex-direction: column; text-align: center; padding-top: 180px; min-height: auto; }
          .abb-left { width: 100%; height: auto; position: static; flex: none; display: block; }
          .abb-image-wrapper { 
            position: absolute;
            top: -60px;
            left: 50%;
            transform: translateX(-50%);
            width: 320px;
            height: 220px;
            background-position: center;
          }
          .abb-right { padding: 0 32px 40px; }
        }

        @media (max-width: 600px) {
          .abb-section { padding: 40px 20px; }
          .abb-image-wrapper { width: 280px; height: 190px; top: -40px; }
          .abb-container { padding-top: 160px; }
          .abb-right { padding: 0 20px 32px; }
        }
      `}</style>

      <section className="abb-section">
        <div className="abb-container" ref={bannerRef}>
          <div className="abb-left">
            <div className="abb-image-wrapper"></div>
          </div>
          <div className="abb-right">
            <h3 className="abb-h3">Can't find the agent you want?</h3>
            <p className="abb-p">
              Students at Grades 8+ can use the Agent Builder to create entirely original agents from scratch - <b>no coding required.</b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
