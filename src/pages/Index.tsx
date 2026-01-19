import BrutalistNavbar from "@/components/BrutalistNavbar";
import BrutalistHero from "@/components/BrutalistHero";
import NotJustCoffee from "@/components/NotJustCoffee";
import CurrentRotation from "@/components/CurrentRotation";
import CommunityFeed from "@/components/CommunityFeed";
import RevealFooter from "@/components/RevealFooter";

const Index = () => {
  return (
    <div className="relative bg-ink">
      {/* Fixed Footer - Revealed on scroll */}
      <div className="fixed bottom-0 left-0 right-0 z-0">
        <RevealFooter />
      </div>

      {/* Main Content - Scrolls over footer with rounded corners */}
      <div className="relative z-10 bg-canvas rounded-b-[40px] md:rounded-b-[60px] text-ink" style={{ marginBottom: '100vh' }}>
        <BrutalistNavbar />
        <BrutalistHero />
        <NotJustCoffee />
        <CurrentRotation />
        <CommunityFeed />
        
        {/* Bottom Spacer */}
        <div className="h-20 bg-canvas" />
      </div>
    </div>
  );
};

export default Index;
