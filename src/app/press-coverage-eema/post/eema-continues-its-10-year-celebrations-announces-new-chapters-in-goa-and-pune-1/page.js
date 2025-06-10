"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";

export default function Post29() {
  const post29Data = [
    `India’s apex body in the events and experiential marketing space – Event and Entertainment Management Association (EEMA), is currently celebrating 10 successful years of establishment. And, as a part of its 10-year celebrations, the association has announced chapters in Pune and Goa with President EEMA - Sabbas Joseph and the EEMA Leadership team on April 12th in Hyatt Regency Pune and April 16th in Grand Hyatt Goa.`,
    `With these events, Pune and Goa will witness the coming together of event managers, activation agencies, experiential marketing companies, service providers, and artists all under one roof for the first time. As a part of this initiative; a special session on event safety is also being conducted for the masters of behind the scenes. Safety is a very crucial part of events.`,
    `The objective of the session is to highlight the importance of health and safety procedures at work. This event is also a precursor to EEMA’s annual convention EEMAGINE 2018 which is being held in Jaipur from May 6th-8th. To honour the excellence in the industry; EEMAgine will also host the EEMAX Awards and Spotlight Awards as part of the overall convention this year.`,
    `Commenting on the announcement, Sabbas Joseph commented, “I am quite enthused to see the response we have received from Pune and Goa. It is important to reach out to City like Pune and Goa which is a hub for big scale events and EEMA will play a pivotal role in reaching out to these markets.”`,
  ];

  return (
    <>
      <PostHeader
        postHeading="EEMA Continues its 10-Year Celebrations; Announces New Chapters in Goa and Pune"
        postDate="Apr 10, 2018"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post29Data.map((data, index) => (
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
