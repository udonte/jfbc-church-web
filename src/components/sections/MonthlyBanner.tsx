import { motion } from "framer-motion";
import { useState } from "react";
import { FaCross } from "react-icons/fa";
import { RiSpeakAiFill } from "react-icons/ri";
import { WiDayRainWind } from "react-icons/wi";

interface MonthlyContent {
  month: string;
  year: number;
  bannerImage: string;
  confession: string;
  prosperityThoughts: string;
  soulWinningVerse: {
    text: string;
    reference: string;
  };
}

interface MonthlyBannerProps {
  content: MonthlyContent;
}

const MonthlyBanner = ({ content }: MonthlyBannerProps) => {
  const [currentTab, setCurrentTab] = useState<
    "confession" | "prosperity" | "soulWinning"
  >("confession");

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {content.month} {content.year} Focus
          </h2>
          <p className="text-gray-600 text-lg">
            Monthly Confessions and Declarations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-center">
          {/* Left: Banner Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-2xl shadow-md md:shadow-transparent"
          >
            <img
              src={content.bannerImage}
              alt={`${content.month} ${content.year} Church Theme`}
              className="w-full h-fit md:h-[500px] object-contain"
            />
          </motion.div>

          {/* Right: Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg"
          >
            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-6 border-b border-secondary/30">
              {[
                { id: "confession", label: "Monthly Confession" },
                { id: "prosperity", label: "Prosperity Thoughts" },
                { id: "soulWinning", label: "Soul Winning" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setCurrentTab(
                      tab.id as "confession" | "prosperity" | "soulWinning"
                    )
                  }
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors cursor-pointer ${
                    currentTab === tab.id
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="min-h-[500px] md:min-h-[400px] relative">
              {/* Confession Tab */}
              <motion.div
                key="confession"
                variants={tabVariants}
                initial="hidden"
                animate={currentTab === "confession" ? "visible" : "hidden"}
                className="absolute inset-0"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">
                      <RiSpeakAiFill />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4 animate-pulse transition duration-300">
                    Confession
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{content.confession}"
                  </p>
                </div>
              </motion.div>

              {/* Prosperity Thoughts Tab */}
              <motion.div
                key="prosperity"
                variants={tabVariants}
                initial="hidden"
                animate={currentTab === "prosperity" ? "visible" : "hidden"}
                className="absolute inset-0"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">
                      <WiDayRainWind />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4 animate-pulse transition duration-300">
                    Prosperity Thoughts
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {content.prosperityThoughts}
                  </p>
                </div>
              </motion.div>

              {/* Soul Winning Tab */}
              <motion.div
                key="soulWinning"
                variants={tabVariants}
                initial="hidden"
                animate={currentTab === "soulWinning" ? "visible" : "hidden"}
                className="absolute inset-0"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">
                      <FaCross />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4 animate-pulse transition duration-300">
                    Soul Winning
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed italic mb-4">
                    "{content.soulWinningVerse.text}"
                  </p>
                  <p className="text-secondary font-semibold">
                    {content.soulWinningVerse.reference}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyBanner;
