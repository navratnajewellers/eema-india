"use client";

import WHeader from "../components/WHeader";
import { Button, Panel } from "rsuite";
import Image from "next/image";
import { Globe, Handshake, Mic, Trophy } from "lucide-react";
import EemaxGallery from "./EemaxGallery";
import { motion } from "framer-motion";

export default function EemaxglobalPage() {
  const headerNavItems = [
    {
      text: "EEMAX Global",
      link: "/eemaxglobal/",
    },
    {
      text: "Winners",
      link: "/eemaxglobal/winners",
    },
    {
      text: "Awards",
      link: "/eemaxglobal/awards",
    },
    {
      text: "Contacts Us",
      link: "/eemaxglobal/contact",
    },
    {
      text: "Apply Now",
      link: "https://eemax.eemaindia.com/signup",
    },
  ];

  const features = [
    {
      icon: <Globe className="w-10 h-10 text-blue-500 mx-auto mb-2" />,
      title: "Global Recognition",
      description:
        "Honouring Indian projects that achieve international acclaim.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-blue-500 mx-auto mb-2" />,
      title: "International Collaboration",
      description:
        "Partnering with leading global bodies in events and entertainment.",
    },
    {
      icon: <Mic className="w-10 h-10 text-blue-500 mx-auto mb-2" />,
      title: "Global Showcases",
      description:
        "Featuring Indian professionals at global conventions and summits.",
    },
    {
      icon: <Trophy className="w-10 h-10 text-blue-500 mx-auto mb-2" />,
      title: "Gateway to Global Awards",
      description:
        "Helping members submit work to international award platforms.",
    },
  ];

  return (
    <>
      <WHeader
        headerNavItems={headerNavItems}
        headerImage="/images/logo/eemax-2025-logo.png"
      />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden mb-7">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videos/eemax-video-assets/eemax-banner-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            viewport={{ amount: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-orange-600 mb-4"
          >
            EMAX Global
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            viewport={{ amount: 0.5 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6"
          >
            Taking Indian event excellence to the global stage. Celebrate,
            connect, and collaborate across borders.
          </motion.p>
          <Button appearance="primary" color="orange" size="lg">
            Apply Now
          </Button>
        </div>
      </section>

      {/* What is EMAX Global */}
      <section className="space-y-4 py-20 px-7 md:px-24 ">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          viewport={{ amount: 0.5 }}
          className="text-3xl font-semibold border-l-4 border-orange-600 pl-4 "
        >
          What Is EMAX Global?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          viewport={{ amount: 0.5 }}
          className="text-gray-700 text-lg "
        >
          EMAX Global celebrates Indian excellence on a global platform. By
          collaborating with international event associations and recognizing
          cross-border impact, we ensure that India’s creative brilliance is
          acknowledged worldwide.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          viewport={{ amount: 0.5 }}
          className="text-gray-700 text-lg "
        >
          Since inception,{" "}
          <span className=" font-semibold text-orange-600 ">
            EEMAX Global Awards
          </span>{" "}
          are considered as the Most Coveted Awards of the Experiential
          Industry. These awards celebrate and recognize top honors in
          categories including Corporate Events, Consumer Experiences,
          Exhibitions, Social Events, MICE, IP&apos;s etc. The conclave is a
          world-class thought leadership summit and a superlative networking
          opportunity for the entire industry.
        </motion.p>
      </section>

      <section className=" relative w-full h-screen overflow-hidden ">
        <Image
          src="/images/eemax-global-assets/eemax-global-banner.jpg"
          alt="EEMAX Global Banner"
          fill
          className=" object-cover "
        />
      </section>

      <div className="px-6 py-12 max-w-6xl mx-auto space-y-16">
        {/* Features Section */}
        <section className="px-6 space-y-20 py-20 ">
          <h2 className="text-4xl md:text-3xl font-semibold text-center text-black w-fit mx-auto border-l-4 border-r-4 border-orange-600 px-4  ">
            Our Global Pillars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {features.map((item, idx) => (
              <Panel
                key={idx}
                bordered
                shaded
                className="text-center space-y-2"
              >
                <span className="">{item.icon}</span>
                <h3 className="text-lg font-bold mt-4 mb-2 ">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Panel>
            ))}
          </div>
        </section>

        {/* EEMAX Gallery */}
        <EemaxGallery />
      </div>

      {/* Call to Action */}
      <div className=" mx-auto py-24 px-7 space-y-4 flex flex-col justify-center items-center text-center bg-gradient-to-tr from-orange-800 via-orange-500 to-orange-300 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          viewport={{ amount: 0.5 }}
          className="text-3xl font-bold text-white "
        >
          Think your work deserves the global spotlight?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          viewport={{ amount: 0.5 }}
          className="text-muted-foreground text-lg text-gray-100 "
        >
          Let’s make it happen together.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
          viewport={{ amount: 0.5 }}
          href="#"
          className=" text-lg font-medium py-1.5 px-6 mt-7 border-2 border-gray-50 rounded-xl cursor-pointer text-black bg-gray-50 shadow-md transition hover:bg-transparent hover:text-white "
        >
          Partner With Us
        </motion.a>
      </div>
    </>
  );
}
