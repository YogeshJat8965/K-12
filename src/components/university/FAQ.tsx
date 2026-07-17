import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import faqImg from '../../assets/university/faq.png';

const faqs = [
  {
    question: "What is the Adobe Digital Creativity & AI Skills Centre?",
    answer: "An integrated campus program combining Adobe's industry-recognised curriculum, licensed Creative Cloud tools, AI-powered learning, digital badges, and professional certification pathways — delivered and implemented by Skillzza."
  },
  {
    question: "Who can participate?",
    answer: "The program is open to students across all disciplines who are looking to build modern digital and AI skills, regardless of their prior technical background."
  },
  {
    question: "How is the curriculum delivered?",
    answer: "The curriculum is delivered through a hybrid model, combining hands-on interactive sessions, self-paced learning modules, and expert-led masterclasses."
  },
  {
    question: "Are Adobe licenses included?",
    answer: "Yes, the program includes licensed access to Adobe Creative Cloud tools for enrolled students during the duration of the course."
  },
  {
    question: "Are certifications recognised?",
    answer: "Yes, upon completion, students receive industry-recognised Adobe professional certifications and digital badges that can be added to their resumes and LinkedIn profiles."
  },
  {
    question: "Can it be integrated into existing university programs?",
    answer: "Absolutely. Our curriculum is designed to seamlessly integrate with your existing academic calendar and programs, providing NEP alignment and credit-based learning."
  },
  {
    question: "Is faculty training provided?",
    answer: "Yes, we provide comprehensive faculty development programs to equip your educators with the tools and knowledge needed to effectively support the curriculum."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white font-poppins py-20 lg:py-28">
      <div className="max-w-[1536px] mx-auto px-8 md:px-20">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Heading and Image */}
          <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-extrabold text-[#1A1A2E] leading-tight tracking-tight mb-8">
              FAQ's
            </h2>
            <div className="w-full flex justify-center lg:justify-start">
              <img 
                src={faqImg} 
                alt="Frequently Asked Questions" 
                className="w-full max-w-[320px] lg:max-w-[400px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full lg:w-[60%] flex flex-col">
            <div className="w-full border-t border-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-[16px] md:text-[18px] font-bold text-[#1A1A2E] pr-8 group-hover:text-[#7C3AED] transition-colors duration-200">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`text-[#1A1A2E] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-[#7C3AED]' : 'group-hover:text-[#7C3AED]'}`} 
                      size={20} 
                      strokeWidth={3}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-[300px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-600 text-[15px] leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
