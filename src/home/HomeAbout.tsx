import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LEFT_IMG from '../assets/landing page/Homepage (1920x 1080px) – 2/ChatGPT Image Jun 20, 2026, 12_44_07 AM.png';

gsap.registerPlugin(ScrollTrigger);

export default function HomeAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {
      // Eyebrow label width animation
      if (labelRef.current) {
        gsap.from(labelRef.current, {
          scaleX: 0,
          transformOrigin: 'left center',
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        });
      }

      // Image 3D tilt reveal + glowing purple border
      if (imgRef.current) {
        gsap.fromTo(imgRef.current,
          { rotationY: -30, scale: 0.9, opacity: 0, boxShadow: '0 0 0px rgba(108, 43, 217, 0)' },
          {
            rotationY: 0,
            scale: 1,
            opacity: 1,
            boxShadow: '0 0 30px 5px rgba(108, 43, 217, 0.4)',
            duration: 1.2,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            }
          }
        );
      }

      // Paragraphs stagger
      if (textRef.current) {
        const paragraphs = textRef.current.querySelectorAll('p');
        gsap.from(paragraphs, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .ha-section {
          width: 100%;
          background: #ffffff;
          padding: clamp(60px, 8vw, 120px) 0;
          font-family: 'Poppins', sans-serif;
          position: relative;
        }

        .ha-inner {
          max-width: 1760px;
          margin: 0 auto;
          padding: 0 80px;
          display: flex;
          align-items: center;
          gap: 80px;
        }

        .ha-left {
          flex: 0 0 45%;
          max-width: 45%;
          display: flex;
          justify-content: flex-start;
        }

        .ha-left img {
          width: 100%;
          height: auto;
          border-radius: 24px;
          object-fit: cover;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
        }

        .ha-right {
          flex: 0 0 55%;
          max-width: 55%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .ha-label {
          color: #6C3CF7;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }

        .ha-h2 {
          font-weight: 800;
          font-size: 42px;
          line-height: 1.12;
          color: #1A1A2E;
          margin: 0 0 32px;
          letter-spacing: -0.5px;
        }

        .ha-content {
          font-weight: 400;
          font-size: 16px;
          line-height: 1.6;
          color: #374151;
        }

        .ha-content p {
          margin-bottom: 18px;
        }
        
        .ha-content p:last-child {
          margin-bottom: 0;
        }

        .ha-purple {
          color: #6C3CF7;
        }

        @media (max-width: 1100px) {
          .ha-inner {
            flex-direction: column;
            padding: 0 48px;
          }
          .ha-left, .ha-right {
            max-width: 100%;
            width: 100%;
            flex: none;
          }
          .ha-left {
            justify-content: center;
            margin-bottom: 40px;
          }
        }

        @media (max-width: 600px) {
          .ha-section {
            padding: 60px 0;
          }
          .ha-inner {
            padding: 0 20px;
            gap: 40px;
          }
          .ha-left img {
            border-radius: 16px;
          }
          .ha-h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="ha-section" ref={sectionRef}>
        <div className="ha-inner">
          <div className="ha-left" style={{ perspective: '1000px' }}>
            <img src={LEFT_IMG} alt="Student learning on tablet" ref={imgRef} />
          </div>

          <div className="ha-right">
            <span className="ha-label" ref={labelRef} style={{ display: 'inline-block' }}>ABOUT US</span>

            <h2 className="ha-h2">
              A <span style={{ margin: '0 6px', display: 'inline-block' }}>K-12</span> Platform Built For An AI-First World
            </h2>

            <div className="ha-content" ref={textRef}>
              <p>
                Skill Studio is the next-generation K-12  learning platform preparing students, educators, and schools for an AI-powered economy. We combine cognitive science, real-world skill-building, and intelligent learning systems powered by <span className="ha-purple">Vedya AI</span> to equip young minds with the future-ready capabilities they need to lead with confidence.
              </p>
              <p>
                In a world where change is constant, textbooks alone are no longer enough. Students must master future skills - creativity, critical thinking, digital & fluency, and ethical AI awareness to thrive globally.
              </p>
              <p>
                From AI-powered upskilling and role-based virtual internships to whole-school transformation programmes, we make future-forward education accessible, measurable, and actionable for every classroom, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
