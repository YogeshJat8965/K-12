import img1 from '../assets/21st century.png';
import img2 from '../assets/Personalised Learning.png';
import img3 from '../assets/Global Readiness.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const philData = [
  {
    id: '01',
    image: img1,
    title: '21st Century\nSkills',
    desc: 'Critical thinking, creativity, collaboration, and communication - built alongside technical AI proficiency in every programme'
  },
  {
    id: '02',
    image: img2,
    title: 'Personalised\nLearning',
    desc: 'Critical thinking, creativity, collaboration, and communication - built alongside technical AI proficiency in every programme'
  },
  {
    id: '03',
    image: img3,
    title: 'Global\nReadiness',
    desc: 'Critical thinking, creativity, collaboration, and communication - built alongside technical AI proficiency in every programme'
  }
];

export default function HomePhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Big quote word-by-word reveal
      if (quoteRef.current) {
        gsap.to('.hp-quote-word', {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 85%'
          },
          onComplete: () => {
            document.querySelectorAll('.hp-quote-highlight').forEach(el => {
              el.classList.add('shimmer');
            });
          }
        });
      }

      // 2. Eyebrow label & Heading 3D split
      if (headerRef.current) {


        gsap.to('.hp-title-char', {
          z: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.04,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%'
          }
        });
      }

      // 3. 3 philosophy cards alternating slide-in
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.hp-item');
        if (cards.length >= 3) {
          const t1 = gsap.from(cards[0], { x: -100, rotationY: -15, opacity: 0, duration: 1, ease: 'power3.out' });
          const t2 = gsap.from(cards[1], { y: 100, rotationX: 15, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
          const t3 = gsap.from(cards[2], { x: 100, rotationY: 15, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.4 });
          
          ScrollTrigger.create({
            trigger: gridRef.current,
            start: 'top 80%',
            animation: gsap.timeline().add(t1, 0).add(t2, 0).add(t3, 0)
          });
        }
        
        // Ken Burns image zoom
        gsap.to('.hp-img-wrap img', {
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%'
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .hp-section {
          width: 100%;
          background: linear-gradient(135deg, #FDFBFF 0%, #FFFFFF 15%);
          padding: 80px 0 100px;
          font-family: 'Poppins', sans-serif;
        }

        .hp-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Top Quote Section */
        .hp-quote {
          text-align: center;
          margin-bottom: 80px;
        }
        .hp-quote-text {
          font-weight: 700;
          font-size: 32px;
          color: #1A1A2E;
          line-height: 1.4;
          margin: 0;
        }
        .hp-quote-highlight {
          color: #7C3AED;
          background: linear-gradient(120deg, #7C3AED 0%, #a78bfa 50%, #7C3AED 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hp-quote-highlight.shimmer {
          animation: shimmerSweep 2s linear infinite;
        }
        @keyframes shimmerSweep {
          to { background-position: 200% center; }
        }

        /* Header */
        .hp-header {
          margin-bottom: 40px;
        }
        .hp-badge {
          display: inline-flex;
          background: #F3E8FF;
          color: #4338CA;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 20px;
          overflow: hidden;
          white-space: nowrap;
        }
        .hp-title {
          font-weight: 700;
          font-size: 42px;
          color: #1A1A2E;
          margin: 0;
        }

        /* Grid */
        .hp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        /* Item */
        .hp-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        /* Image */
        .hp-img-wrap {
          width: 140px;
          height: 140px;
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .hp-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.1);
        }

        /* Text */
        .hp-text-wrap {
          flex: 1;
        }
        .hp-item-title {
          font-weight: 700;
          font-size: 20px;
          color: #4338CA;
          margin: 0 0 10px;
          white-space: pre-line;
          line-height: 1.3;
        }
        .hp-item-desc {
          font-weight: 400;
          font-size: 13px;
          line-height: 1.5;
          color: #6B7280;
          margin: 0;
        }

        @media (max-width: 1200px) {
          .hp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .hp-grid {
            grid-template-columns: 1fr;
          }
          .hp-quote-text {
            font-size: 24px;
          }
          .hp-title {
            font-size: 36px;
          }
          .hp-item {
            text-align: left !important;
            align-items: flex-start !important;
          }
          .hp-text-wrap {
            text-align: left !important;
          }
          .hp-item-title, .hp-item-desc {
            text-align: left !important;
          }
        }
      `}</style>

      <section className="hp-section" ref={sectionRef}>
        <div className="hp-inner">
          
          <div className="hp-quote">
            <p className="hp-quote-text" ref={quoteRef}>
              {"Students Don't Just Learn Future Skills -".split(' ').map((w,i) => (
                <span key={'q1-'+i} className="hp-quote-word" style={{display:'inline-block', opacity:0, transform:'translateY(30px)', marginRight:'8px'}}>{w}</span>
              ))}
              <br />
              <span className="hp-quote-word" style={{display:'inline-block', opacity:0, transform:'translateY(30px)', marginRight:'8px'}}>They</span>
              <span className="hp-quote-word hp-quote-highlight" style={{display:'inline-block', opacity:0, transform:'translateY(30px)', marginRight:'8px'}}>Apply</span>
              <span className="hp-quote-word" style={{display:'inline-block', opacity:0, transform:'translateY(30px)', marginRight:'8px'}}>Them,</span>
              <span className="hp-quote-word hp-quote-highlight" style={{display:'inline-block', opacity:0, transform:'translateY(30px)', marginRight:'8px'}}>Prove</span>
              <span className="hp-quote-word" style={{display:'inline-block', opacity:0, transform:'translateY(30px)', marginRight:'8px'}}>Them,</span>
              <span className="hp-quote-word" style={{display:'inline-block', opacity:0, transform:'translateY(30px)', marginRight:'8px'}}>And</span>
              <span className="hp-quote-word hp-quote-highlight" style={{display:'inline-block', opacity:0, transform:'translateY(30px)', marginRight:'8px'}}>Grow</span>
              <span className="hp-quote-word" style={{display:'inline-block', opacity:0, transform:'translateY(30px)', marginRight:'8px'}}>Through</span>
              <span className="hp-quote-word" style={{display:'inline-block', opacity:0, transform:'translateY(30px)', marginRight:'8px'}}>Them.</span>
            </p>
          </div>

          <div className="hp-header" ref={headerRef} style={{ perspective: '1000px' }}>
            {/* <div className="hp-badge">HOW WE TEACH</div> */}
            <h2 className="hp-title">
              {"Our Learning Philosophy".split('').map((c, i) => (
                <span key={'t-'+i} className="hp-title-char" style={{display:'inline-block', opacity:0, transform:'translateZ(-200px)', filter:'blur(10px)'}}>
                  {c === ' ' ? '\u00A0' : c}
                </span>
              ))}
            </h2>
          </div>

          <div className="hp-grid" ref={gridRef} style={{ perspective: '1200px' }}>
            {philData.map((item) => (
              <div key={item.id} className="hp-item">
                <div className="hp-img-wrap">
                  <img src={item.image} alt={item.title.replace('\n', ' ')} />
                </div>
                <div className="hp-text-wrap">
                  <h3 className="hp-item-title">{item.title}</h3>
                  <p className="hp-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
