import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Users, ShieldCheck, Clock, Briefcase, Lock, TrendingUp,
  School, FileCheck, BarChart3, Presentation, Award, ArrowRight
} from 'lucide-react';

import parentsImg from '../../assets/virtual internship/girl_image.png';
import schoolsImg from '../../assets/virtual internship/1img.png';

gsap.registerPlugin(ScrollTrigger);

export default function ParentsSchools() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<'parents' | 'schools'>('parents');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ps-header-elem', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const parentsItems = [
    { icon: <ShieldCheck size={20} strokeWidth={2.5} />, text: "Early career exposure - risk-free, structured, and age-appropriate." },
    { icon: <Clock size={20} strokeWidth={2.5} />, text: "Productive use of time beyond academics." },
    { icon: <Briefcase size={20} strokeWidth={2.5} />, text: "Strong portfolio that supports college admissions." },
    { icon: <Lock size={20} strokeWidth={2.5} />, text: "Safe, monitored digital environment with parent dashboard." },
    { icon: <TrendingUp size={20} strokeWidth={2.5} />, text: "Regular progress updates and milestone celebrations." }
  ];

  const schoolsItems = [
    { icon: <FileCheck size={20} strokeWidth={2.5} />, text: "Full alignment with NEP 2020 and skill-based education mandates." },
    { icon: <Users size={20} strokeWidth={2.5} />, text: "Cohort-based implementation across grades and sections." },
    { icon: <BarChart3 size={20} strokeWidth={2.5} />, text: "Teacher dashboards with cohort progress and outcome analytics." },
    { icon: <Presentation size={20} strokeWidth={2.5} />, text: "Student showcase opportunities and capstone presentations." },
    { icon: <Award size={20} strokeWidth={2.5} />, text: "Co-branded internship certification recognising your institution." }
  ];

  return (
    <>
      <style>{`
        .ps-section {
          width: 100%;
          padding: 100px 40px;
          background-color: #FAFAFD;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .ps-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }

        /* Tabs Container */
        .ps-tabs-box {
          background: #FFFFFF;
          border-radius: 40px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          border: 1px solid #F1F3F9;
          overflow: hidden;
          position: relative;
        }

        /* Tab Switcher */
        .ps-tab-header {
          display: flex;
          border-bottom: 1px solid #F1F3F9;
        }
        .ps-tab-btn {
          flex: 1;
          padding: 24px;
          font-size: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .ps-tab-btn.active.parents {
          color: #2563EB;
          background: rgba(37, 99, 235, 0.04);
        }
        .ps-tab-btn.active.schools {
          color: #6C3CF7;
          background: rgba(108, 60, 247, 0.04);
        }
        .ps-tab-btn:not(.active) {
          color: #9CA3AF;
        }
        .ps-tab-btn:not(.active):hover {
          color: #6B7280;
          background: #F9FAFB;
        }
        .ps-tab-divider {
          width: 1px;
          background: #F1F3F9;
        }

        /* Content Area */
        .ps-content-area {
          padding: 50px 60px;
          position: relative;
          overflow: hidden;
        }
        
        /* Decorative Background Blob */
        .ps-bg-blob {
          position: absolute;
          top: -100px; right: -100px;
          width: 600px; height: 600px;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          transition: background 0.8s ease;
          opacity: 0.6;
          z-index: 0;
        }
        .ps-bg-blob.parents { background: rgba(37, 99, 235, 0.1); }
        .ps-bg-blob.schools { background: rgba(108, 60, 247, 0.1); }

        /* Two column layout */
        .ps-content-grid {
          display: flex;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
          animation: fadeSlideIn 0.5s ease-out;
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ps-left-col { flex: 1; }
        .ps-right-col { flex: 1; position: relative; }

        .ps-title {
          font-size: 32px;
          font-weight: 800;
          color: #1A1A2E;
          margin: 0 0 32px;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .ps-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ps-list-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .ps-list-icon {
          width: 28px; height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .parents .ps-list-icon { background: #EFF6FF; color: #3B82F6; border: 1px solid #DBEAFE; }
        .schools .ps-list-icon { background: #F5F3FF; color: #6C3CF7; border: 1px solid #EDE9FE; }
        
        .ps-list-text {
          font-size: 16px;
          color: #4B5563;
          line-height: 1.5;
          margin: 0;
          font-weight: 500;
        }

        .ps-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 700;
          margin-top: 40px;
          text-decoration: none;
          transition: gap 0.3s ease;
        }
        .parents .ps-cta-link { color: #2563EB; }
        .schools .ps-cta-link { color: #6C3CF7; }
        .ps-cta-link:hover { gap: 12px; }

        /* Right Column Image */
        .ps-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 32px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .ps-content-grid { flex-direction: column; gap: 40px; }
          .ps-content-area { padding: 40px 30px; }
          .ps-image { height: 350px; }
        }
        @media (max-width: 600px) {
          .ps-section { padding: 60px 20px; }
          .ps-tab-btn { font-size: 16px; padding: 16px; }
          .ps-content-area { padding: 30px 20px; }
          .ps-title { font-size: 26px; }
          .ps-list-text { font-size: 15px; }
          .ps-image { height: 250px; border-radius: 20px; }
        }
      `}</style>

      <section className="ps-section" ref={sectionRef}>
        <div className="ps-container">

          <div className="ps-tabs-box ps-header-elem">
            
            {/* Header Tabs */}
            <div className="ps-tab-header">
              <button 
                className={`ps-tab-btn parents ${activeTab === 'parents' ? 'active' : ''}`}
                onClick={() => setActiveTab('parents')}
              >
                For Parents
              </button>
              <div className="ps-tab-divider"></div>
              <button 
                className={`ps-tab-btn schools ${activeTab === 'schools' ? 'active' : ''}`}
                onClick={() => setActiveTab('schools')}
              >
                For Schools
              </button>
            </div>

            {/* Content Area */}
            <div className="ps-content-area">
              <div className={`ps-bg-blob ${activeTab}`}></div>

              {activeTab === 'parents' && (
                <div className="ps-content-grid parents">
                  <div className="ps-left-col">
                    <h3 className="ps-title">A meaningful investment in your child's future</h3>
                    
                    <div className="ps-list">
                      {parentsItems.map((item, idx) => (
                        <div key={idx} className="ps-list-item">
                          <div className="ps-list-icon">{item.icon}</div>
                          <p className="ps-list-text">{item.text}</p>
                        </div>
                      ))}
                    </div>

                    <a href="#" className="ps-cta-link">
                      View Parent Dashboard <ArrowRight size={18} strokeWidth={2.5} />
                    </a>
                  </div>
                  <div className="ps-right-col">
                    <img src={parentsImg} alt="For Parents" className="ps-image" />
                  </div>
                </div>
              )}

              {activeTab === 'schools' && (
                <div className="ps-content-grid schools">
                  <div className="ps-left-col">
                    <h3 className="ps-title">Experiential learning at scale, aligned to NEP 2020</h3>
                    
                    <div className="ps-list">
                      {schoolsItems.map((item, idx) => (
                        <div key={idx} className="ps-list-item">
                          <div className="ps-list-icon">{item.icon}</div>
                          <p className="ps-list-text">{item.text}</p>
                        </div>
                      ))}
                    </div>

                    <a href="#" className="ps-cta-link">
                      Request School Demo <ArrowRight size={18} strokeWidth={2.5} />
                    </a>
                  </div>
                  <div className="ps-right-col">
                    <img src={schoolsImg} alt="For Schools" className="ps-image" />
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
