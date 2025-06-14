"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function IndustryPapersPage() {
  const [serviceNumber, setServiceNumber] = useState(0);

  const indstryPaperData = [
    {
      title: "Events Re-Opening Guidelines",
      image:
        "https://eemaindia.com/uploads/whitepapers/60f3d50e7fa39cABrdbib7E.jpeg",
      link: "https://eemaindia.com/uploads/whitepapers/pdf/1626592526_EEMA_SOP.pdf",
    },
    {
      title: "Making Experiences in India",
      image:
        "https://eemaindia.com/uploads/whitepapers/5d63c2b86b037BgBzuv3y8X.jpeg",
      link: "https://eemaindia.com/uploads/whitepapers/pdf/1566819000_EEMA_Report_2015_-_EEMA_Final_lores.pdf",
    },
    {
      title: "Indian Events Industry",
      image:
        "https://eemaindia.com/uploads/whitepapers/5d63c25ed3f3aOmjsrU4mgd.jpeg",
      link: "https://eemaindia.com/uploads/whitepapers/pdf/1566818910_EEMA_2012_-_INDIAN_EVENTS_INDUSTRY_LOW.pdf",
    },
    {
      title: "The Business of Experiences",
      image:
        "https://eemaindia.com/uploads/whitepapers/5d527f02e8443c5lahHlmAO.jpeg",
      link: "https://eemaindia.com/uploads/whitepapers/pdf/1677822134_E&Y_last_year_report_2012-_The_business_of_experiences_white_paper.pdf",
    },
    {
      title: "FICCI EY Report",
      image:
        "https://eemaindia.com/uploads/whitepapers/5cb6e4f954361NV11WsEGYe.jpeg",
      link: "https://eemaindia.com/uploads/whitepapers/pdf/1555489891_EY-a-billion-screens-of-opportunity-min.pdf",
    },
    {
      title: "#Experience Next 2017",
      image:
        "https://eemaindia.com/uploads/whitepapers/5d63c54ddea40H0yeI0SLxy.jpeg",
      link: "https://eemaindia.com/uploads/whitepapers/pdf/1555489891_EY-a-billion-screens-of-opportunity-min.pdf",
    },
  ];

  return (
    <section
      id="industry-whitepaper"
      className=" bg-gray-50 text-black px-7 sm:px-24 relative py-36  "
    >
      <h4 className=" text-black font-semibold text-right block md:sticky top-40 z-10 ">
        (Industry White Papers)
      </h4>

      <div className=" relative py-11 ">
        <div className=" w-1/2 sticky top-40 md:top-[50%] z-10 left-full md:left-0 ">
          <div className=" flex justify-center ">
            <span className=" bg-orange-600 flex justify-center items-center h-20 w-20 rotate-slow ">
              <h2 className=" text-9xl text-white rotate-slow-anticlock ">
                {serviceNumber}
              </h2>
            </span>
          </div>
        </div>

        <div className=" overflow-hidden ">
          {indstryPaperData.map((data, index) => (
            <motion.div
              initial={{ opacity: 0, x: 90 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ amount: 0.5 }}
              onViewportEnter={() => {
                setServiceNumber(index + 1);
              }}
              key={index}
              className="  grid grid-cols-1 md:grid-cols-3 px-1 md:px-24 mb-7 "
            >
              <div className=" hidden md:block md:col-span-1 "></div>

              <div className=" py-7 md:col-span-2 px-7 md:px-14 ">
                <div className=" relative h-[400px] w-[70%] mb-7 ">
                  <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    priority
                    className=" object-cover "
                  />
                </div>
                <h4 className=" text-black tracking-tight text-3xl mb-4 font-semibold ">
                  {data.title}
                </h4>

                <a
                  href={data.link}
                  className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-orange-600 text-sm font-semibold transition-all duration-300 hover:text-white "
                >
                  <span className="transition-all duration-300 group-hover:text-xl text-nowrap ">
                    Download
                  </span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
