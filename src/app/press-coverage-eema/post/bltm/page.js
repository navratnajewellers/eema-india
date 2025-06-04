"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post15() {
  const post15Data = [
    `January 18-19, 2019: EEMA made its presence felt at India's leading full-fledged travel show focused on Business, MICE, Luxury Travel and Leisure Travel. Leading a panel on "Experentialising MICE" at Leela Ambience Convention Hotel in Delhi, EEMA shared its expertise in the experiential and events industry.`,
  ];

  return (
    <>
      <PostHeader postHeading="BLTM" postDate="Feb 07, 2019" />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post15Data.map((data, index) => (
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
          "/images/press-coverage/posts-gallery/1550230743_master-classmandeep-malhotra750x1200.jpg",
          "/images/press-coverage/posts-gallery/1550230803_DSC_0326.jpg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image src={data} alt={`image-${index}`} height={470} width={300} />
          </div>
        ))}
      </div>
    </>
  );
}
