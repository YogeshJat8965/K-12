import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import imgSkillDNA from '../../assets/for students/Skill DNA Profile.png';
import imgAIPlayground from '../../assets/for students/AI Playground.png';
import imgSkillStudios from '../../assets/for students/Skill Studios.png';
import imgIntlSkillStudios from '../../assets/for students/International Skill Studios.png';
import imgVedyaAI from '../../assets/for students/Vedya AI Tutor.png';
import imgAIBootcamps from '../../assets/for students/AI Foundations Bootcamps.png';
import imgVirtualInternships from '../../assets/for students/Virtual Internships.png';
import imgHackathons from '../../assets/for students/Innovation Challenges & Hackathons.png';
import imgAgentMatch from '../../assets/for students/Agent Match Projects.png';
import imgYoungFounders from '../../assets/for students/Young Founders Track.png';
import imgResearchFellowships from '../../assets/for students/Research Fellowships.png';
import imgCareerReadiness from '../../assets/for students/Career Readiness Studio.png';
import imgGlobalShowcase from '../../assets/for students/Global Showcase & Demo Day.png';
import imgAlumniNetwork from '../../assets/for students/Alumni Network & Ambassador Programme.png';
import imgCapstoneLabs from '../../assets/for students/Capstone Labs.png';

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
      },
      {
        title: 'AI Playground',
        subtitle: 'A safe sandbox to experiment.',
        whatItIs: 'A free, always-on environment to explore Generative AI, agents, image tools and prompt engineering - with guided prompts, creative templates and mentor guardrails.',
        bestFor: 'Students who want to try AI before committing to a full studio.',
        walkAwayWith: 'Your first AI-generated artefact and the confidence to go deeper.',
        image: imgAIPlayground
      }
    ]
  },
  {
    id: 2,
    name: 'LEARN',
    heading: 'STAGE 02 • LEARN',
    subheading: 'Build the foundations. Choose your studios. Level up.',
    cards: [
      {
        title: 'Skill Studios',
        subtitle: '20+ studios across the skills that matter.',
        whatItIs: 'Structured learning tracks across Generative AI, Agentic AI, Quantum Computing, UX Design, Fintech, Climate & Sustainability, Neuroscience, Data Science, Media & Storytelling and more. Stack multiple studios over time.',
        bestFor: 'Middle and high school students ready for serious, structured learning.',
        walkAwayWith: 'Studio certifications, working knowledge, and a portfolio of studio projects.',
        image: imgSkillStudios
      },
      {
        title: 'International Skill Studios',
        subtitle: 'A premium global track for ambitious learners.',
        whatItIs: '18 advanced studios designed for NRI and international school students aged 12-18 - including Agentic AI and Quantum Computing - with international cohorts, global mentors and world-school alignment.',
        bestFor: 'Students targeting global universities or international careers.',
        walkAwayWith: 'Globally-benchmarked credentials and an international peer network.',
        image: imgIntlSkillStudios
      },
      {
        title: 'Vedya AI Tutor',
        subtitle: 'Your always-on personal learning companion.',
        whatItIs: 'An AI tutor trained on your Skill DNA Profile and studio progress. Ask anything, get unstuck, practice concepts, and receive personalised revision plans - 24/7.',
        bestFor: 'Every enrolled student, across every studio.',
        walkAwayWith: 'Faster understanding, fewer gaps, and a learning partner that grows with you.',
        image: imgVedyaAI
      },
      {
        title: 'AI Foundations Bootcamps',
        subtitle: 'Short. Intense. Skill-building sprints.',
        whatItIs: '2-4 week intensive bootcamps during weekends, holidays and summer breaks. Topics include Prompt Engineering, No-Code AI Apps, Data Literacy, AI for Creators, and Cyber-Safe by Design.',
        bestFor: 'Students with limited time but big appetite - or those testing a new skill.',
        walkAwayWith: 'A focused new skill, a mini-project, and a verified digital badge.',
        image: imgAIBootcamps
      }
    ]
  },
  {
    id: 3,
    name: 'APPLY',
    heading: 'STAGE 03 • APPLY',
    subheading: 'Leave the textbook behind. Work on real problems.',
    cards: [
      {
        title: 'Virtual Internships',
        subtitle: 'Forage-style experiences, designed for Indian and global students.',
        whatItIs: 'Simulated career experiences co-branded with leading employers and innovation partners. Work through real industry briefs in AI, Design, Research, Product, Sustainability and Startups - at your own pace.',
        bestFor: 'Students in grades 9-12 and undergraduates exploring careers.',
        walkAwayWith: 'An internship certificate, a portfolio-ready deliverable, and a clear sense of direction.',
        image: imgVirtualInternships
      },
      {
        title: 'Innovation Challenges & Hackathons',
        subtitle: 'Timed sprints. Bold ideas. Global leaderboards.',
        whatItIs: 'Themed innovation challenges - Climate Action, AI for Good, Mental Wellness, Financial Literacy, Digital Safety - run as weekend and week-long sprints with expert judges and prizes.',
        bestFor: 'Students who thrive under pressure and love to compete.',
        walkAwayWith: 'Rankings, recognition, and a pitch-ready solution to real-world problems.',
        image: imgHackathons
      },
      {
        title: 'AgentMatch Projects',
        subtitle: 'AI-matched to real founders, NGOs and researchers.',
        whatItIs: 'Our AgentMatch AI pairs you with startups, non-profits and academic teams who need help on live projects. Work 4-8 weeks alongside real professionals on a problem that actually matters.',
        bestFor: 'Students ready to apply their studios to the messy real world.',
        walkAwayWith: 'A verified project credential and a professional reference letter.',
        image: imgAgentMatch
      }
    ]
  },
  {
    id: 4,
    name: 'BUILD',
    heading: 'STAGE 04 • BUILD',
    subheading: 'Own your work. Ship something real. Make your mark.',
    cards: [
      {
        title: 'Capstone Labs',
        subtitle: 'Your signature project - built over a semester.',
        whatItIs: 'A guided 12–16 week capstone with dedicated mentorship, milestone reviews and a public showcase. Ship an app, a research paper, a campaign, or a founded movement - your choice.',
        bestFor: 'Students completing 2+ studios who are ready to build at depth.',
        walkAwayWith: 'A flagship project, a capstone certificate, and a portfolio piece that stands out.',
        image: imgCapstoneLabs
      },
      {
        title: 'Young Founders Track',
        subtitle: 'For students who want to start something, not just study it.',
        whatItIs: 'A founder’s bootcamp with ideation, customer discovery, MVP building, pitch training and demo day. Pair with an AI-matched founder-mentor and access micro-grants to test your startup.',
        bestFor: 'Students in grades 10–12 and undergraduates with a startup itch.',
        walkAwayWith: 'A validated startup idea, a working MVP, a pitch deck, and a founder network.',
        image: imgYoungFounders
      },
      {
        title: 'Research Fellowships',
        subtitle: 'For the academically curious - research you can publish.',
        whatItIs: 'Structured 3–6 month research fellowships guided by academics and industry researchers. Areas include AI Ethics, Quantum Applications, Climate Tech, EdTech and Cognitive Science.',
        bestFor: 'Students targeting top universities, Olympiads or academic careers.',
        walkAwayWith: 'A publishable research paper, academic mentorship, and university-grade credentials.',
        image: imgResearchFellowships
      }
    ]
  },
  {
    id: 5,
    name: 'LAUNCH',
    heading: 'STAGE 05 • LAUNCH',
    subheading: 'Bridge to what’s next - college, career, startup or creative life.',
    cards: [
      {
        title: 'Career Readiness Studio',
        subtitle: 'Everything you need to walk into your next chapter.',
        whatItIs: 'A focused studio covering LinkedIn optimisation, portfolio design, mock interviews, communication coaching, personal branding and AI-ready CV building - with one-on-one mentor reviews.',
        bestFor: 'Students in grades 11–12 and undergraduates preparing to transition.',
        walkAwayWith: 'A polished portfolio, a confident interview presence, and a go-to-market plan for yourself.',
        image: imgCareerReadiness
      },
      {
        title: 'Alumni Network & Ambassador Programme',
        subtitle: 'Your launchpad doesn’t end when the studio does.',
        whatItIs: 'A lifelong community of Skillzza k-12 alumni with peer mentorship circles, exclusive events, job boards, and the Ambassador Programme - where senior students lead cohorts and earn stipends.',
        bestFor: 'Every student who completes at least one major programme.',
        walkAwayWith: 'A network that compounds for years, plus opportunities to lead and earn.',
        image: imgAlumniNetwork
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
              className={`px-6 py-3 rounded-full text-[13px] md:text-[14px] font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeStageId === stage.id
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
              <h3 className="text-[#8B5CF6] text-[15px] md:text-[18px] font-bold tracking-[0.15em] uppercase mb-4 font-poppins">
                {activeStage.heading}
              </h3>
              <p className="text-3xl md:text-4xl font-light text-gray-600 font-poppins">
                {activeStage.subheading}
              </p>
            </div>

            {/* Alternating Cards */}
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
                        <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-poppins">{card.title}</h4>
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
