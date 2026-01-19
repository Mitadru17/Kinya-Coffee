import BrutalistNavbar from "@/components/BrutalistNavbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, ArrowDown, Users, Coffee, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const WorkshopsPage = () => {
  const workshops = [
    {
      id: 1,
      title: "LATTE ART 101",
      description: "Master the mechanics of micro-foam, Learn to pour hearts, tulips, and rosettas with precision. A hands-on session for beginners.",
      date: "FEB 14",
      time: "2:00 PM",
      duration: "2 HRS",
      price: "₹1,499",
      spots: 8,
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "MATCHA CEREMONY",
      description: "A deep dive into tea culture. Learn traditional whisking techniques, water temperature control, and ceremonial etiquette.",
      date: "FEB 21",
      time: "10:00 AM",
      duration: "3 HRS",
      price: "₹2,499",
      spots: 6,
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "SENSORY CUPPING",
      description: "Calibrate your palate. A guided blind tasting of 5 single-origin beans. Identify notes, acidity, body like a pro.",
      date: "MAR 02",
      time: "3:00 PM",
      duration: "1.5 HRS",
      price: "₹1,299",
      spots: 10,
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop",
    },
  ];

  const stats = [
    { number: "50+", label: "SESSIONS HOSTED" },
    { number: "400+", label: "GRADUATES" },
    { number: "4.9", label: "AVG RATING" },
  ];

  return (
    <div className="min-h-screen bg-canvas">
      <BrutalistNavbar />
      
      {/* Hero Section - Improved */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-canvas via-canvas to-ink/5" />
          
          {/* Floating Coffee Bean Pattern */}
          <motion.div 
            className="absolute top-20 right-20 w-64 h-64 rounded-full border-2 border-ink/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-40 left-10 w-32 h-32 rounded-full border-2 border-terracotta/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Giant Background Text */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[40vw] leading-none text-ink/[0.03] select-none pointer-events-none">
            学
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 border-2 border-ink px-4 py-2 mb-8"
              >
                <motion.div 
                  className="w-2 h-2 bg-terracotta rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-bold tracking-wider uppercase">
                  LEARN • CREATE • MASTER
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-[15vw] md:text-[10vw] lg:text-[100px] xl:text-[120px] leading-[0.85] tracking-[0.02em] mb-6"
              >
                <span className="block" style={{ 
                  WebkitTextStroke: '2px hsl(var(--ink))',
                  color: 'transparent'
                }}>
                  CULTURE
                </span>
                <span className="text-ink block">CLUB</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
              >
                Hands-on workshops where coffee lovers become coffee artisans. 
                <span className="text-terracotta font-bold"> Learn the craft.</span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Button
                  className="bg-ink hover:bg-terracotta text-canvas px-8 py-7 border-2 border-ink font-bold tracking-wider text-sm group"
                >
                  EXPLORE SESSIONS
                  <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-7 border-2 border-ink font-bold tracking-wider text-sm hover:bg-ink hover:text-canvas transition-colors"
                >
                  GIFT A WORKSHOP
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex gap-8 md:gap-12"
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="text-center md:text-left"
                  >
                    <div className="font-display text-3xl md:text-4xl text-terracotta">{stat.number}</div>
                    <div className="text-xs tracking-wider text-ink/60">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Main Image */}
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-ink" />
                <div className="absolute -inset-8 border border-ink/20" />
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop"
                  alt="Coffee Workshop"
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-terracotta text-canvas p-6 border-2 border-ink"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Coffee className="w-8 h-8 mb-2" />
                  <div className="font-display text-2xl">NEXT</div>
                  <div className="text-xs tracking-wider">FEB 14</div>
                </motion.div>

                {/* Accent Label */}
                <div className="absolute -top-4 -right-4 bg-ink text-canvas px-4 py-2 font-bold text-xs tracking-wider">
                  SOLD OUT
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-wider text-ink/60">SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 text-ink/60" />
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Strip - Inside Hero at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-ink text-canvas py-6 border-y-2 border-ink overflow-hidden z-20">
          <motion.div 
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className="flex items-center gap-3 text-sm tracking-wider">
                  <Sparkles className="w-4 h-4 text-terracotta" />
                  HANDS-ON LEARNING
                </span>
                <span className="flex items-center gap-3 text-sm tracking-wider">
                  <Users className="w-4 h-4 text-terracotta" />
                  SMALL GROUPS
                </span>
                <span className="flex items-center gap-3 text-sm tracking-wider">
                  <Coffee className="w-4 h-4 text-terracotta" />
                  EXPERT INSTRUCTORS
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 border-2 border-ink px-4 py-2 mb-6">
                <span className="text-xs font-bold tracking-wider uppercase">
                  /// INTERACTIVE SYLLABUS
                </span>
              </div>
              <h2 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-[0.02em] leading-[0.9]">
                UPCOMING
                <br />
                <span className="text-terracotta">SESSIONS</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-sm border-2 border-ink px-6 py-6 hover:bg-ink hover:text-canvas transition-colors"
              >
                VIEW ALL WORKSHOPS
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          {/* Workshop Cards */}
          <div className="space-y-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="border-2 border-ink overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(44,36,27,1)] transition-all duration-300 group"
                >
                  <div className="grid md:grid-cols-[400px_1fr] gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-ink">
                      <img
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Accent Line */}
                      <div className="absolute bottom-0 left-0 w-full h-2 bg-terracotta" />
                      {/* Workshop Number */}
                      <div className="absolute top-4 left-4 bg-ink text-canvas w-12 h-12 flex items-center justify-center font-display text-xl">
                        0{workshop.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-between bg-canvas">
                      <div>
                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-bold tracking-wider">
                          <div className="flex items-center gap-2 bg-ink/5 px-3 py-1">
                            <Calendar className="w-4 h-4" />
                            <span>{workshop.date}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-ink/5 px-3 py-1">
                            <Clock className="w-4 h-4" />
                            <span>{workshop.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-terracotta">
                            <Users className="w-4 h-4" />
                            <span>{workshop.spots} SPOTS LEFT</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 tracking-[0.02em] group-hover:text-terracotta transition-colors">
                          {workshop.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm leading-relaxed mb-6 max-w-2xl text-ink/70">
                          {workshop.description}
                        </p>

                        {/* Duration */}
                        <div className="inline-flex items-center gap-2 border border-ink px-3 py-1 text-xs font-bold">
                          <Clock className="w-3 h-3" />
                          <span>{workshop.duration}</span>
                        </div>
                      </div>

                      {/* Bottom Bar */}
                      <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-ink">
                        <span className="font-display text-3xl md:text-4xl tracking-[0.02em]">
                          {workshop.price}
                        </span>
                        <Button
                          className="bg-terracotta hover:bg-ink text-canvas px-8 py-6 border-2 border-ink font-bold tracking-wider group/btn"
                        >
                          RESERVE
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Host the Vibe Section - Full Screen Footer */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-ink text-canvas overflow-hidden">
        {/* Giant Background Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-[25vw] md:text-[20vw] leading-none text-ink/[0.15] tracking-[0.02em]"
            style={{ color: 'rgba(44, 36, 27, 0.3)' }}
          >
            BOOKING
          </motion.div>
        </div>

        {/* Rotating Badge */}
        <motion.div 
          className="absolute top-24 right-8 md:top-32 md:right-24 w-24 h-24 md:w-32 md:h-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Outer circle */}
            <circle cx="50" cy="50" r="48" fill="none" stroke="hsl(var(--canvas))" strokeWidth="1" opacity="0.3" />
            
            {/* Rotating text path */}
            <defs>
              <path id="textCircle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
            </defs>
            <text className="text-[8px] fill-canvas tracking-[0.3em] uppercase font-bold">
              <textPath href="#textCircle">
                • KINYA COFFEE • LET'S COLLAB • KINYA COFFEE •
              </textPath>
            </text>
            
            {/* Center icon */}
            <g transform="translate(38, 38)">
              <rect x="2" y="2" width="20" height="20" fill="none" stroke="hsl(var(--canvas))" strokeWidth="1.5" rx="2" />
              <path d="M7 12 L12 7 L17 12" fill="none" stroke="hsl(var(--canvas))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="7" x2="12" y2="17" stroke="hsl(var(--canvas))" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          </svg>
        </motion.div>

        {/* Main Content - Centered */}
        <div className="relative z-10 text-center px-6 py-24 max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 border border-canvas/30 rounded-full px-6 py-3 mb-12"
          >
            <Sparkles className="w-4 h-4 text-canvas/70" />
            <span className="text-sm tracking-[0.2em] uppercase text-canvas/70">
              Private Events & Catering
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[18vw] md:text-[12vw] lg:text-[150px] leading-[0.9] tracking-[0.02em] mb-4"
          >
            <span className="text-canvas block">HOST THE</span>
            <motion.span 
              className="block text-terracotta"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              VIBE.
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto text-canvas/60"
          >
            From latte art throwdowns to private tasting sessions. Bring the Kinya energy to your next event.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              className="bg-canvas hover:bg-terracotta text-ink hover:text-canvas px-12 py-8 rounded-full font-display text-xl tracking-wider group/cta transition-all duration-300 shadow-[0_0_40px_rgba(227,221,209,0.2)] hover:shadow-[0_0_60px_rgba(217,124,91,0.3)]"
            >
              GET IN TOUCH
              <ArrowRight className="w-6 h-6 ml-4 group-hover/cta:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Bottom Footer Strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-canvas/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-canvas/40">
              <div className="font-display text-lg text-canvas/60">KINYA</div>
              <div className="flex items-center gap-8">
                <a href="#" className="hover:text-terracotta transition-colors">Menu</a>
                <a href="#" className="hover:text-terracotta transition-colors">Workshops</a>
                <a href="#" className="hover:text-terracotta transition-colors">Contact</a>
              </div>
              <div>© 2026 KINYA COFFEE</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopsPage;
