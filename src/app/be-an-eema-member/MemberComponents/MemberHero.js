"use client";

import { Button } from "rsuite";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-[80vh] w-full bg-[url('https://eemaindia.com/uploads/banners/5cbb11048a3f5axhvRkNgGY.jpeg')]">
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Become an EEMA Member
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Join the largest community of event and experiential marketing
            professionals in India. Collaborate, grow, and be heard.
          </p>
          <a href="https://membership.eemaindia.com/">
            <Button
              size="lg"
              appearance="primary"
              className="text-base"
              color="orange"
            >
              Apply Now
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
