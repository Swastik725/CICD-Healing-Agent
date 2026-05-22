import { motion } from 'motion/react';

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8"
      style={{
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* LEFT SLOT - Logo */}
      <div className="font-orbitron text-[22px] font-bold text-[#00ffff] glow-cyan">
        RIFT HEALER
      </div>

      {/* CENTER SLOT - Hidden on mobile */}
      <div className="hidden md:flex flex-col items-center gap-0.5">
        <div className="font-rajdhani text-base font-medium text-[#bb00ff] glow-purple">
          Autonomous CI/CD Healing Agent
        </div>
        <div className="font-jetbrains text-xs text-[#50c878]">
          Detect. Fix. Deploy.
        </div>
      </div>

      {/* RIGHT SLOT - Status Badge */}
      <div
        className="flex items-center gap-2 px-4 py-1.5 rounded-full font-jetbrains text-[11px] text-[#ff0055] border"
        style={{
          background: 'rgba(255, 0, 85, 0.15)',
          borderColor: '#ff0055',
        }}
      >
        <span className="animate-[pulse_1.5s_ease-in-out_infinite]">●</span>
        READY
      </div>
    </motion.header>
  );
};
