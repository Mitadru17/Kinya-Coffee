import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./animations/ScrollReveal";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-4 md:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <ScrollReveal direction="up" className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"
              >
                <Star className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
              </motion.div>
              <div>
                <h3 className="font-bold text-xl">TOKYO SIP CLUB</h3>
                <p className="text-sm text-muted-foreground">Est. 2025</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Where traditional meets digital. A third-wave coffee experience 
              designed for the always-online generation.
            </p>
          </ScrollReveal>

          {/* Hours */}
          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem>
              <h4 className="font-bold mb-4 text-sm tracking-wider">HOURS</h4>
            </StaggerItem>
            <div className="space-y-2 text-sm text-muted-foreground">
              <StaggerItem><p>Mon - Fri: 8:00 - 22:00</p></StaggerItem>
              <StaggerItem><p>Sat - Sun: 9:00 - 23:00</p></StaggerItem>
              <StaggerItem>
                <motion.p
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-primary font-medium"
                >
                  Open Late Fridays
                </motion.p>
              </StaggerItem>
            </div>
          </StaggerContainer>

          {/* Location */}
          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem>
              <h4 className="font-bold mb-4 text-sm tracking-wider">LOCATION</h4>
            </StaggerItem>
            <div className="space-y-2 text-sm text-muted-foreground">
              <StaggerItem><p>2-21-1 Shibuya</p></StaggerItem>
              <StaggerItem><p>Shibuya City, Tokyo</p></StaggerItem>
              <StaggerItem><p>150-0002 Japan</p></StaggerItem>
            </div>
          </StaggerContainer>
        </div>

        {/* Bottom */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 Tokyo Sip Club. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Instagram", "TikTok", "X (Twitter)"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -2, color: "hsl(var(--foreground))" }}
                  className="text-sm text-muted-foreground transition-colors"
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
