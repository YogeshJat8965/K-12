import ScrollReveal from '../ScrollReveal';
import bgImg from '../../assets/Homepage (1920x 1080px) – 2/logo/background img.webp';

const cardsData = [
  {
    title: "Institutional Recognition & Impact",
    items: [
      "Recognition as an official participant in the Adobe Express Skills Academy.",
      "Access to digital creativity and AI-powered learning programmes for the entire school.",
      "Curriculum-aligned resources that support modern classroom learning.",
      "Professional development training for teachers to enable creative teaching methods.",
      "Opportunities for students to participate in innovation challenges and creative competitions.",
      "Digital certifications and institutional recognition for outstanding performance."
    ]
  },
  {
    title: "Global Certification & Growth",
    items: [
      "Earn the globally recognised Adobe Creative Educator certification.",
      "Participate in teacher training and professional development programmes.",
      "Access Adobe Express educational tools for creative classroom integration.",
      "Ready-to-use, curriculum-aligned teaching resources and activity templates.",
      "Join a global community of innovative educators and collaborators.",
      "Recognition through the Adobe Express Skills Academy.",
      "Access to premium educational licences for teachers and students."
    ]
  },
  {
    title: "Creative Confidence & Career Exposure",
    items: [
      "Hands-on learning with Adobe Express for digital creativity and design.",
      "Explore AI-powered creative tools for storytelling, design, and communication.",
      "Experience project-based learning through real-world creative challenges.",
      "Build future-ready skills in design thinking, graphic design, and digital content creation.",
      "Participate in Creative AI Clubs and collaborative innovation projects.",
      "Earn digital badges, certificates, and achievement recognition.",
      "Gain career exposure through expert mentorship and industry insights.",
      "Access premium educational tools and creative learning resources."
    ]
  }
];

export default function EcosystemTransformation() {
  return (
    <section 
      className="py-12 md:py-16 bg-[#F8F9FA] overflow-hidden bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url("${bgImg}")` }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12 w-full mx-auto">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[46px] font-extrabold text-[#1A1A2E] font-poppins mb-4 tracking-tight leading-tight md:whitespace-nowrap">
              Transforming the Education Ecosystem
            </h2>
            <p className="text-[17px] md:text-[20px] text-[#4B5563] font-medium">
              Through Digital Creativity & AI Learning.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {cardsData.map((card, idx) => (
            <ScrollReveal key={idx} delay={0.2 * idx} direction="up">
              <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-[#E5E7EB] hover:shadow-[0_20px_50px_-15px_rgba(108,60,247,0.15)] hover:border-[#6C3CF7]/30 transition-all duration-300 h-full flex flex-col group">
                
                {/* Card Title */}
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#E53E3E] mb-6 leading-tight group-hover:text-[#6C3CF7] transition-colors duration-300">
                  {card.title}
                </h3>
                
                {/* Divider */}
                <div className="w-12 h-1 bg-[#E53E3E] rounded-full mb-8 group-hover:bg-[#6C3CF7] transition-colors duration-300"></div>
                
                {/* Bullet Points */}
                <ul className="flex flex-col gap-4 flex-1">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 min-w-[6px] w-[6px] h-[6px] rounded-full bg-[#E53E3E] group-hover:bg-[#6C3CF7] transition-colors duration-300 shadow-[0_0_8px_rgba(229,62,62,0.5)] group-hover:shadow-[0_0_8px_rgba(108,60,247,0.5)]"></div>
                      <span className="text-[14px] md:text-[15px] leading-relaxed text-[#4B5563] font-medium group-hover:text-[#1A1A2E] transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
