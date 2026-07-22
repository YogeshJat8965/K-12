import React from 'react';
import { 
  Blocks, 
  Briefcase, 
  PieChart, 
  Dna, 
  Globe, 
  Scale, 
  PencilRuler, 
  Clapperboard, 
  Video, 
  PenTool, 
  Stethoscope, 
  BookText 
} from 'lucide-react';

const disciplines = [
  { name: "Engineering", icon: Blocks },
  { name: "Management", icon: Briefcase },
  { name: "Commerce", icon: PieChart },
  { name: "Science", icon: Dna },
  { name: "Humanities", icon: Globe },
  { name: "Law", icon: Scale },
  { name: "Architecture", icon: PencilRuler },
  { name: "Media", icon: Clapperboard },
  { name: "Film", icon: Video },
  { name: "Design", icon: PenTool },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Education", icon: BookText }
];

export default function FacultyDisciplines() {
  return (
    <section className="w-full bg-[#EFF7FA] font-poppins pt-10 pb-28">
      <div className="max-w-[1536px] mx-auto px-8 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[#7C3AED] font-bold text-[11px] tracking-widest uppercase mb-4">
            ACROSS EVERY FACULTY
          </p>
          <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-extrabold text-[#1A1A2E] leading-tight tracking-tight mb-4">
            Built For Every Discipline <span className="text-[#7C3AED]">On Campus</span>
          </h2>
          <p className="text-gray-500 font-medium text-[15px] lg:text-[16px] max-w-2xl mx-auto leading-relaxed mb-6">
            Creativity And AI Fluency Are Universal Skills - The Skills Centre Serves Students<br className="hidden md:block" />
            Across All Streams.
          </p>
          <div className="w-16 h-[4px] bg-[#7C3AED] rounded-full"></div>
        </div>

        {/* Disciplines Minimalist Cards Grid (6 in a row) */}
        <div className="max-w-[1536px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5">
          {disciplines.map((discipline, index) => (
            <div 
              key={index}
              className="group bg-white rounded-[16px] p-5 lg:p-6 border border-gray-200 hover:border-[#7C3AED]/50 shadow-sm hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
            >
              {/* Subtle interactive top accent line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#7C3AED] transition-colors duration-300"></div>
              
              <div className="mb-4 text-[#1A1A2E] group-hover:text-[#7C3AED] transition-colors duration-300">
                <discipline.icon 
                  size={32} 
                  strokeWidth={1.5} 
                />
              </div>
              <h3 className="text-[#1A1A2E] font-bold text-[14.5px] group-hover:text-[#7C3AED] transition-colors duration-300">
                {discipline.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
