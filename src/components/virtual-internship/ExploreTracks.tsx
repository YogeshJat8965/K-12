import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgAI from '../../assets/virtual internship/ai.PNG';
import imgBusiness from '../../assets/virtual internship/bussiness.PNG';
import imgCreative from '../../assets/virtual internship/creative.PNG';
import imgSpace from '../../assets/virtual internship/space.PNG';
import imgClimate from '../../assets/virtual internship/climate.PNG';
import imgMindfulness from '../../assets/virtual internship/mindfullness.PNG';
import imgPublic from '../../assets/virtual internship/public.PNG';
import imgLeadership from '../../assets/virtual internship/leadership.PNG';

gsap.registerPlugin(ScrollTrigger);

export default function ExploreTracks() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.et-header-text, .et-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Cards animation
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.et-card');
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tracks = [
    {
      img: imgAI,
      title: "AI, Data & Deep Tech",
      sub: "THE BUILDERS OF TOMORROW",
      // desc: "Hands-On Exposure To Artificial Intelligence, Data Analytics, Cybersecurity, Agentic AI, And Emerging Technologies Shaping The Future"
    },
    {
      img: imgBusiness,
      title: "Business, Finance & Entrepreneurship",
      sub: "THE STRATEGIC THINKERS",
      // desc: "Foundational Understanding Of Business Models, Financial Literacy, Startup Thinking, Market Strategy, And Innovation."
    },
    {
      img: imgCreative,
      title: "Creative, Media & Product Design",
      sub: "THE STORYTELLERS & DESIGNERS",
      // desc: "Training In UX Design, Storytelling, Digital Content Creation, GenAI Creative Tools, Animation, And Modern Product Thinking."
    },
    {
      img: imgSpace,
      title: "Space, Science & Frontier Tech",
      sub: "THE EXPLORERS & SCIENTISTS",
      // desc: "Space Exploration, Astronomy, Aerospace Fundamentals, Satellite Missions, And Frontier Science - Inspired By India's Space Ambitions."
    },
    {
      img: imgClimate,
      title: "Climate, Sustainability & Innovation",
      sub: "THE CHANGEMAKERS",
      // desc: "Climate Tech, Circular Economy, UN SDG-Linked Projects, Renewable Energy, And Green Entrepreneurship For A Better Planet."
    },
    {
      img: imgMindfulness,
      title: "Mindfulness, Wellness & Inner Growth",
      sub: "THE BALANCED LEADERS",
      // desc: "Mental Well-Being, Emotional Intelligence, Mindfulness Practices, Youth Resilience, And Building A Strong Inner Compass."
    },
    {
      img: imgPublic,
      title: "Public Voice, Media & Global Affairs",
      sub: "THE COMMUNICATORS & DIPLOMATS",
      // desc: "Journalism, Public Speaking, Debate, World Affairs, Diplomacy Simulations, And Building A Credible Public Voice Early."
    },
    {
      img: imgLeadership,
      title: "Leadership, Civic & Social Impact",
      sub: "THE FUTURE LEADERS",
      // desc: "Civic Leadership, Community Projects, Social Entrepreneurship, Policy Thinking, And Building Solutions That Serve Others."
    }
  ];

  return (
    <>
      <style>{`
        .et-section {
          width: 100%;
          padding: 100px 40px;
          background-color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
        }

        .et-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
        }

        .et-header {
          text-align: left;
          margin-bottom: 60px;
        }

        .et-header-text {
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 800;
          color: #1A1A2E;
          margin: 0 0 16px;
          letter-spacing: -1px;
        }

        .et-header-text .purple {
          color: #6C3CF7;
        }

        .et-subtitle {
          font-size: 16px;
          color: #5C6165;
          margin: 0;
          font-weight: 500;
          width: 100%;
          line-height: 1.6;
        }

        .et-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px 24px;
        }

        .et-card {
          display: flex;
          flex-direction: column;
        }

        .et-card-img-wrap {
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .et-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .et-card:hover .et-card-img {
          transform: scale(1.05);
        }

        .et-card-header {
          border-left: 3px solid #6C3CF7;
          padding-left: 12px;
          margin-bottom: 12px;
        }

        .et-card-title {
          font-size: 15px;
          font-weight: 700;
          color: #1A1A2E;
          margin: 0 0 4px;
          line-height: 1.3;
        }

        .et-card-sub {
          font-size: 12px;
          font-weight: 700;
          color: #6C3CF7;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .et-card-desc {
          font-size: 13px;
          color: #6B7280;
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1200px) {
          .et-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 900px) {
          .et-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .et-section { padding: 60px 20px; }
          .et-grid { grid-template-columns: 1fr; }
          .et-header-text { font-size: 32px; }
        }
      `}</style>

      <section className="et-section" ref={sectionRef}>
        <div className="et-container">
          
          <div className="et-header">
            <h2 className="et-header-text">
              Explore <span className="purple">Career</span> Tracks
            </h2>
            <p className="et-subtitle">
              Eight future-ready career tracks, mapped across technology, enterprise, creativity, science, and personal growth. Students can explore across tracks before choosing their capstone specialisation.
            </p>
          </div>

          <div className="et-grid" ref={gridRef}>
            {tracks.map((track, idx) => (
              <div key={idx} className="et-card">
                <div className="et-card-img-wrap">
                  <img src={track.img} alt={track.title} className="et-card-img" />
                </div>
                <div className="et-card-header">
                  <h3 className="et-card-title">{track.title}</h3>
                  <p className="et-card-sub">{track.sub}</p>
                </div>
                <p className="et-card-desc">{track.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
