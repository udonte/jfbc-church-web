import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";
import SundayMeeting from "@assets/images/Home/meetings/sunday-service.jpg";
import Midweek from "@assets/images/Home/meetings/midweek.jpg";
import Counsel from "@assets/images/Home/meetings/counsel.jpg";
import Evangelism from "@assets/images/Home/meetings/evangelism.jpg";

// Sample event data - replace with API call in production
const servicesData = [
  {
    id: 1,
    title: "Sunday Worship Service",
    time: "Sun, 9:00 AM",
    description: "Join us for powerful worship and biblical teaching",
    image: SundayMeeting,
  },
  {
    id: 2,
    title: "Prayer & Counselling",
    time: "Wed, 5:00 PM",
    description: "Sharing bible based solutions to issues",
    image: Counsel,
  },
  {
    id: 3,
    title: "Midweek Bible Study",
    time: "Thur, 6:00 PM",
    description: "Deep dive into the bible",
    image: Midweek,
  },
  {
    id: 4,
    title: "Evangelism",
    time: "Sat, 11:00 AM",
    description: "Spreading the Gospel of our Lord Jesus",
    image: Evangelism,
  },
];

const EventsSection = () => {
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
            Meeting Times
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our atmosphere of worship and fellowship
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center text-white">
                    <FiCalendar className="mr-2" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
