"use client";

import AboutCompany from "../components/about/AboutCompany";
import HRCodePage from "../components/about/HRCodePage";
import IndustryPapersPage from "../components/about/IndustryPapersPage";
import NLTPage from "../components/about/NLTPage";
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
      <WHeader headerNavItems={headerNavItems} />

      <AboutCompany />

      <NLTPage />

      <HRCodePage />

      <IndustryPapersPage />
    </>
  );
}
