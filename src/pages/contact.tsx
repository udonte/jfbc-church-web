import NewVisitorFAQ from "@/components/sections/Home/NewVisitorFAQ";
import Image1 from "@/assets/images/Home/Hero/revd-odusan.png";
import Image3 from "@/assets/images/Home/Hero/worship-session.jpg";
import Image2 from "@/assets/images/Home/Hero/bible-praying.jpg";
import HeroSection from "@/components/sections/HeroSection";
import ContactSection from "@/components/sections/ContactSection";

const Contact = () => {
  return (
    <main>
      <HeroSection
        backgroundImages={[Image1, Image2, Image3]}
        subtext="Join to Our Church"
        title="Come and See God's Goodness"
      />
      <ContactSection />
      <NewVisitorFAQ />
    </main>
  );
};

export default Contact;
