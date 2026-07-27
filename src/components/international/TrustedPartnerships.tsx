import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Building2, Landmark, Share2, 
  Globe, Lightbulb, ArrowRight, Play 
} from 'lucide-react';
import bannerImg from '../../assets/International Studio/banner.webp';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    title: "A school\nleader",
    icon: Building2,
    color: "#6366F1", // Indigo
    blobBg: "linear-gradient(135deg, #E0E7FF 0%, #A5B4FC 100%)",
    blobRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
    shadow: "0px 10px 30px rgba(99, 102, 241, 0.15)"
  },
  {
    title: "An academic\ninstitution",
    icon: Landmark,
    color: "#6366F1",
    blobBg: "linear-gradient(135deg, #E0E7FF 0%, #A5B4FC 100%)",
    blobRadius: "40% 60% 30% 70% / 60% 40% 70% 40%",
    shadow: "0px 10px 30px rgba(99, 102, 241, 0.15)"
  },
  {
    title: "A learning\nnetwork",
    icon: Share2,
    color: "#6366F1",
    blobBg: "linear-gradient(135deg, #E0E7FF 0%, #A5B4FC 100%)",
    blobRadius: "50% 50% 60% 40% / 40% 70% 30% 60%",
    shadow: "0px 10px 30px rgba(99, 102, 241, 0.15)"
  },
  {
    title: "A global education\npartner",
    icon: Globe,
    color: "#6366F1",
    blobBg: "linear-gradient(135deg, #E0E7FF 0%, #A5B4FC 100%)",
    blobRadius: "70% 30% 50% 50% / 50% 50% 60% 40%",
    shadow: "0px 10px 30px rgba(99, 102, 241, 0.15)"
  },
  {
    title: "An innovation-\nfocused organisation",
    icon: Lightbulb,
    color: "#6366F1",
    blobBg: "linear-gradient(135deg, #E0E7FF 0%, #A5B4FC 100%)",
    blobRadius: "40% 60% 60% 40% / 60% 30% 70% 40%",
    shadow: "0px 10px 30px rgba(99, 102, 241, 0.15)"
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full pt-8 md:pt-10 pb-8 md:pb-12 bg-white font-poppins relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#EEF2FF] rounded-full blur-[80px] pointer-events-none opacity-60"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#FFF7ED] rounded-full blur-[80px] pointer-events-none opacity-60"></div>
      
      {/* Dot Matrix Decoration Left */}
      <div className="absolute top-[30%] left-[5%] grid grid-cols-4 gap-2 opacity-10 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-[#1A1A2E]"></div>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="tp-header text-center w-full max-w-[900px] mb-8">
          <h2 className="text-[40px] md:text-[50px] font-extrabold text-[#101828] leading-tight mb-4 tracking-tight">
            Trusted Learning <span className="text-[#7C3AED]">Partnerships</span>
          </h2>
          
          {/* Small centered divider */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-[40px] h-[2px] bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-[#5B61FE]"></div>
            <div className="w-[40px] h-[2px] bg-[#5B61FE]"></div>
          </div>

          <p className="text-[#475467] text-[15px] md:text-[16px] leading-relaxed font-medium mb-8 px-4 md:px-10">
            We collaborate with forward-looking schools, institutions, educators, and industry partners to build meaningful future-skills ecosystems for the next generation.
          </p>
          
          {/* Whether You Are */}
          {/* <div className="flex items-center justify-center w-full max-w-[600px] mx-auto mb-6">
            <div className="flex-1 flex items-center justify-end pr-4 opacity-50">
              <div className="w-full h-[1.5px] bg-gray-200"></div>
              <div className="w-2 h-2 rounded-full bg-[#C084FC] shrink-0 ml-1"></div>
            </div>
            <h3 className="text-[#101828] text-[20px] font-bold shrink-0 px-2">
              Whether You Are
            </h3>
            <div className="flex-1 flex items-center justify-start pl-4 opacity-50">
              <div className="w-2 h-2 rounded-full bg-[#F59E0B] shrink-0 mr-1"></div>
              <div className="w-full h-[1.5px] bg-gray-200"></div>
            </div>
          </div> */}
        </div>

        {/* Timeline Graphic */}
        <div className="tp-grid w-full relative mb-8">
          
          {/* Removed SVG Wavy Line Background as requested */}

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0 relative z-10 w-full px-[5%]">
            {partners.map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div key={idx} className="tp-card flex flex-col items-center group w-[160px]">
                  
                  {/* Organic Blob & Icon */}
                  <div className="relative w-[130px] h-[130px] flex items-center justify-center mb-6">
                    {/* Background Blob */}
                    <div 
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 animate-[spin_15s_linear_infinite]"
                      style={{ 
                        background: partner.blobBg,
                        borderRadius: partner.blobRadius,
                        boxShadow: partner.shadow
                      }}
                    ></div>
                    
                    {/* Inner White Circle */}
                    <div className="relative w-[65px] h-[65px] bg-white rounded-full flex items-center justify-center shadow-sm z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                      <Icon size={30} style={{ color: partner.color }} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[15px] font-bold text-[#101828] leading-snug whitespace-pre-line text-center px-2">
                    {partner.title}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>

        {/* Banner with Buttons Overlaid (Desktop/Tablet Only) */}
        <div className="hidden md:flex w-full max-w-[1200px] mt-10 relative rounded-[24px] overflow-hidden items-end justify-end pb-[6%] md:pb-[4%] pr-[5%] lg:pr-[1%] shadow-lg border border-gray-100" style={{ aspectRatio: '16/4.2' }}>
          {/* Background Banner Image */}
          <img 
            src={bannerImg} 
            alt="Welcome Opportunities Banner" 
            className="absolute inset-0 w-full h-full object-cover z-0" 
          />
          
          {/* Buttons Overlay */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 px-4">
            <button onClick={() => window.location.href = '/contact'} className="flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3 bg-[#7C3AED] text-white rounded-[8px] font-bold text-[13px] sm:text-[14px] hover:bg-[#6D28D9] hover:shadow-[0_10px_20px_-10px_rgba(124,58,237,0.6)] transition-all duration-300 tracking-wide uppercase">
              Partner with Skillzza
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
            <button onClick={(e) => e.preventDefault()} className="flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3 bg-[#7C3AED] text-white rounded-[8px] font-bold text-[13px] sm:text-[14px] hover:bg-[#6D28D9] hover:shadow-[0_10px_20px_-10px_rgba(124,58,237,0.6)] transition-all duration-300 tracking-wide uppercase">
              Request School Presentation
              <Play size={14} fill="currentColor" />
            </button>
          </div>
        </div>

        {/* Mobile-Only Button */}
        <div className="flex md:hidden w-full justify-center mt-8">
          <button onClick={(e) => e.preventDefault()} className="flex items-center justify-center gap-2 px-6 py-3.5 w-full max-w-[300px] bg-white border-2 border-[#3B82F6] text-[#3B82F6] rounded-[12px] font-bold text-[14px] shadow-[0_4px_14px_rgba(59,130,246,0.15)] active:scale-95 transition-all duration-200 tracking-wide uppercase">
            Request School Presentation
            <Play size={14} fill="currentColor" />
          </button>
        </div>

      </div>
    </section>
  );
}
