import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./animations/ScrollReveal";

const AboutSection = () => {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image & Receipt */}
        <ScrollReveal direction="left" className="relative">
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
              alt="Cafe Vibe"
              className="w-full h-[500px] object-cover"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
            >
              Shibuya, 2025
            </motion.div>
          </motion.div>

          {/* Receipt Card */}
          <ScrollReveal delay={0.3} direction="right" className="absolute -right-4 md:-right-8 top-1/4">
            <motion.div
              whileHover={{ rotate: 2, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="receipt-card p-6 rounded-xl w-48 font-mono text-xs"
            >
              <div className="flex justify-between mb-4">
                <span className="font-bold">ORDER #001</span>
                <span className="text-muted-foreground">12:45 PM</span>
              </div>
              <div className="space-y-2 border-t border-dashed border-border pt-4">
                <p>1x MATCHA LATTE</p>
                <p>1x GOOD VIBES</p>
                <p>1x LO-FI BEATS</p>
              </div>
              <div className="border-t border-dashed border-border mt-4 pt-4 flex justify-between font-bold">
                <span>TOTAL</span>
                <span>¥1,200</span>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Certified Fresh Badge */}
          <ScrollReveal delay={0.5} direction="up" className="absolute -left-4 bottom-20">
            <motion.div
              animate={{ rotate: [0, -3, 3, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold tracking-wider"
            >
              Certified Fresh
            </motion.div>
          </ScrollReveal>
        </ScrollReveal>

        {/* Right Side - Content */}
        <StaggerContainer className="space-y-8">
          <StaggerItem>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              NOT JUST<br />COFFEE.
            </h2>
          </StaggerItem>
          
          <StaggerItem>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              We blend traditional Japanese precision with the chaotic energy of Tokyo streets. 
              Minimalist flavors, maximalist vibes. A space created for the digital nomads, 
              the dreamers, and the matcha obsessives.
            </p>
          </StaggerItem>

          {/* Vibe Check */}
          <StaggerItem>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 w-fit"
            >
              <div className="bg-card px-4 py-3 rounded-xl border border-border">
                <p className="text-xs text-muted-foreground mb-1">Vibe Check</p>
                <p className="font-bold text-lg">Immaculate</p>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline uppercase text-sm"
            >
              Read Manifesto
            </motion.button>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default AboutSection;
