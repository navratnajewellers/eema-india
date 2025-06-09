"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post27() {
  const post27Data = [
    `The Event and Entertainment Management Association of India (EEMA), has kickstarted a host of informative series with a view to enhancing skill and knowledge in the industry. Speaking about it Sushma Gaikwad, General Secretary, Vice President Education Skill Enhancement and Director Ice Global said, “The knowledge series has been rolled out through various initiatives like the Gyan Café and Gurucool which have been hosted both on-line and off-line for EEMA members and their employees.`,
    `Sharing of best practices and knowledge are the key drivers to influence a robust growth of the industry and these sessions provide the much-desired impetus for the same”. As a part of the initiative, an online workshop on Corporate Etiquette was hosted on January 25, 2018 and participants from Client Servicing and Project Management teams across the country joined the session online to learn the nuances of Boardroom etiquette, meeting etiquette and neuro-linguistic skills that could be employed to build rapport with clients and associates.`,
    `This session was a runaway hit with over 1500 views online and was hosted by Sushma Gaikwad who is a Dale Carnegie Certified trainer and Neuro-Linguistic Master Practitioner. Speaking about the experience, Sushma added, “One of the key objectives of EEMA is to provide avenues for knowledge enhancement and drive skill development among all stakeholders.`,
    `These sessions also drive a deep sense of belonging while providing an opportunity to address the eagerness to learn that exists within the industry.” As a part of the knowledge initiative, EEMA also hosted the “Everything Finance” Session on February 16th, 2018 which was organised in Mumbai with the objective to address key financial challenges faced by EEMA member companies, update members and their finance teams about new financial processes and practices as well as begin a dialogue among the finance accounting teams within EEMA.`,
    `The roundtable was a huge success as CFO’s and finance teams came together to discuss best practices. The roundtable panel comprised Thanush Joseph, Director Seventy EMG, Dinesh Kummar, CFO, Wizcraft, Mahesh Balakrishna, CFO Procam International, Valerian Mathias, CFO Fountainhead Marketing and Nitin Agrawal, CFO Encompass and was attended in full strength by teams from Mumbai, Goa, Gujrat and teams from across India joined in online to interact on key topics like GST, The current budget, Wealth creation and Best Practices in Finance.`,
    `Speaking about the initiative Tabassum Modi, Vice President EEMA West and Director Victor Tango shared, “The CFO roundtable was the first step in the direction of bringing together the finance community of our industry.  Our finance teams are our backbones and for any of us to take our agencies to the next level we need to truly empower them.`,
    `Post the workshop we have connected them with each other to create a support structure to enable them to address doubts, seek clarification and get ready for future changes in GST, understand best practices and make representations to the government.  Thanks to EEMA we have a collective voice today and we hope to make a difference”.`,
  ];

  return (
    <>
      <PostHeader
        postHeading="EEMA On the Path of Enhancing Knowledge With a Series of Informative Initiatives"
        postDate="Feb 26, 2018"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post27Data.map((data, index) => (
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
          "/images/press-coverage/posts-gallery/1550231996_eema-300x162.jpg",
          "/images/press-coverage/posts-gallery/1550231942_eema-300x162.jpg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image src={data} alt={`image-${index}`} height={470} width={300} />
          </div>
        ))}
      </div>
    </>
  );
}
