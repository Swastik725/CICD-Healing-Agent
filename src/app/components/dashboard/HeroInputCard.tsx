import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

interface HeroInputCardProps {
  repo: string;
  setRepo: (value: string) => void;
  onLaunch: () => void;
  onSimulate: () => void;
  isRunning: boolean;
}

export const HeroInputCard = ({
  repo,
  setRepo,
  onLaunch,
  onSimulate,
  isRunning,
}: HeroInputCardProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-[640px] mx-auto"
    >
      <div
        className="rounded-[20px] p-12"
        style={{
          background: 'rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 255, 255, 0.15)',
          boxShadow:
            '0 0 1px rgba(255, 255, 255, 0.08), 0 8px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 255, 255, 0.05)',
        }}
      >
        {/* CARD HEADER */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          {/* Animated Icon */}
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="inline-block mb-4"
          >
            <Zap className="w-10 h-10 text-[#00ffff] glow-cyan" strokeWidth={2} />
          </motion.div>

          <h1 className="font-orbitron text-[28px] font-bold text-[#00ffff] glow-cyan mb-2">
            Autonomous CI/CD Healing Agent
          </h1>
          <p className="font-jetbrains text-[13px]" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            Paste your repo. Let the agent handle the rest.
          </p>
        </motion.div>

        {/* INPUTS */}
        <motion.div variants={itemVariants} className="flex flex-col gap-5 mb-8">
          {/* Input 1 - GitHub Repository URL */}
          <div className="relative">
            <label
              className="absolute -top-2.5 left-3 px-1.5 font-jetbrains text-[11px] text-[#00ffff] z-10"
              style={{ background: 'rgba(0, 0, 0, 0.6)' }}
            >
              GitHub Repository URL
            </label>
            <input
              type="text"
              value={repo}
              onChange={(e) => setRepo(e.target.value)}
              placeholder="https://github.com/username/repo"
              className="w-full rounded-xl px-4 py-3.5 font-jetbrains text-sm text-white transition-all outline-none"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#00ffff';
                e.target.style.boxShadow =
                  '0 0 0 3px rgba(0, 255, 255, 0.15), 0 0 12px rgba(0, 255, 255, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
        </motion.div>

        {/* BUTTONS */}
        <motion.div variants={itemVariants} className="flex flex-row gap-4 justify-center">
          {/* Button 1 - LAUNCH AGENT */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={onLaunch}
            disabled={isRunning}
            className="font-orbitron font-bold text-[13px] tracking-[2px] px-9 py-3.5 rounded-full text-black transition-all flex items-center gap-2"
            style={{
              background: isRunning
                ? 'linear-gradient(135deg, #00ffff, #00cccc)'
                : 'linear-gradient(135deg, #00ffff, #00cccc)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
              opacity: isRunning ? 0.7 : 1,
              cursor: isRunning ? 'not-allowed' : 'pointer',
            }}
          >
            {isRunning ? (
              <>
                <div
                  className="w-4 h-4 border-2 border-transparent border-t-black rounded-full animate-spin"
                />
                AGENT DEPLOYING…
              </>
            ) : (
              'LAUNCH AGENT'
            )}
          </motion.button>

          {/* Button 2 - SIMULATE RUN */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={onSimulate}
            disabled={isRunning}
            className="font-orbitron font-bold text-[13px] tracking-[2px] px-9 py-3.5 rounded-full text-white transition-all"
            style={{
              background: 'linear-gradient(135deg, #bb00ff, #8800cc)',
              boxShadow: '0 0 20px rgba(187, 0, 255, 0.35)',
              opacity: isRunning ? 0.7 : 1,
              cursor: isRunning ? 'not-allowed' : 'pointer',
            }}
          >
            SIMULATE RUN
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};
