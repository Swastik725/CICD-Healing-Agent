import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Result = {
  repository: string;
  team: string;
  leader: string;
  branch: string;
  failures: number;
  fixes: number;
  time: number; // seconds
  status: 'PASSED' | 'FAILED';
};

interface AgentState {
  isRunning: boolean;
  results: Result | null;
  launchAgent: (repo: string, team: string, leader: string) => void;
  simulateRun: (repo: string, team: string, leader: string) => void; // FIXED: added simulateRun
  reset: () => void;
}

export const useAgentStore = create<AgentState>()(
  devtools((set) => ({
    isRunning: false,
    results: null,
    launchAgent: (repo, team, leader) => {
      set({ isRunning: true, results: null });
      // Simulate async processing (2‑3 s)
      setTimeout(() => {
        const failures = Math.floor(Math.random() * 15) + 5;
        const fixes = failures;
        const time = Math.floor(Math.random() * 90) + 30;
        const branch = `${team.replace(/\s+/g, '_').toUpperCase()}_${leader
          .replace(/\s+/g, '_')
          .toUpperCase()}_AI_Fix`;
        const status = failures > 0 ? 'PASSED' : 'FAILED';
        set({
          isRunning: false,
          results: { repository: repo, team, leader, branch, failures, fixes, time, status },
        });
      }, 2500);
    },
    simulateRun: (repo, team, leader) => {
      // Immediate mock data – no loading spinner
      const failures = Math.floor(Math.random() * 15) + 5;
      const fixes = failures;
      const time = Math.floor(Math.random() * 90) + 30;
      const branch = `${team.replace(/\s+/g, '_').toUpperCase()}_${leader
        .replace(/\s+/g, '_')
        .toUpperCase()}_AI_Fix`;
      const status = failures > 0 ? 'PASSED' : 'FAILED';
      set({ isRunning: false, results: { repository: repo, team, leader, branch, failures, fixes, time, status } });
    },
    reset: () => set({ isRunning: false, results: null }),
  }))
);
