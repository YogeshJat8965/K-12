import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import bgImg from '../../assets/Homepage (1920x 1080px) – 2/logo/background img.webp';

const cardsData = [
  {
    title: "Future-Ready Skills",
    desc: "Students and educators develop essential digital creativity, design thinking and AI-literacy skills for the modern world."
  },
  {
    title: "Classroom Innovation",
    desc: "Teachers introduce creative learning approaches that make classrooms more engaging, interactive and technology-driven."
  },
  {
    title: "Curriculum-Aligned Learning",
    desc: "Structured activities and resources map to school curricula - making creativity and digital skills easy to weave into everyday teaching."
  },
  {
    title: "Collaborative Learning",
    desc: "Students, teachers and schools work together through projects, creative challenges and shared innovation experiences."
  },
  {
    title: "Recognition & Certification",
    desc: "Certificates, digital badges and institutional recognition for students, teachers and schools that participate and excel."
  },
  {
    title: "Creative Tools & Resources",
    desc: "Access to Adobe Express education tools, templates and guided activities that support creativity-led learning."
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
                Building a future-ready learning ecosystem
              </h2>
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
                Designed to bring students, teachers and schools together around creativity, digital skills and AI-enabled learning.
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
                        className={`w-full flex items-center justify-between px-5 lg:px-6 pt-5 lg:pt-6 ${isOpen ? 'pb-2 lg:pb-2' : 'pb-5 lg:pb-6'} text-left focus:outline-none`}
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
                        <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-1">
                          <p className="text-[15px] text-gray-600 leading-relaxed font-medium ml-6">
                            {card.desc}
                          </p>
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
