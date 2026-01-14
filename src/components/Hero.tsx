import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Japanese Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg tracking-widest mb-2 font-medium"
      >
        東京
      </motion.p>
      
      {/* Floating Star */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
        className="absolute top-32 left-[15%] animate-float"
      >
        <div className="w-6 h-6 bg-forest star-4" />
      </motion.div>

      {/* Main Title */}
      <div className="text-center px-4 overflow-hidden">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="hero-title text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] text-primary"
        >
          TOKYO
        </motion.h1>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="hero-title text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] text-primary"
        >
          SIP CLUB
        </motion.h1>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t border-b border-border py-4 bg-background/50 backdrop-blur-sm overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-8 text-sm font-semibold tracking-widest">
              FRESH BREWS • NO BAD VIBES • MATCHA HEAVEN • OPEN LATE •
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
