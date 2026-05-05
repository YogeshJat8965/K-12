import { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'AI Playground', href: '/ai-playground' },
    { label: 'What Is It', href: '#what-is' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'For Parents', href: '#for-parents' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md shadow-lg shadow-sky-100/50 py-3"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo removed, only text remains */}
        <a href="#" className="flex items-center group">
          <span className="font-logo text-3xl">
            <span className="text-[#023463]">Skillzza</span>{' '}
            <span className="bg-gradient-to-r from-[#8947B3] to-[#B26EE3] bg-clip-text text-transparent">K-12</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-bold text-sm hover:text-orange-500 transition-colors duration-200 text-slate-700"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#quiz"
            className="bg-gradient-to-r from-purple-400 to-purple-700 text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all duration-300"
          >
            Take the Quiz
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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-sky-100 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-bold text-slate-700 hover:text-orange-500 transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quiz"
            className="mt-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold px-5 py-2.5 rounded-full text-sm text-center shadow-lg"
            onClick={() => setOpen(false)}
          >
            Take the Quiz
          </a>
        </div>
      )}
    </nav>
  );
}
