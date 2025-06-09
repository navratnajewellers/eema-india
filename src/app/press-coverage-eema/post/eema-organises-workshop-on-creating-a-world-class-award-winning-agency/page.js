"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";

export default function Post26() {
  const post26Data = [
    `EEMA (Event and Entertainment Management Association) conducted a workshop in Mumbai on March for the members of the industry under Gyan Café – Masterclass initiative. Masterclass is an intimate conversation hosted by leaders of the industry for owners of EEMA member agencies to harness the entrepreneurial mindset and scale up their enterprise.`,
    `The series has been planned to provide access to the enterprise mentorship by masters of the experiential industry. The first session in this series was conducted by Roshan Abbas on the topic "Creating a World Class Award Winning Agency” in the Geometry Encompass office.`,
    `"The session was full of deep insights to make an agency truly world class like how to build a brand, define a culture, constantly learn, build alliances, financial smarts, positioning and proposition, team building and many more. The years of rich experience in building, running and selling an agency were captured in the session. All the participants went back with clear action points to implement in their respective organisations.” said Tabassum Modi, Vice President – EEMA West.`,
    `Commenting on the workshop Roshan Abbas, Managing Director - Geometry Encompass said “Every agency aspires to be bigger and better. On the path of building Geometry Encompass to India's biggest agency I've had many learnings on the system and spirit to make an agency run.`,
    `Personally, for me it was a trip down memory lane! Made me dig up old ppts and internal memos.” "Roshan seamlessly wove in various aspects of entrepreneurial mindset, legacy creation and enterprise growth in a power packed presentation.`,
    `The cherry on the top was the invaluable guidance to each of the participants in the conversational round that culminated the session. I thank Roshan for his passion and for his commitment to the industry!” said Sushma Gaikwad, General Secretary VP Education – EEMA.`,
  ];

  return (
    <>
      <PostHeader
        postHeading="EEMA Organises Workshop on 'Creating a World Class Award Winning Agency'"
        postDate="Mar 19, 2018"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post26Data.map((data, index) => (
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
    </>
  );
}
