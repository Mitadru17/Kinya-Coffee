import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Large Faded Background Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-[40vw] md:text-[35vw] font-display font-black text-forest/[0.03] leading-none select-none">
          ✿
        </div>
      </motion.div>

      {/* Floating Star */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
        className="absolute top-32 left-[10%] md:left-[15%] animate-float"
      >
        <div className="w-6 h-6 bg-forest star-4" />
      </motion.div>

      {/* Main Title */}
      <div className="text-center px-4 overflow-hidden relative z-10">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-display font-black text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] text-forest tracking-[0.02em]"
        >
          KINYA
        </motion.h1>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-display font-black text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] text-forest tracking-[0.02em]"
        >
          COFFEE
        </motion.h1>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t-2 border-b-2 border-forest py-3 bg-forest text-cream overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-6 text-xs font-bold tracking-[0.3em] uppercase">
              SPECIALTY COFFEE • MATCHA • FRESH BAKERY • SLOW MOMENTS • SPECIALTY COFFEE • MATCHA • FRESH BAKERY • SLOW MOMENTS •
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
