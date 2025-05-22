/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import SeeMore from "./SeeMore";

const HomeHeroSection = () => {
  const workDetails = [
    {
      title: "EEMAX GLOBAL AWARD NIGHT 2019",
      image:
        "https://framerusercontent.com/images/xeE2BNz1ZC8WpZmB3ToCHzatvU.jpeg",
    },
    {
      title: "EEMAX Global Awards",
      image:
        "https://framerusercontent.com/images/Xokb1ddqeYw8fChnOTjHNKjKei4.jpeg",
    },
    {
      title: "EEMAgine X Gala Night",
      image:
        "https://framerusercontent.com/images/JbEsxAQRVzEtQ36HgSwnCROmQT8.jpeg",
    },
  ];

  return (
    <div className=" relative bg-gray-50 py-7 ">
      {workDetails.map((data, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className={`sticky top-5 h-[92vh] flex items-center justify-center ${!isEven ? "bg-orange-600" : "bg-black"} text-white text-5xl mx-7 mb-10 px-7 rounded-[50px]`}
            style={{ zIndex: `${index + 1}` }}
          >
            <div className="grid md:grid-cols-2 gap-2 ml-2 xl:ml-32 ">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                viewport={{ amount: 0.5, once: true }}
                className=" px-7 "
              >
                <h4 className=" mb-7 text-2xl ">(work)</h4>
                <h2>{data.title}</h2>
              </motion.div>

              <div className=" overflow-hidden ">
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  viewport={{ amount: 0.5, once: true }}
                  className="imageWrapper h-[200px] md:h-[350px] mt-9 "
                >
                  <img src={data.image} alt={data.title} className="" />
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}

      <SeeMore />
    </div>
  );
};

export default HomeHeroSection;
