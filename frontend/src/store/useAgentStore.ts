import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Result = {
  repository: string;
  branch: string;
  failures: number;
  fixes: number;
  time: number; // seconds
  status: 'PASSED' | 'FAILED';
};

interface AgentState {
  isRunning: boolean;
  results: Result | null;
  launchAgent: (repo: string) => void;
  simulateRun: (repo: string) => void;
  reset: () => void;
}

export const useAgentStore = create<AgentState>()(
  devtools((set) => ({
    isRunning: false,
    results: null,
    launchAgent: (repo) => {
      set({ isRunning: true, results: null });
      // Simulate async processing (2‑3 s)
      setTimeout(() => {
        const failures = Math.floor(Math.random() * 15) + 5;
        const fixes = failures;
        const time = Math.floor(Math.random() * 90) + 30;
        const repoName = repo.split('/').filter(Boolean).pop() ?? 'repo';
        const branch = `${repoName.toUpperCase()}_AI_Fix`;
        const status = failures > 0 ? 'PASSED' : 'FAILED';
        set({
          isRunning: false,
          results: { repository: repo, branch, failures, fixes, time, status },
        });
      }, 2500);
    },
    simulateRun: (repo) => {
      // Immediate mock data – no loading spinner
      const failures = Math.floor(Math.random() * 15) + 5;
      const fixes = failures;
      const time = Math.floor(Math.random() * 90) + 30;
      const repoName = repo.split('/').filter(Boolean).pop() ?? 'repo';
      const branch = `${repoName.toUpperCase()}_AI_Fix`;
      const status = failures > 0 ? 'PASSED' : 'FAILED';
      set({ isRunning: false, results: { repository: repo, branch, failures, fixes, time, status } });
    },
    reset: () => set({ isRunning: false, results: null }),
  }))
);
