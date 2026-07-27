import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import RobotImg from '../../assets/AI playground/Mask Group 41.png';

import { use3DTilt } from '../../hooks/usePremiumHover';

gsap.registerPlugin(ScrollTrigger);

export default function AgentBuilderBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  use3DTilt('.abb-container', 5);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bannerRef.current) {
        gsap.from(bannerRef.current, {
          y: 60,
          rotateX: 10,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 85%',
          }
        });

        const robot = bannerRef.current.querySelector('.abb-image-wrapper');
        gsap.from(robot, {
          x: -60,
          opacity: 0,
          duration: 1.2,
          delay: 0.3,
          ease: 'bounce.out',
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
          /* Updated to match the AgentLibrary background color */
          background: #e8e4fdff;
          padding: 40px 40px;
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
          left: 0px; 
          top: 50%;
          transform: translateY(-50%);
          width: 290px; 
          height: 200px;
          background: transparent url('${RobotImg}') center center no-repeat padding-box;
          background-size: contain;
          opacity: 1;
          animation: robotBob 2.5s infinite alternate ease-in-out;
        }

        @keyframes robotBob {
          from { transform: translateY(-50%) translateY(0); }
          to { transform: translateY(-50%) translateY(-12px); }
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
          .abb-section { padding: 40px 20px; }
          .abb-left { flex: 0 0 30%; max-width: 30%; }
          .abb-image-wrapper { width: 100%; height: 200px; left: 0; background-position: left center; }
          .abb-right { padding: 40px 20px 40px 0; }
          .abb-h3 { font-size: 22px; }
        }

        @keyframes robotBobMobile {
          from { transform: translateY(0) scale(1.5); }
          to { transform: translateY(-12px) scale(1.5); }
        }

        @media (max-width: 768px) {
          .abb-section { padding: 40px 16px; }
          .abb-container { flex-direction: column; text-align: center; padding: 24px 24px 40px; min-height: auto; gap: 8px; }
          .abb-left { width: 100%; height: auto; flex: none; display: flex; justify-content: center; overflow: visible; }
          .abb-image-wrapper { 
            position: relative;
            left: 0;
            top: 0;
            margin-top: 20px;
            margin-bottom: 10px;
            width: 100%;
            max-width: 220px;
            height: 140px;
            background-position: center;
            background-size: contain;
            animation: robotBobMobile 2.5s infinite alternate ease-in-out;
          }
          .abb-right { padding: 0; }
        }

        @media (max-width: 480px) {
          .abb-h3 { font-size: 1.2rem; }
          .abb-p { font-size: 14px; }
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
