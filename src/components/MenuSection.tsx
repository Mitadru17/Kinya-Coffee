import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./animations/ScrollReveal";

interface DrinkCardProps {
  number: string;
  subtitle: string;
  image: string;
  badge: string;
  badgeType: "bestseller" | "new" | "limited" | "refresh" | "sweet";
  name: string;
  price: string;
  description: string;
  caffeine: "HIGH" | "MED" | "LOW" | "NONE";
  vibeLevel: number;
  index: number;
}

const DrinkCard = ({
  number,
  subtitle,
  image,
  badge,
  badgeType,
  name,
  price,
  description,
  caffeine,
  vibeLevel,
  index,
}: DrinkCardProps) => {
  const badgeColors = {
    bestseller: "bg-primary text-primary-foreground",
    new: "bg-accent text-accent-foreground",
    limited: "bg-secondary text-secondary-foreground",
    refresh: "bg-mint text-forest",
    sweet: "bg-pink-200 text-pink-800",
  };

  const caffeineColors = {
    HIGH: "bg-red-100 text-red-700",
    MED: "bg-yellow-100 text-yellow-700",
    LOW: "bg-green-100 text-green-700",
    NONE: "bg-gray-100 text-gray-600",
  };

  // Alternate between dark green and light cream backgrounds
  const isDark = index % 2 === 0;
  const bgColor = isDark ? "bg-green-card" : "bg-light-green-card";
  const textColor = isDark ? "text-cream" : "text-forest";
  const mutedColor = isDark ? "text-cream/70" : "text-forest/60";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`rounded-2xl overflow-hidden min-w-[320px] md:min-w-[380px] border border-border ${bgColor} ${textColor}`}
    >
      {/* Header */}
      <div className="p-4 flex justify-between items-start">
        <div>
          <p className={`text-sm font-medium ${mutedColor}`}>{number}</p>
          <p className={`text-xs ${mutedColor}`}>{subtitle}</p>
        </div>
        <span className={`text-xs font-mono ${mutedColor}`}>JP-TYO-25</span>
      </div>

      {/* Image */}
      <motion.div
        className="relative mx-4 rounded-xl overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase ${badgeColors[badgeType]}`}
        >
          {badge}
        </motion.span>
      </motion.div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className={`text-xl font-display font-bold ${textColor}`}>{name}</h3>
          <span className={`text-lg font-bold ${textColor}`}>{price}</span>
        </div>
        <p className={`text-sm ${mutedColor}`}>{description}</p>

        {/* Metrics */}
        <div className={`grid grid-cols-2 gap-4 pt-4 border-t ${isDark ? 'border-cream/20' : 'border-forest/20'}`}>
          <div>
            <p className={`text-xs ${mutedColor} mb-1`}>Caffeine</p>
            <span className={`px-2 py-1 rounded text-xs font-bold ${caffeineColors[caffeine]}`}>
              {caffeine}
            </span>
          </div>
          <div>
            <p className={`text-xs ${mutedColor} mb-1`}>Vibe Level</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 + index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  className={`w-3 h-3 rounded-full ${i <= vibeLevel ? (isDark ? 'bg-cream' : 'bg-forest') : (isDark ? 'bg-cream/30' : 'bg-forest/30')}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const drinks = [
  {
    number: "No. 01",
    subtitle: "/// SMOOTH & CREAMY",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=800&auto=format&fit=crop",
    badge: "POPULAR",
    badgeType: "bestseller" as const,
    name: "SPANISH LATTE",
    price: "—",
    description: "Silky espresso with sweetened condensed milk, perfectly balanced and smooth.",
    caffeine: "HIGH" as const,
    vibeLevel: 5,
  },
  {
    number: "No. 02",
    subtitle: "/// CLASSIC FAVORITE",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop",
    badge: "CLASSIC",
    badgeType: "refresh" as const,
    name: "CAPPUCCINO",
    price: "—",
    description: "Traditional Italian cappuccino with rich espresso and velvety microfoam.",
    caffeine: "MED" as const,
    vibeLevel: 4,
  },
  {
    number: "No. 03",
    subtitle: "/// REFRESHING",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=800&auto=format&fit=crop",
    badge: "CHILLED",
    badgeType: "refresh" as const,
    name: "ICED CAPPUCCINO",
    price: "—",
    description: "Cold version of our classic cappuccino, perfect for warm days.",
    caffeine: "MED" as const,
    vibeLevel: 4,
  },
  {
    number: "No. 04",
    subtitle: "/// BOLD & CLEAN",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    badge: "STRONG",
    badgeType: "limited" as const,
    name: "AMERICANO",
    price: "—",
    description: "Pure espresso diluted with hot water for a clean, bold coffee experience.",
    caffeine: "HIGH" as const,
    vibeLevel: 3,
  },
  {
    number: "No. 05",
    subtitle: "/// ICED & STRONG",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
    badge: "CHILLED",
    badgeType: "refresh" as const,
    name: "ICED AMERICANO",
    price: "—",
    description: "Bold espresso over ice, crisp and refreshing.",
    caffeine: "HIGH" as const,
    vibeLevel: 3,
  },
  {
    number: "No. 06",
    subtitle: "/// SMALL & MIGHTY",
    image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=800&auto=format&fit=crop",
    badge: "INTENSE",
    badgeType: "limited" as const,
    name: "CORTADO",
    price: "—",
    description: "Equal parts espresso and steamed milk for a perfectly balanced shot.",
    caffeine: "HIGH" as const,
    vibeLevel: 4,
  },
  {
    number: "No. 07",
    subtitle: "/// FRUITY TWIST",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=800&auto=format&fit=crop",
    badge: "SPECIAL",
    badgeType: "new" as const,
    name: "CRANBERRY COLD BREW",
    price: "—",
    description: "Smooth cold brew with a hint of tart cranberry, lightly sweetened.",
    caffeine: "MED" as const,
    vibeLevel: 5,
  },
  {
    number: "No. 08",
    subtitle: "/// SPICED & REFRESHING",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=800&auto=format&fit=crop",
    badge: "UNIQUE",
    badgeType: "new" as const,
    name: "GINGER ALE COLD BREW",
    price: "—",
    description: "Cold brew coffee with ginger ale, creating a refreshing spiced flavor.",
    caffeine: "MED" as const,
    vibeLevel: 4,
  },
  {
    number: "No. 09",
    subtitle: "/// NUTTY & RICH",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop",
    badge: "SIGNATURE",
    badgeType: "bestseller" as const,
    name: "HAZELNUT MOUSSE COFFEE",
    price: "—",
    description: "Rich coffee topped with fluffy hazelnut mousse for a decadent treat.",
    caffeine: "MED" as const,
    vibeLevel: 5,
  },
  {
    number: "No. 10",
    subtitle: "/// GREEN & CALM",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop",
    badge: "BESTSELLER",
    badgeType: "bestseller" as const,
    name: "MATCHA LATTE",
    price: "—",
    description: "Ceremonial grade matcha whisked with steamed milk, smooth and earthy.",
    caffeine: "LOW" as const,
    vibeLevel: 5,
  },
  {
    number: "No. 11",
    subtitle: "/// SWEET & COZY",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=800&auto=format&fit=crop",
    badge: "COMFORT",
    badgeType: "sweet" as const,
    name: "HOT CHOCOLATE",
    price: "—",
    description: "Rich, creamy hot chocolate made with premium cocoa, perfect for comfort.",
    caffeine: "NONE" as const,
    vibeLevel: 5,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 overflow-hidden">
      {/* Section Header Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-b border-border py-3 mb-8 overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8 text-sm font-semibold tracking-widest">
              FRESH DAILY •
            </span>
          ))}
        </div>
      </motion.div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <StaggerContainer>
            <StaggerItem>
              <p className="text-sm text-muted-foreground mb-2">Coffee & Bakery · Made Fresh</p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-5xl md:text-6xl font-display font-black leading-tight">
                OUR<br />MENU
              </h2>
            </StaggerItem>
          </StaggerContainer>
          
          <ScrollReveal direction="right" delay={0.3}>
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <span className="text-sm">Scroll Down</span>
                <ArrowDown className="w-4 h-4" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card px-4 py-2 rounded-xl border border-border"
              >
                <p className="text-3xl font-bold">11</p>
                <p className="text-xs text-muted-foreground">Items Available</p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="overflow-x-auto pb-8 scrollbar-thin">
        <div className="flex gap-6 px-4 md:px-8 min-w-max">
          {drinks.map((drink, index) => (
            <DrinkCard key={index} {...drink} index={index} />
          ))}
        </div>
      </div>

      {/* View Full Menu */}
      <ScrollReveal className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-outline uppercase text-sm"
        >
          View Full Menu →
        </motion.button>
      </ScrollReveal>

      {/* Bakery Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24">
        <StaggerContainer>
          <StaggerItem>
            <p className="text-sm text-muted-foreground mb-2">Fresh Daily · Bakery</p>
          </StaggerItem>
          <StaggerItem>
            <h3 className="text-4xl md:text-5xl font-display font-black leading-tight mb-8">
              BAKERY & BITES
            </h3>
          </StaggerItem>
        </StaggerContainer>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Korean Bun", desc: "Soft and creamy", tag: "Popular" },
            { name: "Almond Croissant", desc: "Buttery and flaky", tag: "Classic" },
            { name: "Vegan Cookies", desc: "Plant-based goodness", tag: "Healthy" },
            { name: "Classic Bun", desc: "Freshly baked daily", tag: "Daily" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-card p-6 rounded-2xl border border-border"
            >
              <span className="text-xs font-bold text-forest bg-mint px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <h4 className="font-display font-bold text-xl mt-4 mb-2">{item.name}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
              <p className="text-sm font-bold mt-3 text-muted-foreground">Ask in store</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
