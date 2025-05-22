"use client";

import Image from "next/image";

export default function MemberSection() {
  const memberDetails = [
    {
      name: "Samit Garg",
      post: "President",
      company: "E Factor Experiences Limited",
      twitter: "#",
      linkedin: "#",
      image:
        "https://framerusercontent.com/images/s7QZIjw19OakCTOtz4Ea2TJyuPU.jpeg",
    },
    {
      name: "PVN Vidyasagar",
      post: "Executive Vice President",
      company: "Catpro Events",
      twitter: "#",
      linkedin: "#",
      image:
        "https://framerusercontent.com/images/pKFplD4TeUOajTb2K3gkkQRfI.jpeg",
    },
    {
      name: "Ankur Kalra",
      post: "General Secretary",
      company: "Vibgyor Brand Services",
      twitter: "#",
      linkedin: "#",
      image:
        "https://framerusercontent.com/images/EpddwxHdVzYBD973tSQzzLLdexo.jpeg",
    },
    {
      name: "Taranbir Sahni",
      post: "Secretary",
      company: "White Horse Event Management",
      twitter: "#",
      linkedin: "#",
      image:
        "https://framerusercontent.com/images/MzzdQNGVUI8kv5070Ye62b9I1Q.jpeg",
    },
    {
      name: "Jagmohan Singh",
      post: "Treasurer",
      company: "TNBT Marketing Services Pvt. Ltd.",
      twitter: "#",
      linkedin: "#",
      image:
        "https://framerusercontent.com/images/PqZ1d3Qx7FLbMbM7V7Xjdite9Uk.jpeg",
    },
    {
      name: "Ruchin Kohli",
      post: "Vice President - North",
      company: "Occasion Experts Pvt. Ltd.",
      twitter: "#",
      linkedin: "#",
      image: "https://eemaindia.com/uploads/teams/66d06d6501e98j02SjdaOfl.jpeg",
    },
    {
      name: "DV Vinod Gopal",
      post: "Vice President - South",
      company: "Red Chariots Event Management & Marketing",
      twitter: "#",
      linkedin: "#",
      image:
        "https://framerusercontent.com/images/IZkFPkZz8mFsJtXebHyRsjiq7co.jpeg",
    },
    {
      name: "Harshal Kothari",
      post: "Vice President - West",
      company: "Rising Events",
      twitter: "#",
      linkedin: "#",
      image: "https://eemaindia.com/uploads/teams/66d06f1549585lGSzXzedo7.jpeg",
    },
    {
      name: "Sonu Nanda",
      post: "Vice President - East",
      company: "Prelude Novel Ventures",
      twitter: "#",
      linkedin: "#",
      image: "https://eemaindia.com/uploads/teams/632166ed25b67MfcUIxLlpf.jpeg",
    },
  ];

  return (
    <section
      id="member"
      className=" bg-gray-50 text-black px-7 sm:px-24 relative py-36 "
    >
      <h4 className=" text-2xl sticky top-40 z-10 ">(Meet Us)</h4>

      <p className=" leading-relaxed text-2xl font-semibold max-w-2xl mb-32 mt-28 pr-32 ">
        Meet the visionary leaders steering EEMA towards innovation, unity, and
        excellence across India’s event and experiential landscape.
      </p>

      <div className=" relative ml-32 ">
        {memberDetails.map((data, index) => (
          <section
            key={index}
            className=" sticky top-24 bg-gray-50 h-[70vh] md:h-[50vh] xl:h-[100vh]"
            style={{ zIndex: `${index + 1}` }}
          >
            <div className=" flex justify-center mb-4 ">
              <span className=" bg-orange-600 inline-block h-4 w-4 ml-0 md:ml-64 rotate-slow "></span>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <div className=" relative h-[30vh] md:h-[400px] xl:h-[70vh] w-[80%] m-auto ">
                <Image
                  src={data.image}
                  alt="Member"
                  fill
                  priority
                  className=" object-cover rounded-4xl "
                />
              </div>
              <div className=" flex flex-col justify-between px-4 py-7 ">
                <div>
                  <h2 className=" font-bold text-4xl md:text-5xl tracking-tight mb-4 ">
                    {data.name}
                  </h2>
                  <p className=" text-lg text-orange-600 mb-4 ">{data.post}</p>
                  <h4 className=" font-medium text-2xl tracking-tight ">
                    {data.company}
                  </h4>
                </div>

                <div>
                  <div className=" flex justify-between items-center ">
                    <a
                      href={data.twitter}
                      className=" font-semibold tracking-tight "
                    >
                      TWITTER
                    </a>
                    <a
                      href={data.linkedin}
                      className=" font-semibold tracking-tight "
                    >
                      LINKEDIN
                    </a>
                  </div>
                  <span className=" block text-right font-medium tracking-tight ">
                    {index + 1}/{memberDetails.length}
                  </span>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
