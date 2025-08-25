import HeroSection from "@/components/sections/HeroSection";
import EventsSection from "@/components/sections/Home/EventSection";
import LiveStreamSection from "@/components/sections/Home/LiveStreamSection";
import LocationContactStrip from "@/components/sections/Home/LocationContactStrip";
import SermonSpotlight from "@/components/sections/Home/SermonSpotlight";
import TestimonialsSection from "@/components/sections/Home/TestionialSection";
import WelcomeSection from "@/components/sections/Home/WelcomeSection";
import Image1 from "@/assets/images/Home/Hero/revd-odusan.png";
import Image3 from "@/assets/images/Home/Hero/worship-session.jpg";
import Image2 from "@/assets/images/Home/Hero/bible-praying.jpg";
import MonthlyBanner from "@/components/sections/MonthlyBanner";
import ChurchUnits from "@/components/sections/Home/ChurchUnits";
import { monthlyContent } from "@/constants/home";

const Home = () => {
  return (
    <main>
      <HeroSection
        backgroundImages={[Image1, Image2, Image3]}
        subtext="Welcome to Our Church"
        title="Experience God's Divine Presence"
      />
      <MonthlyBanner content={monthlyContent} />
      <WelcomeSection />
      <EventsSection />
      <SermonSpotlight />
      <ChurchUnits />
      <TestimonialsSection />
      <LiveStreamSection />
      <LocationContactStrip />
    </main>
  );
};

export default Home;
