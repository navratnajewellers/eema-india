"use client";

import { motion } from "motion/react";
import ScalingText from "../home/ScalingText";

const AboutCompany = () => {
  const aboutCompanyData = [
    {
      textToWrite:
        "EEMA is an autonomous, non-profit body of registered companies, institutions and professionals that operate within India’s Events and Experiential marketings industry. The Industry has observed an exponential growth in the past two decades with more than 1000 entities operating in various levels and segments that are spread across 100+ Indian cities.",
    },
    {
      textToWrite:
        "Since its incorporation in 2008, EEMA has rapidly grown in membership to include all significant organised players across the length and breadth of the country, and it is estimated that close to 80% of the organized revenue in this space, is represented through EEMA members.",
    },
  ];

  return (
    <section
      id="about-eema"
      className=" bg-gray-50 px-7 sm:px-24 relative py-11 "
    >
      <h2 className="text-3xl font-bold block sm:hidden mb-16 text-center w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600">
        About EEMA
      </h2>
      <h4 className=" text-2xl text-black hidden sm:block sticky top-40 z-10 w-fit bg-gray-50 ">
        (About EEMA)
      </h4>
      {aboutCompanyData.map((data, index) => (
        <div
          key={index}
          className=" grid sm:grid-cols-4 gap-2 mt-7 min-h-20 sm:min-h-[55vh] "
        >
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ amount: 0.5 }}
            className=" sm:col-span-1 hidden sm:flex justify-center items-center "
          >
            <span className=" bg-orange-600 inline-block h-5 w-5 mb-7 rotate-slow "></span>
          </motion.div>

          <div className=" sm:col-span-3 px-1 sm:px-7 flex justify-center items-center ">
            <div>
              <ScalingText text={data.textToWrite} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutCompany;
