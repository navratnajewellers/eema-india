"use client";

import { motion } from "framer-motion";
import { Image } from "rsuite";

export default function EemaAwardsShortlistedApplication({ setActiveSection }) {
  return (
    <motion.section
      id="shortlisted-applicants"
      className=" bg-white "
      onViewportEnter={() => setActiveSection("shortlisted-applicants")}
    >
      <Image
        src="/images/others/shortlisted-applicants.jpg"
        alt="award-process-entry-fees"
      />

      <div className=" w-full min-h-64 flex justify-center items-center ">
        <h4 className=" text-4xl font-bold leading-relaxed text-black animate-pulse ">
          Coming Soon
        </h4>
      </div>

      <section className="relative bg-gradient-to-b from-white to-orange-50 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
          {/* Animated logos */}
          <div className="flex items-center justify-center space-x-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lZGFsLWljb24gbHVjaWRlLW1lZGFsIj48cGF0aCBkPSJNNy4yMSAxNSAyLjY2IDcuMTRhMiAyIDAgMCAxIC4xMy0yLjJMNC40IDIuOEEyIDIgMCAwIDEgNiAyaDEyYTIgMiAwIDAgMSAxLjYuOGwxLjYgMi4xNGEyIDIgMCAwIDEgLjE0IDIuMkwxNi43OSAxNSIvPjxwYXRoIGQ9Ik0xMSAxMiA1LjEyIDIuMiIvPjxwYXRoIGQ9Im0xMyAxMiA1Ljg4LTkuOCIvPjxwYXRoIGQ9Ik04IDdoOCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTciIHI9IjUiLz48cGF0aCBkPSJNMTIgMTh2LTJoLS41Ii8+PC9zdmc+"
                alt="EEMAX Left"
                width={90}
                height={90}
                className="rotate-[-25deg] hidden sm:block"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="max-w-3xl"
            >
              <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
                Evaluated by an independent and diverse jury panel comprising of
                thought-leaders from across the globe,{" "}
                <span className="text-orange-600 font-bold">
                  EEMAX Global Awards will be held at EEMAGINE 2025 from
                  1st–3rd, August 2025,
                </span>{" "}
                in Udaipur to celebrate and recognise excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lZGFsLWljb24gbHVjaWRlLW1lZGFsIj48cGF0aCBkPSJNNy4yMSAxNSAyLjY2IDcuMTRhMiAyIDAgMCAxIC4xMy0yLjJMNC40IDIuOEEyIDIgMCAwIDEgNiAyaDEyYTIgMiAwIDAgMSAxLjYuOGwxLjYgMi4xNGEyIDIgMCAwIDEgLjE0IDIuMkwxNi43OSAxNSIvPjxwYXRoIGQ9Ik0xMSAxMiA1LjEyIDIuMiIvPjxwYXRoIGQ9Im0xMyAxMiA1Ljg4LTkuOCIvPjxwYXRoIGQ9Ik04IDdoOCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTciIHI9IjUiLz48cGF0aCBkPSJNMTIgMTh2LTJoLS41Ii8+PC9zdmc+"
                alt="EEMAX Right"
                width={90}
                height={90}
                className="rotate-[25deg] hidden sm:block"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
