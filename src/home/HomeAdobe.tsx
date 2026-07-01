import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const adobeFeatures = [
  {
    id: 1,
    text: 'Industry-standard tools - learn on the same platform used by professional creators worldwide.'
  },
  {
    id: 2,
    text: 'Globally-recognised Adobe Creative Educator certification for teachers.'
  },
  {
    id: 3,
    text: '100% free for participating schools, students, and educators.'
  },
  {
    id: 4,
    text: 'Structured progression - ACE Level A (Foundation) → B (Advanced) → C (Mastery) → Influencer.'
  }
];

export default function HomeAdobe() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.ha-box',
          start: 'top 85%'
        }
      });

      tl.from('.ha-box', { scale: 0.92, opacity: 0, duration: 1, ease: 'power3.out' })
        .from('.ha-word', { z: -100, opacity: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out' }, '-=0.4')
        .from('.ha-subheadline, .ha-desc', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.4')
        .from('.ha-main-img', { scale: 0.8, opacity: 0, duration: 1, ease: 'elastic.out(1, 0.5)' }, '-=0.8')
        .from('.ha-feature-card', { x: 60, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }, '-=0.6')
        .from('.ha-btn-wrap', { scale: 0.9, opacity: 0, duration: 0.6, ease: 'back.out(1.5)' }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .ha-container {
          width: 100%;
          padding: 0px 40px 60px;
          background: #fff;
          font-family: 'Poppins', sans-serif;
        }

        .ha-box {
          max-width: 1619px;
          margin: 0 auto;
          background: linear-gradient(-45deg, #FF9E00, #FF0055, #D900C3, #FF9E00);
          background-size: 300% 300%;
          animation: runningBrightGradient 15s ease infinite;
          border-radius: 43px;
          padding: 30px clamp(40px, 5vw, 80px);
          display: flex;
          align-items: center;
          gap: 40px;
          color: #fff;
          position: relative;
          overflow: hidden;
          box-shadow: 0px 10px 30px rgba(255, 0, 85, 0.2);
        }

        @keyframes runningBrightGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .ha-content {
          flex: 1.1;
          z-index: 2;
        }

        .ha-flagship-img {
          width: 282px;
          height: auto;
          margin-bottom: 24px;
          display: block;
        }

        .ha-partner-img {
          width: 284px;
          height: 52px;
          margin-bottom: 32px;
          display: block;
          object-fit: contain;
          object-position: left;
        }

        .ha-title {
          font-weight: 700;
          font-size: 42px;
          line-height: 1.25;
          margin-bottom: 20px;
          max-width: 619px;
          color: #FFFFFF;
        }

        .ha-subheadline {
          font-weight: 500;
          font-size: 20px;
          margin-bottom: 20px;
          color: #FFFFFF;
        }

        .ha-desc {
          font-weight: 400;
          font-size: 18px;
          line-height: 1.6;
          color: #FFFFFF;
          opacity: 1;
          margin-bottom: 32px;
          max-width: 580px;
        }

        .ha-btn-wrap {
          position: relative;
          display: inline-flex;
          border-radius: 12px;
          padding: 2px;
          background: conic-gradient(from 0deg, #FF9E00, #FF0055, #D900C3, #FF9E00);
          animation: conicRotateBright 3s linear infinite;
          cursor: pointer;
        }

        @keyframes conicRotateBright {
          100% { background: conic-gradient(from 360deg, #FF9E00, #FF0055, #D900C3, #FF9E00); }
        }

        .ha-btn {
          background: #FFFFFF;
          color: #FF0055;
          border: none;
          padding: 16px 36px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 18px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .ha-btn-wrap:hover .ha-btn {
          transform: scale(1.04);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .ha-visuals {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0px;
          z-index: 2;
        }

        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .ha-main-img {
          width: 100%;
          max-width: 665px;
          height: auto;
          object-fit: contain;
          animation: floatUpDown 4s ease-in-out infinite;
        }

        .ha-feature-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ha-feature-card {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(12px);
          border-radius: 18px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .ha-feature-bullet {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.85);
          flex-shrink: 0;
          margin-top: 2px; /* Align with first line of text */
        }

        .ha-feature-text {
          font-weight: 500;
          font-size: 16px;
          line-height: 1.5;
          color: #FFFFFF;
          letter-spacing: 0.4px;
        }

        @media (max-width: 1200px) {
          .ha-box { flex-direction: column; padding: 60px 30px; }
          .ha-content { width: 100%; text-align: center; }
          .ha-flagship-img, .ha-partner-img, .ha-btn { margin-left: auto; margin-right: auto; }
          .ha-partner-img { object-position: center; }
          .ha-title, .ha-desc { margin-left: auto; margin-right: auto; }
        }
      `}</style>

      <section className="ha-container" ref={sectionRef}>
        <div className="ha-box" style={{ perspective: '1000px' }}>
          <div className="ha-content">
            {/* <img src="/landing/flagship-badge.svg" alt="Flagship Programme" className="ha-flagship-img" />
            <img src="/landing/partner-pills.svg" alt="Skillzza x Adobe" className="ha-partner-img" /> */}

            <h2 className="ha-title" style={{ perspective: '800px' }}>
              {"Digital Creativity & AI Skills Programme".split(' ').map((word, i) => (
                <span key={i} className="ha-word" style={{ display: 'inline-block', marginRight: '8px' }}>{word}</span>
              ))}
            </h2>

            <p className="ha-subheadline">Turn Students into Future Creators</p>

            <p className="ha-desc">
              A NEP-aligned programme for Grades 5-10 that builds real-world skills in design, content creation, and AI - through hands-on, project-based learning on Adobe Express.
            </p>

            <div className="ha-btn-wrap">
              <button className="ha-btn">
                Explore the Adobe Programme →
              </button>
            </div>
          </div>

          <div className="ha-visuals">
            <img src="/landing/adobe-hero.png" alt="Adobe Creativity" className="ha-main-img" />

            <div className="ha-feature-list">
              {adobeFeatures.map((f) => (
                <div key={f.id} className="ha-feature-card">
                  <div className="ha-feature-bullet" />
                  <p className="ha-feature-text">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
