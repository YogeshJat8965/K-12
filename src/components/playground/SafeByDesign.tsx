import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import DashboardImg from '../../assets/AI playground/Image 24.png';
import TickIcon from '../../assets/AI playground/Group 27594.svg';

gsap.registerPlugin(ScrollTrigger);

export default function SafeByDesign() {
  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the list items
      if (rightRef.current) {
        const items = rightRef.current.querySelectorAll('.sbd-item');
        gsap.from(items, {
          x: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        });
      }

      // Animate banner
      if (bannerRef.current) {
        gsap.from(bannerRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
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
      title: "Content Moderation, Always On:",
      desc: "Every conversation is scanned in real-time against child-safety policies - inappropriate content is blocked before it ever reaches the student."
    },
    {
      title: "No Personal Data Sharing:",
      desc: "Agents never ask for real names, contact details, addresses, or personal information. Full stop."
    },
    {
      title: "Parent Dashboard:",
      desc: "Parents see their child's agents, conversation summaries, and time spent - complete visibility without intrusive monitoring."
    },
    {
      title: "Teacher-Moderated at School:",
      desc: "When deployed in classrooms, teachers have admin-level visibility into cohort usage and student creations."
    }
  ];

  return (
    <>
      <style>{`
        .sbd-section {
          width: 100%;
          padding: 100px 40px 100px 40px;
          background: linear-gradient(to bottom, #EDF1FC calc(100% - 186px), #FFFFFF calc(100% - 186px)); /* Recalculated for smaller card height */
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
          margin-bottom: 80px;
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
        }

        .sbd-icon {
          flex: 0 0 28px;
          width: 28px;
          height: 28px;
          background: transparent url('${TickIcon}') center center no-repeat padding-box;
          background-size: contain;
          margin-top: 2px;
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
        }

        .sbd-item-desc {
          font-size: 16px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0;
        }

        .sbd-banner {
          background: #2D68FF; /* Vibrant blue matching screenshot */
          border-radius: 16px;
          padding: 32px 48px; /* Reduced vertical padding to decrease height */
          text-align: center;
          color: #FFFFFF;
          max-width: 850px; /* Reduced width */
          margin: 0 auto;
        }

        .sbd-banner .sbd-banner-title {
          font-size: 26px;
          font-weight: 700;
          margin: 0 0 16px;
          color: #FFFFFF !important;
        }

        .sbd-banner .sbd-banner-desc {
          font-size: 20px;
          line-height: 1.6;
          margin: 0 auto;
          max-width: 800px; /* Adjusted to fit the narrower card */
          font-weight: 400;
          color: #FFFFFF !important;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1200px) {
          .sbd-top-row { flex-direction: column; align-items: flex-start; gap: 40px; }
          .sbd-left { flex: none; width: 100%; max-width: 100%; }
          .sbd-image-wrapper { width: 100%; height: 50vw; background-position: left center; }
        }

        @media (max-width: 768px) {
          .sbd-section { padding: 60px 24px; }
          .sbd-h2 { font-size: 32px; }
          .sbd-image-wrapper { height: 60vw; }
          .sbd-banner { padding: 32px 24px; }
          .sbd-banner-title { font-size: 20px; }
          .sbd-banner-desc { font-size: 16px; }
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
                  <div className="sbd-icon"></div>
                  <div className="sbd-item-content">
                    <h4 className="sbd-item-title">{feature.title}</h4>
                    <p className="sbd-item-desc">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sbd-banner" ref={bannerRef}>
            <h3 className="sbd-banner-title">Our Promise to Parents</h3>
            <p className="sbd-banner-desc">
              If our Playground wouldn't feel right for our own children, it doesn't belong on
              your child's screen. Every design decision is made with that filter first.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
