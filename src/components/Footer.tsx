import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./animations/ScrollReveal";

const Footer = () => {
  return (
    <footer className="py-16 px-4 md:px-8 bg-forest text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <ScrollReveal direction="up" className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-cream rounded-full flex items-center justify-center"
              >
                <Star className="w-6 h-6 text-forest fill-forest" />
              </motion.div>
              <div>
                <h3 className="font-display font-black text-xl text-cream">KINYA COFFEE</h3>
                <p className="text-sm text-cream/70">JP Nagar, Bengaluru</p>
              </div>
            </div>
            <p className="text-cream/80 max-w-sm">
              A quiet neighborhood café inspired by Japanese minimalism. 
              Specialty coffee, matcha, and fresh bakery in a calm, intimate space.
            </p>
          </ScrollReveal>

          {/* Hours */}
          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem>
              <h4 className="font-bold mb-4 text-sm tracking-wider text-cream">HOURS</h4>
            </StaggerItem>
            <div className="space-y-2 text-sm text-cream/70">
              <StaggerItem><p>Daily: 8:00 AM - 9:00 PM</p></StaggerItem>
              <StaggerItem>
                <motion.p
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-mint font-medium"
                >
                  +91 96111 49286
                </motion.p>
              </StaggerItem>
            </div>
          </StaggerContainer>

          {/* Location */}
          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem>
              <h4 className="font-bold mb-4 text-sm tracking-wider text-cream">LOCATION</h4>
            </StaggerItem>
            <div className="space-y-2 text-sm text-cream/70">
              <StaggerItem><p>132, Dollars Colony</p></StaggerItem>
              <StaggerItem><p>7th Main, 16th Cross Rd</p></StaggerItem>
              <StaggerItem><p>JP Nagar 4th Phase</p></StaggerItem>
              <StaggerItem><p>Bengaluru, Karnataka 560078</p></StaggerItem>
            </div>
          </StaggerContainer>
        </div>

        {/* Bottom */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-cream/20">
            <p className="text-sm text-cream/70">
              © 2026 Kinya Coffee. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Instagram", "TikTok", "X (Twitter)"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -2, color: "hsl(var(--cream))" }}
                  className="text-sm text-cream/70 transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
