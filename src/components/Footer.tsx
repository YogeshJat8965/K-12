import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
const logoImg = '/landing/WhatsApp_Image_2026-07-28_at_8.46.35_AM-removebg-preview.png';

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-10 pb-6 px-8 font-poppins relative z-20 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr_1fr_1fr] gap-x-6 gap-y-10 mb-8">

          {/* Column 1: Brand, Presence & Social */}
          <div className="flex flex-col gap-4 pr-8">
            <div className="flex items-center gap-2 -mt-3 lg:-mt-5">
              <img src={logoImg} alt="Skill Studio" style={{ height: '120px', width: 'auto', objectFit: 'contain' }} />
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-gray-900 font-semibold text-[13px] tracking-[0.1em] uppercase">Our Presence</h3>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  {/* <span className="text-gray-800 text-[12px] font-semibold uppercase tracking-wider">India Office</span> */}
                  <p className="text-gray-600 text-[14px] leading-relaxed whitespace-nowrap">
                    We Work, Zenia Building, 4th Floor.<br />
                    Hiranandani Business Park, Arcadia Circle,<br />
                    Hiranandani Estate,<br />
                    Thane (west) Thane-400607
                  </p>
                  <p className="text-black-600 text-[14px] font-semibold">+91 91369 61978</p>

                </div>


              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors">
                <Linkedin size={16} fill="currentColor" strokeWidth={0.5} />
              </a>
              <a href="#" className="w-9 h-9 rounded bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors">
                <Twitter size={16} fill="currentColor" strokeWidth={0.5} />
              </a>
              <a href="#" className="w-9 h-9 rounded bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors">
                <Youtube size={16} fill="currentColor" strokeWidth={0.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Discover */}
          <div className="flex flex-col gap-4 lg:mt-4">
            <h3 className="text-gray-900 font-semibold text-[13px] tracking-[0.1em] uppercase">Discover</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="/ai-playground" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">AI Playground</a></li>
              <li><a href="/skill-studio" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Skill Studio</a></li>
              <li><a href="/virtual-internship" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Virtual Internship</a></li>
              {/* <li><a href="https://hackathon.skillzzak12.com" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Creative Hackathon</a></li> */}
              <li><a href="" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Future Skills Program</a></li>
            </ul>
          </div>

          {/* Column 4: Learners Segment */}
          <div className="flex flex-col gap-4 lg:mt-4">
            <h3 className="text-gray-900 font-semibold text-[13px] tracking-[0.1em] uppercase">For You</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="/students" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">For Students</a></li>
              <li><a href="/learners" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">For Schools</a></li>
              <li><a href="/educator" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">For Educators</a></li>
              <li><a href="" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">For Parents</a></li>
            </ul>
          </div>

          {/* Column 3: Skillzza Ecosystem */}
          <div className="flex flex-col gap-4 lg:mt-4">
            <h3 className="text-gray-900 font-semibold text-[13px] tracking-[0.1em] uppercase">Skillzza Ecosystem</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="/ai-playground" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Vedya AI</a></li>
              <li><a href="/ccmm" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">CCMM</a></li>
              <li><a href="/educator-circle" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">The Educator Circle</a></li>
              <li><a href="/educator-circle" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Skillzza Community</a></li>
            </ul>
          </div>

          {/* Column 5: Quick Links */}
          <div className="flex flex-col gap-4 lg:mt-4">
            <h3 className="text-gray-900 font-semibold text-[13px] tracking-[0.1em] uppercase">Learning & Insights</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="/skill-studio" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Skill Insights</a></li>
              <li><a href="/" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">About Skillzza</a></li>
              <li><a href="https://hackathon.skillzzak12.com" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Partner with us</a></li>
              <li><a href="/contact" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[14px]">
            © {new Date().getFullYear()} Skill Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-[14px] cursor-default">Privacy Policy</span>
            <span className="text-gray-500 text-[14px] cursor-default">Terms of Service</span>
            <span className="text-gray-500 text-[14px] cursor-default">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
