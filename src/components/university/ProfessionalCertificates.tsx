import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import prof1 from '../../assets/university/professional1.png';
import prof2 from '../../assets/university/professional2.png';
import prof3 from '../../assets/university/professional3.png';

const certificates = [
  {
    id: 1,
    image: prof1,
    title: "Adobe Graphic Designer",
    subtitle: "Professional Certificate",
    color: "#6D28D9", // Purple
    skills: ["Design", "Illustration", "Image Editing", "Portfolio"]
  },
  {
    id: 2,
    image: prof2,
    title: "Adobe Marketing Specialist",
    subtitle: "Professional Certificate",
    color: "#EC4899", // Pink
    skills: ["Marketing", "Branding", "Digital Campaigns", "Content Strategy"]
  },
  {
    id: 3,
    image: prof3,
    title: "Adobe Content Creator",
    subtitle: "Professional Certificate",
    color: "#10B981", // Green
    skills: ["Video", "Podcast", "Social Media", "Creative Storytelling"]
  }
];

export default function ProfessionalCertificates() {
  return (
    <section className="w-full bg-white font-poppins pt-4 pb-24">
      <div className="max-w-[1536px] mx-auto px-8 md:px-20">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 md:gap-6 mb-16">
          <div className="h-[1px] w-16 md:w-32 lg:w-48 bg-gray-200"></div>
          <Sparkles className="text-[#7C3AED] fill-[#7C3AED]" size={22} />
          <h2 className="text-[#1A1A2E] font-extrabold text-[24px] md:text-[32px] tracking-tight">
            Professional Certificate Pathways
          </h2>
          <Sparkles className="text-[#7C3AED] fill-[#7C3AED]" size={22} />
          <div className="h-[1px] w-16 md:w-32 lg:w-48 bg-gray-200"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-[24px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-8 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group cursor-pointer"
            >
              
              {/* Top Section: Image & Titles */}
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-8">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-[90px] h-[90px] object-contain group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="flex flex-col">
                  <h3 className="text-[#1A1A2E] font-extrabold text-[17px] leading-tight mb-1">
                    {cert.title}
                  </h3>
                  <p 
                    className="font-bold text-[14px]"
                    style={{ color: cert.color }}
                  >
                    {cert.subtitle}
                  </p>
                  
                  {/* Colored Underline with Dot */}
                  <div className="flex items-center mt-3 gap-1">
                    <div 
                      className="h-[3px] w-12 rounded-full" 
                      style={{ backgroundColor: cert.color }}
                    ></div>
                    <div 
                      className="h-[4px] w-[4px] rounded-full" 
                      style={{ backgroundColor: cert.color }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Middle Section: Skills List */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {cert.skills.map((skill, index) => (
                  <React.Fragment key={index}>
                    <span className="text-gray-600 font-medium text-[13px]">{skill}</span>
                    {index < cert.skills.length - 1 && (
                      <span className="text-[16px] leading-none" style={{ color: cert.color }}>•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Bottom Section: Button */}
              <div className="mt-auto">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ backgroundColor: cert.color }}
                >
                  <ArrowRight size={20} strokeWidth={2.5} />
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
