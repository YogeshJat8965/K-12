import ScrollReveal from '../ScrollReveal';
import partnershipsImg from '../../assets/skill studio/partnerships.png';

export default function Partnerships() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-4">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight font-display">
                Partnerships for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Transformational Learning</span>
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
                <p>
                  We partner with forward-looking schools, industry leaders, and academic bodies to co-create learning that matters.
                </p>
                <p>
                  Whether you're a school seeking future-ready programmes, a brand looking to invest in the next generation, or an institution aligning with NEP 2020, we'd love to build with you.
                </p>
              </div>

              <div>
                <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-wider">
                  PARTNER WITH US
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Image - Same height as content, no cutting, sharp edges */}
          <div className="w-full lg:w-1/2 flex items-center">
            <ScrollReveal direction="left" className="w-full">
              <div className="relative w-full h-full flex justify-end">
                <img
                  src={partnershipsImg}
                  alt="Students building robotics together"
                  className="w-full h-auto max-h-[500px] object-contain lg:ml-auto"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
