import icon1 from '../../assets/learners/1sticon.png';
import icon2 from '../../assets/learners/2ndicon.png';
import icon3 from '../../assets/learners/3rdicon.png';
import icon4 from '../../assets/learners/4thicon.png';

const cards = [
  {
    icon: icon1,
    title: "Integrate AI and\nFuture Skills",
    desc: "Integrate AI and future skills into core learning."
  },
  {
    icon: icon2,
    title: "Enhance Academic\nAlignment",
    desc: "Enhance academic and practical learning alignment."
  },
  {
    icon: icon3,
    title: "Innovation-Led\nInstitutions",
    desc: "Position themselves as innovation-led institutions."
  },
  {
    icon: icon4,
    title: "AI-Driven\nClassrooms",
    desc: "Upskill faculty to lead confidently in an\nAI-driven classroom."
  }
];

export default function WhoItsFor() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 font-poppins">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-extrabold text-[#111827] mb-4 tracking-tight">
            Who It's For
          </h2>
          <div className="text-[#4B5563] text-[16px] md:text-[18px] font-medium">
            Forward-Looking K-12 Schools Seeking To:
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i}>
              <div 
                className="group h-full bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(91,50,234,0.12)] hover:border-[#E0D6FF]"
              >
                <div className="mb-8 shrink-0">
                  <img 
                    src={c.icon} 
                    alt={c.title.replace('\n', ' ')} 
                    className="w-[88px] h-[88px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.15] group-hover:-translate-y-1" 
                  />
                </div>

                <h3 className="text-[22px] md:text-[24px] font-extrabold text-[#111827] leading-[1.3] mb-5 whitespace-pre-line">
                  {c.title}
                </h3>

                <p className="text-[#6B7280] text-[15px] leading-[1.65] mt-auto">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
