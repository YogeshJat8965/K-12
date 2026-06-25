import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Building2, Landmark, Share2, 
  Globe, Lightbulb, ArrowRight, Play 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    title: "A school\nleader",
    icon: Building2,
    color: "#6366F1", // Indigo
    bg: "#E0E7FF"     // Indigo-100
  },
  {
    title: "An academic\ninstitution",
    icon: Landmark,
    color: "#F43F5E", // Rose
    bg: "#FFE4E6"     // Rose-100
  },
  {
    title: "A learning\nnetwork",
    icon: Share2,
    color: "#F97316", // Orange
    bg: "#FFEDD5"     // Orange-100
  },
  {
    title: "A global education\npartner",
    icon: Globe,
    color: "#22C55E", // Green
    bg: "#DCFCE7"     // Green-100
  },
  {
    title: "An innovation-\nfocused organisation",
    icon: Lightbulb,
    color: "#A855F7", // Purple
    bg: "#F3E8FF"     // Purple-100
  }
];

export default function TrustedPartnerships() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tp-header', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      gsap.fromTo('.tp-card', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.tp-grid', start: 'top 80%' } }
      );

      gsap.fromTo('.tp-footer', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.tp-footer', start: 'top 90%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full pt-12 pb-24 bg-white font-poppins relative overflow-hidden">
      
      {/* Decorative Solid Blobs */}
      <div className="absolute top-[-5%] right-[-15%] w-[650px] h-[650px] bg-[#F4F7FF] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[5%] left-[-15%] w-[450px] h-[450px] bg-[#FFFBF0] rounded-full pointer-events-none"></div>

      <div className="max-w-[1250px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="tp-header text-center w-full max-w-[900px] mb-10">
          <h2 className="text-[36px] md:text-[44px] font-bold text-[#1A1A2E] leading-tight mb-6">
            Trusted Learning <span className="text-[#3B82F6]">Partnerships</span>
          </h2>
          <p className="text-[#6B7280] text-[16px] md:text-[17px] leading-relaxed font-medium mb-10 px-4 md:px-10">
            We Collaborate With Forward-Looking Schools, Institutions, Educators, And Industry Partners To Build Meaningful Future-Skills Ecosystems For The Next Generation.
          </p>
          <p className="text-[#6B7280] text-[16px] font-medium">
            Whether You Are
          </p>
        </div>

        {/* Flex Row of Partners */}
        <div className="tp-grid w-full flex flex-wrap justify-center items-start gap-4 md:gap-6 lg:gap-8 mb-16 px-4">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div key={idx} className="tp-card flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 group cursor-default w-[140px] md:w-[155px]">
                <div 
                  className="w-[56px] h-[56px] rounded-[14px] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm"
                  style={{ backgroundColor: partner.bg }}
                >
                  <Icon size={26} style={{ color: partner.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] font-bold text-[#1A1A2E] leading-snug whitespace-pre-line text-left">
                  {partner.title}
                </h3>
              </div>
            )
          })}
        </div>

        {/* Footer Text and Buttons */}
        <div className="tp-footer w-full flex flex-col items-center text-center">
          <p className="text-[#6B7280] text-[16px] font-medium mb-10">
            We Welcome Opportunities To Co-Create Transformative Learning Experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button className="flex items-center gap-2 px-8 py-3.5 bg-[#3B82F6] text-white rounded-[6px] font-bold text-[14px] hover:bg-blue-700 hover:shadow-[0_10px_20px_-10px_rgba(59,130,246,0.6)] transition-all duration-300 tracking-wide uppercase">
              Partner with Skillzza
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
            <button className="flex items-center gap-2 px-8 py-3.5 bg-white border border-[#3B82F6] text-[#3B82F6] rounded-[6px] font-bold text-[14px] hover:bg-[#F4F7FF] transition-all duration-300 tracking-wide uppercase">
              Request School Presentation
              <Play size={14} fill="currentColor" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
