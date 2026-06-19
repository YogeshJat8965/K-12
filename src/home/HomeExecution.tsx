import EXEC_IMG from '../assets/landing page/ChatGPT Image Jun 20, 2026, 01_55_48 AM copy.png';

import { BookOpen, FlaskConical, TrendingUp, Award, Trophy } from 'lucide-react';

const execData = [
  {
    id: '01',
    title: 'Future-Ready Curriculum Pathways',
    desc: 'AI, coding, design thinking, sustainability, and emerging technologies delivered through structured, age-appropriate, project-based learning journeys.',
    icon: <BookOpen color="#fff" size={28} strokeWidth={1.5} />
  },
  {
    id: '02',
    title: 'Skill Studios & Applied Innovation Labs',
    desc: 'Hands-on labs, simulations, challenges, and maker experiences where students build, prototype, solve, and apply learning in real-world contexts.',
    icon: <FlaskConical color="#fff" size={28} strokeWidth={1.5} />
  },
  {
    id: '03',
    title: 'Continuous Assessment & Progress Intelligence',
    desc: 'Competency tracking, learner portfolios, milestone dashboards, and growth analytics designed to measure mastery and make progress visible.',
    icon: <TrendingUp color="#fff" size={28} strokeWidth={1.5} />
  },
  {
    id: '04',
    title: 'Certification & Achievement Pathways',
    desc: 'Digital credentials, capstones, showcase projects, and certification pathways that validate skill development and celebrate achievement.',
    icon: <Award color="#fff" size={28} strokeWidth={1.5} />
  },
  {
    id: '05',
    title: 'League-Based Progression & Talent Development',
    desc: 'Explorer. Creator. Innovator. Leader. A challenge-led progression model powered by hackathons, ambassador programmes, innovation leagues, and recognition ecosystems.',
    icon: <Trophy color="#fff" size={28} strokeWidth={1.5} />
  }
];

export default function HomeExecution() {
  return (
    <>
      <style>{`
        .ef-section {
          width: 100%;
          background: #FFFFFF;
          padding: 120px 0 100px;
          font-family: 'Poppins', sans-serif;
          position: relative;
        }
        .ef-inner {
          max-width: 1640px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .ef-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          margin-bottom: 80px;
        }
        .ef-left {
          flex: 1;
          max-width: 680px;
        }
        .ef-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
        .ef-right img {
          max-width: 100%;
          height: auto;
          display: block;
        }
        .ef-label {
          color: #6C3CF7;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
          display: block;
        }
        .ef-title {
          font-weight: 800;
          font-size: 42px;
          line-height: 1.2;
          color: #1A1A2E;
          margin-bottom: 24px;
        }
        .ef-subtitle {
          font-weight: 400;
          font-size: 18px;
          line-height: 1.6;
          color: #4B5563;
          margin: 0;
        }
        .ef-pillars-header {
          margin-top: 100px;
          margin-bottom: 60px;
          max-width: 1440px;
          margin-left: auto;
          margin-right: auto;
        }
        .ef-pillars-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          max-width: 1440px;
          margin: 0 auto;
        }
        .ef-pillar {
          display: flex;
          flex-direction: column;
        }
        .ef-pillar-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #6C3CF7;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .ef-pillar-title {
          font-weight: 700;
          font-size: 18px;
          line-height: 1.4;
          color: #1A1A2E;
          margin-bottom: 16px;
        }
        .ef-pillar-desc {
          font-weight: 400;
          font-size: 14px;
          line-height: 1.6;
          color: #4B5563;
          margin: 0;
        }
        @media (max-width: 1400px) {
          .ef-pillars-grid { grid-template-columns: repeat(3, 1fr); }
          .ef-pillar { border-left: none !important; padding-left: 0 !important; }
        }
        @media (max-width: 900px) {
          .ef-pillars-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .ef-pillars-grid { grid-template-columns: 1fr; }
          .ef-title { font-size: 32px; }
          .ef-top-row { flex-direction: column; gap: 40px; }
        }
      `}</style>

      <section className="ef-section">
        <div className="ef-inner">
          <div className="ef-top-row">
            <div className="ef-left">
              <span className="ef-label">OUR EXECUTION FRAMEWORK</span>
              <h2 className="ef-title">From Learning To Measurable Outcomes</h2>
              <p className="ef-subtitle">
                Skillzza Nova Goes Beyond Teaching AI — We Deliver A Structured Execution Model That Converts Learning Into Measurable Student Outcomes. Built As An Integrated K-12 Implementation Framework, Our Model Combines Future-Ready Curriculum, Experiential Skill Labs, Continuous Assessment, Certification Pathways, And League-Based Progression.
              </p>
            </div>
            <div className="ef-right">
              <img src={EXEC_IMG} alt="Execution Framework" />
            </div>
          </div>

          <div className="ef-pillars-header">
            <h2 className="ef-title">The Five Pillars Of Execution</h2>
          </div>

          <div className="ef-pillars-grid">
            {execData.map((item, idx) => (
              <div 
                key={item.id} 
                className="ef-pillar" 
                style={{ 
                  borderLeft: idx === 0 ? 'none' : '1px solid #E5E7EB', 
                  paddingLeft: idx === 0 ? '0' : '20px' 
                }}
              >
                <div className="ef-pillar-icon">
                  {item.icon}
                </div>
                <h3 className="ef-pillar-title">{item.title}</h3>
                <p className="ef-pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>



        </div>
      </section>
    </>
  );
}
