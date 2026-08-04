import { WordReveal, StaggerContainer, StaggerItem, FadeIn3D } from '../animations/ScrollAnimations';

export default function EducatorWhyItMatters() {
  const points = [
    {
      bold: "Technologically Advanced",
      italic: "yet emotionally grounded"
    },
    {
      bold: "Data-Literate",
      italic: "yet ethically aware"
    },
    {
      bold: "Globally Aligned",
      italic: "yet locally relevant"
    }
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-16 font-poppins relative overflow-hidden">

      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F4EFFF] rounded-full blur-[120px] opacity-60 pointer-events-none transform translate-x-1/3 -translate-y-1/3 z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">

          {/* Left Column: Headings and Footer Quote */}
          <StaggerContainer className="flex flex-col justify-center">
            <StaggerItem className="inline-block text-[#5B32EA] font-semibold text-sm tracking-widest uppercase mb-4">
              Why It Matters
            </StaggerItem>

            <h2 className="text-[40px] md:text-[48px] lg:text-[48px] font-extrabold text-[#1A1A2E] leading-[1.1] mb-8 tracking-tight">
              <WordReveal text="You don't have to navigate the future alone." />
            </h2>

            <StaggerItem className="text-[#6B7280] text-[18px] md:text-[20px] leading-[1.7] font-medium max-w-xl mb-16">
              SKILLZZA K-12 is your ally in building classrooms that bridge the gap between innovation and humanity.
            </StaggerItem>

            {/* Quote Box without background, just typography and border */}
            <StaggerItem className="border-l-[4px] border-[#5B32EA] pl-6 md:pl-8 py-2">
              <p className="text-[22px] md:text-[28px] font-bold text-[#1A1A2E] leading-[1.3] tracking-tight mb-3">
                The future of learning isn't AI vs teachers - it's <span className="text-[#5B32EA]">AI with teachers.</span>
              </p>
              <p className="text-[#6B7280] text-[16px] md:text-[18px] font-medium">
                Together, we can unlock the next chapter in education.
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Right Column: Typography-driven points */}
          <div className="flex flex-col gap-10 md:gap-14 relative">

            {/* Minimal vertical connecting line */}
            <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#5B32EA]/20 via-[#5B32EA]/10 to-transparent z-0 hidden md:block"></div>

            {points.map((point, idx) => (
              <FadeIn3D key={idx} delay={0.2 + (idx * 0.15)} y={30} rotateX={5} className="relative z-10 flex items-start gap-6 group">

                {/* Clean dot indicator instead of icons */}
                <div className="hidden md:flex shrink-0 mt-3 relative">
                  <div className="w-6 h-6 rounded-full bg-white border-[3px] border-[#5B32EA] transition-transform duration-300 group-hover:scale-125"></div>
                </div>

                <div>
                  <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-extrabold text-[#111827] leading-[1.2] tracking-tight mb-1 transition-colors duration-300 group-hover:text-[#5B32EA]">
                    {point.bold}
                  </h3>
                  <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-[#6B7280] italic leading-[1.2]">
                    {point.italic}
                  </p>
                </div>
              </FadeIn3D>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
