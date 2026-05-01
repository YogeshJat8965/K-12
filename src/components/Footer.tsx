import { Rocket } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 border-t border-brand-sky/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-logo text-2xl text-nova-gradient">Skillzza Nova</span>
        </div>
        <p className="text-brand-navy/60 text-sm text-center font-medium">
          Virtual Internships for Grades 6–12 &mdash; Empowering Future Leaders
        </p>
        <p className="text-brand-navy/40 text-xs">
          &copy; {new Date().getFullYear()} Skillzza. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
