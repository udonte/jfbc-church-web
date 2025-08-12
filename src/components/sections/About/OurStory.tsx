import { motion } from "framer-motion";

const OurStorySection = () => {
  const milestones = [
    {
      year: "1985",
      title: "Humble Beginnings",
      description:
        "Founded by Pastor James Okonkwo with just 12 members meeting in a small rented space in Shasha. Our first service was held on Easter Sunday.",
    },
    {
      year: "1992",
      title: "First Permanent Home",
      description:
        "Purchased and renovated our current property on Omo-Omolore Street through member sacrifices and faithful giving.",
    },
    {
      year: "2001",
      title: "Community Outreach Launched",
      description:
        "Established the JFBC Food Pantry and began our annual Back-to-School program for local children.",
    },
    {
      year: "2010",
      title: "New Sanctuary Dedication",
      description:
        "Completed construction on our current 500-seat worship center after 3 years of prayer and labor.",
    },
    {
      year: "2020",
      title: "Digital Ministry Expansion",
      description:
        "Launched online streaming to serve our congregation during the pandemic, reaching members in 3 continents.",
    },
  ];

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
            Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey of faith, growth, and God's faithfulness
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              {/* Timeline connector */}
              {index !== milestones.length - 1 && (
                <div className="absolute left-5 top-10 h-full w-0.5 bg-gray-200" />
              )}

              <div className="flex items-start">
                {/* Year marker */}
                <div className="flex-shrink-0 bg-primary text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-6 mt-1">
                  {milestone.year}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founding Member Testimony */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-16 bg-gray-50 rounded-xl p-8"
        >
          <blockquote className="text-center">
            <p className="text-xl italic text-gray-700 mb-6">
              "I remember when we used to fold chairs after every service. Now
              seeing hundreds worship here each week - only God could do this!
              The same faithfulness that brought us through those early days
              still sustains us today."
            </p>
            <footer className="text-gray-600 font-medium">
              — Sister Adebayo, Founding Member since 1985
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection;
