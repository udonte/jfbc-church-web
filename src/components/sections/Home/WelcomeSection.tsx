import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import PastorImage from "@/assets/images/pastor-portrait.jpg"; // Replace with your image path
import ActionButton from "@/components/ui/ActionButton";

const WelcomeSection = () => {
  return (
    <section className="relative py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Pastor's Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src={PastorImage}
                alt="Pastor John Doe"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-sm md:text-2xl font-bold">
                  Revd. Prof. Olumuyiwa Odusanya
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  General Overseer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold text-gray-900 mb-6">
              A Warm Welcome From Our Pastor
            </h2>

            <div className="space-y-4 text-lg text-gray-700 mb-8 text-center md:text-left">
              <p>
                Dear friend, it brings me great joy to welcome you to Jesus
                Family Bible Church, and our Year of Divine Presence. If you're
                exploring faith for the first time or looking for a spiritual
                home, we're honored to walk this journey with you.
              </p>
              <p>
                Our doors and hearts are open wide to you and your family. At
                JFBC, we believe in the transforming power of God's love and the
                beauty of authentic community.
              </p>
              <p>
                I invite you to join us this Sunday as we worship together and
                grow in faith.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <ActionButton
                page="/about"
                icon={<FiArrowRight />}
                iconPosition="right"
                variant="primary"
                size="lg"
              >
                See Our Vision
              </ActionButton>
              <ActionButton variant="outline" page="/sermons" size="lg">
                Watch a Sermon
              </ActionButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
      />
    </section>
  );
};

export default WelcomeSection;
