"use client";

import { motion } from "framer-motion";
import { LucideCheckCircle } from "lucide-react";

const steps = [
  {
    title: "Step 1: Choose Membership",
    description:
      "Select the membership tier that suits your organization or individual role best.",
  },
  {
    title: "Step 2: Fill Application Form",
    description:
      "Complete the online application with relevant personal or company details.",
  },
  {
    title: "Step 3: Upload Documents",
    description:
      "Provide the required documents like company registration, GST, or ID proof.",
  },
  {
    title: "Step 4: Submit & Wait for Review",
    description:
      "Your application will be reviewed by the EEMA committee before final approval.",
  },
];

export default function ApplySteps() {
  return (
    <section className="py-16 px-4 bg-white fancy-border ">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          className=" text-black text-3xl md:text-4xl font-bold w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How to Apply
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Follow these simple steps to become an official member of the EEMA
          community.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
          >
            <div className="text-blue-600 mt-1">
              <LucideCheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className=" text-black font-semibold text-lg">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
