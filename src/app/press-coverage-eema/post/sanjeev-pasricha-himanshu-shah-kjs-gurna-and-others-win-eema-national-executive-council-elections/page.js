"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";

export default function Post24() {
  const post24Data = [
    `After Sanjoy Roy, MD, Teamwork Arts was sworn in as the new EEMA President at EEMAgine 2018, the association was due to elect new governing body for its National Executive Council. The elections for the same were held on July 6th, 2018 under the supervision of Navin B Chawla, Former Chief Election Commissioner, Government of India who acted as the Chief Election Officer for these elections. Chawla announced the results of these elections on July 7th in an open address to the members of the association wherein the former congratulated EEMA members on successfully completing the election cycle for the National Executive Council. He further revealed that as per the process laid down, the Secretariat received a number of nominations for the varied posts as determined by the EEMA constitution, which were vetted and thereafter announced as valid. Members of the EEMA then followed the election process that was determined by Chawla in consultation with EEMA President and the Election Observers. The EEMA secretariat commissioned EnY to determine an effective election process whereby voters could cast their ballot from any part in the world in confidence and in total secrecy. As per the results obtained, Sanjeev Pasricha has been chosen as the new Executive Vice President of EEMA and joining him on the council at significant positions are Himanshu Shah as General Secretary, KJS Gurna as Treasurer, Deepak Pawar as Secretary and Vipul Pandhi as VP North, EEMA.`,
    `Elected unopposed at various positions of the National Executive Council were:`,
    `VP East: Vijay Bokadia`,
    `Jt. Secretary - East: Vinod Bhandari`,
    `Committee member 1 – East: Sanjay Aggarwal`,
    `Committee member 2 – East: Prakash Tulsyan`,
    `VP South: K Arun Kumar`,
    `Jt. Secretary - South: D.V. Vinod`,
    `Jt. Secretary - North: Atul Chabra`,
    `Committee member 1 – North: Amit Gupta`,
    `It is to be noted that no valid nominations were received for the positions of VP West, Jt. Secretary - West, Committee member 1 – South, Committee member 2 – South, Committee member - 2: North and the committee members – West by the EEMA Secretariat and fresh elections will be announced for these posts.`,
  ];

  return (
    <>
      <PostHeader
        postHeading="Sanjeev Pasricha, Himanshu Shah, KJS Gurna and others Win EEMA National Executive Council Elections"
        postDate="Jul 09, 2018"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post24Data.map((data, index) => (
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
