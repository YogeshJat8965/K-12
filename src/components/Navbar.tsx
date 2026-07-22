import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImg from '../assets/skillzza-k12-horizontal copy.png';

/* ─── Nav link data for Level 3 ─── */
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
  { label: 'CCMM', href: '/ccmm' },
  { label: 'Educator Circle', href: '/educator' },
];

const MOBILE_NAV_LINKS = [
  { label: 'Home', href: '/home' },
  { label: 'Skill Studio (National)', href: '/skill-studio' },
  { label: 'Skill Studio (International)', href: '/international-studio' },
  { label: 'Virtual Internship', href: '/virtual-internship' },
  { label: 'Learners Segment (Schools)', href: '/learners' },
  { label: 'AI Playground', href: '/ai-playground' },
  { label: 'CCMM', href: '/ccmm' },
  { label: 'Educator Circle', href: '/educator' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .nav-wrapper {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          font-family: 'Poppins', sans-serif;
        }

        /* ═══ LEVEL 1 - Top contact bar ═══ */
        .nav-level1 {
          background: #F8F6FB;
          color: #6D6B6B;
          font-size: 13px;
          font-weight: 500;
        }
        .nav-level1-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-l1-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-l1-left svg {
          color: #25D366;
        }
        .nav-l1-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .nav-l1-register {
          color: #CE2C2E;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.3px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .nav-l1-register:hover {
          opacity: 0.85;
        }
        .nav-l1-divider {
          width: 1px;
          height: 18px;
          background: #C0C0C0;
        }
        .nav-l1-socials {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .nav-l1-socials a {
          color: #6D6B6B;
          display: flex;
          align-items: center;
          transition: color 0.2s, transform 0.2s;
        }
        .nav-l1-socials a:hover {
          color: #333;
          transform: scale(1.15);
        }

        /* ═══ LEVEL 2 - Category / Auth bar ═══ */
        .nav-level2 {
          background: #CE2C2E;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
        }
        .nav-level2-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-l2-categories {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .nav-l2-categories a {
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: opacity 0.2s;
          letter-spacing: 0.2px;
        }
        .nav-l2-categories a:hover {
          opacity: 0.8;
        }
        .nav-l2-auth {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .nav-l2-login {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: opacity 0.2s;
        }
        .nav-l2-login:hover {
          opacity: 0.8;
        }
        .nav-l2-signup {
          background: transparent;
          color: #fff;
          border: 1.5px solid #fff;
          border-radius: 4px;
          padding: 4px 18px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.3px;
        }
        .nav-l2-signup:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-1px);
        }

        /* ═══ LEVEL 3 - Main nav ═══ */
        .nav-level3 {
          background: #FBFBFB;
          border-bottom: 1px solid #F0F0F0;
        }
        .nav-level3-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        /* Logo */
        .nav-logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .nav-logo-skillzza {
          font-weight: 800;
          font-size: 20px;
          color: #1A1A2E;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .nav-logo-k12 {
          font-weight: 800;
          font-size: 20px;
          color: #7009F2;
          margin-left: 6px;
          letter-spacing: 1px;
          font-style: italic;
        }

        /* Links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-item {
          position: relative;
          display: flex;
          align-items: center;
          height: 64px;
        }
        .nav-links a.nav-main-link {
          font-weight: 400;
          font-size: 14px;
          color: #6B7280;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-links a.nav-main-link:hover {
          color: #1A1A2E;
        }

        /* Dropdown */
        .nav-dropdown {
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
        .nav-item:hover .nav-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        .nav-dropdown a {
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
        .nav-dropdown a:hover {
          background: #F8F8F8;
          color: #6C3CF7;
        }

        /* Get Started btn */
        .nav-cta {
          font-weight: 600;
          font-size: 14px;
          color: #fff;
          background: #7009F2;
          border: none;
          border-radius: 8px;
          padding: 10px 22px;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.2px;
        }
        .nav-cta:hover {
          background: #5C07C5;
          transform: translateY(-1px);
        }

        /* Hamburger */
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #1A1A2E;
          padding: 4px;
          flex-shrink: 0;
        }

        /* Mobile drawer */
        .nav-mobile {
          display: none;
          flex-direction: column;
          padding: 16px 24px 20px;
          border-top: 1px solid #F0F0F0;
          background: #fff;
          gap: 2px;
        }
        .nav-mobile.is-open { display: flex; }
        .nav-mobile a {
          font-weight: 400;
          font-size: 15px;
          color: #6B7280;
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 1px solid #F5F5F5;
          transition: color 0.2s;
        }
        .nav-mobile a:hover { color: #1A1A2E; }
        .nav-mobile .nav-cta {
          margin-top: 14px;
          text-align: center;
          justify-content: center;
          border-radius: 8px;
        }

        /* ─── Responsive ─── */
        @media (max-width: 1024px) {
          .nav-level1-inner,
          .nav-level2-inner,
          .nav-level3-inner { padding: 0 24px; }
          .nav-links { gap: 20px; }
        }
        @media (max-width: 768px) {
          .nav-level1 { display: none; }
          .nav-level2 { display: none; }
          .nav-links, .nav-cta { display: none !important; }
          .nav-hamburger { display: block; }
          .nav-level3-inner { padding: 0 20px; gap: 0; }
          .nav-logo img {
            height: 38px !important;
            max-width: 220px !important;
            object-fit: contain !important;
          }
        }
      `}</style>

      <nav className="nav-wrapper">

        {/* ═══ LEVEL 3 - Main white nav ═══ */}
        <div className="nav-level3">
          <div className="nav-level3-inner">

            {/* Logo */}
            <a href="/" className="nav-logo">
              <img src={logoImg} alt="Skill Studio" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
            </a>

            {/* Desktop nav links */}
            <ul className="nav-links">
              {NAV_LINKS.map(l => (
                <li key={l.label} className="nav-item">
                  <a href={l.href} className="nav-main-link">
                    {l.label}
                    {l.dropdown && <ChevronDown size={14} />}
                  </a>
                  {l.dropdown && (
                    <div className="nav-dropdown">
                      {l.dropdown.map(d => (
                        <a key={d.label} href={d.href}>{d.label}</a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Get Started */}
            <a href="/login" className="nav-cta">Get Started</a>

            {/* Mobile hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile drawer */}
          <div className={`nav-mobile${open ? ' is-open' : ''}`}>
            {MOBILE_NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{ fontWeight: 500 }}>
                {l.label}
              </a>
            ))}
            <a href="/login" className="nav-cta" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
