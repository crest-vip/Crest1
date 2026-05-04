import { create } from 'zustand';

interface StreakState {
  currentStreak: number;
  graceBalance: number;
  heatmap: Record<string, 'green' | 'yellow' | 'red'>;
  logDay: (date: string) => void;
  missDay: (date: string) => void;
}

export const useStreakStore = create<StreakState>((set, get) => ({
  currentStreak: 0,
  graceBalance: 3, // Initial grace days
  heatmap: {},

  logDay: (date) => set((state) => ({
    currentStreak: state.currentStreak + 1,
    heatmap: { ...state.heatmap, [date]: 'green' },
  })),

  missDay: (date) => set((state) => {
    if (state.graceBalance > 0) {
      return {
        graceBalance: state.graceBalance - 1,
        heatmap: { ...state.heatmap, [date]: 'yellow' },
      };
    } else {
      return {
        currentStreak: 0,
        heatmap: { ...state.heatmap, [date]: 'red' },
      };
    }
  }),
}));