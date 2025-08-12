import { motion } from "framer-motion";
import { FiUsers, FiClock, FiCoffee, FiSmile } from "react-icons/fi";
import bibleBackground from "@assets/images/About/expect-background.jpg";

const WhatToExpect = () => {
  const features = [
    {
      icon: <FiClock size={32} />,
      title: "Service Format",
      description:
        "Our services typically last 90 minutes with vibrant worship (30 mins), biblical teaching (45 mins), and prayer/response time (15 mins).",
    },
    {
      icon: <FiUsers size={32} />,
      title: "Dress Code",
      description:
        "Come as you are! You'll see everything from jeans to traditional attire. We care more about you than what you wear.",
    },
    {
      icon: <FiSmile size={32} />,
      title: "Children's Ministry",
      description:
        "We have secure, engaging programs for kids ages 0-12 during all services. First-time check-in takes just 2 minutes at our welcome desk.",
    },
    {
      icon: <FiCoffee size={32} />,
      title: "After-Service Fellowship",
      description:
        "Join us for refreshments and conversation after each service - a great way to meet people in our church family.",
    },
  ];

  return (
    <section className="relative py-20">
      {/* Creative Background Image Treatment */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={bibleBackground}
          alt="Church sanctuary"
          className="w-full h-full object-cover grayscale"
          loading="lazy"
        />
        {/* Diagonal Cut Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white transform -skew-y-3 origin-bottom" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 lg:px-24">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Your first visit doesn't have to be intimidating
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6 h-full">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
