import stepsImg from '../../assets/AI Playground/4 Steps.png';
import ScrollReveal from '../ScrollReveal';

export default function HowItWorks() {
  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: '#FAFBFD' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-5 z-10">
          <ScrollReveal>
            <span className="text-purple-600 font-black text-[11px] tracking-[0.3em] uppercase mb-4 block">
              THE PROCESS
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              From Curiosity to Creation in <span className="text-purple-600">4 Steps</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Steps Image */}
        <ScrollReveal delay={0.2}>
          <div className="w-full">
            <img 
              src={stepsImg} 
              alt="How it works - 4 Steps" 
              className="w-full h-auto block"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
