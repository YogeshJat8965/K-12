import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

interface Badge {
  id: string;
  name: string;
  icon: string;
  unlocked: boolean;
  xp: number;
}

interface GamificationState {
  xp: number;
  level: number;
  streak: number;
  badges: Badge[];
  sectionsVisited: string[];
  quizCompleted: boolean;
  totalXp: number;
}

interface GamificationContextType extends GamificationState {
  addXp: (amount: number, reason: string) => void;
  visitSection: (sectionId: string) => void;
  completeQuiz: () => void;
  getLevelTitle: () => string;
  getLevelProgress: () => number;
  getXpForNextLevel: () => number;
}

const BADGES: Badge[] = [
  { id: 'explorer', name: 'Explorer', icon: 'compass', unlocked: false, xp: 50 },
  { id: 'curious', name: 'Curious Mind', icon: 'brain', unlocked: false, xp: 100 },
  { id: 'trackstar', name: 'Track Star', icon: 'route', unlocked: false, xp: 150 },
  { id: 'quizmaster', name: 'Quiz Master', icon: 'trophy', unlocked: false, xp: 200 },
  { id: 'champion', name: 'Champion', icon: 'crown', unlocked: false, xp: 300 },
];

const XP_PER_LEVEL = 200;

const GamificationContext = createContext<GamificationContextType | null>(null);

export function GamificationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GamificationState>(() => {
    try {
      const saved = localStorage.getItem('skillzza-gamification');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      xp: 0,
      level: 1,
      streak: 1,
      badges: BADGES,
      sectionsVisited: [],
      quizCompleted: false,
      totalXp: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('skillzza-gamification', JSON.stringify(state));
  }, [state]);

  const addXp = useCallback((amount: number, reason: string) => {
    setState((prev) => {
      const newXp = prev.xp + amount;
      const newTotalXp = prev.totalXp + amount;
      const newLevel = Math.floor(newTotalXp / XP_PER_LEVEL) + 1;
      const newBadges = [...prev.badges];

      // Unlock badges based on total XP
      newBadges.forEach((b, i) => {
        if (!b.unlocked && newTotalXp >= b.xp) {
          newBadges[i] = { ...b, unlocked: true };
        }
      });

      return {
        ...prev,
        xp: newXp % XP_PER_LEVEL,
        level: newLevel,
        totalXp: newTotalXp,
        badges: newBadges,
      };
    });
  }, []);

  const visitSection = useCallback((sectionId: string) => {
    setState((prev) => {
      if (prev.sectionsVisited.includes(sectionId)) return prev;
      const newVisited = [...prev.sectionsVisited, sectionId];
      const xpGain = 25;
      const newXp = prev.xp + xpGain;
      const newTotalXp = prev.totalXp + xpGain;
      const newLevel = Math.floor(newTotalXp / XP_PER_LEVEL) + 1;
      const newBadges = [...prev.badges];
      newBadges.forEach((b, i) => {
        if (!b.unlocked && newTotalXp >= b.xp) {
          newBadges[i] = { ...b, unlocked: true };
        }
      });

      return {
        ...prev,
        xp: newXp % XP_PER_LEVEL,
        level: newLevel,
        totalXp: newTotalXp,
        badges: newBadges,
        sectionsVisited: newVisited,
      };
    });
  }, []);

  const completeQuiz = useCallback(() => {
    setState((prev) => {
      if (prev.quizCompleted) return prev;
      const xpGain = 100;
      const newXp = prev.xp + xpGain;
      const newTotalXp = prev.totalXp + xpGain;
      const newLevel = Math.floor(newTotalXp / XP_PER_LEVEL) + 1;
      const newBadges = [...prev.badges];
      newBadges.forEach((b, i) => {
        if (!b.unlocked && newTotalXp >= b.xp) {
          newBadges[i] = { ...b, unlocked: true };
        }
      });

      return {
        ...prev,
        xp: newXp % XP_PER_LEVEL,
        level: newLevel,
        totalXp: newTotalXp,
        badges: newBadges,
        quizCompleted: true,
      };
    });
  }, []);

  const getLevelTitle = useCallback(() => {
    const titles = ['Newbie', 'Learner', 'Explorer', 'Achiever', 'Champion', 'Legend', 'Master', 'Grandmaster'];
    return titles[Math.min(state.level - 1, titles.length - 1)];
  }, [state.level]);

  const getLevelProgress = useCallback(() => {
    return (state.xp / XP_PER_LEVEL) * 100;
  }, [state.xp]);

  const getXpForNextLevel = useCallback(() => {
    return XP_PER_LEVEL - state.xp;
  }, [state.xp]);

  return (
    <GamificationContext.Provider
      value={{
        ...state,
        addXp,
        visitSection,
        completeQuiz,
        getLevelTitle,
        getLevelProgress,
        getXpForNextLevel,
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const ctx = useContext(GamificationContext);
  if (!ctx) throw new Error('useGamification must be used within GamificationProvider');
  return ctx;
}
