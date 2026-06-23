import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useSplitReveal } from '../../hooks/useSplitReveal';
import { use3DTilt } from '../../hooks/usePremiumHover';
import backgroundImg from '../../assets/AI playground/What Students Learn - Without Realising It.png';

gsap.registerPlugin(ScrollTrigger);

export default function WhatStudentsLearn() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useSplitReveal('.wsl-h2', 'lines', 0.08, 0);
  use3DTilt('.wsl-card', 7);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        cardsRef.current.style.perspective = '1400px';
        const cards = Array.from(cardsRef.current.querySelectorAll('.wsl-card'));
        
        cards.forEach((card, i) => {
          const isEvenCol = (i % 3) >= 1.5; // cols are 0, 1, 2. If 1 or 2... wait, odd vs even column.
          // 3x2 grid. Col 0 (left), Col 1 (middle), Col 2 (right).
          // Let's say odd-column (col 0, col 2) vs even-column (col 1).
          // Actually prompt: "odd-column cards enter from rotateY(-25deg) translateX(-30px), even-column from rotateY(25deg) translateX(30px)"
          const col = i % 3;
          const isOddCol = col === 0 || col === 2; // 1st and 3rd visual columns
          const rotY = isOddCol ? -25 : 25;
          const tx = isOddCol ? -30 : 30;
          const row = Math.floor(i / 3);
          const delay = row * 0.1;

          gsap.from(card, {
            rotationY: rotY,
            x: tx,
            y: 40,
            opacity: 0,
            duration: 1.2,
            delay: delay,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            }
          });

          // Number counter effect
          const numberEl = card.querySelector('.wsl-number');
          if (numberEl) {
            const targetVal = i + 1;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: targetVal,
              duration: 1,
              delay: delay + 0.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
              },
              onUpdate: () => {
                const num = Math.floor(obj.val);
                numberEl.textContent = num < 10 ? `0${num}` : num.toString();
              }
            });
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
          position: relative;
        }

        .wsl-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('${backgroundImg}') no-repeat center center;
          background-size: cover;
          opacity: 0.25; /* Lightened image opacity without a white filter */
          pointer-events: none;
          z-index: 0;
        }

        .wsl-container {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 1;
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
          font-size: 20px;
          line-height: 1.6;
          color: #000000; /* Black text */
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
          background-color: #FFFFFF; /* White background */
          border-radius: 20px;
          padding: 32px 28px; /* Reduced padding */
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          min-height: 200px; /* Decreased height */
          border: 1px solid #EAE3FE; /* Light border */
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          overflow: hidden;
        }

        .wsl-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0%;
          background-color: #6021DD;
          transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .wsl-card:hover {
          border-color: #C1B4DF; /* Darkens border on hover */
          box-shadow: 0 16px 36px rgba(108, 60, 247, 0.12);
        }

        .wsl-card:hover::after {
          width: 100%;
        }

        .wsl-number {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #6021DD; /* 2nd card's purple text color for all numbers */
          transition: transform 0.3s ease, filter 0.3s ease;
          display: inline-block;
        }

        .wsl-card:hover .wsl-number {
          transform: scale(1.15);
          filter: brightness(1.1);
        }

        .wsl-card-title {
          font-size: 24px;
          font-weight: 600; /* Reduced from 700 to make it less dark/bold */
          color: #1A1A2E;
          margin: 0 0 16px;
          letter-spacing: -0.5px;
          position: relative;
          display: inline-block;
        }

        .wsl-card-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 2px;
          background-color: #1A1A2E;
          transition: width 0.4s ease;
        }

        .wsl-card:hover .wsl-card-title::after {
          width: 100%;
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
          .wsl-section { padding: 80px 20px; }
          .wsl-card { padding: 20px; min-height: auto; }
          .wsl-card-title { font-size: 20px; }
          .wsl-card-desc { font-size: 14px; }
          .wsl-h2 { font-size: 2.2rem; }
        }

        @media (max-width: 768px) {
          .wsl-section { padding: 60px 16px; }
          .wsl-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .wsl-h2 { font-size: 1.8rem; line-height: 1.2; }
          .wsl-subtitle { font-size: 16px; margin-bottom: 40px; }
        }

        @media (max-width: 480px) {
          .wsl-grid { grid-template-columns: 1fr; }
          .wsl-h2 { font-size: 1.5rem; }
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
