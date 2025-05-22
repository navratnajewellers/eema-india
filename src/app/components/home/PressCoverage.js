"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function PressCoverage() {
  const pressCoverageData = [
    {
      date: "May 30, 2021",
      title: "Event Community Steps forward for Covid Assistance",
      image:
        "https://framerusercontent.com/images/oo0SEsiWuSK4xD6XdKo0QrN0c7M.webp",
    },
    {
      date: "May 29, 2021",
      title:
        "Live experience doesn’t always translate in virtual events: Roshan Abbas",
      image:
        "https://framerusercontent.com/images/FIafB6nCOqXtIogPQlouyseglE.webp",
    },
    {
      date: "May 27, 2021",
      title: "EEMA joins Covid Relief Efforts",
      image:
        "https://framerusercontent.com/images/zKpaphZ958HgHSjym2AbDpvJ4.webp",
    },
    {
      date: "May 06, 2021",
      title:
        "EEMA initiates 24-hour helpline to assist with refilling oxygen cylinders in Delhi",
      image:
        "https://framerusercontent.com/images/1ViOliCTTPVf6igeMnys1sVR0.webp",
    },
    {
      date: "May 06, 2021",
      title:
        "This 24-Hour Oxygen Helpline Is Proving To Be A Savior For Covid Patients In Delhi-NCR",
      image:
        "https://framerusercontent.com/images/IzSwH6Bfs2wC74gwiSpx8kXi0.webp",
    },
    {
      date: "May 01, 2021",
      title:
        "Event Industry’s Covid-SOS Service Addressing 1000 Critical Queries Daily With 50-60% Success Ratio",
      image:
        "https://framerusercontent.com/images/c0SbVs44SNorEmhxnqKYzTaTk.webp",
    },
    {
      date: "Apr 22, 2021",
      title:
        "With 5 Cr People Dependent On Event Industry, The Government Needs To Hear Us Now",
      image:
        "https://framerusercontent.com/images/yrUStddy7JmMEPzDxQQQhLbJbg.webp",
    },
    {
      date: "Apr 13, 2021",
      title:
        "Live Events Sector braces for tough times ahead as infections rise",
      image:
        "https://framerusercontent.com/images/HoBHczRviaKZzVXiR7lzhHkmrE.webp",
    },
  ];

  return (
    <section className=" bg-gray-50 text-black px-7 sm:px-24 relative py-11 ">
      <h4 className=" text-black text-right sticky top-40 z-10 ">
        Press Coverage
      </h4>

      {pressCoverageData.map((data, index) => (
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ amount: 0.5, once: true }}
          key={index}
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
        </motion.div>
      ))}
    </section>
  );
}
