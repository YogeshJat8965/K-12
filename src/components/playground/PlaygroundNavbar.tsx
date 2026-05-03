import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { MiniBotEyes } from './AiBotMascot';

export default function PlaygroundNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'What Is It', href: '#what-is' },
    { label: 'Agents', href: '#agents' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Safety', href: '#safety' },
    { label: 'For Schools', href: '#for-schools' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md shadow-lg shadow-purple-100/50 py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <MiniBotEyes />
          <span className="font-logo text-2xl sm:text-3xl gradient-text-purple">
            AI Playground
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-bold text-sm hover:text-ai-purple transition-colors duration-200 text-slate-700"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#quiz"
            className="bg-gradient-to-r from-ai-purple to-ai-magenta text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-lg hover:shadow-purple-300/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Find Your Agent
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-xl transition-colors text-slate-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-purple-100 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-bold text-slate-700 hover:text-ai-purple transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quiz"
            className="mt-2 bg-gradient-to-r from-ai-purple to-ai-magenta text-white font-bold px-5 py-2.5 rounded-full text-sm text-center shadow-lg"
            onClick={() => setOpen(false)}
          >
            Find Your Agent
          </a>
        </div>
      )}
    </nav>
  );
}
