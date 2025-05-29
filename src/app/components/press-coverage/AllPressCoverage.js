"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const totalPressCoverageData = [
  {
    date: "May 30, 2021",
    title: "Event Community Steps forward for Covid Assistance",
    image: "/images/press-coverage/1622621570_Pioneer.webp",
    link: "https://www.dailypioneer.com/2021/business/event-community-steps-forward-for-covid-assistance.html",
  },
  {
    date: "May 29, 2021",
    title:
      "Live experience doesn’t always translate in virtual events: Roshan Abbas",
    image: "/images/press-coverage/1622621647_IANS Story.webp",
    link: "https://www.thestatesman.com/entertainment/theatre/live-experience-doesnt-always-translate-virtual-events-roshan-abbas-1502969711.html",
  },
  {
    date: "May 27, 2021",
    title: "EEMA joins Covid Relief Efforts",
    image: "/images/press-coverage/1622621492_Mint Story_May.webp",
    link: "https://www.livemint.com/industry/media/eema-joins-covid-relief-efforts-11622090703730.html",
  },
  {
    date: "May 06, 2021",
    title:
      "EEMA initiates 24-hour helpline to assist with refilling oxygen cylinders in Delhi",
    image: "/images/press-coverage/1620463768_NIE Article.webp",
    link: "https://www.newindianexpress.com/cities/delhi/2021/may/05/24-hour-helpline-to-assist-with-refilling-oxygen-cylinders-in-delhi-2298612.html",
  },
  {
    date: "May 06, 2021",
    title:
      "This 24-Hour Oxygen Helpline Is Proving To Be A Savior For Covid Patients In Delhi-NCR",
    image: "/images/press-coverage/1620463871_ABP Article.webp",
    link: "https://news.abplive.com/news/india/this-24-hour-oxygen-helpline-is-proving-to-be-a-savior-for-covid-patients-in-delhi-ncr-1457177",
  },
  {
    date: "May 01, 2021",
    title:
      "Event Industry’s Covid-SOS Service Addressing 1000 Critical Queries Daily With 50-60% Success Ratio",
    image: "/images/press-coverage/1620475082_EE Article.webp",
    link: "http://everythingexperiential.businessworld.in/article/Event-Industry-s-Covid-SOS-Service-Addressing-1000-Critical-Queries-Daily-With-50-60-Success-Ratio/01-05-2021-388325/",
  },
  {
    date: "Apr 22, 2021",
    title:
      "With 5 Cr People Dependent On Event Industry, The Government Needs To Hear Us Now",
    image: "/images/press-coverage/1620480986_EE Article_3.webp",
    link: "http://everythingexperiential.businessworld.in/article/With-5-Cr-People-Dependent-On-Event-Industry-The-Government-Needs-To-Hear-Us-Now-/22-04-2021-387387/",
  },
  {
    date: "Apr 13, 2021",
    title: "Live Events Sector braces for tough times ahead as infections rise",
    image: "/images/press-coverage/1620464015_Mint Article.webp",
    link: "https://www.livemint.com/news/india/rising-covid-cases-curfews-hit-live-events-again-11618215000753.html",
  },
  {
    date: "Sep 01, 2020",
    title: "EEMA GIVES CALL TO OPEN SAFE EVENTS TO SAVE EVENTS",
    image:
      "/images/press-coverage/news/1600936375_Western Times_Ahm_EEMA_23.08.20_Pg03.jpg",
    link: "https://eemaindia.com/press-coverage-eema/eema-gives-call-to-open-safe-events-to-save-events",
  },
  {
    date: "Apr 21, 2020",
    title:
      "EEMA examines the impact of COVID-19 on event and entertainment industry",
    image: "/images/press-coverage/news/1587537579_download (2).png",
    link: "https://brandequity.economictimes.indiatimes.com/news/media/eema-examines-the-impact-of-covid-19-on-event-and-entertainment-industry/75268619",
  },
];

export default function AllPressCoverage() {
  const [pressCoverageData, setPressCoverageData] = useState(() => {
    const tempPCData = totalPressCoverageData.slice(0, 3);
    return tempPCData;
  });

  const [displayDataLastIndex, setDisplayDataLastIndex] = useState(3);

  useEffect(() => {
    setPressCoverageData(totalPressCoverageData.slice(0, displayDataLastIndex));
  }, [displayDataLastIndex]);

  return (
    <section
      id="press-coverage"
      className=" bg-gray-50 text-black px-7 sm:px-24 relative py-11 "
    >
      <h2 className=" text-black text-5xl tracking-tight text-center py-20 ">
        Press Coverage
      </h2>

      <h4 className=" text-black text-right sticky top-40 z-10 ">
        Press Coverage
      </h4>

      {pressCoverageData.map((data, index) => (
        <motion.a
          href={data.link}
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

      {displayDataLastIndex < totalPressCoverageData.length && (
        <div className=" py-20  ">
          <button
            onClick={() => setDisplayDataLastIndex((val) => val + 10)}
            className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-orange-600 text-xl font-semibold transition-all duration-300 hover:text-white m-auto "
          >
            <span className="transition-all duration-300 group-hover:text-3xl text-nowrap ">
              Load More
            </span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white" />
          </button>
        </div>
      )}
    </section>
  );
}
