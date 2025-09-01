// import AboutSection from "./components/home/AboutSection";
import HomeCarousel from "./components/home/HomeCarousel";
import HomeHeroSection from "./components/home/HomeHeroSection";
// import JourneyTimeline from "./components/home/JourneyTimeline";
import MemberCTASection from "./components/home/MemberCTASection";
import MemberSection from "./components/home/MemberSection";
import PressCoverage from "./components/home/PressCoverage";
// import ServiceSection from "./components/home/ServiceSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
// import StartupPopup2 from "./components/StartupPopup2";
import WHeader from "./components/WHeader";
import "./styles/home.css";

export default function Home() {
  return (
    <>
      {/* <StartupPopup2 /> */}

      <WHeader />

      <HomeCarousel />

      {/* <div className=" w-[90%] h-0.5 bg-gray-200 m-auto "></div> */}

      <MemberSection />

      <div className=" w-[90%] h-0.5 bg-gray-200 m-auto "></div>

      <HomeHeroSection />

      <div className=" w-[90%] h-0.5 bg-gray-200 m-auto "></div>

      <TestimonialsSection />

      <MemberCTASection />

      <div className=" w-[90%] h-0.5 bg-gray-200 m-auto "></div>

      <PressCoverage />
    </>
  );
}
