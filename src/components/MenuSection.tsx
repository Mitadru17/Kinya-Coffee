import { ArrowDown } from "lucide-react";

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

  return (
    <div className="drink-card rounded-2xl overflow-hidden min-w-[320px] md:min-w-[380px]">
      {/* Header */}
      <div className="p-4 flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{number}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <span className="text-xs font-mono text-muted-foreground">JP-TYO-25</span>
      </div>

      {/* Image */}
      <div className="relative mx-4 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase ${badgeColors[badgeType]}`}>
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{name}</h3>
          <span className="text-lg font-bold">{price}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Caffeine</p>
            <span className={`px-2 py-1 rounded text-xs font-bold ${caffeineColors[caffeine]}`}>
              {caffeine}
            </span>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Vibe Level</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i <= vibeLevel ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const drinks: DrinkCardProps[] = [
  {
    number: "No. 01",
    subtitle: "/// THE OG CLASSIC",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop",
    badge: "BESTSELLER",
    badgeType: "bestseller",
    name: "DIRTY MATCHA",
    price: "¥800",
    description: "Ceremonial grade matcha floating on oat milk with a double shot of espresso.",
    caffeine: "HIGH",
    vibeLevel: 5,
  },
  {
    number: "No. 02",
    subtitle: "/// SPARKLING HIT",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
    badge: "REFRESH",
    badgeType: "refresh",
    name: "YUZU TONIC",
    price: "¥750",
    description: "Cold brew coffee mixed with sparkling yuzu citrus, mint, and a dash of honey.",
    caffeine: "MED",
    vibeLevel: 4,
  },
  {
    number: "No. 03",
    subtitle: "/// SWEET DREAMS",
    image: "https://images.unsplash.com/photo-1708762028605-ad25725e87c3?q=80&w=800&auto=format&fit=crop",
    badge: "SWEET",
    badgeType: "sweet",
    name: "STRAWBERRY CLOUD",
    price: "¥900",
    description: "Fresh strawberry puree, hokkaido milk, topped with thick matcha cold foam.",
    caffeine: "LOW",
    vibeLevel: 5,
  },
  {
    number: "No. 04",
    subtitle: "/// GOTH LATTE",
    image: "https://plus.unsplash.com/premium_photo-1688385990713-a4f5574d6c9b?q=80&w=800&auto=format&fit=crop",
    badge: "LIMITED",
    badgeType: "limited",
    name: "BLACK SESAME",
    price: "¥850",
    description: "Roasted black sesame paste, charcoal bamboo, and steamed soy milk.",
    caffeine: "NONE",
    vibeLevel: 4,
  },
  {
    number: "No. 05",
    subtitle: "/// MAGIC TEA",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800&auto=format&fit=crop",
    badge: "NEW",
    badgeType: "new",
    name: "BLUE PEA FOG",
    price: "¥780",
    description: "Butterfly pea flower tea that changes color with lemon, topped with vanilla foam.",
    caffeine: "LOW",
    vibeLevel: 5,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 overflow-hidden">
      {/* Section Header Marquee */}
      <div className="border-t border-b border-border py-3 mb-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8 text-sm font-semibold tracking-widest">
              FRESH DROPS •
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Vol. 2025 /// Curated List</p>
            <h2 className="text-5xl md:text-6xl font-bold">
              CURRENT<br />ROTATION
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm">Scroll Down</span>
              <ArrowDown className="w-4 h-4" />
            </div>
            <div className="bg-card px-4 py-2 rounded-xl border border-border">
              <p className="text-3xl font-bold">05</p>
              <p className="text-xs text-muted-foreground">Items in Stack</p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="overflow-x-auto pb-8 scrollbar-thin">
        <div className="flex gap-6 px-4 md:px-8 min-w-max">
          {drinks.map((drink, index) => (
            <DrinkCard key={index} {...drink} />
          ))}
        </div>
      </div>

      {/* View Full Archive */}
      <div className="text-center mt-12">
        <button className="btn-outline uppercase text-sm">
          View Full Archive ↗
        </button>
      </div>
    </section>
  );
};

export default MenuSection;
