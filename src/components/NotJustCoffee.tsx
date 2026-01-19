import { motion } from "framer-motion";
import { ScrollReveal } from "./animations/ScrollReveal";

const NotJustCoffee = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-canvas overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <ScrollReveal direction="left">
              {/* Main Image */}
              <div className="relative">
                <div className="rounded-[20px] overflow-hidden border-2 border-ink">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
                    alt="Kinya Interior"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                
                {/* Location Badge - Top Left */}
                <div className="absolute top-4 left-4 bg-ink text-canvas px-4 py-2 rounded-full">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
                    <span className="mono-font text-xs font-bold tracking-wider">KINYA COFFEE</span>
                  </div>
                </div>
              </div>

              {/* Ticket/Receipt Widget - Overlapping */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="absolute -bottom-8 -right-4 md:right-8 bg-canvas border-2 border-ink rounded-lg p-5 shadow-[8px_8px_0px_0px_rgba(44,36,27,1)] w-56"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-dashed border-ink/30 pb-2">
                    <span className="mono-font text-[10px] text-chrome">RECEIPT</span>
                    <span className="mono-font text-[10px] text-chrome">NO. 0042</span>
                  </div>
                  <div className="space-y-2 mono-font text-xs">
                    <div className="flex justify-between">
                      <span className="text-chrome">Location</span>
                      <span className="font-bold">JP Nagar, BLR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-chrome">Status</span>
                      <span className="font-bold text-terracotta">OPEN NOW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-chrome">Vibe</span>
                      <span className="font-bold">IMMACULATE</span>
                    </div>
                  </div>
                  <div className="border-t border-dashed border-ink/30 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="mono-font text-xs text-chrome">Est.</span>
                      <span className="display-font text-2xl">₹1,200</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 md:pl-8">
            <ScrollReveal direction="right" delay={0.2}>
              <h2 className="display-font text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[0.02em]">
                NOT<br />
                JUST<br />
                COFFEE.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <p className="text-base md:text-lg leading-relaxed max-w-lg text-ink/80">
                We blend traditional Japanese precision with the chaotic energy of Tokyo streets. 
                Minimalist flavors, maximalist vibes. A space created for the digital nomads, 
                the dreamers, and the matcha obsessives.
              </p>
            </ScrollReveal>

            {/* Progress Bars */}
            <ScrollReveal direction="right" delay={0.4}>
              <div className="space-y-4 max-w-md">
                <div className="space-y-2">
                  <div className="flex justify-between mono-font text-xs">
                    <span>COFFEE QUALITY</span>
                    <span>98%</span>
                  </div>
                  <div className="h-1 bg-ink/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-ink rounded-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between mono-font text-xs">
                    <span>VIBE CHECK</span>
                    <span>100%</span>
                  </div>
                  <div className="h-1 bg-ink/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="h-full bg-terracotta rounded-full"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal direction="right" delay={0.5}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-ink text-canvas rounded-full mono-font font-bold text-sm tracking-wider hover:bg-ink/90 transition-colors"
              >
                READ MANIFESTO
              </motion.button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotJustCoffee;
