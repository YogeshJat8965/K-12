import React from 'react';
import { BookOpen, MapPin, Users, ShieldCheck, Star, ArrowRight } from 'lucide-react';

export default function CommunityCircles() {
  const columns = [
    {
      theme: 'purple',
      icon: <BookOpen className="w-8 h-8 text-[#4F46E5]" strokeWidth={1.5} />,
      title: 'Subject circles',
      desc: 'Connect with educators teaching your subjects.',
      list: ['Science Circle', 'Maths Circle', 'Languages Circle', 'Social Studies Circle'],
      btnText: 'Explore subject circles',
      bgIcon: 'bg-[#EEF2FF]',
      dot: 'bg-[#4F46E5]',
      btnClass: 'bg-[#EEF2FF] text-[#4F46E5] hover:bg-[#E0E7FF]'
    },
    {
      theme: 'orange',
      icon: <MapPin className="w-8 h-8 text-[#EA580C]" strokeWidth={1.5} />,
      title: 'State communities',
      desc: 'Join educators in your state or region.',
      list: ['Maharashtra Educators', 'Gujarat Educators', 'Chhattisgarh Educators', 'Delhi NCR Educators'],
      btnText: 'Explore state communities',
      bgIcon: 'bg-[#FFEDD5]',
      dot: 'bg-[#EA580C]',
      btnClass: 'bg-[#FFF7ED] border border-[#FFEDD5] text-[#111827] hover:bg-[#FFEDD5]'
    },
    {
      theme: 'purple',
      icon: <Users className="w-8 h-8 text-[#4F46E5]" strokeWidth={1.5} />,
      title: 'Interest groups',
      desc: 'Find your tribe around what interests you most.',
      list: ['AI Educators', 'Creative Teaching', 'STEM Leaders', 'Rural & Govt Schools'],
      btnText: 'Explore interest groups',
      bgIcon: 'bg-[#EEF2FF]',
      dot: 'bg-[#4F46E5]',
      btnClass: 'bg-[#EEF2FF] text-[#4F46E5] hover:bg-[#E0E7FF]'
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFC] font-poppins py-20 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-[#4F46E5] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-4">
            CIRCLES, GROUPS & YOUR DIGITAL SKILL PASSPORT
          </p>
          <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-extrabold text-[#111827] leading-[1.2] tracking-tight mb-6">
            Your People, Sorted By <span className="text-[#4F46E5]">Subject, State</span>, And What You <span className="text-[#4F46E5]">Teach.</span>
          </h2>
          <p className="text-[#4B5563] font-medium text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
            Your Skill DNA Profile And AI Readiness Check Place You Straight Into Circles That Fit — Then You Can Join As Many Interest Groups As You Like.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {columns.map((col, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-[24px] p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col hover:-translate-y-1 transition-transform duration-300">
              
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] shrink-0 rounded-full flex items-center justify-center ${col.bgIcon}`}>
                  {col.icon}
                </div>
                <div className="flex flex-col pt-1">
                  <h3 className="text-[18px] lg:text-[20px] font-bold text-[#111827] mb-1 leading-snug">{col.title}</h3>
                  <p className="text-[#4B5563] text-[13px] lg:text-[14px] leading-relaxed">
                    {col.desc}
                  </p>
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
              
              {/* Card List */}
              <ul className="flex flex-col gap-4 mb-8">
                {col.list.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-center gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full ${col.dot} shrink-0`}></span>
                    <span className="text-[#111827] font-medium text-[13px] lg:text-[14px]">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Card Button */}
              <button className={`mt-auto w-full py-3 rounded-[12px] flex items-center justify-center gap-2 font-semibold text-[13px] lg:text-[14px] transition-colors ${col.btnClass}`}>
                {col.btnText} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Passport Card */}
        <div className="w-full bg-white border border-gray-100 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8 mb-8">
          
          {/* Left Side */}
          <div className="flex items-start gap-5 lg:w-[35%] xl:w-[30%] shrink-0">
            {/* <div className="w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] shrink-0 rounded-full bg-[#EEF2FF] flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-[#4F46E5]" strokeWidth={1.5} />
            </div> */}
            <div className="flex flex-col pt-1">
              <h3 className="text-[18px] lg:text-[20px] font-bold text-[#111827] mb-1">Your Digital Skill Passport</h3>
              <p className="text-[#4B5563] text-[13px] lg:text-[14px] leading-relaxed mb-4 pr-4">
                CPD hours add up automatically, then export as your annual report.
              </p>
              <button className="self-start px-5 py-2.5 rounded-xl border border-[#E0E7FF] text-[#4F46E5] bg-white font-semibold text-[13px] flex items-center gap-2 hover:bg-[#EEF2FF] transition-colors">
                View report <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Divider for desktop */}
          <div className="hidden lg:block w-[1px] h-[100px] bg-gray-100 mx-2"></div>

          {/* Right Side Stats */}
          <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-2 relative">
            <div className="flex flex-col items-center justify-center text-center">
               <span className="text-[40px] lg:text-[48px] font-extrabold text-[#4F46E5] mb-1">8.0</span>
               <span className="text-[#111827] font-medium text-[13px] lg:text-[14px]">Total CPD hours</span>
            </div>
            <div className="hidden md:block absolute top-1/2 left-1/4 w-[1px] h-16 bg-gray-100 -translate-y-1/2"></div>
            
            <div className="flex flex-col items-center justify-center text-center">
               <span className="text-[40px] lg:text-[48px] font-extrabold text-[#4F46E5] mb-1">5.0</span>
               <span className="text-[#111827] font-medium text-[13px] lg:text-[14px]">Skillzza sessions</span>
            </div>
            <div className="hidden md:block absolute top-1/2 left-2/4 w-[1px] h-16 bg-gray-100 -translate-y-1/2"></div>

            <div className="flex flex-col items-center justify-center text-center">
               <span className="text-[40px] lg:text-[48px] font-extrabold text-[#4F46E5] mb-1">3.0</span>
               <span className="text-[#111827] font-medium text-[13px] lg:text-[14px]">External & school</span>
            </div>
            <div className="hidden md:block absolute top-1/2 left-3/4 w-[1px] h-16 bg-gray-100 -translate-y-1/2"></div>

            <div className="flex flex-col items-center justify-center text-center">
               <span className="text-[40px] lg:text-[48px] font-extrabold text-[#4F46E5] mb-1">2.0</span>
               <span className="text-[#111827] font-medium text-[13px] lg:text-[14px]">Pending review</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="w-full bg-[#FFF7ED] rounded-[20px] py-4 px-6 md:px-8 flex flex-col md:flex-row items-center justify-center gap-6 border border-[#FFEDD5]">
          
          <div className="flex items-center gap-4">
            {/* <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#EA580C] shrink-0">
              <Star className="w-5 h-5" strokeWidth={2.5} />
            </div> */}
            <p className="text-[#4B5563] text-[13px] md:text-[15px] font-medium leading-relaxed">
              <span className="text-[#EA580C] font-bold">Use your report</span> for school appraisals, principal reviews, and professional records.
            </p>
          </div>
          
          <div className="hidden md:block w-[1px] h-6 bg-orange-200"></div>
          
          <p className="text-[#4B5563] text-[13px] md:text-[15px] font-medium leading-relaxed">
             <span className="text-[#EA580C] font-bold">Up to 8</span> sponsored CPD hours per teacher each year.
          </p>

        </div>

      </div>
    </section>
  );
}
