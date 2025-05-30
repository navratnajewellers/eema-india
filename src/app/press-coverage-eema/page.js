"use client";

import AllPressCoverage from "../components/press-coverage/AllPressCoverage";
import EemaInitiatives from "../components/press-coverage/EemaInitiatives";
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
      <WHeader headerNavItems={headerNavItems} />

      <AllPressCoverage />

      {/* <EemaInitiatives /> */}
    </>
  );
}
