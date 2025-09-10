"use client";

import Image from "next/image";
import { Timeline } from "rsuite";

const journey = [
  {
    date: "2008",
    title: "Formation & Vision",
    description: [
      "Founded in 2008 to unify and professionalize the event and experiential marketing industry in India.",
      "Aimed to build a structured, ethical, and transparent ecosystem for event professionals.",
    ],
    image: "/images/home-page/journey-timeline/2008.jpg",
  },
  {
    date: "2008 – 2015",
    title: "Early Growth",
    description: [
      "Established regional chapters across India.",
      "Initiated knowledge-sharing platforms and member networking events.",
      "Focused on setting standards and streamlining industry practices.",
    ],
    image: "/images/home-page/journey-timeline/2008-2015.jpeg",
  },
  {
    date: "2016",
    title: "Global Collaborations Begin",
    description: [
      <span key="gcb-1">
        <strong>Code of Conduct Launched:</strong> Promoted ethical business
        practices and creative rights protection.
      </span>,
      <span key="gcb-2">
        <strong>EEMAgine (Annual Convention):</strong> Created a global platform
        for thought leadership, innovation, and collaboration in the event
        industry.
      </span>,
      <span key="gcb-3">
        <strong>Awards & Recognition:</strong> Introduced platforms like{" "}
        <strong className=" text-orange-400 ">EEMA Impact Awards</strong> to
        celebrate excellence and innovation in events.
      </span>,
    ],
    image: "/images/home-page/journey-timeline/2016.jpg",
  },
  {
    date: "2020",
    title: "Navigating the Pandemic",
    description: [
      "Became the voice of the industry during COVID-19.",
      "Advocated for industry support and relief.",
      "Pivoted towards digital, virtual, and hybrid events.",
      "Conducted upskilling and virtual training programs for members.",
    ],
    image: "/images/home-page/journey-timeline/2020.jpg",
  },
  {
    date: "2021 – Present",
    title: "Recent Years",
    description: [
      "Strengthened partnerships with government bodies, academia, and international associations.",
      "Focus on sustainability, digital transformation, and global competitiveness.",
      "Launched initiatives like EEMA Leadership Summit, EEMA Youth Connect, CSR programs.",
    ],
    image: "/images/home-page/journey-timeline/2021-Present.jpg",
  },
  {
    date: "Today",
    title: "EEMA Today",
    description: [
      "Represents over 500+ member organizations and thousands of professionals.",
      <span key="et-1">
        <strong>Covers a wide spectrum of events:</strong> corporate, social,
        public, entertainment, and experiential marketing.
      </span>,
      "Functions as a platform for advocacy, education, networking, and business growth.",
    ],
    image: "/images/home-page/journey-timeline/Today.jpg",
  },
  {
    date: "Future",
    title: "Vision for the Future",
    description: [
      "Foster innovation, creativity, and responsible leadership in the events industry.",
      "Embrace new technologies and sustainable practices.",
      "Continue to shape India’s global standing in the experience economy.",
    ],
    image: "/images/home-page/journey-timeline/Present.jpg",
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

      {/* [&>*:nth-child(even)]:[&_ul]:list-disc */}
      <div className=" mx-auto ">
        <Timeline className="custom-timeline [&>*:nth-child(even)]:[&_.jt-head]:!text-left [&>*:nth-child(odd)]:[&_.jt-head-desc]:ml-auto  ">
          {journey.map((data, index) => (
            <Timeline.Item
              key={index}
              time={
                <div className=" jt-head ">
                  <p className=" font-semibold text-black ">{data.date}</p>
                  <h4 className=" text-xl font-bold text-orange-600 mb-2 mt-1 ">
                    {data.title}
                  </h4>
                  <div className=" leading-relaxed text-gray-500 max-w-96 jt-head-desc  ">
                    {/* {data.description} */}
                    <ul>
                      {data.description.map((desc, idx) => (
                        <li key={idx}>
                          <span className=" inline-block h-1.5 w-1.5 rounded-full bg-orange-600 mr-4 mb-0.5 "></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              }
            >
              <div className=" py-4 mb-7 mr-4 ">
                <section className=" mx-auto w-fit ">
                  <Image
                    src={data.image}
                    alt={data.title}
                    height={400}
                    width={500}
                    className=" rounded-2xl h-full sm:h-60 overflow-hidden object-cover "
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
