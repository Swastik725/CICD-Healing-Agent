import * as React from 'react';
import { motion } from 'framer-motion';

// Header with logo and status
export const Header = () => {
  const headerVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.header
      variants={headerVariant}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between px-8 py-4 bg-black/60 backdrop-blur-sm border-b border-white/10"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-neon-cyan drop-shadow-[0_0_5px_#00ffff]">
        RIFT HEALER
      </h1>

      {/* Title & Tagline */}
      <div className="text-center hidden md:block">
        <h2 className="text-lg font-medium text-neon-purple drop-shadow-[0_0_5px_#bb00ff]">
          Autonomous CI/CD Healing Agent
        </h2>
        <p className="text-sm text-neon-emerald">Detect. Fix. Deploy.</p>
      </div>

      {/* Status */}
      <span className="text-sm text-neon-red drop-shadow-[0_0_5px_#ff0055]">
        Ready for Launch
      </span>
    </motion.header>
  );
};
