import { motion } from "framer-motion";
import { Instagram, Music2, Zap, ArrowUp } from "lucide-react";

const RevealFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ink text-canvas min-h-screen flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-[40px] border-canvas/20" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border-[30px] border-canvas/20" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full border-[20px] border-canvas/20" />
      </div>

      {/* Upper Section - Hero Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-16 relative z-10">
        {/* Tag Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mono-font text-xs md:text-sm tracking-[0.3em] text-canvas/70 mb-6"
        >
          YOU'VE REACHED THE BOTTOM
        </motion.p>

        {/* Large Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="display-font text-[18vw] md:text-[14vw] lg:text-[12vw] leading-[0.9] text-canvas text-center mb-12"
        >
          KINYA
        </motion.h2>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-xl"
        >
          <div className="flex gap-3 items-center">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 bg-transparent border-b-2 border-canvas/40 px-2 py-4 mono-font text-sm md:text-base text-canvas placeholder:text-canvas/50 focus:outline-none focus:border-canvas transition-colors tracking-wider"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-canvas text-ink mono-font font-bold text-sm rounded-full hover:bg-canvas/90 transition-colors"
            >
              JOIN
            </motion.button>
          </div>
          <div className="flex justify-between mt-3 mono-font text-[10px] text-canvas/50 tracking-wider">
            <span>*NO SPAM, ONLY VIBE</span>
            <span>SECURE CONNECTION</span>
          </div>
        </motion.div>
      </div>

      {/* Lower Section - Footer Info */}
      <div className="relative z-10 px-6 md:px-12 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Logo Badge */}
              <div className="w-14 h-14 rounded-full border-2 border-canvas flex items-center justify-center">
                <span className="display-font text-2xl">K</span>
              </div>
              
              <p className="text-sm leading-relaxed text-canvas/80 max-w-xs">
                Kinya Coffee is a digital experiment brewing culture, caffeine, and chaos. We believe in good design, strong coffee, and loud music.
              </p>
              
              <div className="flex gap-3">
                <span className="mono-font text-[10px] px-3 py-1 border border-canvas/40 rounded-full">
                  EST. 2025
                </span>
                <span className="mono-font text-[10px] px-3 py-1 border border-canvas/40 rounded-full">
                  BLR
                </span>
              </div>
            </motion.div>

            {/* Sitemap Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="mono-font text-xs tracking-wider text-canvas/50 mb-6">
                SITEMAP
              </h4>
              <div className="space-y-4">
                {[
                  { name: "Menu", href: "/menu" },
                  { name: "About", href: "#about" },
                  { name: "Workshops", href: "/workshops" },
                  { name: "Contact", href: "#contact" }
                ].map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ x: 8 }}
                    className="block text-lg md:text-xl font-medium hover:text-terracotta transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Connect Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="mono-font text-xs tracking-wider text-canvas/50 mb-6">
                CONNECT
              </h4>
              <div className="space-y-4">
                {[
                  { name: "Instagram", icon: Instagram, href: "#" },
                  { name: "TikTok", icon: Music2, href: "#" },
                  { name: "Spotify", icon: Zap, href: "#" }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-3 text-lg md:text-xl font-medium hover:text-terracotta transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-start md:items-end justify-end"
            >
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 group"
              >
                <span className="mono-font text-xs tracking-wider text-canvas/70 group-hover:text-canvas transition-colors">
                  BACK TO TOP
                </span>
                <div className="w-12 h-12 rounded-full border-2 border-canvas/40 flex items-center justify-center group-hover:border-canvas group-hover:bg-canvas/10 transition-all">
                  <ArrowUp className="w-5 h-5" />
                </div>
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-canvas/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="mono-font text-[10px] text-canvas/50 tracking-wider">
              © 2025 KINYA COFFEE. ALL RIGHTS RESERVED.
            </p>
            <p className="mono-font text-[10px] text-canvas/50 tracking-wider">
              MADE WITH ❤️ IN JP NAGAR, BENGALURU
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RevealFooter;
