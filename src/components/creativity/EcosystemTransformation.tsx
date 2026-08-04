import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import bgImg from '../../assets/Homepage (1920x 1080px) – 2/logo/background img.webp';

const cardsData = [
  {
    title: "Institutional Recognition & Impact",
    items: [
      "Recognition as an official participant in the Adobe Express Skills Academy.",
      "Access to digital creativity and AI-powered learning programmes for the entire school.",
      "Curriculum-aligned resources that support modern classroom learning.",
      "Professional development training for teachers to enable creative teaching methods.",
      "Opportunities for students to participate in innovation challenges and creative competitions.",
      "Digital certifications and institutional recognition for outstanding performance."
    ]
  },
  {
    title: "Global Certification & Growth",
    items: [
      "Earn the globally recognised Adobe Creative Educator certification.",
      "Participate in teacher training and professional development programmes.",
      "Access Adobe Express educational tools for creative classroom integration.",
      "Ready-to-use, curriculum-aligned teaching resources and activity templates.",
      "Join a global community of innovative educators and collaborators.",
      "Recognition through the Adobe Express Skills Academy.",
      "Access to premium educational licences for teachers and students."
    ]
  },
  {
    title: "Creative Confidence & Career Exposure",
    items: [
      "Hands-on learning with Adobe Express for digital creativity and design.",
      "Explore AI-powered creative tools for storytelling, design, and communication.",
      "Experience project-based learning through real-world creative challenges.",
      "Build future-ready skills in design thinking, graphic design, and digital content creation.",
      "Participate in Creative AI Clubs and collaborative innovation projects.",
      "Earn digital badges, certificates, and achievement recognition.",
      "Gain career exposure through expert mentorship and industry insights.",
      "Access premium educational tools and creative learning resources."
    ]
  }
];

export default function EcosystemTransformation() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-white font-poppins overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Heading and Image */}
          <div className="flex flex-col h-full">
            <ScrollReveal>
              <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-extrabold text-[#1A1A2E] leading-[1.2] tracking-tight mb-4">
                Transforming the Education Ecosystem
              </h2>
              <p className="text-[18px] md:text-[20px] text-gray-500 font-medium mb-8">
                Through Digital Creativity & AI Learning.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="flex-1 mt-auto">
              <div className="w-full h-full min-h-[400px] lg:min-h-[500px] rounded-[16px] overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src={bgImg} 
                  alt="Transforming Education" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Text and Accordion */}
          <div className="flex flex-col mt-4 lg:mt-0">
            <ScrollReveal delay={0.1}>
              <p className="text-[17px] text-gray-600 font-medium leading-[1.6] mb-8">
                Our collaborative model is designed to offer exclusive access, high-value insights, and deep creative transformation for schools, teachers, and students alike.
              </p>
              
              <h3 className="text-[15px] font-bold text-gray-800 uppercase tracking-wide mb-6 pb-2 border-b-2 border-gray-100">
                Key Member Benefits
              </h3>
            </ScrollReveal>

            <div className="flex flex-col gap-3">
              {cardsData.map((card, idx) => {
                const isOpen = openIdx === idx;
                
                return (
                  <ScrollReveal key={idx} delay={0.2 + (idx * 0.1)}>
                    <div 
                      className={`border rounded-[12px] overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#FAFAFA] border-gray-300 shadow-sm' : 'bg-white border-gray-100 hover:border-gray-200'}`}
                    >
                      <button 
                        onClick={() => toggleAccordion(idx)}
                        className="w-full flex items-center justify-between p-5 lg:p-6 text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-2 h-2 rotate-45 transform transition-colors duration-300 ${isOpen ? 'bg-[#6C3CF7]' : 'bg-gray-400'}`}></div>
                          <span className={`text-[17px] font-bold transition-colors duration-300 ${isOpen ? 'text-[#1A1A2E]' : 'text-gray-700'}`}>
                            {card.title}
                          </span>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#6C3CF7]' : ''}`} 
                        />
                      </button>

                      <div 
                        className={`transition-all duration-400 ease-in-out overflow-hidden ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="p-5 lg:p-6 pt-0 border-t border-gray-100/50">
                          <ul className="flex flex-col gap-3 mt-4">
                            {card.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="mt-2 min-w-[5px] w-[5px] h-[5px] rounded-full bg-[#F97316]"></div>
                                <span className="text-[15px] text-gray-600 leading-relaxed font-medium">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
