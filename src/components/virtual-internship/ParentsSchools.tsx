import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Users, ShieldCheck, Clock, Briefcase, Lock, TrendingUp,
  School, FileCheck, BarChart3, Presentation, Award
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ParentsSchools() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.ps-header-elem', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });

      // Left Column Items
      if (leftColRef.current) {
        const leftItems = leftColRef.current.querySelectorAll('.ps-item, .ps-col-header');
        gsap.from(leftItems, {
          y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: leftColRef.current, start: 'top 80%' }
        });
      }

      // Right Column Items
      if (rightColRef.current) {
        const rightItems = rightColRef.current.querySelectorAll('.ps-item, .ps-col-header');
        gsap.from(rightItems, {
          y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: rightColRef.current, start: 'top 80%' }
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const parentsItems = [
    { icon: <ShieldCheck size={24} />, text: "Early career exposure - risk-free, structured, and age-appropriate." },
    { icon: <Clock size={24} />, text: "Productive use of time beyond academics." },
    { icon: <Briefcase size={24} />, text: "Strong portfolio that supports college admissions." },
    { icon: <Lock size={24} />, text: "Safe, monitored digital environment with parent dashboard." },
    { icon: <TrendingUp size={24} />, text: "Regular progress updates and milestone celebrations." }
  ];

  const schoolsItems = [
    { icon: <FileCheck size={24} />, text: "Full alignment with NEP 2020 and skill-based education mandates." },
    { icon: <Users size={24} />, text: "Cohort-based implementation across grades and sections." },
    { icon: <BarChart3 size={24} />, text: "Teacher dashboards with cohort progress and outcome analytics." },
    { icon: <Presentation size={24} />, text: "Student showcase opportunities and capstone presentations." },
    { icon: <Award size={24} />, text: "Co-branded internship certification recognising your institution." }
  ];

  return (
    <>
      <style>{`
        .ps-section {
          width: 100%;
          padding: 100px 40px;
          background-color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .ps-container {
          max-width: 1280px; 
          width: 100%;
          margin: 0 auto;
        }

        /* ─── HEADER ─── */
        .ps-header-wrap {
          text-align: center;
          margin-bottom: 60px;
        }
        .ps-header {
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 800;
          color: #1A1A2E;
          margin: 0 0 16px;
          letter-spacing: -1px;
        }
        .ps-header .purple { color: #6C3CF7; }
        .ps-line {
          width: 60px;
          height: 3px;
          background-color: #6C3CF7;
          border-radius: 4px;
          margin: 0 auto;
        }

        /* ─── COLUMNS ─── */
        .ps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          justify-content: center;
          margin: 0 auto;
        }

        /* Column Containers */
        .ps-col {
          border-radius: 24px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: stretch;
          overflow: hidden;
        }
        .ps-col-parents {
          background-color: #FFF7E6; /* Slightly stronger orange/yellow */
          border: 1px solid #FDE047;
        }
        .ps-col-schools {
          background-color: #F0F2FF; /* Slightly stronger purple */
          border: 1px solid #C7D2FE;
        }

        /* Column Header */
        .ps-col-header {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          margin-bottom: 8px;
          width: auto;
          box-sizing: border-box;
          margin: 0;
        }
        .ps-main-icon-box {
          width: 72px; height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ps-col-parents .ps-main-icon-box {
          background: #FEF3C7;
          color: #F59E0B;
        }
        .ps-col-schools .ps-main-icon-box {
          background: #EDE9FE;
          color: #6C3CF7;
        }
        
        .ps-col-title {
          font-size: 24px;
          font-weight: 800;
          color: #1A1A2E;
          margin: 0 0 4px;
          letter-spacing: -0.5px;
        }
        .ps-col-subtitle {
          font-size: 15px;
          font-style: italic;
          margin: 0;
          font-weight: 500;
        }
        .ps-col-parents .ps-col-subtitle { color: #F59E0B; }
        .ps-col-schools .ps-col-subtitle { color: #6C3CF7; }

        /* Items */
        .ps-item {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: auto;
          box-sizing: border-box;
          margin: 0;
        }
        .ps-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.05);
        }

        .ps-item-icon-box {
          width: 48px; height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ps-col-parents .ps-item-icon-box {
          background: #FFFBEB;
          color: #F59E0B;
        }
        .ps-col-schools .ps-item-icon-box {
          background: #F5F3FF;
          color: #6C3CF7;
        }

        .ps-item-text {
          font-size: 15px;
          color: #4B5563;
          line-height: 1.5;
          margin: 0;
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .ps-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 600px) {
          .ps-section { padding: 60px 20px; }
          .ps-col { padding: 20px; }
          .ps-col-header { flex-direction: column; text-align: center; padding: 24px 16px; }
          .ps-item { padding: 16px; }
        }
      `}</style>

      <section className="ps-section" ref={sectionRef}>
        <div className="ps-container">

          <div className="ps-header-wrap">
            <h2 className="ps-header ps-header-elem">
              For <span className="purple">Parents & Schools</span>
            </h2>
            <div className="ps-line ps-header-elem"></div>
          </div>

          <div className="ps-grid">

            {/* PARENTS COLUMN */}
            <div className="ps-col ps-col-parents" ref={leftColRef}>
              <div className="ps-col-header">
                <div className="ps-main-icon-box">
                  <Users size={32} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="ps-col-title">For Parents</h3>
                  <p className="ps-col-subtitle">A meaningful investment in your child's future</p>
                </div>
              </div>

              {parentsItems.map((item, idx) => (
                <div key={idx} className="ps-item">
                  <div className="ps-item-icon-box">
                    {item.icon}
                  </div>
                  <p className="ps-item-text">{item.text}</p>
                </div>
              ))}
            </div>

            {/* SCHOOLS COLUMN */}
            <div className="ps-col ps-col-schools" ref={rightColRef}>
              <div className="ps-col-header">
                <div className="ps-main-icon-box">
                  <School size={32} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="ps-col-title">For Schools & Educators</h3>
                  <p className="ps-col-subtitle">Experiential learning at scale, aligned to NEP 2020</p>
                </div>
              </div>

              {schoolsItems.map((item, idx) => (
                <div key={idx} className="ps-item">
                  <div className="ps-item-icon-box">
                    {item.icon}
                  </div>
                  <p className="ps-item-text">{item.text}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
