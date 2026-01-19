import BrutalistNavbar from "@/components/BrutalistNavbar";
import { Button } from "@/components/ui/button";
import { Mail, ArrowUpRight, MapPin, Copy } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for interactive background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Transform mouse position to rotation/movement
  const rotateX = useTransform(smoothMouseY, [0, 1], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@kinyacoffee.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Split text for letter animations
  const sayLetters = "SAY".split("");
  const helloLetters = "HELLO.".split("");

  return (
    <div className="h-screen overflow-hidden">
      <BrutalistNavbar />
      
      <div className="grid lg:grid-cols-2 h-[calc(100vh-5rem)] mt-20">
        {/* Left Side - Dark */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="bg-ink text-canvas relative flex flex-col justify-between px-8 md:px-16 lg:px-20 py-12 lg:py-16 overflow-hidden"
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(227,221,209,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(227,221,209,0.5) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          {/* Floating Accent Lines */}
          <motion.div 
            className="absolute top-[20%] left-[10%] w-20 h-[1px] bg-terracotta/40"
            animate={{ 
              x: [0, 20, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-[30%] right-[15%] w-32 h-[1px] bg-canvas/20"
            animate={{ 
              x: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute top-[60%] left-[5%] w-[1px] h-16 bg-canvas/10"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Interactive Rotating Element */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ rotateX, rotateY, perspective: 1000 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="w-[400px] h-[400px] border border-canvas/[0.06] rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] border border-canvas/[0.04] rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[160px] h-[160px] border border-terracotta/[0.08] rounded-full"
            />
          </motion.div>

          {/* Corner Accents */}
          <motion.div 
            className="absolute top-8 left-8 w-12 h-12 border-l border-t border-canvas/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          />
          <motion.div 
            className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-canvas/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          />

          {/* Main Content */}
          <div className="flex-1 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
              style={{ rotateX, rotateY, perspective: 1000 }}
            >
              <motion.p 
                className="mono-font text-xs tracking-[0.3em] text-canvas/40 mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="w-8 h-[1px] bg-terracotta/60" />
                GET IN TOUCH
              </motion.p>
              
              {/* Interactive SAY */}
              <div className="font-display text-[16vw] lg:text-[8vw] xl:text-[120px] leading-[0.85] tracking-tight flex">
                {sayLetters.map((letter, i) => (
                  <motion.span
                    key={`say-${i}`}
                    className="inline-block cursor-default"
                    onMouseEnter={() => setHoveredLetter(i)}
                    onMouseLeave={() => setHoveredLetter(null)}
                    animate={{
                      y: hoveredLetter === i ? -8 : 0,
                      color: hoveredLetter === i ? "rgb(217, 124, 91)" : "rgb(227, 221, 209)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              
              {/* Interactive HELLO. */}
              <div className="font-display text-[16vw] lg:text-[8vw] xl:text-[120px] leading-[0.85] tracking-tight flex">
                {helloLetters.map((letter, i) => (
                  <motion.span
                    key={`hello-${i}`}
                    className="inline-block cursor-default"
                    onMouseEnter={() => setHoveredLetter(i + 10)}
                    onMouseLeave={() => setHoveredLetter(null)}
                    animate={{
                      y: hoveredLetter === i + 10 ? -8 : 0,
                      color: hoveredLetter === i + 10 ? "rgb(217, 124, 91)" : "rgb(227, 221, 209)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Subtle underline accent */}
              <motion.div 
                className="mt-6 h-[2px] bg-gradient-to-r from-terracotta/60 via-terracotta/30 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
          </div>

          {/* Email Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative z-10"
          >
            <motion.button 
              onClick={copyEmail}
              className="group relative inline-flex items-center gap-3 border border-canvas/30 px-6 py-4 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button hover background */}
              <motion.div 
                className="absolute inset-0 bg-canvas"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <Copy className="w-4 h-4 relative z-10 group-hover:text-ink transition-colors" />
              <span className="font-bold tracking-wider text-sm relative z-10 group-hover:text-ink transition-colors">
                {copied ? "COPIED!" : "HELLO@KINYACOFFEE.COM"}
              </span>
              <motion.span 
                className="relative z-10 group-hover:text-ink transition-colors"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side - Light */}
        <div className="bg-canvas text-ink relative flex flex-col justify-between px-8 md:px-16 lg:px-20 py-12 lg:py-16 overflow-hidden">
          {/* Form Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <p className="mono-font text-xs tracking-wider text-ink/50 mb-4">CONTACT FORM</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.9]">
              THE
              <br />
              APPLICATION
            </h2>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b-2 border-ink/30 py-4 text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors mono-font text-sm tracking-wider"
              />
            </div>

            {/* Subject Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="YOUR VIBE (SUBJECT)"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-transparent border-b-2 border-ink/30 py-4 text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors mono-font text-sm tracking-wider"
              />
            </div>

            {/* Message Input */}
            <div className="relative">
              <textarea
                placeholder="THE TEA (MESSAGE)"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b-2 border-ink/30 py-4 text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink transition-colors mono-font text-sm tracking-wider resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="w-full md:w-auto bg-transparent border-2 border-ink text-ink hover:bg-ink hover:text-canvas px-12 py-8 font-display text-xl tracking-wider flex items-center justify-between gap-8 transition-all duration-300"
              >
                SEND IT
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.form>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-auto pt-8 border-t border-ink/20"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <p className="mono-font text-xs text-ink/50 tracking-wider mb-2">FIND US:</p>
                <p className="mono-font text-sm font-bold">JP NAGAR 4TH PHASE, BANGALORE</p>
                <p className="mono-font text-xs text-ink/60 mt-1">12.9052° N, 77.5957° E</p>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.google.com/maps/place/Kinya+Coffee/@12.9052155,77.5930848,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ink/60 hover:text-ink transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="mono-font text-xs tracking-wider">VIEW MAP</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
