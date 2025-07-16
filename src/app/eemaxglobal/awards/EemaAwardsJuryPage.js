// app/jury/page.tsx or pages/jury.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function EemaAwardsJuryPage({ setActiveSection }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.section
      id="jury"
      onViewportEnter={() => setActiveSection("jury")}
      className="min-h-screen bg-white pb-24 text-center"
    >
      <div className=" relative h-64 w-full overflow-hidden mb-24 ">
        <Image
          src="/images/others/eemax-jury.png"
          alt="award-process-categories"
          fill
        />
      </div>

      <div className=" px-6 sm:px-12 ">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-black mb-6">
          2025 Jury
        </h1>
        <p className="text-lg font-semibold text-gray-600 mb-20">Coming Soon</p>
      </div>

      <div className=" px-6 sm:px-12 ">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          2024 Jury
        </h2>
      </div>

      <div className="flex justify-center px-6 sm:px-12 ">
        {isClient && (
          <iframe
            // src="/jury/eemax-2024-jury.pdf#toolbar=0"
            src="/documents/eemax-global/EEMAX-2024-Jury.pdf"
            width="100%"
            height="800"
            className="w-full max-w-5xl border rounded-xl shadow-lg"
          />
        )}
      </div>
    </motion.section>
  );
}
