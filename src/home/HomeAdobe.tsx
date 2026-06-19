const adobeFeatures = [
  {
    id: 1,
    text: 'Industry-standard tools - learn on the same platform used by professional creators worldwide.'
  },
  {
    id: 2,
    text: 'Globally-recognised Adobe Creative Educator certification for teachers.'
  },
  {
    id: 3,
    text: '100% free for participating schools, students, and educators.'
  },
  {
    id: 4,
    text: 'Structured progression - ACE Level A (Foundation) → B (Advanced) → C (Mastery) → Influencer.'
  }
];

export default function HomeAdobe() {
  return (
    <>
      <style>{`
        .ha-container {
          width: 100%;
          padding: 0px 40px 60px;
          background: #fff;
          font-family: 'Poppins', sans-serif;
        }

        .ha-box {
          max-width: 1619px;
          margin: 0 auto;
          background: #230569;
          border-radius: 43px;
          padding: clamp(30px, 4vw, 60px) clamp(40px, 5vw, 80px);
          display: flex;
          align-items: center;
          gap: 40px;
          color: #fff;
          position: relative;
          overflow: hidden;
          box-shadow: 0px 3px 6px #431AA42F;
        }

        .ha-content {
          flex: 1.1;
          z-index: 2;
        }

        .ha-flagship-img {
          width: 282px;
          height: auto;
          margin-bottom: 24px;
          display: block;
        }

        .ha-partner-img {
          width: 284px;
          height: 52px;
          margin-bottom: 32px;
          display: block;
          object-fit: contain;
          object-position: left;
        }

        .ha-title {
          font-weight: 700;
          font-size: 42px;
          line-height: 1.25;
          margin-bottom: 32px;
          max-width: 619px;
          color: #FFFFFF;
        }

        .ha-subheadline {
          font-weight: 500;
          font-size: 20px;
          margin-bottom: 32px;
          color: #FFFFFF;
        }

        .ha-desc {
          font-weight: 400;
          font-size: 18px;
          line-height: 1.6;
          color: #FFFFFF;
          opacity: 1;
          margin-bottom: 48px;
          max-width: 580px;
        }

        .ha-btn {
          background: #FFFFFF;
          color: #230569;
          border: none;
          padding: 16px 36px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 18px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .ha-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .ha-visuals {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0px;
          z-index: 2;
        }

        .ha-main-img {
          width: 100%;
          max-width: 665px;
          height: auto;
          object-fit: contain;
        }

        .ha-feature-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ha-feature-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #5B4E9A;
          border-radius: 18px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .ha-feature-icon {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
        }

        .ha-feature-text {
          font-weight: 500;
          font-size: 16px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.64);
          letter-spacing: 0.4px;
        }

        @media (max-width: 1200px) {
          .ha-box { flex-direction: column; padding: 60px 30px; }
          .ha-content { width: 100%; text-align: center; }
          .ha-flagship-img, .ha-partner-img, .ha-btn { margin-left: auto; margin-right: auto; }
          .ha-partner-img { object-position: center; }
          .ha-title, .ha-desc { margin-left: auto; margin-right: auto; }
        }
      `}</style>

      <section className="ha-container">
        <div className="ha-box">
          <div className="ha-content">
            <img src="/landing/flagship-badge.svg" alt="Flagship Programme" className="ha-flagship-img" />
            <img src="/landing/partner-pills.svg" alt="Skillzza x Adobe" className="ha-partner-img" />

            <h2 className="ha-title">
              Adobe Digital Creativity & AI Programme
            </h2>

            <p className="ha-subheadline">Turn Students into Future Creators</p>

            <p className="ha-desc">
              A NEP-aligned programme for Grades 5-10 that builds real-world skills in design, content creation, and AI - through hands-on, project-based learning on Adobe Express.
            </p>

            <button className="ha-btn">
              Explore the Adobe Programme →
            </button>
          </div>

          <div className="ha-visuals">
            <img src="/landing/adobe-hero.png" alt="Adobe Creativity" className="ha-main-img" />

            <div className="ha-feature-list">
              {adobeFeatures.map((f) => (
                <div key={f.id} className="ha-feature-card">
                  <img src="/landing/check-icon.svg" alt="check" className="ha-feature-icon" />
                  <p className="ha-feature-text">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
