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

const Home = () => {
  return (
    <main>
      <HeroSection />
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
