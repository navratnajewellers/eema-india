"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post11() {
  const post11Data = [
    `EEMA invites you to PALM EXPO from 30th May, 2019 to 1st June, 2019. Join us in this excellent sourcing and networking opportunity in an exposition about audio, music production, lighting, cinema sound and audiovisual integration. PALM EXPO will be held at Bombay Exhibition Center, Mumbai.`,
  ];

  return (
    <>
      <PostHeader
        postHeading="Upcoming – PALM EXPO 2019 | 30th May – 1st June 2019"
        postDate="Mar 01, 2019"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post11Data.map((data, index) => (
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
          "/images/press-coverage/posts-gallery/1554887394_Palm-Expo-1320x721.jpg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image
              src={data}
              alt={`image-4${index}`}
              height={470}
              width={300}
            />
          </div>
        ))}
      </div>
    </>
  );
}
