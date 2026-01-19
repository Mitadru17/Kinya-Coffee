import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  skipAnimation?: boolean;
}

const PageTransition = ({ children, skipAnimation = false }: PageTransitionProps) => {
  // Skip animation - just render content directly
  if (skipAnimation) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Curtain Overlay - Primary (slides up) */}
      <motion.div
        className="fixed inset-0 z-[9999] bg-ink origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ 
          duration: 1, 
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Curtain Overlay - Secondary (slides up with delay) */}
      <motion.div
        className="fixed inset-0 z-[9998] bg-terracotta origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ 
          duration: 1, 
          ease: [0.22, 1, 0.36, 1], 
          delay: 0.1 
        }}
      />

      {/* Brand Logo During Transition */}
      <motion.div
        className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.span 
          className="font-display text-6xl md:text-8xl text-canvas"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: -30, opacity: [0, 1, 1, 0] }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1], 
            delay: 0.1,
            opacity: { duration: 1.2, times: [0, 0.2, 0.7, 1] }
          }}
        >
          KINYA
        </motion.span>
      </motion.div>

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageTransition;
