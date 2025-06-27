"use client";

import Image from "next/image";
import { Timeline } from "rsuite";

const journey = [
  {
    date: "March 1, 2024",
    title: "Formation of EEMA",
    description:
      "Established as a unified voice for the Indian events industry.",
    image: "/images/popup/eema-website-popup-image.png",
  },
  {
    date: "March 1, 2024",
    title: "First Annual Convention",
    description: "Brought together industry pioneers from across India.",
    image: "/images/popup/eema-website-popup-image.png",
  },
  {
    date: "March 1, 2024",
    title: "Global Collaborations Begin",
    description: "Partnered with international event associations.",
    image: "/images/popup/eema-website-popup-image.png",
  },
  {
    date: "March 1, 2024",
    title: "Virtual Evolution",
    description: "Led digital transformation during the pandemic era.",
    image: "/images/popup/eema-website-popup-image.png",
  },
  {
    date: "March 1, 2024",
    title: "EEMA Global Launch",
    description: "Expanded its presence globally through EMAX Global.",
    image: "/images/popup/eema-website-popup-image.png",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="relative px-6 py-16 bg-orange-100">
      <div className=" max-w-4xl mx-auto py-11 mb-11 ">
        <h2 className="text-3xl font-bold text-center mb-5 uppercase ">
          Journey of EEMA
        </h2>
        <p className=" text-center text-gray-400 leading-relaxed text-lg ">
          Milestones that shaped the legacy of EEMA
        </p>
      </div>

      <div className=" mx-auto ">
        <Timeline className="custom-timeline [&>*:nth-child(even)]:[&_.jt-head]:!text-left [&>*:nth-child(odd)]:[&_.jt-head-desc]:ml-auto  ">
          {journey.map((data, index) => (
            <Timeline.Item
              key={index}
              time={
                <div className=" jt-head ">
                  <p className=" font-semibold text-black ">{data.date}</p>
                  <h4 className=" text-xl font-bold text-orange-600 ">
                    {data.title}
                  </h4>
                  <p className=" leading-relaxed text-gray-500 max-w-96 jt-head-desc  ">
                    {data.description}
                  </p>
                </div>
              }
            >
              <div className=" py-11 mr-4 ">
                <section className=" mx-auto w-fit ">
                  <Image
                    src={data.image}
                    alt={data.title}
                    height={400}
                    width={500}
                    className=" rounded-2xl overflow-hidden object-cover "
                  />
                </section>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
