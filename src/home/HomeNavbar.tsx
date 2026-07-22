import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImg from '../assets/skillzza-k12-horizontal copy.png';

const NAV_LINKS = [
  {
    label: 'Vedya AI',
    href: '#',
    dropdown: [
      { label: 'What is Vedya?', href: '#' },
      { label: 'Vedya for Students', href: '#' },
      { label: 'Vedya for Teachers', href: '#' },
      { label: 'Responsible AI', href: '#' },
    ],
  },
  {
    label: 'Skill Studio',
    href: '/skill-studio',
    dropdown: [
      { label: 'National', href: '/skill-studio' },
      { label: 'International', href: '/international-studio' },
    ],
  },
  {
    label: 'Virtual Internship',
    href: '/virtual-internship',
    dropdown: [
      { label: 'GenAI Innovators Fellowship', href: '#' },
      { label: 'AI & Data Engineering Accelerator', href: '#' },
      { label: 'Teen Finance Mastery Lab', href: '#' },
      { label: 'UX & Product Innovation Studio', href: '#' },
      { label: 'Mindfullness Program for Teens', href: '#' },
      { label: 'Sustainability in Climate Innovator', href: '#' },
      { label: 'the Entrepreneurship Thinker', href: '#' },
      { label: 'Teen Storyteller and Media Journalist', href: '#' },
      // { label: "Digital Marketing for Youth Start-up's", href: '#' },
      // { label: 'Deepfake Awareness & AI Media Literacy', href: '#' },
    ],
  },
  {
    label: 'Learners Segment',
    href: '#',
    dropdown: [
      { label: 'For Students', href: '#' },
      { label: 'For Schools', href: '/learners' },
      { label: 'For tutor', href: '#' },
    ],
  },
  { label: 'AI Playground', href: '/ai-playground' },
  { label: 'CCMM', href: '#' },
  { label: 'Educator Circle', href: '#' },
];

const MOBILE_NAV_LINKS = [
  { label: 'Home', href: '/home' },
  { label: 'Skill Studio (National)', href: '/skill-studio' },
  { label: 'Skill Studio (International)', href: '/international-studio' },
  { label: 'Virtual Internship', href: '/virtual-internship' },
  { label: 'Learners Segment (Schools)', href: '/learners' },
  { label: 'AI Playground', href: '/ai-playground' },
  { label: 'CCMM', href: '#' },
  { label: 'Educator Circle', href: '#' },
];

export default function HomeNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .hn-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          background: #ffffff;
          border-bottom: 1px solid #F0F0F0;
          font-family: 'Poppins', sans-serif;
        }

        .hn-inner {
          max-width: 1760px;
          margin: 0 auto;
          padding: 0 48px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        /* ── Logo ──────────────────────────────────────── */
        .hn-logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          letter-spacing: 0.5px;
        }
        .hn-logo-skillzza {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 20px;
          color: #1A1A2E;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .hn-logo-k12 {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 20px;
          color: #6C3CF7;
          margin-left: 6px;
          letter-spacing: 1px;
        }

        /* ── Nav links ─────────────────────────────────── */
        .hn-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: flex-end;
        }
        .hn-nav-item {
          position: relative;
          display: flex;
          align-items: center;
          height: 70px;
        }
        .hn-links a.hn-main-link {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 14.5px;
          color: #6B7280;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease;
          letter-spacing: 0.1px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .hn-links a.hn-main-link:hover {
          color: #1A1A2E;
        }

        /* ── Dropdown ── */
        .hn-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border-radius: 8px;
          border: 1px solid #F0F0F0;
          padding: 12px 0;
          min-width: 260px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          pointer-events: none;
        }
        .hn-nav-item:hover .hn-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        .hn-dropdown a {
          display: block;
          padding: 10px 20px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: #6B7280;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
          white-space: normal;
          line-height: 1.4;
        }
        .hn-dropdown a:hover {
          background: #F8F8F8;
          color: #6C3CF7;
        }

        /* ── Get Started button ────────────────────────── */
        .hn-btn {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 14.5px;
          color: #ffffff;
          background: #6C3CF7;
          border: none;
          border-radius: 8px;
          padding: 10px 24px;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.1px;
        }
        .hn-btn:hover {
          background: #5A2EE0;
          transform: translateY(-1px);
        }

        /* ── Mobile hamburger ──────────────────────────── */
        .hn-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #1A1A2E;
          padding: 4px;
          flex-shrink: 0;
        }

        /* ── Mobile drawer ─────────────────────────────── */
        .hn-mobile {
          display: none;
          flex-direction: column;
          padding: 16px 24px 20px;
          border-top: 1px solid #F0F0F0;
          background: #fff;
          gap: 2px;
        }
        .hn-mobile.is-open { display: flex; }
        .hn-mobile a {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 15px;
          color: #6B7280;
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 1px solid #F5F5F5;
          transition: color 0.2s;
        }
        .hn-mobile a:hover { color: #1A1A2E; }
        .hn-mobile .hn-btn {
          margin-top: 14px;
          text-align: center;
          justify-content: center;
          border-radius: 8px;
        }

        @media (max-width: 1024px) {
          .hn-inner { padding: 0 32px; gap: 24px; }
          .hn-links { gap: 24px; }
        }
        @media (max-width: 768px) {
          .hn-links, .hn-btn { display: none !important; }
          .hn-hamburger { display: block; }
          .hn-inner { padding: 0 20px; gap: 0; }
          .hn-logo img {
            height: 38px !important;
            max-width: 220px !important;
            object-fit: contain !important;
          }
        }
      `}</style>

      <nav className="hn-root">
        <div className="hn-inner">

          {/* Logo */}
          <a
            href="/home"
            onClick={(e) => {
              if (window.location.pathname === '/home') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="hn-logo"
          >
            <img src={logoImg} alt="Skill Studio" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
          </a>

          {/* Desktop nav links */}
          <ul className="hn-links">
            {NAV_LINKS.map(l => (
              <li key={l.label} className="hn-nav-item">
                <a href={l.href} className="hn-main-link">
                  {l.label}
                  {l.dropdown && <ChevronDown size={14} />}
                </a>
                {l.dropdown && (
                  <div className="hn-dropdown">
                    {l.dropdown.map(d => (
                      <a key={d.label} href={d.href}>{d.label}</a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Get Started */}
          <a href="/login" className="hn-btn">Get Started</a>

          {/* Mobile hamburger */}
          <button
            className="hn-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`hn-mobile${open ? ' is-open' : ''}`}>
          {MOBILE_NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{ fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
          <a href="/login" className="hn-btn" onClick={() => setOpen(false)}>
            Get Started
          </a>
        </div>
      </nav>
    </>
  );
}
