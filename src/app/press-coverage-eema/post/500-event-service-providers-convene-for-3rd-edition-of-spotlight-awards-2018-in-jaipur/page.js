"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post23() {
  const post23Data = [
    `It is said that partners are the backbone of any event and at the heart of a successful event planner is a team of reliable partners. Spotlight Awards is an initiative of the Event & Entertainment Management Association to recognize these event service providers for their specialized expertise and support at events.`,
    `This year Spotlight Awards attracted close to 500 event professionals at Jaipur’s Jaigarh Fort as part of EEMA’s annual convention EEMAGINE 2018. Often when glamor appears on the stage, the hard work and efforts of the people responsible for the spectacle is lost in the applause. Very often their hopes of ever getting recognized for their work is forgotten in the preparation of the next event and then the next.`,
    `Spotlight Awards is an initiative of EEMA that aims to provide a platform to felicitate and honour their outstanding performance and tremendous contribution towards development of the events industry. Spotlight Awards presents a forum where pioneers, individuals, organisations, old associates and new entrants get together to share their experiences, ideas, accomplishments and achievements together under one roof.`,
    `Also, a portal to help event managers chose from the country’s best partners to ensure smooth execution/functioning of an event. In its third edition this year Spotlight Awards upped the ante by hosting the event in Jaipur, out of Delhi’s familiar territory. Incidentally this year’s edition attracted the maximum attendance with close to 500 event professionals who flocked fort Jaigarh for a larger than life celebration.`,
    `The quaint and spacious setting of the fort served as the perfect canvas for a grand ceremony with several unique experiential elements including candle-lit passageways, tasteful background theatrics, and a middle-eastern themed pre-function area serving Lebanese entrees served by attendants dressed in fitting attires.`,
    `From there guests were directed into the grand ceremony where they were welcomed by a breathtaking panorama of the fortress backdrop, décor, energetic dance routines and ample pageantry. The entertainment quotient at the event kept energy levels high with multiple acts by several new and renowned talented performers.`,
    `Winners of Spotlight Awards were recognized in 33 categories including 'Best Sound Partner', 'Best Light Partner', 'Best Special Effects', 'Best Photography', 'Best Manpower Supplier' etc. Some of the winners included Gitikka Ganju Dhar who won the Gold for Best Female Emcee, Riaz Basha won Best Male Emcee, Aashish Taj Photography won Best Photographer and Videographer, Le Chat Factory won Best Food Partner and DJ Khushi won Gold for Best DJ.`,
    `The spectacular event was presided by Vijay Arora, founder of Touchwood Events, a renowned Delhi based wedding management company and Pritesh Sharma of Mapsor, a Jaipur based experiential weddings agency.`,
  ];

  return (
    <>
      <PostHeader
        postHeading="500+ event service providers convene for 3rd edition of Spotlight Awards 2018 in Jaipur"
        postDate="May 21, 2018"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post23Data.map((data, index) => (
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
          "/images/press-coverage/posts-gallery/1550231225_eema-300x162.jpg",
          "/images/press-coverage/posts-gallery/1550231270_eema-300x162.jpg",
          "/images/press-coverage/posts-gallery/1550231309_eema-300x162.jpg",
          "/images/press-coverage/posts-gallery/1550231363_eema-300x162.jpg",
          "/images/press-coverage/posts-gallery/1550231511_eema-300x162.jpg",
          "/images/press-coverage/posts-gallery/1550231541_eema-300x162.jpg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image src={data} alt={`image-${index}`} height={470} width={300} />
          </div>
        ))}
      </div>
    </>
  );
}
