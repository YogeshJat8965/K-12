import img1 from '../assets/21st century.png';
import img2 from '../assets/Personalised Learning.png';
import img3 from '../assets/Global Readiness.png';

const philData = [
  {
    id: '01',
    image: img1,
    title: '21st Century\nSkills',
    desc: 'Critical thinking, creativity, collaboration, and communication - built alongside technical AI proficiency in every programme'
  },
  {
    id: '02',
    image: img2,
    title: 'Personalised\nLearning',
    desc: 'Critical thinking, creativity, collaboration, and communication - built alongside technical AI proficiency in every programme'
  },
  {
    id: '03',
    image: img3,
    title: 'Global\nReadiness',
    desc: 'Critical thinking, creativity, collaboration, and communication - built alongside technical AI proficiency in every programme'
  }
];

export default function HomePhilosophy() {
  return (
    <>
      <style>{`
        .hp-section {
          width: 100%;
          background: linear-gradient(135deg, #FDFBFF 0%, #FFFFFF 15%);
          padding: 80px 0 100px;
          font-family: 'Poppins', sans-serif;
        }

        .hp-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Top Quote Section */
        .hp-quote {
          text-align: center;
          margin-bottom: 80px;
        }
        .hp-quote-text {
          font-weight: 700;
          font-size: 32px;
          color: #1A1A2E;
          line-height: 1.4;
          margin: 0;
        }
        .hp-quote-highlight {
          color: #7C3AED;
        }

        /* Header */
        .hp-header {
          margin-bottom: 40px;
        }
        .hp-badge {
          color: #4338CA;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .hp-title {
          font-weight: 700;
          font-size: 42px;
          color: #1A1A2E;
          margin: 0;
        }

        /* Grid */
        .hp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        /* Item */
        .hp-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        /* Image */
        .hp-img-wrap {
          width: 140px;
          height: 140px;
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .hp-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Text */
        .hp-text-wrap {
          flex: 1;
        }
        .hp-item-title {
          font-weight: 700;
          font-size: 20px;
          color: #4338CA;
          margin: 0 0 10px;
          white-space: pre-line;
          line-height: 1.3;
        }
        .hp-item-desc {
          font-weight: 400;
          font-size: 13px;
          line-height: 1.5;
          color: #6B7280;
          margin: 0;
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
          .hp-quote-text {
            font-size: 24px;
          }
          .hp-title {
            font-size: 36px;
          }
        }
      `}</style>

      <section className="hp-section">
        <div className="hp-inner">
          
          <div className="hp-quote">
            <p className="hp-quote-text">
              Students Don't Just Learn Future Skills -<br />
              They <span className="hp-quote-highlight">Apply</span> Them, <span className="hp-quote-highlight">Prove</span> Them, And <span className="hp-quote-highlight">Grow</span> Through Them.
            </p>
          </div>

          <div className="hp-header">
            <div className="hp-badge">HOW WE TEACH</div>
            <h2 className="hp-title">Our Learning Philosophy</h2>
          </div>

          <div className="hp-grid">
            {philData.map((item) => (
              <div key={item.id} className="hp-item">
                <div className="hp-img-wrap">
                  <img src={item.image} alt={item.title.replace('\n', ' ')} />
                </div>
                <div className="hp-text-wrap">
                  <h3 className="hp-item-title">{item.title}</h3>
                  <p className="hp-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
