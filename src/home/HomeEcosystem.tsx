import img1 from '../assets/Mask Group 30.png';
import img2 from '../assets/Mask Group 31.png';
import img3 from '../assets/Mask Group 32.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ecosystemData = [
  {
    themeColor: '#4361EE',
    iconBg: '#EEF2FF',
    img: img1,
    label: 'FOR STUDENTS',
    title: 'Learn AI, Build Projects,\nLead Early',
    desc: 'Interactive simulations, real-world challenges, and future skills - designed to help students stand out in school, college, and beyond.',
    bullets: [
      { b: 'Future Skill Development', text: ' - tracks for AI Explorers, Creators, and Innovators.' },
      { b: 'Virtual Internships', text: ' - simulated professional roles that build career-readiness.' },
      { b: 'Hackathons & Bootcamps', text: ' - build, pitch, and solve real problems.' },
      { b: 'One-on-One Tutoring', text: ' - academic support plus AI skill development.' }
    ],
    buttonText: 'Start Learning →'
  },
  {
    themeColor: '#8B5CF6',
    iconBg: '#F5F3FF',
    img: img2,
    label: 'FOR EDUCATORS',
    title: 'Upskill. Co-Create. Lead\nAI Classrooms',
    desc: 'Empower your teaching with hands-on AI tools, real-world simulations, and a global community of innovators.',
    bullets: [
      { b: 'AI Immersive Learning', text: ' - become an AI-confident educator through hands-on training.' },
      { b: 'Faculty Fellowship Programme', text: ' - lead research, collaboration, and institutional impact.' },
      { b: 'Curriculum Co-Design Studio', text: ' - co-create future-ready, interdisciplinary curricula.' },
      { b: 'Access to free tools', text: ', resource libraries, and mentorship communities.' }
    ],
    buttonText: 'Join Educator Cohort →'
  },
  {
    themeColor: '#10B981',
    iconBg: '#ECFDF5',
    img: img3,
    label: 'FOR SCHOOLS',
    title: 'Transform Into an AI-\nPowered Learning Hub',
    desc: 'End-to-end school transformation - from AI readiness diagnostics to labs, curriculum integration, and recognition.',
    bullets: [
      { b: 'AI Readiness Audit via the CCMM framework', text: ' - Curriculum, Culture, Mindset & Methodology.' },
      { b: 'AI Lab setup with NEP-aligned', text: ', scalable curriculum integration.' },
      { b: 'Clubs, Events & Recognition', text: ' - activate student talent and leadership.' },
      { b: 'Teacher Fellowships and Student Ambassador Programmes', text: ' for institutional impact.' }
    ],
    buttonText: 'REQUEST A CCMM AUDIT'
  }
];

export default function HomeEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading Typewriter
      if (titleRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%'
          }
        });

        tl.from('.he-title-base', { opacity: 0, duration: 0.6 })
          .from('.he-type-char', { opacity: 0, duration: 0.1, stagger: 0.05, ease: 'none' }, '+=0.2')
          .from('.he-subtitle', { y: 20, opacity: 0, duration: 0.6 }, '-=0.2');
      }

      // 2. Cards 3D Rise
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.he-card');

        cards.forEach((card, idx) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%'
            },
            delay: idx * 0.15
          });

          // Card enter
          tl.from(card, { y: 100, rotationX: -12, opacity: 0, duration: 1, ease: 'power3.out' });

          // Image Ken Burns
          const img = card.querySelector('.he-img-area img');
          tl.from(img, { scale: 1.15, duration: 0.8, ease: 'power2.out' }, '-=0.8');

          // Top border draw
          const border = card.querySelector('.he-card-top-border');
          tl.fromTo(border, { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: 'power2.out', transformOrigin: 'left' }, '-=0.5');

          // Bullets stagger
          const bullets = card.querySelectorAll('li');
          tl.from(bullets, { x: -20, opacity: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' }, '-=0.4');
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .he-section {
          width: 100%;
          background: #FFFFFF;
          padding: 100px 0 120px;
          font-family: 'DM Sans', sans-serif;
        }

        .he-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ─── HEADER ─── */
        .he-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .he-badge {
          display: inline-block;
          border: 1px solid #D6E0FF;
          background: #F0F4FF;
          color: #4B5563;
          font-weight: 600;
          font-size: 12px;
          padding: 6px 20px;
          border-radius: 30px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
        }

        .he-title {
          font-weight: 800;
          font-size: 44px;
          color: #111827;
          margin: 0 0 16px;
        }

        .he-title-highlight {
          color: #6C3CF7;
        }

        .he-subtitle {
          font-weight: 400;
          font-size: 18px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0 auto;
          max-width: 700px;
        }

        /* ─── CARDS GRID ─── */
        .he-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .he-card {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E5E7EB;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
          transition: box-shadow 0.3s ease;
          overflow: hidden;
        }
        .he-card-top-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          z-index: 10;
        }

        .he-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 50px rgba(0,0,0,0.08);
        }

        /* Card Image Area */
        .he-img-area {
          padding: 24px 24px 0;
          position: relative;
        }

        .he-img-area img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }

        .he-icon-box {
          position: absolute;
          bottom: -20px;
          left: 24px;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          z-index: 2;
        }

        /* Card Content */
        .he-content {
          padding: 24px 24px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .he-card-label {
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .he-card-title {
          font-weight: 800;
          font-size: 24px;
          color: #111827;
          margin: 0 0 12px;
          line-height: 1.35;
          white-space: pre-line;
        }

        .he-card-desc {
          font-weight: 400;
          font-size: 16px;
          line-height: 1.5;
          color: #374151;
          margin: 0 0 16px;
        }

        .he-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
          flex: 1;
        }

        .he-bullets li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 10px;
          font-size: 15px;
          color: #374151;
          line-height: 1.5;
        }

        .he-bullet-dot {
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .he-bullets strong {
          color: #374151;
          font-weight: 700;
        }

        /* Button */
        .he-btn {
          width: 100%;
          padding: 14px 0;
          border-radius: 8px;
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          border: none;
          cursor: pointer;
          text-align: center;
          position: relative;
          overflow: hidden;
          z-index: 1;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .he-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.2);
          z-index: -1;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .he-btn:hover::before {
          transform: scaleX(1);
        }

        .he-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .he-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .he-grid {
            grid-template-columns: 1fr;
          }
          .he-title {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="he-section" ref={sectionRef}>
        <div className="he-inner">

          <div className="he-header">
            <div className="he-badge">WHO WE SERVE</div>
            <h2 className="he-title" ref={titleRef}>
              <span className="he-title-base">Built for </span>
              <span className="he-title-highlight">
                {"Every Learner".split('').map((char, i) => (
                  <span key={i} className="he-type-char">{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </span>
            </h2>
            {/* <p className="he-subtitle">
              Tailored programmes and pathways for each stakeholder in the<br />education ecosystem.
            </p> */}
          </div>

          <div className="he-grid" ref={gridRef} style={{ perspective: '1200px' }}>
            {ecosystemData.map((item, idx) => (
              <div
                className="he-card"
                key={idx}
              >
                <div className="he-card-top-border" style={{ background: item.themeColor }}></div>
                <div className="he-img-area">
                  <img src={item.img} alt={item.label} />
                </div>

                <div className="he-content">
                  <div className="he-card-label" style={{ color: item.themeColor }}>
                    {item.label}
                  </div>
                  <h3 className="he-card-title">{item.title}</h3>
                  <p className="he-card-desc">{item.desc}</p>

                  <ul className="he-bullets">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>
                        <span className="he-bullet-dot" style={{ background: item.themeColor }}></span>
                        <strong>{bullet.b}</strong>{bullet.text}
                      </li>
                    ))}
                  </ul>

                  <button className="he-btn" style={{ background: item.themeColor }}>
                    {item.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
