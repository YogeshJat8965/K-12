import { useState, useCallback, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { WordReveal, StaggerContainer, StaggerItem, FadeIn3D } from '../animations/ScrollAnimations';
import img1 from '../../assets/learners/1img.png';
import img2 from '../../assets/learners/2img.png';
import img3 from '../../assets/learners/3img.png';
import img4 from '../../assets/learners/4img.png';
import img5 from '../../assets/learners/5img.png';
import img6 from '../../assets/learners/6img.png';

/* ─── Icon Components ─── */
const I = ({ children }: { children: React.ReactNode }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const LandmarkIcon = () => <I><path d="M12 3l9 5H3z" /><path d="M4 8h16" /><path d="M6 8v9" /><path d="M12 8v9" /><path d="M18 8v9" /><path d="M4 17h16" /><path d="M3 20h18" /></I>;
const ChartIcon = () => <I><rect x="2" y="14" width="3.5" height="6" /><rect x="7.5" y="9" width="3.5" height="11" /><rect x="13" y="3" width="3.5" height="17" /><rect x="18.5" y="7" width="3.5" height="13" /></I>;
const MapPinIcon = () => <I><path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0z" /><circle cx="12" cy="8" r="2" /><path d="M8.7 15.9L3 19V6l5.7-3.1" /><path d="M15.3 15.9L21 19V6l-5.7-3.1" /></I>;
const RefreshIcon = () => <I><path d="M21 12a9 9 0 1 1-9-9c2.5 0 4.8 1 6.5 2.5L21 8" /><path d="M21 3v5h-5" /></I>;
const RocketIcon = () => <I><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><path d="M4 22v-7" /></I>;
const HexStackIcon = () => <I><path d="M12 2l7 4v8l-7 4-7-4V6z" /><path d="M12 22v-8" /><path d="M19 6l-7 4-7-4" /></I>;
const PortfolioIcon = () => <I><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" /><path d="M12 12v3" /><path d="M2 12h20" /></I>;
const BotIcon = () => <I><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><circle cx="8" cy="16" r="1" /><circle cx="16" cy="16" r="1" /></I>;
const DeployIcon = () => <I><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 9l3 3-3 3" /><path d="M13 15h4" /></I>;
const GroupIcon = () => <I><path d="M17 21v-2a4 4 0 0 0-3-3.87" /><path d="M7 21v-2a4 4 0 0 1 3-3.87" /><circle cx="12" cy="7" r="4" /><path d="M5.6 17a4 4 0 0 0-2.6 3.74V21" /><circle cx="5" cy="9" r="2.5" /></I>;
const LaptopIcon = () => <I><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 20h20" /><path d="M10 8l2 2 4-4" /></I>;
const TrackIcon = () => <I><path d="M2 20h.01" /><path d="M7 20v-4" /><path d="M12 20v-8" /><path d="M17 20V8" /><path d="M22 4v16" /></I>;
const CertIcon = () => <I><circle cx="12" cy="8" r="6" /><path d="M15.5 14.5L18 22l-6-2-6 2 2.5-7.5" /><path d="M9 8l2 2 4-4" /></I>;
const RepeatIcon = () => <I><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></I>;
const GlobeIcon = () => <I><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /></I>;
const PeopleIcon = () => <I><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></I>;
const DocCheckIcon = () => <I><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 15l2 2 4-4" /></I>;
const BuildingIcon = () => <I><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" /><path d="M2 22h20" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></I>;
const ClipboardIcon = () => <I><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M9 14l2 2 4-4" /></I>;
const AwardIcon = () => <I><circle cx="12" cy="8" r="6" /><path d="M9 18l-3 4" /><path d="M15 18l3 4" /><path d="M12 2v2" /><path d="M12 12v2" /></I>;
const BriefcaseIcon = () => <I><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" /><path d="M12 12v4" /><path d="M10 14h4" /></I>;
const LinkIcon = () => <I><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></I>;
const SparkleIcon = () => <I><path d="M12 3v2M12 19v2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M3 12h2M19 12h2M5.6 18.4l1.4-1.4M17 7l1.4-1.4" /><circle cx="12" cy="12" r="4" /></I>;
const GaugeIcon = () => <I><path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 12l5-7" /><circle cx="12" cy="12" r="1" /><path d="M22 12h-4" /></I>;
const BarChartIcon = () => <I><rect x="3" y="12" width="4" height="8" /><rect x="10" y="6" width="4" height="14" /><rect x="17" y="2" width="4" height="18" /></I>;
const FamilyIcon = () => <I><circle cx="7" cy="5" r="3" /><path d="M2 17v-2a5 5 0 0 1 5-5" /><circle cx="17" cy="5" r="3" /><path d="M22 17v-2a5 5 0 0 0-5-5" /><circle cx="12" cy="14" r="2" /><path d="M9 22v-1a3 3 0 0 1 6 0v1" /></I>;

/* ─── Slide Data ─── */
type Feature = { icon: React.ReactNode; title: string; desc: string };
type Slide = {
  title: string;
  subtitle: string;
  desc: string;
  boldDesc?: string;
  image: string;
  featuresLayout: 'grid' | 'list';
  features: Feature[];
};

const slides: Slide[] = [
  {
    title: "CCMM – AI Maturity\nAssessment",
    subtitle: "Benchmark your institution's readiness for the AI era.",
    desc: "The Curriculum, Culture, Mindset & Methodology (CCMM) framework is a proprietary diagnostic that evaluates where your school stands across four pillars of AI readiness.",
    boldDesc: "Receive a detailed institutional scorecard, benchmarking against peer schools, and a prioritized roadmap to move from AI-aware to AI-native.",
    image: img1,
    featuresLayout: 'grid',
    features: [
      { icon: <LandmarkIcon />, title: "Four-pillar diagnostic", desc: "Curriculum depth, Culture of innovation, Mindset of educators, Methodology of delivery." },
      { icon: <ChartIcon />, title: "Comparative benchmarking", desc: "Benchmark your institution against national and international peer institutions." },
      { icon: <MapPinIcon />, title: "Strategic action roadmap", desc: "Get a structured roadmap with quarterly milestones and measurable KPIs." },
      { icon: <RefreshIcon />, title: "Annual re-assessment", desc: "Track institutional progress over time with annual re-assessments." },
    ]
  },
  {
    title: "Skill Studio\nSkill Studios",
    subtitle: "Experiential, domain-anchored learning pods for students",
    desc: "A curated portfolio of 20+ future-forward studios spanning Generative AI, Agentic AI, Quantum Computing, Product Design, Data Science, Robotics, Sustainability, and more. Each studio is a structured experience that blends conceptual foundations, hands-on builds, and industry-grade capstones – aligned to NEP 2020 skill frameworks.",
    image: img2,
    featuresLayout: 'grid',
    features: [
      { icon: <RocketIcon />, title: "20+ studios", desc: "across emerging technology, design, and enterprise readiness domains." },
      { icon: <HexStackIcon />, title: "Studio Stacking model", desc: "Students combine studios to build a unique Skill DNA Profile." },
      { icon: <PortfolioIcon />, title: "Portfolio-driven outcomes", desc: "with verifiable digital credentials for every learner." },
      { icon: <BotIcon />, title: "AgentMatch AI personalization", desc: "Studios recommended based on aptitude and interest." },
      { icon: <DeployIcon />, title: "Deployable across formats", desc: "In-school electives, after-school programs, or weekend cohorts." },
    ]
  },
  {
    title: "CPD – AI Immersive\nLearning for Teachers",
    subtitle: "Continuous Professional Development for the AI-ready educator",
    desc: "A structured faculty development programme that empowers teachers to confidently integrate AI tools, prompt engineering, and future-ready pedagogy into their classrooms. Delivered as immersive cohorts with live masterclasses, hands-on workshops, and certification - designed to transform educators into in-house AI champions.",
    image: img3,
    featuresLayout: 'list',
    features: [
      { icon: <GroupIcon />, title: "Immersive cohort model", desc: "with live masterclasses, workshops, and peer learning circles." },
      { icon: <LaptopIcon />, title: "Hands-on training", desc: "across Generative AI tools, prompt design, and classroom integration." },
      { icon: <TrackIcon />, title: "Subject-specific pedagogy tracks", desc: "for STEM, Humanities, Commerce, and Arts faculty." },
      { icon: <CertIcon />, title: "AI-Ready Educator certification", desc: "with NASSCOM-aligned competency benchmarks." },
      { icon: <RepeatIcon />, title: "Ongoing refreshers", desc: "community of practice, and leadership mentoring for HoDs." },
    ]
  },
  {
    title: "International Skill Studios",
    subtitle: "Global exposure programme for ages 12–18",
    desc: "A premium, globally-benchmarked track designed for NRI learners and international school students. 18 studios – including Agentic AI and Quantum Computing – delivered with cross-cultural cohorts, international faculty, and capstones co-evaluated by global mentors. Positions your school as an internationally-aligned, innovation-led institution.",
    image: img4,
    featuresLayout: 'list',
    features: [
      { icon: <GlobeIcon />, title: "18 globally-benchmarked studios", desc: "with international curriculum partners." },
      { icon: <PeopleIcon />, title: "Cross-cultural student cohorts", desc: "and cross-border innovation challenges." },
      { icon: <DocCheckIcon />, title: "Digital credentials recognized", desc: "by international universities and programmes." },
      { icon: <BuildingIcon />, title: "Ideal for IB, IGCSE, Cambridge,", desc: "and premium CBSE / ICSE institutions." },
    ]
  },
  {
    title: "Virtual Internship &\nCapstone Track",
    subtitle: "Forage-style industry experience, brought into school",
    desc: "A structured virtual internship programme (grades 9–12) where students complete real-world tasks under simulated enterprise environments – UX/Product Design, Digital Twin engineering, Data Analytics, and more. Students graduate with a verifiable Skill DNA Profile and an industry-grade capstone portfolio that stands out in college applications.",
    image: img5,
    featuresLayout: 'list',
    features: [
      { icon: <ClipboardIcon />, title: "Enterprise-designed task sequences", desc: "with evaluator feedback at each stage." },
      { icon: <AwardIcon />, title: "Branded certificates", desc: "co-signed by industry partners." },
      { icon: <BriefcaseIcon />, title: "Portfolio artefacts", desc: "ready for college applications and early career visibility." },
      { icon: <LinkIcon />, title: "Seamless integration", desc: "with career counselling and higher-ed pathway advisory." },
    ]
  },
  {
    title: "The Xperience Platform",
    subtitle: "One unified learning and credentialing platform",
    desc: "Skill Studio's proprietary learning platform brings together every studio, every capstone, and every credential in one place. Powered by Vedya AI and the Potential Meter, it gives schools, parents, and students a single view of progress, mastery, and the evolving Skill DNA Profile of every learner.",
    image: img6,
    featuresLayout: 'list',
    features: [
      { icon: <SparkleIcon />, title: "Vedya AI personal learning companion", desc: "24/7 concept coach and doubt solver." },
      { icon: <GaugeIcon />, title: "Potential Meter tracks mastery, depth, and readiness", desc: "across all enrolled studios." },
      { icon: <BarChartIcon />, title: "School-admin dashboard", desc: "for cohort analytics, engagement, and outcome reporting." },
      { icon: <FamilyIcon />, title: "Parent portal", desc: "with transparent progress, portfolio, and credential visibility." },
    ]
  },
];

/* ─── Component ─── */
export default function SchoolPartnershipOfferings() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goTo = useCallback((idx: number, dir: 'left' | 'right' = 'right') => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1, 'left');
  const next = () => goTo(current === slides.length - 1 ? 0 : current + 1, 'right');

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current === slides.length - 1 ? 0 : current + 1, 'right');
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const s = slides[current];

  /* CSS keyframe styles injected once */
  const animStyles = `
    @keyframes slideInRight { from { opacity:0; transform:translateX(60px); } to { opacity:1; transform:translateX(0); } }
    @keyframes slideInLeft { from { opacity:0; transform:translateX(-60px); } to { opacity:1; transform:translateX(0); } }
    @keyframes fadeScaleIn { from { opacity:0; transform:scale(0.96); } to { opacity:1; transform:scale(1); } }
    @keyframes riseUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
    @keyframes progressBar { from { width:0%; } to { width:100%; } }
    .anim-slide-right { animation: slideInRight 0.6s cubic-bezier(0.16,1,0.3,1) both; }
    .anim-slide-left { animation: slideInLeft 0.6s cubic-bezier(0.16,1,0.3,1) both; }
    .anim-fade-scale { animation: fadeScaleIn 0.65s cubic-bezier(0.16,1,0.3,1) both; }
    .anim-rise { animation: riseUp 0.5s cubic-bezier(0.16,1,0.3,1) both; }
    .anim-progress { animation: progressBar 6s linear both; }
  `;

  const slideClass = direction === 'right' ? 'anim-slide-right' : 'anim-slide-left';

  return (
    <section className="w-full bg-white py-20 lg:py-24 font-poppins">
      <style>{animStyles}</style>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <StaggerContainer className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-4xl">
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-extrabold text-[#1A1A2E] leading-[1.2] mb-6 tracking-tight">
              <WordReveal text="Our School Partnership Offerings" />
            </h2>
            <StaggerItem className="text-[#6B7280] text-[15px] md:text-[16px] leading-[1.7] font-medium max-w-3xl">
              A Modular, End-To-End Ecosystem Designed To Meet Schools Wherever They Are On Their
              Innovation Journey - From Assessing Institutional AI Readiness To Building Student Skill Portfolios
              And Upskilling Your Teaching Faculty.
            </StaggerItem>
          </div>
          <StaggerItem className="flex items-center gap-4 shrink-0">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full bg-[#5B32EA] flex items-center justify-center text-white hover:bg-[#4A25C7] transition-all duration-200 shadow-[0_8px_20px_rgba(91,50,234,0.25)] hover:scale-110 active:scale-90"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full bg-[#5B32EA] flex items-center justify-center text-white hover:bg-[#4A25C7] transition-all duration-200 shadow-[0_8px_20px_rgba(91,50,234,0.25)] hover:scale-110 active:scale-90"
            >
              <ArrowRight size={24} />
            </button>
          </StaggerItem>
        </StaggerContainer>

        {/* Single Carousel Card */}
        <FadeIn3D delay={0.2} y={50} rotateX={5} className="bg-white rounded-[40px] pl-6 pr-4 py-8 md:pl-10 md:pr-6 md:py-10 lg:pl-12 lg:pr-6 lg:py-12 border border-gray-100 shadow-[0_12px_60px_rgba(0,0,0,0.06)] overflow-hidden">

          <div key={current} className="grid grid-cols-1 xl:grid-cols-[1fr_1.25fr] gap-8 xl:gap-5 items-center">

            {/* Left Content */}
            <div className={`flex flex-col justify-center ${slideClass}`}>
              <h3
                className="text-[30px] md:text-[38px] lg:text-[42px] font-extrabold text-[#0D152E] leading-[1.1] mb-4 tracking-tight whitespace-pre-line anim-rise"
                style={{ animationDelay: '0.05s' }}
              >
                {s.title}
              </h3>

              <div className="border-l-[4px] border-[#5B32EA] pl-5 mb-4 anim-rise" style={{ animationDelay: '0.12s' }}>
                <p className="text-[#5B32EA] text-[16px] md:text-[18px] italic font-medium leading-[1.4]">
                  {s.subtitle}
                </p>
              </div>

              <p className="text-[#4B5563] text-[13px] md:text-[14px] leading-[1.65] font-medium mb-4 anim-rise" style={{ animationDelay: '0.18s' }}>
                {s.desc}
              </p>

              {s.boldDesc && (
                <p className="text-[#111827] text-[13px] md:text-[14px] font-bold leading-[1.6] mb-6 anim-rise" style={{ animationDelay: '0.22s' }}>
                  {s.boldDesc}
                </p>
              )}

              {/* Features – Grid or List */}
              {s.featuresLayout === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {s.features.map((f, fi) => (
                    <div
                      key={fi}
                      className="bg-white rounded-[12px] px-3 py-2.5 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center gap-3 anim-rise"
                      style={{ animationDelay: `${0.25 + fi * 0.06}s` }}
                    >
                      <div className="w-[44px] h-[44px] shrink-0 bg-[#F4EFFF] rounded-full flex items-center justify-center text-[#4B24EA]">
                        {f.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[12px] md:text-[13px] font-bold text-[#111827] mb-0.5 leading-snug">{f.title}</h4>
                        <p className="text-[#6B7280] text-[11px] leading-[1.35]">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-3 mt-1">
                  {s.features.map((f, fi) => (
                    <div
                      key={fi}
                      className="flex items-start gap-3 anim-rise"
                      style={{ animationDelay: `${0.25 + fi * 0.06}s` }}
                    >
                      <div className="w-[40px] h-[40px] shrink-0 bg-[#F4EFFF] rounded-full flex items-center justify-center text-[#4B24EA]">
                        {f.icon}
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h4 className="text-[13px] md:text-[14px] font-bold text-[#111827] leading-snug">{f.title}</h4>
                        <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-[1.4]">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Image */}
            <div className="group/img w-full relative rounded-[28px] overflow-hidden anim-fade-scale flex justify-center items-center">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-auto object-contain rounded-[28px] transition-transform duration-700 ease-[cubic-bezier(0.2,0,0,1)] group-hover/img:scale-[1.03]"
              />
            </div>
          </div>

          {/* Dot Indicators with Progress */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 'right' : 'left')}
                className={`rounded-full transition-all duration-300 relative overflow-hidden ${
                  i === current
                    ? 'w-10 h-3 bg-[#E0D6FF]'
                    : 'w-3 h-3 bg-[#E0D6FF] hover:bg-[#C4B5FD]'
                }`}
              >
                {i === current && (
                  <span
                    key={`progress-${current}`}
                    className="absolute inset-0 bg-[#5B32EA] rounded-full anim-progress"
                  />
                )}
              </button>
            ))}
          </div>
        </FadeIn3D>

      </div>
    </section>
  );
}

