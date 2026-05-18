import * as React from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

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

export const RunSummaryCard = ({ result }: { result: Result }) => {
  // Motion values for animated counters
  const failures = useMotionValue(0);
  const fixes = useMotionValue(0);
  const time = useMotionValue(0);

  // Trigger animation on mount
  React.useEffect(() => {
    animate(failures, result.failures, { duration: 1.2 });
    animate(fixes, result.fixes, { duration: 1.2 });
    animate(time, result.time, { duration: 1.2 });
  }, [result, failures, fixes, time]);

  // Helper to bind motion value to text
  const bind = (mv: any) => {
    const [value, setValue] = React.useState(0);
    React.useEffect(() => {
      const unsubscribe = mv.onChange((v: number) => setValue(Math.round(v)));
      return () => unsubscribe();
    }, [mv]);
    return value;
  };

  const failuresVal = bind(failures);
  const fixesVal = bind(fixes);
  const timeVal = bind(time);

  return (
    <Card className="glass mx-auto max-w-3xl p-10">
      <motion.div layout className="space-y-6">
        {/* Header badge */}
        <motion.div
          layoutId="status-badge"
          className={cn(
            'text-xl font-bold px-4 py-2 rounded-full inline-block',
            result.status === 'PASSED' ? 'bg-emerald-500 text-black shadow-neon' : 'bg-red-600 text-white shadow-neon'
          )}
        >
          {result.status}
        </motion.div>

        {/* Repo & team info */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-neon-cyan">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-sm bg-black/30 px-2 py-1 rounded">Repo:</span>
            <span className="font-mono text-sm">{result.repository}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-mono text-sm bg-black/30 px-2 py-1 rounded">Team:</span>
            <span className="font-mono text-sm">{result.team}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-mono text-sm bg-black/30 px-2 py-1 rounded">Leader:</span>
            <span className="font-mono text-sm">{result.leader}</span>
          </div>
        </div>

        {/* Branch */}
        <div className="text-center text-neon-purple font-mono text-sm">
          <span className="bg-black/30 px-2 py-1 rounded">Branch:</span> {result.branch}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-neon-red text-4xl font-bold">{failuresVal}</div>
            <div className="text-sm text-neon-cyan">Failures Detected</div>
          </div>
          <div>
            <div className="text-neon-green text-4xl font-bold">{fixesVal}</div>
            <div className="text-sm text-neon-cyan">Fixes Applied</div>
          </div>
          <div>
            <div className="text-neon-purple text-4xl font-bold">{timeVal}s</div>
            <div className="text-sm text-neon-cyan">Time Taken</div>
          </div>
        </div>
      </motion.div>
    </Card>
  );
};
