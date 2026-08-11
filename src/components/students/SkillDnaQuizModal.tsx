import React, { useState } from 'react';
import { X, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

type Strand = 'Analyst' | 'Creator' | 'Builder' | 'Communicator' | 'Collaborator' | 'Explorer';

interface Option {
  label: string;
  text: string;
  strand: Strand;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

const quizData: Question[] = [
  {
    id: 1, text: 'You have a free afternoon for a project. What do you pick?',
    options: [
      { label: 'A', text: 'Solve a tricky puzzle or logic challenge', strand: 'Analyst' },
      { label: 'B', text: 'Design a poster, video, or artwork', strand: 'Creator' },
      { label: 'C', text: 'Build or code something that actually works', strand: 'Builder' },
      { label: 'D', text: 'Write a story, script, or blog', strand: 'Communicator' },
    ]
  },
  {
    id: 2, text: 'In a group project, you naturally become the one who...',
    options: [
      { label: 'A', text: 'Organises the plan and keeps everyone on track', strand: 'Collaborator' },
      { label: 'B', text: 'Comes up with the big creative idea', strand: 'Creator' },
      { label: 'C', text: 'Does the hands-on building', strand: 'Builder' },
      { label: 'D', text: 'Presents the final work to the class', strand: 'Communicator' },
    ]
  },
  {
    id: 3, text: 'Which activity makes time fly for you?',
    options: [
      { label: 'A', text: 'Maths and reasoning problems', strand: 'Analyst' },
      { label: 'B', text: 'Art, design, or music', strand: 'Creator' },
      { label: 'C', text: 'Computers and making things', strand: 'Builder' },
      { label: 'D', text: 'Debates, writing, or public speaking', strand: 'Communicator' },
    ]
  },
  {
    id: 4, text: 'You spot a problem in your school. Your first instinct is to...',
    options: [
      { label: 'A', text: 'Break it down and figure out why it happens', strand: 'Analyst' },
      { label: 'B', text: 'Imagine a fresh, unexpected solution', strand: 'Explorer' },
      { label: 'C', text: 'Rally your friends to fix it together', strand: 'Collaborator' },
      { label: 'D', text: 'Tell the story so others care about it', strand: 'Communicator' },
    ]
  },
  {
    id: 5, text: 'What kind of praise means the most to you?',
    options: [
      { label: 'A', text: '"That was so well thought-out."', strand: 'Analyst' },
      { label: 'B', text: '"That was so creative!"', strand: 'Creator' },
      { label: 'C', text: '"You actually built that?!"', strand: 'Builder' },
      { label: 'D', text: '"You explained that so clearly."', strand: 'Communicator' },
    ]
  },
  {
    id: 6, text: 'You get your hands on a new app or gadget. You...',
    options: [
      { label: 'A', text: 'Figure out exactly how it works inside', strand: 'Builder' },
      { label: 'B', text: 'Wonder what else it could be used for', strand: 'Explorer' },
      { label: 'C', text: 'Think about who would love it and why', strand: 'Communicator' },
      { label: 'D', text: 'Compare it logically with the alternatives', strand: 'Analyst' },
    ]
  },
  {
    id: 7, text: 'Your dream internship task would be...',
    options: [
      { label: 'A', text: 'Digging into data to find a hidden pattern', strand: 'Analyst' },
      { label: 'B', text: 'Designing the visuals for a campaign', strand: 'Creator' },
      { label: 'C', text: 'Building a working app or prototype', strand: 'Builder' },
      { label: 'D', text: 'Leading a small team toward a goal', strand: 'Collaborator' },
    ]
  },
  {
    id: 8, text: 'When you learn something new, you prefer to...',
    options: [
      { label: 'A', text: 'Understand the logic, step by step', strand: 'Analyst' },
      { label: 'B', text: 'Experiment and try it yourself', strand: 'Explorer' },
      { label: 'C', text: 'Watch how it\'s made, then improve on it', strand: 'Builder' },
      { label: 'D', text: 'Talk it through with other people', strand: 'Collaborator' },
    ]
  },
  {
    id: 9, text: 'A friend is stuck on a task. You...',
    options: [
      { label: 'A', text: 'Help them find the logical next step', strand: 'Analyst' },
      { label: 'B', text: 'Suggest a clever, creative shortcut', strand: 'Creator' },
      { label: 'C', text: 'Sit and build it together with them', strand: 'Collaborator' }, // Based on key: C=Collaborator (wait, Q9 C is Collaborator in key)
      { label: 'D', text: 'Encourage and motivate them to keep going', strand: 'Communicator' },
    ]
  },
  {
    id: 10, text: 'Which of these sounds the most fun?',
    options: [
      { label: 'A', text: 'Cracking a code or a mystery', strand: 'Analyst' },
      { label: 'B', text: 'Making a short film or animation', strand: 'Creator' },
      { label: 'C', text: 'Starting a small venture or club', strand: 'Explorer' }, // Key: C=Explorer
      { label: 'D', text: 'Hosting an event or a podcast', strand: 'Communicator' },
    ]
  },
  {
    id: 11, text: 'When you use AI tools, you\'re most excited to...',
    options: [
      { label: 'A', text: 'Understand how the AI reaches its answer', strand: 'Analyst' },
      { label: 'B', text: 'Create images, music, or stories with it', strand: 'Creator' },
      { label: 'C', text: 'Build a bot or automate a task', strand: 'Builder' },
      { label: 'D', text: 'Explore all the new things it can do', strand: 'Explorer' },
    ]
  },
  {
    id: 12, text: 'What do you notice first about a website or app?',
    options: [
      { label: 'A', text: 'Whether it\'s logical and easy to use', strand: 'Analyst' },
      { label: 'B', text: 'How it looks and feels', strand: 'Creator' },
      { label: 'C', text: 'How it was built and what powers it', strand: 'Builder' },
      { label: 'D', text: 'The message it\'s trying to send', strand: 'Communicator' },
    ]
  },
  {
    id: 13, text: 'Your teacher asks for a volunteer to lead a project. You...',
    options: [
      { label: 'A', text: 'Step up to organise and delegate', strand: 'Collaborator' },
      { label: 'B', text: 'Offer to design and shape the idea', strand: 'Creator' },
      { label: 'C', text: 'Prefer to own the building part', strand: 'Builder' },
      { label: 'D', text: 'Volunteer to pitch it to the school', strand: 'Communicator' },
    ]
  },
  {
    id: 14, text: 'You\'d rather spend a weekend...',
    options: [
      { label: 'A', text: 'Solving challenging problems or games', strand: 'Analyst' },
      { label: 'B', text: 'Creating something artistic', strand: 'Creator' },
      { label: 'C', text: 'Tinkering, coding, or making', strand: 'Builder' },
      { label: 'D', text: 'Meeting people and swapping ideas', strand: 'Collaborator' },
    ]
  },
  {
    id: 15, text: 'Your project fails on the first try. You...',
    options: [
      { label: 'A', text: 'Analyse what went wrong, step by step', strand: 'Analyst' },
      { label: 'B', text: 'Try a completely different approach', strand: 'Explorer' },
      { label: 'C', text: 'Roll up your sleeves and rebuild it better', strand: 'Builder' },
      { label: 'D', text: 'Ask your team for fresh input', strand: 'Collaborator' },
    ]
  },
  {
    id: 16, text: 'Which future would you love to be known for?',
    options: [
      { label: 'A', text: 'A brilliant problem-solver', strand: 'Analyst' },
      { label: 'B', text: 'A visionary creator', strand: 'Creator' },
      { label: 'C', text: 'A maker who builds real things', strand: 'Builder' },
      { label: 'D', text: 'A leader people follow', strand: 'Collaborator' },
    ]
  },
  {
    id: 17, text: 'You\'re given a small budget and one week to make an impact. You...',
    options: [
      { label: 'A', text: 'Research and plan the smartest way to use it', strand: 'Analyst' },
      { label: 'B', text: 'Design an eye-catching campaign', strand: 'Creator' },
      { label: 'C', text: 'Launch a quick experiment or mini-venture', strand: 'Explorer' },
      { label: 'D', text: 'Bring the right people together to act', strand: 'Collaborator' },
    ]
  },
  {
    id: 18, text: 'What frustrates you the most?',
    options: [
      { label: 'A', text: 'Decisions that make no logical sense', strand: 'Analyst' },
      { label: 'B', text: 'Boring, unoriginal work', strand: 'Creator' },
      { label: 'C', text: 'Things that just don\'t work properly', strand: 'Builder' },
      { label: 'D', text: 'Poor or unclear communication', strand: 'Communicator' },
    ]
  },
  {
    id: 19, text: 'Five years from now, you\'d love to be known for...',
    options: [
      { label: 'A', text: 'Sharp thinking and smart ideas', strand: 'Analyst' },
      { label: 'B', text: 'Original designs and creativity', strand: 'Creator' },
      { label: 'C', text: 'Products and things you built', strand: 'Builder' },
      { label: 'D', text: 'A team or movement you led', strand: 'Collaborator' },
    ]
  },
  {
    id: 20, text: 'Pick the phrase that fits you best:',
    options: [
      { label: 'A', text: '"I ask why."', strand: 'Analyst' },
      { label: 'B', text: '"I imagine what if."', strand: 'Explorer' },
      { label: 'C', text: '"I make it real."', strand: 'Builder' },
      { label: 'D', text: '"I bring people along."', strand: 'Collaborator' },
    ]
  }
];

const studioMapping: Record<Strand, { studio: string; track: string }> = {
  Analyst: { studio: 'AI & Data Studio', track: 'AI & Data' },
  Creator: { studio: 'Design & Digital Creativity Studio (Adobe-powered)', track: 'Design & Digital Creativity' },
  Builder: { studio: 'Coding & App Building Studio', track: 'Coding & App Building' },
  Communicator: { studio: 'Content & Communication Studio', track: 'Business, Marketing & Communication' },
  Collaborator: { studio: 'Leadership & Entrepreneurship Studio', track: 'Business & Leadership' },
  Explorer: { studio: 'Innovation & AI Playground Studio', track: 'Innovation / Emerging Tech' },
};

const getArchetype = (top: Strand, second: Strand): string => {
  const combo = [top, second].sort().join('+');
  const archetypes: Record<string, string> = {
    'Analyst+Builder': 'The Engineer',
    'Communicator+Creator': 'The Storyteller', // Alphabetical sort: Communicator+Creator
    'Builder+Explorer': 'The Innovator',
    'Collaborator+Communicator': 'The Leader',
    'Analyst+Explorer': 'The Strategist',
    'Builder+Creator': 'The Maker',
  };
  return archetypes[combo] || `The ${top}-${second}`; // fallback
};

interface SkillDnaQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SkillDnaQuizModal({ isOpen, onClose }: SkillDnaQuizModalProps) {
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

  // Calculate results
  let topStrand: Strand = 'Analyst';
  let secondStrand: Strand = 'Builder';

  if (step === 'result') {
    const scores: Record<Strand, number> = {
      Analyst: 0, Creator: 0, Builder: 0, Communicator: 0, Collaborator: 0, Explorer: 0
    };

    quizData.forEach(q => {
      const selectedOptionLabel = answers[q.id];
      const option = q.options.find(o => o.label === selectedOptionLabel);
      if (option) {
        scores[option.strand]++;
      }
    });

    const sortedStrands = Object.entries(scores)
      .sort((a, b) => {
        if (b[1] === a[1]) {
          // Tie-breaker using Q20
          const q20Answer = answers[20];
          const q20Option = quizData[19].options.find(o => o.label === q20Answer);
          if (q20Option) {
            if (a[0] === q20Option.strand) return -1;
            if (b[0] === q20Option.strand) return 1;
          }
        }
        return b[1] - a[1];
      });

    topStrand = sortedStrands[0][0] as Strand;
    secondStrand = sortedStrands[1][0] as Strand;
  }

  const archetype = getArchetype(topStrand, secondStrand);
  const recommendation = studioMapping[topStrand];

  const currentQ = quizData[currentQuestionIdx];
  const progress = ((currentQuestionIdx) / quizData.length) * 100;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 bg-[#0B0F19]/80 backdrop-blur-md font-poppins">
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
              <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#1A1A2E] mb-2 leading-tight">
                Skill DNA Test
              </h2>
              <p className="text-gray-600 text-lg">
                Discover your Skill. Find your Studio. Start your internship.
              </p>
            </div>

            <div className="space-y-4 text-gray-600 mb-8">
              <p><strong className="text-gray-900">For </strong>Classes 7-12</p>
              {/* <p><strong className="text-gray-900">Time </strong>15-20 minutes</p> */}
              <p><strong className="text-gray-900">Questions </strong>20</p>
              <p><strong className="text-gray-900"> </strong>Type - Right or Wrong answers - this maps your natural strengths.</p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8">
              <h4 className="font-bold text-blue-900 mb-2">Instructions for students</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                For each question, pick the option that feels most like you. Don't overthink it - your first instinct is usually the truest. At the end, you'll discover your Skill DNA and the internship track that fits you best.
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
                <h4 className="text-[#64748B] font-bold text-[11px] uppercase tracking-wider mb-2">
                  Question {currentQ.id} of {quizData.length}
                </h4>
                <h3 className="text-[22px] font-bold text-[#1A1A2E] leading-snug mt-4">
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
            <h2 className="text-[28px] font-extrabold text-[#1A1A2E] mb-2">Quiz Completed!</h2>

            <div className="w-full max-w-lg bg-gray-50 rounded-2xl p-6 my-8 text-left border border-gray-200 shadow-sm">
              <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                Your Skill DNA is: <strong className="text-[#5B32EA]">{topStrand}</strong> + <strong>{secondStrand}</strong>
              </p>

              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                This means you're naturally <strong className="text-gray-900">[{archetype}]</strong>.
              </p>

              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-gray-700 text-sm mb-2">Your recommended path on Skillzza is the:</p>
                <div className="font-bold text-[#5B32EA] mb-1">{recommendation.studio}</div>
                <div className="text-gray-600 text-sm">and the <strong className="text-gray-800">{recommendation.track}</strong> Virtual Internship.</div>
              </div>

              <p className="text-gray-500 text-xs mt-6 italic">
                Take the test again as you grow - your DNA can evolve!
              </p>
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
