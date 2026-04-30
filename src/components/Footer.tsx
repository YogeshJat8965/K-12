import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg">
            <Rocket className="w-4 h-4 text-white" />
          </div>
          <span className="font-display text-xl text-white">Skillzza</span>
        </div>
        <p className="text-slate-500 text-sm text-center">
          Virtual Internships for Grades 6–12 &mdash; Empowering Future Leaders
        </p>
        <p className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Skillzza. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
