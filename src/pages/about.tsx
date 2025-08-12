import HeroSection from "@/components/sections/HeroSection";
import OurStory from "@/components/sections/About/OurStory";
import MissionBeliefsSection from "@/components/sections/About/MissionBeliefStory";
import LeadershipSection from "@/components/sections/About/LeadershipSection";
import WhatToExpect from "@/components/sections/About/WhatToExpect";
import Image1 from "@/assets/images/Hero/revd-odusan-bw.jpg";
import Image3 from "@/assets/images/Hero/worship-session.jpg";
import Image2 from "@/assets/images/Hero/bible-praying-bw.jpg";
import PhotoGallery from "@/components/sections/About/PhotoGallery";

const About = () => {
  return (
    <main>
      <HeroSection
        backgroundImages={[Image1, Image2, Image3]}
        subtext="Welcome to Our Church"
        title="Experience Faith Hope, and Love"
      />
      <OurStory />
      <MissionBeliefsSection />
      <LeadershipSection />
      <WhatToExpect />
      <PhotoGallery />
    </main>
  );
};

export default About;
