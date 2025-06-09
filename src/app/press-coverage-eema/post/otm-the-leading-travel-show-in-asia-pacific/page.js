"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post21() {
  const post21Data = [
    `24th January 2019: At OTM, an international exhibition for travel trade buyers and professionals, EEMA put up a booth and participated through an interactive panel discussion on "Experientialising MICE" at the Bombay Exhibition Center in Goregaon - East Mumbai.`,
  ];

  return (
    <>
      <PostHeader
        postHeading="OTM, the leading travel show in Asia-Pacific"
        postDate="Feb 07, 2019"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post21Data.map((data, index) => (
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

      <div className=" flex items-center flex-wrap py-11 ">
        {[
          "/images/press-coverage/posts-gallery/1550230571_OTM2.jpeg",
          "/images/press-coverage/posts-gallery/1550230628_OTM2.jpeg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image src={data} alt={`image-${index}`} height={470} width={300} />
          </div>
        ))}
      </div>
    </>
  );
}
