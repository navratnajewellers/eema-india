"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";

export default function Post13() {
  const post13Data = [
    "EEMA Signed an MOU with Amity University Uttar Pradesh (AUUP) paving the way for the 1st such formal association between any major university and the Industry body.",
    "Vipul Pandhi, Vice President North – EEMA and Dr. Pallavi Majumdar, Joint Head, Amity School of Communication signed the memorandum on 21st Feb, paving the way for long term association between AUUP and EEMA in times to come.",
    "Event management as an industry is one of the fastest growing industries in India while employing of lakhs of people, directly & indirectly. At the rate at which the industry is growing, there is huge demand of well-trained professionals who can take up responsibilities and satisfy client expectations.",
    "AUUP is India’s leading research and Innovation driven private university, which has state of the art and high-tech campuses located at Noida, Lucknow and Dubai UAE. Graded A + by NAAC, the University is committed to provide outcome based, industry focused education and nurtures an inclusive environment to serve diverse needs of students, faculty and staff. AUUP faculty and students have over 6000 publications, 500 books, 300 ongoing research projects and 1001 patents filed in the last few years. Amity School of Communication (ASCO) is amongst the top 5 media schools in the country with over 1600 students, nine programmes at the UG and PG level and state of the art audio-visual facilities including a community radio. ASCO is continuously engaged in research and consultancy with the government, industry bodies and NGOs.",
    "EEMA will be helping Amity with",
  ];

  return (
    <>
      <PostHeader
        postHeading="EEMA Signed an MOU with Amity University Uttar Pradesh (AUUP) paving"
        postDate="Apr 15, 2019"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post13Data.map((data, index) => (
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

        <ul className=" list-disc pl-11 mb-11 ">
          {[
            "Putting together the right course content relevant to today’s industry requirement",
            "Train the faculty with industry specific knowledge enabling them to train better students.",
            "Providing on the job training to event management students while engaging them for their live events.",
            "Training interns in their member organization as a part of on the job training modules.",
            "Facilitate hiring of Amity students for EEMA member agencies to meet their talent requirements.",
          ].map((data, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.25,
                ease: "easeInOut",
              }}
              viewport={{ amount: 0.5, once: true }}
              key={index}
              className=" mb-4 "
            >
              {data}
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          viewport={{ amount: 0.5, once: true }}
          className=" mb-7"
        >
          Amity University will
        </motion.p>
        <ul className=" list-disc pl-11 mb-11 ">
          {[
            "Facilitate course and programme review to ensure that industry relevant feedback is incorporated at regular intervals as per Amity University guidelines.",
            "Identify students interested in placements within EEMA member companies and co-ordinate the process.",
            "Periodically propose a schedule for guest lectures by EEMA member companies.",
            "Identify & train faculty to teach in relevance with the event ecosystem.",
            "Facilitate a placement day for EEMA member companies to select graduates for placement.",
            "Identify students to participate in live events and gain hands-on experience.",
          ].map((data, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.25,
                ease: "easeInOut",
              }}
              viewport={{ amount: 0.5, once: true }}
              key={index}
              className=" mb-4 "
            >
              {data}
            </motion.li>
          ))}
        </ul>

        {[
          "According to Mr. Vipul Pandhi, there is huge demand for professionals in every department be it Business development, Client Servicing, Creative or Operations across event agencies. We expect such collaborations to enable the industry get the right talent and will ensure we have enough youngsters to take up important roles 2-3 years down the line.",
          `It is imperative to close the gap between the industry and academia to enable the students to hit the ground running. This collaboration is the right step in this direction,"said Dr. Pallavi Majumdar, Jt. head, ASCO`,
          `The signing of MOU was attended by Mr. Sanjeev Pasricha (EVP-EEMA and MD – CS Direkt Events & Exhibitions), Atul Chabra ( Jt. Sec. North – EEMA and Director – Enthuse Answers Pvt. Ltd.), Harjinder Singh( Director – Show Works Events), Shalini Beriwal (Director-Magnificence ), Jagmohan Singh (Director- TNBT Events), Sarvjit Singh (Director- Divine Entertainment) from EEMA. Dr. Pallavi Majumdar (Jt. Head, ASCO), Dr Gauri Chakraborty (Jt. Head, ASCO), Prof R K Dargan (Advisor, ASCO), Prof Marshall Sahni (Dean Students Welfare, AUUP) also attended the MoU signing.`,
          `Education and Talent development is one of the key focus areas of current EEMA Leadership. Education committee chaired by Sultan Ahmed of LXL Ideas and Co-chaired by Deepak Choudhary from Event Capital is driving the education agenda for EEMA. Some path breaking initiatives are under way and will be launched very soon.`,
          `Talent is one of the Biggest Challenges faced by the industry today, such collaborations with India’s leading universities like Amity can really be a game changer 3 years down the line", EEMA representatives stated.`,
        ].map((data, index) => (
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
