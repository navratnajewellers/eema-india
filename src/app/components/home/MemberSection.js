"use client";

import Image from "next/image";

export default function MemberSection() {
  const memberDetails = [
    {
      name: "Samit Garg",
      post: "President",
      company: "E Factor Experiences Limited",
      instagram: "https://www.instagram.com/samit.garg/?hl=en",
      linkedin: "https://www.linkedin.com/in/samit-garg-5735598/",
      image: "/images/team/samit-garg.jpg",
    },
    {
      name: "Sagar Pingali",
      post: "Executive Vice President",
      company: "Catpro Events",
      instagram: "https://www.instagram.com/sagarpingali1/?hl=en",
      linkedin: "https://www.linkedin.com/in/sagar-pingali-1352aa5/",
      image: "/images/team/sagar-pingali.jpg",
    },
    {
      name: "Ankur Kalra",
      post: "General Secretary",
      company: "Vibgyor Brand Services",
      instagram: "https://www.instagram.com/ankurkalra76/",
      linkedin:
        "https://www.linkedin.com/in/kalraankur/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      image: "/images/team/ankur-kalra-photo.jpg",
    },
    {
      name: "Taranbir Sahni",
      post: "Secretary",
      company: "White Horse Event Management",
      instagram: "https://www.instagram.com/taranbirsahni",
      linkedin:
        "https://www.linkedin.com/in/taranbir-sahni-3b45a215/?originalSubdomain=in",
      image: "/images/team/taranbir-sahni.jpg",
    },
    {
      name: "Jagmohan Singh",
      post: "Treasurer",
      company: "TNBT Marketing Services Pvt. Ltd.",
      instagram: "https://www.instagram.com/jagskhan818/",
      linkedin:
        "https://www.linkedin.com/in/jagmohan-singh-b69077a/?originalSubdomain=in",
      image: "/images/team/jagmohan-singh.jpg",
    },
    {
      name: "Ruchin Kohli",
      post: "Vice President - North",
      company: "Occasion Experts Pvt. Ltd.",
      instagram: "https://instagram.com/ruchinkohli?igshid=MzRlODBiNWFlZA==",
      linkedin: "https://www.linkedin.com/in/ruchin-kohli-807961167/",
      image: "/images/team/ruchin-kohli.jpg",
    },
    {
      name: "DV Vinod Gopal",
      post: "Vice President - South",
      company: "Red Chariots Event Management & Marketing",
      instagram: "https://www.instagram.com/dvvinodgopal/",
      linkedin: "https://www.linkedin.com/in/d-v-vinod-gopal-80784321/",
      image: "/images/team/d-v-vinod.jpg",
    },
    {
      name: "Harshal Kothari",
      post: "Vice President - West",
      company: "Rising Events",
      instagram: "https://www.instagram.com/harshal_rising_events/?img_index=1",
      linkedin: "https://www.linkedin.com/in/harshal-kothari/",
      image: "/images/team/harshal-kothari.jpg",
    },
    {
      name: "Sonu Nanda",
      post: "Vice President - East",
      company: "Prelude Novel Ventures",
      instagram: "",
      linkedin:
        "https://www.linkedin.com/in/kshetramohan-sonu-nanda-845aa270/?originalSubdomain=in",
      image: "/images/team/sonu-nanda.jpg",
    },
  ];

  return (
    <section
      id="members"
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
                      href={data.instagram}
                      className=" font-semibold tracking-tight "
                    >
                      INSTAGRAM
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
