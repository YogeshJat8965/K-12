import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BarChart3,
  BrainCircuit,
  PenTool,
  Bot,
  Users,
  Globe2,
  ArrowRight
} from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

// Using valid images from virtual internship
import img1 from '../../assets/virtual internship/1img.png';
import img2 from '../../assets/virtual internship/2img.png';
import img3 from '../../assets/virtual internship/3img.png';
import img4 from '../../assets/virtual internship/4img.png';
import img5 from '../../assets/virtual internship/5img.png';

// New images
import imgInner from '../../assets/International Studio/Inner Compass – Mindfulness & Life Skills.png';
import imgClimate from '../../assets/International Studio/Climate Tech & Green Innovation.png';
import imgData from '../../assets/International Studio/Data Intelligence.png';
import imgNoCode from '../../assets/International Studio/No-Code Builders.png';
import imgAnimation from '../../assets/International Studio/Animation & Gamification.png';
import imgFinance from '../../assets/International Studio/Financial Fun.png';
import imgCyber from '../../assets/International Studio/Cybersecurity & Digital Safety.png';
import imgPublicSpeaking from '../../assets/International Studio/Public Speaking & Debate.png';
import imgJournalist from '../../assets/International Studio/oung Journalists & Media Studio.png';
import imgSpace from '../../assets/International Studio/Space & Astronomy.png';

gsap.registerPlugin(ScrollTrigger);

const studios = [
  {
    title: "Gen AI & Deep Tech Studio",
    tagline: "Think. Build. Disrupt.",
    grades: "Grades 6-12",
    tags: ["Generative AI", "AI Fundamentals", "Prompt Engineering", "Emerging Technologies", "AI Ethics", "Creative AI Tools"],
    colorHex: "#3B82F6",
    image: img1
  },
  {
    title: "Digital Creativity &\nAI Skills Studio",
    subtitle: "Powered by Adobe",
    tagline: "Create. Design. Innovate.",
    grades: "Grades 5-10",
    tags: ["Graphic Design", "Digital Storytelling", "Creative Media", "Visual Communication", "Content Creation", "AI-Powered Creativity"],
    colorHex: "#EA1F15",
    image: img2
  },
  {
    title: "Junior Agentic AI\nEngineer Studio",
    tagline: "Build AI That Acts. Create Agents That Think.",
    grades: "Grades 8-12",
    tags: ["AI Agents", "Agentic Frameworks", "Automation Logic", "Machine Learning", "System Design"],
    colorHex: "#16A34A",
    image: img3
  },
  {
    title: "Future Leaders &\nEntrepreneurship Studio",
    tagline: "Build It. Lead It. Scale It.",
    grades: "Grades 6-12",
    tags: ["Leadership", "Entrepreneurship", "Team Collaboration", "Design Thinking", "Innovation Mindset", "Communication Skills"],
    colorHex: "#EA580C",
    image: img4
  },
  {
    title: "Global Ambassador &\nWorld Affairs Studio",
    tagline: "Speak for Nations. Shape the World.",
    grades: "Grades 6-12",
    tags: ["Global Awareness", "Public Policy", "Sustainable Development", "Diplomacy", "International Perspectives", "Cross-cultural Understanding"],
    colorHex: "#0284C7",
    image: img5
  },
  {
    title: "Inner Compass – Mindfulness\n& Life Skills Studio",
    tagline: "Know Yourself. Lead Yourself.",
    grades: "Grades 1-12",
    tags: ["Mindfulness", "Emotional Intelligence", "Self-Awareness", "Resilience", "Well-being", "Life Skills"],
    colorHex: "#E11D48",
    image: imgInner
  },
  {
    title: "Climate Tech &\nGreen Innovation Studio",
    tagline: "Engineer the Solutions. Lead the Transition.",
    grades: "Grades 6-12",
    tags: ["Climate Science", "Sustainability", "Green Tech", "Renewable Energy", "Environmental Innovation", "Eco-Design"],
    colorHex: "#059669",
    image: imgClimate
  },
  {
    title: "Data Intelligence\nStudio",
    tagline: "Read the World in Data. Never Be Fooled Again.",
    grades: "Grades 6-12",
    tags: ["Data Analytics", "Critical Thinking", "Statistics", "Data Visualization", "Information Literacy", "Pattern Recognition"],
    colorHex: "#D97706",
    image: imgData
  },
  {
    title: "No-Code\nBuilders Studio",
    tagline: "Build Without Barriers. Launch Without Code.",
    grades: "Grades 5-12",
    tags: ["No-Code Tools", "Web Development", "App Building", "Rapid Prototyping", "Digital Products", "Logic Mapping"],
    colorHex: "#2563EB",
    image: imgNoCode
  },
  {
    title: "Animation &\nGamification Studio",
    tagline: "Bring Stories to Life.",
    grades: "Grades 3-12",
    tags: ["2D/3D Animation", "Game Design", "Storyboarding", "Interactive Media", "Character Design", "Digital Art"],
    colorHex: "#DC2626",
    image: imgAnimation
  },
  {
    title: "Financial\nFunda Studio",
    tagline: "The Money School Your School Never Gave You.",
    grades: "Grades 5-12",
    tags: ["Financial Literacy", "Investing", "Budgeting", "Economics", "Wealth Management", "Personal Finance"],
    colorHex: "#15803D",
    image: imgFinance
  },
  {
    title: "Cybersecurity &\nDigital Safety Studio",
    tagline: "Defend the Digital World. Own Your Online Presence.",
    grades: "Grades 6-12",
    tags: ["Cyber Safety", "Ethical Hacking", "Digital Footprint", "Data Privacy", "Network Security", "Online Protection"],
    colorHex: "#F59E0B",
    image: imgCyber
  },
  {
    title: "Public Speaking &\nDebate Studio",
    tagline: "Find Your Voice. Command Any Room.",
    grades: "Grades 3-12",
    tags: ["Public Speaking", "Debate", "Persuasion", "Elocution", "Speech Writing", "Confidence Building"],
    colorHex: "#3B82F6",
    image: imgPublicSpeaking
  },
  {
    title: "Young Journalists &\nMedia Studio",
    tagline: "Find the Story. Tell it Boldly.",
    grades: "Grades 4-12",
    tags: ["Journalism", "Media Literacy", "Writing", "Reporting", "Fact-Checking", "Digital Publishing"],
    colorHex: "#EF4444",
    image: imgJournalist
  },
  {
    title: "Space &\nAstronomy Studio",
    tagline: "Reach beyond the horizon. Think at a universal scale.",
    grades: "Grades 5-12",
    tags: ["Astronomy", "Space Exploration", "Astrophysics", "Cosmology", "Rocketry", "Planetary Science"],
    colorHex: "#22C55E",
    image: imgSpace
  }
];

export default function FutureSkillsStudios() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleStudios = isExpanded ? studios : studios.slice(0, 9);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.fromTo('.fss-intro',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.fss-intro', start: 'top 85%' } }
      );

      // Bottom button
      gsap.fromTo('.fss-btn',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.fss-btn', start: 'top 95%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-8 pb-12 bg-[#F3F4F6] overflow-hidden font-poppins">

      {/* Background elements */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#E0E7FF] rounded-full blur-[100px] opacity-40 pointer-events-none z-0"></div>
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#DBEAFE] rounded-full blur-[120px] opacity-40 pointer-events-none z-0"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Intro */}
        <div className="text-center max-w-[800px] mx-auto mb-8 md:mb-16">
          <h2 className="fss-intro text-[36px] md:text-[44px] font-extrabold text-[#1A1A2E] leading-[1.15] mb-5 tracking-tight">
            Our Future <span className="text-[#7C3AED]">Skill Studio</span>
          </h2>
          <p className="fss-intro text-[#6B7280] text-[16px] font-medium max-w-[700px] mx-auto leading-relaxed">
            A curated portfolio of immersive skill studios designed to build capability, confidence, creativity, and future readiness. Hover over the cards to view the key focus areas.
          </p>
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {visibleStudios.map((studio, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              rotateX={15}
              scale={0.9}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] h-[320px] [perspective:1000px] group"
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">

                {/* FRONT SIDE */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[1.5rem] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col">
                  <div className="h-[75%] w-full relative overflow-hidden">
                    <img
                      src={studio.image}
                      alt={studio.title.replace('\n', ' ')}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-100" />
                  </div>
                  <div className="flex-1 p-4 flex flex-col items-center justify-center bg-white text-center">
                    <h3 className="font-bold text-[15px] text-[#1A1A2E] leading-tight px-1 whitespace-pre-line">
                      {studio.title}
                    </h3>
                    {studio.subtitle && (
                      <p className="text-[11px] text-[#EA1F15] font-bold mt-1 uppercase tracking-wider">{studio.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[1.5rem] overflow-hidden bg-[#7C3AED] p-6 flex flex-col items-center justify-center text-center shadow-xl">
                  {/* Decorative background circle */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl bg-white" />

                  <p className="text-white font-bold text-[15px] mb-2 leading-tight">
                    {studio.tagline}
                  </p>
                  
                  <p className="text-white/80 font-semibold text-[13px] mb-4">
                    {studio.grades}
                  </p>

                  <h3 className="text-white font-bold text-[14px] mb-3 border-b border-white/20 pb-1 uppercase tracking-wider">
                    Key Focus Areas
                  </h3>

                  <div className="flex flex-wrap justify-center gap-2">
                    {studio.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white/10 border border-white/20 text-white text-[11px] font-medium py-1 px-2.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Studios Button */}
        <div className="mt-8 md:mt-16 flex justify-center fss-btn">
          <button onClick={() => setIsExpanded(!isExpanded)} className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 bg-[#7C3AED] rounded-full overflow-hidden hover:bg-[#6D28D9] hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)]">
            <span className="relative z-10 text-[15px]">{isExpanded ? "Show Less" : "Explore All 15+ Studios"}</span>
            <ArrowRight className={`relative z-10 w-5 h-5 transition-transform duration-300 ${isExpanded ? "-rotate-90" : "group-hover:translate-x-1"}`} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
