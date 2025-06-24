import Link from "next/link";
import NavSection from "./home/NavSection";
import "../styles/header.css";
import HeaderSideBar from "./HeaderSideBar";

export default function WHeader({ headerNavItems, headerImage }) {
  return (
    <header className=" h-screen xl:h-full w-full bg-gray-50 relative shadow-md border-b-2 border-gray-200 pb-24  ">
      <section className=" h-[25vh] w-full">
        <Link
          href="/"
          className=" h-home-container inline-block fixed top-2 left-2 md:top-11 md:left-14 z-50 py-9 px-7 bg-gray-50 rounded-4xl text-black "
        >
          Home
        </Link>

        <HeaderSideBar />
      </section>

      <NavSection headerNavItems={headerNavItems} headerImage={headerImage} />
    </header>
  );
}
