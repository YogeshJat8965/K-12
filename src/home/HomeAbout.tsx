export default function HomeAbout() {
  return (
    <>
      <style>{`
        .ha-section {
          width: 100%;
          background: #230569;
          box-shadow: 0px 3px 6px #431AA42F;
          padding: clamp(60px, 8vw, 120px) 0;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
          min-height: 919px;
          display: flex;
          align-items: center;
        }

        .ha-inner {
          max-width: 1640px;
          margin: 0 auto;
          padding: 0 80px;
          display: flex;
          align-items: center;
          gap: 60px;
          position: relative;
          z-index: 2;
        }

        .ha-left {
          flex: 1;
          max-width: 769px;
        }

        .ha-badge {
          background: #FFFFFF;
          border-radius: 40px;
          padding: 8px 24px;
          display: inline-block;
          margin-bottom: 32px;
        }

        .ha-badge span {
          color: #230569;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .ha-h2 {
          font-weight: 700;
          font-size: clamp(32px, 3.5vw, 46px);
          line-height: 1.25;
          color: #FCFCFF;
          margin: 0 0 40px;
        }

        .ha-content {
          font-weight: 400;
          font-size: clamp(16px, 1.2vw, 20px);
          line-height: 1.6;
          letter-spacing: 0.5px;
          color: rgba(255, 255, 255, 0.57);
        }

        .ha-content p {
          margin-bottom: 24px;
        }

        .ha-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        .ha-right img {
          width: 100%;
          max-width: 741px;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 1200px) {
          .ha-inner {
            flex-direction: column;
            padding: 0 40px;
            text-align: center;
          }
          .ha-left {
            max-width: 100%;
          }
          .ha-right {
            justify-content: center;
            margin-top: 40px;
          }
        }

        @media (max-width: 600px) {
          .ha-section {
            padding: 60px 0;
            min-height: auto;
          }
          .ha-inner {
            padding: 0 20px;
          }
        }
      `}</style>

      <section className="ha-section">
        <div className="ha-inner">
          <div className="ha-left">
            <div className="ha-badge">
              <span>About Us</span>
            </div>
            
            <h2 className="ha-h2">
              Building the Future of K-12,<br />
              Across Six Regions
            </h2>

            <div className="ha-content">
              <p>
                Skillzza K-12 is a next-generation K-12 learning platform built to prepare students, educators, and schools for an AI-powered world. By combining cognitive science, real-world skill-building, and intelligent learning systems, we equip young minds with the future-ready capabilities they need to lead with confidence.
              </p>
              <p>
                In a world where change is constant, textbooks alone are no longer enough. Students must master future skills - creativity, critical thinking, digital fluency, and ethical AI awareness - to thrive.
              </p>
              <p>
                From personalised tutoring and project-based virtual internships to school transformation programmes, we make future-forward education both accessible and actionable - for every classroom, everywhere.
              </p>
            </div>
          </div>

          <div className="ha-right">
            <img src="/landing/about-image.png" alt="Learning Platform" />
          </div>
        </div>
      </section>
    </>
  );
}
