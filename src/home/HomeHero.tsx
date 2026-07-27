import { useEffect, useRef, Fragment } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RIGHT_IMG from '../assets/landing page/Homepage (1920x 1080px) – 2/ChatGPT Image Jun 20, 2026, 12_40_39 AM.webp';
import { GraduationCap, Code2, Briefcase, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: <GraduationCap color="#4F46E5" size={28} strokeWidth={2} />, bg: '#D8E2FF', shadow: 'rgba(108,60,247,0.2)', title: 'Learn AI', desc: 'Foundational to advanced AI skills for every learner.' },
  { icon: <Code2 color="#10B981" size={28} strokeWidth={2} />, bg: '#ECFDF5', shadow: 'rgba(16,185,129,0.2)', title: 'Build Projects', desc: 'Turn ideas into real World projects and build your portfolio.' },
  { icon: <Briefcase color="#8B5CF6" size={28} strokeWidth={2} />, bg: '#E9D5FF', shadow: 'rgba(139,92,246,0.2)', title: 'Intern Early', desc: 'Gain real Experience through virtual internships.' },
  { icon: <Rocket color="#F59E0B" size={28} strokeWidth={2} />, bg: '#FFF7ED', shadow: 'rgba(245,158,11,0.2)', title: 'Lead the Future', desc: 'Develop the mindset and skills to lead in an AI-powered world.' },
];

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const featBarRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Media query check for reduced motion

    const ctx = gsap.context(() => {
      // 1. Heading split animation
      if (headingRef.current) {
        gsap.to('.hero-char', {
          opacity: 1,
          z: 0,
          scale: 1,
          duration: 1,
          stagger: 0.03,
          ease: 'back.out(1.7)',
          delay: 0.2
        });
      }

      // 1.5 Subtext fast word-by-word reveal
      if (subtextRef.current) {
        gsap.to('.hero-sub-word', {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.04, // Very fast stagger
          ease: 'power2.out',
          delay: 0.5 // Start after heading begins
        });
      }


      // 2. Parallax float for right image (Desktop Only)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 861px)", () => {
        if (imgRef.current) {
          // Tell GSAP about the existing CSS transform (-50%) so it doesn't overwrite it with 0
          gsap.set(imgRef.current, { yPercent: -50, y: 0 });
          gsap.to(imgRef.current, {
            y: -100,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            }
          });
        }
      });

      // 3. Feature cards (bottom bar) 3D flip + stagger
      if (featBarRef.current) {
        const items = featBarRef.current.querySelectorAll('.hh-feat-item');
        gsap.from(items, {
          opacity: 0,
          rotationX: -90,
          y: 50,
          transformOrigin: '50% 50% -50px',
          duration: 1,
          stagger: 0.15,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: featBarRef.current,
            start: 'top 85%',
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

        /* ─── hero outer ─── */
        .hh-section {
          width: 100%;
          background: #ffffff;
          padding-top: 140px; /* Increased gap to prevent navbar overlap */
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* ─── two-column content area ─── */
        .hh-content {
          max-width: 1760px;
          margin: 0 auto;
          padding: 16px 80px 24px;
          display: flex;
          align-items: center;
          gap: 0;
        }

        /* ─── LEFT ─── */
        .hh-left {
          flex: 0 0 50%;
          max-width: 50%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 20px; /* Shifted up per user request */
          padding-right: 40px;
          z-index: 10;
        }

        /* Badge pill */
        .hh-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #6C3CF7;
          border-radius: 40px;
          padding: 8px 20px;
          margin-bottom: 28px;
        }
        .hh-badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #fff;
          flex-shrink: 0;
        }
        .hh-badge-text {
          font-weight: 700;
          font-size: clamp(10px, 0.75vw, 14px);
          letter-spacing: 1.5px;
          color: #fff;
          white-space: nowrap;
        }

        /* Heading */
        .hh-h1 {
          font-weight: 800;
          font-size: clamp(28px, 4.2vw, 74px);
          line-height: 1.12;
          color: #1A1A2E;
          margin: 0 0 24px;
          letter-spacing: -0.5px;
          white-space: nowrap;
        }
        .hh-h1 .purple { color: #6C3CF7; }

        /* Subtext */
        .hh-sub {
          font-weight: 400;
          font-size: clamp(14px, 1.2vw, 20px);
          line-height: 1.65;
          letter-spacing: 0.3px;
          color: #84888B;
          margin: 0 0 36px;
          max-width: 560px;
        }

        /* Buttons row */
        .hh-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 28px;
        }

        .hh-btn {
          border: none; cursor: pointer;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: clamp(13px, 1vw, 17px);
          border-radius: 10px;
          padding: clamp(12px, 1vw, 18px) clamp(20px, 2vw, 36px);
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
        }
        .hh-btn:hover { transform: translateY(-3px); }

        .hh-btn-primary {
          background: #6C3CF7; color: #fff;
          box-shadow: 0 6px 20px rgba(108,60,247,0.35);
        }
        .hh-btn-primary:hover {
          background: #5728e0;
          box-shadow: 0 10px 32px rgba(108,60,247,0.5);
        }

        .hh-btn-dark {
          background: #1F2937; color: #fff;
          box-shadow: 0 4px 14px rgba(0,0,0,0.2);
        }
        .hh-btn-dark:hover {
          background: #111827;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }

        .hh-btn-outline {
          background: #fff; color: #6B7280;
          border: 1.5px solid #D1D5DB;
        }
        .hh-btn-outline:hover {
          border-color: #6C3CF7;
          color: #6C3CF7;
          box-shadow: 0 4px 16px rgba(108,60,247,0.15);
        }

        /* Trust text */
        .hh-trust {
          font-size: clamp(11px, 0.85vw, 14px);
          color: #9CA3AF;
        }
        .hh-trust strong { color: #1F2937; font-weight: 600; }

        /* ─── RIGHT IMAGE ─── */
        .hh-right {
          flex: 0 0 50%;
          max-width: 50%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .hh-right img {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 48vw;
          max-width: 900px;
          height: auto;
          display: block;
          object-fit: contain;
          object-position: right center;
        }

        /* ─── BOTTOM FEATURE CARD ─── */
        .hh-feature-bar {
          background: #F1F2FC;
          border-radius: 32px;
          box-shadow: 0 8px 60px rgba(0,0,0,0.07);
          border: 1px solid #F0F0F5;
          display: flex;
          align-items: stretch;
          margin: 60px 80px 40px;
          position: relative;
          z-index: 20;
          overflow: hidden;
        }

        .hh-feat-item {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 32px 36px;
        }

        .hh-feat-icon {
          width: 72px; height: 72px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          cursor: default;
        }
        .hh-feat-icon:hover {
          transform: scale(1.12);
        }
        .hh-feat-icon svg { width: 32px; height: 32px; }

        .hh-feat-divider {
          width: 1px;
          background: #F0F0F5;
          align-self: stretch;
          margin: 20px 0;
        }

        .hh-feat-title {
          font-weight: 700;
          font-size: clamp(15px, 1.3vw, 20px);
          color: #1F2937;
          margin: 0 0 6px;
        }
        .hh-feat-desc {
          font-weight: 400;
          font-size: clamp(12px, 0.9vw, 14px);
          color: #6B7280;
          line-height: 1.5;
          margin: 0;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1100px) {
          .hh-content { padding: 16px 48px 24px; }
          .hh-feature-bar { margin: 50px 48px 40px; }
        }

        @media (max-width: 860px) {
          .hh-content {
            flex-direction: column;
            padding: 16px 32px 24px;
            gap: 32px;
          }
          .hh-left, .hh-right {
            flex: none; max-width: 100%; width: 100%;
            padding-right: 0;
          }
          .hh-right { justify-content: center; }
          .hh-right img { 
            position: relative !important; 
            top: auto !important; 
            right: auto !important; 
            transform: scale(1.15) !important; 
            width: 100% !important; 
            max-width: 100% !important; 
            margin: 0 auto;
          }
          .hh-feature-bar {
            margin: 40px 32px 32px;
            flex-direction: column;
          }
          .hh-feat-divider { width: auto; height: 1px; margin: 0 20px; align-self: stretch; }
          .hh-feat-item { padding: 20px 24px; }
        }

        @media (max-width: 600px) {
          .hh-content { padding: 12px 20px 20px; }
          .hh-feature-bar { margin: 32px 20px 24px; border-radius: 20px; }
          .hh-btns { gap: 10px; }
        }
      `}</style>

      <section className="hh-section" ref={heroRef}>

        {/* ── Two-column content ── */}
        <div className="hh-content">

          {/* LEFT */}
          <div className="hh-left">

            {/* Badge */}
            {/* <div className="hh-badge">
              <span className="hh-badge-dot" />
              <span className="hh-badge-text">Skill Studio | FUTURE LEARNING</span>
            </div> */}

            {/* Heading - exactly 2 lines */}
            <h1 className="hh-h1" ref={headingRef}>
              <span className="hero-word">
                {"From Classrooms to".split('').map((char, i) => (
                  <span key={'l1-' + i} className="hero-char" style={{ display: 'inline-block', opacity: 0, transform: 'translateZ(-200px) scale(0.5)' }}>{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
              <br />
              <span className="hero-word">
                {"Code ".split('').map((char, i) => (
                  <span key={'l2-' + i} className="hero-char" style={{ display: 'inline-block', opacity: 0, transform: 'translateZ(-200px) scale(0.5)' }}>{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
              <span className="purple">
                {"Built for AI".split('').map((char, i) => (
                  <span key={'l3-' + i} className="hero-char" style={{ display: 'inline-block', opacity: 0, transform: 'translateZ(-200px) scale(0.5)' }}>{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
            </h1>

            {/* Subtext */}
            <p className="hh-sub" ref={subtextRef}>
              {"Empowering the next generation of AI thinkers students, educators, and schools to lead confidently in a technology-driven world.".split(' ').map((word, i) => (
                <span key={'sub-' + i} className="hero-sub-word" style={{ opacity: 0, display: 'inline-block', marginRight: '5px', transform: 'translateY(10px)' }}>{word}</span>
              ))}
            </p>

            {/* Buttons */}
            <div className="hh-btns">
              <button onClick={() => window.location.href = '/login'} className="hh-btn hh-btn-primary">Start Learning</button>
              <button onClick={() => window.location.href = '/contact'} className="hh-btn hh-btn-dark">Partner with Us</button>
              <button onClick={(e) => e.preventDefault()} className="hh-btn hh-btn-outline">Schedule a Demo</button>
            </div>

            {/* Trust */}
            <p className="hh-trust">
              Trusted by <strong>250,000+ students</strong> across <strong>6 regions</strong> worldwide
            </p>
          </div>

          {/* RIGHT */}
          <div className="hh-right">
            <img ref={imgRef} src={RIGHT_IMG} alt="Students learning AI" />
          </div>
        </div>

        {/* ── Bottom Feature Bar ── */}
        <div className="hh-feature-bar" ref={featBarRef}>
          {features.map((f, i) => (
            <Fragment key={f.title}>
              <div className="hh-feat-item">
                <div
                  className="hh-feat-icon"
                  style={{ background: f.bg }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 24px ${f.shadow}`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
                >
                  <div className="hh-feat-icon-inner">
                    {f.icon}
                  </div>
                </div>
                <div>
                  <p className="hh-feat-title">{f.title}</p>
                  <p className="hh-feat-desc">{f.desc}</p>
                </div>
              </div>
              {i < features.length - 1 && <div className="hh-feat-divider" />}
            </Fragment>
          ))}
        </div>

      </section>
    </>
  );
}
