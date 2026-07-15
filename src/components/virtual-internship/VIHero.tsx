import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Briefcase, Code, BarChart2, ShieldCheck, Play } from 'lucide-react';
import HeroImg from '../../assets/virtual internship/girl_image.png';

export default function VIHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animations
      gsap.from('.vih-badge-container', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.vih-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 });
      gsap.from('.vih-line', { scaleX: 0, transformOrigin: 'left', opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 });
      gsap.from('.vih-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 });
      gsap.from('.vih-feature', { 
        y: 20, 
        opacity: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: 'power3.out', 
        delay: 0.4 
      });
      gsap.from('.vih-btn-wrapper', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 });

      // Image animation
      gsap.from(imgRef.current, {
        x: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .vih-section {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 160px 40px 80px;
          background-color: #FEFEFD;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .vih-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .vih-left {
          flex: 1;
          max-width: 700px;
        }

        .vih-badge-container {
          display: inline-block;
          border-left: 3px solid #6C3CF7;
          padding-left: 12px;
          margin-bottom: 32px; /* Increased gap */
        }

        .vih-badge {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        
        .vih-badge-purple { color: #6C3CF7; }
        .vih-badge-gray { color: #6B7280; }

        .vih-title {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 800;
          color: #1A1A2E;
          line-height: 1.1;
          margin: 0 0 24px; /* Increased gap */
          letter-spacing: -1px;
        }

        .vih-title-purple {
          color: #6C3CF7;
          white-space: nowrap;
          display: inline-block;
        }

        .vih-line {
          width: 80px;
          height: 6px;
          background-color: #6C3CF7;
          margin-bottom: 32px; /* Increased gap */
          border-radius: 4px;
        }

        .vih-desc {
          font-size: 16px;
          line-height: 1.6;
          color: #4B5563;
          margin: 0 0 48px; /* Increased gap */
        }

        .vih-desc-purple {
          color: #6C3CF7;
          font-weight: 600;
        }

        .vih-features {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 56px; /* Increased gap */
        }

        .vih-feature {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .vih-feature-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #F3F0FF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6C3CF7;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .vih-feature:hover .vih-feature-icon {
          transform: scale(1.1);
        }

        .vih-feature-text {
          font-size: 13px;
          font-weight: 600;
          color: #1A1A2E;
          line-height: 1.3;
        }

        .vih-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #6C3CF7;
          color: #fff;
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(108, 60, 247, 0.2);
        }

        .vih-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(108, 60, 247, 0.3);
          background: #5B2CE0;
        }

        .vih-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .vih-image {
          width: 100%;
          max-width: 650px; /* Slightly increased image size */
          height: auto;
          object-fit: contain;
          transform: translateY(-40px); /* Shifted slightly up */
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.05));
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1200px) {
          .vih-features { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }

        @media (max-width: 1024px) {
          .vih-container { flex-direction: column; text-align: center; gap: 40px; }
          .vih-left { max-width: 100%; display: flex; flex-direction: column; align-items: center; }
          .vih-badge-container { border-left: none; padding-left: 0; border-bottom: 3px solid #6C3CF7; padding-bottom: 8px; }
          .vih-line { margin: 0 auto 24px; }
          .vih-features { grid-template-columns: repeat(2, 1fr); text-align: left; margin: 0 auto 48px; }
          .vih-feature { justify-content: flex-start; }
          .vih-right { justify-content: center; width: 100%; }
          .vih-title-purple { white-space: normal; display: block; }
        }

        @media (max-width: 768px) {
          .vih-section { padding: 100px 24px 60px; }
          .vih-title { font-size: clamp(32px, 8vw, 40px); line-height: 1.2; }
          .vih-desc { font-size: 15px; }
          .vih-features { width: 100%; max-width: 400px; }
          .vih-image { max-width: 400px; }
        }

        @media (max-width: 600px) {
          .vih-section { padding: 90px 20px 40px; }
          .vih-container { gap: 24px; }
          .vih-features { grid-template-columns: repeat(2, 1fr); gap: 16px; width: 100%; margin-bottom: 24px; }
          .vih-title { font-size: 32px; }
          .vih-desc { margin-bottom: 24px; }
          .vih-btn { width: 100%; justify-content: center; }
          .vih-image { max-width: 100%; padding: 0 10px; }
        }
      `}</style>

      <section className="vih-section" ref={sectionRef}>
        <div className="vih-container">
          <div className="vih-left" ref={textRef}>
            <div className="vih-badge-container">
              <span className="vih-badge vih-badge-purple">VIRTUAL INTERNSHIPS</span>
              <span className="vih-badge vih-badge-gray"> | GRADES 6-12</span>
            </div>
            
            <h1 className="vih-title">
              Give Your Child<br />
              a Head Start -<br />
              <span className="vih-title-purple">Beyond Academics</span>
            </h1>
            
            <div className="vih-line"></div>
            
            <p className="vih-desc">
              <span className="vih-desc-purple">Skill Virtual</span> Internships are structured, mentor-led, project-based 
              learning experiences that give school students their first real-world 
              work exposure - building both clarity and confidence before college.
            </p>
            
            <div className="vih-features">
              <div className="vih-feature">
                <div className="vih-feature-icon">
                  <Briefcase size={20} strokeWidth={2.5} />
                </div>
                <div className="vih-feature-text">Explore careers<br />early</div>
              </div>
              <div className="vih-feature">
                <div className="vih-feature-icon">
                  <Code size={20} strokeWidth={2.5} />
                </div>
                <div className="vih-feature-text">Build real-world<br />projects</div>
              </div>
              <div className="vih-feature">
                <div className="vih-feature-icon">
                  <BarChart2 size={20} strokeWidth={2.5} />
                </div>
                <div className="vih-feature-text">Develop future-<br />ready skills</div>
              </div>
              <div className="vih-feature">
                <div className="vih-feature-icon">
                  <ShieldCheck size={20} strokeWidth={2.5} />
                </div>
                <div className="vih-feature-text">Earn verified<br />credentials</div>
              </div>
            </div>
            <div className="vih-btn-wrapper">
              <a href="/login" className="vih-btn" style={{ textDecoration: 'none' }}>
                <Play size={20} fill="currentColor" />
                Get started
              </a>
            </div>
          </div>
          
          <div className="vih-right" ref={imgRef}>
            <img src={HeroImg} alt="Virtual Internship" className="vih-image" />
          </div>
        </div>
      </section>
    </>
  );
}
