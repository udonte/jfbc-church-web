import ActionButton from "@/components/ui/ActionButton";
import { motion } from "framer-motion";
import { FaPray } from "react-icons/fa";
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
      "Dynamic community for young adults (ages 13-25) with Bible studies and activities",
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
      "Friendly faces creating welcoming atmosphere and assisting during services",
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

const UnitHighlights = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Church Ministries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover where you can serve and grow in our church community
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
                  className={`mb-4 p-4 rounded-full bg-opacity-10 ${unit.color} text-white`}
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

                {/* Learn More Button */}
                <ActionButton
                  page={`/ministries/${unit.id}`}
                  variant="outline"
                  size="sm"
                  className="mt-auto"
                >
                  Learn More
                </ActionButton>
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
          <ActionButton page="/ministries" variant="primary">
            Explore All Ministries
          </ActionButton>
        </motion.div>
      </div>
    </section>
  );
};

export default UnitHighlights;
