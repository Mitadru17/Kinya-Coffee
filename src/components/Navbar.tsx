import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-6 px-8">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        className="flex items-center gap-1 bg-cream-dark/80 backdrop-blur-sm rounded-full px-2 py-2 border border-border"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4, type: "spring", stiffness: 200 }}
          className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
        >
          <Star className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
        </motion.div>
        <div className="h-6 w-px bg-border mx-2" />
        {["MENU", "WORKSHOPS", "CONTACT"].map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            className="px-4 py-2 text-sm font-semibold tracking-wider hover:opacity-70 transition-opacity"
          >
            {item}
          </motion.a>
        ))}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
          className="w-8 h-8 rounded-full border border-border flex items-center justify-center ml-2"
        >
          <span className="text-xs">✿</span>
        </motion.div>
      </motion.div>

      {/* Rotating Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
        className="fixed top-4 right-4 w-24 h-24 animate-rotate-slow"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="circle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-[10px] fill-current font-semibold tracking-widest">
            <textPath href="#circle">
              EST. 2025 • GEN Z BREWS • TOKYO SIP CLUB •
            </textPath>
          </text>
          <Star className="w-4 h-4" x="46" y="46" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Star className="w-4 h-4 fill-current" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
