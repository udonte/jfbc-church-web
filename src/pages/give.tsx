import HeroSection from "@/components/sections/HeroSection";
import OnlineGiving from "@/components/sections/Home/GivePage";
import Image1 from "@/assets/images/Home/Hero/revd-odusan.png";
import Image3 from "@/assets/images/Home/Hero/worship-session.jpg";
import Image2 from "@/assets/images/Home/Hero/bible-praying.jpg";
import SermonPoints from "@/components/sections/Sermons/SermonsPoint";

const Give = () => {
  return (
    <main>
      <HeroSection
        backgroundImages={[Image1, Image2, Image3]}
        subtext="Give to Our Church"
        title="Sow into our Kingdom Ministry"
      />
      <OnlineGiving />
      <SermonPoints />
    </main>
  );
};

export default Give;
