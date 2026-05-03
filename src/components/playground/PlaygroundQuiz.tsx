import { useState, useRef, useEffect } from 'react';
import { quiz, agents } from '../../aiPlayground';
import { Sparkles, ArrowRight, RotateCcw, Bot } from 'lucide-react';
import { MiniBotEyes } from './AiBotMascot';

/* ── Simple Canvas Confetti ── */
function ConfettiCanvas({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces: any[] = [];
    const colors = ['#7C3AED', '#EC4899', '#3B82F6', '#06B6D4', '#F2C94C'];

    for (let i = 0; i < 150; i++) {
      pieces.push({
        x: canvas.width / 2,
        y: canvas.height / 2 + 100,
        vx: (Math.random() - 0.5) * 20,
        vy: (Math.random() - 1) * 20 - 5,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let activePieces = 0;
      
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.5; // gravity
        p.rot += p.rotSpeed;

        if (p.y < canvas.height) {
          activePieces++;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rot * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (activePieces > 0) {
        animId = requestAnimationFrame(draw);
      }
    };
    draw();

    return () => cancelAnimationFrame(animId);
  }, [active]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[100]" />;
}

export default function PlaygroundQuiz() {
  const [step, setStep] = useState(0); // 0, 1, 2 = questions. 3 = loading, 4 = result
  const [scores, setScores] = useState<Record<string, number>>({});
  const [resultAgent, setResultAgent] = useState<any | null>(null);

  const handleOption = (selectedAgents: string[]) => {
    // Tally scores
    const newScores = { ...scores };
    selectedAgents.forEach(name => {
      newScores[name] = (newScores[name] || 0) + 1;
    });
    setScores(newScores);

    if (step < quiz.questions.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate result
      setStep(3); // Loading state
      
      setTimeout(() => {
        // Find highest score
        let topAgentName = selectedAgents[0];
        let maxScore = -1;
        Object.entries(newScores).forEach(([name, score]) => {
          if (score > maxScore) {
            maxScore = score;
            topAgentName = name;
          }
        });

        // Find agent details
        const match = agents.list.find(a => a.title === topAgentName) || agents.list[0];
        setResultAgent(match);
        setStep(4); // Result state
      }, 2000); // 2 second fake loading
    }
  };

  const reset = () => {
    setStep(0);
    setScores({});
    setResultAgent(null);
  };

  return (
    <section id="quiz" className="py-24 bg-[#FDF4FF] relative overflow-hidden">
      <ConfettiCanvas active={step === 4} />
      
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-magenta-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header (hidden on result) */}
        {step < 4 && (
          <div className="text-center mb-12">
            <h2 className="reveal font-display text-4xl md:text-5xl text-slate-800 mb-4">
              {quiz.title}
            </h2>
            <p className="reveal text-slate-600 text-lg">
              {quiz.subtitle}
            </p>
          </div>
        )}

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-purple-200/50 border border-purple-100 p-8 md:p-12 min-h-[450px] flex flex-col relative overflow-hidden">
          
          {/* Top decorative gradient line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-ai-purple via-ai-pink to-ai-cyan" />

          {/* QUESTION PHASE */}
          {step < quiz.questions.length && (
            <div className="flex-1 flex flex-col">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm font-bold text-slate-400 mb-2 px-1">
                  <span>Question {step + 1} of {quiz.questions.length}</span>
                  <span className="text-ai-purple">{Math.round((step / quiz.questions.length) * 100)}%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-ai-purple to-ai-pink transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${(step / quiz.questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="font-display text-2xl md:text-3xl text-slate-800 mb-8 text-center animate-fade-in">
                {quiz.questions[step].q}
              </h3>

              {/* Options Grid */}
              <div className="grid sm:grid-cols-2 gap-4 flex-1">
                {quiz.questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOption(opt.agents)}
                    className="bg-slate-50 border-2 border-slate-100 hover:border-ai-purple hover:bg-purple-50 text-slate-700 hover:text-ai-purple font-bold p-6 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:bg-ai-purple group-hover:text-white transition-colors">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <span className="text-lg">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* LOADING PHASE */}
          {step === 3 && (
            <div className="flex-1 flex flex-col items-center justify-center animate-fade-in">
              <MiniBotEyes className="mb-8 scale-150" />
              <h3 className="font-display text-3xl text-slate-800 mb-4">
                Analyzing your answers...
              </h3>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-ai-purple rounded-full animate-bounce" />
                <div className="w-3 h-3 bg-ai-pink rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-3 h-3 bg-ai-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
              <p className="text-slate-500 font-bold mt-6 animate-pulse">Finding your perfect AI match</p>
            </div>
          )}

          {/* RESULT PHASE */}
          {step === 4 && resultAgent && (
            <div className="flex-1 flex flex-col items-center justify-center text-center animate-fade-in scale-in">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                Perfect Match Found!
              </div>
              
              <div className="w-24 h-24 bg-gradient-to-br from-ai-purple to-ai-magenta rounded-3xl flex items-center justify-center text-5xl mb-6 shadow-2xl shadow-purple-300/50">
                {resultAgent.icon}
              </div>

              <h3 className="font-display text-4xl text-slate-800 mb-2">
                {resultAgent.title}
              </h3>
              
              <p className="text-slate-600 text-lg max-w-md mx-auto mb-8">
                {resultAgent.desc}
              </p>

              {/* +XP Reward */}
              <div className="bg-amber-100 border border-amber-200 text-amber-600 font-black px-6 py-3 rounded-2xl mb-8 flex items-center gap-3 animate-bounce">
                <span className="text-xl">🏆</span>
                +100 XP Earned!
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-ai-purple to-ai-magenta text-white font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-purple-300/30 flex items-center justify-center gap-2">
                  Build This Agent <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={reset}
                  className="bg-slate-100 text-slate-600 font-bold px-8 py-4 rounded-2xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
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
