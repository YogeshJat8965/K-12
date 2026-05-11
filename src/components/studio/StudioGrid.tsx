import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

// Import all 15 studio images
import s1 from '../../assets/skill studio/1 img.png';
import s2 from '../../assets/skill studio/2 img.png';
import s3 from '../../assets/skill studio/3 img.png';
import s4 from '../../assets/skill studio/4 img.png';
import s5 from '../../assets/skill studio/5 img.png';
import s6 from '../../assets/skill studio/6 img.png';
import s7 from '../../assets/skill studio/7 img.png';
import s8 from '../../assets/skill studio/8 img.png';
import s9 from '../../assets/skill studio/9 img.png';
import s10 from '../../assets/skill studio/10 img.png';
import s11 from '../../assets/skill studio/11 img.png';
import s12 from '../../assets/skill studio/12 img.png';
import s13 from '../../assets/skill studio/13 img.png';
import s14 from '../../assets/skill studio/14 img.png';
import s15 from '../../assets/skill studio/15 img.png';

const studios = [
  { id: 1, title: "Gen AI & Deep Tech Studio", image: s1, glow: "rgba(37, 99, 235, 0.3)" },
  { id: 2, title: "Digital Creativity & AI-Powered by Adobe", image: s2, glow: "rgba(220, 38, 38, 0.3)" },
  { id: 3, title: "Junior Agentic AI Engineer Studio", image: s3, glow: "rgba(124, 58, 237, 0.3)" },
  { id: 4, title: "Future Leaders & Entrepreneurship Studio", image: s4, glow: "rgba(234, 88, 12, 0.3)" },
  { id: 5, title: "Global Ambassador & World Affairs Studio", image: s5, glow: "rgba(8, 145, 178, 0.3)" },
  { id: 6, title: "Inner Compass - Mindfulness & Life Skills", image: s6, glow: "rgba(13, 148, 136, 0.3)" },
  { id: 7, title: "Climate Tech & Green Innovation Studio", image: s7, glow: "rgba(22, 163, 74, 0.3)" },
  { id: 8, title: "Data Intelligence Studio", image: s8, glow: "rgba(79, 70, 229, 0.3)" },
  { id: 9, title: "No-Code Builders Studio", image: s9, glow: "rgba(219, 39, 119, 0.3)" },
  { id: 10, title: "Animation & Gamification Studio", image: s10, glow: "rgba(192, 38, 211, 0.3)" },
  { id: 11, title: "Financial Funda Studio", image: s11, glow: "rgba(202, 138, 4, 0.3)" },
  { id: 12, title: "Cybersecurity & Digital Safety Studio", image: s12, glow: "rgba(29, 78, 216, 0.3)" },
  { id: 13, title: "Public Speaking & Debate Studio", image: s13, glow: "rgba(225, 29, 72, 0.3)" },
  { id: 14, title: "Young Journalists & Media Studio", image: s14, glow: "rgba(124, 58, 237, 0.3)" },
  { id: 15, title: "Space & Astronomy Studio", image: s15, glow: "rgba(30, 41, 59, 0.3)" }
];

export default function StudioGrid() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] mb-6 font-display">
              Our Skill Studios
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-slate-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              A curated portfolio of 15 future-forward Skill Studios – each designed as an immersive learning pod 
              where students build capability, confidence, and a portfolio that travels with them.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid Container with AnimatePresence */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <AnimatePresence mode="popLayout">
              {studios.slice(0, isExpanded ? 15 : 10).map((studio, index) => (
                <motion.div 
                  key={studio.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index < 10 ? index * 0.05 : (index - 10) * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="relative group aspect-square bg-[#0B0D17] rounded-[2rem] flex flex-col items-center justify-end text-center transition-all duration-300 border border-white/5 hover:border-white/20 shadow-2xl overflow-hidden cursor-pointer"
                >
                  {/* Full Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={studio.image} 
                      alt={studio.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D17] via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Decorative Glow */}
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"
                    style={{ backgroundColor: studio.glow }}
                  />

                  {/* Title Overlay */}
                  <div className="relative z-20 w-full p-6 pb-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-sm md:text-base leading-snug drop-shadow-lg">
                      {studio.title}
                    </h3>
                  </div>

                  {/* Interactive Border Glow */}
                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-[2rem] transition-colors duration-500 z-30 pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Expand/Collapse Button */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-200/50 transition-all active:scale-95"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  See More <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
