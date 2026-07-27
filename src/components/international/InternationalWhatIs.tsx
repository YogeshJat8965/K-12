import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Brain, Users, Monitor } from 'lucide-react';
import heroImg from '../../assets/International Studio/girl-grp.webp';
import responsiveImg from '../../assets/International Studio/responsive img.webp';

gsap.registerPlugin(ScrollTrigger);

export default function InternationalWhatIs() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });
      gsap.from(rightRef.current, {
        x: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .iwi-section {
          width: 100%;
          background: #FFFFFF;
          padding: 40px 0 0 0;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Subtle curvy lines */
        .iwi-bg-curve {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        /* Floating tiny icons in background */
        .iwi-float-icon {
          position: absolute;
          opacity: 0.6;
          z-index: 0;
          animation: float-slow 10s ease-in-out infinite alternate;
        }
        @keyframes float-slow {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(15deg); }
        }

        /* Blurred colored circles */
        .iwi-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.12;
          z-index: 0;
        }
        .iwi-blob-purple { background: #8B5CF6; width: 350px; height: 350px; top: 5%; left: 5%; }
        .iwi-blob-green { background: #10B981; width: 280px; height: 280px; bottom: 25%; left: 40%; }
        .iwi-blob-pink { background: #EC4899; width: 380px; height: 380px; bottom: 5%; right: 10%; }
        .iwi-blob-yellow { background: #FDE047; width: 250px; height: 250px; top: 15%; right: 25%; }

        .iwi-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 80px;
          position: relative;
          z-index: 10;
        }
        @media (min-width: 1024px) {
          .iwi-container { flex-direction: row; }
        }

        .iwi-left {
          flex: 1;
        }
        .iwi-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .iwi-title {
          font-size: 38px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 24px;
        }

        .iwi-desc {
          font-size: 18px;
          line-height: 1.7;
          color: #4B5563;
          margin-bottom: 24px;
          font-weight: 500;
        }

        .iwi-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 36px;
        }
        .iwi-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #F3F4F6;
          border-radius: 999px;
          padding: 10px 18px;
          font-size: 14.5px;
          font-weight: 600;
          color: #374151;
        }
        .tag-1 { background: #FEF2F2; color: #EF4444; }
        .tag-2 { background: #F5F3FF; color: #8B5CF6; }
        .tag-3 { background: #FEF9C3; color: #EAB308; }
        .tag-4 { background: #EFF6FF; color: #3B82F6; }

        .iwi-img-wrap {
          position: relative;
        }
        .iwi-img {
          width: 100%;
          max-width: 420px;
          height: auto;
          object-fit: contain;
          border-radius: 20px;
        }

        @media (max-width: 1024px) {
          .iwi-container { 
            flex-direction: column-reverse !important; 
            gap: 40px !important; 
            padding: 40px 5% 0 !important; 
          }
          .iwi-left, .iwi-right {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .iwi-title { font-size: 32px !important; text-align: center !important; }
          .iwi-desc { 
            font-size: 14px !important; 
            text-align: center !important; 
            max-width: 100%;
          }
          .iwi-img { transform: scale(1.15) !important; max-width: 90% !important; }
          .iwi-tags { justify-content: center !important; margin-top: 24px !important; }
          .iwi-section { padding-top: 20px !important; }
        }
      `}</style>

      {/* <section className="iwi-section hidden lg:block" ref={sectionRef}> ... </section> */}
    </>
  );
}
