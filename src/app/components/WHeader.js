import Link from "next/link";
import NavSection from "./home/NavSection";
import "../styles/header.css";

export default function WHeader({ headerNavItems }) {
  return (
    <header className=" h-screen xl:h-full w-full bg-gray-50 relative  ">
      <section className=" h-[25vh] w-full">
        <Link
          href="/"
          className=" h-home-container inline-block fixed top-2 left-2 md:top-11 md:left-14 z-50 py-9 px-7 bg-gray-50 rounded-4xl text-black "
        >
          Home
        </Link>
      </section>

      <NavSection headerNavItems={headerNavItems} />
    </header>
  );
}
