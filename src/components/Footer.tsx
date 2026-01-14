import { Star } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-4 md:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl">TOKYO SIP CLUB</h3>
                <p className="text-sm text-muted-foreground">Est. 2025</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Where traditional meets digital. A third-wave coffee experience 
              designed for the always-online generation.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-wider">HOURS</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Mon - Fri: 8:00 - 22:00</p>
              <p>Sat - Sun: 9:00 - 23:00</p>
              <p className="text-primary font-medium">Open Late Fridays</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-wider">LOCATION</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>2-21-1 Shibuya</p>
              <p>Shibuya City, Tokyo</p>
              <p>150-0002 Japan</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Tokyo Sip Club. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              TikTok
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
