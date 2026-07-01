import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Target, BookOpen, Star, Briefcase, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhySkillzzaVI() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wsvi-header-elem', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });
      gsap.from('.wsvi-card', {
        y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.wsvi-grid', start: 'top 85%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cards = [
    {
      title: "Built Exclusively for School Students",
      desc: "Not adapted from adult platforms – every element is designed for Grades 6–12.",
      icon: <GraduationCap size={36} strokeWidth={1.8} />,
      color: "#6C3CF7",
      bgLight: "rgba(108,60,247,0.08)",
      borderColor: "linear-gradient(90deg, #6C3CF7, #A78BFA)"
    },
    {
      title: "Outcomes Over Theory",
      desc: "Every internship ends with a tangible project, not a passive completion certificate.",
      icon: <Target size={36} strokeWidth={1.8} />,
      color: "#6C3CF7",
      bgLight: "rgba(108,60,247,0.08)",
      borderColor: "linear-gradient(90deg, #6C3CF7, #A78BFA)"
    },
    {
      title: "Industry-Aligned Curriculum",
      desc: "Curated with inputs from working professionals and industry mentors.",
      icon: <BookOpen size={36} strokeWidth={1.8} />,
      color: "#6C3CF7",
      bgLight: "rgba(108,60,247,0.08)",
      borderColor: "linear-gradient(90deg, #6C3CF7, #A78BFA)"
    },
    {
      title: "Mentor-Guided Experience",
      desc: "Students get real human feedback, not just automated reviews.",
      icon: <Star size={36} strokeWidth={1.8} />,
      color: "#6C3CF7",
      bgLight: "rgba(108,60,247,0.08)",
      borderColor: "linear-gradient(90deg, #6C3CF7, #A78BFA)"
    },
    {
      title: "Portfolio-Driven Approach",
      desc: "Everything produced is shareable, credible, and built for long-term impact.",
      icon: <Briefcase size={36} strokeWidth={1.8} />,
      color: "#6C3CF7",
      bgLight: "rgba(108,60,247,0.08)",
      borderColor: "linear-gradient(90deg, #6C3CF7, #A78BFA)"
    },
    {
      title: "Safe & Parent-Visible",
      desc: "Moderated platform with complete transparency for parents and schools.",
      icon: <ShieldCheck size={36} strokeWidth={1.8} />,
      color: "#6C3CF7",
      bgLight: "rgba(108,60,247,0.08)",
      borderColor: "linear-gradient(90deg, #6C3CF7, #A78BFA)"
    }
  ];

  return (
    <>
      <style>{`
        .wsvi-section {
          width: 100%;
          padding: 100px 40px;
          background-color: #F8F9FC; /* Slightly distinct tint */
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
          position: relative;
        }
        
        /* Premium Background Elements */
        .wsvi-glow {
          position: absolute;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 0;
          opacity: 0.5;
          pointer-events: none;
        }
        .wsvi-glow-left {
          background: rgba(99, 102, 241, 0.12); /* Indigo */
          top: -200px;
          left: -300px;
        }
        .wsvi-glow-right {
          background: rgba(168, 85, 247, 0.12); /* Purple */
          bottom: -200px;
          right: -300px;
        }
        .wsvi-bg-grid {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            radial-gradient(circle at 100% 0%, rgba(99, 102, 241, 0.05) 0%, transparent 60%),
            radial-gradient(circle at 0% 100%, rgba(168, 85, 247, 0.05) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }
        .wsvi-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .wsvi-header-wrap {
          text-align: center;
          margin-bottom: 56px;
        }
        .wsvi-header {
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 800;
          color: #1A1A2E;
          margin: 0 0 16px;
          letter-spacing: -1px;
        }
        .wsvi-header .purple { color: #6C3CF7; }
        .wsvi-subtitle {
          font-size: 17px;
          color: #6B7280;
          margin: 0;
          font-weight: 500;
        }

        /* Grid */
        .wsvi-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 24px;
        }

        /* Card */
        .wsvi-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 32px 24px 28px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.04);
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1), 
                      box-shadow 0.45s cubic-bezier(0.16,1,0.3,1),
                      border-color 0.3s ease;
          border: 1.5px solid #E5E7EB;
        }

        /* Shimmer sweep */
        .wsvi-card::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(120deg, transparent 30%, rgba(108,60,247,0.04) 50%, transparent 70%);
          transition: left 0.6s ease;
          z-index: 0;
          pointer-events: none;
        }
        .wsvi-card:hover::after {
          left: 100%;
        }

        .wsvi-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 20px 48px rgba(108, 60, 247, 0.14), 0 0 0 2px rgba(108, 60, 247, 0.1);
          border-color: rgba(108, 60, 247, 0.25);
        }

        /* Top color border */
        .wsvi-card-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          border-radius: 20px 20px 0 0;
          z-index: 1;
        }

        /* Icon circle */
        .wsvi-icon-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
        }
        .wsvi-card:hover .wsvi-icon-circle {
          transform: scale(1.12) rotate(-5deg);
          box-shadow: 0 8px 20px rgba(108,60,247,0.15);
        }

        /* Small accent line below icon */
        .wsvi-accent-line {
          width: 36px;
          height: 3px;
          border-radius: 4px;
          margin-bottom: 18px;
          position: relative;
          z-index: 1;
          transition: width 0.3s ease;
        }
        .wsvi-card:hover .wsvi-accent-line {
          width: 52px;
        }

        /* Title */
        .wsvi-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #1A1A2E;
          margin: 0 0 12px;
          line-height: 1.35;
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
        }
        .wsvi-card:hover .wsvi-card-title {
          color: #6C3CF7;
        }

        /* Description */
        .wsvi-card-desc {
          font-size: 13.5px;
          color: #6B7280;
          line-height: 1.6;
          margin: 0 0 24px;
          flex: 1;
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
        }
        .wsvi-card:hover .wsvi-card-desc {
          color: #4B5563;
        }

        /* Dot pattern at bottom */
        .wsvi-dots {
          display: grid;
          grid-template-columns: repeat(5, 6px);
          grid-template-rows: repeat(3, 6px);
          gap: 5px;
          position: relative;
          z-index: 1;
        }
        .wsvi-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }
        .wsvi-card:hover .wsvi-dot {
          opacity: 0.7;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .wsvi-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .wsvi-grid { grid-template-columns: repeat(2, 1fr); }
          .wsvi-section { padding: 60px 20px; }
        }
        @media (max-width: 500px) {
          .wsvi-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="wsvi-section" ref={sectionRef}>
        <div className="wsvi-glow wsvi-glow-left"></div>
        <div className="wsvi-glow wsvi-glow-right"></div>
        <div className="wsvi-bg-grid"></div>

        <div className="wsvi-container">

          <div className="wsvi-header-wrap">
            <h2 className="wsvi-header wsvi-header-elem">
              Why <span className="purple">Skillzza</span> Virtual Internships
            </h2>
            <p className="wsvi-subtitle wsvi-header-elem">
              What Sets Us Apart In An Increasingly Crowded Edtech Landscape:
            </p>
          </div>

          <div className="wsvi-grid">
            {cards.map((card, idx) => (
              <div key={idx} className="wsvi-card">
                {/* Top gradient border */}
                <div
                  className="wsvi-card-border"
                  style={{ background: card.borderColor }}
                />

                {/* Icon */}
                <div
                  className="wsvi-icon-circle"
                  style={{ background: card.bgLight, color: card.color }}
                >
                  {card.icon}
                </div>

                {/* Accent line */}
                <div
                  className="wsvi-accent-line"
                  style={{ backgroundColor: card.color }}
                />

                {/* Title */}
                <h3 className="wsvi-card-title">{card.title}</h3>

                {/* Description */}
                <p className="wsvi-card-desc">{card.desc}</p>

                {/* Dot pattern */}
                <div className="wsvi-dots">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div
                      key={i}
                      className="wsvi-dot"
                      style={{ backgroundColor: card.color }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
