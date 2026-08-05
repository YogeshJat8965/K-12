import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../../assets/landing page/1ChatGPT Image Jun 20, 2026, 01_16_52 AM.webp';
import img2 from '../../assets/landing page/2ChatGPT Image Jun 20, 2026, 01_17_58 AM.webp';
import img3 from '../../assets/landing page/3ChatGPT Image Jun 20, 2026, 01_18_16 AM.webp';
import img4 from '../../assets/landing page/4ChatGPT Image Jun 20, 2026, 01_19_23 AM.webp';

gsap.registerPlugin(ScrollTrigger);

const pillarsData = [
  {
    img: img1,
    title: 'Pillar 01',
    subtitle: 'A universal algorithm to energise young brains',
    desc: 'A repeatable methodology that maps your teaching-learning ecosystem against global cognitive-readiness indicators.',
    glimpse: 'Computational, design & systems thinking embedded across grades - with age-appropriate AI, robotics, IoT and AR/VR, all tied to purpose through the UN SDGs.',
    footer: 'Full indicator map shared in your diagnostic.'
  },
  {
    img: img2,
    title: 'Pillar 02',
    subtitle: 'Empowering educators for a better tomorrow',
    desc: 'Educator readiness sits at the heart of maturity - every teacher, not just the computer faculty.',
    glimpse: 'AI-literacy certification across subjects, CPD cycles, and Vedya AI Co-Pilot access to plan lessons and personalise learning at scale.',
    footer: 'Full educator blueprint shared in your diagnostic.'
  },
  {
    img: img3,
    title: 'Pillar 03',
    subtitle: 'A world-class AI Centre of Excellence',
    desc: 'Every journey culminates in a physical + digital innovation hub - the heartbeat of your campus.',
    glimpse: 'A Maker–Thinker–Innovator zone with industry-grade tools made K–12-appropriate, powered by Skillzza Nova Studios and a schoolwide showcase.',
    footer: 'Full CoE blueprint shared in your diagnostic.'
  },
  {
    img: img4,
    title: 'Pillar 04',
    subtitle: 'Industry-relevant curriculum',
    desc: 'What students learn today connects directly to the economy they’ll inherit tomorrow.',
    glimpse: 'Grade-wise AI & emerging-tech curriculum, real-world capstones with industry partners, and a Digital Skill Passport every learner leaves with.',
    footer: 'Full curriculum map shared in your diagnostic.'
  }
];

export default function CcmmPillars() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

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
      }

      // Cards stagger
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.hle-card-container');
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

  const toggleExpand = (e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    setExpandedCard(expandedCard === idx ? null : idx);
  };

  return (
    <>
      <style>{`
        .hle-section {
          width: 100%;
          background: #ffffff;
          padding: 80px 0;
          font-family: 'Poppins', sans-serif;
        }

        .hle-inner {
          max-width: 1536px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Header */
        .hle-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: -34px;
          gap: 40px;
        }

        .hle-header-left {
          flex: 1;
          max-width: 800px;
        }

        .hle-badge {
          color: #2563EB;
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
          color: #0F172A;
          line-height: 1.25;
          margin: 0;
        }

        /* Grid */
        .hle-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* Flip Card Container */
        .hle-card-container {
          perspective: 1200px;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 100%;
        }

        .hle-card-container:hover {
          transform: translateY(-12px);
        }

        /* Inner rotating wrapper */
        .hle-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.4, 0.0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .hle-card-inner.flipped {
          transform: rotateY(180deg);
        }

        /* Front and Back common */
        .hle-card-front, .hle-card-back {
          backface-visibility: hidden;
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          width: 100%;
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .hle-card-container:hover .hle-card-front,
        .hle-card-container:hover .hle-card-back {
          box-shadow: 0 25px 50px rgba(37, 99, 235, 0.12), 0 0 0 1px rgba(37, 99, 235, 0.15);
          border-color: transparent;
        }

        /* Blue Bottom Border line on hover */
        .hle-card-front::after, .hle-card-back::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 4px;
          background: #2563EB;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.4s ease;
          box-shadow: 0 -2px 10px rgba(37, 99, 235, 0.5);
          z-index: 10;
        }

        .hle-card-container:hover .hle-card-front::after,
        .hle-card-container:hover .hle-card-back::after {
          transform: scaleX(1);
        }

        /* Front specific */
        .hle-card-front {
          position: relative;
          height: 100%;
        }

        /* Back specific */
        .hle-card-back {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          transform: rotateY(180deg);
          border-color: #2563EB;
          background: #F8FAFC;
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

        .hle-card-container:hover .hle-img-wrap::after {
          animation: cardShine 0.7s forwards;
        }

        @keyframes cardShine {
          100% { left: 200%; }
        }

        .hle-img-wrap img {
          width: 100%;
          height: 120%;
          object-fit: cover;
          display: block;
          transform: translateY(-10%);
        }

        .hle-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .hle-card-title {
          font-weight: 800;
          font-size: 20px;
          color: #0F172A;
          margin: 0 0 6px 0;
        }

        .hle-card-subtitle {
          font-weight: 700;
          font-size: 15px;
          color: #2563EB;
          margin: 0 0 12px 0;
          line-height: 1.4;
        }

        .hle-card-desc {
          font-size: 15px;
          line-height: 1.5;
          color: #475569;
          margin: 0 0 16px 0;
          font-weight: 500;
        }
        
        .hle-glimpse-box {
          background: #ffffff;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 20px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          flex: 1;
        }

        .hle-glimpse-title {
          font-weight: 800;
          font-size: 14px;
          color: #2563EB;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hle-glimpse-text {
          font-size: 15px;
          line-height: 1.6;
          color: #334155;
          font-weight: 500;
        }

        .hle-card-footer {
          font-size: 14px;
          font-weight: 600;
          color: #0F172A;
          margin: 0;
          padding-top: 16px;
          border-top: 1px solid #E2E8F0;
        }

        .hle-card-btn {
          width: 36px;
          height: 36px;
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
        }

        .hle-card-container:hover .hle-card-btn {
          border-color: #2563EB;
          color: #fff;
          background: #2563EB;
        }

        .btn-expanded {
          background: #2563EB !important;
          border-color: #2563EB !important;
          color: #fff !important;
        }
        .btn-expanded svg {
          transform: rotate(-135deg) !important;
        }

        @media (max-width: 1200px) {
          .hle-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hle-header {
            flex-direction: column;
            align-items: flex-start;
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
          <div className="hle-header">
            <div className="hle-header-left">
              <span className="hle-badge">CCMM PLAYBOOK</span>
              <h2 className="hle-title">
                <span ref={title1Ref} style={{ display: 'block' }}>Four pillars of an AI-ready school</span>
                <span ref={title2Ref} style={{ display: 'block', fontSize: '18px', color: '#64748B', fontWeight: 500, marginTop: '16px', lineHeight: '1.6' }}>
                  CCMM isn’t a course - it’s a transformation standard. Show the shape of each pillar; the full playbook is walked through in the private audit.
                </span>
              </h2>
            </div>
          </div>

          <div className="hle-grid" ref={gridRef}>
            {pillarsData.map((item, idx) => {
              const isExpanded = expandedCard === idx;

              return (
                <div
                  className="hle-card-container"
                  key={idx}
                  onClick={(e) => toggleExpand(e, idx)}
                >
                  <div className={`hle-card-inner ${isExpanded ? 'flipped' : ''}`}>

                    {/* FRONT OF CARD */}
                    <div className="hle-card-front">
                      <div className="hle-img-wrap">
                        <img src={item.img} alt={item.title} />
                      </div>
                      <div className="hle-content">
                        <h3 className="hle-card-title text-[#2563EB] text-[18px] leading-[1.3] mb-3">{item.subtitle}</h3>
                        <p className="hle-card-desc">{item.desc}</p>

                        <div className="hle-card-btn" style={{ marginTop: 'auto' }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* BACK OF CARD */}
                    <div className="hle-card-back">
                      <div className="hle-content">
                        <h3 className="hle-card-title text-[#2563EB] text-[18px] leading-[1.3] mb-5">{item.subtitle}</h3>

                        <div className="hle-glimpse-box">
                          <div className="hle-glimpse-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            Glimpse
                          </div>
                          <div className="hle-glimpse-text">{item.glimpse}</div>
                        </div>

                        <p className="hle-card-footer">{item.footer}</p>

                        <div className="hle-card-btn btn-expanded" style={{ marginTop: '24px' }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
