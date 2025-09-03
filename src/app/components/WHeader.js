import Link from "next/link";
import NavSection from "./home/NavSection";
import "../styles/header.css";
import HeaderSideBar from "./HeaderSideBar";
import Image from "next/image";

export default function WHeader({ headerNavItems, headerImage }) {
  return (
    <header className=" h-full w-full bg-gray-50 relative shadow-md border-b-2 border-gray-200 pb-24  ">
      <section className=" h-[14vh] md:h-[8vh] xl:h-[5vh] w-full">
        <Link
          href="/"
          className=" h-home-container inline-block fixed top-5 left-4 md:top-11 md:left-14 z-50 py-2.5 px-2.5 sm:py-9 sm:px-7 bg-gray-50 rounded-2xl sm:rounded-4xl text-black "
        >
          Home
        </Link>

        {/* <Link
          href="/"
          className=" h-home-container inline-block fixed top-2 left-2 md:top-11 md:left-14 z-50 py-5 px-4 bg-gray-50 rounded-3xl text-black "
        >
          <div className=" relative w-16 h-4  ">
            <Image
              src="/images/logo/eema-logo-orange-black-sm.png"
              alt="eema-india-logo-small"
              fill
            />
          </div>
        </Link> */}

        <HeaderSideBar />
      </section>

      <NavSection headerNavItems={headerNavItems} headerImage={headerImage} />
    </header>
  );
}
