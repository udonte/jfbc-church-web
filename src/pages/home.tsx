import HeroSection from "@/components/sections/HeroSection";
import EventsSection from "@/components/sections/Home/EventSection";
import LiveStreamSection from "@/components/sections/Home/LiveStreamSection";
import LocationContactStrip from "@/components/sections/Home/LocationContactStrip";
import NewVisitorFAQ from "@/components/sections/Home/NewVisitorFAQ";
import OnlineGiving from "@/components/sections/Home/OnlineGiving";
import SermonSpotlight from "@/components/sections/Home/SermonSpotlight";
import TestimonialsSection from "@/components/sections/Home/TestionialSection";
import UnitHighlights from "@/components/sections/Home/UnitHighlights";
import WelcomeSection from "@/components/sections/Home/WelcomeSection";
import Image1 from "@/assets/images/Hero/revd-odusan-bw.jpg";
import Image3 from "@/assets/images/Hero/worship-session.jpg";
import Image2 from "@/assets/images/Hero/bible-praying-bw.jpg";

const Home = () => {
  return (
    <main>
      <HeroSection
        backgroundImages={[Image1, Image2, Image3]}
        subtext="Welcome to Our Church"
        title="Experience Faith Hope, and Love"
      />
      <WelcomeSection />
      <EventsSection />
      <SermonSpotlight />
      <UnitHighlights />
      <TestimonialsSection />
      <OnlineGiving />
      <NewVisitorFAQ />
      <LiveStreamSection />
      <LocationContactStrip />
    </main>
  );
};

export default Home;
