import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import heroImg from '../../assets/university/heroimg.png';

export default function UniversityHero() {
  return (
    <section className="relative w-full bg-white font-poppins pt-24 lg:pt-32 pb-10 lg:pb-16 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] bg-purple-100/50 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] bg-purple-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1536px] mx-auto px-8 md:px-20 relative z-10">
        
        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 mb-12 lg:mb-20">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col items-start text-left relative z-20">
            <p className="text-[#7C3AED] font-bold text-[11px] tracking-widest uppercase mb-4">
              Adobe Digital Creativity & AI Skills Centre • Higher Education
            </p>
            
            <h1 className="text-[36px] md:text-[40px] lg:text-[54px] font-extrabold text-[#1A1A2E] leading-[1.15] tracking-tight mb-6">
              Build India's Future<br />
              Workforce Through<br />
              <span className="relative inline-block text-[#7C3AED]">
                Creativity
                {/* Thick purple underline offset */}
                {/* <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-[#7C3AED] rounded-full"></span> */}
              </span>{' '}
              & <span className="text-[#EA1F15]">AI</span>
            </h1>
            
            <p className="text-gray-600 font-medium text-[14px] lg:text-[15px] leading-relaxed max-w-full lg:max-w-[90%] mb-8">
              Empower Your University With Adobe's Industry-Recognised Curriculum, 
              Licensed Creative Cloud Tools, AI-Powered Learning, And Professional 
              Certifications - Helping Students Become Creative Thinkers, Digital 
              Innovators, And Career-Ready Professionals.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 w-full sm:w-auto">
              <button className="group bg-[#7C3AED] text-white rounded-lg px-6 py-3.5 font-bold text-[14px] flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#6D28D9] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(124,58,237,0.35)] w-full sm:w-auto">
                Become a partner
                <div className="bg-white rounded-full p-0.5">
                  <ArrowRight className="w-4 h-4 text-[#7C3AED] group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                </div>
              </button>
              
              <button className="bg-white text-[#7C3AED] border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] rounded-lg px-6 py-3.5 font-bold text-[14px] flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#7C3AED] w-full sm:w-auto">
                Schedule a Demo
                <Calendar className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-[600px]">
              {[
                { num: '20+', text: 'Adobe Apps' },
                { num: '100 GB', text: 'Cloud Storage' },
                { num: '10+', text: 'Industry courses' },
                { num: '3', text: 'Certificate paths' }
              ].map((stat, idx) => (
                <div key={idx} className="group bg-white rounded-xl border border-gray-100 p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(124,58,237,0.12)] hover:border-purple-200 cursor-default">
                  <span className="text-[22px] font-extrabold text-[#7C3AED] leading-none mb-1.5 transition-transform duration-300 group-hover:scale-[1.05] origin-left">{stat.num}</span>
                  <span className="text-[11px] text-gray-500 font-semibold group-hover:text-gray-700 transition-colors">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image Content */}
          <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
            <img 
              src={heroImg} 
              alt="Adobe Creative & AI Skills Platform" 
              className="w-[100%] md:w-[110%] lg:w-[125%] max-w-none h-auto object-contain relative z-10 transform lg:translate-x-12"
            />
          </div>
          
        </div>

        {/* Bottom Trusted Ecosystem */}
        <div className="w-full flex flex-col items-center pt-8 border-t border-gray-100">
          <p className="text-[#7C3AED] font-bold text-[11px] tracking-widest uppercase mb-6">
            Trusted Ecosystem
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { text: 'ADOBE', color: 'text-[#EA1F15]' },
              { text: 'Skillzza', color: 'text-[#7C3AED]' },
              { text: 'NASSCOM FutureSkills Prime', color: 'text-[#1A1A2E]' },
              { text: 'Industry Partners', color: 'text-[#1A1A2E]' },
              { text: 'Universities', color: 'text-[#1A1A2E]' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] px-6 py-3.5 rounded-lg flex items-center justify-center transition-transform hover:-translate-y-1"
              >
                <span className={`font-bold text-[14px] ${item.color}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
