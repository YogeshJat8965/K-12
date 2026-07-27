import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../assets/virtual internship/1img.webp';
import img2 from '../../assets/virtual internship/2img.webp';
import img3 from '../../assets/virtual internship/3img.webp';
import img4 from '../../assets/virtual internship/4img.webp';
import img5 from '../../assets/virtual internship/5img.webp';

gsap.registerPlugin(ScrollTrigger);

export default function WhatVIGain() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.wvg-header-text, .wvg-line', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.wvg-card');
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    { img: img1, title: "Career Clarity Before It Matters" },
    { img: img2, title: "A Portfolio That Stands Out" },
    { img: img3, title: "Future-Ready Skill Development" },
    { img: img4, title: "Verified Credentials" },
    { img: img5, title: "Confidence & Real-World Thinking" }
  ];

  return (
    <>
      <style>{`
        .wvg-section {
          width: 100%;
          padding: 10px 40px 80px;
          background-color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
          text-align: center;
        }

        .wvg-container {
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
        }

        .wvg-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 24px;
        }

        .wvg-header-text {
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 800;
          color: #1A1A2E;
          margin: 0 0 16px;
          letter-spacing: -1px;
        }

        .wvg-header-text .purple {
          color: #6C3CF7;
        }

        .wvg-line {
          width: 80px;
          height: 4px;
          background-color: #6C3CF7;
          border-radius: 4px;
        }

        .wvg-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .wvg-card {
          background: #FFFFFF;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #F3F4F6;
        }

        .wvg-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(108, 60, 247, 0.12);
        }

        .wvg-card-img-wrapper {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
        }

        .wvg-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .wvg-card:hover .wvg-card-img {
          transform: scale(1.05);
        }

        .wvg-card-content {
          padding: 24px 20px;
          flex: 1;
          display: flex;
          align-items: flex-start;
          text-align: left;
          background: #FFFFFF;
        }

        .wvg-card-title {
          font-size: 15px;
          font-weight: 700;
          color: #1A1A2E;
          line-height: 1.4;
          margin: 0;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1200px) {
          .wvg-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
        }

        @media (max-width: 768px) {
          .wvg-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .wvg-section { padding: 20px 10px; }
          .wvg-header { margin-bottom: 30px; }
          .wvg-header-text { font-size: 32px; }
        }

        @media (max-width: 480px) {
          .wvg-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="wvg-section" ref={sectionRef}>
        <div className="wvg-container">
          
          <div className="wvg-header">
            <h2 className="wvg-header-text">
              What Students <span className="purple">Gain</span>
            </h2>
            <div className="wvg-line"></div>
          </div>

          <div className="wvg-grid" ref={cardsRef}>
            {cards.map((card, index) => (
              <div key={index} className="wvg-card">
                <div className="wvg-card-img-wrapper">
                  <img src={card.img} alt={card.title} className="wvg-card-img" />
                </div>
                <div className="wvg-card-content">
                  <h3 className="wvg-card-title">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
