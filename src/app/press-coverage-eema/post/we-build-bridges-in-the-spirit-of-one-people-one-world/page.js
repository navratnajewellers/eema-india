"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Post34() {
  const post34Data = [
    "The International Indian Film Academy is conceptualised and produced by Wizcraft International Entertainment Pvt Ltd, of which Sabbas Joseph is founder-director. In this position, over the past 25 years, he has spearheaded and managed several events for the company, which included some of the best events India has witnessed in the past two decades. Joseph is also president of the Event and Entertainment Management Association, India’s apex body for the industry.",
  ];

  return (
    <>
      <PostHeader
        postHeading="‘We build bridges in the spirit of one-people-one world’"
        postDate="May 07, 2016"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post34Data.map((data, index) => (
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
          href="http://www.thestatesman.com/news/supplements/-we-build-bridges-in-the-spirit-of-one-people-one-world/140818.html"
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
