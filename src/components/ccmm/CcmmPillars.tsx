import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../../assets/CCMM/universal algorithm .png';
import img2 from '../../assets/CCMM/better tomorrow.png';
import img3 from '../../assets/CCMM/AI Centre of Excellence.png';
import img4 from '../../assets/CCMM/Industry-relevant curriculum.png';

gsap.registerPlugin(ScrollTrigger);

const pillarsData = [
  {
    img: img1,
    title: 'Pillar 01',
    subtitle: 'A universal algorithm to energise young brains',
    desc: 'A structured, repeatable transformation methodology that adapts to any school - any size, board, or geography - and turns curiosity into a designed outcome rather than an accident.',
    footer: 'Curiosity, engineered.'
  },
  {
    img: img2,
    title: 'Pillar 02',
    subtitle: 'Empowering educators for a better tomorrow',
    desc: 'Every teacher becomes AI-confident - not just the computer-science faculty - supported by the Vedya AI Co-Pilot and continuous, standards-aligned development.',
    footer: 'Certified schools produce certified educators.'
  },
  {
    img: img3,
    title: 'Pillar 03',
    subtitle: 'A world-class AI Centre of Excellence',
    desc: 'Every journey culminates in a living innovation hub on campus - the visible heartbeat of your school\'s cognitive transformation, and a signal parents and community recognise.',
    footer: 'Not a room. A movement.'
  },
  {
    img: img4,
    title: 'Pillar 04',
    subtitle: 'Industry-relevant curriculum',
    desc: 'What students learn is mapped to the boards you teach and the economy they\'ll enter - refreshed as the industry moves, with a Digital Skill Passport to show for it.',
    footer: 'Prepared for the economy, not just the exam.'
  }
];

export default function CcmmPillars() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);

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

      // Cards stagger animation removed to ensure stable vertical alignment
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
          margin-bottom: 40px;
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
          align-items: stretch;
        }

        /* Card Container */
        .hle-card-container {
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
        }

        .hle-card-container:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .hle-img-wrap {
          width: 100%;
          height: 200px;
          flex-shrink: 0;
          overflow: hidden;
        }

        .hle-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hle-card-content-wrap {
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        @media (max-width: 1200px) {
          .hle-grid {
            grid-template-columns: repeat(2, 1fr);
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

      <section className="hle-section" ref={sectionRef}>
        <div className="hle-inner">
          <div className="hle-header">
            <div className="hle-header-left">
              <span className="hle-badge">THE FRAMEWORK</span>
              <h2 className="hle-title">
                <span ref={title1Ref} style={{ display: 'block' }}>Four pillars of an AI-ready school</span>
                <span ref={title2Ref} style={{ display: 'block', fontSize: '18px', color: '#64748B', fontWeight: 500, marginTop: '16px', lineHeight: '1.6' }}>
                  Every CCMM assessment and certification is structured around four interlocking pillars - the foundation a truly cognitive campus is built on.
                </span>
              </h2>
            </div>
          </div>

          <div className="hle-grid" ref={gridRef}>
            {pillarsData.map((item, idx) => {
              return (
                <div className="hle-card-container" key={idx}>
                  <div className="hle-img-wrap">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="hle-card-content-wrap">
                    <h3 className="text-[#0F172A] font-extrabold text-[22px] leading-[1.3] mb-4">
                      {item.subtitle}
                    </h3>
                    <p className="text-[#64748B] text-[15px] leading-[1.6] font-medium">
                      {item.desc}
                    </p>
                  </div>
                  <div style={{ padding: '0 24px 32px 24px', marginTop: 'auto' }}>
                    <p className="text-[#D97706] font-bold text-[14px]">
                      {item.footer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '50px', textAlign: 'center', fontSize: '14px', color: '#64748B', fontStyle: 'italic', lineHeight: '1.6', position: 'relative', zIndex: 10 }}>
            The specific interventions, indicators, and sequencing inside each pillar are proprietary to CCMM and shared confidentially with partner schools during the diagnostic.
          </div>
        </div>
      </section>
    </>
  );
}
