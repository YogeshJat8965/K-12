import flagshipImg from '../../assets/digital creativity/flagship.png';
import ScrollReveal from '../ScrollReveal';

export default function FlagshipSection() {
  return (
    <section className="py-24 bg-[#FAFCFD] overflow-hidden relative">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-red-400/5 rounded-full blur-[100px]" />
        <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

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
