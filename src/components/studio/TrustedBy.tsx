import ScrollReveal from '../ScrollReveal';

const schoolLogos = [1, 2, 3, 4, 5, 6];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-display leading-tight whitespace-nowrap">
              Trusted By Educational Institutes
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {schoolLogos.map((_, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="bg-white rounded-2xl border border-slate-100 p-8 h-32 flex items-center justify-center group hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500 hover:-translate-y-1">
                <span className="text-slate-400 font-bold text-xs tracking-widest uppercase text-center group-hover:text-purple-500 transition-colors">
                  SCHOOL <br /> LOGO
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
