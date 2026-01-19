import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SplitTransitionProps {
  children: ReactNode;
  skipAnimation?: boolean;
}

const SplitTransition = ({ children, skipAnimation = false }: SplitTransitionProps) => {
  // Skip animation - just render content directly
  if (skipAnimation) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Left Panel - Slides out to the left */}
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-full z-[9999] bg-ink"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        exit={{ x: 0 }}
        transition={{ 
          duration: 1, 
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      {/* Right Panel - Slides out to the right */}
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-full z-[9999] bg-ink"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        exit={{ x: 0 }}
        transition={{ 
          duration: 1, 
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      {/* Left Panel Secondary - Terracotta */}
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-full z-[9998] bg-terracotta"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        exit={{ x: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1], 
          delay: 0.1 
        }}
      />

      {/* Right Panel Secondary - Terracotta */}
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-full z-[9998] bg-terracotta"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        exit={{ x: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1], 
          delay: 0.1 
        }}
      />

      {/* Brand Logo During Transition - Centered at the split */}
      <motion.div
        className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <motion.span 
          className="font-display text-6xl md:text-8xl text-canvas"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: [0, 1, 1, 0] }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1], 
            delay: 0.05,
            opacity: { duration: 0.8, times: [0, 0.3, 0.6, 1] }
          }}
        >
          KINYA
        </motion.span>
      </motion.div>

      {/* Vertical Line at Center - decorative */}
      <motion.div
        className="fixed top-0 left-1/2 w-[2px] h-full z-[10001] bg-canvas/30 -translate-x-1/2"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.76, 0, 0.24, 1],
          delay: 0.2
        }}
        style={{ originY: 0.5 }}
      />

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SplitTransition;
