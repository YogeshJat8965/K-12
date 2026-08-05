import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ArrowRight } from 'lucide-react';
import imgStage1 from '../assets/CCMM/5 stages/1.webp';
import imgStage2 from '../assets/CCMM/5 stages/2.webp';
import imgStage3 from '../assets/CCMM/5 stages/3.webp';
import imgStage4 from '../assets/CCMM/5 stages/4.webp';
import imgStage5 from '../assets/CCMM/5 stages/5.webp';

interface CCMMQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUIZ_DATA = [
  {
    question: "Beyond a computer class, how far has AI & emerging-tech learning spread across your grades?",
    options: [
      { text: "Not yet - it’s on our radar", score: 0 },
      { text: "A pilot in a few grades", score: 1 },
      { text: "Across most grades", score: 2 },
      { text: "It’s core to how we teach", score: 3 }
    ]
  },
  {
    question: "How many of your teachers - across all subjects - are trained in AI literacy?",
    options: [
      { text: "None yet", score: 0 },
      { text: "A few champions", score: 1 },
      { text: "Most of them", score: 2 },
      { text: "All, with ongoing development", score: 3 }
    ]
  },
  {
    question: "Do you have a dedicated AI / innovation lab or Centre of Excellence on campus?",
    options: [
      { text: "No", score: 0 },
      { text: "We’re planning one", score: 1 },
      { text: "A basic lab is running", score: 2 },
      { text: "A full CoE with student projects", score: 3 }
    ]
  },
  {
    question: "Is your curriculum mapped to NEP 2020 and global frameworks with real-world projects?",
    options: [
      { text: "Not yet", score: 0 },
      { text: "Partly", score: 1 },
      { text: "Mostly aligned", score: 2 },
      { text: "Fully - with industry capstones", score: 3 }
    ]
  },
  {
    question: "Do your students build and showcase their own AI / innovation projects?",
    options: [
      { text: "Not really", score: 0 },
      { text: "Occasionally", score: 1 },
      { text: "Regularly", score: 2 },
      { text: "We host events & mentor other schools", score: 3 }
    ]
  },
  {
    question: "How ready is your leadership team with a clear AI vision and roadmap?",
    options: [
      { text: "Just exploring", score: 0 },
      { text: "Interested, no plan yet", score: 1 },
      { text: "A plan is in progress", score: 2 },
      { text: "Vision & roadmap are live", score: 3 }
    ]
  }
];

const STAGES = [
  { max: 2, title: 'Aware', img: imgStage1, bgClass: 'bg-green-50/50', textClass: 'text-[#1B9C54]', message: "AI is discussed but not yet structured. Isolated initiatives, no framework, no shared strategy." },
  { max: 6, title: 'Emerging', img: imgStage2, bgClass: 'bg-blue-50/50', textClass: 'text-[#2563EB]', message: "Foundational programmes begin. Some teacher training, early student exposure, basic infrastructure." },
  { max: 10, title: 'Integrated', img: imgStage3, bgClass: 'bg-purple-50/50', textClass: 'text-[#8B5CF6]', message: "AI is woven across the curriculum. Confident teachers, active CoE, measurable student outcomes." },
  { max: 14, title: 'Advanced', img: imgStage4, bgClass: 'bg-orange-50/50', textClass: 'text-[#EA580C]', message: "The school leads in its region. Strong governance, student innovation, industry and community linkages." },
  { max: 18, title: 'Cognitive', img: imgStage5, bgClass: 'bg-yellow-50/50', textClass: 'text-[#D97706]', message: "A genuinely future-ready institution. AI is part of the school's identity, ethics, and daily culture." }
];

export default function CCMMQuizModal({ isOpen, onClose }: CCMMQuizModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setScores([]);
      setShowResult(false);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else {
      setIsClosing(false);
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  const handleSelect = (score: number) => {
    const newScores = [...scores, score];
    setScores(newScores);

    if (currentStep < QUIZ_DATA.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const resultStage = STAGES.find(s => totalScore <= s.max) || STAGES[STAGES.length - 1];

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center font-poppins transition-all duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className={`relative bg-white w-full max-w-2xl mx-4 rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-500 transform ${isClosing ? 'scale-95 translate-y-4' : 'scale-100 translate-y-0'}`}>

        {/* Header */}
        <div className="relative p-6 md:p-8 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
              {showResult ? "Your Assessment Result" : "CCMM Assessment"}
            </h2>
            {!showResult && (
              <p className="text-sm font-medium text-slate-500">
                Question {currentStep + 1} of {QUIZ_DATA.length}
              </p>
            )}
          </div>
          <button
            onClick={handleClose}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 shadow-sm border border-slate-100 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Progress Bar */}
          {!showResult && (
            <div className="absolute bottom-0 left-0 h-1 bg-slate-100 w-full">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 ease-out"
                style={{ width: `${((currentStep) / QUIZ_DATA.length) * 100}%` }}
              />
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 relative bg-white min-h-[400px] flex flex-col justify-center">

          {!showResult ? (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <h3 className="text-2xl font-bold text-slate-800 leading-snug mb-8">
                {QUIZ_DATA[currentStep].question}
              </h3>

              <div className="flex flex-col gap-3">
                {QUIZ_DATA[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(option.score)}
                    className="w-full text-left p-4 md:p-5 rounded-2xl border-2 border-slate-100 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 group flex items-center justify-between"
                  >
                    <span className="text-lg font-medium text-slate-700 group-hover:text-indigo-900 transition-colors">
                      {option.text}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-indigo-500 flex items-center justify-center transition-colors">
                      <ChevronRight size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in zoom-in-95 duration-700 flex flex-col items-center">

              <div className="mb-4 text-center">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  Total Score: <span className="text-indigo-600">{totalScore}</span>/18
                </span>
              </div>

              {/* Result Card Match */}
              <div className={`w-full max-w-[280px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center text-center ${resultStage.bgClass} mb-8`}>
                <div className="w-full h-[160px] bg-white rounded-b-3xl overflow-hidden flex items-center justify-center p-4">
                  <img src={resultStage.img} alt={resultStage.title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-black mb-3 ${resultStage.textClass}`}>
                    {resultStage.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {resultStage.message}
                  </p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="bg-[#111827] hover:bg-[#1f2937] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full max-w-sm justify-center"
              >
                Close & Explore Solutions
                <ArrowRight size={18} />
              </button>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
