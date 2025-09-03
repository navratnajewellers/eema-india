"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScalingText({ text = "SCROLL TO SCALE" }) {
  const ref = useRef(null);

  // Get scroll progress (0 → 1 as element moves through viewport)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale up in the middle, then back down
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.8, 0.5]);

  // Opacity: fade in → fully visible → fade out
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div className="my-0.5 sm:my-20">
      <div
        ref={ref}
        className="sticky top-1/2 flex justify-center items-center"
      >
        <motion.h1
          style={{ scale, opacity }}
          transition={{ duration: 0.5 }}
          className=" text-2xl sm:text-4xl font-semibold text-black"
        >
          {text}
        </motion.h1>
      </div>
    </div>
  );
}
