import BrutalistNavbar from "@/components/BrutalistNavbar";
import BrutalistFooter from "@/components/BrutalistFooter";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation, ArrowRight, Coffee, Wifi, Car, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const LocationsPage = () => {
  const location = {
    id: 1,
    name: "JP NAGAR",
    tagline: "THE ORIGINAL",
    address: "132, Dollars Colony, 7th Main, 16th Cross Rd, behind MK Ahmed Bazar, JP Nagar 4th Phase, Bengaluru, Karnataka 560078",
    phone: "+91 98765 43210",
    hours: {
      weekday: "7:00 AM - 10:00 PM",
      weekend: "8:00 AM - 11:00 PM",
    },
    features: ["Free WiFi", "Outdoor Seating", "Parking"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop",
    googleMapsUrl: "https://www.google.com/maps/place/Kinya+Coffee/@12.9052155,77.5930848,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae150067522e0b:0x4fd6b452b3c945a0!8m2!3d12.9052155!4d77.5956651!16s%2Fg%2F11vqdx21y2",
    isFlagship: true,
  };

  const featureIcons: Record<string, React.ReactNode> = {
    "Free WiFi": <Wifi className="w-4 h-4" />,
    "Outdoor Seating": <Coffee className="w-4 h-4" />,
    "Parking": <Car className="w-4 h-4" />,
  };

  return (
    <div className="relative bg-ink">
      {/* Fixed Footer - Revealed on scroll */}
      <div className="fixed bottom-0 left-0 right-0 z-0">
        <BrutalistFooter />
      </div>

      {/* Main Content - Scrolls over footer */}
      <div className="relative z-10 bg-canvas rounded-b-[40px] md:rounded-b-[60px] overflow-hidden" style={{ marginBottom: '700px' }}>
        <BrutalistNavbar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-canvas via-canvas to-ink/5" />
            
            {/* Decorative circles */}
            <motion.div 
              className="absolute top-32 right-20 w-64 h-64 rounded-full border-2 border-ink/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute bottom-20 left-10 w-40 h-40 rounded-full border-2 border-terracotta/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Giant Background Text */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[35vw] leading-none text-ink/[0.03] select-none pointer-events-none">
              場
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-32 pb-32 relative z-10">
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
                FLAGSHIP STORE • BANGALORE
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
                FIND
              </span>
              <span className="text-ink block">YOUR SPOT</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Our flagship café in JP Nagar, where every cup tells a story. 
              <span className="text-terracotta font-bold"> Find your corner.</span>
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-8 md:gap-12"
            >
              {[
                { number: "01", label: "LOCATION" },
                { number: "500+", label: "DAILY CUPS" },
                { number: "7AM", label: "FIRST POUR" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="font-display text-3xl md:text-4xl text-terracotta">{stat.number}</div>
                  <div className="text-xs tracking-wider text-ink/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Marquee Strip - Inside Hero at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-ink text-canvas py-5 border-y-2 border-ink overflow-hidden z-20">
            <motion.div 
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-12">
                  <span className="flex items-center gap-3 text-sm tracking-wider">
                    <Sparkles className="w-4 h-4 text-terracotta" />
                    FLAGSHIP STORE
                  </span>
                  <span className="flex items-center gap-3 text-sm tracking-wider">
                    <MapPin className="w-4 h-4 text-terracotta" />
                    JP NAGAR
                  </span>
                  <span className="flex items-center gap-3 text-sm tracking-wider">
                    <Coffee className="w-4 h-4 text-terracotta" />
                    OPEN DAILY
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Location Card Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--ink)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
            >
              <div>
                <span className="mono-font text-xs tracking-wider text-ink/60">// OUR SPACE</span>
                <h2 className="font-display text-4xl md:text-6xl mt-2">THE FLAGSHIP</h2>
              </div>
              {/* Live Status */}
              <motion.div 
                className="flex items-center gap-3 bg-ink text-canvas px-4 py-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs font-bold tracking-wider">OPEN NOW • CLOSES 10 PM</span>
              </motion.div>
            </motion.div>

            {/* Location Card - Enhanced */}
            <div className="grid lg:grid-cols-5 gap-8 items-stretch">
              {/* Image Gallery - Takes 3 columns */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-3 relative"
              >
                {/* Main Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 border-2 border-ink" />
                  <div className="absolute -inset-8 border border-ink/20" />
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    src={location.image}
                    alt={location.name}
                    className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Flagship Badge */}
                  <div className="absolute top-4 right-4 bg-terracotta text-canvas px-4 py-2 font-bold text-xs tracking-wider">
                    FLAGSHIP STORE
                  </div>
                  
                  {/* Location Number */}
                  <div className="absolute -bottom-6 -left-6 bg-canvas border-2 border-ink p-4">
                    <span className="font-display text-4xl text-ink">01</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all duration-500 flex items-center justify-center">
                    <motion.div 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="bg-canvas text-ink px-6 py-3 font-bold text-sm tracking-wider cursor-pointer"
                        onClick={() => window.open(location.googleMapsUrl, '_blank')}
                      >
                        VIEW ON MAP →
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Image Stats Bar */}
                <motion.div 
                  className="mt-8 grid grid-cols-3 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {[
                    { label: "ESTABLISHED", value: "2024" },
                    { label: "SEATING", value: "45+" },
                    { label: "RATING", value: "4.8★" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 border border-ink/20 bg-canvas">
                      <div className="font-display text-2xl text-terracotta">{stat.value}</div>
                      <div className="mono-font text-xs text-ink/60 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Content Card - Takes 2 columns */}
              <motion.div 
                className="lg:col-span-2 bg-ink text-canvas p-8 md:p-10 relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-terracotta" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-ink" />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6">
                    <span className="mono-font text-xs tracking-wider text-terracotta">{location.tagline}</span>
                    <h3 className="font-display text-4xl md:text-5xl mt-2">{location.name}</h3>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-terracotta mt-1 flex-shrink-0" />
                    <p className="text-canvas/80 text-sm leading-relaxed">{location.address}</p>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3 mb-4">
                    <Clock className="w-5 h-5 text-terracotta mt-1 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="text-canvas/80">Mon-Fri: {location.hours.weekday}</p>
                      <p className="text-canvas/80">Sat-Sun: {location.hours.weekend}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 mb-6">
                    <Phone className="w-5 h-5 text-terracotta flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-canvas/80 text-sm hover:text-terracotta transition-colors">
                      {location.phone}
                    </a>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {location.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-2 px-3 py-2 border border-canvas/30 text-xs tracking-wider hover:bg-canvas/10 transition-colors"
                      >
                        {featureIcons[feature]}
                        {feature.toUpperCase()}
                      </span>
                    ))}
                  </div>

                  {/* CTA - Push to bottom */}
                  <div className="mt-auto space-y-3">
                    <Button
                      className="w-full bg-terracotta hover:bg-canvas hover:text-ink text-canvas py-6 border-2 border-terracotta font-bold tracking-wider text-sm group"
                      onClick={() => window.open(location.googleMapsUrl, '_blank')}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      GET DIRECTIONS
                    </Button>
                    <Button
                      className="w-full py-6 bg-transparent border-2 border-canvas text-canvas font-bold tracking-wider text-sm hover:bg-canvas hover:text-ink transition-colors"
                      onClick={() => window.location.href = '/menu'}
                    >
                      VIEW MENU
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 px-6 bg-ink/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="mono-font text-xs tracking-wider text-ink/60">// FIND US</span>
              <h2 className="font-display text-4xl md:text-5xl mt-2">ON THE MAP</h2>
            </motion.div>

            {/* Google Maps Embed - Kinya Coffee JP Nagar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-ink" />
              <div className="absolute -inset-8 border border-ink/20" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9!2d77.5930848!3d12.9052155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150067522e0b%3A0x4fd6b452b3c945a0!2sKinya%20Coffee!5e0!3m2!1sen!2sin!4v1705123456789!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Kinya Coffee JP Nagar Location"
              />
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Button
                className="bg-ink hover:bg-terracotta text-canvas px-8 py-6 border-2 border-ink font-bold tracking-wider text-sm"
                onClick={() => window.open(location.googleMapsUrl, '_blank')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                GET DIRECTIONS
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 border-2 border-ink font-bold tracking-wider text-sm hover:bg-ink hover:text-canvas transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText(location.address);
                }}
              >
                <MapPin className="w-4 h-4 mr-2" />
                COPY ADDRESS
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 50px,
                hsl(var(--ink)) 50px,
                hsl(var(--ink)) 51px
              )`
            }} />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="mono-font text-xs tracking-wider text-terracotta">// WE'RE WAITING</span>
              <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6">
                SEE YOU SOON
              </h2>
              <p className="text-lg text-ink/70 mb-8 max-w-lg mx-auto">
                Drop by for a cup, stay for the vibes. We can't wait to welcome you to the Kinya family.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="bg-ink hover:bg-terracotta text-canvas px-8 py-6 border-2 border-ink font-bold tracking-wider text-sm"
                >
                  CONTACT US
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 border-2 border-ink font-bold tracking-wider text-sm hover:bg-ink hover:text-canvas transition-colors"
                >
                  FRANCHISE INFO
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LocationsPage;
