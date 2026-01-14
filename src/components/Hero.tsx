import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Japanese Text */}
      <p className="text-lg tracking-widest mb-2 font-medium">東京</p>
      
      {/* Floating Star */}
      <div className="absolute top-32 left-[15%] animate-float">
        <div className="w-6 h-6 bg-forest star-4" />
      </div>

      {/* Main Title */}
      <div className="text-center px-4">
        <h1 className="hero-title text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] text-primary">
          TOKYO
        </h1>
        <h1 className="hero-title text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] text-primary">
          SIP CLUB
        </h1>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-b border-border py-4 bg-background/50 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-8 text-sm font-semibold tracking-widest">
              FRESH BREWS • NO BAD VIBES • MATCHA HEAVEN • OPEN LATE •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
