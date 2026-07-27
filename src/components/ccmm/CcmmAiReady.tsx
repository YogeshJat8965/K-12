import React from 'react';
import { Brain, Target, ShieldCheck } from 'lucide-react';
import aiReadyImg from '../../assets/CCMM/ai ready.webp';

export default function CcmmAiReady() {
  const cards = [
    {
      icon: <Brain className="w-6 h-6 text-[#5B45FF]" />,
      iconBg: 'bg-[#5B45FF]/10',
      title: (
        <>
          What Is <span className="text-[#5B45FF]">CCMM?</span>
        </>
      ),
      desc: "The Cognitive Computing Maturity Model (CCMM) Is The First AI Maturity Standard Built Specifically For K-12 Schools. It Is Skillzza's Signature Diagnostic And Certification Framework That Measures Exactly Where Your School Stands On Its AI Journey, Prescribes A Stage-Wise Transformation Roadmap, And Certifies Your Institution On Completion."
    },
    {
      icon: <Target className="w-6 h-6 text-[#5B45FF]" />,
      iconBg: 'bg-[#5B45FF]/10',
      title: (
        <>
          The <span className="text-[#5B45FF]">NAAC</span> Of AI Readiness
        </>
      ),
      desc: 'Think Of CCMM As The NAAC Of AI Readiness - A Structured, Evidence-Based, Nationally Benchmarked Standard That Turns A Vague Aspiration ("We Want To Be Future-Ready") Into A Measurable, Certifiable Outcome.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#5B45FF]" />,
      iconBg: 'bg-[#5B45FF]/10',
      title: (
        <>
          CCMM School <span className="text-[#5B45FF]">Certification</span>
        </>
      ),
      desc: 'Think Of CCMM As The NAAC Of AI Readiness - A Structured, Evidence-Based, Nationally Benchmarked Standard That Turns A Vague Aspiration ("We Want To Be Future-Ready") Into A Measurable, Certifiable Outcome.'
    }
  ];

  return (
    <section className="w-full bg-white font-poppins py-12 lg:py-16 overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-[#111827] leading-[1.15] tracking-tight mb-4">
              How <span className="text-[#5B45FF]">AI-ready</span> is <br />
              your school, really?
            </h2>
            
            <div className="w-16 h-1 bg-[#5B45FF] mb-6 rounded-full"></div>
            
            <p className="text-gray-600 font-medium text-[15px] md:text-[17px] leading-relaxed mb-10 max-w-xl">
              Every Principal, Trustee, And Academic Head Is Being Asked The Same Question By Parents, Boards, And Regulators - And Very Few Can Answer It With Evidence.
            </p>

            <div className="flex flex-col gap-4">
              {cards.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(91,69,255,0.12)] hover:-translate-y-1.5 hover:border-[#5B45FF]/30 transition-all duration-300 ease-out flex flex-col gap-4 items-start group relative overflow-hidden"
                >
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-50/0 group-hover:from-purple-50/50 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
                  
                  <div className="relative z-10 w-full">
                    <h4 className="text-[17px] font-bold text-[#111827] mb-2 group-hover:text-[#5B45FF] transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Image Area */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-full rounded-[32px] overflow-hidden shadow-2xl">
              <img 
                src={aiReadyImg} 
                alt="AI Ready School Presentation" 
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
