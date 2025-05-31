"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Post3() {
  const post3Data = [
    "The novel coronavirus continues to inflict havoc worldwide and not least in its impact on the events and experiential space and from technology and sports to entertainment and politics. As people are advised to stay at home and avoid contact with others, the effect of this on business has been unprecedented with multiple global and national events having been postponed or simply cancelled.",
    "The impact on the events and experiential industry is expected to last for months while the impact in the first two months alone is pegged at Rs 3000 - 5000 Cr, at a minimum, as projected in a survey of 230 MSMEs in the sector, the effect for the comings months will be many times more and is being pegged at cancellations worth over 80% of the 40,000 Cr formal and informal events industry. This is in part due to cancellations of existing projects and contracts, cancellations of conferences, State and Central Government endeavors, international MICE events, the entertainment segment and cancellation of flights, which has impacted the industry. The approximate number of folks estimated to be directly or indirectly employed including infra (tent house/ lights/ flowers/ catering/ hospitality) is approx. 10 million jobs. 80% of this would be at risk as it would be daily wage earners with no access to credit facilities nor to working capital.",
    "From the Manganiyars and Langas in Rajasthan to the Bauls of Bengal, From the Theyyam Artists of Kerala to the Mallakhamb acrobats in Maharashtra the situation is dire. Money always in short supply has dried up. Without a sustainable model and support from the Government our intangible heritage will die out leaving tens of thousands without any succor.",
    "In the sector if we look at artists – they earn when they perform, Venues earn when they are utilized, suppliers earn when they provide for event managers, and event managers earn when they manage. When you think about the sheer number of people that will suffer from this disaster, it’s staggering.",
    "The association has requested the Government of India to provide relief to the events and entertainment sector by ensuring that all tax refunds due are made at the earliest.",
  ];

  return (
    <>
      <PostHeader
        postHeading="We hope as an industry we can rise to the occasion and change the paradigm: Sanjoy Roy, MD Teamwork Arts & President-EEMA"
        postDate="Mar 31, 2020"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post3Data.map((data, index) => (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            viewport={{ amount: 0.5, once: true }}
            key={index}
            className=" mb-7 "
          >
            {data}
          </motion.p>
        ))}

        <ul className=" list-disc pl-11 mb-11 ">
          {[
            "Central and State Governments should clear their outstanding payments from all contracts for the sector",
            "MSME’s should be provided credit on accessible terms including to loss making companies with work orders in place",
            "Moratorium of payback on loans and interest for a period of 9-12 months.",
            "Reduction of GST on entertainment and cultural events to 12%in months",
            "Support for salaries for the coming months and facilities for the crafts, visual arts and performing artists.",
          ].map((data, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.25,
                ease: "easeInOut",
              }}
              viewport={{ amount: 0.5, once: true }}
              key={index}
              className=" mb-4 "
            >
              {data}
            </motion.li>
          ))}
        </ul>

        {[
          "The Event and Entertainment Management Association (EEMA) continues to strive to provide a platform to artists, influencers, thought leaders and innovators. Our many online initiatives include the EEMA Stay at Home Concert series, The Michael Menezes Knowledge series and EEMA Stay Fit.",
          `Times of great challenge also pose opportunities for new aides and we hope as an industry to rise to the occasion and change the paradigm! This is not about thinking out of the box but in Shivjeet Kullar's words in the inaugural Michael Menezes series, it is about moving the box and initiating a whole new movement. The world as we know, has changed forever! From the buzz words of globalization and diversity we will witness tribalism and uniformity and therefore now more than any time before need to collectively strive to build a more inclusive and empathetic world.`,
        ].map((data, index) => (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            viewport={{ amount: 0.5, once: true }}
            key={index}
            className=" mb-7 "
          >
            {data}
          </motion.p>
        ))}
      </div>

      <div>
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ amount: 0.5 }}
          href="http://everythingexperiential.businessworld.in/article/We-hope-as-an-industry-we-can-rise-to-the-occasion-and-change-the-paradigm-Sanjoy-Roy-MD-Teamwork-Arts-President-EEMA-/31-03-2020-187786/"
          className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-orange-600 text-sm font-semibold transition-all duration-300 hover:text-white "
        >
          <span className="transition-all duration-300 group-hover:text-xl text-nowrap ">
            Source
          </span>
          <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white" />
        </motion.a>
      </div>
    </>
  );
}
