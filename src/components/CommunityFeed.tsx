import { motion } from "framer-motion";
import { ScrollReveal } from "./animations/ScrollReveal";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  username: string;
  handle: string;
  avatar: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    username: "Priya K.",
    handle: "@coffee_addict",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    quote: "I live here now. Send rent money.",
    rating: 5,
  },
  {
    id: "2",
    username: "Arjun M.",
    handle: "@urbancha_gram",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    quote: "This place is literally a pinterest board.",
    rating: 5,
  },
  {
    id: "3",
    username: "Sneha R.",
    handle: "@design_drifter",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    quote: "Best Dirty Matcha in Bengaluru. No cap.",
    rating: 5,
  },
];

const CommunityFeed = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-canvas relative overflow-hidden">
      {/* Background Star Decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-12 left-8 md:left-16 w-16 h-16 md:w-24 md:h-24 opacity-20"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-ink">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <div className="mono-font text-xs text-chrome mb-4 tracking-widest">
              02 — COMMUNITY • 2025
            </div>
            <h2 className="display-font text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
              THE HYPE IS REAL
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonial Images Row */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex justify-center gap-4 md:gap-8 mb-12">
            {/* Left Image */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: -2 }}
              className="w-1/3 max-w-[300px]"
            >
              <div className="rounded-[20px] overflow-hidden border-2 border-ink">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop"
                  alt="Coffee moment"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </motion.div>

            {/* Center Image - Larger */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-1/3 max-w-[350px]"
            >
              <div className="rounded-[20px] overflow-hidden border-2 border-ink">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop"
                  alt="Cafe interior"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 2 }}
              className="w-1/3 max-w-[300px]"
            >
              <div className="rounded-[20px] overflow-hidden border-2 border-ink">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop"
                  alt="Latte art"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Testimonial Cards */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center space-y-4"
              >
                {/* Avatar */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-ink">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.username}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Verified Badge */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-ink rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-canvas" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Handle */}
                <div className="mono-font text-xs text-chrome">{testimonial.handle}</div>

                {/* Quote */}
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-ink text-ink" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CommunityFeed;
