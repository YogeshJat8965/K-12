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
      { label: 'Mind+Wellness Program for Teens', href: '#' },
      { label: 'Sustainability in Climate Innovator', href: '#' },
      { label: 'the Entrepreneurship Thinker', href: '#' },
      { label: 'Teen Storyteller and Media Journalist', href: '#' },
      { label: "Digital Marketing for Youth Start-up's", href: '#' },
      { label: 'Deepfake Awareness & AI Media Literacy', href: '#' },
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
  { label: 'University', href: '/university' },
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
  { label: 'University', href: '/university' },
  { label: 'CCMM', href: '/ccmm' },
  { label: 'Educator Circle', href: '/educator' },
];

/* ─── Inline SVG Social Icons (exact replicas) ─── */

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
  </svg>
);

const LoginIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

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
              <img src={logoImg} alt="Skillzza K-12" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
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
