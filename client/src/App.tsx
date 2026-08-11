import { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DripDivider from "@/components/DripDivider";
import Menu from "@/components/Menu";
import Locations from "@/components/Locations";
import Reviews from "@/components/Reviews";
import InstagramFeed from "@/components/InstagramFeed";
import OpenLate from "@/components/OpenLate";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    // Add dark class to html element for theme
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
      <div className="App bg-cocoa-900 text-cream">
        <Navbar />
        <main>
          <Hero />

          {/* Menu section with drip divider */}
          <div className="relative">
            <DripDivider />
            <Menu />
          </div>

          {/* Locations section with drip divider */}
          <div className="relative">
            <DripDivider />
            <Locations />
          </div>

          {/* Reviews section with drip divider */}
          <div className="relative">
            <DripDivider />
            <Reviews />
          </div>

          {/* Instagram Feed section with drip divider */}
          <div className="relative">
            <DripDivider />
            <InstagramFeed />
          </div>

          {/* Open Late section with drip divider */}
          <div className="relative">
            <DripDivider />
            <OpenLate />
          </div>

          {/* Footer with drip divider */}
          <div className="relative">
            <DripDivider />
            <Footer />
          </div>
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
