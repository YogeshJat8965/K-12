import ScrollReveal from './ScrollReveal';
import img1 from '../assets/virtual internship/Career Clarity Before It Matters.webp';
import img2 from '../assets/virtual internship/A Portfolio That Stands Out.webp';
import img3 from '../assets/virtual internship/Future-Ready Skill Development.webp';
import img4 from '../assets/virtual internship/Verified Credentials.webp';
import img5 from '../assets/virtual internship/Outcome-Focused.webp';

const gains = [
  {
    title: "Career Clarity Before It Matters",
    description: "Explore multiple domains - AI, space, business, design, sustainability, wellness - before making life-shaping stream and career decisions.",
    image: img1,
    color: "#7C3AED",
    bg: "bg-violet-600"
  },
  {
    title: "A Portfolio That Stands Out",
    description: "Every internship produces a real project - a prototype, report, or presentation - that strengthens college applications.",
    image: img2,
    color: "#2563EB",
    bg: "bg-blue-600"
  },
  {
    title: "Future-Ready Skill Development",
    description: "Exposure to high-demand skills: AI & Data, Product Thinking, Financial Literacy, Digital Creativity, Problem Solving.",
    image: img3,
    color: "#0D9488",
    bg: "bg-teal-600"
  },
  {
    title: "Verified Credentials",
    description: "A Digital Skill Passport and certificates that demonstrate initiative and capability beyond academics.",
    image: img4,
    color: "#EA580C",
    bg: "bg-orange-600"
  },
  {
    title: "Confidence & Real-World Thinking",
    description: "Communication, ownership, critical thinking, and execution - built through solving real problems.",
    image: img5,
    color: "#BE185D",
    bg: "bg-pink-600"
  }
];

export default function WhatGain() {
  return (
    <section id="what-gain" className="py-12 lg:py-16 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="mb-2 text-2xl lg:text-3xl">What Students Gain</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto font-medium">Click or hover over the cards to see how Skillzza transforms the learning journey.</p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-5">
          {gains.map((item, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              rotateX={15}
              scale={0.9}
              className="w-full sm:w-[calc(50%-1rem)] lg:flex-1 h-[250px] [perspective:1000px] group"
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">

                {/* FRONT SIDE */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[1.5rem] overflow-hidden bg-white shadow-lg border border-slate-100 flex flex-col">
                  <div className="h-[78%] w-full relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex-1 p-2 flex flex-col justify-center bg-white text-center">
                    <h3 className="font-extrabold text-[11px] lg:text-[13px] text-slate-800 leading-tight px-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[1.5rem] overflow-hidden bg-violet-400 p-6 flex flex-col items-center justify-center text-center">
                  {/* Decorative background circle */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl ${item.bg}`} />

                  <h3 className="text-white font-bold text-base mb-3">
                    Why it matters?
                  </h3>

                  <p className="text-white/80 text-[12px] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


