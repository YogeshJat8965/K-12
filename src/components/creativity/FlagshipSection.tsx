import flagshipImg from '../../assets/digital creativity/flagship.webp';
import ScrollReveal from '../ScrollReveal';

export default function FlagshipSection() {
  return (
    <section className="py-2 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="w-full max-w-6xl mx-auto">
            <img 
              src={flagshipImg} 
              alt="Flagship Program" 
              className="w-full h-auto object-contain relative z-10" 
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
