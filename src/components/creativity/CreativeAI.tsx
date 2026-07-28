import ScrollReveal from '../ScrollReveal';
import { Lightbulb, Network, BookOpen, Users, Palette, Wand2, Brain } from 'lucide-react';
import img1 from '../../assets/digital creativity/img1.webp';
import img2 from '../../assets/digital creativity/img2.webp';
import img3 from '../../assets/digital creativity/img3.webp';

const aiImages = [
  '/landing/1image.png',
  '/landing/2image.png',
  '/landing/3image.png'
];

export default function CreativeAI() {
  return (
    <section className="py-12 md:py-16 bg-[#fafbfd] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="mb-8 max-w-3xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto items-center justify-center">
          {aiImages.map((imgSrc, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up" className="w-full flex justify-center h-auto">
              <img 
                src={imgSrc} 
                alt={`Creative AI feature ${index + 1}`} 
                className={`w-full h-auto object-contain object-top transition-all duration-400 ease-in-out cursor-pointer ${
                  index === 0 
                    ? 'scale-[1.08] hover:scale-[1.12] hover:-translate-y-2' 
                    : 'scale-100 hover:scale-[1.04] hover:-translate-y-2'
                }`} 
              />
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
