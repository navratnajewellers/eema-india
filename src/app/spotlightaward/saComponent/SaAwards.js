"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SaAwards() {
  return (
    <>
      <section className="bg-white py-20 px-4 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About the <span className="text-yellow-500">Spotlight Awards</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            The Spotlight Awards 2025 celebrates the finest in the event and
            experiential industry, recognizing outstanding innovation,
            creativity, and execution. From iconic brand activations to
            unforgettable live performances, these awards shine a light on the
            people and teams making it all happen behind the scenes.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
            Presented by <strong className="text-black">EEMA</strong>, this is
            more than just a trophy—it&apos;s a mark of excellence for
            professionals across categories like{" "}
            <em>
              Production, Performance, Corporate, Wedding, and Venue Management
            </em>
            .
          </p>
        </motion.div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-20 py-12 bg-white">
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/spotlightawards/spotlight-awards-slider1.jpg"
            alt="Spotlight Awards Banner"
            width={600}
            height={700}
            className="rounded-2xl shadow-xl w-full object-contain"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 w-full text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Spotlight
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Spotlight Awards, an initiative of <strong>EEMA</strong>, aims to
            provide a platform to felicitate and honor outstanding performance
            and tremendous contribution towards the development of the industry.
          </p>
          <a className="bg-black inline-block text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300">
            Know More
          </a>
        </motion.div>
      </section>
    </>
  );
}
