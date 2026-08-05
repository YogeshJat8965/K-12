import React, { useState } from 'react';
import {
  Shield,
  Lock,
  BarChart2,
  Target,
  Flag,
  Building2,
  User,
  GraduationCap,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Bell
} from 'lucide-react';
import formImg from '../../assets/digital creativity/form imag.png';
import emailjs from '@emailjs/browser';

export default function CcmmReportForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '',
    name: '',
    role: '',
    board: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      form_name: "CCMM Maturity Report Form",
      user_name: formData.name,
      user_email: formData.email,
      user_role: formData.role,
      user_message: `School: ${formData.schoolName}\nBoard: ${formData.board}\nPhone: ${formData.phone}`
    };

    emailjs.send(
      'service_6c66tcm',
      'template_wt0w8kn',
      templateParams,
      'CM_nb8U7I8dEOty2d'
    )
      .then(() => {
        setIsSubmitted(true);
        setLoading(false);
        setFormData({ schoolName: '', name: '', role: '', board: '', email: '', phone: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send request. Please check the credentials and try again.');
        setLoading(false);
      });
  };

  return (
    <section className="w-full bg-[#F8F9FC] font-poppins py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 lg:px-20">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start relative">
            <img
              src={formImg}
              alt="CCMM Maturity Report"
              className="w-full max-w-[680px] object-contain lg:scale-[1.08] lg:origin-left"
            />
          </div>

          {/* Right Column: Form Card */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 h-full justify-center">

            {!isSubmitted ? (
              <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 w-full relative overflow-hidden animate-in fade-in duration-500">

                <div className="flex items-center gap-5 mb-10">
                  {/* <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div> */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-1">Get Your Full CCMM Maturity Report</h3>
                    <p className="text-gray-500 text-sm font-medium">It only takes 2 minutes</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                  {/* Row 1 */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">School name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <Building2 size={18} />
                      </div>
                      <input type="text" required value={formData.schoolName} onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })} placeholder="Enter school name" className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm" />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                          <User size={18} />
                        </div>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter your full name" className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Role</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                          <User size={18} />
                        </div>
                        <select required value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm appearance-none text-gray-500">
                          <option value="" disabled>Select your role</option>
                          <option value="principal-head">Principal-Head</option>
                          <option value="director-trustee">Director-Trustee</option>
                          <option value="coordinator-hod">Coordinator-HOD</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Board</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <GraduationCap size={18} />
                      </div>
                      <select required value={formData.board} onChange={(e) => setFormData({ ...formData, board: e.target.value })} className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm appearance-none text-gray-500">
                        <option value="" disabled>Select your board</option>
                        <option value="cbse">CBSE</option>
                        <option value="icse">ICSE</option>
                        <option value="state">State Board</option>
                        <option value="ib">IB / Cambridge</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Work email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <Mail size={18} />
                      </div>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter work email" className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm" />
                    </div>
                  </div>

                  {/* Row 5 */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone-WhatsApp</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <Phone size={18} />
                      </div>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Enter phone number" className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm" />
                    </div>
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={loading} className={`w-full text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl mt-2 flex items-center justify-center gap-2 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-[#1D4ED8] hover:bg-[#1e40af]'}`}>
                    <Send size={18} />
                    {loading ? 'Submitting...' : 'Get My Full Report'}
                  </button>

                  <p className="text-center text-xs text-gray-500 font-medium flex items-center justify-center gap-1.5 mt-2">
                    <Lock size={12} />
                    Your information is secure and confidential.
                  </p>

                </form>
              </div>
            ) : (
              /* Success State */
              <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[24px] p-8 md:p-10 flex items-start gap-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] animate-in fade-in slide-in-from-bottom-4 duration-500 w-full relative overflow-hidden">
                <div className="flex-1">
                  <h4 className="text-[#15803D] font-bold text-xl mb-3">Thank you - you're on the list.</h4>
                  <p className="text-[#166534] text-base md:text-lg leading-relaxed font-medium">
                    Our team will reach out within 2 working days to schedule your school's diagnostic and share your full CCMM Maturity Report.
                  </p>
                </div>
                <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white border border-green-100 text-green-600 items-center justify-center shrink-0 shadow-sm">
                  <Bell size={32} />
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
