import React from 'react';
import { Lightbulb, Rocket, Trophy, Globe } from 'lucide-react';

const bulletPoints = [
  {
    icon: <Lightbulb className="w-6 h-6 text-[#F59E0B]" />,
    iconBg: "bg-[#F59E0B]/10",
    iconBorder: "border-[#F59E0B]/20",
    color: "from-[#F59E0B]/5 to-transparent",
    borderColor: "border-[#F59E0B]/30",
    hoverBorderColor: "group-hover:border-[#F59E0B]",
    shadow: "hover:shadow-[#F59E0B]/20",
    text: "Curious about where the future is headed - and want to help shape it."
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#EC4899]" />,
    iconBg: "bg-[#EC4899]/10",
    iconBorder: "border-[#EC4899]/20",
    color: "from-[#EC4899]/5 to-transparent",
    borderColor: "border-[#EC4899]/30",
    hoverBorderColor: "group-hover:border-[#EC4899]",
    shadow: "hover:shadow-[#EC4899]/20",
    text: "Interested in using technology to solve real problems, not just pass exams."
  },
  {
    icon: <Trophy className="w-6 h-6 text-[#8B5CF6]" />,
    iconBg: "bg-[#8B5CF6]/10",
    iconBorder: "border-[#8B5CF6]/20",
    color: "from-[#8B5CF6]/5 to-transparent",
    borderColor: "border-[#8B5CF6]/30",
    hoverBorderColor: "group-hover:border-[#8B5CF6]",
    shadow: "hover:shadow-[#8B5CF6]/20",
    text: "Looking to stand out for college applications, early startups or creative careers."
  },
  {
    icon: <Globe className="w-6 h-6 text-[#06B6D4]" />,
    iconBg: "bg-[#06B6D4]/10",
    iconBorder: "border-[#06B6D4]/20",
    color: "from-[#06B6D4]/5 to-transparent",
    borderColor: "border-[#06B6D4]/30",
    hoverBorderColor: "group-hover:border-[#06B6D4]",
    shadow: "hover:shadow-[#06B6D4]/20",
    text: "Dreaming of building something that leaves an impact beyond the classroom."
  }
];

export default function IsThisYou() {
  return (
    <section className="w-full bg-white text-gray-900 pt-12 pb-5 relative overflow-hidden font-poppins">

      {/* Background ambient glows (light mode adjustments) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#8B5CF6]/15 blur-[120px]" />
        <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[60%] rounded-full bg-[#EC4899]/10 blur-[150px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-12 lg:gap-16">

          {/* Top Content Area */}
          <div className="w-full max-w-3xl flex flex-col items-center text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6 backdrop-blur-sm shadow-sm">
              <span className="text-[#8B5CF6] text-[12px] font-bold tracking-[0.2em] uppercase font-poppins">
                IS THIS YOU?
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-gray-900 mb-4 font-poppins leading-[1.2]">
              Who Skillzza k-12 Is For
            </h2>

            <p className="text-xl sm:text-2xl font-light text-gray-500 font-serif italic">
              If you’re aged <span className="text-gray-900 font-semibold not-italic font-poppins">13–22</span> and you are…
            </p>
          </div>

          {/* Bottom Cards Area */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {bulletPoints.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden p-6 lg:p-7 rounded-2xl bg-white border-2 border-gray-100 shadow-lg flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-all duration-300 group ${item.hoverBorderColor} ${item.shadow}`}
              >
                {/* Subtle gradient background inside card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className={`w-14 h-14 rounded-2xl ${item.iconBg} ${item.iconBorder} border flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 mb-1`}>
                  {item.icon}
                </div>

                <p className="text-gray-700 text-[14px] sm:text-[15px] leading-relaxed relative z-10 font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
