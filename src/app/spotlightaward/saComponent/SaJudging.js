"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function SaJudging() {
  const criteria = [
    "Creativity & Innovation in Concept and Execution",
    "Impact & Audience Engagement",
    "Production Quality and Technical Excellence",
    "Sustainability & Responsible Practices",
    "Overall Effectiveness in Delivering Brand Objectives",
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10">
          Judging <span className="text-yellow-500">Criteria</span>
        </h2>

        <ul className="grid gap-6 md:grid-cols-2">
          {criteria.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md"
            >
              <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
              <p className="text-gray-800 text-lg">{point}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
