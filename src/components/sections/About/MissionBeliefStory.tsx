import { motion } from "framer-motion";
import { FaPray } from "react-icons/fa";
import { FiBook, FiGlobe } from "react-icons/fi";
import { GrGrow } from "react-icons/gr";
import MissionBg from "@/assets/images/About/bible-canvas.jpg";

const MissionBeliefsSection = () => {
  return (
    <section className="relative py-28">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80" />
        <img
          src={MissionBg}
          alt="Church community praying"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-24">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Mission & Beliefs
            </h2>
            <p className="text-xl text-gray-200">
              The foundation of everything we do
            </p>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg italic mb-2">
              To raise a people who are mature and perfect in Christ, the hope
              of glory, through the ministry of the word and prayer.
            </p>
            <p className="text-gray-300">Colossians 1:27-28</p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {[
              {
                icon: <FiBook size={32} />,
                title: "Biblical Truth",
                description: "We stand firmly on God's Word as our foundation",
              },
              {
                icon: <FaPray size={32} />,
                title: "Prayer",
                description: "Communion with God fuels everything we do",
              },
              {
                icon: <FiGlobe size={32} />,
                title: "Community",
                description: "We grow better together than alone",
              },
              {
                icon: <GrGrow size={32} />,
                title: "Discipleship",
                description: "Helping believers mature in Christ",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center"
              >
                <div className="text-primary mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-gray-200">{value.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionBeliefsSection;
