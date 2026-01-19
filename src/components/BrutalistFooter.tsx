import { motion } from "framer-motion";
import { ScrollReveal } from "./animations/ScrollReveal";

const BrutalistFooter = () => {
  return (
    <footer className="relative py-24 px-6 md:px-12 bg-ink text-canvas overflow-hidden">
      {/* Giant Text Background */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden" style={{ height: '40vh' }}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="display-font text-[20vw] md:text-[25vw] leading-none whitespace-nowrap"
        >
          KINYA
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Newsletter */}
        <ScrollReveal direction="up" className="mb-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="display-font text-4xl md:text-5xl">
              JOIN THE CLUB
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="flex-1 bg-transparent border-b-3 border-canvas px-4 py-3 mono-font font-bold text-sm placeholder:text-industrial focus:outline-none focus:border-industrial transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-canvas text-ink mono-font font-bold text-sm"
              >
                JOIN
              </motion.button>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-12 pt-16 border-t-2 border-canvas">
          {/* Sitemap */}
          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <h4 className="mono-font font-bold text-xs mb-6 opacity-50">
                // SITEMAP
              </h4>
              <div className="space-y-3 mono-font text-sm">
                {["Menu", "About", "Workshops", "Contact"].map((link) => (
                  <motion.div
                    key={link}
                    whileHover={{ x: 5 }}
                    className="cursor-pointer"
                  >
                    <a href={`#${link.toLowerCase()}`}>[ {link} ]</a>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Socials */}
          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <h4 className="mono-font font-bold text-xs mb-6 opacity-50">
                // SOCIALS
              </h4>
              <div className="space-y-3 mono-font text-sm">
                {[
                  { name: "Instagram", handle: "@kinyacoffee" },
                  { name: "TikTok", handle: "@kinyacoffee" },
                  { name: "Spotify", handle: "Kinya Playlists" },
                ].map((social) => (
                  <motion.div
                    key={social.name}
                    whileHover={{ x: 5 }}
                    className="cursor-pointer"
                  >
                    <div>{social.name}</div>
                    <div className="text-xs opacity-50">{social.handle}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Legal */}
          <ScrollReveal direction="up" delay={0.3}>
            <div>
              <h4 className="mono-font font-bold text-xs mb-6 opacity-50">
                // LEGAL
              </h4>
              <div className="space-y-3 mono-font text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                  <motion.div
                    key={link}
                    whileHover={{ x: 5 }}
                    className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t-2 border-canvas flex flex-col md:flex-row justify-between items-center gap-4 mono-font text-xs opacity-50">
          <div>© 2025 KINYA COFFEE. ALL RIGHTS RESERVED.</div>
          <div>MADE WITH ❤️ IN JP NAGAR, BENGALURU</div>
        </div>
      </div>
    </footer>
  );
};

export default BrutalistFooter;
