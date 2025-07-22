"use client";

import { motion } from "framer-motion";

export default function EemaxGlobalRegistration() {
  const PricingCard = ({ title, prices }) => (
    <motion.div
      // initial={{ opacity: 0, y: 30 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.4 }}
      className="rounded-xl overflow-hidden border shadow-md"
    >
      <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-bold text-center py-3 text-lg">
        {title}
      </div>
      <div className="divide-y text-sm sm:text-base">
        {prices.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between px-6 py-4 ${
              idx % 2 === 0 ? "bg-orange-100" : "bg-orange-200"
            }`}
          >
            <span className="font-bold">{item.label}</span>
            <span className="font-semibold">INR {item.amount}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 px-4 md:px-10 bg-[#fff7ed]">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <PricingCard
            title="EEMAX Global Awards Early Bird Entry Rates"
            prices={[
              { label: "MEMBERS", amount: "8,500" },
              { label: "NON MEMBERS", amount: "10,000" },
            ]}
          />
          <PricingCard
            title="EEMAX Global Awards Entry"
            prices={[
              { label: "MEMBERS", amount: "10,000" },
              { label: "NON MEMBERS", amount: "12,500" },
            ]}
          />
        </div>

        {/* Notes */}
        <p className="text-sm md:text-base text-gray-700 text-center leading-relaxed">
          <span className="font-semibold">Note:</span> 18% GST and bank charges
          will be additional to the above amount. Mandatory to share GST number
          with entry fee. Early Bird rates are applicable till{" "}
          <strong>20th June 2025</strong>. Entry will be closed on{" "}
          <strong>30th June 2025</strong>.
        </p>

        <div className=" flex justify-center items-center ">
          <a
            href="https://eemax.eemaindia.com/signup"
            className=" inline-block px-6 py-2 rounded-2xl font-semibold transition text-black bg-orange-500 hover:bg-orange-600 hover:text-white "
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
