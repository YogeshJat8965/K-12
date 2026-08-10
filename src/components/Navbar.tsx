import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
const logoImg = '/landing/WhatsApp_Image_2026-07-28_at_8.46.35_AM-removebg-preview.png';

/* ─── Nav link data for Level 3 ─── */
const NAV_LINKS = [
  { label: "Adobe Program", href: '/digital-creativity' },
  {
    label: 'Skill Studio',
    href: '/skill-studio',
    dropdown: [
      { label: 'For Schools', href: '/skill-studio' },
      { label: 'For Students', href: '/international-studio' },
    ],
  },
  {
    label: 'Virtual Internship',
    href: '/virtual-internship',
    dropdown: [
      { label: 'GenAI Innovation', href: '#' },
      { label: 'AI & Data Engineering Professional', href: '#' },
      { label: 'Financial Literacy & Investment', href: '#' },
      { label: 'UX Design & Product Innovation', href: '#' },
      { label: 'Mental Wellness & Mindfulness', href: '#' },
      { label: 'Climate Action & Sustainability', href: '#' },
      { label: 'Entrepreneurship & Startup Innovation', href: '#' },
      { label: 'Digital Storytelling & Media Journalism', href: '#' },
    ],
  },
  { label: 'AI Playground', href: '/ai-playground' },
  {
    label: 'More',
    href: '#',
    columns: [
      {
        title: 'Vedya AI',
        links: [
          { label: 'What is Vedya?', href: '#' },
          { label: 'Vedya for Students', href: '#' },
          { label: 'Vedya for Teachers', href: '#' },
          { label: 'Responsible AI', href: '#' },
        ]
      },
      {
        title: 'Learners Segment',
        links: [
          { label: 'For Students', href: '/for-students' },
          { label: 'For Schools', href: '/for-schools' },
          { label: 'For Educator', href: '/for-educator' },
        ]
      },
      {
        title: 'Other Programs',
        links: [
          { label: 'CCMM', href: '/ccmm' },
          { label: 'The Educator Circle', href: '/educator-circle' },
        ]
      }
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setExpandedMenu(prev => (prev === label ? null : label));
  };

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

        /* ═══ Announcement Strip ═══ */
        .nav-announcement {
          width: 100%;
          background: #6C3CF7;
          color: #fff;
          height: 48px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .nav-announcement-inner {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px 0 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-marquee-wrapper {
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          display: flex;
          align-items: center;
          position: relative;
        }
        .nav-marquee-content {
          display: inline-flex;
          align-items: center;
          animation: marquee 20s linear infinite;
        }
        .nav-marquee-content:hover {
          animation-play-state: paused;
        }
        .nav-announcement-text {
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: 0.3px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding-right: 50px;
        }
        .nav-announcement-text span {
          background: #6C3CF7;
          color: white;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .nav-announcement-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-left: 20px;
          background: #6C3CF7;
          height: 48px;
          z-index: 10;
          box-shadow: -15px 0 15px #6C3CF7;
        }
        .nav-btn-hackathon {
          background: #fff;
          color: #FF007A;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          padding: 8px 20px;
          border-radius: 40px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          animation: pulse-btn 2s infinite;
          white-space: nowrap;
        }
        .nav-btn-hackathon:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
          background: #FFE600;
          color: #111;
        }
        @keyframes pulse-btn {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          70% { box-shadow: 0 0 0 12px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
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
        .nav-dropdown::before {
          content: '';
          position: absolute;
          top: -15px;
          left: 0;
          right: 0;
          height: 15px;
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
          background: #F8F6FB;
          color: #6C3CF7;
        }

        /* Mega Menu */
        .nav-mega-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: #ffffff;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          border-radius: 12px;
          border: 1px solid #F0F0F0;
          padding: 24px 32px;
          display: flex;
          gap: 40px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          pointer-events: none;
          transform: translateY(10px);
        }
        .nav-mega-menu::before {
          content: '';
          position: absolute;
          top: -15px;
          left: 0;
          right: 0;
          height: 15px;
        }
        .nav-item:hover .nav-mega-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }
        .nav-mega-column {
          display: flex;
          flex-direction: column;
          min-width: 160px;
        }
        .nav-mega-title {
          font-weight: 700;
          font-size: 13px;
          color: #1A1A2E;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
          border-bottom: 2px solid #F5F3FF;
          padding-bottom: 8px;
        }
        .nav-mega-column a {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: #6B7280;
          text-decoration: none;
          padding: 8px 0;
          transition: color 0.15s, transform 0.15s;
          display: block;
        }
        .nav-mega-column a:hover {
          color: #6C3CF7;
          transform: translateX(4px);
        }

        /* ─── Level 3 buttons ─── */
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
          position: fixed;
          top: 0;
          right: -100%;
          width: 85%;
          max-width: 400px;
          height: 100vh;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 2000;
          display: flex;
          flex-direction: column;
          padding: 80px 24px 30px;
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
        }
        .nav-mobile.is-open {
          right: 0;
        }
        .nav-mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 1999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .nav-mobile-overlay.is-open {
          opacity: 1;
          pointer-events: auto;
        }
        .nav-mobile-close {
          position: absolute;
          top: 20px;
          right: 24px;
          background: rgba(0,0,0,0.05);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #1A1A2E;
        }
        .mobile-nav-item {
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .mobile-nav-item:last-child {
          border-bottom: none;
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          font-size: 16px;
          font-weight: 600;
          color: #1A1A2E;
          text-decoration: none;
          width: 100%;
          background: transparent;
          border: none;
          text-align: left;
        }
        .mobile-nav-link svg {
          transition: transform 0.3s ease;
        }
        .mobile-nav-link.is-expanded svg {
          transform: rotate(180deg);
        }
        .mobile-sub-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .mobile-sub-menu.is-expanded {
          max-height: 800px;
        }
        .mobile-sub-link {
          display: block;
          padding: 12px 16px 12px 24px;
          font-size: 14px;
          color: #1A1A2E;
          font-weight: 500;
          text-decoration: none;
          position: relative;
        }
        .mobile-sub-link::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          background: #D1D5DB;
          border-radius: 50%;
        }
        .mobile-mega-title {
          font-size: 12px;
          text-transform: uppercase;
          color: #9CA3AF;
          font-weight: 700;
          padding: 16px 16px 8px 24px;
          letter-spacing: 0.5px;
        }
        .mobile-cta-wrapper {
          margin-top: auto;
          padding-top: 30px;
        }
        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          background: linear-gradient(90deg, #6C3CF7, #A78BFA);
          color: white;
          font-weight: 700;
          text-decoration: none;
          font-size: 16px;
          box-shadow: 0 4px 15px rgba(108,60,247,0.3);
        }

        /* ─── Responsive ─── */
        @media (max-width: 1024px) {
          .nav-level1-inner,
          .nav-level2-inner,
          .nav-level3-inner { padding: 0 24px; }
          .nav-links { gap: 20px; }
        }
        @media (max-width: 768px) {
          .nav-announcement-inner {
            padding: 0 12px 0 0;
          }
          .nav-announcement-text { 
            font-size: 12px; 
          }
          .nav-announcement-actions {
            padding-left: 8px;
            gap: 4px;
          }
          .nav-announcement-actions a {
            padding: 4px 8px;
            font-size: 9px;
            letter-spacing: 0px;
          }
          
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

        {/* ═══ LEVEL 1 - Announcement Bar ═══ */}
        <div className="nav-announcement">
          <div className="nav-announcement-inner">
            <div className="nav-marquee-wrapper" onClick={() => window.location.href = 'https://hackathon.skillzzak12.com'} style={{ cursor: 'pointer' }}>
              <div className="nav-marquee-content">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="nav-announcement-text" style={{ paddingRight: '60px', display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                    <span style={{ fontSize: '15px', fontWeight: 600 }}>Be Part of Creative Hackathon 2026!</span>
                    <span style={{ fontSize: '13px', fontWeight: 500, opacity: 0.85 }}>Starts from 1st - 28th Aug, 2026</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="nav-announcement-actions">
              <a href="https://hackathon.skillzzak12.com/register" className="nav-btn-hackathon">Register Your School Today!</a>
            </div>
          </div>
        </div>

        {/* ═══ LEVEL 3 - Main white nav ═══ */}
        <div className="nav-level3">
          <div className="nav-level3-inner">

            {/* Logo */}
            <a href="/" className="nav-logo">
              <img src={logoImg} alt="Skill Studio" style={{ height: '85px', width: 'auto', objectFit: 'contain' }} />
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
                      {l.dropdown.map((d: any) => (
                        <a key={d.label} href={d.href}>{d.label}</a>
                      ))}
                    </div>
                  )}
                  {l.columns && (
                    <div className="nav-mega-menu">
                      {l.columns.map((col: any) => (
                        <div key={col.title} className="nav-mega-column">
                          <div className="nav-mega-title">{col.title}</div>
                          {col.links.map((link: any) => (
                            <a key={link.label} href={link.href}>{link.label}</a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Get Started */}
            <a href="/signup" className="nav-cta">Get Started</a>

            {/* Mobile hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Overlay */}
          <div
            className={`nav-mobile-overlay${open ? ' is-open' : ''}`}
            onClick={() => setOpen(false)}
          />

          {/* Modern Mobile drawer */}
          <div className={`nav-mobile${open ? ' is-open' : ''}`}>
            <button className="nav-mobile-close" onClick={() => setOpen(false)}>
              <X size={20} />
            </button>

            <div className="flex flex-col flex-1">
              {NAV_LINKS.map(l => {
                // 1. Virtual Internship -> Normal link, no dropdown
                if (l.label === 'Virtual Internship') {
                  return (
                    <div key={l.label} className="mobile-nav-item">
                      <a href={l.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
                        {l.label}
                      </a>
                    </div>
                  );
                }

                // 2. Skill Studio -> Always open, no accordion toggle
                if (l.label === 'Skill Studio') {
                  return (
                    <div key={l.label} className="mobile-nav-item">
                      <div className="mobile-nav-link" style={{ color: '#1A1A2E', paddingBottom: '4px' }}>
                        {l.label}
                      </div>
                      <div className="mobile-sub-menu" style={{ maxHeight: 'none' }}>
                        {l.dropdown && l.dropdown.map((d: any) => (
                          <a key={d.label} href={d.href} className="mobile-sub-link" onClick={() => setOpen(false)}>
                            {d.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                }

                // 3. More -> Always open, only specific pages
                if (l.label === 'More') {
                  return (
                    <div key={l.label} className="mobile-nav-item">
                      <div className="mobile-nav-link" style={{ color: '#1A1A2E', paddingBottom: '4px' }}>
                        {l.label}
                      </div>
                      <div className="mobile-sub-menu" style={{ maxHeight: 'none' }}>
                        <a href="/learners" className="mobile-sub-link" onClick={() => setOpen(false)}>For Schools</a>
                        <a href="/ccmm" className="mobile-sub-link" onClick={() => setOpen(false)}>CCMM</a>
                        <a href="/educator" className="mobile-sub-link" onClick={() => setOpen(false)}>The Educator Circle</a>
                      </div>
                    </div>
                  );
                }

                // 4. Default behavior (e.g. AI Playground)
                return (
                  <div key={l.label} className="mobile-nav-item">
                    {l.dropdown || l.columns ? (
                      <>
                        <button
                          className={`mobile-nav-link ${expandedMenu === l.label ? 'is-expanded' : ''}`}
                          onClick={() => toggleSubmenu(l.label)}
                        >
                          {l.label}
                          <ChevronDown size={18} color="#9CA3AF" />
                        </button>
                        <div className={`mobile-sub-menu ${expandedMenu === l.label ? 'is-expanded' : ''}`}>
                          {l.dropdown && l.dropdown.map((d: any) => (
                            <a key={d.label} href={d.href} className="mobile-sub-link" onClick={() => setOpen(false)}>
                              {d.label}
                            </a>
                          ))}
                          {l.columns && l.columns.map((col: any) => (
                            <div key={col.title}>
                              <div className="mobile-mega-title">{col.title}</div>
                              {col.links.map((link: any) => (
                                <a key={link.label} href={link.href} className="mobile-sub-link" onClick={() => setOpen(false)}>
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <a href={l.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
                        {l.label}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mobile-cta-wrapper">
              <a href="/signup" className="mobile-cta" onClick={() => setOpen(false)}>
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
