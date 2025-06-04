"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post14() {
  const post14Data = [
    `EEMA invited ad guru Prahlad Kakkar and other collaborators to hold a successful event.`,
  ];

  return (
    <>
      <PostHeader
        postHeading="Thinking 22 with Prahlad Kakkar"
        postDate="Feb 25, 2019"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post14Data.map((data, index) => (
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
          "/images/press-coverage/posts-gallery/1554886854_PK2.jpg",
          "/images/press-coverage/posts-gallery/1554887111_PK3.jpg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image src={data} alt={`image-${index}`} height={470} width={300} />
          </div>
        ))}
      </div>
    </>
  );
}
