"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function PressCoverage() {
  const pressCoverageData = [
    {
      date: "May 27, 2025",
      title:
        "EEMA Spotlight Awards 2025 - Celebrates the unsung heroes of the event industry",
      image: "/images/press-coverage/h-pr1-Vijay-Batra-2-1068x785.jpg",
      link: "https://www.google.com/url?q=https://in.eventfaqs.com/2025/05/27/eema-spotlight-awards-2025-celebrates-the-unsung-heroes-of-the-event-industry/&sa=D&source=editors&ust=1751879883324442&usg=AOvVaw2YQ7cr2Y9wLpXnZlaVHYJY",
    },
    {
      date: "May 27, 2025",
      title: "EEMA Spotlight Awards 2025 honours heroes of event industry",
      image: "/images/press-coverage/h-pr2-eema-awards.jpg",
      link: "https://www.google.com/url?q=https://tourismbreakingnews.com/eema-spotlight-awards-2025-honours-heroes-of-event-industry/&sa=D&source=editors&ust=1751879883325549&usg=AOvVaw2u9VeMZUgbtiJ7q1pgcvd8",
    },
    {
      date: "May 27, 2025",
      title: "The EEMA Spotlight Awards 2025",
      image:
        "/images/press-coverage/h-pr3-501002870_1035205322044848_9030631064118380580_n.jpg",
      link: "https://www.google.com/url?q=https://www.instagram.com/share/_e6FroCmK&sa=D&source=editors&ust=1751879883326541&usg=AOvVaw10hXn-ejJOVouy1CGJfFm1",
    },
    {
      date: "May 27, 2025",
      title: "The EEMA Spotlight Awards 2025: MICE talk",
      image:
        "/images/press-coverage/h-pr4-500076815_1035205338711513_7028311159001074582_n.jpg",
      link: "https://www.google.com/url?q=https://www.facebook.com/share/16QL2PUJ58/?mibextid%3DwwXIfr&sa=D&source=editors&ust=1751879883327586&usg=AOvVaw1vZjRFLDpcAtNRywV3YRMr",
    },
    {
      date: "April 03, 2025",
      title:
        "EEMA Spotlight Awards 2025: Nominate the Game Changers & Trailblazers!",
      image: "/images/press-coverage/h-pr5-2025-04-03.jpg",
      link: "https://www.google.com/url?q=https://www.eventfaqs.com/news/ef-21885/eema-spotlight-awards-2025-nominate-the-game-changers-trailblazers&sa=D&source=editors&ust=1751879883328586&usg=AOvVaw3nSIlCVa3Oe74Y_YfpLHvd",
    },
  ];

  return (
    <section
      id="news"
      className=" bg-gray-50 text-black px-7 sm:px-24 relative py-11 "
    >
      <h4 className=" text-black font-bold text-right sticky top-40 left-full z-10 bg-gray-50 w-fit border-b-2 border-orange-600 pb-1 ">
        Press Coverage
      </h4>

      {pressCoverageData.map((data, index) => (
        <motion.a
          href={data.link}
          target="_blank"
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ amount: 0.5, once: true }}
          key={index}
          className=" mb-4 block "
        >
          <div className=" grid grid-cols-1 md:grid-cols-8 gap-1 px-1 md:px-11 mb-16 ">
            <div className=" md:col-span-1 ">
              <p className=" mt-4 leading-relaxed font-semibold ">
                {data.date}
              </p>
            </div>

            <div className=" md:col-span-2  ">
              <h4 className=" mt-4 font-bold text-2xl ">{data.title}</h4>
            </div>

            <div className=" md:col-span-4  ">
              <Image
                src={data.image}
                alt={data.title}
                width={400}
                height={400}
                className=" object-cover m-auto "
              />
            </div>

            <div className=" flex justify-center md:col-span-1 ">
              <span className=" bg-orange-600 inline-block h-4 w-4 mt-7 rotate-slow "></span>
            </div>
          </div>

          <div className=" h-[1.2px] bg-black w-1/2 mt-9 mb-9 ml-1 md:ml-11 "></div>
        </motion.a>
      ))}
    </section>
  );
}
