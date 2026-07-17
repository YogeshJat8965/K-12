import React from 'react';
import img1 from '../../assets/university/AI ecosystem/1.png';
import img2 from '../../assets/university/AI ecosystem/2.webp';
import img3 from '../../assets/university/AI ecosystem/3.png';
import img4 from '../../assets/university/AI ecosystem/4.png';
import img5 from '../../assets/university/AI ecosystem/5.png';
import img6 from '../../assets/university/AI ecosystem/6.png';
import img7 from '../../assets/university/AI ecosystem/7.png';
import img8 from '../../assets/university/AI ecosystem/8.png';

const features = [
  {
    id: "01",
    image: img1,
    title: "Licensed Adobe Creative Cloud",
    description: "Professional software used by global industries — Photoshop, Illustrator, Premiere Pro, and more.",
    type: "horizontal"
  },
  {
    id: "02",
    image: img2,
    title: "AI-Integrated Learning",
    description: "Adobe Firefly, Adobe Express AI & Generative AI woven into every learning experience.",
    type: "horizontal"
  },
  {
    id: "03",
    image: img3,
    title: "Industry Curriculum",
    description: "Designed around real workplace skills, aligned with NSQF and industry expectations.",
    type: "vertical"
  },
  {
    id: "04",
    image: img4,
    title: "Portfolio-Based Learning",
    description: "Students graduate with industry-ready projects that demonstrate real capability.",
    type: "vertical"
  },
  {
    id: "05",
    image: img5,
    title: "Digital Badges & Credentials",
    description: "Recognised learning achievements students can showcase to employers.",
    type: "vertical"
  },
  {
    id: "06",
    image: img6,
    title: "Professional Certifications",
    description: "Industry-aligned certification pathways recognised via NASSCOM FutureSkills Prime.",
    type: "vertical"
  },
  {
    id: "07",
    image: img7,
    title: "Faculty Enablement",
    description: "Structured training, onboarding, and teaching resources for your faculty.",
    type: "horizontal"
  },
  {
    id: "08",
    image: img8,
    title: "Campus-Wide Implementation",
    description: "Easy institutional deployment with federated ID access and Admin Console support.",
    type: "horizontal"
  }
];

export default function UniversityFeatures() {
  return (
    <section className="w-full bg-[#FAFAFA] font-poppins pt-20 pb-24 border-t border-gray-100">
      <div className="max-w-[1536px] mx-auto px-8 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[#7C3AED] font-bold text-[11px] tracking-widest uppercase mb-4">
            WHAT MAKES THIS DIFFERENT
          </p>
          <h2 className="text-[36px] lg:text-[42px] font-extrabold text-[#1A1A2E] leading-tight tracking-tight mb-6">
            A Complete Creative <span className="text-[#7C3AED]">AI Ecosystem</span>,<br />
            Not Just Courses
          </h2>
          <div className="w-16 h-[5px] bg-[#7C3AED] rounded-full"></div>
        </div>

        <div className="flex flex-col gap-6">
          
          {/* ROW 1: 2 Horizontal Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features.slice(0, 2).map((item) => (
              <div key={item.id} className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col sm:flex-row overflow-hidden hover:shadow-[0_15px_50px_rgba(124,58,237,0.08)] transition-all duration-300 hover:-translate-y-1 relative group cursor-default">
                <div className="w-full sm:w-1/2 min-h-[220px] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-[#1A1A2E] font-bold text-[18px] leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-[14px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* ROW 2: 4 Vertical Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.slice(2, 6).map((item) => (
              <div key={item.id} className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col overflow-hidden hover:shadow-[0_15px_50px_rgba(124,58,237,0.08)] transition-all duration-300 hover:-translate-y-1 relative group cursor-default">
                <div className="w-full h-[200px] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 pt-2 flex-1 flex flex-col text-center">
                  <h3 className="text-[#1A1A2E] font-bold text-[17px] leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-[14px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* ROW 3: 2 Horizontal Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features.slice(6, 8).map((item) => (
              <div key={item.id} className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col sm:flex-row overflow-hidden hover:shadow-[0_15px_50px_rgba(124,58,237,0.08)] transition-all duration-300 hover:-translate-y-1 relative group cursor-default">
                <div className="w-full sm:w-1/2 min-h-[220px] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-[#1A1A2E] font-bold text-[18px] leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-[14px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
