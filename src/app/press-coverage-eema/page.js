"use client";

import AllPressCoverage from "../components/press-coverage/AllPressCoverage";
import EemaInitiatives from "../components/press-coverage/EemaInitiatives";
import WFooter from "../components/WFooter";
import WHeader from "../components/WHeader";

export default function PressCoveragePage() {
  const headerNavItems = [
    {
      text: "Press Coverage",
      link: "#press-coverage",
    },
    {
      text: "EEMA Initiatives",
      link: "#eema-initiatives",
    },
  ];

  return (
    <>
      <div className=" relative z-[2] bg-gray-50 ">
        <WHeader headerNavItems={headerNavItems} />

        <AllPressCoverage />

        {/* <EemaInitiatives /> */}
      </div>

      <WFooter />
    </>
  );
}
