import ScrollReveal from '../ScrollReveal';
import creativeAiImg from '../../assets/digital creativity/creative AI.png';

const aiCapabilities = [
  {
    number: "01",
    title: "Creativity",
    desc: "Creativity defines the future of teaching, together with research about critical to create-to a straight line... Empowering students to express their unique ideas through digital art and design, fostering an environment where imagination knows no bounds."
  },
  {
    number: "02",
    title: "Generative AI",
    desc: "Generative AI is estimated to generative and explore modern... Utilizing cutting-edge AI tools to assist in the creative process, allowing students to iterate faster and explore complex concepts with ease and precision."
  },
  {
    number: "03",
    title: "AI Literacy",
    desc: "AI Literacy is comprises reflecting AI education across for... Building a foundational understanding of how AI works, its ethical implications, and how to leverage it responsibly as a powerful creative partner."
  }
];

export default function CreativeAI() {
  return (
    <section className="py-24 bg-[#FAFCFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display leading-tight">
              Creative AI in Classrooms
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
              Three intersecting capabilities define the future of learning. Together, they equip students to imagine, create, and think critically in an AI-powered world.
            </p>
          </ScrollReveal>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-2">
          {aiCapabilities.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="flex flex-col h-full">
                <span className="text-5xl font-black text-[#FA0F00] mb-6 opacity-80 font-display">
                  {item.number}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base font-medium">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Illustration */}
        <ScrollReveal delay={0.4} direction="up" distance={50}>
          <div className="relative w-[140%] -ml-[10%] md:w-[140%] md:-ml-[20%] mt-8">
            <img
              src={creativeAiImg}
              alt="Creative AI Brain Illustration"
              className="w-full h-[350px] md:h-[400px] object-fill"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
