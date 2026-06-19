import { Globe, Bot, Briefcase, Handshake, School, BookOpen, Trophy } from 'lucide-react';

export default function HomeCompare() {
  const data = [
    {
      title: 'Scope Of Skills',
      icon: <Globe size={28} strokeWidth={1.5} />,
      iconColor: '#F59E0B',
      iconBg: '#FFFBEB',
      othersDesc: 'Single-Track: Coding Only (WhiteHat Jr) Or Computing Literacy Only (Code.Org).',
      novaDesc: '15+ Future Domains — AI, Sustainability, Finance, Space, Design, Cybersecurity — In One Ecosystem'
    },
    {
      title: 'AI Co-Pilot',
      icon: <Bot size={28} strokeWidth={1.5} />,
      iconColor: '#6C3CF7',
      iconBg: '#F5F3FF',
      othersDesc: 'Generic Chatbots Or US-Centric Tutors (Khanmigo) With Limited K-12 Safety Controls.',
      novaDesc: 'Vedya AI — Multilingual, K-12 Native, Curriculum-Aligned, Classroom-Safe By Default.'
    },
    {
      title: 'Career Readiness',
      icon: <Briefcase size={28} strokeWidth={1.5} />,
      iconColor: '#10B981',
      iconBg: '#ECFDF5',
      othersDesc: 'Forage And Similar Simulators Target University Students. School Students Miss Out',
      novaDesc: 'First-Of-Its-Kind Virtual Internships Engineered For Grades 6-12 — College-Application Ready.'
    },
    {
      title: 'Industry Partnerships',
      icon: <Handshake size={28} strokeWidth={1.5} />,
      iconColor: '#3B82F6',
      iconBg: '#EFF6FF',
      othersDesc: 'Brand Placements Without Functional Integration Or Recognised Credentials.',
      novaDesc: 'Adobe Digital Creativity & AI — Free For Schools, With Globally-Recognised Adobe Creative Educator Certification.'
    },
    {
      title: 'School Transformation',
      icon: <School size={28} strokeWidth={1.5} />,
      iconColor: '#EAB308',
      iconBg: '#FEF9C3',
      othersDesc: 'LMS Or App Subscription Model — No Institutional Uplift.',
      novaDesc: 'CCMM Framework — Curriculum, Culture, Mindset & Methodology — A Full-School AI Readiness Model.'
    },
    {
      title: 'Curriculum Alignment',
      icon: <BookOpen size={28} strokeWidth={1.5} />,
      iconColor: '#F43F5E',
      iconBg: '#FCE7F3',
      othersDesc: 'Aligned To One Region\'s Standards — Typically US Common Core Or UK National Curriculum',
      novaDesc: 'Aligned To NEP 2020, IB, Cambridge, ISTE, And UN SDGs — Globally Portable, Locally Relevant.'
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
          .hc-title { font-size: 32px; }
          .hc-icon-box { width: 64px; height: 64px; }
          .hc-icon-box svg { width: 28px; height: 28px; }
          .hc-card-title { font-size: 20px; margin-left: 20px; }
        }
      `}</style>

      <section className="hc-section">
        <div className="hc-inner">
          
          <div className="hc-header">
            <span className="hc-label">WHY SKILLZA NOVA</span>
            <h2 className="hc-title">Better Than The Alternatives. By Design.</h2>
            <p className="hc-subtitle">
              How We Compare Against Global AI Learning Platforms, Internship Simulators, And India's Coding-Only Edtechs
            </p>
          </div>

          <div className="hc-list">
            {data.map((row, idx) => (
              <div className="hc-card" key={idx}>
                
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
                  <p className="hc-col-desc">{row.novaDesc}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
