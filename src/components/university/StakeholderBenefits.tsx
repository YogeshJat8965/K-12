import React from 'react';
import { 
  User, 
  Landmark, 
  Award, 
  Folder, 
  Briefcase, 
  Sparkles,
  FileText,
  GraduationCap,
  BookOpen,
  ClipboardList,
  TrendingUp,
  Lightbulb,
  Monitor,
  Handshake
} from 'lucide-react';
import studentsImg from '../../assets/university/students.png';
import facultyImg from '../../assets/university/faculty.png';
import universitiesImg from '../../assets/university/universities.png';

const stakeholders = [
  {
    id: 'students',
    title: 'For Students',
    color: '#6D28D9',
    lightBg: '#F5F3FF', // purple-50
    borderColor: '#EDE9FE', // purple-100
    mainIcon: User,
    image: studentsImg,
    items: [
      { text: 'Industry certifications', icon: Award },
      { text: 'Portfolio development', icon: Folder },
      { text: 'Career readiness', icon: Briefcase },
      { text: 'AI skills', icon: Sparkles }
    ]
  },
  {
    id: 'faculty',
    title: 'For Faculty',
    color: '#E11D48', // Using a solid pink/rose color matching the screenshot
    lightBg: '#FFF1F2', // rose-50
    borderColor: '#FFE4E6', // rose-100
    mainIcon: User,
    image: facultyImg,
    items: [
      { text: 'Ready curriculum', icon: FileText },
      { text: 'Faculty training', icon: GraduationCap },
      { text: 'Teaching resources', icon: BookOpen },
      { text: 'Adobe tools', icon: 'custom-adobe' }
    ]
  },
  {
    id: 'universities',
    title: 'For Universities',
    color: '#2563EB',
    lightBg: '#EFF6FF', // blue-50
    borderColor: '#DBEAFE', // blue-100
    mainIcon: Landmark,
    image: universitiesImg,
    items: [
      { text: 'NEP alignment', icon: ClipboardList },
      { text: 'Higher employability', icon: TrendingUp },
      { text: 'Innovation culture', icon: Lightbulb },
      { text: 'Digital transformation', icon: Monitor },
      { text: 'Industry collaboration', icon: Handshake }
    ]
  }
];

export default function StakeholderBenefits() {
  return (
    <section className="w-full bg-white font-poppins pt-10 pb-28">
      <div className="max-w-[1536px] mx-auto px-8 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[#7C3AED] font-bold text-[11px] tracking-widest uppercase mb-4">
            UNIVERSITY BENEFITS
          </p>
          <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-extrabold text-[#1A1A2E] leading-tight tracking-tight mb-4">
            Value For Every <span className="text-[#7C3AED]">Stakeholder</span>
          </h2>
          <div className="w-16 h-[4px] bg-[#7C3AED] rounded-full mt-2"></div>
        </div>

        {/* 3 Columns Grid */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {stakeholders.map((col) => (
            <div 
              key={col.id} 
              className="flex flex-col bg-white rounded-[32px] border shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
              style={{ borderColor: col.borderColor }}
            >
              
              {/* Top Image Area */}
              <div className="w-full h-[210px] relative flex items-center justify-center overflow-hidden rounded-t-[32px]">
                <img 
                  src={col.image} 
                  alt={col.title} 
                  className="w-full h-full object-cover scale-[1.02] transition-transform duration-700 group-hover:scale-[1.08]" 
                />
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-5 pt-4 flex flex-col">
                
                {/* Title Row */}
                <div className="flex items-center gap-4 mb-5">
                  <div 
                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-white shadow-sm"
                    style={{ backgroundColor: col.color }}
                  >
                    <col.mainIcon size={20} strokeWidth={2} />
                  </div>
                  <h3 
                    className="font-extrabold text-[20px] tracking-tight"
                    style={{ color: col.color }}
                  >
                    {col.title}
                  </h3>
                </div>

                {/* Items List Box */}
                <div 
                  className="flex-1 rounded-[20px] border p-3 flex flex-col gap-1"
                  style={{ backgroundColor: '#FAFAFA', borderColor: col.borderColor }}
                >
                  {col.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors duration-200">
                      
                      {/* Item Icon Box */}
                      <div 
                        className="w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: col.lightBg, color: col.color }}
                      >
                        {item.icon === 'custom-adobe' ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.62 19L9.46 6.3H14.9L19 19H14.62ZM9.85 19H5L10.05 6.3H4.7L0 19H4.15L5.75 14.85H11.45L13.1 19H9.85Z"/>
                          </svg>
                        ) : (
                          // @ts-ignore - it is a valid lucide component
                          <item.icon size={18} strokeWidth={2.5} />
                        )}
                      </div>
                      
                      {/* Item Text */}
                      <p className="text-[#1A1A2E] font-semibold text-[14px]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
