import { WordReveal, StaggerContainer, StaggerItem, FadeIn3D } from '../animations/ScrollAnimations';
import icon1 from '../../assets/learners/icon1.webp';
import icon2 from '../../assets/learners/icon2.webp';
import icon3 from '../../assets/learners/icon3.webp';
import icon4 from '../../assets/learners/icon4.webp';

const impactCards = [
  {
    icon: icon1,
    title: "AI Readiness\nAudits",
    desc: "Evaluate your school's technology stack, teaching methodologies, and curriculum alignment for AI readiness using our proprietary CCMM framework."
  },
  {
    icon: icon2,
    title: "Faculty Training\nWorkshops",
    desc: "Tailored PD for whole-school transformation - delivered on-campus, virtually, or hybrid."
  },
  {
    icon: icon3,
    title: "Scalable Learning\nModels",
    desc: "Cross-disciplinary programmes aligned with NEP 2020, IB, Cambridge, and UN SDG frameworks."
  },
  {
    icon: icon4,
    title: "Leadership\nMasterminds",
    desc: "Quarterly peer circles for principals and academic heads to exchange playbooks on AI adoption, governance, and change management."
  },
  {
    icon: icon1,
    title: "Annual Institutional\nBenchmarking",
    desc: "Year-on-year comparison against national and international peer schools, with actionable progression roadmaps."
  }
];

export default function EducatorInstitutionalImpact() {
  return (
    <section className="w-full bg-[#F5F7FA] py-12 lg:py-16 font-poppins">
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

        <StaggerContainer className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-extrabold text-[#1A1A2E] leading-[1.2] mb-6 tracking-tight">
            <WordReveal text="For School Leaders & Institutions" />
          </h2>
          <StaggerItem className="text-[#6B7280] text-[16px] md:text-[18px] leading-[1.7] font-medium">
            We partner with principals, deans, and academic directors to co-create meaningful, AI-first learning models at institutional scale.
          </StaggerItem>
        </StaggerContainer>

        {/* Use a flex layout with wrap and justify-center to handle 5 items beautifully */}
        <div className="flex flex-wrap justify-center gap-6">
          {impactCards.map((card, idx) => (
            <FadeIn3D key={idx} delay={idx * 0.15} y={40} rotateX={10} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-[280px] max-w-[400px]">
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
