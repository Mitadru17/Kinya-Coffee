import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
}

const Marquee = ({ text, speed = 20, className = "" }: MarqueeProps) => {
  return (
    <div className={`w-full overflow-hidden border-t-2 border-b-2 border-ink py-4 ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="inline-block px-8 mono-font font-bold text-sm tracking-wider uppercase"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
