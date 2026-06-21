import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Vidya AI',           href: '#' },
  { label: 'Skill Studio',       href: '/skill-studio' },
  { label: 'Virtual Internship', href: '/' },
  { label: 'AI Playground',      href: '/ai-playground' },
  { label: 'Learners',           href: '#' },
];

export default function Navbar() {
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
        .hn-links a {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 14.5px;
          color: #6B7280;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease;
          letter-spacing: 0.1px;
        }
        .hn-links a:hover {
          color: #1A1A2E;
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
        }
      `}</style>

      <nav className="hn-root">
        <div className="hn-inner">

          {/* Logo */}
          <a href="/home" className="hn-logo">
            <span className="hn-logo-skillzza">SKILLZZA</span>
            <span className="hn-logo-k12">K-12</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hn-links">
            {NAV_LINKS.map(l => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* Get Started */}
          <a href="#" className="hn-btn">Get Started</a>

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
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#" className="hn-btn" onClick={() => setOpen(false)}>
            Get Started
          </a>
        </div>
      </nav>
    </>
  );
}
