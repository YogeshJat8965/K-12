import React from 'react';

import img1 from '../assets/landing page/1ChatGPT Image Jun 20, 2026, 01_16_52 AM.png';
import img2 from '../assets/landing page/2ChatGPT Image Jun 20, 2026, 01_17_58 AM.png';
import img3 from '../assets/landing page/3ChatGPT Image Jun 20, 2026, 01_18_16 AM.png';
import img4 from '../assets/landing page/4ChatGPT Image Jun 20, 2026, 01_19_23 AM.png';

const pillarsData = [
  {
    img: img1,
    title: 'Vedya AI Co-Pilot',
    subtitle: 'Grades 5-12',
    desc: 'An Adaptive AI Tutor That Personalises Pace, Content, And Feedback For Every Learner Across Academics And AI Skills — Named After The Goddess Durga, Designed For Safety-First Classroom Use.',
    edge: 'Unlike Khanmigo Or Generic Chatbots, Vedya AI Is Purpose-Built For K-12, Multilingual For Indian Classrooms, And Aligned To CBSE, IB, And Cambridge Curricula Out Of The Box'
  },
  {
    img: img2,
    title: 'Skill Studios',
    subtitle: '15+ Future Domains',
    desc: 'Structured Learning Studios Spanning Generative AI, Space, Sustainability, Finance, Cybersecurity, Robotics, Public Speaking And More. Schools Select 3 Studios Per Academic Year.',
    edge: 'Where Code.Org Teaches One Skill (Computing) And WhiteHat Jr Teaches One Stack (Coding), Skill Studios Cover 15+ Future Domains — With Capstone Projects, Not Just Tutorials'
  },
  {
    img: img3,
    title: 'Virtual Internships For K-12',
    subtitle: 'Grades 6-12',
    desc: 'Role-Based Job Simulations In AI Product Management, Data Analytics, Digital Marketing, UX Design, Sustainability Consulting, And More — The First True Career-Readiness Layer For School Students',
    edge: 'Forage Built This For University. We Built It For School. Earlier Exposure, Age-Appropriate Scaffolding, And Certificates That Strengthen College Applications Globally'
  },
  {
    img: img4,
    title: 'AI Playground',
    subtitle: 'Open Innovation Sandbox',
    desc: 'A Safe, Browser-Based Environment Where Students Build, Test, And Ship Real AI Projects — From Chatbots And Image Classifiers To Agents And Prompt-Engineered Apps.',
    edge: 'Most Platforms Stop At Theory. AI Playground Is A Hands-On Lab — Students Leave With Portfolios, Not Just Certificates.'
  }
];

export default function HomeLearningEcosystem() {
  return (
    <>
      <style>{`
        .hle-section {
          width: 100%;
          background: #FFFFFF;
          padding: 100px 0;
          font-family: 'DM Sans', sans-serif;
        }

        .hle-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Header */
        .hle-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 60px;
          gap: 40px;
        }

        .hle-header-left {
          flex: 1;
          max-width: 600px;
        }

        .hle-badge {
          color: #6C3CF7;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
          display: block;
        }

        .hle-title {
          font-weight: 800;
          font-size: 40px;
          color: #111827;
          line-height: 1.2;
          margin: 0;
        }

        .hle-header-right {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .hle-subtitle {
          font-size: 18px;
          color: #6B7280;
          font-weight: 500;
          line-height: 1.5;
          margin: 0;
          max-width: 480px;
        }

        .hle-line-wrap {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .hle-line {
          height: 1px;
          background: #C4B5FD;
          flex: 1;
        }

        .hle-circle {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1.5px solid #6C3CF7;
          background: #fff;
          margin-left: -1px;
        }

        /* Grid */
        .hle-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .hle-card {
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          border-bottom: 6px solid #6C3CF7;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hle-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.06);
        }

        .hle-img-wrap {
          width: 100%;
          height: 190px;
          flex-shrink: 0;
        }

        .hle-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hle-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .hle-card-title {
          font-weight: 700;
          font-size: 20px;
          color: #111827;
          margin: 0 0 4px 0;
        }

        .hle-card-subtitle {
          font-weight: 600;
          font-size: 15px;
          color: #6C3CF7;
          margin: 0 0 8px 0;
        }

        .hle-card-desc {
          font-size: 15px;
          line-height: 1.45;
          color: #111827;
          margin: 0 0 14px 0;
        }

        .hle-card-edge-title {
          font-weight: 700;
          font-size: 15px;
          color: #111827;
          margin: 0 0 4px 0;
        }

        .hle-card-edge {
          font-size: 15px;
          line-height: 1.45;
          color: #111827;
          margin: 0 0 12px 0;
          flex: 1;
        }

        .hle-card-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #E5E7EB;
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: flex-end;
          color: #111827;
          transition: all 0.2s ease;
          background: #fff;
          cursor: pointer;
        }

        .hle-card:hover .hle-card-btn {
          border-color: #6C3CF7;
          color: #6C3CF7;
          background: #F5F3FF;
        }

        @media (max-width: 1200px) {
          .hle-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hle-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .hle-line-wrap {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hle-grid {
            grid-template-columns: 1fr;
          }
          .hle-title {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="hle-section">
        <div className="hle-inner">
          <div className="hle-header">
            <div className="hle-header-left">
              <span className="hle-badge">OUR LEARNING ECOSYSTEM</span>
              <h2 className="hle-title">Four Pillars.<br /> One Future-Ready Learner.</h2>
            </div>
            <div className="hle-header-right">
              <p className="hle-subtitle">
                Designed To Work As One System — From First AI Lesson To First Internship To First Career.
              </p>
              <div className="hle-line-wrap">
                <div className="hle-line"></div>
                <div className="hle-circle"></div>
              </div>
            </div>
          </div>

          <div className="hle-grid">
            {pillarsData.map((item, idx) => (
              <div className="hle-card" key={idx}>
                <div className="hle-img-wrap">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="hle-content">
                  <h3 className="hle-card-title">{item.title}</h3>
                  <p className="hle-card-subtitle">{item.subtitle}</p>
                  <p className="hle-card-desc">{item.desc}</p>
                  
                  <h4 className="hle-card-edge-title">Our Edge</h4>
                  <p className="hle-card-edge">{item.edge}</p>
                  
                  <div className="hle-card-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
