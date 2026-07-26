import levelsImg from '../../assets/digital creativity/levels.png';
import ScrollReveal from '../ScrollReveal';

export default function LevelsSection() {
  return (
    <section className="py-2 bg-[#F4F4F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="w-full max-w-5xl mx-auto">
            <img 
              src={levelsImg} 
              alt="Program Levels" 
              className="w-full h-auto object-contain relative z-10" 
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
