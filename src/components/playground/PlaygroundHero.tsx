import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import RightImg from '../../assets/AI playground/Untitled-2.png';
import Icon1 from '../../assets/AI playground/Group 27629.svg';
import Icon2 from '../../assets/AI playground/Group 27630.svg';
import Icon3 from '../../assets/AI playground/Group 27631.svg';
import Icon4 from '../../assets/AI playground/Group 27632.svg';

import { useSplitReveal } from '../../hooks/useSplitReveal';
import { useMagneticRipple } from '../../hooks/usePremiumHover';

gsap.registerPlugin(ScrollTrigger);

export default function PlaygroundHero() {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const featBarRef = useRef<HTMLDivElement>(null);

  useSplitReveal('.ph-h1', 'lines', 0.07, 0.1);
  useSplitReveal('.ph-sub', 'words', 0.02, 0.3);
  useMagneticRipple('.ph-btn', 0.5);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge
      if (heroRef.current?.querySelector('.ph-badge')) {
        gsap.from('.ph-badge', { y: -30, opacity: 0, duration: 0.8, ease: 'power3.out' });
      }

      // Subtitle
      gsap.from('.ph-subtitle', { opacity: 0, y: 20, duration: 0.8, delay: 0.2 });

      // Buttons
      gsap.from('.ph-btn-wrapper', {
        y: 40,
        opacity: 0,
        rotateX: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        delay: 0.4
      });

      // Hero Image
      gsap.from(imgRef.current, {
        x: 100,
        opacity: 0,
        rotateY: -15,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      });

      // Parallax effect removed per user request

      // Feature cards 3D flip + stagger
      if (featBarRef.current) {
        gsap.from(featBarRef.current, {
          y: 60, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: featBarRef.current, start: 'top 95%' }
        });
        const items = featBarRef.current.querySelectorAll('.ph-feat-item');
        gsap.from(items, {
          opacity: 0,
          y: 30,
          scale: 0.8,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: featBarRef.current,
            start: 'top 95%',
          }
        });
        const icons = featBarRef.current.querySelectorAll('.ph-feat-icon');
        gsap.from(icons, {
          rotate: 360,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featBarRef.current,
            start: 'top 95%',
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .ph-section {
          width: 100%;
          background: #ffffff;
          padding-top: 210px; /* Increased gap to prevent navbar overlap */
          padding-bottom: 20px;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .ph-content {
          max-width: 1760px;
          width: 100%;
          margin: 0 auto;
          padding: 0 80px 20px;
          position: relative;
          display: flex;
          align-items: center;
        }

        /* ─── LEFT ─── */
        .ph-left {
          flex: 0 0 55%;
          max-width: 55%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          z-index: 10;
          padding-right: 20px;
        }

        .ph-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #EEEDFD;
          border-radius: 40px;
          padding: 8px 18px;
          margin-bottom: 24px;
        }
        .ph-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #6C3CF7;
          flex-shrink: 0;
        }
        .ph-badge-text {
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.5px;
          color: #6C3CF7;
          white-space: nowrap;
          text-transform: uppercase;
        }

        .ph-h1 {
          font-weight: 800;
          font-size: clamp(32px, 4vw, 62px);
          line-height: 1.15;
          color: #1A1A2E;
          margin: 0 0 16px;
          letter-spacing: -1px;
          white-space: nowrap;
        }
        .ph-h1 .purple { color: #6C3CF7; }

        .ph-subtitle {
          font-weight: 700;
          font-size: 18px; /* Increased by 2px */
          color: #1A1A2E;
          margin: 0 0 24px;
          letter-spacing: 0px;
        }
        .ph-subtitle .purple { color: #6C3CF7; font-weight: 700; }

        .ph-sub {
          font-weight: 400;
          font-size: 17px; /* Increased by 2px */
          line-height: 1.65;
          color: #6B7280;
          margin: 0 0 40px;
          max-width: 560px;
        }

        .ph-btns {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .ph-btn {
          border: none; cursor: pointer;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          border-radius: 8px;
          padding: 12px 24px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }
        .ph-btn:hover { transform: translateY(-2px); }

        .ph-btn-primary {
          background: #6C3CF7; color: #fff;
          font-size: 14px;
          box-shadow: 0 4px 14px rgba(108,60,247,0.3);
        }
        .ph-btn-primary:hover {
          background: #5728e0;
          box-shadow: 0 6px 20px rgba(108,60,247,0.4);
        }

        .ph-btn-demo {
          background: transparent; color: #6C3CF7;
          border: 1px solid #C4B5FD;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 600;
        }
        .ph-btn-demo:hover { background: #F5F3FF; border-color: #6C3CF7; }

        .ph-btn-schools {
          background: transparent; color: #6C3CF7;
          border: 1px solid #C4B5FD;
          font-size: 14px;
        }
        .ph-btn-schools:hover { background: #F5F3FF; border-color: #6C3CF7; }

        /* ─── RIGHT IMAGE ─── */
        .ph-right-img {
          position: absolute;
          right: 5%; /* Shifted to the left slightly */
          top: 46%; /* Adjusted vertical alignment */
          transform: translateY(-50%);
          width: 45vw; /* Slightly increased size */
          max-width: 850px;
          z-index: 1;
          pointer-events: none;
        }

        /* ─── BOTTOM FEATURE CARD ─── */
        .ph-feature-wrapper {
          position: relative;
          z-index: 20;
          max-width: 1760px;
          width: 100%;
          margin: 0 auto;
          padding: 0 80px 40px;
          margin-top: 20px;
        }

        .ph-feature-bar {
          background: #F6F4FD 0% 0% no-repeat padding-box;
          border-radius: 20px;
          display: inline-flex;
          align-items: stretch;
          padding: 8px 36px;
          max-width: 1100px; /* Made slightly wider to fit everything nicely */
        }

        .ph-feat-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 28px;
        }

        .ph-feat-icon {
          width: 56px; height: 56px;
          flex-shrink: 0;
          transition: transform 0.22s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ph-feat-icon:hover {
          transform: scale(1.05);
        }
        .ph-feat-icon img { width: 100%; height: 100%; object-fit: contain; }

        .ph-feat-divider {
          width: 1px;
          background: #E0DEEB;
          margin: 16px 0;
        }

        .ph-feat-text {
          font-weight: 700;
          font-size: 15px;
          color: #1A1A2E;
          line-height: 1.3;
          position: relative;
        }

        .ph-feat-item:hover .ph-feat-icon img {
          animation: liquidWiggle 0.6s ease;
        }
        .ph-feat-item:hover .ph-feat-text::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          height: 2px;
          background: #6C3CF7;
          width: 100%;
          transform-origin: left;
          animation: drawUnderline 0.3s ease forwards;
        }
        @keyframes drawUnderline {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes liquidWiggle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.1) rotate(5deg) skewX(-5deg); }
          50% { transform: scale(0.9) rotate(-5deg) skewX(5deg); }
          75% { transform: scale(1.05) rotate(2deg) skewX(-2deg); }
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1200px) {
          .ph-right-img { width: 45vw; right: 2%; }
          .ph-left { flex: 0 0 60%; max-width: 60%; }
          .ph-feature-bar { padding: 8px 16px; }
          .ph-feat-item { padding: 12px 16px; }
        }

        @media (max-width: 1024px) {
          .ph-section { padding-top: 100px; padding-left: 20px; padding-right: 20px; }
          .ph-content { padding: 0 0 80px; flex-direction: column; align-items: center; }
          .ph-left { flex: 1; max-width: 100%; padding-right: 0; }
          .ph-right-img { position: relative; width: 90%; max-width: 600px; transform: none; right: auto; top: auto; margin: 40px auto 0; display: block; }
          .ph-h1 { font-size: 2.2rem; white-space: normal; text-align: left; }
          .ph-feature-wrapper { padding: 0 0 40px; margin-top: 20px; }
          .ph-btns { justify-content: flex-start; }
        }

        @media (max-width: 768px) {
          .ph-section { padding-top: 140px; padding-left: 16px; padding-right: 16px; }
          .ph-h1 { font-size: 1.8rem; line-height: 1.2; }
          .ph-h1 .purple { display: block; }
          .ph-btns { flex-direction: column; align-items: stretch; width: 100%; gap: 12px; }
          .ph-btn-wrapper { width: 100%; }
          .ph-btns button { width: 100%; }
          .ph-right-img { width: 100%; }
          .ph-feature-bar { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; justify-items: center; background: transparent; box-shadow: none; }
          .ph-feat-item { min-width: 0; width: 100%; background: #ffffff; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-radius: 12px; }
          .ph-feat-divider { display: none; }
        }

        @media (max-width: 480px) {
          .ph-h1 { font-size: 1.5rem; }
          .ph-feature-bar { grid-template-columns: 1fr; }
          .ph-feat-item { justify-content: flex-start; }
        }
      `}</style>

      <section className="ph-section" ref={heroRef}>
        <div className="ph-content">
          <div className="ph-left">
            {/* <div className="ph-badge">
              <span className="ph-badge-dot" />
              <span className="ph-badge-text">BUILD YOUR FIRST AI AGENT</span>
            </div> */}

            <h1 className="ph-h1">
              Build Your First<br />
              <span className="purple">AI AGENT</span> in Minutes
            </h1>

            <p className="ph-subtitle">
              No coding. No complexity. <span className="purple">Just curiosity</span>
            </p>

            <p className="ph-sub">
              AI Playground is a safe, plug-and-play creative space where students pick a prebuilt AI agent, shape it to their own interests, and bring their ideas to life.
            </p>

            <div className="ph-btns">
              <div className="ph-btn-wrapper"><button className="ph-btn ph-btn-primary">Try The Playground</button></div>
              <div className="ph-btn-wrapper"><button className="ph-btn ph-btn-demo">WATCH 2-MIN DEMO</button></div>
              <div className="ph-btn-wrapper"><button className="ph-btn ph-btn-schools">For Schools</button></div>
            </div>
          </div>

          <img ref={imgRef} src={RightImg} alt="Build AI Agents" className="ph-right-img" />
        </div>

        <div className="ph-feature-wrapper">
          <div className="ph-feature-bar" ref={featBarRef}>
            <div className="ph-feat-item">
              <div className="ph-feat-icon">
                <img src={Icon1} alt="No Code Needed" />
              </div>
              <div className="ph-feat-text">
                No Coded<br />Needed
              </div>
            </div>
            <div className="ph-feat-divider" />

            <div className="ph-feat-item">
              <div className="ph-feat-icon">
                <img src={Icon2} alt="Prebuilt Agents" />
              </div>
              <div className="ph-feat-text">
                Prebuilt<br />Agents
              </div>
            </div>
            <div className="ph-feat-divider" />

            <div className="ph-feat-item">
              <div className="ph-feat-icon">
                <img src={Icon3} alt="Safe & Moderated" />
              </div>
              <div className="ph-feat-text">
                Safe &<br />Moderated
              </div>
            </div>
            <div className="ph-feat-divider" />

            <div className="ph-feat-item">
              <div className="ph-feat-icon">
                <img src={Icon4} alt="Parent Visible" />
              </div>
              <div className="ph-feat-text">
                Parent<br />Visible
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
