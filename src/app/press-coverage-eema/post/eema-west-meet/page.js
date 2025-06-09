"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post22() {
  const post22Data = [
    `Sanjoy Roy- President EEMA shared his vision for 2018 with the west members across categories. The members across west and few from the south attended the meet. Reema Sanghavi – VP West took the members through the way forward for the West region. The prospective new members and the existing members who attended shared their views and were appreciative of the inclusivity of reaching out to the members accross categories.`,
  ];

  return (
    <>
      <PostHeader postHeading="EEMA WEST MEET" postDate="Aug 31, 2018" />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post22Data.map((data, index) => (
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
          "/images/press-coverage/posts-gallery/1550292652_EEMA-east-west-1.jpg",
          "/images/press-coverage/posts-gallery/1550292673_EEMA-east-west.jpg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image src={data} alt={`image-${index}`} height={470} width={300} />
          </div>
        ))}
      </div>
    </>
  );
}
