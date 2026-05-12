const ecoData = [
  {
    id: 1,
    title: 'AI Upskilling',
    desc: 'Project-based learning across storytelling with AI, prompt engineering, and ethical AI - aligned with NEP 2020 and global education standards.',
    tag: 'Grades 6-12',
    icon: '/landing/eco-icon-1.svg',
    bg: '#530ECD',
    iconSize: '125px'
  },
  {
    id: 2,
    title: 'Virtual Internship',
    desc: 'Role-based job simulations in AI product management, data analytics, digital marketing, and more - building real-world, 21st-century skills.',
    tag: 'Grades 6-12',
    icon: '/landing/eco-icon-2.svg',
    bg: '#840BF4',
    iconSize: '125px'
  },
  {
    id: 3,
    title: 'One-on-One Tutoring',
    desc: 'Personalised support for Math, Science, English, Coding, AI & Design Thinking, and Olympiad / Board Exam preparation (CBSE, ICSE).',
    tag: 'Academic + AI',
    icon: '/landing/eco-icon-3.svg',
    bg: '#19A279',
    iconSize: '97px',
    link: 'Learn More →'
  },
  {
    id: 4,
    title: 'Skill Studios',
    desc: 'Structured Skill Studios spanning Gen AI, Space, Sustainability, Finance, Cybersecurity, Public Speaking, and more - schools select 3 per year.',
    tag: '15+ Future Domains',
    icon: '/landing/eco-icon-4.svg',
    bg: '#F43B06',
    iconSize: '125px'
  }
];

export default function HomeEcosystem() {
  return (
    <>
      <style>{`
        .he-section {
          width: 100%;
          background: #fff;
          padding: 100px 0;
          font-family: 'Poppins', sans-serif;
        }

        .he-inner {
          max-width: 1640px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .he-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .he-badge {
          display: inline-block;
          background: #EEF2FF;
          border-radius: 40px;
          padding: 8px 24px;
          margin-bottom: 24px;
        }

        .he-badge span {
          color: #6C3CF7;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .he-title {
          font-weight: 700;
          font-size: 48px;
          color: #1A1A2E;
          margin-bottom: 24px;
        }

        .he-subtitle {
          font-weight: 400;
          font-size: 20px;
          color: #84888B;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .he-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .he-card {
          border-radius: 16px;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          color: #fff;
          border: 1px solid #E0E6FE;
          min-height: 439px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .he-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .he-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 40px;
        }

        .he-icon-box {
          background: #fff;
          border-radius: 12px;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .he-icon-box img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }

        .he-tag-pill {
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 40px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }

        .he-card-title {
          font-weight: 600;
          font-size: 24px;
          line-height: 46px;
          color: #EDF2FE;
          margin-bottom: 8px;
          text-align: left;
        }

        .he-card-desc {
          font-weight: 400;
          font-size: 16px;
          line-height: 30px;
          letter-spacing: 0.4px;
          color: #EDF2FE;
          margin-bottom: 24px;
          text-align: left;
          opacity: 1;
        }

        .he-card-link {
          margin-top: auto;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        @media (max-width: 1400px) {
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

      <section className="he-section">
        <div className="he-inner">
          <div className="he-header">
            <div className="he-badge">
              <span>What We Do</span>
            </div>
            <h2 className="he-title">Our Learning Ecosystem</h2>
            <p className="he-subtitle">
              Four core products designed to work together - from classroom learning to career-ready experience.
            </p>
          </div>

          <div className="he-grid">
            {ecoData.map((item) => (
              <div 
                key={item.id} 
                className="he-card" 
                style={{ 
                  background: item.bg,
                  boxShadow: item.id === 3 ? '0px 2px 19px #00000012' : 'none'
                }}
              >
                <div className="he-card-header">
                  <div className="he-icon-box">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="he-tag-pill">
                    {item.tag}
                  </div>
                </div>

                <h3 className="he-card-title">{item.title}</h3>
                <p className="he-card-desc">{item.desc}</p>
                
                {item.link && (
                  <div className="he-card-link">
                    {item.link}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
