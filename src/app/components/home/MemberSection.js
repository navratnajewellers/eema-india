// "use client";

// import { ArrowUpRight, ChevronsDown, Mouse } from "lucide-react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function MemberSection() {
//   const memberDetails = [
//     {
//       name: "Samit Garg",
//       post: "President",
//       company: "E Factor Experiences Limited",
//       instagram: "https://www.instagram.com/samit.garg/?hl=en",
//       linkedin: "https://www.linkedin.com/in/samit-garg-5735598/",
//       image: "/images/team/samit-garg.jpg",
//     },
//     {
//       name: "Sagar Pingali",
//       post: "Executive Vice President",
//       company: "Catpro Events",
//       instagram: "https://www.instagram.com/sagarpingali1/?hl=en",
//       linkedin: "https://www.linkedin.com/in/sagar-pingali-1352aa5/",
//       image: "/images/team/sagar-pingali.jpg",
//     },
//     {
//       name: "Ankur Kalra",
//       post: "General Secretary",
//       company: "Vibgyor Brand Services",
//       instagram: "https://www.instagram.com/ankurkalra76/",
//       linkedin:
//         "https://www.linkedin.com/in/kalraankur/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
//       image: "/images/team/ankur-kalra-photo.jpg",
//     },
//     {
//       name: "Taranbir Sahni",
//       post: "Secretary",
//       company: "White Horse Event Management",
//       instagram: "https://www.instagram.com/taranbirsahni",
//       linkedin:
//         "https://www.linkedin.com/in/taranbir-sahni-3b45a215/?originalSubdomain=in",
//       image: "/images/team/taranbir-sahni.jpg",
//     },
//     {
//       name: "Jagmohan Singh",
//       post: "Treasurer",
//       company: "TNBT Marketing Services Pvt. Ltd.",
//       instagram: "https://www.instagram.com/jagskhan818/",
//       linkedin:
//         "https://www.linkedin.com/in/jagmohan-singh-b69077a/?originalSubdomain=in",
//       image: "/images/team/jagmohan-singh.jpg",
//     },
//     {
//       name: "Ruchin Kohli",
//       post: "Vice President - North",
//       company: "Occasion Experts Pvt. Ltd.",
//       instagram: "https://instagram.com/ruchinkohli?igshid=MzRlODBiNWFlZA==",
//       linkedin: "https://www.linkedin.com/in/ruchin-kohli-807961167/",
//       image: "/images/team/ruchin-kohli.jpg",
//     },
//     {
//       name: "DV Vinod Gopal",
//       post: "Vice President - South",
//       company: "Red Chariots Event Management & Marketing",
//       instagram: "https://www.instagram.com/dvvinodgopal/",
//       linkedin: "https://www.linkedin.com/in/d-v-vinod-gopal-80784321/",
//       image: "/images/team/d-v-vinod-2.jpg",
//     },
//     {
//       name: "Harshal Kothari",
//       post: "Vice President - West",
//       company: "Rising Events",
//       instagram: "https://www.instagram.com/harshal_rising_events/?img_index=1",
//       linkedin: "https://www.linkedin.com/in/harshal-kothari/",
//       image: "/images/team/harshal-kothari.jpg",
//     },
//     {
//       name: "Sonu Nanda",
//       post: "Vice President - East",
//       company: "Prelude Novel Ventures",
//       instagram: "",
//       linkedin:
//         "https://www.linkedin.com/in/kshetramohan-sonu-nanda-845aa270/?originalSubdomain=in",
//       image: "/images/team/sonu-nanda.jpg",
//     },
//   ];

//   return (
//     <>
//       <section
//         id="members"
//         className=" bg-gray-50 text-black px-7 sm:px-24 relative py-36 "
//       >
//         <div className=" sticky top-40 z-10 ">
//           <h4 className=" text-2xl font-bold w-32 pb-2 bg-gray-50 border-b-2 border-orange-600 ">
//             National Executive Committee
//           </h4>
//           <a
//             href="#flagship-event"
//             className=" block h-28 pt-7 mt-9 w-fit ml-9 "
//           >
//             <span className=" inline-block animate-arrow-fall ">
//               <Mouse />
//               <ChevronsDown />
//             </span>
//           </a>
//         </div>

//         <p className=" leading-relaxed text-2xl font-semibold max-w-2xl mb-32 mt-28 pr-32 text-gray-500 mx-auto ">
//           Meet the visionary leaders steering EEMA towards innovation, unity,
//           and excellence across India’s event and experiential landscape.
//         </p>

//         <div className=" relative ml-32 ">
//           {memberDetails.map((data, index) => (
//             <section
//               key={index}
//               className=" sticky top-24 bg-gray-50 h-[70vh] md:h-[50vh] xl:h-[100vh]"
//               style={{ zIndex: `${index + 1}` }}
//             >
//               <div className=" flex justify-center mb-4 ">
//                 <span className=" bg-orange-600 inline-block h-4 w-4 ml-0 md:ml-64 rotate-slow "></span>
//               </div>

//               <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 ">
//                 <div className=" relative h-[30vh] md:h-[400px] xl:h-[70vh] w-[80%] m-auto ">
//                   <Image
//                     src={data.image}
//                     alt="Member"
//                     fill
//                     priority
//                     className=" object-cover rounded-4xl "
//                   />
//                 </div>
//                 <div className=" flex flex-col justify-between px-4 py-7 ">
//                   <div>
//                     <h2 className=" font-bold text-4xl md:text-5xl tracking-tight mb-4 ">
//                       {data.name}
//                     </h2>
//                     <p className=" text-lg text-orange-600 mb-4 ">
//                       {data.post}
//                     </p>
//                     <h4 className=" font-medium text-2xl tracking-tight ">
//                       {data.company}
//                     </h4>
//                   </div>

//                   <div>
//                     <div className=" mt-11 md:mt-auto flex justify-between items-center ">
//                       <a
//                         href={data.instagram}
//                         target="_blank"
//                         className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-black text-sm font-semibold transition-all duration-300 hover:text-white "
//                       >
//                         <span className="transition-all duration-300 group-hover:text-[16px] text-nowrap ">
//                           INSTAGRAM
//                         </span>
//                         <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-black" />
//                       </a>

//                       <a
//                         href={data.linkedin}
//                         target="_blank"
//                         className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-black text-sm font-semibold transition-all duration-300 hover:text-white "
//                       >
//                         <span className="transition-all duration-300 group-hover:text-[16px] text-nowrap ">
//                           LINKEDIN
//                         </span>
//                         <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-black" />
//                       </a>
//                     </div>
//                     <span className=" block text-right font-medium tracking-tight ">
//                       {index + 1}/{memberDetails.length}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion"; // Optional
import Image from "next/image";

export default function MemberSection() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const memberDetails = [
    {
      name: "Samit Garg",
      post: "President",
      company: "E Factor Experiences Limited",
      instagram: "https://www.instagram.com/samit.garg/?hl=en",
      email: "president@eemaindia.com",
      linkedin: "https://www.linkedin.com/in/samit-garg-5735598/",
      image: "/images/team/samit-garg.jpg",
    },
    {
      name: "Sagar Pingali",
      post: "Executive Vice President",
      company: "Catpro Events",
      instagram: "https://www.instagram.com/sagarpingali1/?hl=en",
      email: "evp@eemaindia.com",
      linkedin: "https://www.linkedin.com/in/sagar-pingali-1352aa5/",
      image: "/images/team/sagar-pingali.jpg",
    },
    {
      name: "Ankur Kalra",
      post: "General Secretary",
      company: "Vibgyor Brand Services",
      instagram: "https://www.instagram.com/ankurkalra76/",
      email: "generalsecretary@eemaindia.com",
      linkedin:
        "https://www.linkedin.com/in/kalraankur/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      image: "/images/team/ankur-kalra-photo.jpg",
    },
    {
      name: "Taranbir Sahni",
      post: "Secretary",
      company: "White Horse Event Management",
      instagram: "https://www.instagram.com/taranbirsahni",
      email: "secretary@eemaindia.com",
      linkedin:
        "https://www.linkedin.com/in/taranbir-sahni-3b45a215/?originalSubdomain=in",
      image: "/images/team/taranbir-sahni.jpg",
    },
    {
      name: "Jagmohan Singh",
      post: "Treasurer",
      company: "TNBT Marketing Services Pvt. Ltd.",
      instagram: "https://www.instagram.com/jagskhan818/",
      email: "treasurer@eemaindia.com",
      linkedin:
        "https://www.linkedin.com/in/jagmohan-singh-b69077a/?originalSubdomain=in",
      image: "/images/team/jagmohan-singh.jpg",
    },
    {
      name: "Ruchin Kohli",
      post: "Vice President - North",
      company: "Occasion Experts Pvt. Ltd.",
      instagram: "https://instagram.com/ruchinkohli?igshid=MzRlODBiNWFlZA==",
      email: "vpnorth@eemaindia.com",
      linkedin: "https://www.linkedin.com/in/ruchin-kohli-807961167/",
      image: "/images/team/ruchin-kohli.jpg",
    },
    {
      name: "DV Vinod Gopal",
      post: "Vice President - South",
      company: "Red Chariots Event Management & Marketing",
      instagram: "https://www.instagram.com/dvvinodgopal/",
      email: "vpsouth@eemaindia.com",
      linkedin: "https://www.linkedin.com/in/d-v-vinod-gopal-80784321/",
      image: "/images/team/d-v-vinod-2.jpg",
    },
    {
      name: "Harshal Kothari",
      post: "Vice President - West",
      company: "Rising Events",
      instagram: "https://www.instagram.com/harshal_rising_events/?img_index=1",
      email: "vpwest@eemaindia.com",
      linkedin: "https://www.linkedin.com/in/harshal-kothari/",
      image: "/images/team/harshal-kothari.jpg",
    },
    {
      name: "Sonu Nanda",
      post: "Vice President - East",
      company: "Prelude Novel Ventures",
      instagram: "",
      email: "vpeast@eemaindia.com",
      linkedin:
        "https://www.linkedin.com/in/kshetramohan-sonu-nanda-845aa270/?originalSubdomain=in",
      image: "/images/team/sonu-nanda.jpg",
    },
    {
      name: "Vanessa Williams",
      post: "Joint Secretary - North",
      company: "Concept Conferences Pvt. Ltd.",
      instagram:
        "https://www.instagram.com/vanessa8769?igsh=MTN4YWR6Ymt6NDV0dg==",
      email: "jsnorth@eemaindia.com",
      linkedin:
        "https://in.linkedin.com/in/vanessa-williams-11bb153b?original_referer=https%3A%2F%2Fwww.google.com%2F",
      image: "/images/team/vanessa-williams.jpg",
    },
    {
      name: "Anupama Deshmukh",
      post: "Joint Secretary - South",
      company: "Eventronicx",
      instagram: "https://www.instagram.com/anupamadeshmukh/",
      email: "jssouth@eemaindia.com",
      linkedin: "",
      image: "/images/team/anupama-deshmukh.jpg",
    },
    {
      name: "Sanjay Agarwal",
      post: "Joint Secretary - East",
      company: "Solitaire Events",
      instagram: "https://www.instagram.com/isanjayagarwal/",
      email: "jseast@eemaindia.com",
      linkedin:
        "https://www.linkedin.com/in/sanjay-agarwal-7b765732/?originalSubdomain=in",
      image: "/images/team/sanjay-agarwal.jpg",
    },
    {
      name: "Ravi Mehta ",
      post: "Joint Secretary - West",
      company: "Robust Events",
      instagram:
        "https://www.instagram.com/mehtakehta/?api=postMessage&hl=am-et",
      email: "",
      linkedin:
        "https://www.linkedin.com/in/ravi-mehta-0b969412/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      image: "/images/team/ravi-mehta.jpg",
    },
    {
      name: "Naveen Gupta",
      post: "Committee Member 1- North",
      company: "Forty Five Positive Tech Pvt.Ltd.",
      instagram: "https://www.instagram.com/theeventpro/",
      email: "jswest@eemaindia.com",
      linkedin:
        "https://in.linkedin.com/in/naveen-gupta-9444b511?original_referer=",
      image: "/images/team/naveen-gupta.jpg",
    },
    {
      name: "Vipul Agarwal",
      post: "Committee Member 2- North",
      company: "Expro Events & Exhibits",
      instagram: "https://www.instagram.com/vipulk65?igsh=MXV1ZzBmOGx0MGtkeQ==",
      email: "",
      linkedin: "https://in.linkedin.com/in/vipul-agarwal-a1484655",
      image: "/images/team/vipul-agarwal.jpg",
    },
    {
      name: "G Rajesh",
      post: "Ergo Consulting Services (India) Pvt Ltd",
      company: "Committee Member 2 - South",
      instagram: "https://www.instagram.com/ergorajesh/",
      email: "",
      linkedin:
        "https://www.linkedin.com/in/rajesh-gopinathan/?originalSubdomain=in",
      image: "/images/team/g-rajesh.jpg",
    },
    {
      name: "R. Ramkumar",
      post: "Committee Member 1- South",
      company: "Varsham Events And Entertainment Pvt. Ltd.",
      instagram:
        "https://www.instagram.com/ramkumar_varsham/?__d=1%3Futm_source%3Dig_embed",
      email: "",
      linkedin:
        "https://www.linkedin.com/in/ramkumar-ramasamy-46495920a/?originalSubdomain=in",
      image: "/images/team/r-ramkumar.jpeg",
    },
    {
      name: "Hemant Matai",
      post: "Committee Member 1- west",
      company: "Trinity Entertainment And Strategic Consultants LLP",
      instagram: "https://www.instagram.com/hemant342/",
      email: "",
      linkedin: "https://www.linkedin.com/in/hemant-matai/",
      image: "/images/team/hemant-matai.jpg",
    },
    {
      name: "Kiran Shetty",
      post: "Committee Member 2- west",
      company: "Collective Heads Experiential Mkt. Solutions Pvt.Ltd",
      instagram: "https://www.instagram.com/keyran26/",
      email: "",
      linkedin: "",
      image: "/images/team/kiran-shetty.jpg",
    },
    {
      name: "Pramod Lunawat",
      post: "Committee Member 1- East",
      company: "Millennium Accolades Promotions Pvt Ltd",
      instagram: "https://www.instagram.com/pramod.lunawat.7/",
      email: "",
      linkedin:
        "https://in.linkedin.com/in/pramodlunawat?original_referer=https%3A%2F%2Fwww.google.com%2F",
      image: "/images/team/pramod-lunawat.jpg",
    },
    {
      name: "Sanjay Bhandari",
      post: "Committee Member 2- East",
      company: "Encore Events Pvt. Ltd",
      instagram: "",
      email: "",
      linkedin: "https://in.linkedin.com/in/sanjay-bhandari-44b337241",
      image: "/images/team/sanjay-bhandari.jpg",
    },
  ];

  return (
    <section className="relative bg-gray-50 px-6 py-16">
      {/* <h2 className="text-3xl font-bold mb-10 text-center">
        National Executive Committee
      </h2> */}

      <div className="max-w-3xl mx-auto text-center">
        <h4 className=" text-xl text-black sm:text-4xl font-bold w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600">
          National Executive Committee
        </h4>
        <p className=" text-lg sm:text-xl font-semibold text-gray-500 mb-7 mt-10 sm:mb-20">
          Meet the visionary leaders steering EEMA towards innovation, unity,
          and excellence across India’s event and experiential landscape.
        </p>
      </div>

      <div className=" relative ">
        {/* Navigation Buttons */}
        <div className="absolute -left-4 md:left-4 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="bg-white border border-gray-300 p-2 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring"
          >
            <ChevronLeft />
          </button>
        </div>
        <div className="absolute -right-4 md:right-4 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="bg-white border border-gray-300 p-2 rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className=" relative overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar flex gap-10 px-6 py-7"
        >
          {memberDetails.map((data, index) => (
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="snap-center flex-shrink-0 w-[90vw] md:w-[60vw] xl:w-[60vw] bg-white text-black shadow-xl rounded-2xl p-6"
            >
              <div className=" hidden md:flex justify-center mb-4 ">
                <span className=" bg-orange-600 inline-block h-4 w-4 ml-0 md:ml-64 rotate-slow "></span>
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 ">
                <div className=" relative h-[30vh] md:h-[400px] xl:h-[70vh] w-[80%] m-auto ">
                  <Image
                    src={data.image}
                    alt="Member"
                    fill
                    priority
                    className=" object-fill sm:object-cover rounded-4xl "
                  />
                </div>
                <div className=" flex flex-col justify-between px-4 py-7 ">
                  <div>
                    <h2 className=" font-bold text-4xl md:text-5xl tracking-tight mb-4 ">
                      {data.name}
                    </h2>
                    <p className=" text-lg text-orange-600 hover:text-orange-700 mb-4 ">
                      <a
                        href={data.email ? `mailto:${data.email}` : data.email}
                        className=" block "
                      >
                        {data.post}
                      </a>
                    </p>
                    <h4 className=" font-medium text-2xl tracking-tight ">
                      {data.company}
                    </h4>
                  </div>

                  <div>
                    <div className=" mt-11 md:mt-auto flex justify-between items-center ">
                      <a
                        href={data.instagram}
                        target="_blank"
                        className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-black text-sm font-semibold transition-all duration-300 hover:text-white "
                      >
                        <span className="transition-all duration-300 group-hover:text-[16px] text-nowrap ">
                          INSTAGRAM
                        </span>
                        <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-black" />
                      </a>

                      <a
                        href={data.linkedin}
                        target="_blank"
                        className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-black text-sm font-semibold transition-all duration-300 hover:text-white "
                      >
                        <span className="transition-all duration-300 group-hover:text-[16px] text-nowrap ">
                          LINKEDIN
                        </span>
                        <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-black" />
                      </a>
                    </div>
                    <span className=" block text-right font-medium tracking-tight ">
                      {index + 1}/{memberDetails.length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className=" mt-7 sm:mt-20 flex justify-center items-center ">
        <a
          href="/about"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
        >
          Find Out More
        </a>
      </div>
    </section>
  );
}
