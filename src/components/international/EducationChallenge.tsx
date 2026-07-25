import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  BarChart, 
  Link, 
  Folder, 
  User, 
  Monitor, 
  TrendingUp,
  Bot,
  Settings,
  Globe,
  Leaf,
  Users,
  Rocket,
  BarChart3
} from 'lucide-react';

import img1 from '../../assets/International Studio/traditional.png';
import img2 from '../../assets/International Studio/future-reay.png';

gsap.registerPlugin(ScrollTrigger);

export default function EducationChallenge() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<'traditional' | 'future'>('traditional');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ec-header-elem', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const traditionalItems = [
    { icon: <BarChart size={20} strokeWidth={2.5} />, text: "Measurable outcomes" },
    { icon: <Link size={20} strokeWidth={2.5} />, text: "Interdisciplinary integration" },
    { icon: <Folder size={20} strokeWidth={2.5} />, text: "Portfolio development" },
    { icon: <User size={20} strokeWidth={2.5} />, text: "Career awareness" },
    { icon: <Monitor size={20} strokeWidth={2.5} />, text: "Technology fluency" },
    { icon: <TrendingUp size={20} strokeWidth={2.5} />, text: "Structured skill progression" }
  ];

  const futureItems = [
    { icon: <Bot size={20} strokeWidth={2.5} />, text: "Artificial Intelligence" },
    { icon: <Settings size={20} strokeWidth={2.5} />, text: "Automation" },
    { icon: <Globe size={20} strokeWidth={2.5} />, text: "Digital Transformation" },
    { icon: <Leaf size={20} strokeWidth={2.5} />, text: "Climate Innovation" },
    { icon: <Users size={20} strokeWidth={2.5} />, text: "Global Collaboration" },
    { icon: <Rocket size={20} strokeWidth={2.5} />, text: "Creative Technologies" }
  ];

  return (
    <>
      <style>{`
        .ec-section {
          width: 100%;
          padding: 40px 40px;
          background-color: #F5F3FF;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .ec-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }

        /* Tabs Container */
        .ec-tabs-box {
          background: #FFFFFF;
          border-radius: 40px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          border: 1px solid #F1F3F9;
          overflow: hidden;
          position: relative;
        }

        /* Tab Switcher */
        .ec-tab-header {
          display: flex;
          border-bottom: 1px solid #F1F3F9;
        }
        .ec-tab-btn {
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
        .ec-tab-btn.active.traditional {
          color: #EF4444;
          background: rgba(239, 68, 68, 0.04);
        }
        .ec-tab-btn.active.future {
          color: #3B82F6;
          background: rgba(59, 130, 246, 0.04);
        }
        .ec-tab-btn:not(.active) {
          color: #9CA3AF;
        }
        .ec-tab-btn:not(.active):hover {
          color: #6B7280;
          background: #F9FAFB;
        }
        .ec-tab-divider {
          width: 1px;
          background: #F1F3F9;
        }

        /* Content Area */
        .ec-content-area {
          padding: 50px 60px;
          position: relative;
          overflow: hidden;
        }
        
        /* Decorative Background Blob */
        .ec-bg-blob {
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
        .ec-bg-blob.traditional { background: rgba(239, 68, 68, 0.1); }
        .ec-bg-blob.future { background: rgba(59, 130, 246, 0.1); }

        /* Two column layout */
        .ec-content-grid {
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

        .ec-left-col { flex: 1; }
        .ec-right-col { flex: 1; position: relative; }

        .ec-title {
          font-size: 32px;
          font-weight: 800;
          color: #1A1A2E;
          margin: 0 0 32px;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .ec-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ec-list-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .ec-list-icon {
          width: 28px; height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .traditional .ec-list-icon { background: #FEF2F2; color: #EF4444; border: 1px solid #FEE2E2; }
        .future .ec-list-icon { background: #EFF6FF; color: #3B82F6; border: 1px solid #DBEAFE; }
        
        .ec-list-text {
          font-size: 16px;
          color: #4B5563;
          line-height: 1.5;
          margin: 0;
          font-weight: 500;
        }

        /* Right Column Image */
        .ec-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 32px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .ec-content-grid { flex-direction: column; gap: 40px; }
          .ec-content-area { padding: 40px 30px; }
          .ec-image { height: 350px; }
        }
        @media (max-width: 600px) {
          .ec-section { padding: 40px 16px; }
          .ec-tab-btn { font-size: 16px; padding: 16px; }
          .ec-content-area { padding: 30px 20px; }
          .ec-title { font-size: 26px; }
          .ec-list-text { font-size: 15px; }
          .ec-image { height: 250px; border-radius: 20px; }
        }
      `}</style>

      <section className="ec-section" ref={sectionRef}>
        <div className="ec-container">
          
          <div className="text-center mb-8 md:mb-8 ec-header-elem">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A2E] leading-tight mb-4">
              The Educational Challenge
            </h2>
            <div className="w-16 h-1 bg-[#2563EB] mx-auto rounded-full"></div>
          </div>

          <div className="ec-tabs-box ec-header-elem">
            
            {/* Header Tabs */}
            <div className="ec-tab-header">
              <button 
                className={`ec-tab-btn traditional ${activeTab === 'traditional' ? 'active' : ''}`}
                onClick={() => setActiveTab('traditional')}
              >
                Traditional Enrichment
              </button>
              <div className="ec-tab-divider"></div>
              <button 
                className={`ec-tab-btn future ${activeTab === 'future' ? 'active' : ''}`}
                onClick={() => setActiveTab('future')}
              >
                Future-Ready World
              </button>
            </div>

            {/* Content Area */}
            <div className="ec-content-area">
              <div className={`ec-bg-blob ${activeTab}`}></div>

              {activeTab === 'traditional' && (
                <div className="ec-content-grid traditional">
                  <div className="ec-left-col">
                    <h3 className="ec-title">Many traditional enrichment activities lack</h3>
                    
                    <div className="ec-list">
                      {traditionalItems.map((item, idx) => (
                        <div key={idx} className="ec-list-item">
                          <div className="ec-list-icon">{item.icon}</div>
                          <p className="ec-list-text">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ec-right-col">
                    <img src={img1} alt="Traditional Challenges" className="ec-image" />
                  </div>
                </div>
              )}

              {activeTab === 'future' && (
                <div className="ec-content-grid future">
                  <div className="ec-left-col">
                    <h3 className="ec-title">At the same time, students are entering a world shaped by</h3>
                    
                    <div className="ec-list">
                      {futureItems.map((item, idx) => (
                        <div key={idx} className="ec-list-item">
                          <div className="ec-list-icon">{item.icon}</div>
                          <p className="ec-list-text">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ec-right-col">
                    <img src={img2} alt="Future World" className="ec-image" />
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Bottom Banner */}
          <div className="w-full bg-[#F8FAFC] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 mt-8 shadow-sm border border-blue-50 relative z-10 ec-header-elem">
            <div className="shrink-0">
              <BarChart3 className="w-10 h-10 text-[#3B82F6]" strokeWidth={1.5} />
            </div>
            <p className="text-[#1A1A2E] text-[15px] font-semibold leading-relaxed md:text-left text-center max-w-[900px]">
              Skillzza Studios Are Designed To Help Schools Prepare Students For This Rapidly Evolving Future Through Applied Learning Experiences Aligned With Global Education Trends.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
