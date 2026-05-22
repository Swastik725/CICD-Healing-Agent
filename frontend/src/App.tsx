import * as React from 'react';
import { Header } from '@/components/dashboard/Header';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { RunSummaryCard } from '@/components/dashboard/RunSummaryCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';
import { useAgentStore } from '@/store/useAgentStore';
import { useParticles } from '@/hooks/useParticles';

export default function App() {
  // Local input state
  const [repo, setRepo] = React.useState('');



  // Global store state (FIXED: use destructuring for clarity)
  const { isRunning, results, launchAgent, simulateRun } = useAgentStore();
  useParticles();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, when: 'beforeChildren' } },
  };
  const card = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };
  const btn = { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } } };

  const handleLaunch = () => {
    if (!repo) return;
    launchAgent(repo);
  };

  const handleSimulate = () => {
    // Use store's simulateRun to instantly generate mock data (FIXED)
    simulateRun(repo || 'https://github.com/demo/repo');
  };

  return (
    <div className="min-h-screen bg-black/95 text-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8 gap-8">
        <AnimatePresence mode="wait">
          {/* INPUT SECTION */}
          {!results && (
            <motion.div
              key="input"
              className="w-full max-w-2xl"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Card className="glass mx-auto p-10">
                <motion.h1
                  className="text-3xl font-bold text-center mb-6 text-neon-cyan drop-shadow-[0_0_8px_#00ffff]"
                  variants={card}
                >
                  Autonomous CI/CD Healing Agent
                </motion.h1>

                <motion.div className="space-y-4" variants={card}>
                  <Input
                    label="GitHub Repository URL"
                    placeholder="https://github.com/username/repo"
                    value={repo}
                    onChange={(e) => setRepo(e.target.value)}
                  />
                </motion.div>

                <motion.div className="mt-6 flex gap-4 justify-center" variants={btn}>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 12px var(--tw-shadow-color)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-neon-cyan text-black font-semibold rounded-full shadow-neon transition-colors"
                    onClick={handleLaunch}
                    disabled={isRunning}
                  >
                    {isRunning ? (
                      <span className="flex items-center space-x-2">
                        <span>AGENT DEPLOYING…</span>
                        <span className="w-4 h-4 border-2 border-black rounded-full animate-spin border-t-neon-cyan" />
                      </span>
                    ) : (
                      'LAUNCH AGENT'
                    )}
                  </motion.button>

                  {/* Simulate Run button – FIXED */}
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 12px var(--tw-shadow-color)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-neon-purple text-black font-semibold rounded-full shadow-neon transition-colors"
                    onClick={handleSimulate}
                    disabled={isRunning}
                  >
                    SIMULATE RUN
                  </motion.button>
                </motion.div>
              </Card>
            </motion.div>
          )}

          {/* DASHBOARD SECTION */}
          {results && (
            <motion.div
              key="dashboard"
              className="w-full max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
            >
              <RunSummaryCard result={results} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Toaster position="bottom-right" />
    </div>
  );
}
