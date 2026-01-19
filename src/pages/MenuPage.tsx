import { motion } from "framer-motion";
import BrutalistNavbar from "../components/BrutalistNavbar";
import MagicBento from "../components/menu/MagicBento";
import FlowingMenu from "../components/FlowingMenu";
import BakerySection from "../components/menu/BakerySection";
import BrutalistFooter from "../components/BrutalistFooter";
import { Ticket } from "lucide-react";

const MenuPage = () => {
  return (
    <div className="relative bg-ink">
      {/* Fixed Footer - Revealed on scroll */}
      <div className="fixed bottom-0 left-0 right-0 z-0">
        <BrutalistFooter />
      </div>

      {/* Main Content - Scrolls over footer with rounded corners */}
      <div className="relative z-10 bg-canvas rounded-b-[40px] md:rounded-b-[60px] overflow-hidden" style={{ marginBottom: '700px' }}>
        <BrutalistNavbar />

      {/* Zone A: Taste the Hype Header */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-canvas">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/menu-hero-bg.png)' }}
        />
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-canvas/70" />
        
        {/* Rotating Badge - Bottom Right */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-12 right-8 md:bottom-16 md:right-16 w-24 h-24 md:w-32 md:h-32 z-30"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="48" fill="#E3DDD1" stroke="#2C241B" strokeWidth="2" />
            <path
              id="circlePathMenu"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="mono-font text-[8px] font-bold fill-ink">
              <textPath xlinkHref="#circlePathMenu" startOffset="0%">
                KINYA COFFEE • JP NAGAR • 2025 • KINYA COFFEE •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="display-font text-2xl text-ink"
            >
              +
            </motion.div>
          </div>
        </motion.div>
        
        {/* Large X Background - More Prominent */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] z-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              stroke="#D6CFC0"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="100"
              y1="0"
              x2="0"
              y2="100"
              stroke="#D6CFC0"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Top Left Marquee Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-44 left-6 mono-font text-xs text-chrome tracking-widest hidden md:block z-20"
        >
          • SABRA RAJOL • NOTILIO STEILTO • DROPS • VIS •
        </motion.div>

        {/* Main Title with Star Decoration */}
        <div className="relative z-10 text-center max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-block mb-8"
          >
            <motion.h1
              className="display-font text-[18vw] md:text-[14vw] lg:text-[11vw] leading-[0.85] tracking-[0.02em] text-ink"
            >
              TASTE
            </motion.h1>
            {/* Star Decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-8 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-ink">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display-font text-[18vw] md:text-[14vw] lg:text-[11vw] leading-[0.85] tracking-[0.02em] text-ink"
          >
            THE HYPE
          </motion.h1>

          {/* Underline Decoration */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-ink mx-auto mt-4 max-w-[600px]"
          />
        </div>

        {/* Floating Ticket Badge - Styled like reference */}
        <motion.div
          initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 8, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ rotate: 4, scale: 1.05 }}
          className="absolute top-24 right-8 md:right-20 brutalist-border-2 bg-white p-6 shadow-[12px_12px_0px_0px_rgba(44,36,27,1)] z-20"
          style={{ transform: "rotate(8deg)" }}
        >
          <div className="text-center space-y-3">
            <div className="mono-font text-[10px] text-chrome tracking-wider border-b border-dashed border-ink pb-2">
              VOL. 25
            </div>
            <div className="display-font text-2xl leading-tight">
              FRESH<br/>MENU
            </div>
            <div className="mono-font text-xs font-bold tracking-wider border-t border-dashed border-ink pt-2">
              ADMIT ONE
            </div>
          </div>
        </motion.div>
      </section>

      {/* Zone B: Featured Brews - Magic Bento */}
      <section className="py-20 px-6">
        <div className="max-w-[1600px] mx-auto mb-8">
          <div className="mono-font text-xs text-chrome mb-2">// ARCHIVE .01</div>
          <h2 className="display-font text-4xl md:text-5xl">FEATURED BREWS</h2>
        </div>
        <MagicBento 
          spotlightRadius={200}
          enableStars={false}
          enableSpotlight={false}
          enableBorderGlow={false}
          particleCount={8}
          enableTilt={true}
          glowColor="255, 107, 53"
          clickEffect={true}
          enableMagnetism={true}
        />
      </section>

      {/* Zone C: Daily Fix - Flowing Menu */}
      <section className="py-20 px-6">
        <div className="max-w-[1600px] mx-auto mb-8">
          <div className="mono-font text-xs text-chrome mb-2">// DAILY FIX</div>
          <h2 className="display-font text-4xl md:text-5xl">YOUR VIBE, YOUR TIME</h2>
        </div>
        <div style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu 
            items={[
              { 
                link: '#', 
                text: 'Morning Rush', 
                image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop' 
              },
              { 
                link: '#', 
                text: 'Midday Grind', 
                image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop' 
              },
              { 
                link: '#', 
                text: 'Sunset Brew', 
                image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=800&auto=format&fit=crop' 
              },
              { 
                link: '#', 
                text: 'Late Night Fix', 
                image: 'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?q=80&w=800&auto=format&fit=crop' 
              }
            ]}
            speed={12}
            textColor="#2C241B"
            bgColor="#E3DDD1"
            marqueeBgColor="#D97C5B"
            marqueeTextColor="#E3DDD1"
            borderColor="#2C241B"
          />
        </div>
      </section>

      {/* Zone D: Bakery Section */}
      <BakerySection />
      
      {/* Bottom Spacer with curved edge */}
      <div className="h-20 bg-canvas" />
      </div>
    </div>
  );
};

export default MenuPage;
