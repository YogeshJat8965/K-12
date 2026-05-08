import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';

export default function MasteryPath() {
  const [activeCard, setActiveCard] = useState(0);

  const paths = [
    {
      label: "EXPLORE",
      title: "AI Playground",
      desc: "Students discover AI through play - picking, customising, and sharing agents.",
      time: "Time: minutes to hours",
      color: "bg-[#A31D1D]", // Dark Red as per SS
    },
    {
      label: "LEARN",
      title: "Skill Studios",
      desc: "Structured studios across 15+ domains deepen the skills students started exploring in the Playground.",
      time: "Time: weeks to months",
      color: "bg-[#1E293B]", // Dark Slate
    },
    {
      label: "APPLY",
      title: "Virtual Internships",
      desc: "Students use their skills on real-world, industry-inspired projects with verifiable credentials.",
      time: "Time: 4–6 weeks",
      color: "bg-purple-900",
    },
    {
      label: "LEAD",
      title: "Fellowships & Showcases",
      desc: "Top students become mentors, speakers, and programme ambassadors.",
      time: "Time: year-long engagement",
      color: "bg-indigo-900",
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">From Play to Mastery</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3 className="text-xl md:text-2xl text-purple-600 font-medium mb-6">The Playground is just the beginning.</h3>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-slate-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
              What starts as curiosity in the Playground naturally progresses into structured learning through Skillzza Nova's full ecosystem. Every agent a student builds becomes a doorway to deeper skills.
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion Cards Container */}
        <div
          className="flex flex-col lg:flex-row gap-2 h-[360px] lg:h-[380px] w-full"
          onMouseLeave={() => setActiveCard(0)}
        >
          {paths.map((path, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActiveCard(i)}
              animate={{
                flex: activeCard === i ? 5 : 1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-colors duration-500 shadow-lg ${activeCard === i ? path.color : 'bg-[#F1F3F6]'
                }`}
            >
              {/* OPEN STATE CONTENT */}
              <AnimatePresence mode="wait">
                {activeCard === i ? (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-10 flex flex-col justify-center text-white"
                  >
                    <div className="uppercase tracking-[0.2em] text-white/10 font-black text-6xl lg:text-8xl pointer-events-none absolute top-10 left-10">
                      {path.label}
                    </div>

                    <div className="relative z-10 pt-16">
                      <h4 className="text-3xl lg:text-4xl font-bold mb-4">{path.title}</h4>
                      <p className="text-base lg:text-lg text-white/80 max-w-xl mb-6 leading-relaxed">
                        {path.desc}
                      </p>
                      <div className="px-4 py-1.5 bg-white/10 w-fit rounded-full text-[12px] font-bold backdrop-blur-md border border-white/20 uppercase tracking-wider">
                        {path.time}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* CLOSED STATE LABEL (VERTICAL) */
                  <motion.div
                    key="closed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="rotate-[-90deg] flex items-center gap-4 whitespace-nowrap">
                      <span className="text-[#1E293B] font-black text-xl lg:text-2xl tracking-widest uppercase">
                        {path.label}
                      </span>
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center rotate-90">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
