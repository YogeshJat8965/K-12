import { useState, useEffect } from 'react';
import { whatIs } from '../../aiPlayground';
import { Sparkles, Zap, GraduationCap, Clock, Bot } from 'lucide-react';

/* ── Animated Chat Simulation ── */
function ChatSimulation() {
  const [visibleMsgs, setVisibleMsgs] = useState(0);

  const messages = [
    { type: 'ai', text: "Hi! 👋 I'm your AI Playground. What would you like to build today?", delay: 500 },
    { type: 'user', text: "I want to create a story companion! 📖", delay: 2500 },
    { type: 'ai', text: "Great choice! Let me set up your Story Weaver agent. You can customise its personality and style!", delay: 4500 },
    { type: 'user', text: "Can I make it talk like a pirate? 🏴‍☠️", delay: 7000 },
    { type: 'ai', text: "Absolutely! Just move the 'Personality' slider to 'Fun & Creative'. Your pirate storyteller is ready! 🚀", delay: 9000 },
  ];

  useEffect(() => {
    const timers = messages.map((msg, i) =>
      setTimeout(() => setVisibleMsgs(i + 1), msg.delay)
    );
    // Loop the animation
    const loopTimer = setTimeout(() => setVisibleMsgs(0), 13000);
    const restartTimer = setTimeout(() => {
      messages.forEach((msg, i) => {
        setTimeout(() => setVisibleMsgs(i + 1), msg.delay);
      });
    }, 14000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(loopTimer);
      clearTimeout(restartTimer);
    };
  }, [visibleMsgs === 0]);

  return (
    <div className="chat-window p-5 sm:p-6 h-[420px] sm:h-[460px] overflow-hidden relative scan-line">
      {/* Chat header */}
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-purple-500/20">
        <div className="w-10 h-10 bg-gradient-to-br from-ai-purple to-ai-magenta rounded-xl flex items-center justify-center shadow-lg">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-bold text-white text-sm">AI Playground</div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 text-xs font-bold">Online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-4 overflow-hidden">
        {messages.slice(0, visibleMsgs).map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} chat-bubble-in`}
          >
            <div className={`max-w-[85%] px-4 py-3 text-sm font-medium leading-relaxed ${
              msg.type === 'ai'
                ? 'chat-msg-ai text-purple-100'
                : 'chat-msg-user text-blue-100'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {visibleMsgs > 0 && visibleMsgs < messages.length && (
          <div className="flex justify-start">
            <div className="chat-msg-ai px-4 py-3 flex items-center gap-1.5">
              <div className="w-2 h-2 bg-purple-300 rounded-full ai-typing-dot" />
              <div className="w-2 h-2 bg-purple-300 rounded-full ai-typing-dot-2" />
              <div className="w-2 h-2 bg-purple-300 rounded-full ai-typing-dot-3" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const factIcons = [
  <GraduationCap className="w-4 h-4 text-ai-purple" />,
  <Zap className="w-4 h-4 text-ai-pink" />,
  <Clock className="w-4 h-4 text-ai-cyan" />,
];

export default function PlaygroundWhatIs() {
  return (
    <section id="what-is" className="py-24 bg-gradient-to-b from-[#FAFAFE] to-[#FDF2F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Chat Simulation */}
          <div className="reveal-left">
            <ChatSimulation />
          </div>

          {/* Right: Content */}
          <div className="reveal-right">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-ai-purple font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              About AI Playground
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-slate-800 mb-6 leading-tight">
              {whatIs.title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              {whatIs.description}
            </p>
            <p className="text-ai-purple font-bold text-base leading-relaxed mb-10 bg-purple-50 rounded-2xl p-5 border-l-4 border-ai-purple flex items-start gap-3">
              <Bot className="w-5 h-5 flex-shrink-0 mt-0.5 text-ai-purple" />
              <span className="text-slate-700">{whatIs.note}</span>
            </p>

            {/* Quick Facts */}
            <div className="flex flex-wrap gap-4">
              {whatIs.quickFacts.map((fact, i) => (
                <div key={i} className="fact-pill-ai bg-white/80 rounded-2xl px-5 py-3 shadow-md flex items-center gap-3">
                  <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center">
                    {factIcons[i]}
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{fact.label}</div>
                    <div className="font-bold text-slate-800 text-sm">{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
