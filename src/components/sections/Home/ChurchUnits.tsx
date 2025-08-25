import { motion } from "framer-motion";
import { FaPray } from "react-icons/fa";
import UnitBg from "@assets/images/Home/unit-bg.jpg";
import {
  FiMusic,
  FiFilm,
  FiUsers,
  FiActivity,
  FiGlobe,
  FiUserCheck,
  FiHome,
} from "react-icons/fi";

const churchUnits = [
  {
    id: "choir",
    name: "Choir Unit",
    icon: <FiMusic size={32} />,
    description:
      "Join our vibrant worship team that leads the congregation in praise and worship",
    color: "bg-purple-600",
  },
  {
    id: "media",
    name: "Media Team",
    icon: <FiFilm size={32} />,
    description:
      "Technical team handling audio, video, lighting and live streaming",
    color: "bg-blue-600",
  },
  {
    id: "prayer",
    name: "Prayer Band",
    icon: <FaPray size={32} />,
    description:
      "Intercessory prayer warriors meeting regularly to pray for the church and community",
    color: "bg-red-600",
  },
  {
    id: "children",
    name: "Children Ministry",
    icon: <FiUsers size={32} />,
    description:
      "Teachers and volunteers nurturing kids and teens in God's Word",
    color: "bg-green-600",
  },
  {
    id: "youth",
    name: "Youth Group",
    icon: <FiActivity size={32} />,
    description:
      "Dynamic community for young adults with Bible studies and activities",
    color: "bg-yellow-600",
  },
  {
    id: "evangelism",
    name: "Evangelism Unit",
    icon: <FiGlobe size={32} />,
    description: "Outreach team sharing the Gospel in our community and beyond",
    color: "bg-orange-600",
  },
  {
    id: "ushering",
    name: "Ushering Unit",
    icon: <FiUserCheck size={32} />,
    description:
      "Friendly faces creating a welcoming atmosphere and assisting during services",
    color: "bg-indigo-600",
  },
  {
    id: "sanctuary",
    name: "Sanctuary Maintainers",
    icon: <FiHome size={32} />,
    description: "Dedicated team keeping our worship space clean and prepared",
    color: "bg-gray-600",
  },
];

const ChurchUnits = () => {
  return (
    <section className="relative py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80" />
        <img
          src={UnitBg}
          alt="Church community praying"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Church Units
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See where you can serve and grow in our church community. Not sure
            where you fit? We'll help you find your place!
          </p>
        </motion.div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {churchUnits.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col items-center text-center h-full">
                {/* Icon */}
                <div
                  className={`mb-4 p-4 rounded-full bg-opacity-10 ${unit.color} text-white animate-pulse transition-all duration-1000`}
                >
                  {unit.icon}
                </div>

                {/* Unit Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {unit.name}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {unit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Ministries CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Not sure where you fit? We'll help you find your place!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChurchUnits;
