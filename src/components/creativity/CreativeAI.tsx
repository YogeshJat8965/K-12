import ScrollReveal from '../ScrollReveal';
import { Lightbulb, Network, BookOpen, Users, Palette, Wand2, Brain } from 'lucide-react';
import img1 from '../../assets/digital creativity/img1.webp';
import img2 from '../../assets/digital creativity/img2.webp';
import img3 from '../../assets/digital creativity/img3.webp';

const aiCapabilities = [
  {
    number: "01",
    title: "Creativity",
    desc: "Creativity defines the future of teaching, together with research about critical to create-to a straight line... Empowering students to express their unique ideas through digital art and design, fostering an environment where imagination knows no bounds.",
    color: "purple",
    bgClass: "bg-purple-500",
    textClass: "text-purple-600",
    borderClass: "border-purple-200",
    icon: Lightbulb,
    img: img1
  },
  {
    number: "02",
    title: "Generative AI",
    desc: "Generative AI is estimated to generative and explore modern... Utilizing cutting-edge AI tools to assist in the creative process, allowing students to iterate faster and explore complex concepts with ease and precision.",
    color: "orange",
    bgClass: "bg-orange-500",
    textClass: "text-orange-500",
    borderClass: "border-orange-200",
    icon: Network,
    img: img2
  },
  {
    number: "03",
    title: "AI Literacy",
    desc: "AI Literacy is comprises reflecting AI education across for... Building a foundational understanding of how AI works, its ethical implications, and how to leverage it responsibly as a powerful creative partner.",
    color: "blue",
    bgClass: "bg-blue-500",
    textClass: "text-blue-500",
    borderClass: "border-blue-200",
    icon: BookOpen,
    img: img3
  }
];

export default function CreativeAI() {
  return (
    <section className="py-12 md:py-16 bg-[#FAFCFD] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-[3.5rem] font-extrabold mb-4 font-display leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">Creative </span>
              <span className="text-pink-500">AI</span>{' '}
              <span className="text-[#0B192C]">in Classrooms</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full mb-6" />
            <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Three intersecting capabilities define the future of learning. Together, they equip students to imagine, create, and think critically in an AI-powered world.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {aiCapabilities.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up" className="h-full">
              <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden border-[1.5px] border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover object-top" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner */}
        <ScrollReveal delay={0.4} direction="up">
          <div className="max-w-4xl mx-auto bg-white rounded-full border-[1.5px] border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-3 sm:py-4 flex items-center justify-center">
            
            <div className="text-sm md:text-base leading-tight text-center w-full px-4">
              <span className="italic font-bold text-purple-600">Where Creativity Meets Technology.</span>
              <span className="text-slate-300 mx-3 hidden md:inline">|</span>
              <span className="font-medium text-slate-500 block md:inline mt-1 md:mt-0">Preparing students today for the opportunities of tomorrow.</span>
            </div> 

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
