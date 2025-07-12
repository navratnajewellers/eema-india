"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MemberListSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 text-center relative z-0">
      <Image
        src="https://eemaindia.com/images/viewMember.jpg"
        alt="bg-image"
        fill
        className=" -z-10 brightness-[40%] object-cover "
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className=" text-white text-3xl font-bold mb-7 w-fit mx-auto relative z-0 before:absolute before:w-1/3 before:h-0.5 before:bg-orange-500 before:-bottom-2 before:left-1/3 before:-z-10 ">
          Meet Our Members
        </h2>
        <p className="text-gray-200 mb-16">
          Explore the dynamic network of professionals, agencies, and partners
          who make up EEMA’s vibrant community.
        </p>
        <a
          href="/members-lists"
          className="inline-block bg-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          View Member List
        </a>
      </motion.div>
    </section>
  );
}
