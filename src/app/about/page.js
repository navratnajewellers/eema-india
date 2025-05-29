"use client";

import AboutCompany from "../components/about/AboutCompany";
import HRCodePage from "../components/about/HRCodePage";
import IndustryPapersPage from "../components/about/IndustryPapersPage";
import NLTPage from "../components/about/NLTPage";
import WFooter from "../components/WFooter";
import WHeader from "../components/WHeader";
import "../styles/about.css";

export default function AboutPage() {
  const headerNavItems = [
    {
      text: "About EEMA",
      link: "#about-eema",
    },
    {
      text: "National Leadership Team",
      link: "#national-leadership-team",
    },
    {
      text: "HR Code of Conduct",
      link: "#hr-code-of-conduct",
    },
    {
      text: "Industry White Papers",
      link: "#industry-whitepaper",
    },
  ];

  return (
    <>
      <div className=" relative z-[2] bg-gray-50 ">
        <WHeader headerNavItems={headerNavItems} />

        <AboutCompany />

        <NLTPage />

        <HRCodePage />

        <IndustryPapersPage />
      </div>

      <WFooter />
    </>
  );
}
