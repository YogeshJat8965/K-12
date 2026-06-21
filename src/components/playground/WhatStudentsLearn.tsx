import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhatStudentsLearn() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.wsl-card');
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      id: "01",
      title: "Prompt Thinking",
      desc: "The most future-critical skill of our time - how to ask AI clearly, specifically, and creatively to get great results.",
    },
    {
      id: "02",
      title: "Logical Sequencing",
      desc: "Breaking problems into steps - the foundational mindset for coding, systems thinking, and structured reasoning.",
    },
    {
      id: "03",
      title: "Creative Confidence",
      desc: "The courage to iterate, test, fail, and refine - core to every creative and entrepreneurial endeavour.",
    },
    {
      id: "04",
      title: "AI Literacy & Ethics",
      desc: "Understanding what AI can and cannot do, its biases, and how to use it responsibly - digital citizenship in practice.",
    },
    {
      id: "05",
      title: "Self-Directed Learning",
      desc: "Curiosity-led exploration where students choose what to build and learn - the habit of lifelong learning, formed early.",
    },
    {
      id: "06",
      title: "Computational Empathy",
      desc: "Understanding how machines 'think' and learning to communicate with them effectively - an essential modern skill.",
    }
  ];

  return (
    <>
      <style>{`
        .wsl-section {
          width: 100%;
          padding: 80px 40px;
          background: #ffffff;
          font-family: 'Poppins', sans-serif;
          text-align: center;
        }

        .wsl-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
        }

        .wsl-h2 {
          font-weight: 800;
          font-size: clamp(32px, 3.5vw, 44px);
          color: #1A1A2E;
          margin: 0 0 16px;
          letter-spacing: -0.5px;
        }

        .wsl-h2 .purple {
          color: #6C3CF7;
        }

        .wsl-subtitle {
          font-size: 18px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0 auto 60px;
          font-weight: 400;
        }

        .wsl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .wsl-card {
          position: relative;
          background-color: #F2EFF9; /* 2nd card's light purple color for all */
          border-radius: 20px;
          padding: 32px 28px; /* Reduced padding */
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          min-height: 200px; /* Decreased height */
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .wsl-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
        }

        .wsl-number {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #6021DD; /* 2nd card's purple text color for all numbers */
        }

        .wsl-card-title {
          font-size: 24px;
          font-weight: 600; /* Reduced from 700 to make it less dark/bold */
          color: #1A1A2E;
          margin: 0 0 16px;
          letter-spacing: -0.5px;
        }

        .wsl-card-desc {
          font-size: 16px;
          line-height: 1.6;
          color: #5C6165;
          margin: 0;
          font-weight: 400;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1024px) {
          .wsl-section { padding: 80px 32px; }
          .wsl-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .wsl-card { padding: 24px; min-height: auto; }
        }

        @media (max-width: 600px) {
          .wsl-section { padding: 60px 20px; }
          .wsl-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="wsl-section" ref={sectionRef}>
        <div className="wsl-container">
          <h2 className="wsl-h2">
            What Students Learn - <span className="purple">Without Realising It</span>
          </h2>
          
          <p className="wsl-subtitle">
            Play is the best teacher. Here's what's happening behind the fun.
          </p>

          <div className="wsl-grid" ref={cardsRef}>
            {cards.map((card, idx) => (
              <div key={idx} className="wsl-card">
                <div className="wsl-number">{card.id}</div>
                <h3 className="wsl-card-title">{card.title}</h3>
                <p className="wsl-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
