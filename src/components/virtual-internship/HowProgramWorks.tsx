import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Briefcase, BookOpen, Rocket, Trophy, Calendar, Clock, Monitor } from 'lucide-react';

import img1 from '../../assets/virtual internship/IMG_9190.PNG';
import img2 from '../../assets/virtual internship/IMG_9191.PNG';
import img3 from '../../assets/virtual internship/IMG_9192.PNG';
import img4 from '../../assets/virtual internship/IMG_9193.PNG';
import img5 from '../../assets/virtual internship/IMG_9194.PNG';

gsap.registerPlugin(ScrollTrigger);

export default function HowProgramWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.hpw-header, .hpw-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Timeline nodes and line
      gsap.from('.hpw-timeline-line', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.hpw-timeline-container',
          start: 'top 85%',
        }
      });

      gsap.from('.hpw-node', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.hpw-timeline-container',
          start: 'top 85%',
        }
      });

      // Cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.hpw-card');
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          }
        });
      }

      // Banner animation
      gsap.from(bannerRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top 90%',
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    { num: 1, title: "Discover", desc: "Students take a short interest and aptitude assessment to identify suitable career paths.", img: img1, icon: <Compass size={16} /> },
    { num: 2, title: "Enroll in a Studio", desc: "They select a domain-specific internship and receive a real-world problem statement.", img: img2, icon: <Briefcase size={16} /> },
    { num: 3, title: "Learn & Apply", desc: "Through guided modules, students learn relevant concepts and apply them to practical tasks.", img: img3, icon: <BookOpen size={16} /> },
    { num: 4, title: "Build a Capstone", desc: "Students create a final deliverable - a product prototype, business pitch, or analytical report.", img: img4, icon: <Rocket size={16} /> },
    { num: 5, title: "Earn & Showcase", desc: "Upon completion, students receive certification and a portfolio-ready project they can showcase.", img: img5, icon: <Trophy size={16} /> }
  ];

  return (
    <>
      <style>{`
        .hpw-section {
          width: 100%;
          padding: 100px 40px;
          background-color: #FAFAFC;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .hpw-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
          text-align: center;
        }

        .hpw-header {
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 800;
          color: #1A1A2E;
          margin: 0 0 16px;
          letter-spacing: -1px;
        }

        .hpw-header .purple {
          color: #6C3CF7;
        }

        .hpw-subtitle {
          font-size: 18px;
          color: #5C6165;
          margin: 0 0 60px;
          font-weight: 500;
        }

        .hpw-timeline-container {
          position: relative;
          width: 100%;
          padding-top: 24px;
          margin-bottom: 24px;
        }

        .hpw-timeline-line {
          position: absolute;
          top: 45px; /* Aligns with the center of the 44px node (24px padding + 22px half height = 46px, approx 45px visually) */
          left: 10%;
          right: 10%;
          height: 2px;
          background-color: #6C3CF7;
          opacity: 0.3;
          z-index: 1;
        }

        .hpw-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
          position: relative;
          z-index: 2;
        }

        .hpw-step-col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hpw-node {
          width: 44px;
          height: 44px;
          background-color: #6C3CF7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 20px;
          margin-bottom: -12px; /* Reduced gap between nodes and cards */
          z-index: 2;
          box-shadow: 0 0 0 6px #FAFAFC;
          flex-shrink: 0;
        }

        .hpw-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 24px 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 100%;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        /* Subtle gradient shimmer overlay on hover */
        .hpw-card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(120deg, transparent 30%, rgba(108,60,247,0.04) 50%, transparent 70%);
          transition: left 0.6s ease;
          z-index: 0;
        }
        .hpw-card:hover::before {
          left: 100%;
        }

        .hpw-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 24px 48px rgba(108, 60, 247, 0.15), 0 0 0 2px rgba(108, 60, 247, 0.12);
          border-color: rgba(108, 60, 247, 0.2);
        }

        .hpw-card-img {
          width: 100%;
          max-width: 200px;
          height: 180px;
          object-fit: contain;
          margin-bottom: 20px;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .hpw-card:hover .hpw-card-img {
          transform: scale(1.08) translateY(-6px);
        }

        .hpw-card-title-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 16px;
          color: #6C3CF7;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .hpw-card-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #6C3CF7;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease;
        }
        .hpw-card:hover .hpw-card-icon {
          transform: rotateY(360deg) scale(1.15);
          background: linear-gradient(135deg, #6C3CF7, #A78BFA);
        }

        .hpw-card-title {
          font-size: 18px;
          font-weight: 700;
          margin: 0;
          color: #6C3CF7;
          transition: letter-spacing 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .hpw-card:hover .hpw-card-title {
          letter-spacing: 0.5px;
        }

        .hpw-card-desc {
          font-size: 13px;
          line-height: 1.5;
          color: #6B7280;
          margin: 0;
          font-weight: 500;
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
        }
        .hpw-card:hover .hpw-card-desc {
          color: #4B5563;
        }

        .hpw-banner {
          margin-top: 60px;
          background: #F8F9FC;
          border-radius: 24px;
          padding: 32px 48px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          border: 1px solid #F1F3F9;
        }

        .hpw-banner-item {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .hpw-banner-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(108, 60, 247, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6C3CF7;
        }

        .hpw-banner-text {
          text-align: left;
        }

        .hpw-banner-label {
          font-size: 12px;
          font-weight: 700;
          color: #6C3CF7;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0 0 4px;
        }

        .hpw-banner-val {
          font-size: 18px;
          font-weight: 700;
          color: #1A1A2E;
          margin: 0;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1200px) {
          .hpw-banner { flex-direction: column; gap: 32px; align-items: flex-start; padding: 32px; }
        }

        @media (max-width: 1024px) {
          .hpw-grid { grid-template-columns: repeat(3, 1fr); row-gap: 40px; }
          .hpw-timeline-line { display: none; }
          .hpw-node { margin-bottom: 16px; }
        }

        @media (max-width: 768px) {
          .hpw-section { padding: 60px 24px; }
          .hpw-grid { grid-template-columns: repeat(2, 1fr); }
          .hpw-header { font-size: 32px; }
        }

        @media (max-width: 480px) {
          .hpw-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="hpw-section" ref={sectionRef}>
        <div className="hpw-container">
          
          <h2 className="hpw-header">
            How the <span className="purple">Program</span> Works
          </h2>
          <p className="hpw-subtitle">
            A Structured Journey That Mirrors Real Workplace Experiences
          </p>

          <div className="hpw-timeline-container">
            <div className="hpw-timeline-line"></div>
            
            <div className="hpw-grid" ref={cardsRef}>
              {steps.map((step, idx) => (
                <div key={idx} className="hpw-step-col">
                  <div className="hpw-node">{step.num}</div>
                  <div className="hpw-card">
                    <img src={step.img} alt={step.title} className="hpw-card-img" />
                    <div className="hpw-card-title-wrap">
                      <span className="hpw-card-icon">{step.icon}</span>
                      <h3 className="hpw-card-title">{step.title}</h3>
                    </div>
                    <p className="hpw-card-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hpw-banner" ref={bannerRef}>
            <div className="hpw-banner-item">
              <div className="hpw-banner-icon">
                <Calendar size={28} strokeWidth={2} />
              </div>
              <div className="hpw-banner-text">
                <p className="hpw-banner-label">DURATION</p>
                <p className="hpw-banner-val">4-6 Weeks</p>
              </div>
            </div>

            <div className="hpw-banner-item">
              <div className="hpw-banner-icon">
                <Clock size={28} strokeWidth={2} />
              </div>
              <div className="hpw-banner-text">
                <p className="hpw-banner-label">WEEKLY EFFORT</p>
                <p className="hpw-banner-val">3-5 Hours</p>
              </div>
            </div>

            <div className="hpw-banner-item">
              <div className="hpw-banner-icon">
                <Monitor size={28} strokeWidth={2} />
              </div>
              <div className="hpw-banner-text">
                <p className="hpw-banner-label">FORMAT</p>
                <p className="hpw-banner-val">100% Online, Self-Paced</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
