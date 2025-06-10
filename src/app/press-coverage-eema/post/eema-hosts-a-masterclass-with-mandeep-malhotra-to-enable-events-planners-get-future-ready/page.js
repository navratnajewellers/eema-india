"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post28() {
  const post28Data = [
    `Another path-breaking session by the Event and Entertainment Management Association, the EEMA Masterclass took place at MCA Club on April 16 in Mumbai. Organised for the owners of the event and experiential industry, the session saw Mandeep Malhotra - Founder and CEO of The Social Street take to the stage.`,
    `The topic covered at the session was ‘Get future ready’. Through his session Mandeep shared some interesting viewpoints on how collaborations and alliances can help in uplifting your business. In addition to growth which is very important for a business; Mandeep also highlighted on how significant it is to be recognised amongst peers and awarded on different platforms. The theory of 6 P's shared by Mandeep on People, Perception, Process, Product, Prospecting, and Profit was not only detailed but also gripping.`,
    `Talking on the session, Mandeep stated, “It’s always a pleasure to be sharing your story with your extended family. I love being an open book and enjoy quality time with team EEMA”. Tabassum Modi, Vice President - EEMA West remarked, “Mandy’s session showed the participants how to dream big and ways to achieve that dream.`,
    `He stuck to his vision that he had set 3 years back and he is on track to meet all his milestones. His journey is inspiring and certainly had everyone motivated."`,
  ];

  return (
    <>
      <PostHeader
        postHeading="EEMA Hosts a Masterclass with Mandeep Malhotra to Enable Events Planners 'Get Future Ready'"
        postDate="Apr 20, 2018"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post28Data.map((data, index) => (
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
          "/images/press-coverage/posts-gallery/1550228928_master-classmandeep-malhotra750x1200.jpg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image src={data} alt={`image-${index}`} height={470} width={300} />
          </div>
        ))}
      </div>
    </>
  );
}
