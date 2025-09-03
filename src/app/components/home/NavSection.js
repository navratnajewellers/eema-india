"use client";

import { MoveDown } from "lucide-react";
import AnimatedSquare2 from "./AnimatedSquare2";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    text: "About Us",
    link: "/about",
  },
  {
    text: "Members",
    link: "/members",
  },
  {
    text: "Eemagine 2025",
    link: "/eemagine2025",
  },
  {
    text: "EEMAX Global",
    link: "/eemaxglobal",
  },
  {
    text: "Knowledge Center",
    link: "/knowledge-center",
  },
  {
    text: "Careers",
    link: "/careers",
  },
];

export default function NavSection({
  headerNavItems,
  headerImage = "/images/logo/eema-logo-orange-black.png",
}) {
  const newNavItems = headerNavItems?.length > 0 ? headerNavItems : navItems;

  return (
    <section className=" bg-gray-50 h-full relative ">
      <div className=" relative bottom-0 left-0 w-full mt-2 md:mt-2 xl:mt-2 mb-20 overflow-hidden ">
        <div className=" flex justify-center items-center p-0 xl:mt-14  ">
          <div className=" relative h-[140px] w-[75%] md:h-[110px] md:w-[250px] ">
            <Image src={headerImage} alt="company-logo" fill />
          </div>
          {/* <div className=" relative h-[160px] w-[340px] md:h-[150px] md:w-[370px] ">
            <Image src={headerImage} alt="company-logo" fill />
          </div> */}
          {/* <img
            src={headerImage}
            alt="company-logo"
            className=" h-[250px] w-[350px] md:h-[270px] md:w-[650px] "
          /> */}
        </div>
      </div>

      <div className=" grid sm:grid-cols-3 gap-4 px-11 ">
        <div className="flex flex-col gap-4 p-2 max-w-xl xl:ml-12 md:col-span-2">
          {newNavItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className=" h-nav-link-container group relative h-9 flex items-center justify-between px-4 py-3 cursor-pointer text-black text-2xl sm:text-4xl font-extrabold transition-all duration-300 hover:text-white overflow-hidden "
            >
              <span className="transition-all duration-300 group-hover:text-5xl text-nowrap ">
                {item.text}
              </span>
              <MoveDown className="w-5 h-5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white" />
            </a>
          ))}
        </div>

        <div className="  mx-2 md:col-span-1 md:mt-11 ">
          <Link
            href="/"
            className=" block tracking-tight text-black text-2xl font-bold mb-4 mt-11 sm:mt-0 hover:text-orange-600 "
          >
            EEMA India
          </Link>
          {/* <p className=" leading-relaxed text-lg text-gray-500 font-semibold ">
            EEMA is an autonomous, non-profit body of registered companies,
            institutions, and professionals operating within India’s Events and
            Experiential Marketing industry.
          </p> */}
          <p className=" leading-relaxed text-lg text-gray-500 font-semibold ">
            EEMA is India’s first and only body uniting event management, sports
            management, brand activators, MICE and wedding planners,
            experiential marketers, entertainment professionals, artist
            managers, and global counterparts on one platform.
          </p>
        </div>
      </div>

      <div className=" absolute right-1/12 bottom-[25%] md:bottom-[60%] xl:bottom-[52%] xl:z-[2] ">
        <AnimatedSquare2 />
      </div>
    </section>
  );
}
