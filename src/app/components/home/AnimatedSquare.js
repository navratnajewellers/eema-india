"use client";

import { motion } from "framer-motion";

const AnimatedSquare = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white overflow-hidden">
      <motion.div
        className="w-24 h-24 bg-orange-600 flex flex-col items-center justify-center rotate-container"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.span
            key={i}
            className="text-white text-xl absolute"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 40, opacity: 1 }}
            transition={{
              repeat: Infinity,
              delay: i * 0.5,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedSquare;
