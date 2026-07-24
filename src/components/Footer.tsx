import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import logoImg from '../assets/skillzza-k12-horizontal copy.png';

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-10 pb-6 px-8 font-poppins relative z-20 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr_1fr_1fr] gap-x-6 gap-y-10 mb-8">
          
          {/* Column 1: Brand, Presence & Social */}
          <div className="flex flex-col gap-4 pr-8">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="Skill Studio" className="h-14 w-auto object-contain" />
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-gray-900 font-semibold text-[13px] tracking-[0.1em] uppercase">Our Presence</h3>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-800 text-[12px] font-semibold uppercase tracking-wider">India Office</span>
                  <p className="text-gray-600 text-[14px] leading-relaxed whitespace-nowrap">
                    WeWork India, Chromium,<br />
                    CTS No. 106/1-5,JVLR Road,<br />
                    Milind Nagar, Powai,<br />
                    Mumbai -400076.
                  </p>
                  <p className="text-black-600 text-[14px] font-semibold">+91 91369 61978</p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-gray-800 text-[12px] font-semibold uppercase tracking-wider">UK Office</span>
                  <p className="text-gray-600 text-[14px] leading-relaxed whitespace-nowrap">
                    132 Drakes Way,<br />
                    Swindon, SN3 3EH,<br />
                    United Kingdom.
                  </p>
                  {/* <p className="text-black-600 text-[14px] font-semibold">+44 7500 794772</p> */}
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

          {/* Column 2: Vedya AI */}
          <div className="flex flex-col gap-4 lg:mt-[72px]">
            <h3 className="text-gray-900 font-semibold text-[13px] tracking-[0.1em] uppercase">Vedya AI</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">What is Vedya?</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Vedya for Students</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Vedya for Teachers</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Responsible AI</a></li>
            </ul>
          </div>

          {/* Column 3: Skill Studio */}
          <div className="flex flex-col gap-4 lg:mt-[72px]">
            <h3 className="text-gray-900 font-semibold text-[13px] tracking-[0.1em] uppercase">Skill Studio</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">National</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">International</a></li>
            </ul>
          </div>

          {/* Column 4: Virtual Internship */}
          <div className="flex flex-col gap-4 lg:mt-[72px]">
            <h3 className="text-gray-900 font-semibold text-[13px] tracking-[0.1em] uppercase">Virtual Internship</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">GenAI Innovators Fellowship</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">AI & Data Engineering Accelerator</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Teen Finance Mastery Lab</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">UX & Product Innovation Studio</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Mindfullness Program for Teens</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Sustainability in Climate Innovator</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">the Entrepreneurship Thinker</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Teen Storyteller and Media Journalist</a></li>
              {/* <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Digital Marketing for Youth Start-up's</a></li> */}
              {/* <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Deepfake Awareness & AI Media Literacy</a></li> */}
            </ul>
          </div>

          {/* Column 5: Learners Segment */}
          <div className="flex flex-col gap-4 lg:mt-[72px]">
            <h3 className="text-gray-900 font-semibold text-[13px] tracking-[0.1em] uppercase">Learners Segment</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">For Students</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">For Schools</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">For Educator</a></li>
            </ul>
          </div>

          {/* Column 6: Quick Links */}
          <div className="flex flex-col gap-4 lg:mt-[72px]">
            <h3 className="text-gray-900 font-semibold text-[13px] tracking-[0.1em] uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">CCMM</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">Educator Circle</a></li>
              <li><a href="#" className="text-gray-600 text-[14px] hover:text-[#6C3CF7] transition-colors">AI Playground</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[14px]">
            © {new Date().getFullYear()} Skill Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 text-[14px] hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-[14px] hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-[14px] hover:text-gray-900 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
