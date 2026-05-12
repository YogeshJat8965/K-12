const BG_HERO   = '/landing/bg-hero.png';
const RIGHT_IMG  = '/landing/right-image.png';
const ICON_1     = '/landing/icon-1.svg';
const ICON_2     = '/landing/icon-2.svg';
const ICON_3     = '/landing/icon-3.svg';
const ICON_4     = '/landing/icon-4.svg';

const features = [
  { icon: ICON_1, bg: '#EEF2FF', shadow: 'rgba(108,60,247,0.2)',   title: 'Learn AI',         desc: 'Foundational to advanced AI skills for every learner.' },
  { icon: ICON_2, bg: '#ECFDF5', shadow: 'rgba(16,185,129,0.2)',   title: 'Build Projects',   desc: 'Turn ideas into real World projects and build your portfolio.' },
  { icon: ICON_3, bg: '#F5F3FF', shadow: 'rgba(139,92,246,0.2)',   title: 'Intern Early',     desc: 'Gain real Experience through virtual internships.' },
  { icon: ICON_4, bg: '#FFF7ED', shadow: 'rgba(245,158,11,0.2)',   title: 'Lead the Future',  desc: 'Develop the mindset and skills to lead in an AI-powered world.' },
];

export default function HomeHero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        /* ─── hero outer ─── */
        .hh-section {
          width: 100%;
          background: url(${BG_HERO}) 0 100% / cover no-repeat, #F0EFFF;
          padding-top: 70px; /* navbar height */
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* ─── two-column content area ─── */
        .hh-content {
          max-width: 1760px;
          margin: 0 auto;
          padding: 56px 80px 0;
          display: flex;
          align-items: center;
          gap: 0;
          min-height: 680px;
        }

        /* ─── LEFT ─── */
        .hh-left {
          flex: 0 0 50%;
          max-width: 50%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-right: 40px;
          z-index: 10;
        }

        /* Badge pill */
        .hh-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #6C3CF7;
          border-radius: 40px;
          padding: 8px 20px;
          margin-bottom: 28px;
        }
        .hh-badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #fff;
          flex-shrink: 0;
        }
        .hh-badge-text {
          font-weight: 700;
          font-size: clamp(10px, 0.75vw, 14px);
          letter-spacing: 1.5px;
          color: #fff;
          white-space: nowrap;
        }

        /* Heading */
        .hh-h1 {
          font-weight: 800;
          font-size: clamp(32px, 4.2vw, 74px);
          line-height: 1.12;
          color: #1A1A2E;
          margin: 0 0 24px;
          letter-spacing: -0.5px;
        }
        .hh-h1 .purple { color: #6C3CF7; }

        /* Subtext */
        .hh-sub {
          font-weight: 400;
          font-size: clamp(14px, 1.2vw, 20px);
          line-height: 1.65;
          letter-spacing: 0.3px;
          color: #84888B;
          margin: 0 0 36px;
          max-width: 560px;
        }

        /* Buttons row */
        .hh-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 28px;
        }

        .hh-btn {
          border: none; cursor: pointer;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: clamp(13px, 1vw, 17px);
          border-radius: 10px;
          padding: clamp(12px, 1vw, 18px) clamp(20px, 2vw, 36px);
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
        }
        .hh-btn:hover { transform: translateY(-3px); }

        .hh-btn-primary {
          background: #6C3CF7; color: #fff;
          box-shadow: 0 6px 20px rgba(108,60,247,0.35);
        }
        .hh-btn-primary:hover {
          background: #5728e0;
          box-shadow: 0 10px 32px rgba(108,60,247,0.5);
        }

        .hh-btn-dark {
          background: #1F2937; color: #fff;
          box-shadow: 0 4px 14px rgba(0,0,0,0.2);
        }
        .hh-btn-dark:hover {
          background: #111827;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }

        .hh-btn-outline {
          background: #fff; color: #6B7280;
          border: 1.5px solid #E5E7EB;
        }
        .hh-btn-outline:hover {
          border-color: #6C3CF7;
          color: #6C3CF7;
          box-shadow: 0 4px 16px rgba(108,60,247,0.15);
        }

        /* Trust text */
        .hh-trust {
          font-size: clamp(11px, 0.85vw, 14px);
          color: #9CA3AF;
        }
        .hh-trust strong { color: #1F2937; font-weight: 600; }

        /* ─── RIGHT IMAGE ─── */
        .hh-right {
          flex: 0 0 50%;
          max-width: 50%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          position: relative;
          align-self: flex-end;
        }
        .hh-right img {
          width: 100%;
          max-width: 820px;
          height: auto;
          display: block;
          mix-blend-mode: multiply;
          object-fit: contain;
        }

        /* ─── BOTTOM FEATURE CARD ─── */
        .hh-feature-bar {
          background: #fff;
          border-radius: 32px;
          box-shadow: 0 8px 60px rgba(0,0,0,0.07);
          border: 1px solid #F0F0F5;
          display: flex;
          align-items: stretch;
          margin: 0 80px 0;
          position: relative;
          z-index: 20;
          overflow: hidden;
        }

        .hh-feat-item {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 32px 36px;
        }

        .hh-feat-icon {
          width: 72px; height: 72px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          cursor: default;
        }
        .hh-feat-icon:hover {
          transform: scale(1.12);
        }
        .hh-feat-icon img { width: 36px; height: 36px; }

        .hh-feat-divider {
          width: 1px;
          background: #F0F0F5;
          align-self: stretch;
          margin: 20px 0;
        }

        .hh-feat-title {
          font-weight: 700;
          font-size: clamp(15px, 1.3vw, 20px);
          color: #1F2937;
          margin: 0 0 6px;
        }
        .hh-feat-desc {
          font-weight: 400;
          font-size: clamp(12px, 0.9vw, 14px);
          color: #6B7280;
          line-height: 1.5;
          margin: 0;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1100px) {
          .hh-content { padding: 48px 48px 0; min-height: 560px; }
          .hh-feature-bar { margin: 0 48px 0; }
        }

        @media (max-width: 860px) {
          .hh-content {
            flex-direction: column;
            padding: 40px 32px 0;
            gap: 32px;
            min-height: auto;
          }
          .hh-left, .hh-right {
            flex: none; max-width: 100%; width: 100%;
            padding-right: 0;
          }
          .hh-right { justify-content: center; }
          .hh-right img { max-width: 90%; }
          .hh-feature-bar {
            margin: 0 32px 0;
            flex-direction: column;
          }
          .hh-feat-divider { width: auto; height: 1px; margin: 0 20px; align-self: stretch; }
          .hh-feat-item { padding: 20px 24px; }
        }

        @media (max-width: 600px) {
          .hh-content { padding: 32px 20px 0; }
          .hh-feature-bar { margin: 0 20px 0; border-radius: 20px; }
          .hh-btns { gap: 10px; }
        }
      `}</style>

      <section className="hh-section">

        {/* ── Two-column content ── */}
        <div className="hh-content">

          {/* LEFT */}
          <div className="hh-left">

            {/* Badge */}
            <div className="hh-badge">
              <span className="hh-badge-dot" />
              <span className="hh-badge-text">SKILLZZA K-12 | FUTURE LEARNING</span>
            </div>

            {/* Heading — exactly 2 lines */}
            <h1 className="hh-h1">
              From Classrooms to<br />
              Code <span className="purple">-Built for AI</span>
            </h1>

            {/* Subtext */}
            <p className="hh-sub">
              Empowering the next generation of AI thinkers - students, educators, and schools - to lead confidently in a technology-driven world.
            </p>

            {/* Buttons */}
            <div className="hh-btns">
              <button className="hh-btn hh-btn-primary">Start Learning</button>
              <button className="hh-btn hh-btn-dark">Partner with Us</button>
              <button className="hh-btn hh-btn-outline">Schedule a Demo</button>
            </div>

            {/* Trust */}
            <p className="hh-trust">
              Trusted by <strong>150,000+ students</strong> across <strong>6 regions</strong> worldwide
            </p>
          </div>

          {/* RIGHT */}
          <div className="hh-right">
            <img src={RIGHT_IMG} alt="Students learning AI" />
          </div>
        </div>

        {/* ── Bottom Feature Bar ── */}
        <div className="hh-feature-bar">
          {features.map((f, i) => (
            <>
              <div className="hh-feat-item" key={f.title}>
                <div
                  className="hh-feat-icon"
                  style={{ background: f.bg }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 24px ${f.shadow}`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
                >
                  <img src={f.icon} alt={f.title} />
                </div>
                <div>
                  <p className="hh-feat-title">{f.title}</p>
                  <p className="hh-feat-desc">{f.desc}</p>
                </div>
              </div>
              {i < features.length - 1 && <div className="hh-feat-divider" key={`div-${i}`} />}
            </>
          ))}
        </div>

      </section>
    </>
  );
}
