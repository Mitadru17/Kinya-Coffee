const images = [
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
];

const GallerySection = () => {
  return (
    <section className="py-24 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <p className="text-sm text-muted-foreground mb-2">/// Community Feed</p>
        <h2 className="text-5xl md:text-6xl font-bold">THE HYPE IS REAL</h2>
      </div>

      {/* Image Marquee */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee">
          {[...images, ...images].map((src, index) => (
            <div key={index} className="min-w-[300px] md:min-w-[400px] h-[300px] md:h-[400px] mx-2">
              <img
                src={src}
                alt="Cafe vibe"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
