const AboutSection = () => {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image & Receipt */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
              alt="Cafe Vibe"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
              Shibuya, 2025
            </div>
          </div>

          {/* Receipt Card */}
          <div className="absolute -right-4 md:-right-8 top-1/4 receipt-card p-6 rounded-xl w-48 font-mono text-xs">
            <div className="flex justify-between mb-4">
              <span className="font-bold">ORDER #001</span>
              <span className="text-muted-foreground">12:45 PM</span>
            </div>
            <div className="space-y-2 border-t border-dashed border-border pt-4">
              <p>1x MATCHA LATTE</p>
              <p>1x GOOD VIBES</p>
              <p>1x LO-FI BEATS</p>
            </div>
            <div className="border-t border-dashed border-border mt-4 pt-4 flex justify-between font-bold">
              <span>TOTAL</span>
              <span>¥1,200</span>
            </div>
          </div>

          {/* Certified Fresh Badge */}
          <div className="absolute -left-4 bottom-20 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold tracking-wider">
            Certified Fresh
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            NOT JUST<br />COFFEE.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            We blend traditional Japanese precision with the chaotic energy of Tokyo streets. 
            Minimalist flavors, maximalist vibes. A space created for the digital nomads, 
            the dreamers, and the matcha obsessives.
          </p>

          {/* Vibe Check */}
          <div className="flex items-center gap-4">
            <div className="bg-card px-4 py-3 rounded-xl border border-border">
              <p className="text-xs text-muted-foreground mb-1">Vibe Check</p>
              <p className="font-bold text-lg">Immaculate</p>
            </div>
          </div>

          <button className="btn-outline uppercase text-sm">
            Read Manifesto
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
