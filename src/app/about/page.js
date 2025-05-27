"use client";

import AboutCompany from "../components/about/AboutCompany";
import NLTPage from "../components/about/NLTPage";
import WFooter from "../components/WFooter";
import WHeader from "../components/WHeader";

export default function AboutPage() {
  const headerNavItems = [
    {
      text: "About EEMA",
      link: "#about-us",
    },
    {
      text: "National Leadership Team",
      link: "#members",
    },
    {
      text: "HR Code of Conduct",
      link: "/eemagine-2024",
    },
    {
      text: "Industry White Papers",
      link: "/eemax-global",
    },
  ];

  return (
    <>
      <div className=" relative z-[2] bg-gray-50 ">
        <WHeader headerNavItems={headerNavItems} />

        <AboutCompany />

        {/* <NLTPage /> */}
      </div>

      <WFooter />
    </>
  );
}
