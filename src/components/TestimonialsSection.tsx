import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./animations/ScrollReveal";

interface TestimonialProps {
  username: string;
  tag: string;
  quote: string;
}

const testimonials: TestimonialProps[] = [
  {
    username: "Local Guide",
    tag: "AMBIENCE",
    quote: "Cozy ambience and a lovely place to unwind. The matcha latte was good and the Korean bun was soft and creamy.",
  },
  {
    username: "Customer Review",
    tag: "VIBE",
    quote: "A tiny café tucked away in JP Nagar. Calm, minimal, and perfect for slow coffee moments.",
  },
  {
    username: "Regular Visitor",
    tag: "ATMOSPHERE",
    quote: "Loved the aesthetics and vibe. Great spot if you enjoy quiet cafés and specialty drinks.",
  },
  {
    username: "Coffee Enthusiast",
    tag: "QUALITY",
    quote: "Thoughtfully brewed coffee in a peaceful space. Kinya feels like a hidden gem in the neighborhood.",
  },
];

const TestimonialCard = ({ username, tag, quote }: TestimonialProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotate: 1 }}
      transition={{ duration: 0.3 }}
      className="testimonial-card p-6 rounded-2xl min-w-[300px] md:min-w-[350px]"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-bold text-sm">{username}</p>
          <p className="text-xs text-muted-foreground">Google Reviews</p>
        </div>
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="px-3 py-1 bg-card border border-border rounded-full text-xs font-bold"
        >
          {tag}
        </motion.span>
      </div>
      <p className="text-lg font-medium leading-relaxed">"{quote}"</p>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      {/* Header */}
      <StaggerContainer className="max-w-7xl mx-auto px-4 md:px-8 mb-12 text-center">
        <StaggerItem>
          <h2 className="text-5xl md:text-6xl font-display font-black leading-tight mb-4">
            WHAT OUR<br />CUSTOMERS SAY
          </h2>
        </StaggerItem>
        <StaggerItem>
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-3xl">⭐</span>
            <span className="font-bold">4.5 rating</span>
            <span className="text-muted-foreground">• Based on 449 Google reviews</span>
          </div>
        </StaggerItem>
      </StaggerContainer>

      {/* Scrolling Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="overflow-hidden"
      >
        <div className="flex animate-marquee">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="mx-3">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
