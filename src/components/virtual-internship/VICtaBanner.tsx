import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VICtaBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(bannerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: bannerRef.current, start: 'top 90%' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .vi-cta-wrap {
          width: 100%;
          padding: 60px 40px;
          font-family: 'Poppins', sans-serif;
        }
        .vi-cta-banner {
          max-width: 1360px;
          margin: 0 auto;
          background: linear-gradient(105deg, #0B0F2E 0%, #1A1E6E 25%, #3B2FAA 50%, #6C3CF7 75%, #8B5CF6 100%);
          border-radius: 24px;
          padding: 48px 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          position: relative;
          overflow: hidden;
        }

        /* Decorative dashed circles */
        .vi-cta-deco-1 {
          position: absolute;
          top: -30px;
          right: 80px;
          width: 120px;
          height: 120px;
          border: 2px dashed rgba(255,255,255,0.12);
          border-radius: 50%;
        }
        .vi-cta-deco-2 {
          position: absolute;
          bottom: -40px;
          right: 180px;
          width: 100px;
          height: 100px;
          border: 2px dashed rgba(255,255,255,0.08);
          border-radius: 50%;
        }
        .vi-cta-dots {
          position: absolute;
          top: 16px;
          right: 20px;
          width: 40px;
          height: 40px;
          background-image: radial-gradient(rgba(255,255,255,0.25) 2px, transparent 2px);
          background-size: 10px 10px;
        }

        /* Left content */
        .vi-cta-left {
          flex: 0 1 540px;
          z-index: 1;
        }
        .vi-cta-title {
          font-size: clamp(22px, 2.5vw, 28px);
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 12px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }
        .vi-cta-desc {
          font-size: 14px;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.6;
          font-weight: 400;
        }

        /* Right buttons */
        .vi-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          z-index: 1;
          flex-shrink: 0;
          flex: 1;
        }

        .vi-cta-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
          text-decoration: none;
        }

        .vi-cta-btn-primary {
          background: #FFFFFF;
          color: #6C3CF7;
          border: 2px solid #FFFFFF;
        }
        .vi-cta-btn-primary:hover {
          background: transparent;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .vi-cta-btn-outline {
          background: transparent;
          color: #FFFFFF;
          border: 2px solid rgba(0, 0, 0, 0.3);
        }
        .vi-cta-btn-outline:hover {
          border-color: rgba(246, 242, 242, 0.5);
          background: rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .vi-cta-btn-icon {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .vi-cta-banner { flex-direction: column; text-align: center; padding: 40px 32px; }
          .vi-cta-left { flex: none; }
          .vi-cta-buttons { flex-wrap: wrap; justify-content: center; }
        }
        @media (max-width: 600px) {
          .vi-cta-wrap { padding: 40px 20px; }
          .vi-cta-banner { padding: 32px 24px; border-radius: 16px; }
          .vi-cta-btn { padding: 12px 20px; font-size: 13px; }
        }
      `}</style>

      <div className="vi-cta-wrap">
        <div className="vi-cta-banner" ref={bannerRef}>
          {/* Decorative elements */}
          <div className="vi-cta-deco-1"></div>
          <div className="vi-cta-deco-2"></div>
          <div className="vi-cta-dots"></div>

          {/* Left */}
          <div className="vi-cta-left">
            <h2 className="vi-cta-title">
              Start Your Child's First Real-World<br />Learning Experience
            </h2>
            <p className="vi-cta-desc">
              Move beyond marks. Give your child the clarity, skills, and confidence they need for the future
            </p>
          </div>

          {/* Right buttons */}
          <div className="vi-cta-buttons">
            <button onClick={(e) => e.preventDefault()} className="vi-cta-btn vi-cta-btn-primary">
              <span className="vi-cta-btn-icon"><Play size={16} fill="currentColor" /></span>
              Take a free quiz
            </button>
            <button onClick={() => document.getElementById('explore-career-tracks')?.scrollIntoView({ behavior: 'smooth' })} className="vi-cta-btn vi-cta-btn-primary">
              <span className="vi-cta-btn-icon"><Play size={16} fill="currentColor" /></span>
              Explore internships
            </button>
            <button onClick={() => window.location.href = '/contact'} className="vi-cta-btn vi-cta-btn-primary">
              <span className="vi-cta-btn-icon"><Play size={16} fill="currentColor" /></span>
              Book consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
