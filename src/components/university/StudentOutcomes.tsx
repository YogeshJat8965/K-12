import React from 'react';
import { 
  Briefcase, 
  Award, 
  Folder, 
  Sparkles, 
  Palette, 
  Users, 
  Presentation, 
  Rocket, 
  Shield 
} from 'lucide-react';
import certificateImg from '../../assets/university/certificateimg.png';

const outcomes = [
  { text: "Professional Portfolio", icon: Briefcase, color: "#6366F1", bg: "#EEF2FF" },
  { text: "Adobe Credentials", icon: Award, color: "#EC4899", bg: "#FDF2F8" },
  { text: "Industry Projects", icon: Folder, color: "#F43F5E", bg: "#FFF1F2" },
  { text: "AI Fluency", icon: Sparkles, color: "#A855F7", bg: "#FAF5FF" },
  { text: "Digital Creativity", icon: Palette, color: "#3B82F6", bg: "#EFF6FF" },
  { text: "Communication Skills", icon: Users, color: "#8B5CF6", bg: "#F5F3FF" },
  { text: "Presentation Skills", icon: Presentation, color: "#D946EF", bg: "#FDF4FF" },
  { text: "Job Readiness", icon: Rocket, color: "#4F46E5", bg: "#EEF2FF" },
  { text: "Creative Confidence", icon: Shield, color: "#0EA5E9", bg: "#F0F9FF" }
];

export default function StudentOutcomes() {
  return (
    <section className="w-full bg-white font-poppins pt-20 pb-24">
      <div className="max-w-[1536px] mx-auto px-8 md:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="relative w-full rounded-[32px] overflow-hidden group shadow-[0_12px_60px_rgba(124,58,237,0.12)]">
            <img 
              src={certificateImg} 
              alt="Students with Adobe Certificate" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="text-[#7C3AED] font-bold text-[11px] tracking-widest uppercase mb-4">
            STUDENT OUTCOMES
          </p>
          <h2 className="text-[#1A1A2E] font-extrabold text-[36px] lg:text-[46px] leading-[1.15] mb-6 tracking-tight">
            Students Graduate With<br className="hidden xl:block" />
            More Than A <span className="text-[#7C3AED]">Certificate</span>
          </h2>
          <p className="text-gray-500 font-medium text-[14.5px] leading-relaxed mb-10 pr-0 lg:pr-12">
            Every Graduate Leaves With A Professional Portfolio, Adobe Credentials, And 
            Demonstrable AI Fluency — The Evidence Employers Ask For.
          </p>

          {/* 3x3 Outcomes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {outcomes.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center gap-4 hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: item.bg, color: item.color }}
                >
                  <item.icon size={22} strokeWidth={2} />
                </div>
                <h3 className="text-[#1A1A2E] font-bold text-[13.5px] leading-snug">
                  {item.text.split(' ').map((word, i, arr) => (
                    <React.Fragment key={i}>
                      {word}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
