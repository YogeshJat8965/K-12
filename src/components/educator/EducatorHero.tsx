import React from 'react';
import { ArrowRight, Users, ShieldCheck, HandCoins } from 'lucide-react';
import heroImg from '../../assets/educator circle/heroimage.png';

export default function EducatorHero() {
  return (
    <section className="relative w-full bg-white font-poppins pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      
      {/* Main Content Area */}
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-24 relative lg:min-h-[550px]">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[60%] lg:max-w-[750px] flex flex-col items-start text-left relative z-20 pt-4 lg:py-10">
            
            {/* Badge */}
            <div className="bg-[#E0E7FF] text-[#4F46E5] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-6 px-4 py-2 rounded-full inline-block">
              FREE FOR EVERY TEACHER • CBSE • ICSE • STATE BOARDS
            </div>
            
            {/* Heading */}
            <h1 className="text-[40px] md:text-[50px] lg:text-[58px] font-extrabold text-[#111827] leading-[1.1] tracking-tight mb-6">
              Where<br />
              India's <span className="text-[#4F46E5]">teachers</span> find<br />
              their <span className="text-[#4F46E5]">circle.</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 font-medium text-[15px] lg:text-[16px] leading-relaxed max-w-[90%] mb-6">
              A Professional Community For K-12 Educators — Learn To 
              Teach With AI, Track Every CPD Hour, And Grow From New 
              Member To National Educator Leader, Alongside Teachers 
              Across The Country.
            </p>
            
            {/* Feature Bullet */}
            <div className="flex items-center gap-2 mb-10">
              <ShieldCheck className="w-5 h-5 text-[#4F46E5]" />
              <p className="text-gray-600 text-[13px] font-medium">
                <span className="text-[#4F46E5] font-bold">No Fees.</span> Get Your Digital Educator Card In Two Minutes.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="bg-[#4F46E5] text-white rounded-lg px-8 py-3.5 font-bold text-[14px] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#4338CA] hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 w-full sm:w-auto">
                Join for free
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </button>
              
              <button className="bg-white text-[#4F46E5] border border-gray-200 shadow-sm rounded-lg px-8 py-3.5 font-bold text-[14px] flex items-center justify-center gap-2 transition-all duration-300 hover:border-[#4F46E5] hover:shadow-md hover:-translate-y-1 w-full sm:w-auto">
                Explore Community
                <Users className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>
            
          </div>
          
          {/* Right Image (Absolute on Desktop to preserve size on smaller laptops) */}
          <div className="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[-5%] xl:right-[-2%] lg:w-[850px] xl:w-[1000px] relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0 pointer-events-none">
            <img 
              src={heroImg} 
              alt="Educator Circle Hero" 
              className="w-full h-auto object-contain"
            />
          </div>
          
        </div>

        {/* Bottom Stats/Features Bar */}
        <div className="w-full bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-2xl flex flex-col lg:flex-row items-center justify-between py-6 px-4 lg:px-10 gap-8 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          
          {/* Feature 1 */}
          <div className="w-full lg:w-1/3 flex items-center gap-5 px-4 lg:px-8 py-4 lg:py-0">
            <div className="w-16 h-16 rounded-full bg-[#F3E8FF] flex items-center justify-center flex-shrink-0">
              <HandCoins className="w-7 h-7 text-[#7C3AED]" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <h4 className="text-[#111827] font-extrabold text-[16px] leading-tight mb-1">FREE<br/>Forever</h4>
              <p className="text-gray-500 text-[12px] font-medium leading-relaxed max-w-[150px]">Always free for every teacher.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="w-full lg:w-1/3 flex items-center gap-5 px-4 lg:px-8 py-4 lg:py-0">
            <div className="w-16 h-16 rounded-full bg-[#F3E8FF] flex items-center justify-center flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 16L11 18L15 14" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[#111827] font-extrabold text-[16px] leading-tight mb-1">13-WEEK<br/>AI Programme</h4>
              <p className="text-gray-500 text-[12px] font-medium leading-relaxed max-w-[150px]">Hands-on learning with AI for educators.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="w-full lg:w-1/3 flex items-center gap-5 px-4 lg:px-8 py-4 lg:py-0">
            <div className="w-16 h-16 rounded-full bg-[#F3E8FF] flex items-center justify-center flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22S12 22 12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="#7C3AED" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15L9.64893 16.5165L10.3705 13.8051L8.2127 12.0835L11.0261 11.9149L12 9.25L12.9739 11.9149L15.7873 12.0835L13.6295 13.8051L14.3511 16.5165L12 15Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[#111827] font-extrabold text-[16px] leading-tight mb-1">CCMM<br/>Certification</h4>
              <p className="text-gray-500 text-[12px] font-medium leading-relaxed max-w-[150px]">Globally recognised educator credential.</p>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
