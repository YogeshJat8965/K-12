import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import imgSkillDNA from '../../assets/for students/Skill DNA Profile.png';
import imgAIPlayground from '../../assets/for students/AI Playground.png';
import imgSkillStudios from '../../assets/for students/Skill Studios.png';
import imgVirtualInternships from '../../assets/for students/Virtual Internships.png';

const stagesData = [
  {
    id: 1,
    name: 'DISCOVER',
    heading: 'STAGE 01 • DISCOVER',
    subheading: 'Find your spark. No commitment. Just curiosity.',
    cards: [
      {
        title: 'Skill DNA Profile',
        subtitle: 'Your AI-powered starting point.',
        whatItIs: 'A 20-minute adaptive assessment that maps your interests, strengths, learning style and hidden potential across 40+ future skills.',
        bestFor: 'Every new learner - start here before picking anything else.',
        walkAwayWith: 'A personalised Skill DNA report, recommended studios, and a clear next step.',
        image: imgSkillDNA
      }
    ]
  },
  {
    id: 2,
    name: 'EXPLORE',
    heading: 'STAGE 02 • EXPLORE',
    subheading: 'Meet AI. Try it out. Find your spark.',
    cards: [
      {
        title: 'AI Playground',
        subtitle: '50+ AI agents to explore, create and experiment with.',
        whatItIs: 'A guided, hands-on space where students try out ready-to-use AI agents for writing, designing, coding, researching, problem-solving and more. No setup and no prior experience needed, just curiosity and an age-appropriate place to experiment.',
        bestFor: 'Students taking their first real steps with AI who want to see what it can do before choosing a direction.',
        walkAwayWith: 'Everyday AI confidence, a clear sense of which skills excite you, and your first AI-powered creations.',
        image: imgAIPlayground
      }
    ]
  },
  {
    id: 3,
    name: 'LEARN',
    heading: 'STAGE 03 • LEARN',
    subheading: 'Build the foundations. Choose your studios. Level up.',
    cards: [
      {
        title: 'Skill Studios',
        subtitle: '20+ studios across the skills that matter.',
        whatItIs: 'Structured learning tracks across Generative AI, Agentic AI, Quantum Computing, UX Design, Fintech, Climate & Sustainability, Neuroscience, Data Science, Media & Storytelling and more. Go deep in one studio or stack several over time.',
        bestFor: 'Middle and high school students ready for serious, structured learning.',
        walkAwayWith: 'Studio certifications, working knowledge, and a portfolio of studio projects.',
        image: imgSkillStudios
      }
    ]
  },
  {
    id: 4,
    name: 'APPLY',
    heading: 'STAGE 04 • APPLY',
    subheading: 'Leave the textbook behind. Work on real problems.',
    cards: [
      {
        title: 'Virtual Internships',
        subtitle: 'Immersive Learning experiences, designed for Students.',
        whatItIs: 'Simulated career experiences co-branded with leading employers and innovation partners. Work through real industry briefs in AI, Design, Research, Product, Sustainability and Startups - at your own pace.',
        bestFor: 'Students in grades 9-12 and undergraduates exploring careers.',
        walkAwayWith: 'An internship certificate, a portfolio-ready deliverable, and a clear sense of direction.',
        image: imgVirtualInternships
      }
    ]
  }
];

export default function StageDetails() {
  const [activeStageId, setActiveStageId] = useState(1);
  const activeStage = stagesData.find(s => s.id === activeStageId)!;

  return (
    <section className="w-full bg-[#F3F5F9] text-gray-900 py-20 px-6 font-poppins">
      <div className="max-w-[1200px] mx-auto">

        {/* Stage Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
          {stagesData.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`px-6 py-3 rounded-full text-[13px] md:text-[14px] font-bold tracking-widest uppercase transition-all duration-300 border ${activeStageId === stage.id
                ? 'bg-[#8B5CF6] border-[#8B5CF6] text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                : 'bg-white border-gray-300 text-gray-500 hover:border-[#8B5CF6] hover:text-[#8B5CF6] shadow-sm'
                }`}
            >
              STAGE 0{stage.id}
            </button>
          ))}
        </div>

        {/* Active Stage Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center"
          >
            {/* Stage Header */}
            <div className="text-center mb-16">
              <h3 className="text-[#8B5CF6] text-[13px] md:text-[16px] font-bold tracking-[0.15em] uppercase mb-4 font-poppins">
                {activeStage.heading}
              </h3>
              <p className="text-3xl md:text-4xl font-light text-gray-600 font-poppins">
                {activeStage.subheading}
              </p>
            </div>

            {/* Cards Area (First card only) */}
            <div className="w-full flex flex-col gap-16 md:gap-24">
              {activeStage.cards.map((card, index) => {
                const isImageLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
                  >
                    {/* Image Area */}
                    <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl relative group bg-white p-2">
                      <div className="absolute inset-0 bg-[#8B5CF6]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl"></div>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-[300px] md:h-[400px] object-cover rounded-xl transform group-hover:scale-[1.02] transition-transform duration-700"
                      />
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                      <div className="border-l-4 border-[#8B5CF6] pl-6 py-2 mb-6">
                        <h4 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-2 font-poppins">{card.title}</h4>
                        <p className="text-[#8B5CF6] font-medium text-[16px]">{card.subtitle}</p>
                      </div>

                      <div className="space-y-5 text-gray-600 text-[15px] md:text-[16px] leading-relaxed">
                        <p>
                          <strong className="text-gray-900">What it is:</strong> {card.whatItIs}
                        </p>
                        <p>
                          <strong className="text-gray-900">Best for:</strong> {card.bestFor}
                        </p>
                        <p>
                          <strong className="text-[#8B5CF6]">You walk away with:</strong> {card.walkAwayWith}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {activeStage.cards.length === 0 && (
                <div className="w-full text-center py-20 text-gray-500 text-lg border border-dashed border-gray-300 rounded-2xl bg-white/50">
                  Content for this stage is coming soon...
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
