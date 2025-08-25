import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiArrowRight } from "react-icons/fi";
import { FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa";
import ActionButton from "@/components/ui/ActionButton";

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Come Worship With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We can't wait to welcome you to our church family
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <FiMapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-1">
                    Church Auditorium
                  </p>
                  <p className="text-gray-600">
                    26, Omo-Olore Street, Shasha, Lagos
                  </p>
                </div>
              </div>
              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 pt-2">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <FiPhone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Call Us</p>
                    <a
                      href="tel:+2348123456789"
                      className="text-gray-600 hover:text-primary transition-colors block"
                    >
                      +234 812 345 6789
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <FiMail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Email Us</p>
                    <a
                      href="mailto:jesusfamilybiblechurch@gmail.com"
                      className="text-gray-600 hover:text-primary transition-colors block"
                    >
                      jesusfamilybiblechurch@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6">
                <p className="text-gray-700 font-medium mb-4">
                  Connect With Us
                </p>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <FaYoutube />,
                      label: "Youtube",
                      link: "https://www.youtube.com/@JesusFamilyBibleChurch/streams",
                    },
                    {
                      icon: <FaInstagram />,
                      label: "Instagram",
                      link: "https://www.instagram.com/jesusfamilybiblechurch",
                    },
                    {
                      icon: <FaTelegram />,
                      label: "Telegram",
                      link: "https://t.me/jesusfamilybiblechurch",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link || "#"}
                      className="bg-gray-100 hover:bg-primary hover:text-white text-gray-700 p-3 rounded-full transition-colors"
                      whileHover={{ y: -3 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 h-full"
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              {/* Map with Overlay */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4532218389436!2d3.3026477999999897!3d6.590452199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91b5c14596d1%3A0xc2cc68623cecd57f!2s32%20Omo-Olore%20St%2C%20Egbeda%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1756135863369!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=""
              />

              {/* Map CTA Overlay */}
              <div className="absolute bottom-16 left-6 right-6 hidden md:block">
                <ActionButton
                  variant="primary"
                  size={`lg`}
                  onClick={() => {
                    window.open(
                      "https://www.google.com/maps/place/32+Omo-Olore+St,+Egbeda,+Lagos+102213,+Lagos/@6.5904575,3.3000729,17z/data=!4m6!3m5!1s0x103b91b5c14596d1:0xc2cc68623cecd57f!8m2!3d6.5904522!4d3.3026478!16s%2Fg%2F11h1kyngqy?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D",
                      "_blank"
                    );
                  }}
                  icon={<FiArrowRight />}
                  iconPosition="right"
                  className="w-full sm:w-auto shadow-xl"
                >
                  Get Turn-by-Turn Directions
                </ActionButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
