import AboutSection from "./components/home/AboutSection";
import HomeHeroSection from "./components/home/HomeHeroSection";
import MemberCTASection from "./components/home/MemberCTASection";
import MemberSection from "./components/home/MemberSection";
import PressCoverage from "./components/home/PressCoverage";
import ServiceSection from "./components/home/ServiceSection";
import StartupPopup2 from "./components/StartupPopup2";
import WHeader from "./components/WHeader";
import "./styles/home.css";

export default function Home() {
  const headerNavItems = [
    {
      text: "About Us",
      link: "#about",
    },
    {
      text: "Members",
      link: "#members",
    },
    {
      text: "Eemagine 2025",
      link: "/eemagine-2025",
    },
    {
      text: "EEMAX Global",
      link: "/eemax-global",
    },
    {
      text: "Careers",
      link: "/careers",
    },
  ];

  return (
    <>
      <StartupPopup2 />

      <WHeader headerNavItems={headerNavItems} />

      <AboutSection />

      <div className=" w-[90%] h-0.5 bg-gray-200 m-auto "></div>

      <MemberSection />

      <MemberCTASection />

      <div className=" w-[90%] h-0.5 bg-gray-200 m-auto "></div>

      <PressCoverage />

      <div className=" w-[90%] h-0.5 bg-gray-200 m-auto "></div>

      <ServiceSection />

      <div className=" w-[90%] h-0.5 bg-gray-200 m-auto "></div>

      <HomeHeroSection />
    </>
  );
}
