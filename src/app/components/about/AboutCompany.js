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
        "The only body of it’s kind, EEMA seeks to bring together the leading Event management, Brand Activation, Sports management, MICE, Wedding planners, Experiential marketers, Entertainment professionals, Artist management companies and their international counterparts on a single, convenient platform.",
    },
    {
      textToWrite:
        "EEMA is the first and only body of its kind, which seeks to bring together the country’s leading Event Management, Sports Management and Brand Activation companies, MICE and Wedding Planners, Experiential Marketers, Entertainment Professionals, Artist Management Companies and International counterparts on the same platform.",
    },
    {
      textToWrite:
        "EEMA today is the only national association with a unified voice that leads dialogue within its members and with government, Statutory Bodies, Taxation Authorities, Private and Municipal Licensing Bodies, Corporate Industry, Vendors and Artists.",
    },
    {
      textToWrite:
        "EEMA is setting Industry Standards that guide its members and has prescribed a Code of Conduct for its members and their employees.",
    },
    {
      textToWrite:
        "Over the years, EEMA has also been instrumental in organizing the coming together of industry stakeholders at its annual convention EEMAGINE and has instituted EEMAX, the industry premier Award Ceremony to recognise excellence in the event and experiental marketing space.",
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
      <h4 className=" text-2xl text-black sticky top-40 z-10 ">(About EEMA)</h4>
      {aboutCompanyData.map((data, index) => (
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
    </section>
  );
};

export default AboutCompany;
