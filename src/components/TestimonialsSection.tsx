interface TestimonialProps {
  username: string;
  tag: string;
  quote: string;
}

const testimonials: TestimonialProps[] = [
  {
    username: "@matcha_queen",
    tag: "VIBE",
    quote: "This place is literally a pinterest board.",
  },
  {
    username: "@tokyo_drifter",
    tag: "TASTE",
    quote: "Best Dirty Matcha in Shibuya. No cap.",
  },
  {
    username: "@design_nerd",
    tag: "DESIGN",
    quote: "The typography here heals my soul.",
  },
  {
    username: "@caffeine_addict",
    tag: "MOOD",
    quote: "I live here now. Send rent money.",
  },
];

const TestimonialCard = ({ username, tag, quote }: TestimonialProps) => {
  return (
    <div className="testimonial-card p-6 rounded-2xl min-w-[300px] md:min-w-[350px]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-bold text-sm">{username}</p>
          <p className="text-xs text-muted-foreground">Verified Sipper</p>
        </div>
        <span className="px-3 py-1 bg-card border border-border rounded-full text-xs font-bold">
          {tag}
        </span>
      </div>
      <p className="text-lg font-medium leading-relaxed">"{quote}"</p>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      {/* Scrolling Testimonials */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="mx-3">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
