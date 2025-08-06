import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Instagram from "@/assets/socials/instagram.svg";
import Telegram from "@/assets/socials/telegram.svg";
import Youtube from "@/assets/socials/youtube.svg";
import { FiArrowUp } from "react-icons/fi";
import AnimatedLogo from "../ui/AnimatedLogo";

const Footer = () => {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Sermons", path: "/sermons" },
    { name: "Events", path: "/events" },
    { name: "Give", path: "/give" },
  ];

  const connectLinks = [
    { name: "Become a member", path: "/membership" },
    { name: "Prayer Request", path: "/prayer" },
    { name: "WhatsApp Community", path: "#" },
  ];

  const resourcesLinks = [
    {
      name: "Watch Online",
      path: "https://www.youtube.com/@JesusFamilyBibleChurch/streams",
    },
    { name: "Counselling", path: "/counselling" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      path: "https://www.instagram.com/jesusfamilybiblechurch",
      name: "Instagram",
    },
    {
      icon: Telegram,
      path: "https://t.me/jesusfamilybiblechurch",
      name: "Telegram",
    },
    {
      icon: Youtube,
      path: "https://www.youtube.com/@JesusFamilyBibleChurch/streams",
      name: "Youtube",
    },
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={footerVariants}
      className="bg-black text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12   ">
        {/* Logo and Description */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 text-center md:text-left"
        >
          <Link to="/" className="inline-block">
            <AnimatedLogo />
          </Link>
          <p className="text-gray-400 leading-relaxed">
            To raise a people who are mature and perfect in Christ, the hope of
            glory, through the ministry of the word and prayer. (Colossians
            1:27-28)
          </p>
          <p className="text-gray-500 text-sm">
            © JFBC {new Date().getFullYear()} | All rights reserved
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={itemVariants}
          className="space-y-4 text-center md:text-"
        >
          <h3 className="text-lg font-semibold uppercase tracking-wider text-primary">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-white uppercase text-sm tracking-wider transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Connect */}
        <motion.div
          variants={itemVariants}
          className="space-y-4 text-center md:text-left"
        >
          <h3 className="text-lg font-semibold uppercase tracking-wider text-primary">
            Connect
          </h3>
          <ul className="space-y-3 text-center md:text-left">
            {connectLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-white uppercase text-sm tracking-wider transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="pt-4">
            <h4 className="text-secondary/50 text-sm uppercase tracking-wider mb-3">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-900 p-2 rounded-full hover:bg-primary/50 transition-all"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="h-5 w-5 object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          variants={itemVariants}
          className="space-y-4 text-center md:text-left"
        >
          <h3 className="text-lg font-semibold uppercase tracking-wider text-primary">
            Resources
          </h3>
          <ul className="space-y-3">
            {resourcesLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-white uppercase text-sm tracking-wider transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="pt-6">
            <h4 className="text-secondary/50 text-sm uppercase tracking-wider mb-3">
              Service Times
            </h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Sunday: 9AM</li>
              <li>Monday: Prayer Meeting @ 6PM</li>
              <li>Wednesday: Counselling @ 5PM</li>
              <li>Thursday: 6PM</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Copyright Bottom */}
      <motion.div
        variants={itemVariants}
        className="max-w-7xl mx-auto mt-16 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm"
      >
        <p className="">
          Jesus Family Bible Church | 29, Omo-Olore Shasha, Lagos, Nigeria |
          (123) 456-7890
        </p>
        {/* <p className="mt-2">Designed with ❤️ by JFBC Media Team</p> */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 bg-primary p-1.5 md:p-3 rounded-full shadow-lg ${
            window.scrollY <= 10 ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <FiArrowUp className="text-white h-2 w-2 md:h-5 md:w-5" />
        </motion.button>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
