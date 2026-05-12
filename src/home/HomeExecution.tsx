const execData = [
  {
    id: '01',
    title: 'Future-Ready Curriculum Pathways',
    desc: 'AI, coding, design thinking, sustainability, and emerging technologies delivered through structured, age-appropriate, project-based learning journeys.',
    icon: '/landing/exec-icon-1.svg',
    bg: '#EEF2FE'
  },
  {
    id: '02',
    title: 'Skill Studios & Applied Innovation Labs',
    desc: 'Hands-on labs, simulations, challenges, and maker experiences where students build, prototype, solve, and apply learning in real-world contexts.',
    icon: '/landing/exec-icon-2.svg',
    bg: '#F5F3FE'
  },
  {
    id: '03',
    title: 'Continuous Assessment & Progress Intelligence',
    desc: 'Competency tracking, learner portfolios, milestone dashboards, and growth analytics designed to measure mastery and make progress visible.',
    icon: '/landing/exec-icon-3.svg',
    bg: '#EFF6FE'
  },
  {
    id: '04',
    title: 'Certification & Achievement Pathways',
    desc: 'Digital credentials, capstones, showcase projects, and certification pathways that validate skill development and celebrate achievement.',
    icon: '/landing/exec-icon-4.svg',
    bg: '#EDFFF7'
  },
  {
    id: '05',
    title: 'League-Based Progression & Talent Development',
    desc: 'Explorer. Creator. Innovator. Leader. A challenge-led progression model powered by hackathons, ambassador programmes, innovation leagues, and recognition ecosystems.',
    icon: '/landing/exec-icon-5.svg',
    bg: '#FFF7EE'
  }
];

export default function HomeExecution() {
  return (
    <>
      <style>{`
        .ef-section {
          width: 100%;
          background: #7436CC;
          padding: 120px 0 60px;
          font-family: 'Poppins', sans-serif;
          position: relative;
        }
        .ef-inner {
          max-width: 1640px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .ef-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .ef-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          border-radius: 40px;
          padding: 10px 32px;
          margin-bottom: 32px;
        }
        .ef-badge span {
          color: #7436CC;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          white-space: nowrap;
        }
        .ef-title {
          font-weight: 700;
          font-size: clamp(32px, 3.5vw, 46px);
          line-height: 1.2;
          color: #EDF2FE;
          margin-bottom: 24px;
          max-width: 972px;
          margin-left: auto;
          margin-right: auto;
        }
        .ef-subtitle {
          font-weight: 400;
          font-size: clamp(16px, 1.2vw, 20px);
          line-height: 1.6;
          color: #EDF2FE;
          max-width: 1113px;
          margin: 0 auto;
        }
        .ef-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
          margin-top: 60px;
        }
        .ef-card {
          border-radius: 16px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          border: 1px solid #D2D3D3;
          min-height: 457px;
          position: relative;
          transition: transform 0.3s ease;
        }
        .ef-card:hover {
          transform: translateY(-10px);
        }
        .ef-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
        }
        .ef-icon {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }
        .ef-number {
          font-weight: 600;
          font-size: 30px;
          line-height: 46px;
          color: #230569;
          opacity: 0.1;
        }
        .ef-card-title {
          font-weight: 700;
          font-size: clamp(18px, 1.3vw, 22px);
          line-height: 1.3;
          color: #1A1A2E;
          margin-bottom: 20px;
        }
        .ef-card-desc {
          font-weight: 400;
          font-size: 14px;
          line-height: 1.6;
          color: #4B5563;
        }
        @media (max-width: 1400px) {
          .ef-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .ef-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .ef-grid { grid-template-columns: 1fr; }
          .ef-title { font-size: 28px; }
        }
      `}</style>

      <section className="ef-section">
        <div className="ef-inner">
          <div className="ef-header">
            <div className="ef-badge">
              <span>Our Execution Framework</span>
            </div>
            <h2 className="ef-title">From Learning to Measurable Outcomes</h2>
            <p className="ef-subtitle">
              Skillzza K-12 goes beyond teaching AI and future skills - we deliver a structured execution model that transforms learning into measurable student outcomes. Built as an integrated K-12 implementation framework, our model combines future-ready curriculum, experiential skill labs, continuous assessment, certification pathways, and league-based progression to help learners move from exploration to leadership.
            </p>
          </div>

          <div className="ef-grid">
            {execData.map((item) => (
              <div key={item.id} className="ef-card" style={{ background: item.bg }}>
                <div className="ef-card-top">
                  <img src={item.icon} alt={item.title} className="ef-icon" />
                  <span className="ef-number">{item.id}</span>
                </div>
                <h3 className="ef-card-title">{item.title}</h3>
                <p className="ef-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Student Journey Flow */}
          <div style={{
            maxWidth: 1400,
            margin: '80px auto 0',
            textAlign: 'center',
          }}>
            <img 
              src="/landing/journey-flow.svg" 
              alt="Student Journey Flow" 
              style={{ width: '100%', height: 'auto' }} 
            />
          </div>

        </div>
      </section>
    </>
  );
}
