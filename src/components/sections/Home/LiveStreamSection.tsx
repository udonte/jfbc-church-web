import ActionButton from "@/components/ui/ActionButton";
import { motion } from "framer-motion";
import { FiPlay, FiWifi, FiGlobe } from "react-icons/fi";

const LiveStreamSection = () => {
  //if day and is sunday 9:00 AM - 12:pm, set islive to true, else set isLive to false
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const isLive =
    currentDay === 0 &&
    currentHour === 9 &&
    currentMinutes >= 0 &&
    currentMinutes < 60;
  const nextService = "Next Sunday at 9:00 AM";

  const youtubeChannelUrl =
    "https://www.youtube.com/@JesusFamilyBibleChurch/streams";

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us Online
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our services live from anywhere in the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Live Stream Status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full mr-3 ${
                        isLive ? "bg-red-500 animate-pulse" : "bg-gray-500"
                      }`}
                    />
                    <span className="font-medium">
                      {isLive ? "LIVE NOW" : "OFFLINE"}
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {isLive ? "Streaming" : `Next: ${nextService}`}
                  </span>
                </div>

                <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden mb-6">
                  {isLive ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <FiPlay
                          size={48}
                          className="mx-auto mb-4 text-red-500"
                        />
                        <p className="text-xl">Service is live!</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-900">
                      <div className="text-center p-6">
                        <FiWifi
                          size={48}
                          className="mx-auto mb-4 text-gray-500"
                        />
                        <h3 className="text-xl font-bold mb-2">
                          Currently Offline
                        </h3>
                        <p className="text-gray-400">
                          Our next live stream will be {nextService}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <ActionButton
                  onClick={() => {
                    window.open(youtubeChannelUrl, "_blank");
                  }}
                  variant={isLive ? "secondary" : "outline"}
                  size="lg"
                  className="w-full"
                  icon={<FiPlay />}
                >
                  {isLive ? "Watch Now" : "Visit Channel"}
                </ActionButton>
              </div>
            </motion.div>

            {/* Why We Stream */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-start">
                <FiGlobe
                  className="flex-shrink-0 mt-1 mr-4 text-primary"
                  size={24}
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Reaching Beyond Our Walls
                  </h3>
                  <p className="text-gray-300">
                    We stream our services to connect with members who can't
                    attend in person, reach new visitors globally, and share
                    God's word with the digital generation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStreamSection;
