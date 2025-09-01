"use client";

import { Nav } from "rsuite";
import AboutCompany from "../components/about/AboutCompany";
import NLTPage from "../components/about/NLTPage";
import JourneyTimeline from "../components/home/JourneyTimeline";
import WHeader from "../components/WHeader";
import "../styles/about.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <>
      <WHeader />

      <div className=" relative ">
        <div className=" sticky top-0 z-40 bg-gray-50 [&_.rs-nav-pills]:!w-full [&_.rs-nav-pills]:!flex-wrap [&_.rs-nav-pills]:justify-center [&_.rs-nav-pills]:items-center ">
          <div className=" h-28 block md:hidden "></div>
          <Nav
            appearance="pills"
            activeKey={activeSection}
            onSelect={setActiveSection}
          >
            <Nav.Item eventKey="about" as="a" href="#about">
              About Us
            </Nav.Item>
            <Nav.Item eventKey="journey-of-eema" as="a" href="#journey-of-eema">
              Journey of EEMA
            </Nav.Item>
            <Nav.Item
              eventKey="national-leadership-team"
              as="a"
              href="#national-leadership-team"
            >
              National Leadership Team
            </Nav.Item>
          </Nav>
        </div>

        <motion.div
          id="about"
          onViewportEnter={() => setActiveSection("about")}
        >
          <AboutCompany />
        </motion.div>

        <motion.div
          id="journey-of-eema"
          onViewportEnter={() => setActiveSection("journey-of-eema")}
        >
          <JourneyTimeline />
        </motion.div>

        <motion.div
          onViewportEnter={() => setActiveSection("national-leadership-team")}
        >
          <NLTPage />
        </motion.div>

        {/* <HRCodePage /> */}

        {/* <IndustryPapersPage /> */}
      </div>
    </>
  );
}
