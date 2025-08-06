import { motion } from "framer-motion";
import Logo from "@/assets/jfbc-logo.png";

const AnimatedLogo = () => {
  return (
    <div className="relative inline-block">
      {/* Logo Image */}
      <motion.img
        src={Logo}
        alt="JFBC Logo"
        className="relative z-10 w-[150px] md:w-[200px] p-1 object-contain"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        style={{ filter: "drop-shadow(0 0 5px rgba(255, 165, 0, 0.7))" }} // Fire glow effect
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("Logo hovered")}
        onHoverEnd={() => console.log("Logo hover ended")}
      />

      {/* fire particles  */}
      <>
        {/* top left and right */}
        <motion.div
          className="absolute top-0 left-0 w-2 h-2 bg-yellow-500 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, 20, 40],
            y: [0, -10, -20],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          style={{ filter: "blur(1px)" }}
        />
        <motion.div
          className="absolute top-0 right-0 w-2 h-2 bg-yellow-500 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, 20, 40],
            y: [0, -10, -20],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.7,
          }}
          style={{ filter: "blur(1px)" }}
        />
        {/* bottom right and left */}
        <motion.div
          className="absolute bottom-0 right-0 w-2 h-2 bg-orange-500 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, -20, -40],
            y: [0, 10, 20],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1,
          }}
          style={{ filter: "blur(1px)" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-2 h-2 bg-orange-500 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, -20, -40],
            y: [0, 10, 20],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1.2,
          }}
          style={{ filter: "blur(1px)" }}
        />
      </>
    </div>
  );
};

export default AnimatedLogo;
