import React from 'react';
import bgImage from '../assets/Image 19.png';
import studentImg from '../assets/Image 18.png';
import icon1 from '../assets/mental_18558397.svg';
import icon2 from '../assets/workshop_11933372.svg';
import icon3 from '../assets/g2157.svg';
import icon4 from '../assets/rocket_3064028.svg';
import icon5 from '../assets/11-Leadership.svg';

const stepsData = [
  {
    step: 'Step 01',
    color: '#4361EE', // Blue
    icon: icon1,
    title: 'Awareness',
    desc: 'Exploring AI ideas and early conversations - no formal programmes yet.'
  },
  {
    step: 'Step 02',
    color: '#8B5CF6', // Purple
    icon: icon2,
    title: 'Adoption',
    desc: 'Pilot Workshops Underway With Limited Teacher Exposure And Early Student Engagement.'
  },
  {
    step: 'Step 03',
    color: '#10B981', // Green
    icon: icon3,
    title: 'Integration',
    desc: 'Ai Curriculum Embedded In Select Grades; Occasional Student Projects And Showcase Events.'
  },
  {
    step: 'Step 04',
    color: '#F59E0B', // Yellow/Orange
    icon: icon4,
    title: 'Innovation',
    desc: 'Regular AI labs, hackathons, and interdisciplinary initiatives across the school.'
  },
  {
    step: 'Step 05',
    color: '#EC4899', // Pink
    icon: icon5,
    title: 'Leadership',
    desc: 'School-wide AI strategy with labs, fellowships, student leaders, and a recognised institutional model.'
  }
];

export default function HomeReady() {
  return (
    <>
      <style>{`
        .hr-section {
          width: 100%;
          padding: 100px 0 0 0;
          font-family: 'DM Sans', sans-serif;
          background-image: url('${bgImage}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
        }

        .hr-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Header */
        .hr-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .hr-title {
          font-weight: 800;
          font-size: 44px;
          color: #111827;
          margin: 0 0 20px;
        }

        .hr-title-highlight {
          color: #6C3CF7;
        }

        .hr-subtitle {
          font-weight: 400;
          font-size: 16px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0 auto;
          max-width: 700px;
        }

        /* Layout */
        .hr-content-grid {
          display: flex;
          align-items: flex-end;
          gap: 60px;
        }

        .hr-left {
          flex: 0 0 45%;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .hr-left img {
          width: 100%;
          max-width: 450px;
          display: block;
          object-fit: contain;
          /* The image in the design aligns to the bottom */
          position: relative;
          bottom: -10px; 
        }

        .hr-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-bottom: 80px;
        }

        /* Step Cards */
        .hr-step {
          display: flex;
          align-items: center;
          background: #F8FAFC;
          border-left: 8px solid;
          border-radius: 0 8px 8px 0;
          padding: 24px 24px 24px 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .hr-step:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.05);
        }

        .hr-step-label-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-right: 20px;
          min-width: 40px;
        }

        .hr-step-label {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: #9CA3AF;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: capitalize;
        }

        .hr-step-icon {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 24px;
        }

        .hr-step-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .hr-step-text {
          flex: 1;
        }

        .hr-step-title {
          font-weight: 700;
          font-size: 20px;
          color: #111827;
          margin: 0 0 6px;
        }

        .hr-step-desc {
          font-weight: 400;
          font-size: 14px;
          line-height: 1.5;
          color: #6B7280;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .hr-content-grid {
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }
          .hr-right {
            padding-bottom: 60px;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .hr-title {
            font-size: 32px;
          }
          .hr-step {
            padding: 16px;
          }
          .hr-step-icon {
            width: 48px;
            height: 48px;
            margin-right: 16px;
          }
        }

        /* Assessment Box */
        .hr-assessment-box {
          background-color: #1A0A47;
          border-radius: 12px;
          padding: 32px 40px;
          position: relative;
          z-index: 10;
          margin-top: -30px; /* Overlaps bottom of grid/image */
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .hr-assess-labels {
          display: flex;
          justify-content: space-between;
          color: #A78BFA;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .hr-progress-track {
          width: 100%;
          height: 14px;
          background: #E5E7EB;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .hr-progress-fill {
          height: 100%;
          width: 60%;
          background: #8B5CF6;
          border-radius: 8px;
        }

        .hr-assess-text {
          color: #A78BFA;
          font-size: 13px;
          text-align: center;
          margin: 0;
        }

        /* CTA Area */
        .hr-cta-area {
          text-align: center;
          margin-top: 40px;
          padding-bottom: 60px;
        }

        .hr-cta-btn {
          background: #8B5CF6;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          padding: 16px 32px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .hr-cta-btn:hover {
          background: #7C3AED;
          transform: translateY(-2px);
        }

        .hr-cta-helper {
          color: #9CA3AF;
          font-size: 14px;
          margin: 16px 0 0;
        }

        @media (max-width: 768px) {
          .hr-assessment-box {
            padding: 24px;
            margin-top: 20px;
          }
          .hr-cta-area {
            margin-top: 30px;
            padding-bottom: 40px;
          }
        }
      `}</style>

      <section className="hr-section">
        <div className="hr-inner">
          <div className="hr-header">
            <h2 className="hr-title">
              Is Your School <span className="hr-title-highlight">AI-Ready?</span>
            </h2>
            <p className="hr-subtitle">
              Check your school's readiness across the CCMM Framework -<br />
              Curriculum, Culture, Mindset & Methodology. Evaluate where you stand<br />
              and receive a tailored growth path to move up the ladder.
            </p>
          </div>

          <div className="hr-content-grid">
            <div className="hr-left">
              <img src={studentImg} alt="Student" />
            </div>
            <div className="hr-right">
              {stepsData.map((item, idx) => (
                <div 
                  className="hr-step" 
                  key={idx}
                  style={{ borderLeftColor: item.color }}
                >
                  <div className="hr-step-label-wrap">
                    <span className="hr-step-label">{item.step}</span>
                  </div>
                  <div className="hr-step-icon">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="hr-step-text">
                    <h4 className="hr-step-title">{item.title}</h4>
                    <p className="hr-step-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hr-assessment-box">
            <div className="hr-assess-labels">
              <span>Awareness</span>
              <span>Leadership</span>
            </div>
            <div className="hr-progress-track">
              <div className="hr-progress-fill"></div>
            </div>
            <p className="hr-assess-text">
              Most schools assess at Integration level — take the test to find out where yours stands
            </p>
          </div>

          <div className="hr-cta-area">
            <button className="hr-cta-btn">Take the CCMM Self-Assessment →</button>
            <p className="hr-cta-helper">Take the free 5-minute CCMM self-assessment and receive a personalised growth roadmap.</p>
          </div>
        </div>
      </section>
    </>
  );
}
