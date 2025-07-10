"use client";

import { motion } from "framer-motion";
import SeeMore from "./SeeMore";
import Image from "next/image";

const HomeHeroSection = () => {
  const workDetails = [
    {
      title: "EEMAX GLOBAL AWARD NIGHT 2019",
      image:
        "https://framerusercontent.com/images/xeE2BNz1ZC8WpZmB3ToCHzatvU.jpeg",
      description:
        "This is a description text. This is a description text. This is a description text. This is a description text. This is a description text. This is a description text. This is a description text. This is a description text. This is a description text.",
    },
    {
      title: "EEMAX Global Awards",
      image:
        "https://framerusercontent.com/images/Xokb1ddqeYw8fChnOTjHNKjKei4.jpeg",
      description:
        "This is a description text. This is a description text. This is a description text. This is a description text. This is a description text. This is a description text. This is a description text. This is a description text. This is a description text. This is a description text.",
    },
    {
      title: "EEMAgine X Gala Night",
      image:
        "https://framerusercontent.com/images/JbEsxAQRVzEtQ36HgSwnCROmQT8.jpeg",
      description:
        "This is a description text. This is a description text. This is a description text. ",
    },
  ];

  return (
    <div id="flagship-event" className=" relative bg-gray-50 py-7 ">
      {/* first section */}
      <div
        className={`sticky top-5 h-[92vh] flex justify-center items-center bg-black text-white mx-7 mb-10 px-7 rounded-[50px]`}
        style={{ zIndex: 1 }}
      >
        <div className=" text-center max-w-2xl ">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className=" tracking-tight font-bold text-5xl mb-7 text-orange-600  "
          >
            Flagship Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className=" leading-relaxed font-medium text-2xl text-gray-200 "
          >
            Signature events that bring India’s event ecosystem to life
          </motion.p>
        </div>
      </div>

      {workDetails.map((data, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className={`sticky top-5 h-[92vh] flex items-center justify-center ${isEven ? "bg-orange-600" : "bg-black"} mx-7 mb-10 px-7 rounded-[50px]`}
            style={{ zIndex: `${index + 2}` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-11 md:gap-2 ml-2 xl:ml-32 py-7 w-full ">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                viewport={{ amount: 0.5, once: true }}
                className=" px-7 text-center col-span-full md:col-span-4 flex flex-col justify-center items-center border-amber-500 "
              >
                <h2
                  className={` leading-relaxed text-3xl font-semibold mb-7 ${isEven ? "text-black" : "text-white"} `}
                >
                  {data.title}
                </h2>
                <p
                  className={` leading-relaxed text-sm font-medium text-gray-300 ${isEven ? "text-white" : "text-gray-300"}  `}
                >
                  {data.description}
                </p>
              </motion.div>

              <div className=" col-span-full md:col-span-8 ">
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  viewport={{ amount: 0.5, once: true }}
                  className={` relative h-[200px] md:h-[380px] w-[90%] md:w-[80%] mx-auto before:absolute ${isEven ? "before:bg-gray-200/40" : "before:bg-orange-600/70"} before:w-[90%] before:h-[90%] before:-left-4 md:before:-left-7 before:top-10 md:before:top-14 before:rounded-2xl `}
                >
                  <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className=" rounded-2xl border-2 border-gray-100 shadow-md "
                  />
                </motion.div>
                {/* <motion.div
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
                </motion.div> */}
              </div>
            </div>
          </div>
        );
      })}

      {/* <SeeMore /> */}
    </div>
  );
};

export default HomeHeroSection;
