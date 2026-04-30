import { useGamification } from '../context/GamificationContext';
import { Trophy, Flame, Star, Zap, Crown, Compass, Brain, Route } from 'lucide-react';

const badgeIcons: Record<string, React.ReactNode> = {
  compass: <Compass className="w-5 h-5" />,
  brain: <Brain className="w-5 h-5" />,
  route: <Route className="w-5 h-5" />,
  trophy: <Trophy className="w-5 h-5" />,
  crown: <Crown className="w-5 h-5" />,
};

const levelColors: Record<string, string> = {
  Newbie: 'from-slate-400 to-slate-500',
  Learner: 'from-sky-400 to-sky-600',
  Explorer: 'from-green-400 to-emerald-600',
  Achiever: 'from-orange-400 to-yellow-500',
  Champion: 'from-pink-500 to-rose-600',
  Legend: 'from-yellow-400 to-amber-600',
  Master: 'from-sky-500 to-blue-700',
  Grandmaster: 'from-amber-400 to-orange-600',
};

export default function GamificationBar() {
  const { xp, level, streak, badges, totalXp, getLevelTitle, getLevelProgress, getXpForNextLevel } = useGamification();
  const title = getLevelTitle();
  const progress = getLevelProgress();
  const xpNeeded = getXpForNextLevel();
  const unlockedBadges = badges.filter((b) => b.unlocked);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-4 overflow-x-auto scroll-track">
        {/* Level badge */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${levelColors[title] || 'from-sky-400 to-blue-600'} flex items-center justify-center shadow-md`}>
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div className="leading-none">
            <div className="font-black text-slate-800 text-xs">Lv.{level}</div>
            <div className="text-[10px] font-bold text-slate-500">{title}</div>
          </div>
        </div>

        {/* XP bar */}
        <div className="flex-1 min-w-[120px] max-w-[200px]">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[10px] font-black text-yellow-600 flex items-center gap-1">
              <Star className="w-3 h-3" /> {totalXp} XP
            </span>
            <span className="text-[10px] font-bold text-slate-400">{xpNeeded} to next</span>
          </div>
          <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full transition-all duration-700 ease-out xp-glow"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Streak */}
        <div className="flex items-center gap-1.5 flex-shrink-0 bg-orange-50 rounded-xl px-3 py-1.5 border border-orange-200">
          <Flame className="w-4 h-4 text-orange-500 fire-flicker" />
          <span className="font-black text-orange-600 text-xs">{streak}</span>
          <span className="text-[10px] font-bold text-orange-400">streak</span>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                b.unlocked
                  ? 'bg-gradient-to-br from-yellow-300 to-amber-400 text-white shadow-md badge-unlock'
                  : 'bg-slate-100 text-slate-300'
              }`}
              title={b.unlocked ? b.name : `Unlock ${b.name} at ${b.xp} XP`}
            >
              {badgeIcons[b.icon] || <Star className="w-4 h-4" />}
            </div>
          ))}
        </div>

        {/* Sections visited count */}
        <div className="flex items-center gap-1.5 flex-shrink-0 text-[10px] font-bold text-slate-400">
          <Trophy className="w-3.5 h-3.5" />
          {unlockedBadges.length}/{badges.length} badges
        </div>
      </div>
    </div>
  );
}
