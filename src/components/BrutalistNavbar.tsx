import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BrutalistNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    setLastScrollY(latest);
    setScrolled(latest > 50);
  });

  const navLinks = [
    { label: "MENU", path: "/menu" },
    { label: "WORKSHOPS", path: "/workshops" },
    { label: "LOCATION", path: "/location" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 h-20 border-b chrome-border transition-all duration-300 ${
          scrolled ? "bg-canvas/80 backdrop-blur-md" : "bg-canvas/60 backdrop-blur-sm"
        }`}
      >
        <div className="h-full max-w-[1800px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="display-font text-2xl md:text-3xl cursor-pointer text-ink"
            >
              KINYA
            </motion.div>
          </Link>

          {/* Center Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.path.startsWith("#") ? (
                <motion.a
                  key={link.label}
                  href={link.path}
                  className="mono-font text-sm font-bold relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">[ </span>
                  {link.label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity"> ]</span>
                </motion.a>
              ) : (
                <Link key={link.label} to={link.path}>
                  <motion.div
                    className="mono-font text-sm font-bold relative group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">[ </span>
                    {link.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity"> ]</span>
                  </motion.div>
                </Link>
              )
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-ink"
              />
              <span className="mono-font text-xs font-bold">OPEN NOW</span>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "hsl(23 24% 14%)", color: "hsl(16 61% 61%)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-terracotta text-canvas rounded-full mono-font text-sm font-bold transition-colors"
            >
              ORDER PICKUP
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-12 h-12 flex items-center justify-center border-2 border-ink"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          y: mobileOpen ? "0%" : "-100%",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 bg-ink z-40 flex flex-col items-center justify-center gap-12"
      >
        {navLinks.map((link, index) => (
          link.path.startsWith("#") ? (
            <motion.a
              key={link.label}
              href={link.path}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
              transition={{ delay: index * 0.1 }}
              className="display-font text-6xl text-canvas hover:text-terracotta transition-colors"
            >
              {link.label}
            </motion.a>
          ) : (
            <Link key={link.label} to={link.path} onClick={() => setMobileOpen(false)}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
                transition={{ delay: index * 0.1 }}
                className="display-font text-6xl text-canvas hover:text-terracotta transition-colors"
              >
                {link.label}
              </motion.div>
            </Link>
          )
        ))}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileOpen ? 1 : 0 }}
          transition={{ delay: 0.4 }}
          className="px-8 py-4 bg-terracotta text-ink rounded-full mono-font text-lg font-bold mt-8"
        >
          ORDER PICKUP
        </motion.button>
      </motion.div>
    </>
  );
};

export default BrutalistNavbar;
