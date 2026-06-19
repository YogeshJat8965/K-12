import LEFT_IMG from '../assets/landing page/Homepage (1920x 1080px) – 2/ChatGPT Image Jun 20, 2026, 12_44_07 AM.png';

export default function HomeAbout() {
  return (
    <>
      <style>{`
        .ha-section {
          width: 100%;
          background: #ffffff;
          padding: clamp(60px, 8vw, 120px) 0;
          font-family: 'Poppins', sans-serif;
          position: relative;
        }

        .ha-inner {
          max-width: 1760px;
          margin: 0 auto;
          padding: 0 80px;
          display: flex;
          align-items: center;
          gap: 80px;
        }

        .ha-left {
          flex: 0 0 45%;
          max-width: 45%;
          display: flex;
          justify-content: flex-start;
        }

        .ha-left img {
          width: 100%;
          height: auto;
          border-radius: 24px;
          object-fit: cover;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
        }

        .ha-right {
          flex: 0 0 55%;
          max-width: 55%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .ha-label {
          color: #6C3CF7;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }

        .ha-h2 {
          font-weight: 800;
          font-size: 42px;
          line-height: 1.12;
          color: #1A1A2E;
          margin: 0 0 32px;
          letter-spacing: -0.5px;
        }

        .ha-content {
          font-weight: 400;
          font-size: 16px;
          line-height: 1.6;
          color: #374151;
        }

        .ha-content p {
          margin-bottom: 18px;
        }
        
        .ha-content p:last-child {
          margin-bottom: 0;
        }

        .ha-purple {
          color: #6C3CF7;
        }

        @media (max-width: 1100px) {
          .ha-inner {
            flex-direction: column;
            padding: 0 48px;
          }
          .ha-left, .ha-right {
            max-width: 100%;
            width: 100%;
            flex: none;
          }
          .ha-left {
            justify-content: center;
            margin-bottom: 40px;
          }
        }

        @media (max-width: 600px) {
          .ha-section {
            padding: 60px 0;
          }
          .ha-inner {
            padding: 0 20px;
            gap: 40px;
          }
          .ha-left img {
            border-radius: 16px;
          }
        }
      `}</style>

      <section className="ha-section">
        <div className="ha-inner">
          <div className="ha-left">
            <img src={LEFT_IMG} alt="Student learning on tablet" />
          </div>

          <div className="ha-right">
            <span className="ha-label">ABOUT SKILLZZA NOVA</span>

            <h2 className="ha-h2">
              A K-12 Platform Built For An AI-First World
            </h2>

            <div className="ha-content">
              <p>
                Skillzza Nova Is The Next-Generation K-12 Learning Platform Preparing Students, Educators, And Schools For An AI-Powered Economy. We Combine Cognitive Science, Real-World Skill-Building, And Intelligent Learning Systems — Powered By <span className="ha-purple">Vedya AI</span>, Our Proprietary AI Co-Pilot — To Equip Young Minds With The Future-Ready Capabilities They Need To Lead With Confidence.
              </p>
              <p>
                In A World Where Change Is Constant, Textbooks Alone Are No Longer Enough. Students Must Master Future Skills — Creativity, Critical Thinking, Digital Fluency, And Ethical AI Awareness — To Thrive Globally.
              </p>
              <p>
                From AI-Powered Upskilling And Role-Based Virtual Internships To Whole-School Transformation Programmes, We Make Future-Forward Education Accessible, Measurable, And Actionable — For Every Classroom, Everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
