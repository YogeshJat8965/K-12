import endImg from '../../assets/AI Playground/end section.webp';
import ScrollReveal from '../ScrollReveal';

export default function PlaygroundEndBanner() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
            <img 
              src={endImg} 
              alt="Join the AI Revolution" 
              className="w-full h-auto object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
