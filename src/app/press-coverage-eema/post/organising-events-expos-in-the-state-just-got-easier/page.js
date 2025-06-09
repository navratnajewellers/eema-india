"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post18() {
  const post18Data = [
    `Organisers of live events, film festivals and exhibitions will soon have a dedicated online portal for all the permissions in the state of Maharashtra. The ground work for the portal, which included getting various ministries and departments aligned, is already done, Vijay Kumar Gautam, principal secretary (tourism) in the Maharashtra government, told “It took us some time as many departments including finance, tourism, state planning, etc, were involved.`,
    `We all have worked together towards making the entire process of taking permissions through a single window clearance for the hospitality industry and live events,” said Gautam, who chairs the project planning, implementation and monitoring committee, which was set up by chief minister Devendra Fadnavis in June.`,
    `The committee was to implement and monitor schemes under Tourism Policy 2016 and facilitate investments in the state. While the portal will take another two months to go live, the process of giving permissions for events has already started with Canadian live entertainment company Cirque du Soleil becoming the first beneficiary.`,
    `CM Fadnavis had first announced that Cirque du Soleil will visit the state as a part of the “Visit Maharashtra” initiative. Cirque du Soleil has partnered with BookMyShow in India and the state government has laid out the red carpet. Events and activations industry is one of the fastest growing sectors not just in Maharashtra but in India. It is expected to cross ?10,000 crore by 2020-21 as per an EY-EEMA (Event and Entertainment Management Association) report.`,
    `The report, based on a survey of 64 event management companies and 31 marketers, suggests that overall the events and activations industry was worth ?5,631 crore in 2016-17. Earlier, event organisers had to take 18 licences and permissions from various departments in Maharashtra. A single window for event permissions is still a dream in many states.`,
    `Experts feel that while the EEMA industry is at the cusp of experiencing the next level of growth in India, it requires support from state and central government. Already, segments of live events such as concerts, film festivals, food festivals, literature festivals and comedy festivals are witnessing growth and a single window, e-enabled and time bound clearance will go a long way in exponentially growing this segment.`,
    `VIJAY KUMAR GAUTAM Principal Secretary (Tourism) It took us some time as many departments including finance, tourism, state planning, etc, were involved. We all have worked together towards making the entire process`,
  ];

  return (
    <>
      <PostHeader
        postHeading="Organising Events, Expos in the State Just Got Easier"
        postDate="Aug 29, 2018"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post18Data.map((data, index) => (
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
          "/images/press-coverage/posts-gallery/1550292784_Organising-Events-Expos-in-the-State-Just-Got-Easier.jpg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image src={data} alt={`image-${index}`} height={470} width={300} />
          </div>
        ))}
      </div>
    </>
  );
}
