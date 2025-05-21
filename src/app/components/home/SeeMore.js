"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function SeeMore() {
  const arrowControls = useAnimation();

  useEffect(() => {
    arrowControls.start({
      x: ["-100%", "100%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      },
    });
  }, [arrowControls]);

  return (
    <div className="sticky top-5 h-[92vh] flex items-center justify-center bg-orange-600 text-white font-bold tracking-tight text-3xl md:text-7xl z-[4] mx-7 mb-10 px-7 rounded-[50px]">
      <a
        href="#"
        className="relative w-[650px] h-[120px] group cursor-pointer overflow-hidden flex items-center justify-center"
      >
        {/* Default text */}
        <div className="absolute transition-opacity duration-300 group-hover:opacity-0">
          <span>SEE MORE (…)</span>
        </div>

        {/* Hover text + arrow animation */}
        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 bg-white rounded-[50px] px-32 py-6">
          <div className="relative flex items-center justify-center w-full z-[7]">
            {/* Arrows (moving layer) */}
            <motion.div
              animate={arrowControls}
              className="absolute flex space-x-10 z-[8]"
            >
              {Array(20)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-orange-600 text-4xl">
                    <ChevronRight size={45} />
                  </span>
                ))}
            </motion.div>

            {/* Center text */}
            <span className="text-orange-600 bg-white relative z-10">
              VIEW ALL
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
