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
  { border: 'border-brand-sky/20 bg-brand-sky/5 hover:border-brand-sky hover:bg-brand-sky/10', selected: 'border-brand-sky bg-brand-sky/10 ring-2 ring-brand-sky/30', correct: 'border-brand-sky bg-brand-sky/10 ring-2 ring-brand-sky/30' },
  { border: 'border-brand-yellow/30 bg-brand-yellow/10 hover:border-brand-yellow hover:bg-brand-yellow/20', selected: 'border-brand-yellow bg-brand-yellow/20 ring-2 ring-brand-yellow/40', correct: 'border-brand-yellow bg-brand-yellow/20 ring-2 ring-brand-yellow/40' },
  { border: 'border-brand-navy/10 bg-brand-navy/5 hover:border-brand-navy/50 hover:bg-brand-navy/10', selected: 'border-brand-navy bg-brand-navy/10 ring-2 ring-brand-navy/30', correct: 'border-brand-navy bg-brand-navy/10 ring-2 ring-brand-navy/30' },
  { border: 'border-brand-brown/20 bg-brand-brown/5 hover:border-brand-brown hover:bg-brand-brown/10', selected: 'border-brand-brown bg-brand-brown/10 ring-2 ring-brand-brown/30', correct: 'border-brand-brown bg-brand-brown/10 ring-2 ring-brand-brown/30' },
];

const q1Icons = [<Cpu className="w-6 h-6 text-brand-sky" />, <Lightbulb className="w-6 h-6 text-brand-yellow" />, <Palette className="w-6 h-6 text-brand-navy" />, <Leaf className="w-6 h-6 text-brand-brown" />];
const q2Icons = [<Rocket className="w-6 h-6 text-brand-sky" />, <Megaphone className="w-6 h-6 text-brand-yellow" />, <Heart className="w-6 h-6 text-brand-navy" />, <Shield className="w-6 h-6 text-brand-brown" />];
const q3Icons = [<Cpu className="w-6 h-6 text-brand-sky" />, <BarChart3 className="w-6 h-6 text-brand-yellow" />, <Trophy className="w-6 h-6 text-brand-navy" />, <Compass className="w-6 h-6 text-brand-brown" />];
const questionIcons = [q1Icons, q2Icons, q3Icons];

function SectionBurst() {
  const particles = Array.from({ length: 120 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 120 + (Math.random() * 0.1 - 0.05);
    const distance = 200 + Math.random() * 800;
    const duration = 1.5 + Math.random() * 2;
    const colors = ['#0B2447', '#56CCF2', '#F2C94C', '#F5E6D3', '#8B4513'];
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
    <section id="quiz" className="py-24 bg-slate-50 overflow-hidden relative">
      {showConfetti && <SectionBurst />}
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 bg-brand-yellow/20 text-brand-brown font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Quiz
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl text-brand-navy mb-4">
            Find Your Perfect Track!
          </h2>
          <p className="reveal text-brand-navy/60 text-lg">{quiz.subtitle}</p>
        </div>

        <div className={`reveal bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-navy/5 ${shaking ? 'shake' : ''}`}>
          {!done ? (
            <>
              {/* Progress bar */}
              <div className="h-2 bg-brand-navy/5">
                <div
                  className="h-2 bg-gradient-to-r from-brand-sky to-brand-yellow rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="p-8 md:p-12">
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-8">
                  {quiz.questions.map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black transition-all duration-300 ${
                        i < step ? 'bg-brand-sky text-white shadow-md' :
                        i === step ? 'bg-brand-navy text-white ring-4 ring-brand-navy/20 shadow-lg' :
                        'bg-brand-navy/5 text-brand-navy/40'
                      }`}>
                        {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                      </div>
                      {i < quiz.questions.length - 1 && (
                        <div className={`w-8 h-1 rounded-full transition-all duration-300 ${i < step ? 'bg-brand-sky' : 'bg-brand-navy/5'}`} />
                      )}
                    </div>
                  ))}
                  <div className="ml-auto flex items-center gap-1 text-xs font-bold text-brand-brown bg-brand-yellow/20 px-3 py-1.5 rounded-full">
                    <Zap className="w-3.5 h-3.5" />
                    +100 XP
                  </div>
                </div>

                {/* Question */}
                <h3 className="font-display text-2xl md:text-3xl text-brand-navy mb-8">
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
                        <div className="font-bold text-brand-navy text-sm leading-snug">
                          {opt.label.replace(/^[^\s]+\s/, '')}
                        </div>
                        {isSelected && (
                          <div className="mt-2 flex items-center gap-1 text-xs font-bold text-brand-sky pop-in">
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

              <div className="w-20 h-20 bg-gradient-to-br from-brand-yellow to-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 bounce-in shadow-xl">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <div className="inline-flex items-center gap-2 bg-brand-sky/20 text-brand-navy font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Your Perfect Match!
              </div>
              <h3 className="font-display text-3xl text-brand-navy mb-2">
                {result?.title || 'Multiple Tracks!'}
              </h3>
              <p className="text-brand-navy/60 font-bold text-sm uppercase tracking-wider mb-4">
                {result?.tagline}
              </p>
              <p className="text-brand-navy/80 text-base leading-relaxed max-w-xl mx-auto mb-8">
                {result?.desc}
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="#tracks"
                  className="bg-brand-sky text-white font-black px-8 py-3 rounded-2xl hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-lg hover:shadow-brand-sky/40"
                >
                  Explore This Track <ChevronRight className="w-4 h-4" />
                </a>
                <button
                  onClick={reset}
                  className="border-2 border-brand-navy/10 text-brand-navy font-bold px-6 py-3 rounded-2xl hover:border-brand-navy/30 transition-colors flex items-center gap-2"
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
