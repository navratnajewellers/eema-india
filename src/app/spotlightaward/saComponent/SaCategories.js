"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SaCategories() {
  const categories = [
    "Performing Artist & Entertainers Group",
    "Production & Support Services - CORPORATE",
    "Production & Support Services - WEDDING",
    "Production & Support Services",
    "Hotels & Venue",
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-b from-white to-[#f8f8f8] mt-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
            Categories
          </h2>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Explore the Spotlight Awards 2025 categories and find the one that
            best fits your submission.
          </p>

          {/* Category Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat, index) => (
              <span
                key={index}
                className="bg-yellow-100 text-yellow-800 text-sm px-4 py-2 rounded-full shadow-sm"
              >
                {cat}
              </span>
            ))}
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
            Know More
          </button>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/spotlightawards/spotlight-awards-slider-2.jpg"
            alt="Spotlight Categories"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
