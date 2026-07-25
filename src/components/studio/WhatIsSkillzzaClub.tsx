import clubGirl from '../../assets/skill studio/club_girl.png';
import ScrollReveal from '../ScrollReveal';

const ProjectIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
    <path d="M16 5.25l-4 2.25-4-2.25M8 18.75l4 2.25 4-2.25" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const ThinkingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2v1" />
    <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
    <path d="M12 11V7" />
    <path d="M12 7l-2 2" />
    <path d="M12 7l2 2" />
    <path d="M12 15v3" />
  </svg>
);

const CollaborationIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LiteracyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <path d="M6 8h4v4H6z" />
    <line x1="14" y1="8" x2="18" y2="8" />
    <line x1="14" y1="12" x2="18" y2="12" />
  </svg>
);

const features = [
  {
    icon: <ProjectIcon />,
    label: "Hands-on Projects",
    delay: 0.1
  },
  {
    icon: <ThinkingIcon />,
    label: "Critical Thinking",
    delay: 0.2
  },
  {
    icon: <CollaborationIcon />,
    label: "Collaboration",
    delay: 0.3
  },
  {
    icon: <LiteracyIcon />,
    label: "Digital Literacy",
    delay: 0.4
  }
];

export default function WhatIsSkillzzaClub() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content */}
          <div className="w-full lg:w-3/5">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                What is <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Skillzza Club?</span>
              </h2>
            </ScrollReveal>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed max-w-2xl mb-12">
              <ScrollReveal delay={0.1}>
                <p>
                  Skill Studio are not just after-school activities. They are structured
                  <span className="font-semibold text-slate-800"> Skill Studios</span> designed to help students discover their strengths, build real-world
                  skills, and develop a career-ready personality - all while having fun and learning
                  through doing.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p>
                  Unlike traditional school clubs that focus on participation certificates, Skillzza Studios
                  create measurable skill evidence, digital portfolios, and growth milestones that students
                  carry forward into their academic and professional futures.
                </p>
              </ScrollReveal>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start group">
                  <ScrollReveal delay={feature.delay} direction="up">
                    <div className="mb-4 p-4 rounded-2xl bg-slate-50 group-hover:bg-purple-50 group-hover:scale-110 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-slate-800 font-bold text-center lg:text-left leading-tight">
                      {feature.label}
                    </span>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-2/5 relative">
            <ScrollReveal direction="left">
              <div className="relative z-10 rounded-[2rem] overflow-hidden">
                <img
                  src={clubGirl}
                  alt="Student building robotics"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-100 rounded-full -z-0 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-100 rounded-full -z-0 blur-3xl opacity-60" />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
