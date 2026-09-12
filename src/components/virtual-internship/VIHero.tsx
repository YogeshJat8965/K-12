import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Compass } from 'lucide-react';
import HeroImg from '../../assets/virtual internship/girl_image.webp';
import VIQuizModal from './VIQuizModal';

export default function VIHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.vih-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 });
      gsap.from('.vih-line', { scaleX: 0, transformOrigin: 'left', opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 });
      gsap.from('.vih-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 });
      gsap.from('.vih-btn-wrapper', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 });

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

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('vi-explore-tracks');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'vi-explore-tracks';
    }
  };

  return (
    <>
      <style>{`
        .vih-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 150px 40px 60px;
          background-color: #FEFEFD;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
          box-sizing: border-box;
        }

        .vih-container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .vih-left {
          flex: 1;
          max-width: 620px;
        }

        .vih-title {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 800;
          color: #1A1A2E;
          line-height: 1.1;
          margin: 0 0 24px;
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
          margin-bottom: 32px;
          border-radius: 4px;
        }

        .vih-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #4B5563;
          margin: 0 0 40px;
        }

        .vih-desc-purple {
          color: #6C3CF7;
          font-weight: 600;
        }

        .vih-btn-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .vih-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #6C3CF7;
          color: #fff;
          padding: 16px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(108, 60, 247, 0.2);
          text-decoration: none;
        }

        .vih-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(108, 60, 247, 0.3);
          background: #5B2CE0;
        }

        .vih-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #6C3CF7;
          padding: 16px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          border: 2px solid #6C3CF7;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .vih-btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(108, 60, 247, 0.08);
          box-shadow: 0 8px 20px rgba(108, 60, 247, 0.15);
        }

        .vih-right {
          flex: 1.45;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .vih-image {
          width: 100%;
          max-width: 880px;
          height: auto;
          object-fit: contain;
          transform: translateY(-15px);
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.05));
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1024px) {
          .vih-section { min-height: auto; padding: 140px 24px 40px; }
          .vih-container { flex-direction: column; text-align: center; gap: 40px; }
          .vih-left { max-width: 100%; display: flex; flex-direction: column; align-items: center; }
          .vih-line { margin: 0 auto 24px; }
          .vih-right { justify-content: center; width: 100%; }
          .vih-title-purple { white-space: normal; display: block; }
          .vih-btn-wrapper { justify-content: center; }
        }

        @media (max-width: 768px) {
          .vih-section { padding: 130px 24px 40px; }
          .vih-title { font-size: clamp(32px, 8vw, 40px); line-height: 1.2; }
          .vih-desc { font-size: 15px; }
          .vih-image { max-width: 600px; }
        }

        @media (max-width: 600px) {
          .vih-section { padding: 110px 20px 20px; }
          .vih-container { gap: 24px; }
          .vih-title { font-size: 32px; }
          .vih-desc { margin-bottom: 24px; }
          .vih-btn-primary, .vih-btn-secondary { width: 100%; justify-content: center; }
          .vih-image { max-width: 100%; padding: 0 10px; }
        }
      `}</style>

      <section className="vih-section" ref={sectionRef}>
        <div className="vih-container">
          <div className="vih-left" ref={textRef}>
            <h1 className="vih-title">
              Give Your Child<br />
              a Head Start<br />
              <span className="vih-title-purple">Beyond Academics</span>
            </h1>

            <div className="vih-line"></div>

            <p className="vih-desc">
              <span className="vih-desc-purple">Virtual</span> Internships are structured, mentor led, project based
              learning experiences that give school students their first real world
              work exposure building both clarity and confidence before college.
            </p>

            <div className="vih-btn-wrapper">
              <a href="#vi-explore-tracks" onClick={handleExploreClick} className="vih-btn-primary">
                Explore Virtual Internship
                <ArrowRight size={18} />
              </a>
              <button onClick={() => setIsQuizOpen(true)} className="vih-btn-secondary">
                <Compass size={18} />
                Find the right path
              </button>
            </div>
          </div>

          <div className="vih-right" ref={imgRef}>
            <img src={HeroImg} alt="Virtual Internship" className="vih-image" />
          </div>
        </div>
      </section>

      <VIQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </>
  );
}
