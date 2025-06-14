"use client";

import { ArrowUpRight } from "lucide-react";
import ScalingText from "./ScalingText";
import { motion } from "motion/react";

export default function AboutSection() {
  const aboutData = [
    {
      textToWrite:
        "EEMA is an autonomous, non-profit body of registered companies, institutions and professionals that operate within India’s Events and Experiential marketing industry.",
    },
    {
      textToWrite:
        "The Industry has observed an exponential growth in the past two decades with more than 1000 entities operating in various levels and segments that are spread across 100+ Indian cities.",
    },
    {
      textToWrite:
        "The only body of it’s kind, EEMA seeks to bring together the leading Event management, Brand Activation, Sports management, MICE, Wedding planners, Experiential marketers, Entertainment professionals, Artist management companies and their international counterparts on a single, convenient platform.",
    },
  ];

  return (
    <section id="about" className=" bg-gray-50 px-7 sm:px-24 relative py-11 ">
      <h4 className=" text-2xl font-bold text-shadow-black sticky top-40 z-10 w-fit bg-gray-50 border-b-2 border-orange-600 pb-1 ">
        About Us
      </h4>
      {aboutData.map((data, index) => (
        <div
          key={index}
          className=" grid sm:grid-cols-4 gap-2 mt-7 min-h-[55vh] "
        >
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ amount: 0.5 }}
            className=" sm:col-span-1 flex justify-center items-center "
          >
            <span className=" bg-orange-600 inline-block h-5 w-5 mb-7 rotate-slow "></span>
          </motion.div>

          <div className=" sm:col-span-3 px-7 flex justify-center items-center ">
            <ScalingText text={data.textToWrite} />
          </div>
        </div>
      ))}

      <div className=" flex justify-center items-center py-11 mt-24 mb-4 relative ">
        <a
          href="/about"
          className=" tracking-tight font-semibold text-2xl h-see-more-container text-black hover:text-white "
        >
          <span>See More</span>
        </a>
      </div>
      {/* <div className=" grid sm:grid-cols-4 gap-2 mt-7 min-h-[50vh] ">
        <div className=" border-2 sm:col-span-1 flex justify-center items-center ">
          <span className=" bg-orange-600 inline-block h-7 w-7 mb-7 rotate-slow "></span>
        </div>

        <div className=" sm:col-span-3 border-2 border-amber-500 px-7 flex justify-center items-center ">
          <ScalingText text="EEMA is an autonomous, non-profit body of registered companies, institutions and professionals that operate within India’s Events and Experiential marketing industry." />
        </div>
      </div> */}
    </section>
  );
}
