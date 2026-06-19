import React from 'react';

export default function HomeCTA() {
  return (
    <>
      <style>{`
        .cta-section {
          width: 100%;
          padding: 120px 0;
          font-family: 'DM Sans', sans-serif;
          background-color: #FAFAFA;
          background-image: 
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: center;
          position: relative;
        }

        .cta-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .cta-left {
          flex: 1;
          max-width: 480px;
        }

        .cta-badge {
          display: inline-block;
          background: #F0F4FF;
          color: #6C3CF7;
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 24px;
        }

        .cta-title {
          font-weight: 800;
          font-size: 42px;
          line-height: 1.2;
          color: #111827;
          margin: 0 0 20px 0;
        }

        .cta-title-highlight {
          color: #6C3CF7;
        }

        .cta-desc {
          font-weight: 400;
          font-size: 16px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0;
        }

        /* Right Side Grid */
        .cta-right {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 24px;
        }

        .cta-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 50px rgba(0,0,0,0.08);
        }

        .cta-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .cta-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
        }

        .cta-card-label {
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .cta-card-title {
          font-weight: 800;
          font-size: 22px;
          line-height: 1.3;
          margin: 0 0 32px 0;
          flex: 1;
        }

        .cta-card-btn {
          width: 100%;
          padding: 14px 0;
          border-radius: 8px;
          font-weight: 700;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .cta-card-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        /* Specific Cards */
        .card-parents {
          grid-row: 1 / 3;
          align-self: center;
        }
        .card-parents .cta-card-icon { background: #F5F3FF; }
        .card-parents .cta-card-label { color: #9CA3AF; }
        .card-parents .cta-card-title { color: #111827; }
        .card-parents .cta-card-btn { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #FFFFFF; }

        .card-schools {
          background: transparent linear-gradient(131deg, #0D1636 0%, #1D1460 100%) 0% 0% no-repeat padding-box;
          grid-column: 2;
          grid-row: 1;
        }
        .card-schools .cta-card-icon { background: #2A2052; }
        .card-schools .cta-card-label { color: #A78BFA; }
        .card-schools .cta-card-title { color: #FFFFFF; }
        .card-schools .cta-card-btn { background: #FFFFFF; color: #111827; }

        .card-educators {
          grid-column: 2;
          grid-row: 2;
        }
        .card-educators .cta-card-icon { background: #FDF4FF; }
        .card-educators .cta-card-label { color: #9CA3AF; }
        .card-educators .cta-card-title { color: #111827; }
        .card-educators .cta-card-btn { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #FFFFFF; }

        @media (max-width: 1024px) {
          .cta-inner {
            flex-direction: column;
            text-align: center;
          }
          .cta-left {
            max-width: 600px;
          }
          .cta-right {
            width: 100%;
            max-width: 800px;
          }
        }

        @media (max-width: 768px) {
          .cta-right {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .card-parents {
            grid-row: auto;
          }
          .card-schools {
            grid-column: 1;
            grid-row: auto;
          }
          .card-educators {
            grid-column: 1;
            grid-row: auto;
          }
          .cta-title {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-left">
            <span className="cta-badge">TAKE THE FIRST STEP</span>
            <h2 className="cta-title">
              Launch Your AI Superpower — <span className="cta-title-highlight">Early</span>
            </h2>
            <p className="cta-desc">
              Master coding, AI, and data skills through real-world projects. Stand out in school, college, and beyond - whichever path you're on.
            </p>
          </div>

          <div className="cta-right">
            {/* Card 1: Parents */}
            <div className="cta-card card-parents">
              <div className="cta-card-header">
                <div className="cta-card-icon"></div>
                <span className="cta-card-label">FOR PARENTS</span>
              </div>
              <h3 className="cta-card-title">Book a Free Career<br/>Discovery Call</h3>
              <button className="cta-card-btn">Book a Call →</button>
            </div>

            {/* Card 2: Schools */}
            <div className="cta-card card-schools">
              <div className="cta-card-header">
                <div className="cta-card-icon"></div>
                <span className="cta-card-label">FOR SCHOOLS</span>
              </div>
              <h3 className="cta-card-title">Become an AI-Ready<br/>Institution</h3>
              <button className="cta-card-btn">Schedule Audit →</button>
            </div>

            {/* Card 3: Educators */}
            <div className="cta-card card-educators">
              <div className="cta-card-header">
                <div className="cta-card-icon"></div>
                <span className="cta-card-label">FOR EDUCATORS</span>
              </div>
              <h3 className="cta-card-title">Level Up Your Teaching<br/>Practice</h3>
              <button className="cta-card-btn">Join Cohort →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
