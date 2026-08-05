import { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import img1 from '../../assets/digital creativity/for schools.png';
import img2 from '../../assets/digital creativity/for terachers.png';
import img3 from '../../assets/digital creativity/for students.png';

const tabsData = [
  {
    id: 'schools',
    label: 'For Schools',
    heading: 'Institutional recognition & impact',
    points: [
      'Recognition as an official participant in the Adobe Express Skills Academy.',
      'Access to digital creativity and AI-powered learning programmes for the entire school.',
      'Curriculum-aligned resources that support modern classroom learning.',
      'Professional development training that enables creative teaching methods.',
      'Opportunities for students to join innovation challenges and creative competitions.',
      'Digital certifications and institutional recognition for participating schools.'
    ],
    image: img1
  },
  {
    id: 'teachers',
    label: 'For Teachers',
    heading: 'Global certification & growth',
    points: [
      'Earn the globally recognised Adobe Creative Educator certification.',
      'Access free lesson plans and around 30 professional development courses on the Adobe Education Exchange.',
      'Participate in teacher training and professional development programmes.',
      'Use Adobe Express education tools for creative classroom integration.',
      'Access ready-to-use, curriculum-aligned teaching resources and activity templates.',
      'Join a global community of innovative educators and collaborators.',
      'Unlock premium educational licences for teachers and students.'
    ],
    image: img2
  },
  {
    id: 'students',
    label: 'For Students',
    heading: 'Creative confidence & career exposure',
    points: [
      'Hands-on learning with Adobe Express for digital creativity and design.',
      'Explore AI-powered creative tools for storytelling, design and communication.',
      'Build creative and persuasive communication skills for the year ahead and future careers.',
      'Experience project-based learning through real-world creative challenges.',
      'Take part in Creative AI Clubs and collaborative innovation projects.',
      'Earn digital badges, certificates and achievement recognition.',
      'Gain career exposure through expert mentorship and industry insights.'
    ],
    image: img3
  }
];

export default function StakeholderValue() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-12 md:py-16 bg-[#fafbfd] font-poppins overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-extrabold text-[#1A1A2E] leading-[1.2] tracking-tight mb-6">
              One programme. Value for schools, teachers and students.
            </h2>
            <p className="text-[18px] md:text-[20px] text-gray-600 font-medium leading-relaxed">
              Through digital creativity and AI learning, every stakeholder gains something lasting.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Buttons */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            {tabsData.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`px-8 py-4 rounded-full font-bold text-[16px] md:text-[18px] transition-all duration-300 shadow-sm
                  ${activeTab === idx 
                    ? 'bg-[#6C3CF7] text-white shadow-md transform scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#6C3CF7] hover:text-[#6C3CF7]'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tab Content */}
        <div className="bg-white rounded-[24px] shadow-xl shadow-[#6C3CF7]/5 border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left side: Image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 transition-opacity duration-500">
              <img 
                src={tabsData[activeTab].image} 
                alt={`${tabsData[activeTab].label} Visual`}
                className="w-full h-auto max-h-[500px] object-contain rounded-[16px]"
              />
            </div>

            {/* Right side: Content */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <ScrollReveal key={`content-${activeTab}`} delay={0.1} className="w-full">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#6C3CF7]/10 text-[#6C3CF7] font-bold text-[14px] tracking-wide uppercase mb-4">
                  {tabsData[activeTab].label}
                </div>
                <h3 className="text-[28px] md:text-[34px] font-bold text-[#1A1A2E] leading-tight mb-8">
                  {tabsData[activeTab].heading}
                </h3>

                <ul className="flex flex-col gap-4">
                  {tabsData[activeTab].points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-2.5 min-w-[6px] w-[6px] h-[6px] rounded-full bg-[#F97316]"></div>
                      <p className="text-[16px] md:text-[17px] text-gray-600 font-medium leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
