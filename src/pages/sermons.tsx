import Image1 from "@/assets/images/Home/Hero/revd-odusan.png";
import Image3 from "@/assets/images/Home/Hero/worship-session.jpg";
import Image2 from "@/assets/images/Home/Hero/bible-praying.jpg";
import HeroSection from "@/components/sections/HeroSection";
import SermonPoints from "@/components/sections/Sermons/SermonsPoint";
import SermonsDisplay from "@/components/sections/Sermons/SermonsDisplay";
const Sermons = () => {
  return (
    <main>
      <HeroSection
        backgroundImages={[Image1, Image2, Image3]}
        subtext="Sermons In Our Church"
        title="Listen to Inspirational Messages"
      />
      <SermonPoints />
      <SermonsDisplay />
      <SermonPoints />
    </main>
  );
};

export default Sermons;
