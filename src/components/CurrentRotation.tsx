import { motion } from "framer-motion";
import { ScrollReveal } from "./animations/ScrollReveal";
import { useState } from "react";

interface DrinkProps {
  name: string[];
  price: string;
  description: string;
  image: string;
  tag: string;
  vibeLevel: number;
  index: number;
  bgColor: string;
  accentColor: string;
  labelColor: string;
}

const drinks = [
  {
    name: ["DIRTY", "MATCHA"],
    price: "₹800",
    description: "Ceremonial grade matcha floating on oat milk with a double shot of espresso.",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop",
    tag: "HIGH",
    vibeLevel: 90,
    bgColor: "bg-ink",
    accentColor: "text-terracotta",
    labelColor: "bg-terracotta",
  },
  {
    name: ["YUZU", "TONIC"],
    price: "₹750",
    description: "Cold brew coffee mixed with sparkling yuzu citrus, mint, and a dash of honey.",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=800&auto=format&fit=crop",
    tag: "CAFFEINE FREE",
    vibeLevel: 75,
    bgColor: "bg-[#3d2b1f]",
    accentColor: "text-[#c9a87c]",
    labelColor: "bg-[#c9a87c]",
  },
  {
    name: ["STRAWBERRY", "CLOUD"],
    price: "₹900",
    description: "Fresh strawberry puree, Hokkaido milk, topped with thick vanilla cold foam.",
    image: "https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?q=80&w=800&auto=format&fit=crop",
    tag: "LOW",
    vibeLevel: 85,
    bgColor: "bg-[#4a3728]",
    accentColor: "text-[#e8b89d]",
    labelColor: "bg-[#e8b89d]",
  },
  {
    name: ["BLACK", "SESAME"],
    price: "₹850",
    description: "Roasted black sesame paste, charcoal bamboo, and steamed soy milk.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    tag: "NONE",
    vibeLevel: 70,
    bgColor: "bg-[#1a1410]",
    accentColor: "text-[#a08060]",
    labelColor: "bg-[#a08060]",
  },
  {
    name: ["BLUE PEA", "FOG"],
    price: "₹780",
    description: "Butterfly pea flower tea that changes color with lemon, topped with milk foam.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
    tag: "LOW",
    vibeLevel: 80,
    bgColor: "bg-[#5c4033]",
    accentColor: "text-[#daa06d]",
    labelColor: "bg-[#daa06d]",
  },
];

const DrinkCard = ({ name, price, description, image, tag, vibeLevel, index, bgColor, accentColor, labelColor }: DrinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="mb-10"
    >
      {/* Full Card Container */}
      <motion.div 
        className={`${bgColor} text-canvas rounded-[24px] overflow-hidden relative`}
        animate={{ 
          scale: isHovered ? 1.01 : 1,
          boxShadow: isHovered ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" : "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Gradient on Hover */}
        <motion.div 
          className="absolute inset-0 opacity-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Top Meta Row */}
        <div className="flex justify-between items-center px-6 py-4 mono-font text-[10px] md:text-xs text-canvas/50 tracking-wider border-b border-canvas/10 relative z-10">
          <div className="flex items-center gap-3">
            <motion.span 
              className={`w-2 h-2 rounded-full ${labelColor}`}
              animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
              transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
            />
            <span>NO. {String(index + 1).padStart(2, '0')} /// THE OG CLASSIC</span>
          </div>
          <span>|||| JP-BLR-25</span>
        </div>

        {/* Main Content */}
        <div className={`grid md:grid-cols-2 gap-0 ${isReversed ? 'md:flex md:flex-row-reverse' : ''}`}>
          {/* Image Side */}
          <div className={`p-6 ${isReversed ? '' : 'md:border-r'} ${isReversed ? 'md:border-l' : ''} border-canvas/10 relative`}>
            <motion.div 
              className="rounded-[16px] overflow-hidden border-2 border-canvas/20 aspect-[4/3] relative"
              animate={{ scale: isHovered ? 1.03 : 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={image}
                alt={name.join(' ')}
                className="w-full h-full object-cover"
              />
              {/* Image Overlay on Hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              {/* Quick Add Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ duration: 0.3 }}
                className={`absolute bottom-4 left-4 right-4 ${labelColor} text-ink py-3 rounded-full mono-font text-xs font-bold tracking-wider flex items-center justify-center gap-2`}
              >
                <span>+</span> QUICK ADD
              </motion.button>
            </motion.div>

            {/* Floating Badge */}
            <motion.div 
              className={`absolute top-10 ${isReversed ? 'left-10' : 'right-10'} ${labelColor} text-ink px-3 py-1 rounded-full mono-font text-[10px] font-bold`}
              animate={{ rotate: isHovered ? [0, -5, 5, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              ★ POPULAR
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="p-6 md:p-8 flex flex-col justify-center relative">
            {/* Drink Name */}
            <div className="mb-4">
              {name.map((line, i) => (
                <motion.h3
                  key={i}
                  initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="display-font text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[0.02em] text-canvas"
                >
                  {line}
                </motion.h3>
              ))}
            </div>
            
            {/* Price with animated underline */}
            <div className="mb-4 relative inline-block">
              <span className={`display-font text-3xl md:text-4xl ${accentColor}`}>{price}</span>
              <motion.div 
                className={`h-1 ${labelColor} rounded-full mt-1`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ maxWidth: "80px" }}
              />
            </div>
            
            {/* Description */}
            <p className="text-sm md:text-base text-canvas/70 leading-relaxed mb-6 max-w-md">
              {description}
            </p>
            
            {/* Info Boxes */}
            <div className="flex flex-wrap gap-3">
              {/* Caffeine Box */}
              <motion.div 
                className="border border-canvas/20 rounded-xl px-4 py-3 backdrop-blur-sm bg-white/5"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
              >
                <div className="mono-font text-[10px] text-canvas/40 tracking-wider mb-1">CAFFEINE</div>
                <div className={`mono-font text-sm font-bold ${accentColor}`}>{tag}</div>
              </motion.div>
              
              {/* Vibe Level Box */}
              <motion.div 
                className="border border-canvas/20 rounded-xl px-4 py-3 min-w-[140px] backdrop-blur-sm bg-white/5"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
              >
                <div className="mono-font text-[10px] text-canvas/40 tracking-wider mb-2">VIBE LEVEL</div>
                <div className="h-2 bg-canvas/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${vibeLevel}%` }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`h-full ${labelColor} rounded-full`}
                  />
                </div>
              </motion.div>

              {/* Prep Time Box */}
              <motion.div 
                className="border border-canvas/20 rounded-xl px-4 py-3 backdrop-blur-sm bg-white/5"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
              >
                <div className="mono-font text-[10px] text-canvas/40 tracking-wider mb-1">PREP TIME</div>
                <div className="mono-font text-sm font-bold text-canvas">3-5 MIN</div>
              </motion.div>
            </div>

            {/* Lightning Icon - Animated */}
            <motion.div 
              className={`absolute bottom-6 right-6 ${accentColor} opacity-30`}
              animate={{ 
                scale: isHovered ? [1, 1.2, 1] : 1,
                rotate: isHovered ? [0, 10, -10, 0] : 0 
              }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
              </svg>
            </motion.div>

            {/* Card Number Watermark */}
            <div className="absolute top-4 right-4 mono-font text-[80px] md:text-[100px] font-bold text-canvas/5 leading-none pointer-events-none">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CurrentRotation = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-canvas">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <div className="mono-font text-[10px] md:text-xs text-chrome mb-4 flex items-center gap-3 tracking-wider">
                  <span>01</span>
                  <span className="w-8 h-px bg-chrome" />
                  <span>ARCHIVE  V.02</span>
                </div>
                <h2 className="display-font text-6xl md:text-7xl lg:text-[8rem] leading-[0.85] tracking-[0.02em]">
                  CURRENT<br />ROTATION
                </h2>
              </div>
              
              <div className="text-left md:text-right">
                <div className="display-font text-5xl md:text-6xl">05</div>
                <div className="mono-font text-[10px] md:text-xs text-chrome tracking-wider">ITEMS IN MENU</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Drink Cards */}
        <div>
          {drinks.map((drink, index) => (
            <DrinkCard
              key={drink.name.join('-')}
              {...drink}
              index={index}
            />
          ))}
        </div>

        {/* Bottom border */}
        <div className="border-t-2 border-ink" />

        {/* View Full Archive Button */}
        <ScrollReveal direction="up" delay={0.2} className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#2C241B", color: "#E3DDD1" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 border-2 border-ink rounded-full mono-font font-bold text-sm tracking-wider transition-colors duration-300"
          >
            VIEW FULL ARCHIVE
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CurrentRotation;
