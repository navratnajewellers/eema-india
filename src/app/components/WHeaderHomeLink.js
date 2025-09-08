"use client";

import Link from "next/link";
import HeaderSideBar from "./HeaderSideBar";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export default function WHeaderHomeLink() {
  const { scrollY } = useScroll();
  const [direction, setDirection] = useState("Idle");
  const [lastScroll, setLastScroll] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScroll) {
      setDirection("Down");
    } else if (latest < lastScroll) {
      setDirection("Up");
    }
    setLastScroll(latest);
  });

  return (
    <section className=" h-[14vh] md:h-[8vh] xl:h-[5vh] w-full">
      <Link
        href="/"
        className={` h-home-container inline-block fixed ${direction == "Idle" || direction == "Up" ? "!top-5" : "!-top-44"} left-4 md:top-11 md:left-14 z-50 py-2.5 px-2.5 sm:py-9 sm:px-7 bg-gray-50 rounded-2xl sm:rounded-4xl text-black `}
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
  );
}
