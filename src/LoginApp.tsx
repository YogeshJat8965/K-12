import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function LoginApp() {
  useEffect(() => {
    document.title = 'Log In | Skillzza';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center relative overflow-hidden bg-[#1A0B2E] font-poppins py-20 pt-[100px]">
        
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
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight tracking-tight">
              Sign in to<br/>Skillzza K-12
            </h1>
            <p className="text-white/85 text-[15px] md:text-[17px] leading-relaxed mb-6 font-medium">
              Continue your learning and collaboration journey with a secure, modern workspace.
            </p>
            <p className="text-white/95 text-[15px] md:text-[17px] leading-relaxed font-medium">
              Track your programs and applications, join curated councils and communities, and unlock personalized growth recommendations-all from one place.
            </p>
          </div>
        </div>

        {/* Right Card - Form */}
        <div className="w-full md:w-1/2 bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-[24px] shadow-2xl relative border border-white/20 min-h-[480px] flex flex-col justify-center h-auto">
          
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#1A1A2E] mb-2 tracking-tight">
            Log In
          </h2>
          <p className="text-[#6B7280] text-[14px] mb-8 font-medium">
            Enter your credentials to continue
          </p>

          <form className="flex flex-col gap-5">
            
            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#374151] ml-1">Email address</label>
              <input 
                type="email" 
                placeholder="name@school.com" 
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-[#1A1A2E] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#6C3CF7]/40 focus:border-[#6C3CF7] transition-all"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#374151] ml-1">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-[#1A1A2E] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#6C3CF7]/40 focus:border-[#6C3CF7] transition-all"
              />
            </div>

            {/* Options Row */}
            <div className="flex items-center justify-between mt-1 mb-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#6C3CF7] focus:ring-[#6C3CF7] cursor-pointer" />
                <span className="text-[13px] font-medium text-[#4B5563] group-hover:text-[#1A1A2E] transition-colors">Remember me</span>
              </label>
              
              <a href="#" className="text-[13px] font-bold text-[#6C3CF7] hover:text-[#4200FF] transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button 
              type="button"
              className="w-full bg-[#6C3CF7] hover:bg-[#5B2CE0] text-white font-bold text-[15px] py-4 rounded-xl shadow-[0_8px_20px_-6px_rgba(108,60,247,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(108,60,247,0.6)] transform hover:-translate-y-[1px] transition-all duration-200"
            >
              Log In
            </button>
            
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-[14px] text-[#6B7280] font-medium">
              New here? <a href="#" className="text-[#6C3CF7] font-bold hover:underline">Create account</a>
            </p>
          </div>

        </div>

      </div>

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
      `}</style>
      </div>
      
      <Footer />
    </div>
  );
}
