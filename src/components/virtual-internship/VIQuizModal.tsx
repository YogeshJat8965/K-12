import React, { useState } from 'react';
import { X, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  section: 'A' | 'B' | 'C' | 'D';
  text: string;
  options: { label: string; text: string; isCorrect?: boolean }[];
}

const quizData: Question[] = [
  // SECTION A (Unscored)
  {
    id: 1, section: 'A', text: 'Which area excites you most for a virtual internship?',
    options: [
      { label: 'A', text: 'Coding & App Building' },
      { label: 'B', text: 'Artificial Intelligence & Data' },
      { label: 'C', text: 'Design & Digital Creativity' },
      { label: 'D', text: 'Business, Marketing & Communication' }
    ]
  },
  {
    id: 2, section: 'A', text: 'How many hours per week can you realistically commit?',
    options: [
      { label: 'A', text: '2-3 hours' },
      { label: 'B', text: '4-6 hours' },
      { label: 'C', text: '7-10 hours' },
      { label: 'D', text: 'More than 10 hours' }
    ]
  },
  {
    id: 3, section: 'A', text: 'What matters most to you from this internship?',
    options: [
      { label: 'A', text: 'Building a real project for my portfolio' },
      { label: 'B', text: 'Exploring a possible career field' },
      { label: 'C', text: 'Earning a recognised certificate' },
      { label: 'D', text: 'Learning a new tool or skill' }
    ]
  },
  {
    id: 4, section: 'A', text: 'How do you learn best?',
    options: [
      { label: 'A', text: 'Watching videos and tutorials' },
      { label: 'B', text: 'Reading guides and instructions' },
      { label: 'C', text: 'Doing hands-on tasks' },
      { label: 'D', text: 'Working together in a team' }
    ]
  },
  // SECTION B (Scored)
  {
    id: 5, section: 'B', text: 'What does "AI" stand for?',
    options: [
      { label: 'A', text: 'Automated Internet' },
      { label: 'B', text: 'Artificial Intelligence', isCorrect: true },
      { label: 'C', text: 'Advanced Information' },
      { label: 'D', text: 'Applied Innovation' }
    ]
  },
  {
    id: 6, section: 'B', text: 'Which of these is an everyday example of AI?',
    options: [
      { label: 'A', text: 'A calculator adding two numbers' },
      { label: 'B', text: 'A voice assistant answering your questions', isCorrect: true },
      { label: 'C', text: 'A light switch turning on a bulb' },
      { label: 'D', text: 'A printed textbook' }
    ]
  },
  {
    id: 7, section: 'B', text: 'Which tool would you use to create a slide presentation?',
    options: [
      { label: 'A', text: 'A web browser' },
      { label: 'B', text: 'A spreadsheet' },
      { label: 'C', text: 'PowerPoint, Google Slides, or Canva', isCorrect: true },
      { label: 'D', text: 'A calculator' }
    ]
  },
  {
    id: 8, section: 'B', text: 'What does it mean to "cite a source"?',
    options: [
      { label: 'A', text: 'Delete information you don\'t need' },
      { label: 'B', text: 'Give credit to where the information came from', isCorrect: true },
      { label: 'C', text: 'Copy text exactly without changing it' },
      { label: 'D', text: 'Save a file to your computer' }
    ]
  },
  {
    id: 9, section: 'B', text: 'Which of these is the safest online habit?',
    options: [
      { label: 'A', text: 'Using the same simple password everywhere' },
      { label: 'B', text: 'Sharing your home address publicly' },
      { label: 'C', text: 'Using strong, unique passwords and not sharing personal details', isCorrect: true },
      { label: 'D', text: 'Clicking every link you receive' }
    ]
  },
  {
    id: 10, section: 'B', text: 'A "deadline" for a task means:',
    options: [
      { label: 'A', text: 'The date and time by which the task must be finished', isCorrect: true },
      { label: 'B', text: 'The person who checks your work' },
      { label: 'C', text: 'The reward for finishing early' },
      { label: 'D', text: 'The tool used to do the task' }
    ]
  },
  // SECTION C
  {
    id: 11, section: 'C', text: 'What comes next in the series? 2, 4, 8, 16, __',
    options: [
      { label: 'A', text: '20' },
      { label: 'B', text: '24' },
      { label: 'C', text: '32', isCorrect: true },
      { label: 'D', text: '18' }
    ]
  },
  {
    id: 12, section: 'C', text: 'Find the odd one out:',
    options: [
      { label: 'A', text: 'Apple' },
      { label: 'B', text: 'Banana' },
      { label: 'C', text: 'Carrot', isCorrect: true },
      { label: 'D', text: 'Mango' }
    ]
  },
  {
    id: 13, section: 'C', text: 'What is 20% of 50?',
    options: [
      { label: 'A', text: '5' },
      { label: 'B', text: '10', isCorrect: true },
      { label: 'C', text: '15' },
      { label: 'D', text: '20' }
    ]
  },
  {
    id: 14, section: 'C', text: 'A project has 6 tasks. You complete 2 tasks every day. How many days to finish?',
    options: [
      { label: 'A', text: '2 days' },
      { label: 'B', text: '3 days', isCorrect: true },
      { label: 'C', text: '4 days' },
      { label: 'D', text: '6 days' }
    ]
  },
  {
    id: 15, section: 'C', text: 'Complete the pattern: Monday, Wednesday, Friday, __',
    options: [
      { label: 'A', text: 'Saturday' },
      { label: 'B', text: 'Sunday', isCorrect: true },
      { label: 'C', text: 'Tuesday' },
      { label: 'D', text: 'Thursday' }
    ]
  },
  {
    id: 16, section: 'C', text: 'Which number does NOT belong? 3, 6, 9, 11, 12',
    options: [
      { label: 'A', text: '6' },
      { label: 'B', text: '9' },
      { label: 'C', text: '11', isCorrect: true },
      { label: 'D', text: '12' }
    ]
  },
  // SECTION D
  {
    id: 17, section: 'D', text: 'You don\'t understand a task your mentor assigned. What should you do first?',
    options: [
      { label: 'A', text: 'Guess and hope it\'s right' },
      { label: 'B', text: 'Skip the task entirely' },
      { label: 'C', text: 'Ask a clear question to get clarity', isCorrect: true },
      { label: 'D', text: 'Wait for someone else to do it' }
    ]
  },
  {
    id: 18, section: 'D', text: 'You realise you won\'t meet a deadline. The best response is to:',
    options: [
      { label: 'A', text: 'Say nothing and hope no one notices' },
      { label: 'B', text: 'Inform your mentor early and share a plan to finish', isCorrect: true },
      { label: 'C', text: 'Submit incomplete work at the last minute without a note' },
      { label: 'D', text: 'Blame the tools' }
    ]
  },
  {
    id: 19, section: 'D', text: 'In an online team project, a teammate isn\'t replying. What\'s the best action?',
    options: [
      { label: 'A', text: 'Do their part silently and stay upset' },
      { label: 'B', text: 'Politely follow up, and loop in your mentor if there\'s still no response', isCorrect: true },
      { label: 'C', text: 'Complain about them to the whole group' },
      { label: 'D', text: 'Give up on the project' }
    ]
  },
  {
    id: 20, section: 'D', text: 'Which habit best shows professionalism in a virtual internship?',
    options: [
      { label: 'A', text: 'Joining meetings whenever you feel like it' },
      { label: 'B', text: 'Being on time, communicating clearly, and keeping your commitments', isCorrect: true },
      { label: 'C', text: 'Only working when someone is watching' },
      { label: 'D', text: 'Waiting to be told every small step' }
    ]
  }
];

interface VIQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VIQuizModal({ isOpen, onClose }: VIQuizModalProps) {
  const [step, setStep] = useState<'welcome' | 'quiz' | 'result'>('welcome');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  if (!isOpen) return null;

  const handleStart = () => {
    setStep('quiz');
    setCurrentQuestionIdx(0);
    setAnswers({});
  };

  const handleAnswerSelect = (optionLabel: string) => {
    const questionId = quizData[currentQuestionIdx].id;
    setAnswers(prev => ({ ...prev, [questionId]: optionLabel }));
  };

  const handleNext = () => {
    if (currentQuestionIdx < quizData.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      setStep('result');
    }
  };

  const getSectionName = (section: string) => {
    switch (section) {
      case 'A': return 'Section A - Your Interests & Goals';
      case 'B': return 'Section B - Digital & AI Awareness';
      case 'C': return 'Section C - Logical Reasoning & Aptitude';
      case 'D': return 'Section D - Work Readiness & Situational Judgement';
      default: return '';
    }
  };

  // Calculate results
  const q1Answer = answers[1]; // Determines track
  let recommendedTrack = 'General Readiness';
  if (q1Answer === 'A') recommendedTrack = 'Coding';
  else if (q1Answer === 'B') recommendedTrack = 'AI & Data';
  else if (q1Answer === 'C') recommendedTrack = 'Design & Digital Creativity';
  else if (q1Answer === 'D') recommendedTrack = 'Business & Communication';

  // Calculate score (only sections B, C, D)
  let score = 0;
  quizData.forEach(q => {
    if (q.section !== 'A') {
      const correctOption = q.options.find(o => o.isCorrect)?.label;
      if (answers[q.id] === correctOption) {
        score++;
      }
    }
  });

  let readinessLevel = '';
  let readinessDesc = '';
  if (score >= 10) {
    readinessLevel = 'Ready to start';
    readinessDesc = 'Strong digital awareness, reasoning, and work maturity. Good fit for advanced or project-heavy tracks.';
  } else if (score >= 7) {
    readinessLevel = 'Ready with light support';
    readinessDesc = 'Solid basics. Pair with a mentor check-in in the first week.';
  } else if (score >= 4) {
    readinessLevel = 'Foundation track first';
    readinessDesc = 'Recommend a short orientation module before the internship.';
  } else {
    readinessLevel = 'Guided onboarding';
    readinessDesc = 'Start with the readiness/orientation programme to build confidence.';
  }

  const currentQ = quizData[currentQuestionIdx];
  const progress = ((currentQuestionIdx) / quizData.length) * 100;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 bg-[#0B0F19]/80 backdrop-blur-md font-poppins">

      {/* Modal Container */}
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">

        {/* Header (Close Button) */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'welcome' && (
          <div className="p-8 sm:p-12 overflow-y-auto">
            <div className="mb-6">

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] mb-2 leading-tight">
                Virtual Internship - Readiness Quiz
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 mb-8">
              <p><strong className="text-gray-900">For </strong>Classes 7-12</p>
              {/* <p><strong className="text-gray-900">Time</strong> 20-25 minutes</p> */}
              <p><strong className="text-gray-900">Questions</strong> 20 (multiple choice)</p>
              <p><strong className="text-gray-900"></strong> Helps us understand your interests, skills, and readiness so we can place you in the right internship track.</p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8">
              <h4 className="font-bold text-blue-900 mb-2">Instructions for students</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Choose the one best answer for each question. For Section A there are no right or wrong answers - just be honest. Sections B, C, and D have correct answers.
              </p>
            </div>

            <button
              onClick={handleStart}
              className="w-full sm:w-auto bg-[#5B32EA] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#4A25C7] transition-colors flex items-center justify-center gap-2"
            >
              Start Quiz
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {step === 'quiz' && (
          <div className="flex flex-col h-full">
            {/* Progress Bar */}
            <div className="w-full bg-gray-100 h-2">
              <div
                className="bg-[#5B32EA] h-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="p-8 sm:p-12 flex-1 overflow-y-auto">
              <div className="mb-8">
                <h4 className="text-[#64748B] font-bold text-[13px] uppercase tracking-wider mb-2">
                  Question {currentQ.id} of {quizData.length}
                </h4>
                <p className="text-[#5B32EA] font-semibold text-sm mb-4">
                  {getSectionName(currentQ.section)}
                </p>
                <h3 className="text-2xl font-bold text-[#1A1A2E] leading-snug">
                  {currentQ.text}
                </h3>
              </div>

              <div className="space-y-3">
                {currentQ.options.map((opt) => {
                  const isSelected = answers[currentQ.id] === opt.label;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswerSelect(opt.label)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-4
                        ${isSelected
                          ? 'border-[#5B32EA] bg-[#F5F3FF]'
                          : 'border-gray-200 hover:border-[#5B32EA] hover:bg-gray-50'
                        }`}
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5
                        ${isSelected ? 'border-[#5B32EA] bg-[#5B32EA]' : 'border-gray-300'}
                      `}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 mr-2">{opt.label})</span>
                        <span className="text-gray-700">{opt.text}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between items-center mt-auto">
              <p className="text-gray-500 font-medium text-sm">
                {answers[currentQ.id] ? 'Answer selected' : 'Please select an answer'}
              </p>
              <button
                onClick={handleNext}
                disabled={!answers[currentQ.id]}
                className={`font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2
                  ${answers[currentQ.id]
                    ? 'bg-[#1A1A2E] text-white hover:bg-black'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
              >
                {currentQuestionIdx === quizData.length - 1 ? 'See Results' : 'Next Question'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="p-8 sm:p-12 overflow-y-auto text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-[#E8E6FF] rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#5B32EA]" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#1A1A2E] mb-2">Quiz Completed!</h2>
            <p className="text-gray-500 mb-8">Thank you for taking the readiness quiz.</p>

            <div className="w-full max-w-lg bg-gray-50 rounded-2xl p-6 mb-6 text-left border border-gray-100">
              <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-1">Your Score</h4>
              <div className="text-4xl font-black text-[#5B32EA] mb-6">
                {score} <span className="text-xl text-gray-400 font-semibold">/ 12</span>
              </div>

              <div className="mb-6">
                <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-1">Readiness Level</h4>
                <p className="font-bold text-gray-900 text-lg">{readinessLevel}</p>
                <p className="text-gray-600 text-sm mt-1">{readinessDesc}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-1">Recommended Track</h4>
                <div className="inline-block bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold px-4 py-2 rounded-lg mt-1">
                  {recommendedTrack}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-[#1A1A2E] text-white font-bold py-4 px-10 rounded-xl hover:bg-black transition-colors"
            >
              Close & Return
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
