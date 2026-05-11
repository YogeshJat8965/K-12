import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';

// Image Imports
import img1 from '../../assets/AI Playground/1 img.png';
import img2 from '../../assets/AI Playground/2 img.png';
import img3 from '../../assets/AI Playground/3 img.png';
import img4 from '../../assets/AI Playground/4 img.png';
import img5 from '../../assets/AI Playground/5 img.png';
import img6 from '../../assets/AI Playground/6 img.png';
import imgMath from '../../assets/AI Playground/Math Mentor.png';
import imgCode from '../../assets/AI Playground/Code Companion.png';
import imgClimate from '../../assets/AI Playground/Climate Strategist.png';
import imgLang from '../../assets/AI Playground/Language Buddy.png';
import imgSpace from '../../assets/AI Playground/Space Explorer.png';
import imgHistory from '../../assets/AI Playground/History Time Machine.png';

export default function AgentLibrary() {
  const [index, setIndex] = useState(1);
  const [cardsToShow, setCardsToShow] = useState(4);
  
  const agents = [
    { title: "Story Weaver", desc: "Co-write stories, invent characters, and build fictional worlds with a creative writing companion.", img: img1 },
    { title: "Homework Helper", desc: "A patient tutor that explains concepts, walks through problems, and answers doubts across subjects.", img: img2 },
    { title: "Career Coach", desc: "Explore career options, understand different paths, and get guidance tailored to your interests.", img: img3 },
    { title: "Debate Buddy", desc: "Practise argumentation, prepare for debates, and strengthen critical thinking with a sparring partner.", img: img4 },
    { title: "Science Explorer", desc: "Ask big questions, design experiments, and understand how the world works through curiosity-led chats.", img: img5 },
    { title: "Wellness Guide", desc: "Mindfulness prompts, journaling companions, and gentle support for emotional well-being.", img: img6 },
    { title: "Math Mentor", desc: "Break down tricky problems step by step, practise techniques, and build confidence in numbers.", img: imgMath },
    { title: "Code Companion", desc: "Learn to code, debug errors, and build your first programmes with a friendly coding buddy.", img: imgCode },
    { title: "Climate Strategist", desc: "Explore sustainability scenarios, model climate solutions, and design ideas to help the planet.", img: imgClimate },
    { title: "Language Buddy", desc: "Practise English, Hindi, French, Spanish, or Mandarin through natural conversation.", img: imgLang },
    { title: "Space Explorer", desc: "Journey through galaxies, understand space missions, and ask anything about the universe.", img: imgSpace },
    { title: "History Time Machine", desc: "Travel through time, meet historical figures, and explore events through immersive storytelling.", img: imgHistory },
  ];

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(4);
    };
    updateCards();
    window.addEventListener('resize', updateCards);
    return () => window.removeEventListener('resize', updateCards);
  }, []);

  const next = () => {
    if (index < agents.length - cardsToShow) {
      setIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(prev => prev - 1);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="agents">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              The Prebuilt Agent Library
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-slate-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Every agent is designed by educators and AI experts, pre-tested for age-appropriate content, and ready for students to customise. Pick one that matches your interest - or remix several to create something entirely new.
            </p>
          </ScrollReveal>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 flex justify-between items-center z-30 pointer-events-none">
            <button 
              onClick={prev}
              disabled={index === 0}
              className={`w-12 h-12 rounded-full bg-white shadow-2xl border border-slate-100 flex items-center justify-center transition-all duration-300 pointer-events-auto hover:scale-110 active:scale-95 disabled:opacity-0 disabled:scale-90`}
            >
              <ChevronLeft className="w-7 h-7 text-purple-600" />
            </button>
            
            <button 
              onClick={next}
              disabled={index >= agents.length - cardsToShow}
              className={`w-14 h-14 rounded-full bg-white shadow-2xl border border-slate-100 flex items-center justify-center transition-all duration-300 pointer-events-auto hover:scale-110 active:scale-95 disabled:opacity-0 disabled:scale-90`}
            >
              <ChevronRight className="w-8 h-8 text-purple-600" />
            </button>
          </div>

          {/* CLIPPER CONTAINER - Crucial for hiding extra cards */}
          <div className="pt-10 pb-12 overflow-hidden">
            <motion.div 
              className="flex gap-5"
              animate={{ x: `calc(-${index * (100 / cardsToShow)}% - ${index * (20 / cardsToShow)}px)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {agents.map((agent, i) => (
                <div 
                  key={i} 
                  className="min-w-full md:min-w-[calc(50%-10px)] lg:min-w-[calc(25%-15px)]"
                >
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group/card shadow-lg hover:shadow-[0_20px_50px_rgba(107,33,168,0.2)] transition-all duration-500 hover:-translate-y-3">
                    {/* Image */}
                    <img 
                      src={agent.img} 
                      alt={agent.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity duration-500" />
                    
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
                    <div className="transform transition-all duration-500 translate-y-24 group-hover/card:translate-y-0">
                      <h3 className="text-white font-bold text-2xl mb-3">
                        {agent.title}
                      </h3>
                      <p className="text-slate-200 text-sm leading-relaxed opacity-0 group-hover/card:opacity-100 transition-all duration-700 delay-100 transform translate-y-4 group-hover/card:translate-y-0 line-clamp-4">
                        {agent.desc}
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-12">
          <ScrollReveal>
            <p className="text-slate-600 text-base md:text-lg max-w-4xl mx-auto">
              <b> Can't find the agent you want? </b> Students at Grades 8+ can use the <span className="text-purple-600 font-bold cursor-pointer hover:underline">Agent Builder</span> to create entirely original agents from scratch - no coding required.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
