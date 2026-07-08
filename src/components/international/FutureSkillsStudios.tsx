import { useEffect, useRef } from 'react';
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

gsap.registerPlugin(ScrollTrigger);

const studios = [
  {
    title: "Gen AI &\nDeep Tech Studio",
    desc: "Students explore Artificial Intelligence, emerging technologies, prompt engineering, and ethical AI applications through hands-on learning and guided innovation projects.",
    theme: "purple",
    icon: BrainCircuit,
    tags: ["Generative AI", "AI Fundamentals", "Prompt Engineering", "Emerging Technologies", "AI Ethics", "Creative AI Tools"],
    colorHex: "#6366F1",
    bgHex: "#EEF2FF",
    image: img1,
    bgClass: "bg-indigo-600"
  },
  {
    title: "Digital Creativity\n& AI Studio",
    subtitle: "Powered by Adobe",
    desc: "Students learn modern digital creativity using industry-relevant tools for design, storytelling, branding, visual communication, and AI-assisted creative workflows.",
    theme: "blue",
    icon: PenTool,
    tags: ["Graphic Design", "Digital Storytelling", "Creative Media", "Visual Communication", "Content Creation", "AI-Powered Creativity"],
    colorHex: "#2563EB",
    bgHex: "#EFF6FF",
    image: img2,
    bgClass: "bg-blue-600"
  },
  {
    title: "AI Builders\nStudio",
    desc: "Students develop foundational AI engineering and computational thinking skills through beginner-friendly innovation projects and intelligent systems exploration.",
    theme: "green",
    icon: Bot,
    tags: ["AI Applications", "Intelligent Systems", "Automation Logic", "Problem-Solving", "AI Innovation Challenges"],
    colorHex: "#16A34A",
    bgHex: "#F0FDF4",
    image: img3,
    bgClass: "bg-green-600"
  },
  {
    title: "Future Leaders &\nEntrepreneurship Studio",
    desc: "Students build leadership, collaboration, entrepreneurial thinking, innovation mindset, and communication skills through practical activities and real-world simulations.",
    theme: "orange",
    icon: Users,
    tags: ["Leadership", "Entrepreneurship", "Team Collaboration", "Design Thinking", "Innovation Mindset", "Communication Skills"],
    colorHex: "#EA580C",
    bgHex: "#FFF7ED",
    image: img4,
    bgClass: "bg-orange-600"
  },
  {
    title: "Global Ambassador &\nWorld Affairs Studio",
    desc: "Students explore global citizenship, diplomacy, sustainability, international affairs, and cross-cultural communication.",
    theme: "teal",
    icon: Globe2,
    tags: ["Global Awareness", "Public Policy Basics", "Sustainable Development", "Communication", "International Perspectives", "Cross-cultural Understanding"],
    colorHex: "#0D9488",
    bgHex: "#F0FDFA",
    image: img5,
    bgClass: "bg-teal-600"
  }
];

export default function FutureSkillsStudios() {
  const sectionRef = useRef<HTMLElement>(null);

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
            Our Future <span className="text-[#7C3AED]">Skills Studios</span>
          </h2>
          <p className="fss-intro text-[#6B7280] text-[16px] font-medium max-w-[700px] mx-auto leading-relaxed">
            A Curated Portfolio Of Immersive Skill Studios Designed To Build Capability, Confidence, Creativity, And Future Readiness. Hover over the cards to view the Key Focus Areas.
          </p>
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {studios.map((studio, i) => (
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

                    {/* Removed overlay icon as requested */}
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-center bg-white text-center">
                    <h3 className="font-bold text-[15px] text-[#1A1A2E] leading-tight px-1 whitespace-pre-line">
                      {studio.title}
                    </h3>
                    {studio.subtitle && (
                      <p className="text-[11px] text-[#2563EB] font-bold mt-1 uppercase tracking-wider">{studio.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[1.5rem] overflow-hidden bg-[#7C3AED] p-6 flex flex-col items-center justify-center text-center shadow-xl">
                  {/* Decorative background circle */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl bg-white" />

                  <h3 className="text-white font-bold text-[18px] mb-4 border-b border-white/20 pb-2">
                    Key Focus Areas
                  </h3>

                  <div className="flex flex-wrap justify-center gap-2">
                    {studio.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white/10 border border-white/20 text-white text-[12px] font-medium py-1 px-3 rounded-full">
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
          <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 bg-[#2563EB] rounded-full overflow-hidden hover:bg-[#1D4ED8] hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)]">
            <span className="relative z-10 text-[15px]">Explore All 15+ Studios</span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
