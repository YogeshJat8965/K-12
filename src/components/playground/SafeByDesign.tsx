import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import DashboardImg from '../../assets/AI playground/Image 24.webp';
import TickIcon from '../../assets/AI playground/Group 27594.svg';

import { useSplitReveal } from '../../hooks/useSplitReveal';
import { useMagneticPull, use3DTilt } from '../../hooks/usePremiumHover';

gsap.registerPlugin(ScrollTrigger);

export default function SafeByDesign() {
  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useSplitReveal('.sbd-h2', 'lines', 0.08, 0);
  useSplitReveal('.sbd-subtitle', 'lines', 0.03, 0.2);
  use3DTilt('.sbd-image-wrapper', 5);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the list items from the right
      if (rightRef.current) {
        const items = rightRef.current.querySelectorAll('.sbd-item');
        gsap.from(items, {
          x: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        });
      }

      // Animate Image
      const imgWrapper = sectionRef.current?.querySelector('.sbd-image-wrapper');
      if (imgWrapper) {
        gsap.from(imgWrapper, {
          x: -60,
          rotationY: -20,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        });

        // Parallax effect on image
        gsap.to(imgWrapper, {
          y: -50, // Parallax movement
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      }

      // Animate banner
      if (bannerRef.current) {
        gsap.from(bannerRef.current, {
          y: 60,
          rotationX: 8,
          opacity: 0,
          duration: 1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 85%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Content Moderation, Always On",
      desc: "Every conversation is scanned in real-time against child-safety policies - inappropriate content is blocked before it ever reaches the student."
    },
    {
      title: "No Personal Data Sharing",
      desc: "Agents never ask for real names, contact details, addresses, or personal information. Full stop."
    },
    {
      title: "Parent Dashboard",
      desc: "Parents see their child's agents, conversation summaries, and time spent - complete visibility without intrusive monitoring."
    },
    {
      title: "Teacher-Moderated at School",
      desc: "When deployed in classrooms, teachers have admin-level visibility into cohort usage and student creations."
    }
  ];

  return (
    <>
      <style>{`
        .sbd-section {
          width: 100%;
          padding: 40px 40px 80px;
          background: #EDF1FC;
          font-family: 'Poppins', sans-serif;
        }

        .sbd-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
        }

        .sbd-top-row {
          display: flex;
          gap: 100px; /* Increased gap to shift right content right */
          align-items: center;
          margin-bottom: 40px;
        }

        .sbd-left {
          flex: 0 0 650px; /* Increased image container width */
          display: flex;
          flex-direction: column;
        }

        .sbd-left-text {
          padding-left: 32px; /* Shifts text slightly to the right */
        }

        .sbd-h2 {
          font-weight: 800;
          font-size: clamp(36px, 4vw, 48px);
          color: #1A1A2E;
          margin: 0 0 16px;
          line-height: 1.2;
          letter-spacing: -1px;
          white-space: nowrap; /* Ensures only 2 lines (broken by <br/>) */
        }

        .sbd-subtitle {
          font-size: 20px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0 0 40px;
          max-width: 600px;
        }

        .sbd-image-wrapper {
          width: 650px;
          height: 432px; /* Scaled up height */
          max-width: 100%;
          background: transparent url('${DashboardImg}') 0% 0% no-repeat padding-box;
          background-size: contain;
          opacity: 1;
        }

        .sbd-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .sbd-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          margin: -16px;
          padding: 16px;
          border-radius: 16px;
          border: 1px solid transparent;
          transition: background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }
        
        .sbd-item:hover {
          background: #F4F1FE; /* Very soft lavender highlight */
          box-shadow: 0 8px 24px rgba(0,0,0,0.04);
          border-color: rgba(108, 60, 247, 0.1);
        }

        .sbd-bullet {
          flex: 0 0 16px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #6C3CF7;
          margin-top: 4px;
          transition: transform 0.3s ease;
        }

        .sbd-item:hover .sbd-bullet {
          transform: scale(1.2);
        }

        .sbd-item-content {
          flex: 1;
          max-width: 460px; /* Restricts width so text wraps to next line */
        }

        .sbd-item-title {
          font-size: 18px;
          font-weight: 700;
          color: #1A1A2E;
          margin: 0 0 8px;
          transition: transform 0.3s ease;
        }

        .sbd-item:hover .sbd-item-title {
          transform: translateX(-3px);
        }

        .sbd-item-desc {
          font-size: 16px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0;
        }

        .sbd-banner {
          position: relative;
          background: #2D68FF; /* Vibrant blue matching screenshot */
          border-radius: 16px;
          padding: 32px 48px; /* Reduced vertical padding to decrease height */
          text-align: center;
          color: #FFFFFF;
          max-width: 850px; /* Reduced width */
          margin: 0 auto;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .sbd-banner:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(45, 104, 255, 0.3);
        }

        .sbd-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
          transition: all 0.6s ease;
          z-index: 1;
          pointer-events: none;
        }

        .sbd-banner:hover::before {
          animation: bannerShine 0.8s forwards;
        }

        @keyframes bannerShine {
          100% { left: 200%; }
        }

        .sbd-banner-content {
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .sbd-banner:hover .sbd-banner-content {
          transform: translateY(-2px);
        }

        .sbd-banner-title {
          font-size: 24px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 12px;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1200px) {
          .sbd-top-row { flex-direction: column; align-items: flex-start; gap: 40px; }
          .sbd-left { flex: none; width: 100%; max-width: 100%; }
          .sbd-image-wrapper { width: 100%; height: 50vw; background-position: left center; }
        }

        @media (max-width: 768px) {
          .sbd-section { padding: 40px 20px; }
          .sbd-h2 { font-size: 32px; white-space: normal; }
          .sbd-image-wrapper { height: 60vw; }
          .sbd-banner { padding: 32px 24px; }
          .sbd-banner-title { font-size: 20px; }
          .sbd-banner-desc { font-size: 16px; }
        }
        @media (max-width: 480px) {
          .sbd-h2 { font-size: 28px; white-space: normal; }
          .sbd-left-text { padding-left: 0; }
        }
      `}</style>

      <section className="sbd-section" ref={sectionRef}>
        <div className="sbd-container">

          <div className="sbd-top-row">
            <div className="sbd-left">
              <div className="sbd-left-text">
                <h2 className="sbd-h2">
                  Safe by Design.<br />
                  Transparent by Default.
                </h2>
                <p className="sbd-subtitle">
                  Because 'AI for kids' should mean safety first - not safety eventually.
                </p>
              </div>
              <div className="sbd-image-wrapper"></div>
            </div>

            <div className="sbd-right" ref={rightRef}>
              {features.map((feature, idx) => (
                <div key={idx} className="sbd-item">
                  <div className="sbd-bullet"></div>
                  <div className="sbd-item-content">
                    <h4 className="sbd-item-title">{feature.title}</h4>
                    <p className="sbd-item-desc">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="sbd-banner" ref={bannerRef}>
            <div className="sbd-banner-content">
              <h3 className="sbd-banner-title">Our Promise to Parents</h3>
              <p className="sbd-banner-desc">
                If our Playground wouldn't feel right for our own children, it doesn't belong on
                your child's screen. Every design decision is made with that filter first.
              </p>
            </div>
          </div> */}

        </div>
      </section>
    </>
  );
}
