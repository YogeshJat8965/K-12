import { FileText, ShieldCheck, UserCircle2, TrendingUp } from 'lucide-react';

export default function StatsBar() {
  return (
    <section className="bg-violet-200 py-6 border-y border-violet-00">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 lg:gap-0">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4 flex-1 justify-center lg:border-r border-violet-200 last:border-0 px-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-violet-200 shadow-sm">
              <FileText className="w-6 h-6 text-[#A855F7]" />
            </div>
            <div>
              <div className="text-xl font-black text-violet-900">8+</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Career Tracks</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 flex-1 justify-center lg:border-r border-violet-200 last:border-0 px-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-yellow-200 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <div className="text-xl font-black text-violet-900">100+</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Real-World Projects</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 flex-1 justify-center lg:border-r border-violet-200 last:border-0 px-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-violet-200 shadow-sm">
              <UserCircle2 className="w-6 h-6 text-[#A855F7]" />
            </div>
            <div>
              <div className="text-xl font-black text-violet-900">Expert</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Industry Mentors</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-4 flex-1 justify-center px-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-yellow-200 shadow-sm">
              <TrendingUp className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <div className="text-xl font-black text-violet-900">Future-Ready</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Skills for Life</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
