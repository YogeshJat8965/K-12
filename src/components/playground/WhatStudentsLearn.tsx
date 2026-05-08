import { Terminal, GitMerge, Sparkles, Shield, Compass, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';

export default function WhatStudentsLearn() {
  const learningPillars = [
    {
      title: "Prompt Thinking",
      desc: "Ask AI clearly, specifically, and creatively to get great results.",
      icon: <Terminal strokeWidth={1.5} className="w-10 h-10" />,
      color: "text-amber-300",
      glow: "from-amber-300/20 to-transparent"
    },
    {
      title: "Logical Sequencing",
      desc: "Break problems into steps and build structured reasoning.",
      icon: <GitMerge strokeWidth={1.5} className="w-10 h-10" />,
      color: "text-purple-400",
      glow: "from-purple-400/20 to-transparent"
    },
    {
      title: "Creative Confidence",
      desc: "Iterate, test, fail, and refine – the core of every creative endeavour.",
      icon: <Sparkles strokeWidth={1.5} className="w-10 h-10" />,
      color: "text-orange-400",
      glow: "from-orange-400/20 to-transparent"
    },
    {
      title: "AI Literacy & Ethics",
      desc: "Understand AI's powers, limits, biases, and use it responsibly.",
      icon: <Shield strokeWidth={1.5} className="w-10 h-10" />,
      color: "text-emerald-400",
      glow: "from-emerald-400/20 to-transparent"
    },
    {
      title: "Self-Directed Learning",
      desc: "Curiosity-led exploration that builds the habit of lifelong learning.",
      icon: <Compass strokeWidth={1.5} className="w-10 h-10" />,
      color: "text-sky-400",
      glow: "from-sky-400/20 to-transparent"
    },
    {
      title: "Computational Empathy",
      desc: "Understand how machines think and learn to communicate with them.",
      icon: <Brain strokeWidth={1.5} className="w-10 h-10" />,
      color: "text-rose-400",
      glow: "from-rose-400/20 to-transparent"
    }
  ];

  return (
    <section className="py-8 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#050B1F] rounded-[3rem] p-10 md:p-14 relative overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.3)] border border-white/5"
        >
          {/* Background Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] -translate-y-1/2 rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] translate-y-1/2 rounded-full" />

          {/* Header */}
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
              <span className="text-purple-400">What Students Learn</span> – Without Realising It
            </h2>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-4 relative z-10">
            {learningPillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container with Modern Reveal */}
                <div className="relative mb-5 p-4 rounded-3xl transition-all duration-500">
                  {/* Hover Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.glow} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                  
                  {/* Icon Motion */}
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`${pillar.color} relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
                  >
                    {pillar.icon}
                  </motion.div>
                </div>

                {/* Text Content */}
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-[12px] leading-relaxed px-1 transition-colors duration-300 group-hover:text-slate-300 line-clamp-3">
                  {pillar.desc}
                </p>

                {/* Subtle Hover Indicator */}
                <motion.div 
                  className="mt-6 w-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent group-hover:w-full transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
