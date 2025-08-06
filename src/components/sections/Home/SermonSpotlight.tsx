import ActionButton from "@/components/ui/ActionButton";
import { motion } from "framer-motion";

// Sample Service data - replace with API call in production
const recentServices = [
  {
    id: "x8Y3p9q",
    youtubeId: "d4U78Z6O13Y",
  },
  {
    id: "y5Z2r7s",
    youtubeId: "gExAQKi1JZU",
  },
  {
    id: "z9W4t6v",
    youtubeId: "F-_bTfBYFYw",
  },
  {
    id: "z9W4t6v",
    youtubeId: "87AHqzKEuP4",
  },
];

const ServiceSpotlight = () => {
  const latestService = recentServices[0]; // Most recent Service

  return (
    <section className="py-20 bg-white">
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
            Service Spotlight
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Catch up on our latest Services
          </p>
        </motion.div>

        {/* Latest Service Featured */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start p-6 md:p-8">
            {/* YouTube Embed */}
            <div className="w-full  h-96 mb-6 md:mb-0">
              <iframe
                src={`https://www.youtube.com/embed/${latestService.youtubeId}?autoplay=0&rel=0`}
                title={latestService.id}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Recent Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recentServices.slice(1).map((Service, index) => (
            <motion.div
              key={Service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${Service.youtubeId}?autoplay=0&rel=0`}
                  title={Service.id}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Service Info */}
              <div className="p-6">
                <ActionButton
                  onClick={() =>
                    window.open(
                      `https://www.youtube.com/watch?v=${Service.youtubeId}`,
                      "_blank"
                    )
                  }
                  variant="outline"
                  size="sm"
                  fullWidth
                >
                  Watch Service on YouTube
                </ActionButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Library CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <ActionButton page="/Services" variant="primary" className="mx-auto">
            Explore Service Library
          </ActionButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSpotlight;
