import { useState, useRef, useEffect, useCallback } from 'react';
import { agents } from '../../aiPlayground';
import { Sparkles, Wrench, ChevronRight } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Agents' },
  { id: 'creativity', label: 'Creativity' },
  { id: 'academics', label: 'Academics' },
  { id: 'science', label: 'Science' },
  { id: 'tech', label: 'Tech' },
  { id: 'wellness', label: 'Wellness' },
  { id: 'career', label: 'Career' }
];

export default function AgentLibrary() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // 3D Tilt Effect on mouse move over cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight glow calculation
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // 3D Tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const filteredAgents = activeTab === 'all' 
    ? agents.list 
    : agents.list.filter(agent => agent.category === activeTab);

  return (
    <section id="agents" className="py-24 bg-[#1E1B4B] relative overflow-hidden">
      {/* Background Code Rain & Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1B4B] via-[#2E1065] to-[#1E1B4B] opacity-80" />
      
      {/* Code Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="code-char"
            style={{ 
              left: `${i * 5}%`, 
              '--rain-duration': `${Math.random() * 5 + 5}s`,
              '--rain-delay': `${Math.random() * 5}s`
            } as React.CSSProperties}
          >
            {'01'.split('').map(() => Math.random() > 0.5 ? '1' : '0').join('')}
            <br />
            {'import agent'.split('').map(c => Math.random() > 0.8 ? c.toUpperCase() : c).join('')}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-white/10 text-cyan-300 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-cyan-400/20 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Pick Your AI
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {agents.title}
          </h2>
          <p className="reveal text-purple-200/80 text-lg max-w-2xl mx-auto">
            {agents.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-ai-cyan to-ai-blue text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-white/5 text-purple-200 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAgents.map((agent, i) => (
            <div
              key={agent.title}
              ref={el => cardsRef.current[i] = el}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
              onMouseEnter={() => setHoveredCard(i)}
              className="reveal tilt-card-ai relative rounded-3xl bg-white/5 border border-white/10 p-6 overflow-hidden cursor-pointer group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Spotlight Glow - Uses CSS variables set by JS */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(124, 58, 237, 0.15), transparent 40%)'
                }}
              />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                  {agent.icon}
                </div>
                <div className="absolute top-0 right-0 px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-cyan-300 capitalize">
                  {agent.category}
                </div>
                <h3 className="font-display text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {agent.title}
                </h3>
                <p className="text-purple-200/70 text-sm leading-relaxed mb-6">
                  {agent.desc}
                </p>
                <div className="flex items-center gap-2 text-ai-cyan font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                  Select Agent <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Builder Note */}
        <div className="reveal mt-16 bg-gradient-to-r from-ai-purple/20 to-ai-magenta/20 border border-purple-500/30 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Wrench className="w-6 h-6 text-ai-pink" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-1">Want to build from scratch?</h4>
              <p className="text-purple-200 text-sm">{agents.builderNote}</p>
            </div>
          </div>
          <button className="bg-white text-ai-purple hover:bg-purple-50 px-6 py-3 rounded-xl font-bold transition-colors whitespace-nowrap">
            Open Builder
          </button>
        </div>
      </div>
    </section>
  );
}
