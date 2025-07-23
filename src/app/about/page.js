"use client";

import AboutCompany from "../components/about/AboutCompany";
import HRCodePage from "../components/about/HRCodePage";
import IndustryPapersPage from "../components/about/IndustryPapersPage";
import NLTPage from "../components/about/NLTPage";
import WHeader from "../components/WHeader";
import "../styles/about.css";

export default function AboutPage() {
  return (
    <>
      <WHeader />

      <AboutCompany />

      <NLTPage />

      {/* <HRCodePage /> */}

      {/* <IndustryPapersPage /> */}
    </>
  );
}
