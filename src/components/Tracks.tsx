import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import img1 from '../assets/virtual internship/1st img.png';
import img2 from '../assets/virtual internship/2nd img.png';
import img3 from '../assets/virtual internship/3rd img.png';
import img4 from '../assets/virtual internship/4th img.png';
import img5 from '../assets/virtual internship/5th img.png';
import img6 from '../assets/virtual internship/6th img.png';
import img7 from '../assets/virtual internship/7th img.png';
import img8 from '../assets/virtual internship/8th img.png';

const careerTracks = [
  {
    title: "AI, Data &\nDeep Tech",
    image: img1,
    borderColor: "border-[#4A90E2]" // Blue-ish
  },
  {
    title: "Business,\nFinance &\nEntrepreneurship",
    image: img2,
    borderColor: "border-[#2ECC71]" // Green-ish
  },
  {
    title: "Creative, Media &\nProduct Design",
    image: img3,
    borderColor: "border-[#9B59B6]" // Purple-ish
  },
  {
    title: "Space, Science &\nFrontier Tech",
    image: img4,
    borderColor: "border-[#E67E22]" // Orange-ish
  },
  {
    title: "Climate,\nSustainability &\nGreen InK-12tion",
    image: img5,
    borderColor: "border-[#1ABC9C]" // Teal-ish
  },
  {
    title: "Mindfulness,\nWellness &\nInner Growth",
    image: img6,
    borderColor: "border-[#D35400]" // Deep Orange
  },
  {
    title: "Public Voice,\nMedia & Global\nAffairs",
    image: img7,
    borderColor: "border-[#C0392B]" // Red-ish
  },
  {
    title: "Leadership,\nCivic & Social\nImpact",
    image: img8,
    borderColor: "border-[#34495E]" // Navy-ish
  }
];

export default function Tracks() {
  return (
    <section id="tracks" className="py-12 bg-[#F1F5F9] text-[#023463] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="mb-6">
            Explore <span className="text-[#A855F7]">Career Tracks</span>
          </h2>
          <p className="text-lg text-slate-600 w-full mx-auto font-normal leading-relaxed">
            Eight future-ready career tracks, mapped across technology, enterprise, creativity, science, and personal growth. Students can explore across tracks before choosing their capstone specialisation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {careerTracks.map((track, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.05}
              rotateX={15}
              scale={0.9}
              className="relative"
            >
              <div
                className={`group relative aspect-[4/5] rounded-[1.2rem] overflow-hidden border-2 bg-white shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer ${track.borderColor}`}
              >
                {/* Background Image */}
                <img
                  src={track.image}
                  alt={track.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Title Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                  <h3 className="font-extrabold text-base md:text-lg text-white leading-tight whitespace-pre-line group-hover:text-blue-400 transition-colors">
                    {track.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Callout Card */}
        {/* Bottom CTA */}
        <div className="flex justify-center">
          <button className="flex items-center gap-3 px-10 py-4 mb-8 rounded-full border-2 border-[#023463]/20 text-[#023463] hover:bg-[#023463] hover:text-white transition-all duration-300 font-extrabold text-sm tracking-widest uppercase group">
            DISCOVER ALL TRACKS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <p className="text-[#023463] text-lg md:text-xl leading-relaxed">
          Every career track is underpinned by Skillzza Skill Studios <br /> giving students a seamless progression from studio-based learning to internship based application.
        </p>
      </div>

    </section>
  );
}
