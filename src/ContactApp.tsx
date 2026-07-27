import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactApp() {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      form_name: "Contact Us Form",
      user_name: `${formData.firstName} ${formData.lastName}`,
      user_email: formData.email,
      user_role: formData.role,
      user_message: formData.message
    };

    emailjs.send(
      'service_6c66tcm', 
      'template_wt0w8kn', 
      templateParams,
      'CM_nb8U7I8dEOty2d' 
    )
    .then(() => {
      setShowPopup(true);
      setLoading(false);
      setFormData({ firstName: '', lastName: '', email: '', role: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please check the credentials and try again.');
      setLoading(false);
    });
  };
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
              
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">First Name *</label>
                    <input type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} placeholder="John" className="px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition-all" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Last Name *</label>
                    <input type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} placeholder="Doe" className="px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition-all" required />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="john@example.com" className="px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition-all" required />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">School / Organization</label>
                  <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition-all cursor-pointer">
                    <option value="" disabled>Select an option</option>
                    <option value="school">School</option>
                    <option value="organization">Organization</option>
                    <option value="student">Student</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">Message *</label>
                  <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="How can we help you?" className="px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40 focus:border-[#7C3AED] transition-all resize-none" required></textarea>
                </div>

                <button type="submit" disabled={loading} className={`mt-4 w-full text-white font-bold py-4 rounded-xl shadow-[0_10px_20px_-10px_rgba(124,58,237,0.5)] transition-all duration-300 transform ${loading ? 'bg-[#9CA3AF] cursor-not-allowed' : 'bg-[#7C3AED] hover:bg-[#6D28D9] hover:shadow-[0_15px_25px_-10px_rgba(124,58,237,0.6)] hover:-translate-y-[2px]'}`}>
                  {loading ? 'Sending Message...' : 'Send Message'}
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

            </div>

          </div>
        </div>
      </div>
      
      <Footer />

      {/* Modern Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-[24px] shadow-2xl p-8 max-w-sm w-full text-center relative animate-slideUp scale-95 border border-white/50">
            {/* Animated Check Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500 animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Message Sent!</h3>
            <p className="text-[#6B7280] text-[15px] mb-8 font-medium">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
            
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-[#1A1A2E] hover:bg-black text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-[1px]"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes checkmark {
          0% { stroke-dasharray: 0, 100; opacity: 0; }
          100% { stroke-dasharray: 100, 0; opacity: 1; }
        }
        .animate-checkmark {
          animation: checkmark 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
