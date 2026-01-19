import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { ArrowUp, Coffee } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SipClubSection = () => {
  const [email, setEmail] = useState("");
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0.85, 1], [100, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Email submitted:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      style={{ opacity, y }}
      className="relative min-h-screen bg-forest text-cream py-20 px-4 md:px-8 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-cream rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-cream rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Brand */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-6"
              >
                <Coffee className="w-8 h-8 text-forest" />
              </motion.div>
              <p className="text-sm leading-relaxed text-cream/80">
                Kinya Coffee is a neighborhood café brewing specialty coffee in a calm, 
                minimalist space. Good design, strong matcha, and quiet vibes.
              </p>
              <div className="flex gap-3">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-1.5 bg-cream/10 border border-cream/30 rounded-full text-xs font-bold"
                >
                  EST. 2025
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-1.5 bg-cream/10 border border-cream/30 rounded-full text-xs font-bold"
                >
                  JPM
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* Center - Main Content */}
          <div className="lg:col-span-6 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm tracking-widest text-cream/60 mb-4">
                YOU'VE REACHED THE BOTTOM
              </p>
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-display font-black leading-none mb-12 text-cream">
                SIP CLUB
              </h2>
            </motion.div>

            {/* Newsletter Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Input
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-16 bg-transparent border-2 border-cream/30 text-cream placeholder:text-cream/40 text-center text-lg font-bold rounded-full px-8 focus:border-mint transition-colors"
                />
                <Button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-mint hover:bg-mint/90 text-forest font-black rounded-full px-8 h-12"
                >
                  JOIN
                </Button>
              </div>
              <div className="flex items-center justify-between mt-4 px-4 text-xs text-cream/50">
                <span>*NO SPAM, ONLY VIBE</span>
                <span>SECURE CONNECTION</span>
              </div>
            </motion.form>

            {/* Footer Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 pt-12 border-t border-cream/20 mt-16"
            >
              {/* Sitemap */}
              <div>
                <h3 className="text-xs tracking-wider text-cream/50 mb-4">SITEMAP</h3>
                <div className="space-y-3">
                  {["Menu", "About", "Workshops", "Contact"].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      whileHover={{ x: 5, color: "hsl(var(--mint))" }}
                      className="block text-lg font-bold text-cream transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-xs tracking-wider text-cream/50 mb-4">CONNECT</h3>
                <div className="space-y-3">
                  {[
                    { icon: "📷", name: "Instagram", url: "#" },
                    { icon: "🎵", name: "TikTok", url: "#" },
                    { icon: "⚡", name: "Spotify", url: "#" },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5, color: "hsl(var(--mint))" }}
                      className="flex items-center gap-3 text-lg font-bold text-cream transition-colors"
                    >
                      <span>{social.icon}</span>
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Back to Top */}
          <div className="lg:col-span-3 flex lg:justify-end">
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-3 group"
            >
              <span className="text-xs tracking-wider text-cream/60 group-hover:text-mint transition-colors">
                BACK TO TOP
              </span>
              <motion.div
                whileHover={{ y: -3 }}
                className="w-14 h-14 border-2 border-cream/30 group-hover:border-mint rounded-full flex items-center justify-center transition-colors"
              >
                <ArrowUp className="w-6 h-6 text-cream group-hover:text-mint transition-colors" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SipClubSection;
