import React from 'react';

// Import images
import imgOrientation from '../../assets/educator circle/ai orientation.webp';
import imgLesson from '../../assets/educator circle/lesson design.webp';
import imgPowered from '../../assets/educator circle/ai powered.webp';
import imgDigital from '../../assets/educator circle/digital.webp';

export default function CurriculumSprints() {
  const cards = [
    {
      themeClass: { bg: 'bg-[#F3E8FF]', text: 'text-[#6B21A8]' }, // Purple
      title: 'AI Orientation Sprint',
      weeks: 'Week 1-2',
      desc: 'A Fast, Welcoming On-Ramp For All Teachers - No Prior Tech Background Required. Demystify AI, Meet Vedya AI, And Explore How AI Is Already Reshaping Indian Classrooms And What It Means For Your Role.',
      tags: ['Live Orientation Session', 'Vedya AI Demo', 'AI Myth-Busting Workshop', 'Peer Intro Circles', 'AI Readiness Self-Assessment'],
      image: imgOrientation
    },
    {
      themeClass: { bg: 'bg-[#DBEAFE]', text: 'text-[#1D4ED8]' }, // Blue
      title: 'AI For Lesson Design',
      weeks: 'Week 3-5',
      desc: 'Use AI Tools To Build Differentiated Lesson Plans, Generate Content Variations, And Design Formative Assessments - All Aligned To NCERT And State Curricula. Deliverable: Your First AI-Augmented Lesson Plan.',
      tags: ['Prompt Engineering Lab', 'Lesson Plan Sprint', 'Subject Cohort Sessions', 'Curriculum Mapping With AI', 'Assessment Design Workshop'],
      image: imgLesson
    },
    {
      themeClass: { bg: 'bg-[#DCFCE7]', text: 'text-[#15803D]' }, // Green
      title: 'AI-Powered Student Engagement',
      weeks: 'Week 6-7',
      desc: 'Explore How AI Tools Can Personalise Student Journeys, Surface Early Learning Gaps, And Support Neurodiverse Learners In Heterogeneous Classrooms. Deliverable: A Personalised Learning Plan For A Student Cohort.',
      tags: ['Live Orientation Session', 'Vedya AI Demo', 'AI Myth-Busting Workshop', 'Peer Intro Circles', 'AI Readiness Self-Assessment'],
      image: imgPowered
    },
    {
      themeClass: { bg: 'bg-[#FFEDD5]', text: 'text-[#C2410C]' }, // Orange
      title: 'Digital Creativity & AI Integration',
      weeks: 'Week 8-9',
      desc: 'In Partnership With Adobe - Teachers Integrate Digital Creativity Tools With AI To Build Rich, Multimodal Classroom Experiences Across Arts, STEM, And Humanities. Deliverable: A Multimodal Classroom Project Template.',
      tags: ['Adobe Express With AI', 'Multimodal Project Design', 'Student Portfolio Creation', 'Cross-Curricular Activity Design'],
      image: imgDigital
    }
  ];

  return (
    <section className="w-full bg-white font-poppins py-10 pb-24 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* Grid Container for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="group w-full h-[460px] [perspective:1000px] cursor-pointer"
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* --- FRONT FACE --- */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white border border-gray-200 rounded-[20px] overflow-hidden flex flex-col shadow-sm group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow">
                  {/* Image */}
                  <div className="w-full h-[280px] bg-gray-50 flex items-center justify-center border-b border-gray-50 overflow-hidden shrink-0">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Front Content */}
                  <div className="p-6 flex flex-col flex-1 justify-center">
                    <h3 className="text-[20px] md:text-[22px] font-bold text-[#111827] leading-[1.3] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[#4F46E5] font-semibold text-[13px] md:text-[14px] tracking-wide">
                      {card.weeks}
                    </p>
                  </div>
                </div>

                {/* --- BACK FACE --- */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white border border-gray-200 rounded-[20px] overflow-hidden flex flex-col p-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                  
                  {/* Title & Week */}
                  <div className="mb-3 pb-3 border-b border-gray-100">
                    <h4 className="text-[#111827] font-bold text-[15px] leading-snug">
                      {card.title} <span className="text-gray-400 font-normal mx-1">·</span> <span className="text-[#4F46E5] font-semibold">{card.weeks}</span>
                    </h4>
                  </div>
                  
                  {/* Full Description */}
                  <p className="text-[#4B5563] text-[13px] leading-relaxed mb-4">
                    {card.desc}
                  </p>
                  
                  {/* Pill Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {card.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className={`px-3 py-1.5 rounded-full text-[11px] font-semibold leading-none tracking-wide ${card.themeClass.bg} ${card.themeClass.text}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
