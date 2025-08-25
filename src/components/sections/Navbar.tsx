import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ActionButton from "../ui/ActionButton";
import AnimatedLogo from "../ui/AnimatedLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navRef]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Sermons", path: "/sermons" },
    { name: "Join Us", path: "/contact" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 py-2 shadow-xl" : "bg-black/90 py-4"
      }`}
    >
      <div className="max-w-11/12 mx-auto px-4 sm:px-2 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center flex-1">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center pr-4 mr-6 border-r border-gray-700"
              aria-label="Home"
            >
              <AnimatedLogo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:space-x-8 ml-6">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className={`px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                      location.pathname === link.path
                        ? "text-primary font-bold border-b border-secondary/50"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <ActionButton
              page="/give "
              // className="ml-4"
            >
              GIVE
            </ActionButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-label="Main menu"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <FiX className="block h-6 w-6 text-white" />
              ) : (
                <FiMenu className="block h-6 w-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 overflow-hidden"
          >
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              className="px-2 pt-2 pb-4 space-y-2 sm:px-3"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={navItemVariants}>
                  <Link
                    to={link.path}
                    className={`block px-3 py-3 text-base font-medium uppercase w-fit  ${
                      location.pathname === link.path
                        ? "bg-primary/10 text-primary border-b-2  border-secondary"
                        : "text-gray-300 hover:bg-gray-800 hover:border-b-2 border-secondary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={navItemVariants} className="px-3 py-2">
                <ActionButton
                  page="/give"
                  // onClick={() => setIsOpen(false)}
                >
                  GIVE
                </ActionButton>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
