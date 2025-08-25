import HeroSection from "@/components/sections/HeroSection";
import MissionBeliefsSection from "@/components/sections/About/MissionBeliefStory";
import LeadershipSection from "@/components/sections/About/LeadershipSection";
import Image1 from "@/assets/images/Home/Hero/revd-odusan.png";
import Image3 from "@/assets/images/Home/Hero/worship-session.jpg";
import Image2 from "@/assets/images/Home/Hero/bible-praying.jpg";
import PhotoGallery from "@/components/sections/About/PhotoGallery";
import AboutIntro from "@/components/sections/About/AboutIntro";

const About = () => {
  return (
    <main>
      <HeroSection
        backgroundImages={[Image1, Image2, Image3]}
        subtext="About Our Church"
        title="Raising Perfect Believers in Christ"
      />
      <AboutIntro />
      <MissionBeliefsSection />
      <LeadershipSection />
      <PhotoGallery />
    </main>
  );
};

export default About;
