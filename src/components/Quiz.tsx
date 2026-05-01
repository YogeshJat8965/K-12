import { useState, useCallback } from 'react';
import { quiz, tracks } from '../virtualInternship';
import {
  ChevronRight, RotateCcw, Sparkles, CheckCircle2, Zap,
  Cpu, Lightbulb, Palette, Leaf, Rocket, Trophy, Compass,
  Heart, Shield, Megaphone, BarChart3
} from 'lucide-react';

type Answers = (number | null)[];

function getResult(answers: Answers): typeof tracks[0] | null {
  const tally: Record<string, number> = {};
  answers.forEach((aIdx, qIdx) => {
    if (aIdx === null) return;
    const selectedTracks = quiz.questions[qIdx].options[aIdx].tracks;
    selectedTracks.forEach((t) => { tally[t] = (tally[t] || 0) + 1; });
  });
  const top = Object.entries(tally).sort((a, b) => b[1] - a[1])[0];
  if (!top) return null;
  return tracks.find((t) => t.title === top[0]) || null;
}

const optionColors = [
  { border: 'border-sky-200 bg-sky-50 hover:border-sky-400 hover:bg-sky-100', selected: 'border-sky-500 bg-sky-100 ring-2 ring-sky-300', correct: 'border-green-500 bg-green-100 ring-2 ring-green-300' },
  { border: 'border-orange-200 bg-orange-50 hover:border-orange-400 hover:bg-orange-100', selected: 'border-orange-500 bg-orange-100 ring-2 ring-orange-300', correct: 'border-green-500 bg-green-100 ring-2 ring-green-300' },
  { border: 'border-green-200 bg-green-50 hover:border-green-400 hover:bg-green-100', selected: 'border-green-500 bg-green-100 ring-2 ring-green-300', correct: 'border-green-500 bg-green-100 ring-2 ring-green-300' },
  { border: 'border-yellow-200 bg-yellow-50 hover:border-yellow-400 hover:bg-yellow-100', selected: 'border-yellow-500 bg-yellow-100 ring-2 ring-yellow-300', correct: 'border-green-500 bg-green-100 ring-2 ring-green-300' },
];

const q1Icons = [<Cpu className="w-6 h-6 text-sky-600" />, <Lightbulb className="w-6 h-6 text-orange-600" />, <Palette className="w-6 h-6 text-green-600" />, <Leaf className="w-6 h-6 text-yellow-600" />];
const q2Icons = [<Rocket className="w-6 h-6 text-sky-600" />, <Megaphone className="w-6 h-6 text-orange-600" />, <Heart className="w-6 h-6 text-green-600" />, <Shield className="w-6 h-6 text-yellow-600" />];
const q3Icons = [<Cpu className="w-6 h-6 text-sky-600" />, <BarChart3 className="w-6 h-6 text-orange-600" />, <Trophy className="w-6 h-6 text-green-600" />, <Compass className="w-6 h-6 text-yellow-600" />];
const questionIcons = [q1Icons, q2Icons, q3Icons];

function SectionBurst() {
  const particles = Array.from({ length: 120 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 120 + (Math.random() * 0.1 - 0.05);
    const distance = 200 + Math.random() * 800;
    const duration = 1.5 + Math.random() * 2;
    const colors = ['#fbbf24', '#3b82f6', '#22c55e', '#f97316', '#ec4899', '#8b5cf6', '#ffffff'];
    const color = colors[i % colors.length];
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    const size = Math.random() * 12 + 6;
    return { id: i, tx, ty, duration, color, size, isCircle: i % 2 === 0 };
  });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[100]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute burst-particle shadow-sm"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.isCircle ? '50%' : '3px',
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            '--burst-duration': `${p.duration}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>([null, null, null]);
  const [done, setDone] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [lastSelected, setLastSelected] = useState<number | null>(null);

  const totalQ = quiz.questions.length;
  const progress = ((step) / totalQ) * 100;

  const handleAnswer = useCallback((optionIdx: number) => {
    if (answers[step] !== null) return; // already answered
    const newAnswers = [...answers];
    newAnswers[step] = optionIdx;
    setAnswers(newAnswers);
    setLastSelected(optionIdx);

    // Visual feedback pulse
    setTimeout(() => {
      if (step < totalQ - 1) {
        setStep(step + 1);
        setLastSelected(null);
      } else {
        setDone(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }, 600);
  }, [step, answers, totalQ]);

  function reset() {
    setStep(0);
    setAnswers([null, null, null]);
    setDone(false);
    setShowConfetti(false);
    setShaking(false);
    setLastSelected(null);
  }

  const result = done ? getResult(answers) : null;

  return (
    <section id="quiz" className="py-24 bg-gradient-to-b from-sky-50 to-white overflow-hidden relative">
      {showConfetti && <SectionBurst />}
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 bg-orange-100 text-orange-700 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Quiz
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl text-slate-800 mb-4">
            Find Your Perfect Track!
          </h2>
          <p className="reveal text-slate-500 text-lg">{quiz.subtitle}</p>
        </div>

        <div className={`reveal bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 ${shaking ? 'shake' : ''}`}>
          {!done ? (
            <>
              {/* Progress bar */}
              <div className="h-2 bg-slate-100">
                <div
                  className="h-2 bg-gradient-to-r from-sky-400 to-green-400 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="p-8 md:p-12">
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-8">
                  {quiz.questions.map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black transition-all duration-300 ${
                        i < step ? 'bg-green-400 text-white shadow-md' :
                        i === step ? 'bg-sky-500 text-white ring-4 ring-sky-100 shadow-lg' :
                        'bg-slate-100 text-slate-400'
                      }`}>
                        {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                      </div>
                      {i < quiz.questions.length - 1 && (
                        <div className={`w-8 h-1 rounded-full transition-all duration-300 ${i < step ? 'bg-green-400' : 'bg-slate-100'}`} />
                      )}
                    </div>
                  ))}
                  <div className="ml-auto flex items-center gap-1 text-xs font-bold text-yellow-600 bg-yellow-50 px-3 py-1.5 rounded-full">
                    <Zap className="w-3.5 h-3.5" />
                    +100 XP
                  </div>
                </div>

                {/* Question */}
                <h3 className="font-display text-2xl md:text-3xl text-slate-800 mb-8">
                  {quiz.questions[step].q}
                </h3>

                {/* Options */}
                <div className="grid grid-cols-2 gap-4">
                  {quiz.questions[step].options.map((opt, oIdx) => {
                    const isSelected = answers[step] === oIdx;
                    const colors = optionColors[oIdx % 4];
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleAnswer(oIdx)}
                        disabled={answers[step] !== null}
                        className={`quiz-option border-2 rounded-2xl p-5 text-left transition-all duration-300 ${
                          isSelected
                            ? colors.selected
                            : colors.border
                        } ${answers[step] !== null && !isSelected ? 'opacity-50 scale-95' : ''}`}
                      >
                        <div className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm transition-transform duration-300 ${
                          isSelected ? 'scale-110' : ''
                        }`}>
                          {questionIcons[step]?.[oIdx] || <Sparkles className="w-5 h-5 text-slate-400" />}
                        </div>
                        <div className="font-bold text-slate-700 text-sm leading-snug">
                          {opt.label.replace(/^[^\s]+\s/, '')}
                        </div>
                        {isSelected && (
                          <div className="mt-2 flex items-center gap-1 text-xs font-bold text-sky-600 pop-in">
                            <CheckCircle2 className="w-3 h-3" />
                            Selected!
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Typing indicator after selection */}
                {answers[step] !== null && step < totalQ - 1 && (
                  <div className="mt-6 flex items-center gap-2 text-slate-400 text-sm font-bold">
                    <span>Matching your answer</span>
                    <span className="typing-dot w-1.5 h-1.5 bg-slate-400 rounded-full inline-block" />
                    <span className="typing-dot-2 w-1.5 h-1.5 bg-slate-400 rounded-full inline-block" />
                    <span className="typing-dot-3 w-1.5 h-1.5 bg-slate-400 rounded-full inline-block" />
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Result */
            <div className="p-8 md:p-12 text-center relative overflow-hidden">

              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 bounce-in shadow-xl">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Your Perfect Match!
              </div>
              <h3 className="font-display text-3xl text-slate-800 mb-2">
                {result?.title || 'Multiple Tracks!'}
              </h3>
              <p className="text-slate-500 font-bold text-sm uppercase tracking-wider mb-4">
                {result?.tagline}
              </p>
              <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto mb-8">
                {result?.desc}
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="#tracks"
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black px-8 py-3 rounded-2xl hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-lg"
                >
                  Explore This Track <ChevronRight className="w-4 h-4" />
                </a>
                <button
                  onClick={reset}
                  className="border-2 border-slate-200 text-slate-600 font-bold px-6 py-3 rounded-2xl hover:border-slate-400 transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
