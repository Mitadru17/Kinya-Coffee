import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "./Marquee";

const BrutalistHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen bg-canvas flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)'
        }}
      />
      <div className="absolute inset-0 bg-canvas/0" />
      
      {/* Rotating Badge - Top Right */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-24 right-8 md:top-32 md:right-16 w-24 h-24 md:w-32 md:h-32"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="mono-font text-[8px] font-bold fill-white">
            <textPath xlinkHref="#circlePath" startOffset="0%">
              EST. 2025 • JP NAGAR • KINYA • EST. 2025 • JP NAGAR • KINYA •
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-3 h-3 bg-white rounded-full"
          />
        </div>
      </motion.div>

      {/* Technical Decorations */}
      <div className="absolute top-24 left-8 mono-font text-xs text-white opacity-70">
        <div>VOL.01</div>
        <div className="mt-1">REF: 2025</div>
      </div>

      <div className="absolute bottom-32 right-8 mono-font text-xs text-white opacity-70 text-right">
        <div>SCROLL →</div>
        <div className="mt-1 border-t border-white pt-1">JP NAGAR</div>
      </div>

      {/* Main Title with Parallax */}
      <motion.div
        style={{ y }}
        className="text-center px-4 select-none relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.8 }
          }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="display-font text-[18vw] md:text-[15vw] lg:text-[12vw] leading-none tracking-wider text-white mb-4 md:mb-8"
          style={{
            textShadow: '4px 4px 0px rgba(217, 124, 91, 0.5), 8px 8px 20px rgba(0, 0, 0, 0.5)',
            WebkitTextStroke: '2px rgba(0, 0, 0, 0.1)'
          }}
        >
          KINYA
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.2, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.8, delay: 0.2 }
          }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="display-font text-[18vw] md:text-[15vw] lg:text-[12vw] leading-none tracking-wider text-white"
          style={{
            textShadow: '4px 4px 0px rgba(217, 124, 91, 0.5), 8px 8px 20px rgba(0, 0, 0, 0.5)',
            WebkitTextStroke: '2px rgba(0, 0, 0, 0.1)'
          }}
        >
          COFFEE
        </motion.h1>
      </motion.div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0">
        <Marquee 
          text="MINIMALIST • HANDCRAFTED • BENGALURU • SLOW BAR • VIBES •"
          speed={25}
          className="bg-ink text-canvas"
        />
      </div>
    </section>
  );
};

export default BrutalistHero;
