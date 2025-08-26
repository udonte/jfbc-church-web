import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useMemo } from "react";
import { FiArrowRight, FiClock, FiMapPin } from "react-icons/fi";
import ActionButton from "../ui/ActionButton";

interface HeroSectionProps {
  backgroundImages: string[];
  subtext: string;
  title: string;
}

// Preload images for better performance
const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const HeroSection = ({
  backgroundImages,
  subtext,
  title,
}: HeroSectionProps) => {
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const verseControls = useAnimation();

  // Memoize Bible verses to prevent unnecessary re-renders
  const bibleVerses = useMemo(
    () => [
      "For God so loved the world that he gave his one and only Son - John 3:16",
      "I can do all things through Christ who strengthens me - Phil 4:13",
      "The Lord is my shepherd, I lack nothing - Psalm 23:1",
      "Trust in the LORD with all thine heart; and lean not unto thine own understanding. - Prov 3:5",
      "In all thy ways acknowledge him, and he shall direct thy paths. - Prov 3:6",
      "Not of works, lest any man should boast. - Eph 2:9",
    ],
    []
  );

  // Preload background images on component mount
  useEffect(() => {
    setIsMounted(true);
    preloadImages(backgroundImages);

    return () => setIsMounted(false);
  }, [backgroundImages]);

  // Optimized verse animation with useCallback
  const animateVerseChange = useCallback(async () => {
    if (!isMounted) return;

    try {
      await verseControls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 },
      });

      setCurrentVerseIndex((prev) => (prev + 1) % bibleVerses.length);

      await verseControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    } catch (error) {
      console.error("Verse animation error:", error);
    }
  }, [verseControls, bibleVerses.length, isMounted]);

  // Auto-rotate background images and verses with cleanup
  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(animateVerseChange, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [animateVerseChange, isMounted]);

  // Fallback for image loading errors
  const handleImageError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const target = e.target as HTMLImageElement;
      target.style.display = "none";
    },
    []
  );

  // Get current background image with error handling
  const currentBackground =
    backgroundImages[currentVerseIndex % backgroundImages.length] ||
    backgroundImages[0];

  return (
    <section className="relative h-screen w-full mt-22">
      {/* Background Image with Crossfade - Optimized */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentVerseIndex}
            src={currentBackground}
            alt="Worship service"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            loading="eager"
            onError={handleImageError}
            decoding="async"
          />
        </AnimatePresence>

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="w-full flex flex-col md:items-center">
            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white mb-8 uppercase tracking-wider"
            >
              {subtext}
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 titlecase font-serif italic md:text-center"
            >
              {title}
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
                page="/contact"
                icon={<FiArrowRight />}
                iconPosition="right"
                variant="secondary"
                fullWidth
                size="lg"
              >
                Join Us This Sunday
              </ActionButton>
              <ActionButton
                className="text-secondary/50"
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

            {/* Bible Verse Ticker - Optimized */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative h-12 overflow-hidden mt-8 max-w-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVerseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-white text-lg text-center"
                >
                  <span className="text-primary/80">—</span>{" "}
                  {bibleVerses[currentVerseIndex]}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
