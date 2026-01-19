import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./animations/ScrollReveal";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-gradient-to-br from-forest/5 to-mint/10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 w-64 h-64 bg-mint/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-forest/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black leading-tight mb-4"
          >
            GET IN TOUCH
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Visit us or reach out. We'd love to hear from you!
          </motion.p>
        </ScrollReveal>

        {/* Contact Cards */}
        <StaggerContainer
          staggerDelay={0.15}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {/* Phone Card */}
          <StaggerItem>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-8 rounded-3xl border border-border shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-mint/20 rounded-2xl flex items-center justify-center mb-4"
              >
                <Phone className="w-7 h-7 text-mint" />
              </motion.div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <motion.a
                href="tel:+919611149286"
                whileHover={{ x: 3 }}
                className="text-forest font-medium hover:text-mint transition-colors"
              >
                +91 96111 49286
              </motion.a>
            </motion.div>
          </StaggerItem>

          {/* Location Card */}
          <StaggerItem>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-8 rounded-3xl border border-border shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-mint/20 rounded-2xl flex items-center justify-center mb-4"
              >
                <MapPin className="w-7 h-7 text-mint" />
              </motion.div>
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                132, Dollars Colony, JP Nagar 4th Phase, Bengaluru 560078
              </p>
            </motion.div>
          </StaggerItem>

          {/* Hours Card */}
          <StaggerItem>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-8 rounded-3xl border border-border shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-mint/20 rounded-2xl flex items-center justify-center mb-4"
              >
                <Clock className="w-7 h-7 text-mint" />
              </motion.div>
              <h3 className="font-bold text-lg mb-2">Hours</h3>
              <p className="text-sm text-muted-foreground">
                <span className="block font-medium text-foreground">Daily</span>
                8:00 AM - 9:00 PM
              </p>
            </motion.div>
          </StaggerItem>

          {/* Email Card */}
          <StaggerItem>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-8 rounded-3xl border border-border shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 bg-mint/20 rounded-2xl flex items-center justify-center mb-4"
              >
                <Mail className="w-7 h-7 text-mint" />
              </motion.div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <motion.a
                href="mailto:hello@kinyacoffee.com"
                whileHover={{ x: 3 }}
                className="text-forest font-medium hover:text-mint transition-colors text-sm"
              >
                hello@kinyacoffee.com
              </motion.a>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        {/* Map & CTA Section */}
        <ScrollReveal direction="up" delay={0.4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Map */}
              <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden">
                <motion.iframe
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.59!3d12.90!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kinya Coffee Location"
                />
              </div>

              {/* CTA */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                  Visit us for a warm cup & good conversation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're a quiet neighborhood spot perfect for focused work, casual meetups, or just enjoying quality coffee in peace.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-forest hover:bg-forest/90 text-cream font-bold rounded-full"
                    asChild
                  >
                    <motion.a
                      href="https://maps.google.com/?q=JP+Nagar+Bengaluru"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Directions
                    </motion.a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full font-bold"
                    asChild
                  >
                    <motion.a
                      href="tel:+919611149286"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Call Us
                    </motion.a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
