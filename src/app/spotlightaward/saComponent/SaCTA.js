"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function SaCTA() {
  return (
    <section className="bg-gradient-to-br from-[#fef9f4] to-[#fff] py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Submit <span className="text-yellow-600">Your Entry</span>
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Take center stage at the Spotlight Awards 2025! If you&apos;ve created
          something truly exceptional, now is the time to share it with the
          industry. Submit your work and be recognized among the best.
        </p>

        <motion.a
          href="https://www.eemaindia.com/spotlightaward/" // replace with actual form link if available
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all"
        >
          <Send className="w-5 h-5" />
          Submit Now
        </motion.a>
      </motion.div>
    </section>
  );
}
