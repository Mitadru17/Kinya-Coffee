import { motion } from "framer-motion";

interface BakeryItem {
  name: string;
  price: string;
  soldOut?: boolean;
}

const bakeryItems: BakeryItem[] = [
  { name: "Basque Cheesecake", price: "₹350" },
  { name: "Strawberry Mochi", price: "₹200" },
  { name: "Black Sesame Cookie", price: "₹150" },
  { name: "Yuzu Tart", price: "₹280", soldOut: true },
  { name: "Matcha Financier", price: "₹180" },
  { name: "Chocolate Brownie", price: "₹220" },
];

const BakerySection = () => {
  return (
    <section className="py-20 px-6 bg-canvas">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="mono-font text-xs text-chrome mb-2">// ZONE D</div>
          <h2 className="display-font text-6xl md:text-8xl">SWEET TOOTH</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Polaroid Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-4 md:p-6 brutalist-border-2 shadow-[8px_8px_0px_0px_rgba(44,36,27,1)]">
              <div className="relative aspect-square overflow-hidden mb-4">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
                  alt="Basque Cheesecake"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="mono-font text-xs text-chrome">BAKED: 05:00 AM</div>
                <div className="mono-font text-xs font-bold">17.01.2026</div>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-terracotta" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-terracotta" />
          </motion.div>

          {/* Right Side - Receipt Menu */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="brutalist-border-2 bg-white p-8 md:p-12 relative"
          >
            {/* Receipt Header */}
            <div className="text-center mb-8 pb-6 border-b-2 border-dashed border-ink">
              <h3 className="display-font text-3xl md:text-4xl mb-2">DAILY BAKES</h3>
              <div className="mono-font text-xs text-chrome">FRESH FROM THE OVEN</div>
            </div>

            {/* Menu Items */}
            <div className="space-y-6 mb-8">
              {bakeryItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <span className={`mono-font text-sm ${item.soldOut ? "line-through opacity-50" : ""}`}>
                        {item.name}
                      </span>
                      <div className="h-px bg-ink/20 mt-2 border-b border-dashed border-ink/30" />
                    </div>
                    <span className={`mono-font text-sm font-bold whitespace-nowrap ${item.soldOut ? "opacity-50" : ""}`}>
                      {item.price}
                    </span>
                  </div>
                  {item.soldOut && (
                    <motion.div
                      initial={{ rotate: -5 }}
                      whileHover={{ rotate: -8, scale: 1.05 }}
                      className="absolute -right-2 -top-2 bg-terracotta text-ink px-3 py-1 mono-font text-xs font-bold brutalist-border transform rotate-[-5deg]"
                    >
                      SOLD OUT
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Receipt Footer */}
            <div className="border-t-2 border-dashed border-ink pt-6 space-y-4">
              <div className="flex justify-between mono-font text-xs">
                <span className="text-chrome">ALL PRICES INCLUDE TAX</span>
                <span className="font-bold">CASH / CARD / UPI</span>
              </div>
              
              {/* Barcode */}
              <div className="flex justify-center pt-4">
                <div className="flex gap-[2px] h-12">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-ink"
                      style={{
                        width: `${Math.random() * 3 + 1}px`,
                        opacity: Math.random() * 0.5 + 0.5,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center mono-font text-xs text-chrome">
                KCF-BAKERY-2026-017
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 bg-terracotta text-ink px-8 py-4 brutalist-border-2 mono-font font-bold text-sm hover:bg-ink hover:text-canvas transition-colors duration-300"
            >
              ORDER NOW
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BakerySection;
