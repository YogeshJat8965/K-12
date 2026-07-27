import React from 'react';
import { 
  Clock, 
  CheckCircle2, 
  Wand2, 
  Megaphone, 
  MessageSquare, 
  Network, 
  Image as ImageIcon, 
  PenTool, 
  FileText, 
  Play,
  Award,
  GraduationCap,
  FileBadge,
  Target
} from 'lucide-react';
import img1 from '../../assets/university/workplace/1.webp';
import img2 from '../../assets/university/workplace/2.webp';
import img3 from '../../assets/university/workplace/3.webp';
import img4 from '../../assets/university/workplace/4.webp';
import img5 from '../../assets/university/workplace/5.webp';
import img6 from '../../assets/university/workplace/6.webp';
import img7 from '../../assets/university/workplace/7.webp';
import img8 from '../../assets/university/workplace/8.webp';
import img9 from '../../assets/university/workplace/9.webp';

const courses = [
  {
    id: 1,
    title: "Design Fundamentals with AI using Adobe",
    duration: "30 Hr",
    status: "NSQF 4.5 Aligned",
    color: "#4F46E5", // Indigo
    icon: null,
    isTextIcon: true,
    textIcon: "Ps",
    image: img1
  },
  {
    id: 2,
    title: "Essentials of Generative AI Content Creation using Adobe",
    duration: "15 Hr",
    status: "NSQF 4.5 Aligned",
    color: "#EC4899", // Pink
    icon: Wand2,
    image: img2
  },
  {
    id: 3,
    title: "Concepts of Digital Marketing using Adobe",
    duration: "30 Hr",
    status: "NCVET Alignment in Pipeline",
    color: "#10B981", // Green
    icon: Megaphone,
    image: img3
  },
  {
    id: 4,
    title: "Art of Social Media Content Creation using Adobe",
    duration: "30 Hr",
    status: "NSQF 4.5 Aligned",
    color: "#EF4444", // Red
    icon: MessageSquare,
    image: img4
  },
  {
    id: 5,
    title: "Fundamentals of Multichannel Content Marketing using Adobe",
    duration: "15 Hr",
    status: "NSQF 4.5 Aligned",
    color: "#F59E0B", // Orange
    icon: Network,
    image: img5
  },
  {
    id: 6,
    title: "Principles of Image Editing using Adobe",
    duration: "15 Hr",
    status: "NCVET Alignment in Pipeline",
    color: "#2563EB", // Blue
    icon: ImageIcon,
    image: img6
  },
  {
    id: 7,
    title: "Graphic Design with Adobe Illustrator",
    duration: "30 Hr",
    status: "NSQF 4.5 Aligned",
    color: "#0D9488", // Teal
    icon: PenTool,
    image: img7
  },
  {
    id: 8,
    title: "Fundamentals of Document Design using Adobe",
    duration: "15 Hr",
    status: "NSQF 4.5 Aligned",
    color: "#8B5CF6", // Purple
    icon: FileText,
    image: img8
  },
  {
    id: 9,
    title: "Fundamentals of Multimedia Content Creation using Adobe",
    duration: "15 Hr",
    status: "NSQF 4.5 Aligned",
    color: "#DC2626", // Red
    icon: Play,
    image: img9
  }
];

export default function IndustryCourses() {
  return (
    <section className="w-full bg-[#FAFAFA] font-poppins pt-20 pb-24">
      <div className="max-w-[1536px] mx-auto px-8 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[#7C3AED] font-bold text-[11px] tracking-widest uppercase mb-4">
            INDUSTRY-ALIGNED COURSES
          </p>
          <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-extrabold text-[#1A1A2E] leading-tight tracking-tight mb-4">
            Ten Courses. Real <span className="text-[#7C3AED]">Workplace</span> Skills.
          </h2>
          <p className="text-gray-600 font-medium text-[16px] mb-6">
            Future-ready skills designed with industry. Built for real impact.
          </p>
          <div className="w-16 h-[4px] bg-[#7C3AED] rounded-full"></div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 group"
            >
              
              {/* Top Image Section */}
              <div className="relative w-full h-[180px]">
                {/* Image Wrapper */}
                <div className="absolute inset-0 w-full h-full rounded-t-2xl overflow-hidden bg-gray-100">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                {/* Duration Badge */}
                <div 
                  className="absolute -bottom-3 right-4 px-3 py-1 text-white text-[11px] font-bold rounded-full flex items-center gap-1.5 shadow-md z-10"
                  style={{ backgroundColor: course.color }}
                >
                  {course.duration} <Clock size={12} strokeWidth={3} />
                </div>
                
                {/* Overlapping Icon Badge */}
                <div 
                  className="absolute -bottom-5 left-5 w-[42px] h-[42px] rounded-full border-[3px] border-white flex items-center justify-center shadow-md z-10"
                  style={{ backgroundColor: course.color }}
                >
                  {course.isTextIcon ? (
                    <span className="text-white font-extrabold text-[15px]">{course.textIcon}</span>
                  ) : (
                    course.icon && <course.icon className="text-white" size={20} strokeWidth={2.5} />
                  )}
                </div>
              </div>

              {/* Bottom Content Section */}
              <div className="p-6 pt-8 flex-1 flex flex-col">
                <h3 className="text-[#1A1A2E] font-bold text-[17px] leading-snug mb-5">
                  {course.title.split('using Adobe').map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && <><br />using Adobe</>}
                    </React.Fragment>
                  ))}
                </h3>
                
                <div className="mt-auto flex items-center gap-2">
                  <CheckCircle2 size={16} style={{ color: course.color }} className="flex-shrink-0" />
                  <span className="text-gray-500 font-semibold text-[12px]">{course.status}</span>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="w-full bg-[#2E2C6A] rounded-[24px] p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 shadow-xl">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
              <Award className="text-white" size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-white font-bold text-[15px] leading-tight mb-1">Industry<br/>Aligned Curriculum</h4>
              <p className="text-white/60 text-[11px] font-medium">Designed with real industry needs</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="text-white" size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-white font-bold text-[15px] leading-tight mb-1">Practical<br/>Learning</h4>
              <p className="text-white/60 text-[11px] font-medium">Hands-on projects & case studies</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
              <FileBadge className="text-white" size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-white font-bold text-[15px] leading-tight mb-1">Recognized<br/>Certifications</h4>
              <p className="text-white/60 text-[11px] font-medium">Boost your career credibility</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
              <Target className="text-white" size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-white font-bold text-[15px] leading-tight mb-1">Job-Ready<br/>Skills</h4>
              <p className="text-white/60 text-[11px] font-medium">Prepare for tomorrow's workforce</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
