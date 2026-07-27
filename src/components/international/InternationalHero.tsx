import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowRight, Sparkles, Brain, Rocket, Bot, MonitorPlay, Leaf, Scale, Lightbulb, Landmark } from 'lucide-react';
import { useSplitReveal } from '../../hooks/useSplitReveal';
import heroImg from '../../assets/International Studio/hero-img.webp';

gsap.registerPlugin(ScrollTrigger);

export default function InternationalHero() {
  const heroRef = useRef<HTMLElement>(null);

  useSplitReveal('.ih-h1', 'lines', 0.07, 0.1);
  useSplitReveal('.ih-sub', 'words', 0.02, 0.3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Outer orbit rotates clockwise
      gsap.to('.orbit-outer', { rotation: 360, duration: 80, repeat: -1, ease: 'linear' });
      // Keep badges upright on outer orbit
      gsap.to('.orbit-outer .orbit-badge', { rotation: -360, duration: 80, repeat: -1, ease: 'linear' });

      // Middle orbit rotates clockwise
      gsap.to('.orbit-middle', { rotation: 360, duration: 70, repeat: -1, ease: 'linear' });
      // Keep badges upright on middle orbit (if any added later)
      // gsap.to('.orbit-middle .orbit-badge', { rotation: -360, duration: 70, repeat: -1, ease: 'linear' });

      // Inner orbit rotates anticlockwise
      gsap.to('.orbit-inner', { rotation: -360, duration: 60, repeat: -1, ease: 'linear' });
      // Keep badges upright on inner orbit
      gsap.to('.orbit-inner .orbit-badge', { rotation: 360, duration: 60, repeat: -1, ease: 'linear' });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .ih-section {
          width: 100%;
          background: #8B5CF6;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          padding-top: 140px;
          padding-bottom: 40px;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
          min-height: 85vh;
          display: flex;
          align-items: center;
        }

        .ih-container {
          max-width: 1440px;
          margin: 0 auto;
          width: 100%;
          padding: 0 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
          position: relative;
          z-index: 10;
        }
        @media (min-width: 1024px) {
          .ih-container { flex-direction: row; }
        }

        /* Left Side */
        .ih-left {
          flex: 1;
          color: white;
          max-width: 650px;
        }

        .ih-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          color: white;
          margin-bottom: 24px;
        }

        .ih-h1 {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }
        .ih-h1 .yellow {
          color: #FDE047;
        }

        .ih-sub {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 16px;
          font-weight: 400;
        }

        .ih-btns {
          display: flex;
          gap: 16px;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .ih-btn-primary {
          background: white;
          color: #1A1A2E;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s;
        }
        .ih-btn-primary:hover {
          transform: translateY(-2px);
        }

        .ih-btn-secondary {
          background: transparent;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.5);
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 999px;
          transition: background 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .ih-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* Right Side - Orbits */
        .ih-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          min-height: 600px;
          width: 100%;
        }

        .orbit-badge {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
        }

        .badge-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          color: #8B5CF6;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .orbit-badge:hover .badge-icon-wrapper {
          transform: scale(1.15) translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.8) inset;
          color: #6D28D9;
        }

        .badge-label {
          color: white;
          font-size: 13px;
          font-weight: 600;
          margin-top: 8px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }

        .orbit-badge:hover .badge-label {
          color: #FDE047;
          transform: translateY(-2px) scale(1.05);
          text-shadow: 0 0 10px rgba(253, 224, 71, 0.6);
        }

        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
        
        .orbit-outer {
          border: 2px dashed rgba(255, 255, 255, 0.4);
        }
        
        .orbit-middle {
          border: 2px dashed rgba(255, 255, 255, 0.4);
        }
        
        .orbit-inner {
          border: 2px dashed rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 1024px) {
          .ih-h1 { font-size: 40px; }
          .ih-right { min-height: 500px; transform: scale(0.8); }
        }
        @media (max-width: 768px) {
          .ih-section { padding-top: 140px; padding-bottom: 40px; min-height: auto; }
          .ih-h1 { font-size: 32px; }
          .ih-p { font-size: 16px; }
          .ih-right { min-height: 300px; transform: none; margin-top: 100px; display: flex; align-items: center; justify-content: center; }
          .orbit-ring { border: none; }
          .ih-container { gap: 30px; }
        }
      `}</style>

      <section className="ih-section" ref={heroRef}>
        <div className="ih-container">

          {/* Left Side */}
          <div className="ih-left">
            {/* <div className="ih-badge">
              <Sparkles size={16} className="text-yellow-300" />
              FUTURE SKILLS STUDIOS FOR NEXT-GENERATION LEARNING
            </div> */}

            <h1 className="ih-h1">
              Empowering Students for an<br />
              <span className="yellow">AI-Driven Future</span>
            </h1>

            <div className="ih-btns" style={{ marginTop: '32px' }}>
              <button onClick={() => { document.getElementById('future-skill-studios')?.scrollIntoView({ behavior: 'smooth' }) }} className="ih-btn-primary">
                Explore studios <ArrowRight size={18} />
              </button>
              <button onClick={() => window.location.href = '/contact'} className="ih-btn-secondary">
                Schedule A Discover Session <Calendar size={18} />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="ih-right">

            {/* Outer Orbit (Ring 3) */}
            <div className="orbit-ring orbit-outer hidden md:block" style={{ width: '560px', height: '560px' }}>
              <div className="orbit-badge" style={{ left: '50%', top: '0%' }}>
                <div className="badge-icon-wrapper"><Brain size={28} /></div>
                <span className="badge-label">AI</span>
              </div>
              <div className="orbit-badge" style={{ left: '100%', top: '50%' }}>
                <div className="badge-icon-wrapper"><Lightbulb size={28} /></div>
                <span className="badge-label">Entrepreneurship</span>
              </div>
              <div className="orbit-badge" style={{ left: '50%', top: '100%' }}>
                <div className="badge-icon-wrapper"><Landmark size={28} /></div>
                <span className="badge-label">Finance</span>
              </div>
              <div className="orbit-badge" style={{ left: '0%', top: '50%' }}>
                <div className="badge-icon-wrapper"><Scale size={28} /></div>
                <span className="badge-label">Law</span>
              </div>
            </div>

            {/* Middle Orbit (Ring 2.5) */}
            <div className="orbit-ring orbit-middle hidden md:block" style={{ width: '490px', height: '490px' }}>
              <div style={{ position: 'absolute', top: '14.65%', left: '85.35%', width: '10px', height: '10px', background: 'white', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 10px white' }}></div>
            </div>

            {/* Inner Orbit (Ring 2) */}
            <div className="orbit-ring orbit-inner hidden md:block" style={{ width: '420px', height: '420px' }}>
              <div className="orbit-badge" style={{ left: '85.35%', top: '14.65%' }}>
                <div className="badge-icon-wrapper"><Bot size={28} /></div>
                <span className="badge-label">Robotics</span>
              </div>
              <div className="orbit-badge" style={{ left: '85.35%', top: '85.35%' }}>
                <div className="badge-icon-wrapper"><Leaf size={28} /></div>
                <span className="badge-label">Sustainability</span>
              </div>
              <div className="orbit-badge" style={{ left: '14.65%', top: '85.35%' }}>
                <div className="badge-icon-wrapper"><MonitorPlay size={28} /></div>
                <span className="badge-label">Media</span>
              </div>
              <div className="orbit-badge" style={{ left: '14.65%', top: '14.65%' }}>
                <div className="badge-icon-wrapper"><Rocket size={28} /></div>
                <span className="badge-label">Space</span>
              </div>
            </div>

            {/* Center Image */}
            <div style={{ position: 'absolute', zIndex: 10, width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={heroImg} alt="Hero Focus" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
