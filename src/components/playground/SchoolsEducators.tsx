import schoolsImg from '../../assets/AI Playground/For Schools & Educators.webp';
import ScrollReveal from '../ScrollReveal';

export default function SchoolsEducators() {
  return (
    <section className="py-24 bg-[#D7B1EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            For <span className="text-purple-600">Schools & Educators</span>
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.1}>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-4 max-w-3xl mx-auto">
            Bring AI Playground into your classroom as a structured, moderated learning tool - not a black-box toy. Perfect for AI clubs, computer labs, creative writing periods, and cross-disciplinary projects.
          </p>
        </ScrollReveal>

        {/* Image */}
        <ScrollReveal delay={0.2}>
          <div className="relative">
            {/* Decorative background element - kept subtle */}
            <div className="absolute -inset-10 bg-purple-100 rounded-[3rem] rotate-1 scale-95 opacity-30 blur-3xl pointer-events-none" />

            <div className="relative">
              <img
                src={schoolsImg}
                alt="For Schools & Educators"
                className="w-full h-auto rounded-[3rem]"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent, black 15%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%)'
                }}
              />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
