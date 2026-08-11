import teacherAtCenterImg from '../../assets/educator circle/teacher at center.png';

export default function TeacherAtCenter() {
  return (
    <section className="hidden md:block w-full bg-white font-poppins pt-8 lg:pt-10 pb-10 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[#4F46E5] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-4">
            WHY IT'S CALLED THE CIRCLE
          </p>
          <h2 className="text-[24px] md:text-[32px] lg:text-[44px] font-extrabold text-[#111827] leading-[1.2] tracking-tight mb-6 max-w-4xl">
            One Teacher At The <span className="text-[#4F46E5]">Centre.</span> A Whole<br className="hidden lg:block" /> Nation <span className="text-[#4F46E5]">Around You.</span>
          </h2>
          {/* <p className="text-gray-500 font-medium text-[14px] md:text-[15px] leading-relaxed max-w-3xl">
            The Moment You Join, Your Skill DNA Profile Places You Into The Circles That Fit - Your Peer Group, Your Subject, Your
            State, And The National Network. You're Never The Only Teacher Trying Something New.
          </p> */}
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center relative z-10">
          <img 
            src={teacherAtCenterImg} 
            alt="One Teacher At The Centre" 
            className="w-full max-w-[1200px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
