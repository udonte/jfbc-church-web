import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight, FiClock, FiMapPin } from "react-icons/fi";
import Image1 from "@/assets/images/woman-in-orange-coat-with-black-and-brown-scarf-5418305@2x.png";
import Image2 from "@/assets/images/terren-hurst-0Id3xr5_Slk-unsplash.jpg";
import Image3 from "@/assets/images/terren-hurst-Sghh8m8lM6Y-unsplash.jpg";
import ActionButton from "../ui/ActionButton";

const HeroSection = () => {
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const verseControls = useAnimation();

  // Sample worship background images
  const backgroundImages = [Image1, Image2, Image3];

  const bibleVerses = [
    "For God so loved the world that he gave his one and only Son - John 3:16",
    "I can do all things through Christ who strengthens me - Philippians 4:13",
    "The Lord is my shepherd, I lack nothing - Psalm 23:1",
  ];

  // Auto-rotate background images and verses
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerseIndex((prev) => (prev + 1) % bibleVerses.length);
      verseControls
        .start({
          opacity: 0,
          y: 20,
          transition: { duration: 0.3 },
        })
        .then(() => {
          verseControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          });
        });
    }, 8000);

    return () => clearInterval(interval);
  }, [bibleVerses.length, verseControls]);

  return (
    <section className="relative h-screen w-full mt-22">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0  z-0">
        <motion.img
          src={backgroundImages[0]}
          alt="Worship service"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0.8 }}
          animate={{
            opacity: 1,
            transition: { duration: 1.5 },
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white mb-8 uppercase tracking-wider"
            >
              Welcome to Our Church
            </motion.p>
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase"
            >
              Experience Faith Hope, and Love
            </motion.h1>

            {/* Service Times */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col md:flex-row md:items-center md:gap-4 mb-8"
            >
              <div className="flex items-center text-white">
                <FiClock className="mr-2 text-secondary" size={15} />
                <span className="font-medium">Sunday @9PM</span>
              </div>
              <div className="flex items-center text-white">
                <FiMapPin className="mr-2 text-secondary" size={15} />
                <span className="font-medium">
                  26, Omo-Olore Street, Shasha, Lagos
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 my-12"
            >
              <ActionButton
                page="/about"
                icon={<FiArrowRight />}
                iconPosition="right"
                variant="secondary"
                fullWidth
                size="lg"
              >
                Join Us This Sunday
              </ActionButton>
              <ActionButton
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@JesusFamilyBibleChurch/streams",
                    "_blank"
                  )
                }
                size="lg"
              >
                Watch Online
              </ActionButton>
            </motion.div>

            {/* Bible Verse Ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative h-12 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVerseIndex}
                  className="absolute left-0 right-0 lg:right-0  text-white text-lg"
                >
                  <span className="text-primary/80">—</span>{" "}
                  {bibleVerses[currentVerseIndex]}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
