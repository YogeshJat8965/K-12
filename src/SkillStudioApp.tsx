import { useEffect, useState } from 'react';
import { LenisProvider, MagneticButton, TiltCard, ScrollRevealHeadline, StaggerRow, Section2Reveal, CircularProgressStat, AnimatedCounter, RoadReveal, MagneticSphere, ScrollRevealWord } from './components/studio/Animations';
import './components/studio/Animations.css';
import { ArrowRight, GraduationCap, Building2, Box, Lightbulb, Users, Laptop, Scan, Calendar, Scale, Brain, Trophy, Library, Blocks, Palette, PieChart, Briefcase } from 'lucide-react';
import Navbar from './components/Navbar';
import heroImg from './assets/skill studio/e531c7559b7451b1ec6b9df853698063c461a861.png';
import bgImg from './assets/skill studio/background.png';
import learningPathwayImg from './assets/skill studio/learning.png';
import whatIsImg from './assets/skill studio/27d47828cc791e53813bb3ca6ec5d29ca22d5bb7 (1).png';
import img1 from './assets/skill studio/1img.png';
import img2 from './assets/skill studio/2img.png';
import img3 from './assets/skill studio/3img.png';
import img4 from './assets/skill studio/4img.png';
import img5 from './assets/skill studio/5img.png';
import img6 from './assets/skill studio/6img.png';
import img7 from './assets/skill studio/7img.png';
import implBg from './assets/skill studio/background img.png';
import partnershipImg from './assets/skill studio/37432c54c564481b83e49588db6594f29d6d2fd7.png';
import { LayoutGrid, CalendarRange, Clock, CalendarDays, BarChart3, TrendingUp, User, UserPlus, Award, BookOpen, ClipboardCheck, UserCog, Folder, BarChart, ClipboardList, LayoutDashboard, Sparkles, Rocket, Bot, MonitorPlay, Leaf } from 'lucide-react';
import Footer from './components/Footer';

export default function SkillStudioApp() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = 'Skill Studio | Skillzza';

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LenisProvider>
      <div className="skill-studio-page min-h-screen text-slate-900 overflow-x-hidden font-poppins" style={{ fontFamily: "'Poppins', sans-serif" }}>

        <Navbar />

        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] bg-white/10">
          <div
            className="h-full bg-[#FFD700] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Hero Section */}
        <section
          className="relative z-10 w-full pt-32 pb-32 flex items-center text-white"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '95vh'
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 mt-12 lg:-mt-16">

            {/* Left Content */}
            <div className="w-full lg:w-[55%] flex flex-col items-start text-left lg:pr-4">

              {/* Pill Badge */}
              {/* <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md mb-8">
                <span className="text-[11px] font-bold tracking-widest text-white/90">
                  SKILL STUDIOS | K-12 FUTURE SKILLS
                </span>
              </div> */}

              {/* Heading */}
              <ScrollRevealHeadline>
                <h1
                  className="mb-7 text-[36px] md:text-[48px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: '121%',
                    letterSpacing: '0%'
                  }}
                >
                  Empowering Students with <br />
                  <span className="text-[#FFD700]">Future Skills, Creativity &<br /> Innovation</span>
                </h1>
              </ScrollRevealHeadline>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10 leading-[1.6] font-medium">
                An AI-Powered learning ecosystem designed to help students explore, build, and excel beyond traditional education.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                <MagneticButton>
                  <button className="group px-8 py-3.5 bg-white text-[#340D7E] rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-lg shadow-black/10">
                    Join the club
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </MagneticButton>

                <MagneticButton>
                  <button className="group px-8 py-3.5 bg-transparent border border-white/40 text-white rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                    Explore programmes
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </MagneticButton>
              </div>

            </div>

            {/* Right Image with Orbits */}
            <div className="w-full lg:w-[45%] flex justify-center items-center relative min-h-[400px] md:min-h-[550px] lg:min-h-[650px] -mt-8 lg:mt-0">

              <style>
                {`
                @keyframes spin-cw {
                  from { transform: translate(-50%, -50%) rotate(0deg); }
                  to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes spin-ccw {
                  from { transform: translate(-50%, -50%) rotate(0deg); }
                  to { transform: translate(-50%, -50%) rotate(-360deg); }
                }
                @keyframes counter-spin-cw {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(-360deg); }
                }
                @keyframes counter-spin-ccw {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes float-3d {
                  0% { transform: perspective(1000px) translateY(0px) rotateX(0deg) rotateY(0deg) scale(1); filter: drop-shadow(0 0 40px rgba(168,85,247,0.4)) brightness(1); }
                  33% { transform: perspective(1000px) translateY(-15px) rotateX(8deg) rotateY(12deg) scale(1.02); filter: drop-shadow(0 0 70px rgba(168,85,247,0.7)) brightness(1.15); }
                  66% { transform: perspective(1000px) translateY(10px) rotateX(-5deg) rotateY(-8deg) scale(0.98); filter: drop-shadow(0 0 50px rgba(168,85,247,0.5)) brightness(0.95); }
                  100% { transform: perspective(1000px) translateY(0px) rotateX(0deg) rotateY(0deg) scale(1); filter: drop-shadow(0 0 40px rgba(168,85,247,0.4)) brightness(1); }
                }
                
                .orbit-1 { animation: spin-cw 35s linear infinite; }
                .orbit-2 { animation: spin-ccw 50s linear infinite; }
                
                .badge-counter-1 { animation: counter-spin-cw 35s linear infinite; }
                .badge-counter-2 { animation: counter-spin-ccw 50s linear infinite; }
                
                .orbit-badge {
                  position: absolute;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  transform: translate(-50%, -50%);
                  cursor: pointer;
                }
                .badge-icon-wrapper {
                  width: 44px;
                  height: 44px;
                  border-radius: 50%;
                  background: linear-gradient(180deg, #B283FF 0%, #7547F8 100%);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  box-shadow: -5.53px 11.06px 13.55px 0px #FFFFFF6E inset, 0px 0px 11.89px 0px #FFFFFF30;
                  border: 2px solid rgba(255,255,255,0.15);
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .orbit-badge:hover .badge-icon-wrapper {
                  transform: scale(1.15);
                  box-shadow: -5.53px 11.06px 13.55px 0px #FFFFFF6E inset, 0 0 25px 8px rgba(178, 131, 255, 0.6);
                  background: linear-gradient(180deg, #C29BFF 0%, #875CF9 100%);
                }
                @media (min-width: 768px) {
                  .badge-icon-wrapper { width: 52px; height: 52px; }
                }
                .badge-label {
                  font-size: 13px;
                  font-weight: 800;
                  color: #FFFFFF;
                  margin-top: 8px;
                  letter-spacing: 0.5px;
                  text-shadow: 0 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.6);
                  transition: all 0.3s ease;
                }
                .orbit-badge:hover .badge-label {
                  color: #FFD700;
                  transform: scale(1.1) translateY(2px);
                  text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
                }
                .animate-sphere-3d {
                  animation: float-3d 8s ease-in-out infinite;
                  transform-style: preserve-3d;
                }
              `}
              </style>

              {/* Orbit 2 (Outer) */}
              <div className="absolute top-1/2 left-1/2 w-[330px] h-[330px] md:w-[460px] md:h-[460px] lg:w-[560px] lg:h-[560px] border border-dashed border-white/30 rounded-full orbit-2">
                <div className="orbit-badge" style={{ left: '65%', top: '2.2%' }}>
                  <div className="badge-counter-2 flex flex-col items-center">
                    <div className="badge-icon-wrapper"><Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
                    <span className="badge-label">Entrepreneurship</span>
                  </div>
                </div>
                <div className="orbit-badge" style={{ left: '14.65%', top: '14.65%' }}>
                  <div className="badge-counter-2 flex flex-col items-center">
                    <div className="badge-icon-wrapper"><TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
                    <span className="badge-label">Finance</span>
                  </div>
                </div>
                <div className="orbit-badge" style={{ left: '35%', top: '97.8%' }}>
                  <div className="badge-counter-2 flex flex-col items-center">
                    <div className="badge-icon-wrapper"><Scale className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
                    <span className="badge-label">Law</span>
                  </div>
                </div>
                <div className="orbit-badge" style={{ left: '85.35%', top: '85.35%' }}>
                  <div className="badge-counter-2 flex flex-col items-center">
                    <div className="badge-icon-wrapper"><Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
                    <span className="badge-label">Ai</span>
                  </div>
                </div>
              </div>

              {/* Orbit 1 (Inner) */}
              <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] md:w-[360px] md:h-[360px] lg:w-[440px] lg:h-[440px] border border-dashed border-white/30 rounded-full orbit-1">
                <div className="orbit-badge" style={{ left: '14.65%', top: '14.65%' }}>
                  <div className="badge-counter-1 flex flex-col items-center">
                    <div className="badge-icon-wrapper"><Rocket className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
                    <span className="badge-label">Space</span>
                  </div>
                </div>
                <div className="orbit-badge" style={{ left: '85.35%', top: '14.65%' }}>
                  <div className="badge-counter-1 flex flex-col items-center">
                    <div className="badge-icon-wrapper"><Bot className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
                    <span className="badge-label">Robotics</span>
                  </div>
                </div>
                <div className="orbit-badge" style={{ left: '14.65%', top: '85.35%' }}>
                  <div className="badge-counter-1 flex flex-col items-center">
                    <div className="badge-icon-wrapper"><MonitorPlay className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
                    <span className="badge-label">Media</span>
                  </div>
                </div>
                <div className="orbit-badge" style={{ left: '85.35%', top: '85.35%' }}>
                  <div className="badge-counter-1 flex flex-col items-center">
                    <div className="badge-icon-wrapper"><Leaf className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
                    <span className="badge-label">Sustainability</span>
                  </div>
                </div>
              </div>

              {/* The Central Sphere */}
              <div className="relative z-10 w-[270px] md:w-[390px] lg:w-[500px] flex justify-center items-center pointer-events-none">
                <MagneticSphere
                  src={heroImg}
                  className="w-full h-auto object-contain animate-sphere-3d pointer-events-auto"
                />
              </div>

            </div>

          </div>
        </section>

        {/* Stats Card - Overlapping Hero */}
        <section className="relative z-20 mt-8 md:-mt-24 max-w-[1280px] mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-6 px-4 lg:px-12 grid grid-cols-2 md:flex md:flex-row items-start md:items-center justify-between gap-y-8 gap-x-4 md:gap-0">

            {/* Stat 1 */}
            <div className="stat-card group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-5 flex-1 justify-center md:border-r border-gray-100 w-full">
              <div className="stat-icon w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#F3EFFF] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-[#6B3CF6]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight"><AnimatedCounter end={150000} suffix=" +" /></h3>
                <p className="text-[12px] md:text-sm font-medium text-gray-500 mt-0.5 md:mt-1">Students</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="stat-card group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-5 flex-1 justify-center md:border-r border-gray-100 w-full">
              <div className="stat-icon w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FFF6E5] flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 md:w-8 md:h-8 text-[#FF9800]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight"><AnimatedCounter end={150} suffix="+" /></h3>
                <p className="text-[12px] md:text-sm font-medium text-gray-500 mt-0.5 md:mt-1">Partner Schools</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="stat-card group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-5 flex-1 justify-center md:border-r border-gray-100 w-full">
              <div className="stat-icon w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FFEBEB] flex items-center justify-center shrink-0">
                <Bot className="w-6 h-6 md:w-8 md:h-8 text-[#FF3B30]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight"><AnimatedCounter end={100} suffix="+" /></h3>
                <p className="text-[12px] md:text-sm font-medium text-gray-500 mt-0.5 md:mt-1">AI Projects</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="stat-card group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-5 flex-1 justify-center w-full">
              <div className="stat-icon w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#E8FAED] flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-[#34C759]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight"><AnimatedCounter end={700} suffix="+" /></h3>
                <p className="text-[12px] md:text-sm font-medium text-gray-500 mt-0.5 md:mt-1">Educators Upskilled</p>
              </div>
            </div>

          </div>
        </section>

        {/* What is Skillzza Club Section */}
        <section className="py-10 lg:py-20 bg-white">
          <Section2Reveal className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16">

            {/* Left Image */}
            <div className="w-full lg:w-1/2 group">
              <img
                src={whatIsImg}
                alt="Students working on laptops"
                className="w-full h-full object-cover rounded-[32px] shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pl-4 lg:py-4 justify-between">
              <div className="w-full">
                <ScrollRevealHeadline>
                  <h2
                    className="mb-8 text-[28px] lg:text-[36px] text-[#1A1A2E]"
                    style={{
                      fontWeight: 600,
                      lineHeight: '100%',
                      letterSpacing: '0%'
                    }}
                  >
                    What is <span className="bg-gradient-to-r from-[#4200FF] via-[#E82194] to-[#FF6644] text-transparent bg-clip-text animate-pulse">Skill Studio?</span>
                  </h2>
                </ScrollRevealHeadline>

                <p className="text-[16px] text-[#5C6274] leading-[1.8] mb-6 font-medium">
                  Skill Studio are <span className="font-semibold text-[#5B32EA]">not just after-school activities.</span> They are structured skill studios designed to help students discover their strengths, build real world skills, and develop a career-ready personality - all while having fun and learning through doing.
                </p>

                <p className="text-[16px] text-[#5C6274] leading-[1.8] font-medium mb-8 lg:mb-0">
                  Unlike traditional school clubs that focus on participation certificates, Skillzza Studios create <span className="font-semibold text-[#5B32EA]">measurable skill evidence, digital portfolios, and growth milestones</span> that students carry forward into their academic and professional futures.
                </p>
              </div>

              {/* Features Row */}
              <div className="flex flex-wrap items-center justify-start w-full gap-3 pt-4 mt-auto">

                {/* Feature 1 */}
                <div className="px-5 py-2.5 border border-gray-200 rounded-lg cursor-pointer hover:border-[#6B3CF6] hover:bg-[#F3EFFF]/50 transition-all shadow-sm group">
                  <p className="text-[13px] font-semibold text-slate-700 group-hover:text-[#6B3CF6] transition-colors whitespace-nowrap">Hands-on Projects</p>
                </div>

                {/* Feature 2 */}
                <div className="px-5 py-2.5 border border-gray-200 rounded-lg cursor-pointer hover:border-[#FF9800] hover:bg-[#FFF6E5]/50 transition-all shadow-sm group">
                  <p className="text-[13px] font-semibold text-slate-700 group-hover:text-[#FF9800] transition-colors whitespace-nowrap">Critical Thinking</p>
                </div>

                {/* Feature 3 */}
                <div className="px-5 py-2.5 border border-gray-200 rounded-lg cursor-pointer hover:border-[#FF3B30] hover:bg-[#FFEBEB]/50 transition-all shadow-sm group">
                  <p className="text-[13px] font-semibold text-slate-700 group-hover:text-[#FF3B30] transition-colors whitespace-nowrap">Collaboration</p>
                </div>

                {/* Feature 4 */}
                <div className="px-5 py-2.5 border border-gray-200 rounded-lg cursor-pointer hover:border-[#34C759] hover:bg-[#E8FAED]/50 transition-all shadow-sm group">
                  <p className="text-[13px] font-semibold text-slate-700 group-hover:text-[#34C759] transition-colors whitespace-nowrap">Digital Literacy</p>
                </div>

                <div className="px-5 py-2.5 border border-gray-200 rounded-lg cursor-pointer hover:border-[#FF9800] hover:bg-[#FFF6E5]/50 transition-all shadow-sm group">
                  <p className="text-[13px] font-semibold text-slate-700 group-hover:text-[#FF9800] transition-colors whitespace-nowrap">AI Skilling</p>
                </div>

                <div className="px-5 py-2.5 border border-gray-200 rounded-lg cursor-pointer hover:border-[#FF9800] hover:bg-[#FFF6E5]/50 transition-all shadow-sm group">
                  <p className="text-[13px] font-semibold text-slate-700 group-hover:text-[#FF9800] transition-colors whitespace-nowrap">Experiential Learning</p>
                </div>

              </div>

            </div>
          </Section2Reveal>
        </section>

        {/* The Challenge Section */}
        <section className="py-12 lg:py-28" style={{ backgroundColor: '#F9F4FA' }}>
          <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-0">

            {/* Left Content */}
            <div className="w-full lg:w-[36%] flex flex-col items-start text-left">
              <span className="text-[12px] font-bold text-[#4200FF] uppercase mb-4 tracking-wide">
                THE CHALLENGE
              </span>
              <ScrollRevealHeadline>
                <h2 className="text-[28px] lg:text-[40px] font-bold text-[#1A1A2E] leading-[1.2] mb-6">
                  Bridging the Skills Gap <br className="hidden lg:block" />
                  in K-12 Education
                </h2>
              </ScrollRevealHeadline>
              <p className="text-[16px] text-[#6B7280] leading-[1.8] font-medium pr-2">
                Independent research across K-12 institutions reveals systemic gaps in how schools prepare students for an AI-driven world. Our Skill Studios are designed to close these gaps with measurable outcomes.
              </p>
            </div>

            {/* Right Content - Stats Row */}
            <StaggerRow className="w-full lg:w-[62%] grid grid-cols-2 lg:grid-cols-5 gap-y-6 lg:gap-y-10 gap-x-2">

              <CircularProgressStat end={87} colorHex="#3422F5" label={<>Skill Gaps in<br />K-12 Education</>} />
              <CircularProgressStat end={72} colorHex="#F59E0B" label={<>Limited Career<br />Alignment in School<br />Activities</>} />
              <CircularProgressStat end={68} colorHex="#A855F7" label={<>Low Measurable<br />Skill Tracking</>} />
              <CircularProgressStat end={81} colorHex="#EF4444" label={<>Minimal Real-World<br />Application<br />Exposure</>} />
              <CircularProgressStat end={94} colorHex="#10B981" label={<>High Demand<br />for Future Skills<br />Integration</>} />

            </StaggerRow>

          </div>
        </section>

        {/* Our Skill Studios Section */}
        <section className="py-12 md:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">

            {/* Header */}
            <div className="mb-14 text-center flex flex-col items-center">
              <ScrollRevealHeadline>
                <h2
                  className="mb-4 text-[28px] md:text-[36px] text-[#1A1A2E]"
                  style={{
                    fontWeight: 600,
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  Our <span className="bg-gradient-to-r from-[#4200FF] via-[#E82194] to-[#FF6644] text-transparent bg-clip-text">Skill Studios</span>
                </h2>
              </ScrollRevealHeadline>
              <div className="max-w-[1150px] text-center">
                <span className="block text-[14px] italic text-[#6B7280] leading-[1.6] mb-1">
                  A curated portfolio of 7 future-forward Skill Studios
                </span>
                <p className="text-[16px] text-[#6B7280] leading-[1.8] font-medium max-w-none lg:whitespace-nowrap">
                  Each designed as an immersive learning pod where students build Capability, Confidence, and a portfolio that travels with them.
                </p>
              </div>
            </div>

            {/* Cards Grid */}
            <StaggerRow className="flex flex-wrap justify-center gap-6 lg:gap-8">

              {/* Card 1 */}
              <TiltCard className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px]">
                <div className="w-full h-full bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-transform">
                  <div className="h-[220px] w-full relative overflow-hidden">
                    <img src={img1} alt="Jr. Agentic AI Engineer" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 relative z-10 bg-white">
                    <div className="border-l-[3.5px] border-[#4200FF] pl-3 py-1">
                      <h3 className="font-bold text-[#1A1A2E] text-[19px] leading-[1.3] tracking-tight">
                        Jr. Agentic AI<br />Engineer
                      </h3>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Card 2 */}
              <TiltCard className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px]">
                <div className="w-full h-full bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-transform">
                  <div className="h-[180px] sm:h-[220px] w-full relative overflow-hidden">
                    <img src={img2} alt="Gen AI & Deep Tech" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 relative z-10 bg-white">
                    <div className="border-l-[3.5px] border-[#4200FF] pl-3 py-1">
                      <h3 className="font-bold text-[#1A1A2E] text-[19px] leading-[1.3] tracking-tight">
                        Gen AI & Deep<br />Tech
                      </h3>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Card 3 */}
              <TiltCard className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px]">
                <div className="w-full h-full bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-transform">
                  <div className="h-[180px] sm:h-[220px] w-full relative overflow-hidden">
                    <img src={img3} alt="Jr. Data scientist" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 relative z-10 bg-white">
                    <div className="border-l-[3.5px] border-[#4200FF] pl-3 py-1">
                      <h3 className="font-bold text-[#1A1A2E] text-[19px] leading-[1.3] tracking-tight">
                        Jr. Data<br />scientist
                      </h3>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Card 4 */}
              <TiltCard className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px]">
                <div className="w-full h-full bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-transform">
                  <div className="h-[180px] sm:h-[220px] w-full relative overflow-hidden">
                    <img src={img4} alt="Jr. Digital Journalist" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 relative z-10 bg-white">
                    <div className="border-l-[3.5px] border-[#4200FF] pl-3 py-1">
                      <h3 className="font-bold text-[#1A1A2E] text-[19px] leading-[1.3] tracking-tight">
                        Jr. Digital<br />Journalist
                      </h3>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Card 5 */}
              <TiltCard className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px]">
                <div className="w-full h-full bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-transform">
                  <div className="h-[180px] sm:h-[220px] w-full relative overflow-hidden">
                    <img src={img5} alt="Mindfulness" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 relative z-10 bg-white">
                    <div className="border-l-[3.5px] border-[#4200FF] pl-3 py-1">
                      <h3 className="font-bold text-[#1A1A2E] text-[19px] leading-[1.3] tracking-tight">
                        Mindfulness
                      </h3>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Card 6 */}
              <TiltCard className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px]">
                <div className="w-full h-full bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-transform">
                  <div className="h-[180px] sm:h-[220px] w-full relative overflow-hidden">
                    <img src={img6} alt="Digital creativity & AI skills by ADOBE" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 relative z-10 bg-white">
                    <div className="border-l-[3.5px] border-[#4200FF] pl-3 py-1">
                      <h3 className="font-bold text-[#1A1A2E] text-[19px] leading-[1.3] tracking-tight">
                        Digital creativity &<br />
                        AI skills by ADOBE <span className="text-[14px] text-red-500 font-semibold ml-1">(Free)</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Card 7 */}
              <TiltCard className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px]">
                <div className="w-full h-full bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden transition-transform">
                  <div className="h-[180px] sm:h-[220px] w-full relative overflow-hidden">
                    <img src={img7} alt="Jr. Global ambassador" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 relative z-10 bg-white">
                    <div className="border-l-[3.5px] border-[#4200FF] pl-3 py-1">
                      <h3 className="font-bold text-[#1A1A2E] text-[19px] leading-[1.3] tracking-tight">
                        Jr. Global<br />ambassador
                      </h3>
                    </div>
                  </div>
                </div>
              </TiltCard>

            </StaggerRow>
          </div>
        </section>

        {/* The Skill Learning Pathway Section */}
        <section className="pt-8 pb-6 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">

            {/* Top Row: Heading and Buttons */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-1 gap-6 lg:gap-0">
              <div>
                <ScrollRevealHeadline>
                  <h2
                    className="mb-2 text-[28px] md:text-[36px] text-[#1A1A2E]"
                    style={{
                      fontWeight: 600,
                      lineHeight: '100%',
                      letterSpacing: '0%'
                    }}
                  >
                    The <span className="bg-gradient-to-r from-[#4200FF] via-[#E82194] to-[#FF6644] text-transparent bg-clip-text">Skill learning</span> pathway
                  </h2>
                </ScrollRevealHeadline>
                <p className="text-[16px] text-[#6B7280] font-medium">
                  Focused Depth. Measurable Impact.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <MagneticButton className="w-full sm:w-auto">
                  <button className="w-full px-6 py-3 bg-[#6A3EEA] hover:bg-[#5B32EA] text-white text-[12px] font-bold tracking-wide rounded-md transition-colors flex items-center justify-center gap-2 uppercase">
                    Design Your Studio Mix <ArrowRight className="w-4 h-4" />
                  </button>
                </MagneticButton>
                <MagneticButton className="w-full sm:w-auto">
                  <button className="w-full px-6 py-3 bg-transparent border-[1.5px] border-[#6A3EEA] text-[#6A3EEA] hover:bg-[#F3EFFF] text-[12px] font-bold tracking-wide rounded-md transition-colors flex items-center justify-center gap-2 uppercase">
                    Schedule Discovery Session <ArrowRight className="w-4 h-4" />
                  </button>
                </MagneticButton>
              </div>
            </div>

            {/* Learning Pathway Image */}
            <Section2Reveal className="mt-4 lg:mt-6 w-full flex justify-center items-center">
              <img
                src={learningPathwayImg}
                alt="The Skill Learning Pathway"
                className="w-full max-w-[1200px] h-auto object-contain mx-auto"
              />
            </Section2Reveal>
          </div>
        </section>

        {/* The Implementation Framework Section */}
        <section className="pt-12 md:pt-24 pb-6 bg-white relative overflow-hidden">

          <style>{`
            @keyframes float-icon {
              0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
              33% { transform: translate(25px, -35px) rotate(12deg) scale(1.1); }
              66% { transform: translate(-20px, 20px) rotate(-12deg) scale(0.9); }
              100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            }
            .animate-float-1 { animation: float-icon 18s ease-in-out infinite; }
            .animate-float-2 { animation: float-icon 22s ease-in-out infinite reverse; }
            .animate-float-3 { animation: float-icon 25s ease-in-out infinite 2s; }
            .animate-float-4 { animation: float-icon 20s ease-in-out infinite reverse 1s; }
          `}</style>

          {/* Animated Background Icons */}
          <div className="absolute inset-0 pointer-events-none z-0 md:z-[50] overflow-hidden opacity-40 md:opacity-100">
            <Bot className="absolute text-[#4200FF] w-24 h-24 top-[10%] left-[5%] animate-float-1" />
            <Brain className="absolute text-[#E82194] w-32 h-32 top-[20%] right-[8%] animate-float-2" />
            <Rocket className="absolute text-[#FF6644] w-20 h-20 top-[45%] left-[2%] animate-float-3" />
            <BookOpen className="absolute text-[#34C759] w-28 h-28 bottom-[15%] left-[20%] animate-float-4" />
            <Lightbulb className="absolute text-[#FF9800] w-24 h-24 top-[65%] right-[5%] animate-float-1" />
            <Laptop className="absolute text-[#3B82F6] w-28 h-28 bottom-[5%] right-[25%] animate-float-2" />
            <Sparkles className="absolute text-[#A855F7] w-16 h-16 top-[30%] left-[25%] animate-float-3" />
            <Users className="absolute text-[#EF4444] w-24 h-24 bottom-[35%] right-[30%] animate-float-4" />
          </div>

          {/* Header */}
          <div className="text-center mb-16 md:mb-36 relative z-10 px-4">
            <ScrollRevealHeadline>
              <h2
                className="mb-3 text-[28px] md:text-[36px] text-[#1A1A2E]"
                style={{
                  fontWeight: 600,
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                The <span className="bg-gradient-to-r from-[#4200FF] via-[#E82194] to-[#FF6644] text-transparent bg-clip-text">Implementation</span> Framework
              </h2>
            </ScrollRevealHeadline>
            <p className="text-[16px] text-[#6B7280] font-medium">
              Simple. Structured. Outcome-Driven.
            </p>
          </div>

          <div className="max-w-[1200px] mx-auto px-6 relative">

            {/* Background Path Image */}
            <div className="hidden md:flex absolute inset-x-0 -top-12 bottom-0 z-0 justify-center items-start pointer-events-none">
              <RoadReveal>
                <img src={implBg} alt="Path" className="w-[85%] h-full object-contain object-top origin-top scale-[1.3] mx-auto" />
              </RoadReveal>
            </div>

            {/* Cards Container */}
            <div className="relative z-10 flex flex-col gap-8 md:gap-0 pb-0 md:translate-x-5">

              {/* Card 01 - Left */}
              <TiltCard className="w-full md:w-[42%] self-center md:self-start z-10 mt-0 md:-mt-14">
                <div className="bg-white border border-gray-200 rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-6 flex items-center gap-5 w-full transition-transform">
                  <div className="feature-icon-wrapper w-16 h-16 md:w-20 md:h-20 rounded-[16px] md:rounded-[20px] bg-[#F3EFFF] flex items-center justify-center shrink-0">
                    <LayoutGrid className="w-7 h-7 md:w-8 md:h-8 text-[#5B32EA]" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[24px] md:text-[28px] font-bold text-[#5B32EA] leading-none mb-1">01</span>
                    <h3 className="text-[17px] md:text-[18px] font-bold text-[#1A1A2E] mb-1.5">Choose Studios</h3>
                    <p className="text-[13px] md:text-[13.5px] text-gray-500 font-medium leading-[1.6] mb-3 text-left">
                      Select any 3 Skill Studios per year aligned to your school's goals, vision, and student profile.
                    </p>
                    <div className="bg-[#F3EFFF] text-[#5B32EA] text-[11px] md:text-[12px] font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-2">
                      <CalendarRange className="w-3.5 h-3.5" /> Planning & Alignment
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Card 02 - Right */}
              <TiltCard className="w-full md:w-[42%] self-center md:self-end z-20 mt-0 md:mt-28">
                <div className="bg-white border border-gray-200 rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-6 flex items-center gap-5 w-full justify-between transition-transform">
                  <div className="flex flex-col items-start">
                    <span className="text-[24px] md:text-[28px] font-bold text-[#3B82F6] leading-none mb-1">02</span>
                    <h3 className="text-[17px] md:text-[18px] font-bold text-[#1A1A2E] mb-1.5">Flexible Rollout</h3>
                    <p className="text-[13px] md:text-[13.5px] text-gray-500 font-medium leading-[1.6] mb-3 text-left">
                      Term, semester, parallel, or student-choice models - built to fit your existing timetable without disruption.
                    </p>
                    <div className="bg-[#EFF6FF] text-[#3B82F6] text-[11px] md:text-[12px] font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" /> Setup & Scheduling
                    </div>
                  </div>
                  <div className="feature-icon-wrapper w-16 h-16 md:w-20 md:h-20 rounded-[16px] md:rounded-[20px] bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <CalendarDays className="w-7 h-7 md:w-8 md:h-8 text-[#3B82F6]" />
                  </div>
                </div>
              </TiltCard>

              {/* Card 03 - Left */}
              <TiltCard className="w-full md:w-[42%] self-center md:self-start z-30 mt-0 md:mt-40">
                <div className="bg-white border border-gray-200 rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-6 flex items-center gap-5 w-full transition-transform">
                  <div className="feature-icon-wrapper w-16 h-16 md:w-20 md:h-20 rounded-[16px] md:rounded-[20px] bg-[#FDF2F8] flex items-center justify-center shrink-0">
                    <BarChart3 className="w-7 h-7 md:w-8 md:h-8 text-[#EC4899]" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[24px] md:text-[28px] font-bold text-[#EC4899] leading-none mb-1">03</span>
                    <h3 className="text-[17px] md:text-[18px] font-bold text-[#1A1A2E] mb-1.5">Structured Execution</h3>
                    <p className="text-[13px] md:text-[13.5px] text-gray-500 font-medium leading-[1.6] mb-3 text-left">
                      Onboarding → weekly sessions → progress tracking → term showcases → annual review.
                    </p>
                    <div className="bg-[#FDF2F8] text-[#EC4899] text-[11px] md:text-[12px] font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5" /> Ongoing & Monitored
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Card 04 - Right */}
              <TiltCard className="w-full md:w-[42%] self-center md:self-end z-40 mt-0 md:mt-20">
                <div className="bg-white border border-gray-200 rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-6 flex items-center gap-5 w-full justify-between transition-transform">
                  <div className="flex flex-col items-start">
                    <span className="text-[24px] md:text-[28px] font-bold text-[#F97316] leading-none mb-1">04</span>
                    <h3 className="text-[17px] md:text-[18px] font-bold text-[#1A1A2E] mb-1.5">Experiential Learning</h3>
                    <p className="text-[13px] md:text-[13.5px] text-gray-500 font-medium leading-[1.6] mb-3 text-left">
                      Hands-on projects, real-world challenges, and guided mentorship embedded in every session.
                    </p>
                    <div className="bg-[#FFF7ED] text-[#F97316] text-[11px] md:text-[12px] font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-2">
                      <UserPlus className="w-3.5 h-3.5" /> Apply & Grow
                    </div>
                  </div>
                  <div className="feature-icon-wrapper w-16 h-16 md:w-20 md:h-20 rounded-[16px] md:rounded-[20px] bg-[#FFF7ED] flex items-center justify-center shrink-0">
                    <User className="w-7 h-7 md:w-8 md:h-8 text-[#F97316]" />
                  </div>
                </div>
              </TiltCard>

              {/* Card 05 - Left */}
              <TiltCard className="w-full md:w-[42%] self-center md:self-start z-50 mt-0 md:mt-4">
                <div className="bg-white border border-gray-200 rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-6 flex items-center gap-5 w-full transition-transform">
                  <div className="feature-icon-wrapper w-16 h-16 md:w-20 md:h-20 rounded-[16px] md:rounded-[20px] bg-[#ECFDF5] flex items-center justify-center shrink-0">
                    <Trophy className="w-7 h-7 md:w-8 md:h-8 text-[#10B981]" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[24px] md:text-[28px] font-bold text-[#10B981] leading-none mb-1">05</span>
                    <h3 className="text-[17px] md:text-[18px] font-bold text-[#1A1A2E] mb-1.5">Measurable Outcomes</h3>
                    <p className="text-[13px] md:text-[13.5px] text-gray-500 font-medium leading-[1.6] mb-3 text-left">
                      Portfolios, capstone projects, certifications, and the annual Skillzza Studio Fest.
                    </p>
                    <div className="bg-[#ECFDF5] text-[#10B981] text-[11px] md:text-[12px] font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-2">
                      <Award className="w-3.5 h-3.5" /> Showcase & Celebrate
                    </div>
                  </div>
                </div>
              </TiltCard>

            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-12 border-t border-b border-gray-100 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0">

            {/* Left Content */}
            <div className="flex flex-col items-start text-left">
              <h2 className="text-[24px] md:text-[28px] font-bold text-[#1A1A2E] mb-2 tracking-tight">
                Seamless Implementation. Tangible Results.
              </h2>
              <p className="text-[15px] md:text-[16px] text-gray-500 font-medium">
                Deliver Future Skills With A Model Designed For Scale, Simplicity, And Impact.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <MagneticButton className="w-full sm:w-auto">
                <button className="w-full px-8 py-3.5 bg-[#5B32EA] hover:bg-[#4A26D0] text-white text-[13px] font-bold tracking-wide rounded-[8px] transition-colors flex items-center justify-center gap-2 uppercase">
                  Request Demo <ArrowRight className="w-4 h-4" />
                </button>
              </MagneticButton>
              <MagneticButton className="w-full sm:w-auto">
                <button className="w-full px-8 py-3.5 bg-transparent border-[1.5px] border-[#5B32EA] text-[#5B32EA] hover:bg-[#5B32EA]/5 text-[13px] font-bold tracking-wide rounded-[8px] transition-colors flex items-center justify-center gap-2 uppercase">
                  Start Program <ArrowRight className="w-4 h-4" />
                </button>
              </MagneticButton>
            </div>

          </div>
        </section>


        {/* Impact Measurement Framework Section - COMMENTED OUT */}
        {/* 
        <section className="pt-12 md:pt-24 pb-8 bg-[#F9F4FA] relative z-20">
          <div className="max-w-[1280px] mx-auto px-6">

            <div className="mb-14 text-left">
              <ScrollRevealHeadline>
                <h2 className="text-[28px] md:text-[38px] font-bold text-[#1A1A2E] mb-3 tracking-tight leading-[1.2]">
                  Impact <span className="bg-gradient-to-r from-[#4200FF] via-[#E82194] to-[#FF6644] text-transparent bg-clip-text">Measurement</span> Framework
                </h2>
              </ScrollRevealHeadline>
              <p className="text-[#F59E0B] italic font-bold text-[16px] mb-3">
                Evidence Over Certificates.
              </p>
              <p className="text-[#6B7280] text-[15px] font-medium max-w-[850px] leading-[1.6]">
                Skillzza Tracks Measurable Growth Across Five Dimensions - Supported By Transparent Reporting Tools For Schools, Parents, And Students.
              </p>
            </div>

            <StaggerRow className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <TiltCard className="h-full">
                <div className="bg-white border border-gray-200 rounded-[20px] p-6 lg:p-8 flex items-start gap-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] h-full">
                  <div className="feature-icon-wrapper w-[60px] h-[60px] rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <Library className="w-7 h-7 text-[#3B82F6] stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-[17px] font-bold text-[#1A1A2E] mb-2.5 leading-[1.3]">
                      Knowledge & Concept<br className="hidden lg:block" />Mastery
                    </h3>
                    <p className="text-[13.5px] text-[#6B7280] font-medium leading-[1.6]">
                      Depth of understanding across studio curricula, measured through rubrics and formative assessments.
                    </p>
                  </div>
                </div>
              </TiltCard>

              <TiltCard className="h-full">
                <div className="bg-white border border-gray-200 rounded-[20px] p-6 lg:p-8 flex items-start gap-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] h-full">
                  <div className="feature-icon-wrapper w-[60px] h-[60px] rounded-full bg-[#ECFDF5] flex items-center justify-center shrink-0">
                    <Blocks className="w-7 h-7 text-[#10B981] stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-[17px] font-bold text-[#1A1A2E] mb-2.5 leading-[1.3]">
                      Skill Application &<br className="hidden lg:block" />Project Completion
                    </h3>
                    <p className="text-[13.5px] text-[#6B7280] font-medium leading-[1.6]">
                      Real-world application through hands-on projects, builds, and submitted capstones.
                    </p>
                  </div>
                </div>
              </TiltCard>

              <TiltCard className="h-full">
                <div className="bg-white border border-gray-200 rounded-[20px] p-6 lg:p-8 flex items-start gap-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] h-full">
                  <div className="feature-icon-wrapper w-[60px] h-[60px] rounded-full bg-[#FFFBEB] flex items-center justify-center shrink-0">
                    <Palette className="w-7 h-7 text-[#F59E0B] stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-[17px] font-bold text-[#1A1A2E] mb-2.5 leading-[1.3]">
                      Creativity & Innovation
                    </h3>
                    <p className="text-[13.5px] text-[#6B7280] font-medium leading-[1.6]">
                      Originality, problem-solving, and ideation quality tracked across iterations.
                    </p>
                  </div>
                </div>
              </TiltCard>

              <TiltCard className="h-full">
                <div className="bg-white border border-gray-200 rounded-[20px] p-6 lg:p-8 flex items-start gap-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] h-full">
                  <div className="feature-icon-wrapper w-[60px] h-[60px] rounded-full bg-[#F5F3FF] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-7 h-7 text-[#8B5CF6] stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-[17px] font-bold text-[#1A1A2E] mb-2.5 leading-[1.3]">
                      Confidence & Mindset<br className="hidden lg:block" />Development
                    </h3>
                    <p className="text-[13.5px] text-[#6B7280] font-medium leading-[1.6]">
                      Growth in presentation, collaboration, resilience, and self-directed learning.
                    </p>
                  </div>
                </div>
              </TiltCard>

              <TiltCard className="h-full">
                <div className="bg-white border border-gray-200 rounded-[20px] p-6 lg:p-8 flex items-start gap-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] h-full">
                  <div className="feature-icon-wrapper w-[60px] h-[60px] rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <PieChart className="w-7 h-7 text-[#3B82F6] stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-[17px] font-bold text-[#1A1A2E] mb-2.5 leading-[1.3]">
                      School-Level Impact<br className="hidden lg:block" />Metrics
                    </h3>
                    <p className="text-[13.5px] text-[#6B7280] font-medium leading-[1.6]">
                      Cohort-wide performance indicators, engagement analytics, and year-on-year benchmarking.
                    </p>
                  </div>
                </div>
              </TiltCard>

              <TiltCard className="h-full">
                <div className="bg-white border border-gray-200 rounded-[20px] p-6 lg:p-8 flex items-start gap-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] h-full">
                  <div className="feature-icon-wrapper w-[60px] h-[60px] rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0">
                    <Briefcase className="w-7 h-7 text-[#EF4444] stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="text-[17px] font-bold text-[#1A1A2E] mb-2.5 leading-[1.3]">
                      Portfolio & Showcase<br className="hidden lg:block" />Cadence
                    </h3>
                    <p className="text-[13.5px] text-[#6B7280] font-medium leading-[1.6]">
                      Digital portfolios, mid-year and annual showcases, and performance dashboards.
                    </p>
                  </div>
                </div>
              </TiltCard>

            </StaggerRow>
          </div>
        </section>
        */}

        {/* Reporting & Transparency Section */}



        {/* Trusted By Educational Institutes Section */}
        <section className="pt-12 pb-6 bg-white relative z-20 overflow-hidden border-t border-gray-100">
          <div className="max-w-[1280px] mx-auto px-6 mb-8 md:mb-10">
            <h2 className="text-[24px] md:text-[34px] font-bold text-center text-[#1A1A2E]">
              Trusted By Educational Institutes
            </h2>
          </div>

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden bg-white pb-6">
            <style>
              {`
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 30s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}
            </style>

            <div className="flex w-max animate-marquee">
              {/* We render multiple identical blocks so it loops seamlessly. 50% translation requires at least 2 identical halves. Let's make 2 huge identical halves. */}

              {[1, 2].map((half) => (
                <div key={half} className="flex items-center gap-6 md:gap-16 px-4 md:px-8 shrink-0">

                  {[
                    { name: "ALEXANDER PUBLIC SCHOOL", img: "1.png" },
                    { name: "THE GURUKULAM INTERNATIONAL PUBLIC SCHOOL", img: "2.png" },
                    { name: "SWAMI VIVEKANANDA RAJKIYA MODEL SCHOOL", img: "3.png" },
                    { name: "ST. SOLDIER PUBLIC SCHOOL", img: "4.png" },
                    { name: "ST. JOSEPH'S ENGLISH MEDIUM SCHOOL", img: "5.png" },
                    { name: "SARASWATI SHISHU MANDIR", img: "6.png" },
                    { name: "SANFORT WORLD SCHOOL", img: "7.png" }
                  ].map((partner, index) => (
                    <div key={index} className="flex items-center gap-3 md:gap-4 shrink-0 cursor-pointer transition-transform hover:scale-105">
                      <img
                        src={`https://cognifyai.skillzza.com/assets/img/part/${partner.img}`}
                        alt={partner.name}
                        className="h-8 md:h-16 w-auto object-contain shrink-0"
                      />
                      <span className="font-bold text-[12px] md:text-[15px] leading-tight text-[#1A1A2E] tracking-tight max-w-[130px] md:max-w-[180px] whitespace-normal uppercase">
                        {partner.name}
                      </span>
                    </div>
                  ))}

                  {/* Extra spacing to seamlessly repeat the next half */}
                  <div className="w-4 md:w-8"></div>

                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Partnership Banner Section */}
        <section className="pt-12 pb-20 bg-white relative z-20">
          <div className="w-full max-w-[1500px] mx-auto px-4 lg:px-8">

            <div
              className="w-full relative shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col lg:flex-row items-center justify-between overflow-hidden py-8 lg:py-0"
              style={{
                background: 'linear-gradient(90deg, #3B6CFF 23.47%, #FF00FF 59.9%, #FF9A00 96.32%)',
                minHeight: '232px',
                height: 'auto',
                borderRadius: '12px',
                margin: '0 auto'
              }}
            >
              {/* Left Image Shape Wrapper */}
              <div
                className="absolute hidden lg:block overflow-hidden"
                style={{
                  width: '707px',
                  height: '100%',
                  minHeight: '260px',
                  left: '-207px',
                  top: '0',
                  borderTopRightRadius: '400px',
                  borderBottomRightRadius: '400px',
                  opacity: 1
                }}
              >
                <img
                  src={partnershipImg}
                  alt="Partnerships"
                  className="absolute max-w-none"
                  style={{
                    width: '500px',
                    height: '100%',
                    minHeight: '260px',
                    left: '207px',
                    top: '0',
                    objectFit: 'cover',
                    objectPosition: 'left center'
                  }}
                />
              </div>

              {/* Content (Middle & Right) */}
              <div className="relative z-10 flex flex-col w-full h-full justify-center px-6 lg:pl-[520px] lg:pr-12 py-8 lg:py-10 gap-6">

                <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-0">
                  {/* Text Block */}
                  <div className="flex flex-col text-white max-w-[600px] text-center lg:text-left">
                    <h3
                      className="mb-3 text-white text-[20px] lg:text-[26px]"
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 600,
                        lineHeight: '1.2',
                      }}
                    >
                      Partnerships for<br />Transformational Learning
                    </h3>
                    <p
                      className="opacity-95 text-white"
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 500,
                        fontSize: '15px',
                        lineHeight: '1.6',
                      }}
                    >
                      We partner with forward-looking schools, industry leaders, and academic bodies to co-create learning that matters.
                    </p>
                  </div>

                  {/* Button */}
                  <div className="shrink-0 lg:translate-x-4">
                    <MagneticButton>
                      <button className="bg-white text-[#3B6CFF] font-bold text-[13px] px-8 py-3.5 rounded-[8px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors uppercase tracking-wide shadow-md hover:shadow-lg">
                        PARTNER WITH US <ArrowRight className="w-4 h-4" />
                      </button>
                    </MagneticButton>
                  </div>
                </div>

                {/* Bottom Italic Text Inside Banner */}
                <div className="w-full text-center lg:text-left pt-5 border-t border-white/25 mt-2">
                  <p className="text-white text-[15px] sm:text-[17px] lg:text-[19px] font-bold italic whitespace-nowrap">
                    Empowering the Next Generation of AI Thinkers.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>
        <Footer />

      </div>
    </LenisProvider>
  );
}
