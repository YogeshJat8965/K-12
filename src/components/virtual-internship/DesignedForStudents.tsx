import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Route, CalendarClock, ShieldCheck, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function DesignedForStudents() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.dfs-text-elem',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
      gsap.fromTo('.dfs-center-node',
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
      gsap.fromTo('.dfs-outer-node',
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)', delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );

      const cards = gsap.utils.toArray('.dfs-card');
      gsap.fromTo(cards,
        { x: 40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const features = [
    {
      id: 1, title: "Age-Appropriate Pathways",
      desc: "Curriculum calibrated for Grades 6-12 across cognitive and skill maturity levels.",
      icon: <GraduationCap size={36} strokeWidth={2} />,
      colorClass: "dfs-purple"
    },
    {
      id: 2, title: "Step-by-Step Structure",
      desc: "Guided modules with clear milestones so students never feel lost or overwhelmed.",
      icon: <Route size={36} strokeWidth={2} />,
      colorClass: "dfs-green"
    },
    {
      id: 3, title: "Flexible & Self-Paced",
      desc: "Designed to complement - never disrupt - academic schedules.",
      icon: <CalendarClock size={36} strokeWidth={2} />,
      colorClass: "dfs-orange"
    },
    {
      id: 4, title: "Safe, Moderated Platform",
      desc: "Every interaction is monitored; parents have complete visibility into their child's journey.",
      icon: <ShieldCheck size={36} strokeWidth={2} />,
      colorClass: "dfs-blue"
    },
    {
      id: 5, title: "Mentor-Supported",
      desc: "Real humans, not just AI - available to guide, correct, and encourage.",
      icon: <Users size={36} strokeWidth={2} />,
      colorClass: "dfs-pink"
    }
  ];

  const cx = 250, cy = 250, r = 180;
  const nodePositions = features.map((_, idx) => {
    const angle = (idx * 72 - 90);
    const rad = (angle * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  });

  return (
    <>
      <style>{`
        .dfs-section {
          width: 100%;
          padding: 80px 40px;
          background-color: #F9FAFB;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
          position: relative;
        }
        
        /* Premium Background Elements */
        .dfs-grid-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            linear-gradient(rgba(108, 60, 247, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108, 60, 247, 0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 0;
          mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%);
          -webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%);
        }

        .dfs-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 0;
          opacity: 0.5;
          pointer-events: none;
          animation: floatGlow 12s ease-in-out infinite alternate;
        }

        .dfs-glow-1 {
          background: rgba(108, 60, 247, 0.2); /* Soft Purple */
          top: -250px;
          right: -150px;
        }

        .dfs-glow-2 {
          background: rgba(236, 72, 153, 0.15); /* Soft Pink */
          bottom: -250px;
          left: -150px;
          animation-delay: -6s;
        }

        @keyframes floatGlow {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-40px, 60px) scale(1.1); }
        }
        .dfs-container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* ─── LEFT COLUMN ─── */
        .dfs-left {
          display: flex;
          flex-direction: column;
        }
        .dfs-header {
          font-size: clamp(40px, 4.5vw, 56px);
          font-weight: 800;
          color: #1A1A2E;
          line-height: 1.1;
          margin: 0 0 24px;
          letter-spacing: -1.5px;
        }
        .dfs-header .purple { color: #6C3CF7; }
        .dfs-line {
          width: 80px;
          height: 4px;
          background-color: #6C3CF7;
          border-radius: 4px;
          margin-bottom: 32px;
        }
        .dfs-desc {
          font-size: 18px;
          line-height: 1.6;
          color: #4B5563;
          margin: 0 0 60px;
          font-weight: 500;
          max-width: 90%;
        }
        .dfs-desc .purple-bold {
          color: #6C3CF7;
          font-weight: 700;
        }

        /* ─── DIAGRAM ─── */
        .dfs-diagram {
          position: relative;
          width: 500px;
          height: 500px;
          flex-shrink: 0;
          margin-left: 20px;
        }
        .dfs-orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 360px;
          height: 360px;
          border-radius: 50%;
          border: 2px dashed #D1D5DB;
        }
        .dfs-center-node {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 190px;
          height: 190px;
          background: linear-gradient(135deg, #7C3AED, #5B21B6);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          text-align: center;
          z-index: 10;
          box-shadow: 0 16px 50px rgba(108, 60, 247, 0.4);
        }
        .dfs-center-icon { margin-bottom: 10px; }
        .dfs-center-text {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
          margin: 0;
        }

        .dfs-orbit-wrapper {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          animation: dfs-orbit-spin 25s linear infinite;
          z-index: 5;
        }
        @keyframes dfs-orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .dfs-outer-node {
          position: absolute;
          width: 86px;
          height: 86px;
          background: #FFFFFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease;
          border: 2px solid #F3F4F6;
        }
        .dfs-node-inner {
          animation: dfs-counter-spin 25s linear infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @keyframes dfs-counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .dfs-purple.dfs-outer-node { color: #6C3CF7; }
        .dfs-green.dfs-outer-node { color: #10B981; }
        .dfs-orange.dfs-outer-node { color: #F97316; }
        .dfs-blue.dfs-outer-node { color: #3B82F6; }
        .dfs-pink.dfs-outer-node { color: #DB2777; }

        .dfs-outer-node.active { z-index: 20; transform: translate(-50%, -50%) scale(1.15) !important; }
        .dfs-outer-node.active.dfs-purple { border-color: #6C3CF7; box-shadow: 0 0 0 4px rgba(108,60,247,0.15), 0 10px 30px rgba(108,60,247,0.2); }
        .dfs-outer-node.active.dfs-green { border-color: #10B981; box-shadow: 0 0 0 4px rgba(16,185,129,0.15), 0 10px 30px rgba(16,185,129,0.2); }
        .dfs-outer-node.active.dfs-orange { border-color: #F97316; box-shadow: 0 0 0 4px rgba(249,115,22,0.15), 0 10px 30px rgba(249,115,22,0.2); }
        .dfs-outer-node.active.dfs-blue { border-color: #3B82F6; box-shadow: 0 0 0 4px rgba(59,130,246,0.15), 0 10px 30px rgba(59,130,246,0.2); }
        .dfs-outer-node.active.dfs-pink { border-color: #DB2777; box-shadow: 0 0 0 4px rgba(219,39,119,0.15), 0 10px 30px rgba(219,39,119,0.2); }

        .dfs-conn-dot {
          position: absolute;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #6C3CF7;
          z-index: 4;
          transform: translate(-50%, -50%);
        }
        .dfs-diagram:hover .dfs-orbit-wrapper { animation-play-state: paused; }
        .dfs-diagram:hover .dfs-node-inner { animation-play-state: paused; }

        /* ─── RIGHT COLUMN ─── */
        .dfs-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .dfs-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          gap: 24px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.04);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 2px solid transparent;
          cursor: default;
        }
        .dfs-card.highlight {
          transform: translateX(-12px) scale(1.03);
          box-shadow: 0 16px 40px rgba(0,0,0,0.08);
        }
        .dfs-card.highlight.dfs-purple { border-color: rgba(108,60,247,0.3); }
        .dfs-card.highlight.dfs-green { border-color: rgba(16,185,129,0.3); }
        .dfs-card.highlight.dfs-orange { border-color: rgba(249,115,22,0.3); }
        .dfs-card.highlight.dfs-blue { border-color: rgba(59,130,246,0.3); }
        .dfs-card.highlight.dfs-pink { border-color: rgba(219,39,119,0.3); }

        .dfs-icon-box {
          width: 64px; height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .dfs-purple .dfs-icon-box { background: rgba(108,60,247,0.1); color: #6C3CF7; }
        .dfs-green .dfs-icon-box { background: rgba(16,185,129,0.1); color: #10B981; }
        .dfs-orange .dfs-icon-box { background: rgba(249,115,22,0.1); color: #F97316; }
        .dfs-blue .dfs-icon-box { background: rgba(59,130,246,0.1); color: #3B82F6; }
        .dfs-pink .dfs-icon-box { background: rgba(219,39,119,0.1); color: #DB2777; }

        .dfs-card-content { flex: 1; }
        .dfs-card-title { font-size: 18px; font-weight: 700; margin: 0 0 6px; }
        .dfs-purple .dfs-card-title { color: #6C3CF7; }
        .dfs-green .dfs-card-title { color: #10B981; }
        .dfs-orange .dfs-card-title { color: #F97316; }
        .dfs-blue .dfs-card-title { color: #3B82F6; }
        .dfs-pink .dfs-card-title { color: #DB2777; }
        .dfs-card-desc { font-size: 14px; color: #4B5563; line-height: 1.6; margin: 0; }

        /* Dot patterns removed in favor of premium glowing grid */

        @media (max-width: 1200px) {
          .dfs-container { grid-template-columns: 1fr; gap: 60px; }
          .dfs-left { width: 100%; align-items: center; padding-right: 0; }
          .dfs-desc { text-align: center; max-width: 100%; margin-bottom: 20px; }
          .dfs-header { text-align: center; }
          .dfs-diagram { margin-left: 0; }
        }
        
        @media (max-width: 900px) {
          .dfs-diagram { display: none; }
        }

        @media (max-width: 768px) {
          /* No diagram needed here anymore since it's hidden */
        }

        @media (max-width: 600px) {
          .dfs-section { padding: 60px 20px; }
          .dfs-header { font-size: 32px; }
          .dfs-desc { font-size: 15px; }
          .dfs-card { flex-direction: column; align-items: flex-start; gap: 16px; padding: 20px; text-align: left; }
        }
      `}</style>

      <section className="dfs-section" ref={sectionRef}>
        <div className="dfs-grid-bg"></div>
        <div className="dfs-glow dfs-glow-1"></div>
        <div className="dfs-glow dfs-glow-2"></div>

        <div className="dfs-container">
          {/* LEFT: Text + Diagram */}
          <div className="dfs-left">
            <h2 className="dfs-header dfs-text-elem">
              Designed Specifically<br />
              <span className="purple">for School Students</span>
            </h2>
            <div className="dfs-line dfs-text-elem"></div>
            <p className="dfs-desc dfs-text-elem">
              Virtual Internships are <span className="purple-bold">not adapted from regular programmes</span> -
              they are purpose-built for school learners, with age-appropriate pacing, safeguards, and support.
            </p>

            <div className="dfs-diagram">
              <div className="dfs-orbit-ring"></div>
              <div className="dfs-center-node">
                <GraduationCap className="dfs-center-icon" size={56} />
                <p className="dfs-center-text">Purpose-Built<br />for School<br />Learners</p>
              </div>
              <div className="dfs-orbit-wrapper">
                {features.map((feature, idx) => {
                  const pos = nodePositions[idx];
                  return (
                    <div
                      key={feature.id}
                      className={`dfs-outer-node ${feature.colorClass} ${hoveredId === feature.id ? 'active' : ''}`}
                      style={{ left: `${pos.x}px`, top: `${pos.y}px`, transform: 'translate(-50%, -50%)' }}
                      onMouseEnter={() => setHoveredId(feature.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div className="dfs-node-inner">{feature.icon}</div>
                    </div>
                  );
                })}
              </div>
              {features.map((_, idx) => {
                const angle = (idx * 72 - 90);
                const rad = (angle * Math.PI) / 180;
                const dotR = 126; // position of connector dots
                return (
                  <div key={idx} className="dfs-conn-dot" style={{ left: `${cx + dotR * Math.cos(rad)}px`, top: `${cy + dotR * Math.sin(rad)}px` }} />
                );
              })}
            </div>
          </div>

          {/* RIGHT: Cards */}
          <div className="dfs-right">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`dfs-card ${feature.colorClass} ${hoveredId === feature.id ? 'highlight' : ''}`}
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="dfs-icon-box">{feature.icon}</div>
                <div className="dfs-card-content">
                  <h3 className="dfs-card-title">{feature.title}</h3>
                  <p className="dfs-card-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
