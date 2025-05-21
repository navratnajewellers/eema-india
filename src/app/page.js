import AboutSection from "./components/home/AboutSection";
import HomeHeroSection from "./components/home/HomeHeroSection";
import MemberSection from "./components/home/MemberSection";
import TestFooter from "./components/home/TestFooter";
import WHeader from "./components/WHeader";
import "./styles/home.css";

export default function Home() {
  return (
    <>
      <WHeader />

      <HomeHeroSection />

      <AboutSection />

      <MemberSection />

      <TestFooter />
    </>
  );
}
