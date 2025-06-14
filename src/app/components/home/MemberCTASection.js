"use client";

import Image from "next/image";
import "../../styles/home.css";

export default function MemberCTASection() {
  return (
    <section className=" bg-gray-50 w-full relative z-0 m-cta-bg-sec ">
      <Image
        src="https://www.asce.org/-/media/images/asce/content/standard/promo-full-width/promo-full-width-img1.jpg"
        alt="bg-image"
        fill
        className=" object-cover -z-10 "
      />

      <div className=" max-w-4xl m-auto flex flex-col justify-center items-center py-28 px-7 text-white leading-relaxed text-center ">
        <div className=" flex justify-center mb-11 ">
          <span className=" bg-white inline-block h-5 w-5 rotate-slow "></span>
        </div>
        <h2 className=" text-2xl md:text-4xl font-bold mb-7 ">
          Join EEMA and Shape the Future of Events and Experiences in India
        </h2>
        <p className=" text-lg md:text-xl font-medium mb-4 px-11 md:px-24 text-gray-200">
          Be a part of India’s most influential network of event professionals,
          creators, and experience-makers.
        </p>
        <a
          href="/become-emma-member"
          className=" border-2 inline-block py-2 px-9 mt-7 rounded-4xl group border-white hover:bg-white transition-colors cursor-pointer "
        >
          <span className=" text-black font-bold group-hover:text-orange-600 transition-colors ">
            Become a Member
          </span>
        </a>
      </div>
    </section>
  );
}
