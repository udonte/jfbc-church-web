import { motion } from "framer-motion";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import ActionButton from "@/components/ui/ActionButton";
// Sample event data - replace with API call in production
const upcomingEvents = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "2023-11-05",
    time: "9:00 AM",
    description: "Join us for powerful worship and biblical teaching",
    image: "/images/event-worship.jpg",
  },
  {
    id: 2,
    title: "Midweek Bible Study",
    date: "2023-11-08",
    time: "6:30 PM",
    description: "Deep dive into the Book of Romans",
    image: "/images/event-bible-study.jpg",
  },
  {
    id: 3,
    title: "Youth Night",
    date: "2023-11-10",
    time: "7:00 PM",
    description: "Games, worship and message for teens",
    image: "/images/event-youth.jpg",
  },
  {
    id: 4,
    title: "Community Outreach",
    date: "2023-11-12",
    time: "10:00 AM",
    description: "Serving our local neighborhood together",
    image: "/images/event-outreach.jpg",
  },
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

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
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for worship, fellowship, and community outreach
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {upcomingEvents.map((event, index) => (
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
                    <span className="font-medium">
                      {formatDate(event.date)} • {event.time}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <ActionButton
                  page={`/events/${event.id}`}
                  variant="outline"
                  size="sm"
                  fullWidth
                >
                  Learn More
                </ActionButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <ActionButton
            page="/events"
            icon={<FiArrowRight />}
            iconPosition="right"
            variant="primary"
          >
            View All Events
          </ActionButton>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
