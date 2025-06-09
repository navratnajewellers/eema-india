"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post16() {
  const post16Data = [
    `25th January 2019: EEMA North invited its members to its first-ever flag hoisting ceremony and a day filled with exciting performances, networking, food, and recreation.`,
  ];

  return (
    <>
      <PostHeader postHeading="Republic Day Event" postDate="Feb 25, 2019" />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post16Data.map((data, index) => (
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
          "/images/press-coverage/posts-gallery/1554886217_70rep1.jpg",
          "/images/press-coverage/posts-gallery/1554886311_70rep2.jpg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image src={data} alt={`image-${index}`} height={470} width={300} />
          </div>
        ))}
      </div>
    </>
  );
}
