import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Briefcase, BadgeCheck, CheckSquare, Sparkles, LineChart } from 'lucide-react';
import walkAwayImg from '../../assets/virtual internship/walk away.webp';

gsap.registerPlugin(ScrollTrigger);

export default function WalkAway() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imgRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Text animation
      gsap.from('.wa-header, .wa-line', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Cards animation
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.wa-card');
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      num: "01",
      title: "Verified Certificate",
      desc: "Mentor-approved, portfolio-credible certification for every completed internship.",
      icon: <Award size={40} strokeWidth={1.5} />,
      colorClass: "wa-purple"
    },
    {
      num: "02",
      title: "Portfolio Project",
      desc: "Real, shareable work - a prototype, report, or presentation built for public viewing.",
      icon: <Briefcase size={40} strokeWidth={1.5} />,
      colorClass: "wa-green"
    },
    {
      num: "03",
      title: "Digital Skill Passport",
      desc: "A verifiable digital badge that grows with every internship - shareable via QR code, portfolio link, or later export to LinkedIn.",
      icon: <BadgeCheck size={40} strokeWidth={1.5} />,
      colorClass: "wa-orange"
    },
    {
      num: "04",
      title: "Skill-Based Badges",
      desc: "Micro-credentials that document specific competencies gained during the internship.",
      icon: <CheckSquare size={40} strokeWidth={1.5} />,
      colorClass: "wa-blue"
    },
    {
      num: "05",
      title: "Mentor Feedback",
      desc: "Structured evaluation with qualitative insights from domain experts.",
      icon: <Sparkles size={40} strokeWidth={1.5} />,
      colorClass: "wa-yellow"
    },
    {
      num: "06",
      title: "Career Insight Report",
      desc: "Personalised guidance mapping strengths, aptitudes, and suggested next steps.",
      icon: <LineChart size={40} strokeWidth={1.5} />,
      colorClass: "wa-pink"
    }
  ];

  return (
    <>
      <style>{`
        .wa-section {
          width: 100%;
          min-height: 800px;
          background: #FAFAFD;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
          padding: 40px 40px;
        }

        .wa-bg-img {
          position: absolute;
          top: 0;
          right: 0;
          height: auto;
          width: 60%;
          max-width: 800px;
          object-fit: contain;
          object-position: top right;
          z-index: 1;
        }

        .wa-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .wa-header {
          font-size: 48px;
          font-weight: 800;
          color: #1A1A2E;
          line-height: 1.1;
          margin: 0 0 20px;
          letter-spacing: -2px;
          max-width: 600px;
        }

        .wa-header .purple {
          color: #4F46E5;
        }

        .wa-line {
          width: 60px;
          height: 3px;
          background-color: #4F46E5;
          border-radius: 4px;
          margin-bottom: 60px;
        }

        .wa-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .wa-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 32px 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: flex-start;
          gap: 20px;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s ease;
          border: 1.5px solid #E5E7EB;
          position: relative;
          overflow: hidden;
        }

        /* Shimmer sweep on hover */
        .wa-card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(120deg, transparent 30%, rgba(108,60,247,0.04) 50%, transparent 70%);
          transition: left 0.6s ease;
          z-index: 0;
        }
        .wa-card:hover::before {
          left: 100%;
        }

        .wa-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 48px rgba(108, 60, 247, 0.12), 0 0 0 2px rgba(108, 60, 247, 0.08);
          border-color: rgba(108, 60, 247, 0.25);
        }

        .wa-icon-box {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wa-card:hover .wa-icon-box {
          transform: scale(1.12) rotate(-5deg);
        }

        /* Color classes */
        .wa-purple .wa-icon-box { background: rgba(99, 102, 241, 0.1); color: #6366F1; }
        .wa-purple .wa-num { color: #6366F1; }

        .wa-green .wa-icon-box { background: rgba(16, 185, 129, 0.1); color: #10B981; }
        .wa-green .wa-num { color: #10B981; }

        .wa-orange .wa-icon-box { background: rgba(245, 158, 11, 0.1); color: #F59E0B; }
        .wa-orange .wa-num { color: #F59E0B; }

        .wa-blue .wa-icon-box { background: rgba(59, 130, 246, 0.1); color: #3B82F6; }
        .wa-blue .wa-num { color: #3B82F6; }

        .wa-yellow .wa-icon-box { background: rgba(250, 204, 21, 0.1); color: #FACC15; }
        .wa-yellow .wa-num { color: #FACC15; }

        .wa-pink .wa-icon-box { background: rgba(244, 63, 94, 0.1); color: #F43F5E; }
        .wa-pink .wa-num { color: #F43F5E; }

        .wa-card-content {
          flex: 1;
        }

        .wa-num {
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 4px;
        }

        .wa-card-title {
          font-size: 18px;
          font-weight: 800;
          color: #1A1A2E;
          margin: 0 0 12px;
          letter-spacing: -0.5px;
        }

        .wa-card-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0;
          font-weight: 500;
        }

        /* Top left dot pattern */
        .wa-dots-left {
          position: absolute;
          top: 40px;
          left: 40px;
          width: 60px;
          height: 60px;
          background-image: radial-gradient(#C7D2FE 2px, transparent 2px);
          background-size: 12px 12px;
          z-index: 1;
        }

        /* Bottom right dot pattern */
        .wa-dots-right {
          position: absolute;
          bottom: 40px;
          right: 40px;
          width: 80px;
          height: 80px;
          background-image: radial-gradient(#C7D2FE 2px, transparent 2px);
          background-size: 12px 12px;
          z-index: 1;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1200px) {
          .wa-grid { grid-template-columns: repeat(2, 1fr); }
          .wa-bg-img { width: 50%; opacity: 0.8; }
        }

        @media (max-width: 768px) {
          .wa-grid { grid-template-columns: 1fr; }
          .wa-section { padding: 40px 20px; }
          .wa-header { font-size: 40px; }
          .wa-line { margin-bottom: 40px; }
          .wa-bg-img { position: relative; width: 100%; max-width: 400px; margin: 0 auto 40px; display: block; opacity: 1; }
        }
      `}</style>

      <section className="wa-section" ref={sectionRef}>
        <div className="wa-dots-left"></div>
        <div className="wa-dots-right"></div>
        
        <img src={walkAwayImg} alt="Digital Skill Passport" className="wa-bg-img" ref={imgRef} />

        <div className="wa-container">
          
          <h2 className="wa-header">
            What students<br />
            <span className="purple">walk away</span> with
          </h2>
          <div className="wa-line"></div>

          <div className="wa-grid" ref={gridRef}>
            {cards.map((card, idx) => (
              <div key={idx} className={`wa-card ${card.colorClass}`}>
                <div className="wa-icon-box">
                  {card.icon}
                </div>
                <div className="wa-card-content">
                  <h3 className="wa-card-title">{card.title}</h3>
                  <p className="wa-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
