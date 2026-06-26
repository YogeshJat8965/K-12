import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E0945] pt-20 pb-10 px-8 font-poppins relative z-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-16 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="font-poppins text-[22px] font-bold tracking-wide">
                <span className="text-white">Skillzza</span>{' '}
                <span className="text-[#A265E6]">K-12</span>
              </span>
            </div>
            <p className="text-[#A592C4] text-[15px] leading-[1.6] pr-4">
              Empowering the Next<br />Generation of AI Thinkers
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a href="#" className="w-9 h-9 rounded bg-[#2D1660] flex items-center justify-center text-[#A592C4] hover:text-white transition-colors">
                <Linkedin size={16} fill="currentColor" strokeWidth={0.5} />
              </a>
              <a href="#" className="w-9 h-9 rounded bg-[#2D1660] flex items-center justify-center text-[#A592C4] hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded bg-[#2D1660] flex items-center justify-center text-[#A592C4] hover:text-white transition-colors">
                <Twitter size={16} fill="currentColor" strokeWidth={0.5} />
              </a>
              <a href="#" className="w-9 h-9 rounded bg-[#2D1660] flex items-center justify-center text-[#A592C4] hover:text-white transition-colors">
                <Youtube size={16} fill="currentColor" strokeWidth={0.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Our Presence */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-[13px] tracking-[0.1em] uppercase">Our Presence</h3>
            
            <div className="flex flex-col gap-2">
              <span className="text-[#D3C7E9] text-[12px] font-semibold uppercase tracking-wider">India Office</span>
              <p className="text-[#A592C4] text-[14px] leading-relaxed">
                WeWork India, Chromium, CTS No. 106/1-5,<br />
                JVLR Road, Milind Nagar, Powai, Mumbai -<br />
                400076.
              </p>
              <p className="text-[#D3C7E9] text-[14px] font-medium">+91 91369 61978</p>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <span className="text-[#D3C7E9] text-[12px] font-semibold uppercase tracking-wider">UK Office</span>
              <p className="text-[#A592C4] text-[14px] leading-relaxed">
                132 Drakes Way, Swindon, SN3 3EH, United<br />
                Kingdom.
              </p>
              <p className="text-[#D3C7E9] text-[14px] font-medium">+44 7500 794772</p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-[13px] tracking-[0.1em] uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[#A592C4] text-[15px] hover:text-white transition-colors">Vidya AI</a></li>
              <li><a href="/skill-studio" className="text-[#A592C4] text-[15px] hover:text-white transition-colors">Skill Studio</a></li>
              <li><a href="/virtual-internship" className="text-[#A592C4] text-[15px] hover:text-white transition-colors">Virtual Internship</a></li>
              <li><a href="/ai-playground" className="text-[#A592C4] text-[15px] hover:text-white transition-colors">AI Playground</a></li>
            </ul>
          </div>

          {/* Column 4: Audiences */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-[13px] tracking-[0.1em] uppercase">Audiences</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[#A592C4] text-[15px] hover:text-white transition-colors">For Students</a></li>
              <li><a href="#" className="text-[#A592C4] text-[15px] hover:text-white transition-colors">For Educators</a></li>
              <li><a href="#" className="text-[#A592C4] text-[15px] hover:text-white transition-colors">For Schools</a></li>
              <li><a href="#" className="text-[#A592C4] text-[15px] hover:text-white transition-colors">For Parents</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#391B76] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A592C4] text-[14px]">
            © {new Date().getFullYear()} Skillzza K-12. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#A592C4] text-[14px] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#A592C4] text-[14px] hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-[#A592C4] text-[14px] hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
