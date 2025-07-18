"use client";

import { motion } from "framer-motion";
import { BadgeIndianRupee } from "lucide-react";

export default function SaAwardsFees({ setActiveSection }) {
  return (
    <motion.section
      id="fees"
      onViewportEnter={() => setActiveSection("fees")}
      className=" text-black border-t-4 border-gray-200 bg-white  "
    >
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold mb-4 text-yellow-500">Fees</h2>
          <p className="text-lg text-gray-600 mb-12">
            Choose your registration category below.
          </p>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-16">
            {/* EEMA Member */}
            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition bg-white">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                EEMA Member
              </h3>
              <div className="flex items-center justify-center text-4xl font-bold text-blue-600 mb-4">
                <BadgeIndianRupee className="w-6 h-6 mr-1" /> 3,999
              </div>
              <p className="text-gray-600 text-sm">
                Per Person (inclusive of all access)
              </p>
            </div>

            {/* Non-Member */}
            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition bg-white">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Non-Member
              </h3>
              <div className="flex items-center justify-center text-4xl font-bold text-red-600 mb-4">
                <BadgeIndianRupee className="w-6 h-6 mr-1" /> 4,999
              </div>
              <p className="text-gray-600 text-sm">
                Per Person (open for all attendees)
              </p>
            </div>
          </div>

          {/* Event Info */}
          <div className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            <p className="mb-4">
              The <strong>Spotlight Awards</strong> will be held on{" "}
              <strong className="text-gray-900">24th May, 2025</strong> at{" "}
              <strong>Club Riviera</strong>, to honor and celebrate excellence
              across various fields.
            </p>
            <p className="mb-4">
              This prestigious event will be evaluated by an independent and
              diverse panel of thought leaders from around the world.
            </p>
            <p className="font-semibold text-gray-900">
              🕒 Deadline for submitting nominations:{" "}
              <strong>14th May, 2025</strong>
            </p>
          </div>
        </motion.div>
      </section>
    </motion.section>
  );
}
