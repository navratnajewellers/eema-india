"use client";

import Image from "next/image";

export default function MemberSection() {
  const memberDetails = [
    {
      name: "Samit Garg",
      post: "",
      company: "",
      twitter: "",
      linkedin: "",
      image: "",
    },
  ];

  return (
    <section
      id="member"
      className=" bg-gray-50 text-black px-7 sm:px-24 relative py-11 "
    >
      <h4 className=" text-2xl sticky top-40 z-10 ">(Meet Us)</h4>

      <p className=" leading-relaxed text-lg  max-w-2xl border-2 ">
        Meet the visionary leaders steering EEMA towards innovation, unity, and
        excellence across India’s event and experiential landscape.
      </p>

      <div className=" relative ml-32 ">
        <section className=" sticky top-24 z-[1] bg-gray-50 h-[70vh] md:h-[100vh]">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 ">
            <div className=" relative h-[30vh] md:h-[70vh] w-[80%] m-auto ">
              <Image
                src="https://framerusercontent.com/images/s7QZIjw19OakCTOtz4Ea2TJyuPU.jpeg"
                alt="Member"
                fill
                priority
                className=" object-cover rounded-4xl "
              />
            </div>
            <div className=" flex flex-col justify-between border-2 px-4 py-7 ">
              <div>
                <h2 className=" font-bold text-4xl md:text-5xl tracking-tight mb-4 ">
                  Samit Garg
                </h2>
                <p className=" font-semibold text-2xl text-orange-600 mb-4 ">
                  President
                </p>
                <h4 className=" font-medium text-2xl tracking-tight ">
                  E Factor Experiences Limited
                </h4>
              </div>

              <div>
                <div className=" flex justify-between items-center ">
                  <a href="#" className=" font-semibold tracking-tight ">
                    TWITTER
                  </a>
                  <a href="#" className=" font-semibold tracking-tight ">
                    LINKEDIN
                  </a>
                </div>
                <span className=" block text-right font-medium tracking-tight ">
                  1/6
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className=" sticky top-24 z-[2] bg-amber-500 h-[70vh] md:h-[100vh]"></section>
        <section className=" sticky top-24 z-[3] bg-red-500 h-[70vh] md:h-[100vh]"></section>
        <section className=" sticky top-24 z-[4] bg-green-500 h-[70vh] md:h-[100vh]"></section>
        <section className=" sticky top-24 z-[5] bg-pink-500 h-[70vh] md:h-[100vh]"></section>
      </div>
    </section>
  );
}
