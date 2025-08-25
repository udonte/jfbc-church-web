import { motion } from "framer-motion";
import IntroImage from "@assets/images/sermon points/semon-point24.jpg";

const AboutIntro = () => {
  const churchData = {
    founded: 1995,
    currentMembers: 500,
    communitiesServed: 4,
    outreachesPerYear: 5,
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Our Story of Faith
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to a vibrant community transforming lives
            through the power of God's love
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - History & Growth */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center md:text-left text-primary mb-6">
              Our Journey
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Founded in {churchData.founded}, Jesus Family Bible Church began
                as a small gathering of faithful believers in a living room.
                Through God's grace and the dedication of our members, we've
                grown into a vibrant community of over{" "}
                {churchData.currentMembers} believers.
              </p>
              <p>
                Our growth has been marked by countless miracles, transformed
                lives, and a unwavering commitment to spreading the Gospel. From
                our first crusade in 1998 to our recent community outreaches,
                we've seen God's hand move powerfully.
              </p>
              <p>
                We believe in raising mature Christians through discipleship,
                sound doctrine, and practical application of God's Word. Our
                focus is on building believers who are grounded in faith, active
                in service, and effective in ministry.
              </p>
              <p>
                Above all, we have impacted our local community with programs
                such as Back to School, Community Evangelism, Youth Empowerment,
                and Food & Clothing Drives in accordance God's provision for us
                all.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Meeting Times */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-2xl shadow-md md:shadow-transparent"
          >
            <img
              src={IntroImage}
              alt={` Church Theme`}
              className="w-full h-fit md:h-[500px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
