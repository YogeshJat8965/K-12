import React from 'react';

import img1 from '../assets/landing page/1ChatGPT Image Jun 20, 2026, 01_16_52 AM.webp';
import img2 from '../assets/landing page/2ChatGPT Image Jun 20, 2026, 01_17_58 AM.webp';
import img3 from '../assets/landing page/3ChatGPT Image Jun 20, 2026, 01_18_16 AM.webp';
import img4 from '../assets/landing page/4ChatGPT Image Jun 20, 2026, 01_19_23 AM.webp';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillarsData = [
  {
    img: img1,
    title: 'Vedya AI Co-Pilot',
    subtitle: 'Grades 5-12',
    desc: 'An adaptive AI tutor that personalises pace, content, and feedback for every learner across academics and AI skills.',
    edge: 'Vedya AI is purpose-built for K-12, multilingual for Indian classrooms, and aligned to CBSE, IB, and Cambridge curricula out of the box.',
    link: '#'
  },
  {
    img: img4,
    title: 'AI Playground',
    subtitle: 'Open Innovation Sandbox',
    desc: <>A safe, browser-based environment where students build, test, and ship real AI projects.<br /><br />From chatbots and image classifiers to agents and prompt-engineered apps.</>,
    edge: 'Most platforms stop at theory. AI Playground is a hands-on lab - students leave with portfolios, not just certificates.',
    link: '/ai-playground'
  },
  {
    img: img2,
    title: 'Skill Studios',
    subtitle: '15+ Future Domains',
    desc: <>Structured learning studios spanning Generative AI, Space, Sustainability, Finance, Cybersecurity, Robotics, Public Speaking and more.<br /><br />Schools select 3 studios per academic year.</>,
    edge: 'Where Code.Org teaches one skill (computing) and WhiteHat Jr teaches one stack (coding), Skill Studios cover 15+ future domains - with capstone projects, not just tutorials.',
    link: '/skill-studio'
  },
  {
    img: img3,
    title: 'Virtual Internships',
    subtitle: 'Grades 9-12',
    desc: <>Role-based job simulations in AI Product Management, Data Analytics, Digital Marketing, UX Design, Sustainability Consulting, and more.<br /><br />The first true career-readiness layer for school students.</>,
    edge: 'Forage built this for university. We built it for school. Earlier exposure, age-appropriate scaffolding, and certificates that strengthen college applications globally',
    link: '/virtual-internship'
  }
];

export default function HomeLearningEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const title3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {
      // Heading Split
      if (title1Ref.current && title2Ref.current) {
        gsap.fromTo(title1Ref.current,
          { y: -50, opacity: 0, filter: 'blur(10px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
        );
        gsap.fromTo(title2Ref.current,
          { y: 50, opacity: 0, filter: 'blur(10px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out', delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
        );
        gsap.fromTo(title3Ref.current,
          { y: 50, opacity: 0, filter: 'blur(10px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
        );
      }

      // Cards stagger + tilt
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.hle-card');
        gsap.from(cards, {
          y: 80,
          opacity: 0,
          rotationX: -10,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%'
          }
        });

        // Parallax images
        const imgs = gridRef.current.querySelectorAll('.hle-img-wrap img');
        imgs.forEach((img) => {
          gsap.to(img, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .hle-section {
          width: 100%;
          background: #ffffff;
          padding: 10px 0 80px 0;
          font-family: 'Poppins', sans-serif;
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
          margin-bottom: 5px;
          gap: 40px;
        }

        .hle-header-left {
          flex: 1;
          max-width: 600px;
        }

        .hle-badge {
          color: #6C3CF7;
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 16px;
          display: block;
        }

        .hle-title {
          font-weight: 800;
          font-size: 40px;
          color: #111827;
          line-height: 1.25;
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
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
          position: relative;
          transform-style: preserve-3d;
        }

        .hle-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 4px;
          background: #6C3CF7;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.4s ease;
          box-shadow: 0 -2px 10px rgba(108,60,247,0.5);
          z-index: 10;
        }

        .hle-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(108, 60, 247, 0.12), 0 0 0 1px rgba(108, 60, 247, 0.15);
          border-color: transparent;
        }

        .hle-card:hover::after {
          transform: scaleX(1);
        }

        .hle-img-wrap {
          width: 100%;
          height: 190px;
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
        }

        .hle-img-wrap::after {
          content: "";
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-20deg);
          z-index: 2;
        }

        .hle-card:hover .hle-img-wrap::after {
          animation: cardShine 0.7s forwards;
        }

        @keyframes cardShine {
          100% { left: 200%; }
        }

        .hle-img-wrap img {
          width: 100%;
          height: 120%; /* Extra height for parallax */
          object-fit: cover;
          display: block;
          transform: translateY(-10%);
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
          margin-top: auto;
          color: #111827;
          transition: all 0.3s ease;
          background: #fff;
          cursor: pointer;
        }

        .hle-card-btn svg {
          transition: transform 0.4s ease;
        }

        .hle-card:hover .hle-card-btn {
          border-color: #6C3CF7;
          color: #fff;
          background: #6C3CF7;
        }

        .hle-card:hover .hle-card-btn svg {
          transform: rotate(45deg);
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
            font-size: 28px;
          }
          .hle-inner {
            padding: 0 20px;
          }
        }
      `}</style>

      <section className="hle-section" ref={sectionRef} style={{ perspective: '1200px' }}>
        <div className="hle-inner">
          <div className="hle-header" style={{ marginBottom: 0 }}>
            <div className="hle-header-left" style={{ maxWidth: '100%' }}>
              <span className="hle-badge" style={{ marginBottom: '8px' }}>OUR LEARNING ECOSYSTEM</span>
              <h2 className="hle-title" style={{ display: 'flex', flexDirection: 'column' }}>
                <span ref={title1Ref} style={{ display: 'block' }}>Four Pillars.. one Platform..</span>
                <span ref={title2Ref} style={{ display: 'block' }}>A future-ready Learner..</span>
                <span ref={title3Ref} style={{ display: 'block' }}>From AI learning to Career-ready skills… </span>
              </h2>
            </div>
          </div>

          <div className="hle-grid" ref={gridRef} style={{ marginTop: '-40px' }}>
            {pillarsData.map((item, idx) => (
              <a href={item.link} className="hle-card" key={idx} style={{ textDecoration: 'none', cursor: item.link === '#' ? 'default' : 'pointer', display: 'flex' }} onClick={(e) => { if (item.link === '#') e.preventDefault(); }}>
                <div className="hle-img-wrap">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="hle-content">
                  <h3 className="hle-card-title">{item.title}</h3>
                  <p className="hle-card-subtitle">{item.subtitle}</p>
                  <p className="hle-card-desc">{item.desc}</p>

                  <div className="hle-card-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
