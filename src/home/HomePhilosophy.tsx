const philData = [
  {
    id: '01',
    title: '21st Century Skills',
    desc: 'Critical thinking, creativity, collaboration, and communication - built alongside technical AI proficiency in every programme.',
    bg: '#eff6fe',
    accent: '#4a7cff'
  },
  {
    id: '02',
    title: 'Personalised Learning',
    desc: 'AI-powered tools adapt pace and content to each student\'s unique needs - ensuring comprehension, mastery, and confidence.',
    bg: '#f5f3fe',
    accent: '#4d00ff'
  },
  {
    id: '03',
    title: 'Global Readiness',
    desc: 'International curriculum standards and global-perspective projects that prepare students for a borderless future.',
    bg: '#eafff5',
    accent: '#009e4f'
  }
];

export default function HomePhilosophy() {
  return (
    <>
      <style>{`
        .hp-section {
          width: 100%;
          background: #FFFFFF;
          padding: 100px 0;
          font-family: 'Poppins', sans-serif;
        }

        .hp-inner {
          max-width: 1640px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .hp-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .hp-badge {
          display: inline-block;
          background: #EEF2FF;
          border-radius: 40px;
          padding: 8px 24px;
          margin-bottom: 24px;
        }

        .hp-badge span {
          color: #6C3CF7;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hp-title {
          font-weight: 700;
          font-size: 48px;
          color: #1A1A2E;
          margin-bottom: 24px;
        }

        .hp-subtitle {
          font-weight: 400;
          font-size: 20px;
          color: #84888B;
          max-width: 700px;
          margin: 0 auto;
        }

        .hp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .hp-card {
          border-radius: 24px;
          padding: 40px;
          min-height: 338px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .hp-card:hover {
          transform: translateY(-10px);
        }

        .hp-card-num {
          font-weight: 600;
          font-size: 24px;
          margin-bottom: 12px;
        }

        .hp-card-title {
          font-weight: 700;
          font-size: 28px;
          color: #1A1A2E;
          margin-bottom: 20px;
        }

        .hp-card-desc {
          font-weight: 400;
          font-size: 18px;
          line-height: 1.6;
          color: #4B5563;
        }

        .hp-card-border {
          position: absolute;
          bottom: 0;
          left: 10%;
          width: 80%;
          height: 6px;
          border-radius: 6px 6px 0 0;
        }

        @media (max-width: 1200px) {
          .hp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hp-grid {
            grid-template-columns: 1fr;
          }
          .hp-title {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="hp-section">
        <div className="hp-inner">
          <div className="hp-header">
            <div className="hp-badge">
              <span>How We Teach</span>
            </div>
            <h2 className="hp-title">Our Learning Philosophy</h2>
            <p className="hp-subtitle">
              Three pillars that define how we approach every learning experience.
            </p>
          </div>

          <div className="hp-grid">
            {philData.map((item) => (
              <div 
                key={item.id} 
                className="hp-card" 
                style={{ background: item.bg }}
              >
                <div className="hp-card-num" style={{ color: item.accent }}>
                  {item.id}
                </div>
                <h3 className="hp-card-title">{item.title}</h3>
                <p className="hp-card-desc">{item.desc}</p>
                <div className="hp-card-border" style={{ background: item.accent }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
