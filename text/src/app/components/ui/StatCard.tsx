import { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';

interface StatCardProps {
  value: number;
  label: string;
  color: 'cyan' | 'purple' | 'emerald' | 'red';
  suffix?: string;
}

const colorMap = {
  cyan: {
    text: '#00ffff',
    glow: 'drop-shadow(0 0 12px #00ffff)',
  },
  purple: {
    text: '#bb00ff',
    glow: 'drop-shadow(0 0 12px #bb00ff)',
  },
  emerald: {
    text: '#50c878',
    glow: 'drop-shadow(0 0 12px #50c878)',
  },
  red: {
    text: '#ff0055',
    glow: 'drop-shadow(0 0 12px #ff0055)',
  },
};

export const StatCard = ({ value, label, color, suffix = '' }: StatCardProps) => {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return controls.stop;
  }, [value, motionValue]);

  const { text, glow } = colorMap[color];

  return (
    <div
      className="rounded-2xl p-6 text-center"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-orbitron font-bold text-5xl mb-2"
        style={{
          color: text,
          filter: glow,
        }}
      >
        {displayValue}
        {suffix}
      </motion.div>
      <div
        className="font-jetbrains text-[11px] uppercase tracking-wider"
        style={{ color: 'rgba(255, 255, 255, 0.4)' }}
      >
        {label}
      </div>
    </div>
  );
};
