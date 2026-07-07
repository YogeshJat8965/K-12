import { GraduationCap, Pencil, Rocket, ShieldCheck, Crown } from 'lucide-react';
import img1 from '../assets/1img.png';
import img2 from '../assets/2img.png';
import img3 from '../assets/3img.png';
import img4 from '../assets/4img.png';
import img5 from '../assets/5img.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    id: '01',
    image: img1,
    icon: <GraduationCap size={16} strokeWidth={2} />,
    title: 'Learn',
    desc: 'Discover future skills through engaging learning experiences.',
    color: '#6C3CF7'
  },
  {
    id: '02',
    image: img2,
    icon: <Pencil size={16} strokeWidth={2} />,
    title: 'Practice',
    desc: 'Apply concepts through hands-on projects and real-world tasks.',
    color: '#6C3CF7'
  },
  {
    id: '03',
    image: img3,
    icon: <Rocket size={16} strokeWidth={2} />,
    title: 'Build',
    desc: 'Build innovative solutions and bring your ideas to life.',
    color: '#6C3CF7'
  },
  {
    id: '04',
    image: img4,
    icon: <ShieldCheck size={16} strokeWidth={2} />,
    title: 'Validate',
    desc: 'Test, measure, and refine your skills with data-driven insights.',
    color: '#6C3CF7'
  },
  {
    id: '05',
    image: img5,
    icon: <Crown size={16} strokeWidth={2} />,
    title: 'Lead',
    desc: 'Earn recognition, inspire others, and become a future-ready leader.',
    color: '#6C3CF7'
  }
];

export default function HomeJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        // Top title
        gsap.from('.hj-top-title', {
          opacity: 0,
          filter: 'blur(12px)',
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%'
          }
        });

        // Words and arrows
        gsap.from('.hj-flow-item', {
          opacity: 0,
          rotationY: 90,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%'
          }
        });
      }

      if (gridRef.current) {
        gsap.from('.hj-card', {
          y: 80,
          rotationX: -15,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%'
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <>
      <style>{`
        .hj-section {
          width: 100%;
          background: linear-gradient(120deg, #FFFFFF 0%, #FFFFFF 40%, #F5EEFF 65%, #EDE3FF 85%, #E8D5FF 100%);
          padding: 100px 0 120px;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }
        .hj-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Header */
        .hj-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .hj-top-title {
          font-weight: 700;
          font-size: 22px;
          color: #1A1A2E;
          margin: 0 0 8px;
          letter-spacing: 0.2px;
        }
        .hj-flow-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .hj-flow-word {
          font-weight: 800;
          font-size: 42px;
          font-style: normal;
          color: #6C3CF7;
          line-height: 1.15;
        }
        .hj-flow-arrow {
          font-size: 40px;
          color: #4B5563;
          font-weight: 300;
          font-style: normal;
          line-height: 1;
          transform: translateY(-4px);
        }

        /* 5 Card Grid */
        .hj-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          align-items: stretch;
        }

        /* Card */
        .hj-card {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 20px 22px 22px;
          box-shadow: 0 2px 20px rgba(124, 58, 237, 0.06);
          border: 1px solid rgba(229, 231, 235, 0.6);
          display: flex;
          flex-direction: column;
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
          transition: box-shadow 0.3s ease;
        }
        .hj-card:hover {
          box-shadow: 0 0 20px 2px rgba(108,60,247,0.3);
        }

        /* Image */
        .hj-img-wrap {
          width: 100%;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
          margin-bottom: 24px;
        }
        @keyframes float-loop {
          0% { transform: translateY(0px) scale(2.2); }
          50% { transform: translateY(-10px) scale(2.2); }
          100% { transform: translateY(0px) scale(2.2); }
        }

        .hj-img-wrap img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transform: scale(2.2);
          transform-origin: center;
          animation: float-loop 4s ease-in-out infinite;
        }

        .hj-card:nth-child(1) .hj-img-wrap img { animation-delay: 0s; }
        .hj-card:nth-child(2) .hj-img-wrap img { animation-delay: -0.8s; }
        .hj-card:nth-child(3) .hj-img-wrap img { animation-delay: -1.6s; }
        .hj-card:nth-child(4) .hj-img-wrap img { animation-delay: -2.4s; }
        .hj-card:nth-child(5) .hj-img-wrap img { animation-delay: -3.2s; }

        /* Bottom */
        .hj-card-bottom {
          display: flex;
          flex-direction: column;
        }
        .hj-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }
        .hj-title-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }
        .hj-card-title {
          font-weight: 700;
          font-size: 17px;
          text-decoration: none;
        }
        .hj-card-desc {
          font-weight: 400;
          font-size: 13px;
          line-height: 1.55;
          color: #374151;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .hj-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .hj-grid { grid-template-columns: repeat(2, 1fr); }
          .hj-flow-row { gap: 10px; }
        }
        @media (max-width: 500px) {
          .hj-grid { grid-template-columns: 1fr; }
          .hj-section { padding: 60px 0 80px; }
          .hj-flow-word { font-size: 24px; }
          .hj-flow-arrow { font-size: 20px; }
        }
      `}</style>

      <section className="hj-section" ref={sectionRef}>
        <div className="hj-inner">
          
          {/* Header */}
          <div className="hj-header" ref={headerRef} style={{ perspective: '1000px' }}>
            <p className="hj-top-title">The Skillzza Learning Journey</p>
            <div className="hj-flow-row">
              <span className="hj-flow-word hj-flow-item">Learn</span>
              <span className="hj-flow-arrow hj-flow-item">→</span>
              <span className="hj-flow-word hj-flow-item">Practice</span>
              <span className="hj-flow-arrow hj-flow-item">→</span>
              <span className="hj-flow-word hj-flow-item">Build</span>
              <span className="hj-flow-arrow hj-flow-item">→</span>
              <span className="hj-flow-word hj-flow-item">Validate</span>
              <span className="hj-flow-arrow hj-flow-item">→</span>
              <span className="hj-flow-word hj-flow-item">Lead</span>
            </div>
          </div>

          {/* Cards */}
          <div className="hj-grid" ref={gridRef} style={{ perspective: '1200px' }}>
            {journeyData.map((item) => (
              <div 
                className="hj-card" 
                key={item.id}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="hj-img-wrap" style={{ transform: 'translateZ(30px)' }}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="hj-card-bottom" style={{ transform: 'translateZ(20px)' }}>
                  <div className="hj-title-row">
                    <span className="hj-card-title" style={{ color: item.color }}>{item.title}</span>
                  </div>
                  <p className="hj-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
