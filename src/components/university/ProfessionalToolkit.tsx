import React from 'react';
import { LayoutGrid, MonitorSmartphone, Sparkles, Cloud } from 'lucide-react';
import toolkitImg from '../../assets/university/toolkit.webp';

const toolkitItems = [
  {
    id: 1,
    title: "Apps",
    desc: "Over 20 desktop apps, including Adobe Photoshop, Adobe Illustrator, Adobe Express Premium, Premiere Pro, Acrobat, Firefly, After Effects, Lightroom, Adobe Podcast, and more.",
    icon: LayoutGrid,
    bgClass: "bg-[#FAFAFF] border-[#F3F4FE]",
    iconClass: "bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] shadow-purple-500/20"
  },
  {
    id: 2,
    title: "Mobile & Web Apps",
    desc: "Photoshop, Lightroom, Illustrator, Acrobat, and more on mobile and web.",
    icon: MonitorSmartphone,
    bgClass: "bg-[#FFF5F8] border-[#FCECF3]",
    iconClass: "bg-gradient-to-br from-[#F472B6] to-[#E11D48] shadow-pink-500/20"
  },
  {
    id: 3,
    title: "Generative Features",
    desc: "Standard credits for fair use of Adobe Firefly and generative features.",
    icon: Sparkles,
    bgClass: "bg-[#F2FCF9] border-[#E2F7F1]",
    iconClass: "bg-gradient-to-br from-[#34D399] to-[#059669] shadow-emerald-500/20"
  },
  {
    id: 4,
    title: "Cloud Storage",
    desc: "100GB Creative Cloud storage per user.",
    icon: Cloud,
    bgClass: "bg-[#F4F8FF] border-[#E6F0FF]",
    iconClass: "bg-gradient-to-br from-[#60A5FA] to-[#2563EB] shadow-blue-500/20"
  }
];

export default function ProfessionalToolkit() {
  return (
    <section className="w-full bg-white font-poppins pt-20 pb-24">
      <div className="max-w-[1536px] mx-auto px-8 md:px-20">
        
        {/* Top Header Section (Centered) */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center mb-14">
          <p className="text-[#7C3AED] font-bold text-[11px] tracking-widest uppercase mb-4">
            ADOBE CREATIVE ECOSYSTEM
          </p>
          <h2 className="text-[#1A1A2E] font-extrabold text-[36px] lg:text-[46px] leading-[1.15] mb-6 tracking-tight">
            The Professional <span className="text-[#7C3AED]">Toolkit</span>, Included.
          </h2>
          <p className="text-gray-500 font-medium text-[14.5px] leading-relaxed">
            Eligible Accredited Universities And Colleges In India With Federated IDs 
            Receive The Following Free Entitlements As Part Of The Offer. After Adobe 
            Validates The Institution And Adds The Offer To The Admin Console, It Can Be 
            Assigned To Faculty And Students.
          </p>
        </div>

        {/* Bottom Section: Cards + Image */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          
          {/* Left Cards */}
          <div className="w-full lg:w-[50%] flex flex-col justify-between gap-4">
            {toolkitItems.map((item) => (
              <div 
                key={item.id} 
                className={`flex items-center gap-5 p-5 rounded-[20px] border ${item.bgClass} transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-default`}
              >
                <div className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg ${item.iconClass}`}>
                  <item.icon size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-[#1A1A2E] font-bold text-[16px] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-[13px] leading-relaxed pr-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image (Height perfectly matches the cards column) */}
          <div className="w-full lg:w-[50%]">
            <div className="relative w-full h-full min-h-[400px] rounded-[32px] overflow-hidden group shadow-[0_12px_60px_rgba(124,58,237,0.12)]">
              <img 
                src={toolkitImg} 
                alt="Adobe Professional Toolkit" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
