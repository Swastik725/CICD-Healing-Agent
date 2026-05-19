import { motion } from 'motion/react';
import { GitBranch, ArrowLeft } from 'lucide-react';
import { StatCard } from '../ui/StatCard';
import { TerminalLog } from '../ui/TerminalLog';
import { AgentResult } from '../../store/useAgentStore';

interface RunSummaryCardProps {
  result: AgentResult;
  onReset: () => void;
}

export const RunSummaryCard = ({ result, onReset }: RunSummaryCardProps) => {
  const { status, repo, branch, failures, fixes, time } = result;

  // Generate log lines based on result data
  const logLines = [
    { type: 'success' as const, text: 'Cloning repository...' },
    { type: 'success' as const, text: `Running CI pipeline on branch ${branch}` },
    { type: 'warn' as const, text: `${failures} failures detected` },
    { type: 'success' as const, text: `Applying ${fixes} AI-generated fixes...` },
    { type: 'success' as const, text: 'All checks passed. Deploying.' },
    { type: 'info' as const, text: `Total time: ${time}s` },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[860px] mx-auto"
    >
      <div
        className="rounded-[20px] p-10 space-y-8"
        style={{
          background: 'rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 255, 255, 0.15)',
          boxShadow:
            '0 0 1px rgba(255, 255, 255, 0.08), 0 8px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 255, 255, 0.05)',
        }}
      >
        {/* ROW 1: STATUS BANNER */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="text-center"
        >
          <div
            className="inline-block px-8 py-3 rounded-full font-orbitron font-bold text-base tracking-[4px] border"
            style={{
              background:
                status === 'passed'
                  ? 'rgba(80, 200, 120, 0.15)'
                  : 'rgba(255, 0, 85, 0.15)',
              borderColor: status === 'passed' ? '#50c878' : '#ff0055',
              color: status === 'passed' ? '#50c878' : '#ff0055',
              filter:
                status === 'passed'
                  ? 'drop-shadow(0 0 12px #50c878)'
                  : 'drop-shadow(0 0 12px #ff0055)',
            }}
          >
            {status === 'passed' ? 'PASSED' : 'FAILED'}
          </div>
        </motion.div>

        {/* ROW 2: METADATA ROW */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Repo */}
          <div className="flex flex-col gap-1.5">
            <div
              className="px-2 py-0.5 rounded font-jetbrains text-[10px] tracking-wider uppercase inline-block w-fit"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                color: 'rgba(255, 255, 255, 0.4)',
              }}
            >
              REPO
            </div>
            <div
              className="font-jetbrains text-[13px] text-[#00ffff] truncate max-w-xs"
              title={repo}
            >
              {repo}
            </div>
          </div>
        </div>

        {/* ROW 3: BRANCH BADGE */}
        <div className="flex justify-center">
          <div
            className="flex items-center gap-2 px-5 py-1.5 rounded-full"
            style={{
              background: 'rgba(187, 0, 255, 0.12)',
              border: '1px solid rgba(187, 0, 255, 0.3)',
            }}
          >
            <GitBranch className="w-3.5 h-3.5 text-[#bb00ff]" />
            <span className="font-jetbrains text-[13px] text-[#bb00ff]">{branch}</span>
          </div>
        </div>

        {/* ROW 4: STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard value={failures} label="FAILURES DETECTED" color="red" />
          <StatCard value={fixes} label="FIXES APPLIED" color="emerald" />
          <StatCard value={time} label="TIME TAKEN" color="purple" suffix="s" />
        </div>

        {/* ROW 5: LOG TERMINAL */}
        <TerminalLog lines={logLines} />

        {/* ROW 6: RESET BUTTON */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{
              borderColor: '#00ffff',
              color: '#00ffff',
              boxShadow: '0 0 12px rgba(0, 255, 255, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onReset}
            className="flex items-center gap-2 px-7 py-2.5 rounded-full font-jetbrains text-xs tracking-wider border transition-all"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'transparent',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            RUN AGAIN
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
