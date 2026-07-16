import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Phone, MapPin } from 'lucide-react';

export default function ContactApp() {
  useEffect(() => {
    document.title = 'Contact Us | Skillzza';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 w-full bg-gradient-to-br from-[#F8F9FA] to-[#EEF2FF] font-poppins pt-32 pb-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#7C3AED] mix-blend-multiply filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#3B82F6] mix-blend-multiply filter blur-[150px] opacity-20"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] mb-4 tracking-tight">
              Get in <span className="text-[#7C3AED]">Touch</span>
            </h1>
            <p className="text-gray-600 text-[16px] max-w-2xl mx-auto font-medium">
              Have questions or want to learn more? We'd love to hear from you. Fill out the form below or reach out to our offices directly.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Contact Form */}
            <div className="flex-1 w-full bg-white p-8 md:p-12 rounded-[28px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative">
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-8">Send us a message</h2>
              
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">First Name *</label>
                    <input type="text" placeholder="John" className="px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition-all" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Last Name *</label>
                    <input type="text" placeholder="Doe" className="px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition-all" required />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                  <input type="email" placeholder="john@example.com" className="px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition-all" required />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">School / Organization</label>
                  <select defaultValue="" className="px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition-all cursor-pointer">
                    <option value="" disabled>Select an option</option>
                    <option value="school">School</option>
                    <option value="organization">Organization</option>
                    <option value="student">Student</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">Message *</label>
                  <textarea rows={4} placeholder="How can we help you?" className="px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition-all resize-none" required></textarea>
                </div>

                <button type="submit" className="mt-4 w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-4 rounded-xl shadow-[0_10px_20px_-10px_rgba(124,58,237,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(124,58,237,0.6)] transition-all duration-300 transform hover:-translate-y-[2px]">
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side: Contact Info */}
            <div className="w-full lg:w-[420px] flex flex-col gap-6">
              
              {/* India Office Card */}
              <div className="bg-[#F3E8FF] p-8 md:p-10 rounded-[28px] shadow-xl text-[#1A1A2E] relative overflow-hidden group border border-[#E9D5FF]">
                <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-[#7C3AED] rounded-full blur-[70px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <h3 className="text-[22px] font-bold text-[#7C3AED] mb-6 flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                    <MapPin size={20} className="text-[#7C3AED]" />
                  </div>
                  India Office
                </h3>
                <div className="flex flex-col gap-5 text-gray-700 pl-1 relative z-10">
                  <p className="leading-relaxed font-medium text-[15px]">
                    WeWork India, Chromium,<br/>
                    CTS No. 106/1-5, JVLR Road,<br/>
                    Milind Nagar, Powai,<br/>
                    Mumbai - 400076.
                  </p>
                  <div className="w-full h-px bg-[#7C3AED]/20 my-1"></div>
                  <div className="flex items-center gap-3 font-semibold text-[#1A1A2E]">
                    <Phone size={18} className="text-[#7C3AED]" />
                    <span className="tracking-wide">+91 91369 61978</span>
                  </div>
                </div>
              </div>

              {/* UK Office Card */}
              <div className="bg-[#F3E8FF] p-8 md:p-10 rounded-[28px] shadow-xl text-[#1A1A2E] relative overflow-hidden group border border-[#E9D5FF]">
                <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-[#7C3AED] rounded-full blur-[70px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <h3 className="text-[22px] font-bold text-[#7C3AED] mb-6 flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                    <MapPin size={20} className="text-[#7C3AED]" />
                  </div>
                  UK Office
                </h3>
                <div className="flex flex-col gap-5 text-gray-700 pl-1 relative z-10">
                  <p className="leading-relaxed font-medium text-[15px]">
                    132 Drakes Way,<br/>
                    Swindon, SN3 3EH,<br/>
                    United Kingdom.
                  </p>
                  <div className="w-full h-px bg-[#7C3AED]/20 my-1"></div>
                  <div className="flex items-center gap-3 font-semibold text-[#1A1A2E]">
                    <Phone size={18} className="text-[#7C3AED]" />
                    <span className="tracking-wide">+44 7500 794772</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
