import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { icon: '/landing/stat-icon-1.svg', target: 150000, suffix: '', label: 'Students Impacted', fmt: true },
  { icon: '/landing/stat-icon-2.svg', target: 150, suffix: '+', label: 'Partner School', fmt: false },
  { icon: '/landing/stat-icon-3.svg', target: 100, suffix: '+', label: 'AI Projects', fmt: false },
  { icon: '/landing/stat-icon-4.svg', target: 700, suffix: '+', label: 'Educators Unskilled', fmt: false },
];

const regions = ['INDIA', 'UAE', 'USA', 'UK', 'SINGAPORE', 'AFRICA'];

function useCountUp(target: number, started: boolean, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(id); }
      else setVal(start);
    }, 16);
    return () => clearInterval(id);
  }, [started, target, duration]);
  return val;
}

export default function HomeTrusted() {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 80%',
        onEnter: () => setVisible(true),
        once: true
      });

      // Stats cards lift
      if (ref.current) {
        gsap.fromTo('.ht-card', 
          { y: 60, opacity: 0, boxShadow: '0px 0px 0px rgba(0,0,0,0)' },
          {
            y: 0,
            opacity: 1,
            boxShadow: '0px 1px 3px rgba(0,0,0,0.11)',
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%'
            }
          }
        );
      }

      // Map pins drop bounce
      gsap.from('.ht-pin', {
        y: -100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'bounce.out',
        scrollTrigger: {
          trigger: '.ht-map',
          start: 'top 60%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .ht-section {
          width: 100%;
          position: relative;
          background: url(/landing/trusted-bg.png) 0% 0% / cover no-repeat;
          font-family: 'Poppins', sans-serif;
          padding: clamp(60px,5vw,100px) clamp(20px,4vw,80px) clamp(48px,4vw,80px);
          box-sizing: border-box;
          overflow: hidden;
        }
        .ht-inner {
          max-width: 1640px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .ht-map {
          position: absolute;
          top: 0; right: 0;
          width: clamp(400px, 52vw, 1005px);
          height: auto;
          z-index: 1;
          pointer-events: none;
        }
        .ht-pin {
          position: absolute;
          width: 14px;
          height: 14px;
          background: #6C3CF7;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(108,60,247,0.3);
          z-index: 2;
        }
        .ht-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #6C3CF7;
          border-radius: 30px;
          padding: 7px 18px;
          margin-bottom: 24px;
        }
        .ht-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #fff;
        }
        .ht-badge span {
          font-weight: 700;
          font-size: clamp(9px, 0.65vw, 11px);
          letter-spacing: 2px;
          color: #fff;
          text-transform: uppercase;
        }
        .ht-h2 {
          font-weight: 800;
          font-size: 42px;
          line-height: 1.2;
          color: #1A1A2E;
          margin: 0 0 24px;
          max-width: 700px;
        }
        .ht-h2 .line1 { white-space: nowrap; }
        .ht-h2 .purple { display: block; color: #6C3CF7; }
        .ht-regions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
          margin-bottom: 20px;
        }
        .ht-regions span {
          font-weight: 500;
          font-size: clamp(11px, 0.8vw, 14px);
          letter-spacing: 2px;
          color: #9CA3AF;
        }
        .ht-dot-sep {
          display: inline-block;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #D1D5DB;
          vertical-align: middle;
          margin: 0 4px;
        }
        .ht-stats {
          display: flex;
          gap: 24px;
          margin-top: clamp(60px, 6vw, 120px);
          margin-bottom: clamp(60px, 6vw, 100px);
        }
        .ht-card {
          flex: 1;
          background: #fff;
          border: 1px solid #DCE2E2;
          border-radius: 16px;
          box-shadow: 0px 1px 3px rgba(0,0,0,0.11);
          padding: clamp(24px, 2vw, 36px) clamp(20px, 2vw, 32px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ht-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 12px 30px rgba(108,60,247,0.15) !important;
          border-color: rgba(108,60,247,0.3);
        }
        .ht-card-icon {
          width: 60px; height: 60px;
          margin-bottom: 20px;
          object-fit: contain;
        }
        .ht-card-num {
          font-weight: 800;
          font-size: clamp(28px, 2.5vw, 44px);
          color: #1A1A2E;
          margin: 0 0 4px;
          line-height: 1.1;
        }
        .ht-card-label {
          font-weight: 400;
          font-size: clamp(12px, 0.85vw, 15px);
          color: #9CA3AF;
          margin: 0;
        }
        .ht-partners-title {
          text-align: center;
          font-weight: 700;
          font-size: clamp(12px, 0.9vw, 15px);
          letter-spacing: 3px;
          color: #6C3CF7;
          text-transform: uppercase;
          margin: 0 0 32px;
        }
        .ht-logos {
          display: flex;
          gap: 16px;
          justify-content: center;
        }
        .ht-logo-box {
          flex: 0 1 200px;
          height: 80px;
          background: #F7F8FA;
          border-radius: 12px;
        }
        @media (max-width: 1000px) {
          .ht-stats { flex-wrap: wrap; }
          .ht-card { flex: 1 1 calc(50% - 12px); }
          .ht-map { width: 60vw; opacity: 0.4; }
        }
        @media (max-width: 600px) {
          .ht-card { flex: 1 1 100%; }
          .ht-map { display: none; }
          .ht-logos { flex-wrap: wrap; }
          .ht-logo-box { flex: 1 1 calc(50% - 8px); }
        }
      `}</style>

      <section className="ht-section" ref={sectionRef}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: 'clamp(400px, 52vw, 1005px)', height: '100%', pointerEvents: 'none' }}>
          <img src="/landing/world-map.png" alt="" className="ht-map" style={{ position: 'relative', width: '100%' }} />
          {/* Fake Pins for visual animation */}
          <div className="ht-pin" style={{ top: '35%', left: '20%' }} />
          <div className="ht-pin" style={{ top: '25%', left: '45%' }} />
          <div className="ht-pin" style={{ top: '45%', left: '55%' }} />
          <div className="ht-pin" style={{ top: '55%', left: '70%' }} />
          <div className="ht-pin" style={{ top: '65%', left: '75%' }} />
        </div>

        <div className="ht-inner">
          <div className="ht-badge">
            <div className="ht-badge-dot" />
            <span>Trusted Globally</span>
          </div>

          <h2 className="ht-h2">
            <span className="line1">Building the Future of K-12,</span>
            <span className="purple">Across Six Regions</span>
          </h2>

          <div className="ht-regions">
            {regions.map((r, i) => (
              <span key={r}>
                {r}
                {i < regions.length - 1 && <span className="ht-dot-sep" />}
              </span>
            ))}
          </div>

          {/* Stat cards with count-up */}
          <div className="ht-stats" ref={ref}>
            {statsData.map(s => (
              <StatCard key={s.label} data={s} started={visible} />
            ))}
          </div>

          <p className="ht-partners-title">Trusted Partners and Framework</p>
          <div className="ht-logos">
            {[1, 2, 3, 4, 5].map(i => <div className="ht-logo-box" key={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function StatCard({ data, started }: { data: typeof statsData[0]; started: boolean }) {
  const count = useCountUp(data.target, started);
  const display = data.fmt ? count.toLocaleString() : count.toString();
  return (
    <div className="ht-card">
      <img src={data.icon} alt={data.label} className="ht-card-icon" />
      <p className="ht-card-num">{display}{data.suffix}</p>
      <p className="ht-card-label">{data.label}</p>
    </div>
  );
}
