import { MiniBotEyes } from './AiBotMascot';

export default function PlaygroundFooter() {
  return (
    <footer className="bg-[#1E1B4B] py-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <MiniBotEyes />
          <span className="font-logo text-xl gradient-text-purple">
            Skillzza Nova
          </span>
        </div>

        {/* Copyright */}
        <div className="text-purple-200/50 text-sm font-bold">
          © {new Date().getFullYear()} Skillzza. All rights reserved.
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm font-bold text-purple-200/70">
          <a href="#" className="hover:text-ai-cyan transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-ai-cyan transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-ai-cyan transition-colors">Contact</a>
        </div>
        
      </div>
    </footer>
  );
}
