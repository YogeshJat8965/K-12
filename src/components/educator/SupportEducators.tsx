import { useState, useCallback, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { WordReveal, StaggerContainer, StaggerItem, FadeIn3D } from '../animations/ScrollAnimations';
import img1 from '../../assets/learners/1img.webp';
import img2 from '../../assets/learners/2img.webp';
import img3 from '../../assets/learners/3img.webp';
import img4 from '../../assets/learners/4img.webp';
import img5 from '../../assets/learners/5img.webp';
import img6 from '../../assets/learners/6img.webp';

/* ─── Icon Components ─── */
const I = ({ children }: { children: React.ReactNode }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const CheckIcon = () => <I><path d="M20 6L9 17l-5-5" /></I>;

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
    title: "Vedya - AI Co-Pilot for Teachers",
    subtitle: "Your always-on AI teaching assistant, ready 24/7",
    desc: "Vedya is your personal AI teaching companion, built to reduce administrative load and elevate the quality of every lesson. She supports planning, grading, differentiation, and reflection, so you can reclaim hours every week and invest them in what only a human teacher can do.",
    image: img1,
    featuresLayout: 'list',
    features: [
      { icon: <CheckIcon />, title: "Smart lesson planning across disciplines and grade levels.", desc: "" },
      { icon: <CheckIcon />, title: "Instant feedback suggestions and grading support for essays, projects, and presentations.", desc: "" },
      { icon: <CheckIcon />, title: "Adaptive content tailored to each student's level, learning style, and goals.", desc: "" },
      { icon: <CheckIcon />, title: "Reflective prompts to integrate SEL, ethics, and values into everyday lessons.", desc: "" },
      { icon: <CheckIcon />, title: "Classroom observation insights and suggested interventions based on student engagement patterns.", desc: "" },
    ]
  },
  {
    title: "CPD- AI Immersive Learning Series",
    subtitle: "Certification-track Continuous Professional Development",
    desc: "A structured, multi-tier CPD programme that helps educators progress from AI-Aware to AI-Practitioner to AI-Leader. Delivered as immersive monthly cohorts with live masterclasses, hands-on labs, and peer learning circles - each tier culminates in a certification that travels with your career.",
    image: img2,
    featuresLayout: 'list',
    features: [
      { icon: <CheckIcon />, title: "Three progression tiers: AI-Aware (foundations) → AI-Practitioner (classroom integration) → AI-Leader (pedagogical leadership).", desc: "" },
      { icon: <CheckIcon />, title: "Live masterclasses with AI experts, pedagogy specialists, and practising educators.", desc: "" },
      { icon: <CheckIcon />, title: "Hands-on labs covering GenAI tools, prompt design, assessment redesign, and ethical AI use.", desc: "" },
      { icon: <CheckIcon />, title: "AI-Ready Educator certification at each tier.", desc: "" },
    ]
  },
  {
    title: "Subject-Specific AI Pedagogy Tracks",
    subtitle: "Specialised CPD built for how you actually teach",
    desc: "Because a Chemistry teacher doesn't need the same AI training as an English Literature teacher. Our specialised tracks deliver subject-rooted AI pedagogy - real prompts, real assessments, real classroom use cases - so every educator walks away with tools they can use on Monday morning.",
    image: img3,
    featuresLayout: 'list',
    features: [
      { icon: <CheckIcon />, title: "AI for STEM Teachers - simulations, data visualisation, computational thinking, lab design.", desc: "" },
      { icon: <CheckIcon />, title: "AI for Humanities - critical reading, source analysis, essay feedback, creative writing.", desc: "" },
      { icon: <CheckIcon />, title: "AI for Commerce & Economics - financial modelling, case analysis, market simulations.", desc: "" },
      { icon: <CheckIcon />, title: "AI for Early Years & Primary - storytelling, phonics, visual learning, parent communication.", desc: "" },
      { icon: <CheckIcon />, title: "AI for Arts & Design - generative art, portfolio building, design thinking, critique frameworks.", desc: "" },
    ]
  },
  {
    title: "Teaching Enhancement Programme (TEP)",
    subtitle: "Holistic professional development for the modern classroom",
    desc: "A comprehensive, future-focused upskilling programme that goes beyond AI - covering pedagogy, assessment, student agency, and digital citizenship. TEP is for educators who want to evolve their entire teaching philosophy, not just add new tools.",
    image: img4,
    featuresLayout: 'list',
    features: [
      { icon: <CheckIcon />, title: "Integrate GenAI into curriculum design from first principles.", desc: "" },
      { icon: <CheckIcon />, title: "Facilitate project-based, inquiry-led, and Socratic classrooms with confidence.", desc: "" },
      { icon: <CheckIcon />, title: "Assess beyond tests - portfolios, peer review, capstones, and real-world challenges.", desc: "" },
      { icon: <CheckIcon />, title: "Co-create student agency, voice, and digital citizenship cultures.", desc: "" },
      { icon: <CheckIcon />, title: "Blended learning design - physical, digital, and hybrid classroom orchestration.", desc: "" },
    ]
  },
  {
    title: "SKILLZZA K-12 Educator Fellowship",
    subtitle: "Annual selective programme for India's most forward-thinking educators",
    desc: "A flagship, selective fellowship recognising high-performing educators shaping the future of learning. Fellows co-create curriculum with Skillzza, speak at CXO TechBOT events, get featured across our platforms, and earn the distinguished SKILLZZA K-12 Fellow designation - a career-defining credential.",
    image: img5,
    featuresLayout: 'list',
    features: [
      { icon: <CheckIcon />, title: "Annual cohort of 25–30 Fellows selected through a rigorous nomination process.", desc: "" },
      { icon: <CheckIcon />, title: "Co-create SKILLZZA K-12 curriculum, studios, and research alongside our academic advisors.", desc: "" },
      { icon: <CheckIcon />, title: "Speaking platform at CXO TechBOT summits and global education forums.", desc: "" },
      { icon: <CheckIcon />, title: "Dedicated mentor access, leadership masterclasses, and international exposure visits.", desc: "" },
      { icon: <CheckIcon />, title: "Lifetime designation as a SKILLZZA K-12 Fellow with alumni network access.", desc: "" },
    ]
  },
  {
    title: "Global Mentorship Opportunities",
    subtitle: "Guide student cohorts in real-world projects and innovation labs",
    desc: "Step into a mentorship role that expands your influence well beyond your own classroom. Guide student teams working on industry-grade capstones, international cohorts, and global innovation challenges - building your teaching portfolio while shaping learners across the world.",
    image: img6,
    featuresLayout: 'list',
    features: [
      { icon: <CheckIcon />, title: "Inspire learners from schools across India and internationally.", desc: "" },
      { icon: <CheckIcon />, title: "Grow your teaching portfolio, digital presence, and professional brand.", desc: "" },
      { icon: <CheckIcon />, title: "Earn mentoring certification reviewed by our academic advisory board.", desc: "" },
      { icon: <CheckIcon />, title: "Join a vibrant educator-innovator community with monthly peer circles.", desc: "" },
      { icon: <CheckIcon />, title: "Get published on Education techbot and featured in our annual Educator Spotlight series.", desc: "" },
    ]
  },
  {
    title: "Research & Publication Fellowship",
    subtitle: "Co-author whitepapers, case studies, and original research",
    desc: "For educators with insights worth publishing. Partner with Skillzza's research team to co-author whitepapers on pedagogy, case studies on classroom innovation, and original research on learning outcomes.",
    image: img1,
    featuresLayout: 'list',
    features: [
      { icon: <CheckIcon />, title: "Quarterly research themes aligned to NEP 2020, AI in education, and learning outcomes.", desc: "" },
      { icon: <CheckIcon />, title: "Editorial support from Skillzza team, end-to-end, Peer-reviewed publication with attributed co-authorship.", desc: "" },
      { icon: <CheckIcon />, title: "Distribution to academic institutions, edtech CXOs, and policy bodies.", desc: "" },
      { icon: <CheckIcon />, title: "Honorarium and speaking opportunities at the annual Skillzza Research Symposium.", desc: "" },
    ]
  },
  {
    title: "Teacher Connect Circle",
    subtitle: "Peer-facilitated sessions for the emotional journey of teaching in the AI era",
    desc: "AI is reshaping classrooms fast and the anxiety is real. Our Teacher Connect Circle is a small-group, facilitated space for educators to process the change, build resilience, and reclaim agency. This is where teachers come to feel seen, not just upskilled.",
    image: img2,
    featuresLayout: 'list',
    features: [
      { icon: <CheckIcon />, title: "Small-group circles of 8–10 educators, facilitated by certified coaches.", desc: "" },
      { icon: <CheckIcon />, title: "Monthly themes - identity, purpose, burnout, career navigation, change management.", desc: "" },
      { icon: <CheckIcon />, title: "Confidential, peer-supported space with no performance expectations.", desc: "" },
      { icon: <CheckIcon />, title: "Complements technical CPD - because skill without wellbeing doesn't sustain.", desc: "" },
      { icon: <CheckIcon />, title: "Optional 1:1 career coaching add-on for educators at inflection points.", desc: "" },
    ]
  },
  {
    title: "Educator Resource Library",
    subtitle: "Curated, always-current, ready-to-use",
    desc: "A continuously updated library built for educators who want to stay inspired and informed - without drowning in links. Everything here is curated, classroom-tested, and organised by the problems educators actually face.",
    image: img3,
    featuresLayout: 'list',
    features: [
      { icon: <CheckIcon />, title: "AI ethics case studies designed for classroom discussion, grade-appropriate.", desc: "" },
      { icon: <CheckIcon />, title: "Youth mental wellness integration frameworks and intervention guides.", desc: "" },
      { icon: <CheckIcon />, title: "Monthly insights briefing on emerging tools, pedagogy trends, and policy shifts.", desc: "" },
      { icon: <CheckIcon />, title: "Ready-to-use classroom prompts, toolkits, assessment rubrics, and lesson templates.", desc: "" },
      { icon: <CheckIcon />, title: "Parent communication scripts for talking about AI, screen time, and new learning models.", desc: "" },
    ]
  },
  {
    title: "Classroom AI Readiness Kit",
    subtitle: "A starter kit for schools not ready for full CPD - yet",
    desc: "A productised, low-friction entry point for schools and individual educators who want to explore AI-integrated teaching before committing to a larger programme. Everything you need to run your first AI-enabled classroom confidently, delivered as a self-paced digital kit.",
    image: img4,
    featuresLayout: 'list',
    features: [
      { icon: <CheckIcon />, title: "Prompt library of 200+ classroom-ready prompts across subjects and grades.", desc: "" },
      { icon: <CheckIcon />, title: "Assessment rubrics redesigned for AI-assisted student work.", desc: "" },
      { icon: <CheckIcon />, title: "Lesson plan templates, warm-up activities, and exit-ticket frameworks.", desc: "" },
      { icon: <CheckIcon />, title: "Parent communication scripts and FAQs for conversations about AI in the classroom.", desc: "" },
      { icon: <CheckIcon />, title: "Monthly updates so your kit stays current as tools and practices evolve.", desc: "" },
    ]
  }
];

export default function SupportEducators() {
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

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current === slides.length - 1 ? 0 : current + 1, 'right');
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const s = slides[current];

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
    <section className="w-full bg-white py-12 lg:py-16 font-poppins">
      <style>{animStyles}</style>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <StaggerContainer className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-4xl">
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-extrabold text-[#1A1A2E] leading-[1.2] mb-6 tracking-tight">
              <WordReveal text="How We Support Educators" />
            </h2>
            <StaggerItem className="text-[#6B7280] text-[15px] md:text-[16px] leading-[1.7] font-medium max-w-3xl">
              A full-spectrum ecosystem designed around every stage of an educator's journey - from daily classroom support to career-defining fellowships and institutional leadership.
            </StaggerItem>
          </div>
          <StaggerItem className="flex items-center gap-4 shrink-0">
            <button onClick={prev} className="w-14 h-14 rounded-full bg-[#5B32EA] flex items-center justify-center text-white hover:bg-[#4A25C7] transition-all duration-200 shadow-[0_8px_20px_rgba(91,50,234,0.25)] hover:scale-110 active:scale-90">
              <ArrowLeft size={24} />
            </button>
            <button onClick={next} className="w-14 h-14 rounded-full bg-[#5B32EA] flex items-center justify-center text-white hover:bg-[#4A25C7] transition-all duration-200 shadow-[0_8px_20px_rgba(91,50,234,0.25)] hover:scale-110 active:scale-90">
              <ArrowRight size={24} />
            </button>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn3D delay={0.2} y={50} rotateX={5} className="bg-white rounded-[40px] pl-6 pr-4 py-8 md:pl-10 md:pr-6 md:py-10 lg:pl-12 lg:pr-6 lg:py-12 border border-gray-100 shadow-[0_12px_60px_rgba(0,0,0,0.06)] overflow-hidden">
          <div key={current} className="grid grid-cols-1 xl:grid-cols-[1fr_1.25fr] gap-8 xl:gap-5 items-center">
            <div className={`flex flex-col justify-center ${slideClass}`}>
              <h3 className="text-[30px] md:text-[38px] lg:text-[42px] font-extrabold text-[#0D152E] leading-[1.1] mb-4 tracking-tight whitespace-pre-line anim-rise" style={{ animationDelay: '0.05s' }}>
                {s.title}
              </h3>
              <div className="border-l-[4px] border-[#5B32EA] pl-5 mb-4 anim-rise" style={{ animationDelay: '0.12s' }}>
                <p className="text-[#5B32EA] text-[16px] md:text-[18px] italic font-medium leading-[1.4]">{s.subtitle}</p>
              </div>
              <p className="text-[#4B5563] text-[13px] md:text-[14px] leading-[1.65] font-medium mb-4 anim-rise" style={{ animationDelay: '0.18s' }}>{s.desc}</p>
              {s.boldDesc && <p className="text-[#111827] text-[13px] md:text-[14px] font-bold leading-[1.6] mb-6 anim-rise" style={{ animationDelay: '0.22s' }}>{s.boldDesc}</p>}

              <div className="flex flex-col gap-3 mt-1">
                {s.features.map((f, fi) => (
                  <div key={fi} className="flex items-start gap-3 anim-rise" style={{ animationDelay: `${0.25 + fi * 0.06}s` }}>
                    <div className="w-[32px] h-[32px] mt-1 shrink-0 bg-[#F4EFFF] rounded-full flex items-center justify-center text-[#4B24EA]">
                      {f.icon}
                    </div>
                    <div className="flex-1 pt-0.5">
                      <h4 className="text-[14px] md:text-[15px] font-bold text-[#111827] leading-snug">{f.title}</h4>
                      {f.desc && <p className="text-[#6B7280] text-[11px] md:text-[12px] leading-[1.4] mt-1">{f.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="group/img w-full relative rounded-[28px] overflow-hidden anim-fade-scale flex justify-center items-center">
              <img src={s.image} alt={s.title} className="w-full h-auto object-contain rounded-[28px] transition-transform duration-700 ease-[cubic-bezier(0.2,0,0,1)] group-hover/img:scale-[1.03]" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
            {slides.map((_, i) => (
              <button key={i} onClick={() => goTo(i, i > current ? 'right' : 'left')} className={`rounded-full transition-all duration-300 relative overflow-hidden ${i === current ? 'w-10 h-3 bg-[#E0D6FF]' : 'w-3 h-3 bg-[#E0D6FF] hover:bg-[#C4B5FD]'}`}>
                {i === current && <span key={`progress-${current}`} className="absolute inset-0 bg-[#5B32EA] rounded-full anim-progress" />}
              </button>
            ))}
          </div>
        </FadeIn3D>

      </div>
    </section>
  );
}
