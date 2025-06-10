"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Post38() {
  const post38Data = [
    "MUMBAI: The Live events industry abroad scrupulously follows a general code of safe practices. These safety acts formulated by the government sets out duties and rules for all involved in the Live Performance Industry, which are to be followed stringently, whether they are from the country or outside.",
    `However the absence of similar procedures in India has become a major cause for concern in recent years. The PALM Conference & Seminar will bring together leaders from the Event Management Industry for a panel discussion on ‘Road to Event Safety in India’.`,
    `The Panel discussion will be held in International Lounge Hall1 Mezzanine, Bombay Exhibition Centre, Mumbai on Thursday, 26th May, 2016 - 4:00 PM - 5:30 PM . Over the next decade, the live event industry is expected to undergo a profound change and the need for formulating safety guidelines for the entertainment industry in India, as well as stringent laws will become paramount.`,
    `At the PALM Conference platform, the esteemed panel will discuss on the need for safety, safety compliance, technical considerations and what stops them. This panel will be moderated by Sushma Gaikwad, Co-Founder and Director of Ice Global and Vice President, EEMA West and will comprise of event industry leaders and professionals such as - Viraf Sarkari - Director - Wizcraft International Entertainment; Warren Dsouza - Owner, Sound.com, Avishkar Tendle - Managing Director at Natura - ?Natura Outdoor Education & Training Solutions Pvt Ltd, Dr. JD Mehta – Wiz Innovation.`,
  ];

  return (
    <>
      <PostHeader
        postHeading="The EEMA PALM Conference Session at the Palm Conference & Seminar 2016 to examine 'Road to Event Safety in India'"
        postDate="May 02, 2016"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post38Data.map((data, index) => (
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

      <div>
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ amount: 0.5 }}
          href="http://www.radioandmusic.com/biz/music/marketing-and-promotions/160502-eema-palm-conference-session-palm#"
          className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-orange-600 text-sm font-semibold transition-all duration-300 hover:text-white "
        >
          <span className="transition-all duration-300 group-hover:text-xl text-nowrap ">
            Read More
          </span>
          <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white" />
        </motion.a>
      </div>
    </>
  );
}
