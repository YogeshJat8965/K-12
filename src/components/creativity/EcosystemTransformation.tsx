import tranformingImg from '../../assets/digital creativity/tranforming img.png';
import ScrollReveal from '../ScrollReveal';

export default function EcosystemTransformation() {
  return (
    <section className="py-12 md:py-16 bg-[#F4F4F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display mb-4">
              Transforming the Education Ecosystem
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              Through Digital Creativity & AI Learning.
            </p>
          </ScrollReveal>
        </div>

        {/* Transforming Graphic */}
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.2} direction="up">
            <div className="relative">
              <img
                src={tranformingImg}
                alt="Transforming the Education Ecosystem"
                className="w-full h-auto object-contain"
              />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
