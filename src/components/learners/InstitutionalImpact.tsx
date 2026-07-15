import { WordReveal, StaggerContainer, StaggerItem, FadeIn3D } from '../animations/ScrollAnimations';
import icon1 from '../../assets/learners/icon1.png';
import icon2 from '../../assets/learners/icon2.png';
import icon3 from '../../assets/learners/icon3.png';
import icon4 from '../../assets/learners/icon4.png';

const impactCards = [
  {
    icon: icon1,
    title: "Personalized\nLearning Outcomes",
    desc: "Adaptive pathways and performance insights that meet every student where they are."
  },
  {
    icon: icon2,
    title: "Portfolio-Driven\nEducation",
    desc: "Certified projects, digital credentials, and documented achievements that travel with the learner."
  },
  {
    icon: icon3,
    title: "Higher Student\nEngagement",
    desc: "Gamified, application-based learning models that students genuinely look forward to."
  },
  {
    icon: icon4,
    title: "Global\nExposure",
    desc: "Collaborative cohorts and cross-cultural innovation programmes that expand horizons."
  }
];

export default function InstitutionalImpact() {
  return (
    <section className="w-full bg-[#F5F7FA] py-20 lg:py-24 font-poppins">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <style>{`
          @media (max-width: 768px) {
            .impact-icon {
              height: 60px !important;
              max-width: 60px !important;
              object-fit: contain !important;
            }
          }
        `}</style>

        <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-extrabold text-[#1A1A2E] leading-[1.2] mb-16 tracking-tight text-center">
          <WordReveal text="Institutional Impact" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactCards.map((card, idx) => (
            <FadeIn3D key={idx} delay={idx * 0.15} y={40} rotateX={10}>
              <div
                className="group h-full bg-white rounded-[20px] p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(91,50,234,0.12)] hover:border-[#E0D6FF]"
              >
                <div className="mb-8">
                  <img src={card.icon} alt={card.title} className="impact-icon h-[72px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.15] group-hover:-translate-y-1" />
                </div>

                <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#111827] mb-4 leading-[1.2] whitespace-pre-line">
                  {card.title}
                </h3>

                <p className="text-[#6B7280] text-[14px] md:text-[15px] leading-[1.65]">
                  {card.desc}
                </p>
              </div>
            </FadeIn3D>
          ))}
        </div>

      </div>
    </section>
  );
}
