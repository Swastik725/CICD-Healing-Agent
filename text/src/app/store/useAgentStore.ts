import { create } from 'zustand';

export interface AgentResult {
  status: 'passed' | 'failed';
  repo: string;
  branch: string;
  failures: number;
  fixes: number;
  time: number;
}

interface AgentStore {
  repo: string;
  isRunning: boolean;
  results: AgentResult | null;
  setRepo: (repo: string) => void;
  setIsRunning: (isRunning: boolean) => void;
  setResults: (results: AgentResult | null) => void;
  reset: () => void;
}

export const useAgentStore = create<AgentStore>((set) => ({
  repo: '',
  isRunning: false,
  results: null,
  setRepo: (repo) => set({ repo }),
  setIsRunning: (isRunning) => set({ isRunning }),
  setResults: (results) => set({ results }),
  reset: () => set({ repo: '', isRunning: false, results: null }),
}));
