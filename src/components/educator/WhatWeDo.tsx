import img1 from '../../assets/educator circle/celebration/1.webp';
import img2 from '../../assets/educator circle/celebration/2.webp';
import img3 from '../../assets/educator circle/celebration/3.webp';
import img4 from '../../assets/educator circle/celebration/4.webp';
import img5 from '../../assets/educator circle/celebration/5.webp';
import img6 from '../../assets/educator circle/celebration/6.webp';
import img7 from '../../assets/educator circle/celebration/7.webp';
import img8 from '../../assets/educator circle/celebration/8.webp';
import img9 from '../../assets/educator circle/celebration/9.webp';

export default function WhatWeDo() {
  const activities = [
    {
      title: 'Monthly Masterclasses',
      desc: 'Expert-Led Live Sessions On AI Tools, Pedagogy, And Edtech - 60 Min, Always Recorded, Always Free.',
      image: img1
    },
    {
      title: 'Weekly Peer Circles',
      desc: 'Small-Group Sessions By Subject And Grade - Where Real Classroom Stories Get Shared And Solved Together.',
      image: img2
    },
    {
      title: 'AI Lab Challenges',
      desc: 'Monthly Hands-On Challenges - Use A New AI Tool, Submit Your Output, Get Community Feedback And A Badge.',
      image: img3
    },
    {
      title: 'Lesson Library Builds',
      desc: 'Collaborative Repository - Teachers Contribute And Remix AI-Enhanced Lesson Plans Across Subjects And Grades.',
      image: img4
    },
    {
      title: 'AI Educator Spotlight',
      desc: 'Monthly Recognition Of Outstanding Educators - Featured On Skillzza Nova, LinkedIn, And Partner Platforms.',
      image: img5
    },
    {
      title: 'Classroom Storytelling Series',
      desc: 'Teachers Share 10-Min Stories Of AI Experiments In Their Class - Wins, Failures, Learnings, And Surprises.',
      image: img6
    },
    {
      title: 'Cross-School Collaboration',
      desc: 'Paired Learning Between Rural And Urban Schools - Teachers Co-Design Projects And Share Perspectives.',
      image: img7
    },
    {
      title: 'Policy Reading Circles',
      desc: 'Unpack NEP 2020, NCERT AI Frameworks, And State-Level Digital Education Policies - Together, Simply.',
      image: img8
    },
    {
      title: 'Annual AI Teachers Summit',
      desc: 'A Flagship In-Person Event Celebrating India\'s AI-Ready Educators - Demo Day, Awards, And Keynotes.',
      image: img9
    }
  ];

  return (
    <section id="rhythm-of-learning" className="w-full bg-white font-poppins py-20 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Content */}
        <div className="flex flex-col items-start text-left max-w-4xl mb-12">
          <p className="text-[#4F46E5] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-4">
            WHAT WE DO TOGETHER
          </p>
          
          <h2 className="text-[34px] md:text-[42px] lg:text-[46px] font-extrabold text-[#111827] leading-[1.2] tracking-tight mb-6">
            A Rhythm Of <span className="text-[#4F46E5]">Learning, Sharing</span> & <br className="hidden md:block"/>
            <span className="text-[#4F46E5]">Celebration.</span>
          </h2>
          
          <p className="text-[#4B5563] font-medium text-[15px] md:text-[16px] leading-relaxed max-w-3xl">
            Every Activity Is Designed To Make AI Practical And Human. Live Sessions Are Recorded And Shared With Members Within 24 Hours - Always Free.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {activities.map((card, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-[16px] lg:rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-200 flex overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-[#4F46E5]/30 transition-all duration-300 h-[140px] md:h-[160px]"
            >
              {/* Left Image Area */}
              <div className="w-[160px] md:w-[180px] shrink-0 bg-gray-50 flex items-center justify-center border-r border-gray-100 overflow-hidden">
                {card.image ? (
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" />
                ) : (
                  <span className="text-gray-400 text-[11px] font-medium uppercase tracking-widest px-4 text-center">
                    Image pending
                  </span>
                )}
              </div>
              
              {/* Right Content Area */}
              <div className="p-4 md:p-6 flex flex-col justify-center">
                <h3 className="font-bold text-[#111827] text-[15px] lg:text-[16px] leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="text-[#4B5563] text-[12px] lg:text-[13px] leading-[1.6] line-clamp-3 md:line-clamp-4">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
