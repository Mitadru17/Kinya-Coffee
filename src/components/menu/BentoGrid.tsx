import { motion } from "framer-motion";

const BentoGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <div className="mono-font text-xs text-chrome mb-2">// ARCHIVE .01</div>
          <h2 className="display-font text-4xl md:text-5xl">FEATURED BREWS</h2>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-0.5 bg-ink"
        >
          {/* Grid Item 1 - Cortado Image */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 bg-canvas p-8 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[400px] relative overflow-hidden group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full relative"
            >
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop"
                alt="Cortado"
                className="w-full h-full object-cover rounded-full brutalist-border-2"
              />
              <div className="absolute bottom-4 left-4 bg-ink text-canvas px-4 py-2 mono-font text-xs font-bold">
                01 // CORTADO
              </div>
            </motion.div>
          </motion.div>

          {/* Grid Item 2 - Cold Brew with Overlay */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 bg-ink relative min-h-[300px] md:min-h-[400px] overflow-hidden group"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=800&auto=format&fit=crop"
              alt="Yuzu Cold Brew"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="display-font text-[15vw] md:text-[8vw] text-canvas mix-blend-difference"
              >
                YUZU
              </motion.h3>
            </div>
          </motion.div>

          {/* Grid Item 3 - Spec Sheet */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 bg-canvas p-8 md:p-12 min-h-[300px] md:min-h-[400px] flex flex-col justify-between"
          >
            <div>
              <div className="mono-font text-xs text-chrome mb-6">// SPEC SHEET</div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 chrome-border border-b">
                  <span className="mono-font text-xs font-bold">ORIGIN</span>
                  <span className="mono-font text-sm">Chikmagalur, India</span>
                </div>
                <div className="flex justify-between items-center pb-3 chrome-border border-b">
                  <span className="mono-font text-xs font-bold">NOTES</span>
                  <span className="mono-font text-sm">Chocolate / Hazelnut</span>
                </div>
                <div className="flex justify-between items-center pb-3 chrome-border border-b">
                  <span className="mono-font text-xs font-bold">GRADE</span>
                  <span className="mono-font text-sm">Premium AA</span>
                </div>
                <div className="flex justify-between items-center pb-3 chrome-border border-b">
                  <span className="mono-font text-xs font-bold">ROAST</span>
                  <span className="mono-font text-sm">Medium Dark</span>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02, x: 3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-ink text-canvas px-6 py-4 mono-font font-bold text-sm w-full flex items-center justify-between"
            >
              <span>FULL MENU</span>
              <span>↗</span>
            </motion.button>
          </motion.div>

          {/* Grid Item 4 - Pour Over Wide Banner */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-12 bg-ink relative min-h-[400px] md:min-h-[500px] overflow-hidden"
          >
            <motion.div
              style={{ y: 0 }}
              whileInView={{ y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
                alt="Pour Over"
                className="w-full h-full object-cover opacity-60"
              />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="display-font text-[20vw] md:text-[15vw] text-canvas tracking-wider">
                POUR OVER
              </h3>
            </div>
            {/* Circular Stamp Badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#E3DDD1" strokeWidth="2" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#E3DDD1" strokeWidth="1" />
                <text
                  x="50"
                  y="50"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="mono-font text-[8px] fill-canvas font-bold"
                >
                  ROASTED
                </text>
                <text
                  x="50"
                  y="58"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="mono-font text-[8px] fill-canvas font-bold"
                >
                  TODAY
                </text>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
