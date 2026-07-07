import { useEffect, useRef } from 'react';
import { Globe, Bot, Briefcase, Handshake, School, BookOpen, Trophy } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeCompare() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {
      // Title blur-in per word
      if (titleRef.current) {
        const text = titleRef.current.innerText;
        titleRef.current.innerHTML = '';
        const words = text.split(' ');
        words.forEach((word) => {
          const span = document.createElement('span');
          span.innerText = word + ' ';
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          span.style.filter = 'blur(20px)';
          span.className = 'hc-word';
          titleRef.current?.appendChild(span);
        });

        gsap.to('.hc-word', {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%'
          }
        });
      }

      // Rows slide in 3D rotateY
      if (listRef.current) {
        const rows = listRef.current.querySelectorAll('.hc-card');
        gsap.from(rows, {
          x: -100,
          rotationY: 20,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 80%'
          }
        });

        // Trigger highlight sweep for Nova text
        rows.forEach((row) => {
          ScrollTrigger.create({
            trigger: row,
            start: 'top 85%',
            onEnter: () => {
              const textEl = row.querySelector('.hc-sweep-text');
              if (textEl) textEl.classList.add('swept');
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const data = [
    {
      title: 'Scope Of Skills',
      icon: <Globe size={28} strokeWidth={1.5} />,
      iconColor: '#F59E0B',
      iconBg: '#FFFBEB',
      othersDesc: 'Single-Track: Coding Only (WhiteHat Jr) Or Computing Literacy Only (Code.Org).',
      novaDesc: '15+ Future Domains - AI, Sustainability, Finance, Space, Design, Cybersecurity - In One Ecosystem'
    },
    {
      title: 'AI Co-Pilot',
      icon: <Bot size={28} strokeWidth={1.5} />,
      iconColor: '#6C3CF7',
      iconBg: '#F5F3FF',
      othersDesc: 'Generic Chatbots Or US-Centric Tutors (Khanmigo) With Limited K-12 Safety Controls.',
      novaDesc: 'Vedya AI - Multilingual, K-12 Native, Curriculum-Aligned, Classroom-Safe By Default.'
    },
    {
      title: 'Career Readiness',
      icon: <Briefcase size={28} strokeWidth={1.5} />,
      iconColor: '#10B981',
      iconBg: '#ECFDF5',
      othersDesc: 'Forage And Similar Simulators Target University Students. School Students Miss Out',
      novaDesc: 'First-Of-Its-Kind Virtual Internships Engineered For Grades 6-12 - College-Application Ready.'
    },
    {
      title: 'Industry Partnerships',
      icon: <Handshake size={28} strokeWidth={1.5} />,
      iconColor: '#3B82F6',
      iconBg: '#EFF6FF',
      othersDesc: 'Brand Placements Without Functional Integration Or Recognised Credentials.',
      novaDesc: 'Adobe Digital Creativity & AI - Free For Schools, With Globally-Recognised Adobe Creative Educator Certification.'
    },
    {
      title: 'School Transformation',
      icon: <School size={28} strokeWidth={1.5} />,
      iconColor: '#EAB308',
      iconBg: '#FEF9C3',
      othersDesc: 'LMS Or App Subscription Model - No Institutional Uplift.',
      novaDesc: 'CCMM Framework - Curriculum, Culture, Mindset & Methodology - A Full-School AI Readiness Model.'
    },
    {
      title: 'Curriculum Alignment',
      icon: <BookOpen size={28} strokeWidth={1.5} />,
      iconColor: '#F43F5E',
      iconBg: '#FCE7F3',
      othersDesc: 'Aligned To One Region\'s Standards - Typically US Common Core Or UK National Curriculum',
      novaDesc: 'Aligned To NEP 2020, IB, Cambridge, ISTE, And UN SDGs - Globally Portable, Locally Relevant.'
    },
    {
      title: 'Learner Outcomes',
      icon: <Trophy size={28} strokeWidth={1.5} />,
      iconColor: '#8B5CF6',
      iconBg: '#EDE9FE',
      othersDesc: 'Course Completion Certificates With Limited Real-World Signal.',
      novaDesc: 'Portfolios, Capstones, Internship Completions, And Explorer → Leader Progression Leagues.'
    }
  ];

  return (
    <>
      <style>{`
        .hc-section {
          width: 100%;
          background: #F9FAFB;
          padding: 100px 0;
          font-family: 'Poppins', sans-serif;
        }
        .hc-inner {
          max-width: 1760px;
          margin: 0 auto;
          padding: 0 80px;
        }

        /* Header */
        .hc-header {
          margin-bottom: 60px;
        }
        .hc-label {
          color: #6C3CF7;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }
        .hc-title {
          font-weight: 800;
          font-size: 42px;
          line-height: 1.15;
          color: #1A1A2E;
          margin: 0 0 20px;
          letter-spacing: -0.5px;
        }
        .hc-subtitle {
          font-weight: 400;
          font-size: 18px;
          line-height: 1.6;
          color: #4B5563;
          margin: 0;
          max-width: 700px;
        }

        /* Cards */
        .hc-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .hc-card {
          background: #fff;
          border-radius: 16px;
          padding: 24px 32px;
          box-shadow: 0px 4px 40px rgba(0,0,0,0.03);
          display: flex;
          align-items: center;
        }

        /* Column 1 */
        .hc-col-1 {
          flex: 0 0 32%;
          display: flex;
          align-items: center;
        }
        .hc-icon-box {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hc-icon-box svg {
          width: 28px;
          height: 28px;
        }
        .hc-card-title {
          font-weight: 700;
          font-size: 20px;
          color: #1A1A2E;
          margin: 0 0 0 24px;
        }

        /* Columns 2 & 3 */
        .hc-col-2, .hc-col-3 {
          flex: 1;
          padding-left: 40px;
          border-left: 1px solid #E5E7EB;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .hc-col-head-others {
          font-weight: 600;
          font-size: 16px;
          color: #6B7280;
          margin: 0 0 12px;
        }
        .hc-col-head-nova {
          font-weight: 600;
          font-size: 16px;
          color: #6C3CF7;
          margin: 0 0 12px;
        }
        
        .hc-col-desc {
          font-weight: 400;
          font-size: 15px;
          color: #4B5563;
          line-height: 1.6;
          margin: 0;
        }

        /* Highlight Sweep Text */
        .hc-sweep-text {
          background: linear-gradient(to right, #111827 50%, #6C3CF7 50%);
          background-size: 200% 100%;
          background-position: 0% 0%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: background-position 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hc-sweep-text.swept {
          background-position: -100% 0%;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .hc-inner { padding: 0 40px; }
          .hc-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 32px;
            gap: 32px;
          }
          .hc-col-1 {
            width: 100%;
            flex: none;
          }
          .hc-col-2, .hc-col-3 {
            width: 100%;
            padding-left: 0;
            border-left: none;
            flex: none;
          }
          .hc-col-3 {
            border-top: 1px solid #E5E7EB;
            padding-top: 32px;
          }
        }
        @media (max-width: 600px) {
          .hc-inner { padding: 0 20px; }
          .hc-section { padding: 60px 0; }
          .hc-title { font-size: 28px; }
          .hc-icon-box { width: 64px; height: 64px; }
          .hc-icon-box svg { width: 28px; height: 28px; }
          .hc-card-title { font-size: 20px; margin-left: 20px; }
          .hc-card { padding: 24px 20px; }
        }
      `}</style>

      <section className="hc-section" ref={sectionRef} style={{ perspective: '1200px' }}>
        <div className="hc-inner">

          <div className="hc-header">
            <span className="hc-label">WHY SKILLZA NOVA</span>
            <h2 className="hc-title" ref={titleRef}>Better Than The Alternatives. By Design.</h2>
            <p className="hc-subtitle">
              How We Compare Against Global AI Learning Platforms, Internship Simulators, And India's Coding-Only Edtechs
            </p>
          </div>

          <div className="hc-list" ref={listRef}>
            {data.map((row, idx) => (
              <div className="hc-card" key={idx} style={{ transformStyle: 'preserve-3d' }}>

                <div className="hc-col-1">
                  <div className="hc-icon-box" style={{ backgroundColor: row.iconBg, color: row.iconColor }}>
                    {row.icon}
                  </div>
                  <h3 className="hc-card-title">{row.title}</h3>
                </div>

                <div className="hc-col-2">
                  <p className="hc-col-head-others">Others</p>
                  <p className="hc-col-desc">{row.othersDesc}</p>
                </div>

                <div className="hc-col-3">
                  <p className="hc-col-head-nova">Skillza Nova</p>
                  <p className="hc-col-desc hc-sweep-text">{row.novaDesc}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
