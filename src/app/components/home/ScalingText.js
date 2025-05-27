"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScalingText({ text = "SCROLL TO SCALE" }) {
  const ref = useRef(null);

  // Get scroll progress from 0 to 1 (within the element)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // scroll starts when element enters and ends when it leaves
  });

  // Map scroll progress to scale values (from 1 to 2)
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.2]);

  return (
    <div className="">
      <div
        ref={ref}
        className="sticky top-1/2 flex justify-center items-center"
      >
        <motion.h1
          style={{ scale, opacity: scale }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold text-black"
        >
          {text}
        </motion.h1>
      </div>
    </div>
  );
}
