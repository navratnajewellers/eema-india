"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function ServiceSection() {
  const [serviceNumber, setServiceNumber] = useState(0);

  const serviceData = [
    {
      title: "Event Management",
      description:
        "EEMA represents the backbone of India’s thriving event management industry — uniting the most experienced planners, producers, and creative minds behind iconic events nationwide. From corporate conferences and public festivals to private celebrations and product launches, our members excel at delivering seamless, high-impact experiences.",
    },
    {
      title: "Brand Activation",
      description:
        "At EEMA, Brand Activation is more than just marketing — it’s about creating immersive experiences that connect consumers with brands on a deeper level. Our member agencies specialize in transforming ideas into interactive campaigns that spark curiosity, drive engagement, and leave a lasting impression.",
    },
    {
      title: "Sports Management",
      description:
        "EEMA brings together leading professionals and agencies at the forefront of India’s dynamic sports management industry. From organizing large-scale tournaments and athlete management to sponsorships and fan engagement, our members deliver excellence at every level of execution.",
    },
    {
      title: "Wedding Planners",
      description:
        "EEMA represents India’s most celebrated wedding planners — experts in crafting unforgettable celebrations that blend culture, creativity, and flawless execution. From intimate gatherings to grand destination weddings, our members transform visions into reality with meticulous planning and personalized experiences.",
    },
    {
      title: "Entertainment Professionals",
      description:
        "EEMA brings together India’s leading entertainment professionals — the creative minds and performers who energize events with unmatched talent and innovation. From musicians and dancers to comedians, hosts, and production specialists, our network covers every dimension of live entertainment.",
    },
    {
      title: "Artist Management Companies",
      description:
        "EEMA is home to India’s top artist management agencies — professionals who represent, nurture, and elevate talent across music, film, fashion, and live entertainment. Our members act as the bridge between exceptional artists and unforgettable experiences, ensuring the right talent connects with the right platform.",
    },
  ];

  return (
    <section className=" bg-gray-50 px-7 sm:px-24 relative py-28 ">
      <h4 className=" text-black font-medium text-right sticky top-40 z-10 ">
        (SERVICES)
      </h4>

      <div className=" relative py-11 ">
        <div className=" w-1/2 sticky top-40 md:top-[50%] z-10 ">
          <div className=" flex justify-center ">
            <span className=" bg-orange-600 flex justify-center items-center h-20 w-20 rotate-slow ">
              <h2 className=" text-9xl text-white rotate-slow-anticlock ">
                {serviceNumber}
              </h2>
            </span>
          </div>
        </div>

        <div className=" overflow-hidden ">
          {serviceData.map((data, index) => (
            <motion.div
              initial={{ opacity: 0, x: 90 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
              onViewportEnter={() => {
                setServiceNumber(index + 1);
              }}
              key={index}
              className="  grid grid-cols-1 md:grid-cols-3 px-1 md:px-24 mb-7 "
            >
              <div className=" hidden md:block md:col-span-1 "></div>

              <div className=" py-20 md:col-span-2 px-7 md:px-14  ">
                <h2 className=" tracking-tight text-4xl mb-4 font-bold ">
                  {data.title}
                </h2>
                <p className=" leading-relaxed text-xl font-medium ">
                  {data.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
