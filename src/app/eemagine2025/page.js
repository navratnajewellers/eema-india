"use client";

import { motion } from "framer-motion";
import { Image } from "rsuite";
import EemagineRegistration from "./EemagineRegistration";
import Eemagine2025Gallery from "./eemagine2025Component/Eemagine2025Gallery";

export default function Eemagine2025Page() {
  return (
    <main>
      {/* hero section */}
      <section className="bg-gradient-to-r from-orange-700 to-orange-400 text-white py-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          EEMAGINE 2025
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl">1st - 3rd August | Udaipur</p>
        <a
          href="https://eemax.eemaindia.com/signup"
          className=" inline-block mt-6 px-6 py-3 bg-white text-black hover:text-purple-800 font-semibold rounded-full hover:bg-gray-100 transition"
        >
          Register Now
        </a>
      </section>

      {/* overview */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">What is EEMAGINE?</h2>
        <p className="text-gray-700 text-lg">
          EEMAGINE is India’s most prestigious convention for the event and
          experiential industry, bringing together visionaries, creatives, and
          disruptors.
        </p>
      </section>

      <section>
        <Image
          src="https://eemaindia.com/uploads/sliders/66e420119fc9cNrsM1Om1d3.jpeg"
          alt="eemagine-2025"
        />
      </section>

      <EemagineRegistration />

      {/* keyDate */}
      <section className="bg-gradient-to-r from-yellow-100 via-orange-100 to-orange-200 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Important Dates</h3>
          <p className="mb-2">
            ✅ Early Bird till <strong>15th July</strong>
          </p>
          <p>
            📅 Regular Registration: <strong>16th July - 3rd August</strong>
          </p>
        </div>

        <section className="flex justify-center gap-4 my-8">
          <a
            href="https://eemax.eemaindia.com/signup"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Register Now
          </a>
          <a
            href="/eemaxglobal"
            className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold"
          >
            Visit EEMAX Global
          </a>
        </section>
      </section>

      <Eemagine2025Gallery />
    </main>
  );
}
