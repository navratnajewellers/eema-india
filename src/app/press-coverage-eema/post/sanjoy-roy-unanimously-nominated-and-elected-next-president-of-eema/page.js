"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post25() {
  const post25Data = [
    `what can be best described as the biggest news for the Indian events and experiential marketing ecosystem in the recent past, Sanjoy Roy, Co-Founder and Managing Director, Teamwork Arts has been unanimously nominated and elected as the new President of Event and Entertainment Management Association (EEMA).`,
    `Roy’s appointment comes after a rigorous process articulated by Ernst & Young and overviewed by the former EEMA President, Brian Tellis who was appointed as the Chief Election Officer for the election process of the new EEMA President.`,
    `In a letter to the members of the association Tellis revealed: 1. There were a total of 5 nomination forms received for the EEMA Presidentship. 2. All the 5 Nomination forms were in favor of Mr. Sanjoy K Roy. 3. The nominations were submitted by following members: Mr. Sabbas Joseph from Wizcraft International Entertainment Pvt Ltd. Mr. Michael Menezes from Showtime Events Mr. Rajeev Jain from Rashi Entertainment Mr. Mandeep Singh from CPM India Sales & Marketing Ms. Sushma Gaikwad from ICE Global.`,
    `It is reported that since only one individual was nominated for the Post of President – EEMA, all the subsequent steps required in the election process were no longer required and relevant. And consequently, Sanjoy K Roy has been unanimously elected as President-Elect of EEMA and will take over as President in the next General Body Meeting.`,
    `It is believed that the President-Elect will work with the current executive team till next general body meeting. Expressing his thoughts over the elections Sabbas Joseph, Current President of EEMA shared, “I am delighted to welcome Sanjoy Roy as the next President of EEMA.`,
    `We have seen many successes in the last 4 years and I think achieving unanimity in the selection of the next president is one of the biggest successes! Sanjoy is an entrepreneur who has redefined the cultural scenario of our country and has presented India on the global cultural map. He like many of us have had humble beginnings in the event industry.`,
    `The success achieved by Sanjoy Roy and his team of the Jaipur Literature Fest in transforming Jaipur into a cultural hub is yet to be matched in our industry.” “Sanjoy with his forward-looking zeal, matched with his down to earth nature makes him the perfect candidate to lead EEMA into the next phase of growth leadership, on the world stage.`,
    `It is commendable for the members to have unanimously chosen Sanjoy as the next president and this is a clear demonstration of EEMA’s unity, togetherness, and belief in the core leadership team. I especially want to mention the values that Sanjoy represents, and how EEMA will take on this value system in his leadership.”- added Joseph.`,
    `Commenting on the announcement Brian Tellis, Former President EEMA and the Chief Election Officer of the Elections remarked, “Sanjoy is a very senior person from the events industry and he brings to EEMA not just vast experience but also a very important overview of both the Indian and International events landscape and their sensibilities. I am happy with his appointment as the new President of EEMA.`,
    `Clearly, the new president-elect will bring a fresh perspective to the association. He has our best wishes and support.” Sanjoy Roy, MD, Teamwork Arts and New President Elect, EEMA shared, “I am delighted to have been appointed as the President of EEMA! Following in the footsteps of the past presidents will be no easy task.`,
    `As the industrial revolution fades and the 4th revolution bringing together creativity and technology drives the new world, our industry is poised to be in the forefront of this movement. The creative sector as we know it is worth billions to India’s national exchequer. Increasingly our economy and our young people are turning to film, cultural tourism, music, publishing and video gaming to grow and diversify and make sense of a complicated world.`,
    `EEMA members and their organisations contribute to local economies, help bring together communities and most importantly help create jobs. There is much to be done to realise the aims and goals of the membership of EEMA. I look forward to meeting with, understanding and including all our partners concerns in the coming months and working together to build a better future for the industry.”`,
  ];

  return (
    <>
      <PostHeader
        postHeading="Sanjoy Roy Unanimously Nominated and Elected Next President of EEMA"
        postDate="May 21, 2018"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post25Data.map((data, index) => (
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
          "/images/press-coverage/posts-gallery/1550235301_eema-300x162.jpg",
          "/images/press-coverage/posts-gallery/1550235323_eema-300x162.jpg",
          "/images/press-coverage/posts-gallery/1550235392_eema-300x162.jpg",
          "/images/press-coverage/posts-gallery/1550235406_image7.jpeg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image src={data} alt={`image-${index}`} height={470} width={300} />
          </div>
        ))}
      </div>
    </>
  );
}
