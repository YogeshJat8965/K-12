import { ArrowRight, Users, ShieldCheck } from 'lucide-react';
import heroImg from '../../assets/educator circle/heroimage.png';

export default function EducatorHero() {
  return (
    <section className="relative w-full bg-white font-poppins pt-24 lg:pt-32 pb-4 lg:pb-8 overflow-hidden">
      
      {/* Main Content Area */}
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between mb-6 lg:mb-10 relative lg:min-h-[550px]">
          
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
              A professional community for K-12 educators. <br /> learn to 
              teach with AI, track every CPD hour, and grow from new <br /> 
              member to national educator leader, alongside teachers 
              across the country.
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
               
      </div>
    </section>
  );
}
