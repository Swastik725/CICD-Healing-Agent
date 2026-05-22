import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, ChevronRight, Terminal } from 'lucide-react';

interface LogLine {
  type: 'success' | 'warn' | 'info' | 'cmd';
  text: string;
}

interface TerminalLogProps {
  lines: LogLine[];
}

const iconMap = {
  success: CheckCircle2,
  warn: AlertCircle,
  info: ChevronRight,
  cmd: Terminal,
};

const colorMap = {
  success: '#50c878',
  warn: '#fbbf24',
  info: '#00ffff',
  cmd: '#ffffff',
};

export const TerminalLog = ({ lines }: TerminalLogProps) => {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: 'rgba(0, 0, 0, 0.6)',
        border: '1px solid rgba(0, 255, 255, 0.1)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
      >
        {/* macOS Dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        {/* Filename */}
        <div className="font-jetbrains text-xs" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
          agent.log
        </div>
      </div>

      {/* Log Lines */}
      <div className="px-5 py-4 max-h-40 overflow-y-auto font-jetbrains text-xs space-y-2">
        {lines.map((line, index) => {
          const Icon = iconMap[line.type];
          const color = colorMap[line.type];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.3 }}
              className="flex items-start gap-2"
            >
              <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color }} />
              <span style={{ color }}>{line.text}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
