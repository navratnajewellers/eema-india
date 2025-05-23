import AboutSection from "./components/home/AboutSection";
import HomeHeroSection from "./components/home/HomeHeroSection";
import MemberSection from "./components/home/MemberSection";
import PressCoverage from "./components/home/PressCoverage";
import ServiceSection from "./components/home/ServiceSection";
import WFooter from "./components/WFooter";
import WHeader from "./components/WHeader";
import "./styles/home.css";

export default function Home() {
  return (
    <>
      <div className=" relative z-[2] ">
        <WHeader />

        <HomeHeroSection />

        <AboutSection />

        <MemberSection />

        <PressCoverage />

        <ServiceSection />
      </div>

      <WFooter />
    </>
  );
}
