"use client";

import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WHeader from "../components/WHeader";
import Image from "next/image";

const joiningSteps = [
  {
    title: "Explore Roles",
    description: "Browse open roles that match your interests and skills.",
    image:
      "https://images.pexels.com/photos/4559589/pexels-photo-4559589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Apply Online",
    description:
      "Fill out a simple application form for interns or experienced roles.",
    image:
      "https://images.pexels.com/photos/7821577/pexels-photo-7821577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Get Interviewed",
    description:
      "Connect with our team to understand mutual goals and expectations.",
    image:
      "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Join the Team",
    description: "Become part of EEMA and contribute to exciting projects.",
    image:
      "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

export default function CareersPage() {
  return (
    <>
      <WHeader />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] flex items-center justify-center">
          <div className="bg-black/60 absolute inset-0" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-center text-white z-10 px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-7 text-orange-600">
              Build Your Career at EEMA
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Join a vibrant team of professionals leading India&apos;s event
              and experiential industry.
            </p>
          </motion.div>
        </section>

        <section
          id="career"
          className=" bg-white text-black px-7 sm:px-24 relative py-24 "
        >
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 text-center ">
            <motion.section
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className=" text-black order-2 md:order-1 "
            >
              <div className=" max-w-2xl mx-auto mb-16  ">
                <h4 className=" tracking-tight text-2xl font-bold w-fit mx-auto border-l-4 border-r-4 border-orange-600 px-4 ">
                  Shape your career, unlock your full potential, and make a
                  meaningful impact.
                </h4>
              </div>

              <p className=" leading-relaxed font-medium mb-4 text-gray-500 ">
                A WORLD OF INNOVATION, EXPERIENCES AND INCLUSIVITY! OPENING THE
                DOORS TO EEMA&apos;s 800+ MEMBERS PAN INDIA
              </p>

              <p className=" leading-relaxed font-medium mb-4 text-gray-500 ">
                EEMA, the only apex national body, seeks to bring together the
                country’s leading Event Management, Sports Management and Brand
                Activation companies, MICE and Wedding Planners, Experiential
                Marketers, Entertainment Professionals, Artist Management
                companies and international counterparts on the same platform.
                EEMA&apos;s members include all significant organised players
                across the length and breadth of the country. It is estimated
                that close to 80% of the organized revenue in this space is
                represented through the EEMA members.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className=" px-7 order-1 md:order-2 "
            >
              <div className=" relative w-full h-96 ">
                <Image
                  src="/images/others/career.jpg"
                  alt="career"
                  fill
                  className=" object-cover "
                />
              </div>
            </motion.section>
          </div>
        </section>

        {/* Process Carousel */}
        <section className="py-24 px-4 bg-gray-50 text-center fancy-border ">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl text-black font-bold mb-14 w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 "
          >
            How the Joining Process Works
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <Slider
              {...settings}
              className=" [&_.slick-list]:!pb-6 [&_.slick-next:before]:!text-black [&_.slick-prev:before]:!text-black "
            >
              {joiningSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 space-y-4 border-2 border-gray-100">
                    <div className=" relative w-full h-72 ">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className=" object-cover rounded-md "
                      />
                    </div>
                    {/* <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-60 object-cover rounded-md"
                    /> */}
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="py-24 px-4 text-center bg-gradient-to-bl from-yellow-200 via-orange-200 to-orange-600 ">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl text-black font-bold mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Come work with the industry leaders!
          </p>
          <div className="space-x-4 mt-7 ">
            <a
              href="/apply?type=intern"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Apply Now – Interns
            </a>
            <a
              href="/apply?type=experienced"
              className="inline-block bg-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Apply Now – Experienced
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

// "use client";

// import Image from "next/image";
// import Slider from "react-slick";
// import WHeader from "../components/WHeader";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ArrowUpRight } from "lucide-react";
// import { Accordion } from "rsuite";

// export default function CareerPage() {
//   const headerNavItems = [
//     {
//       text: "Career",
//       link: "#career",
//     },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const slides = [
//     {
//       image:
//         "https://d3r3sr3o54kk15.cloudfront.net/s3fs-public/styles/webp/public/carees/nasscom_values/2%202.png.webp?itok=OTLs73iv",
//       title: "LifeLong Learning",
//       description:
//         "EEMA encourages and supports ongoing personal and professional development, recognizing that learning is a lifelong journey essential for growth and innovation in the rapidly evolving tech landscape.",
//     },
//     {
//       image:
//         "https://d3r3sr3o54kk15.cloudfront.net/s3fs-public/styles/webp/public/carees/nasscom_values/Effective%20Collaboration.png.webp?itok=dfCNRY8E",
//       title: "Trustworthiness",
//       description:
//         "EEMA maintains an unyielding commitment to trustworthiness and integrity in all its interactions and endeavors, ensuring reliability and confidence in the tech industry.",
//     },
//     {
//       image:
//         "https://d3r3sr3o54kk15.cloudfront.net/s3fs-public/styles/webp/public/carees/nasscom_values/Continuous%20Learning.png.webp?itok=J64T31Sm",
//       title: "Collaborative Spirit",
//       description:
//         "EEMA promotes and cultivates a culture of seamless and efficient teamwork, harnessing the collective expertise and diverse perspectives of its members and partners to achieve common goals and objectives.",
//     },
//     {
//       image:
//         "https://d3r3sr3o54kk15.cloudfront.net/s3fs-public/styles/webp/public/carees/nasscom_values/Championing%20Inclusion.png.webp?itok=hulbt7bO",
//       title: "Impactful Delivery",
//       description:
//         "EEMA is dedicated to achieving the greatest positive effect and influence through its actions, projects, and initiatives, driving significant progress in the technology sector.",
//     },
//   ];

//   return (
//     <>
//       <WHeader headerNavItems={headerNavItems} />

//       <section
//         id="career"
//         className=" bg-gray-50 text-black px-7 sm:px-24 relative py-11 "
//       >
//         <div>
//           <h2 className=" leading-relaxed text-6xl font-bold text-orange-600 ">
//             Careers
//           </h2>
//         </div>
//         <div className=" grid grid-cols-1 md:grid-cols-12 gap-8 ">
//           <section className=" col-span-12 md:col-span-9 text-black ">
//             <h4 className=" tracking-tight text-3xl font-bold text-orange-500 mb-7 ">
//               Shape your career, unlock your full potential, and make a
//               meaningful impact.
//             </h4>

//             <p className=" leading-relaxed font-medium mb-4 ">
//               A WORLD OF INNOVATION, EXPERIENCES AND INCLUSIVITY! OPENING THE
//               DOORS TO EEMA&apos;s 800+ MEMBERS PAN INDIA
//             </p>

//             <p className=" leading-relaxed font-medium mb-4 ">
//               EEMA, the only apex national body, seeks to bring together the
//               country’s leading Event Management, Sports Management and Brand
//               Activation companies, MICE and Wedding Planners, Experiential
//               Marketers, Entertainment Professionals, Artist Management
//               companies and international counterparts on the same platform.
//               EEMA&apos;s members include all significant organised players
//               across the length and breadth of the country. It is estimated that
//               close to 80% of the organized revenue in this space is represented
//               through the EEMA members.
//             </p>
//           </section>
//           <section className=" col-span-12 md:col-span-3 relative pt-11 md:pt-[66%] mx-auto ">
//             <div className=" flex justify-center items-center sticky top-2/4 z-10 ">
//               <a className=" inline-block border-2 py-3 px-9 rounded-4xl bg-orange-600 text-white leading-relaxed font-semibold cursor-pointer ">
//                 WORK WITH US
//               </a>
//             </div>
//           </section>
//         </div>
//       </section>

//       <div className=" py-11 ">
//         <section className=" flex justify-center items-center -mb-32 ">
//           <div className=" relative w-[80%] h-[500px] ">
//             <Image
//               src="https://d3r3sr3o54kk15.cloudfront.net/s3fs-public/styles/webp/public/Landing_page_banner/career.jpg.webp?itok=K1J_zqnu"
//               alt="career page"
//               fill
//               className=" object-cover "
//             />
//           </div>
//         </section>

//         <section className=" py-11 text-white bg-orange-600 ">
//           <div className=" mt-32 w-[80%] m-auto ">
//             <h2 className=" leading-relaxed font-bold text-4xl mb-16 mt-4 ">
//               EEMA Values
//             </h2>

//             <div className="w-full">
//               <Slider
//                 {...settings}
//                 className="[&_.slick-slide]:px-4 [&_.slick-list]:-mx-4"
//               >
//                 {slides.map((data, index) => (
//                   <div
//                     key={index}
//                     className=" shadow-md rounded-2xl bg-black/5 overflow-hidden "
//                   >
//                     <div className="w-full h-[200px] relative rounded-xl overflow-hidden shadow-md ">
//                       <Image
//                         src={data.image}
//                         alt={data.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <div className=" py-7 px-2 text-center ">
//                       <h2 className=" tracking-tight font-bold mb-4 text-3xl ">
//                         {data.title}
//                       </h2>
//                       <p className=" leading-relaxed font-medium text-gray-100 ">
//                         {data.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         </section>

//         <section className=" w-[80%] m-auto py-24 ">
//           <h2 className=" tracking-tight font-bold text-3xl md:text-4xl mb-4 text-orange-600 ">
//             Join EEMA
//           </h2>
//           <p className=" leading-relaxed font-semibold text-lg text-gray-400 mb-7 ">
//             If you are an enthusiastic, creative, and eager candidate to join
//             the experiential industry & passionate about event planning and
//             creating unique brand experiences, this is your chance to learn and
//             grow in an exciting field!
//           </p>
//           <a
//             href="#"
//             className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-black text-xl font-semibold transition-all duration-300 hover:text-white "
//           >
//             <span className="transition-all duration-300 group-hover:text-2xl text-nowrap ">
//               Apply Now
//             </span>
//             <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white" />
//           </a>
//         </section>
//       </div>

//       <div className=" w-[90%] h-0.5 bg-gray-200 m-auto "></div>

//       <section className=" py-24 px-7 md:px-28 ">
//         <h2 className=" tracking-tight font-bold text-3xl md:text-4xl mb-11 text-orange-600 ">
//           Frequently Asked Questions
//         </h2>
//         <Accordion defaultActiveKey={1} bordered>
//           <Accordion.Panel
//             header="What is the hiring and interview process?"
//             eventKey={1}
//           >
//             <div className=" py-2 ">
//               <p className=" text-gray-500 leading-relaxed mb-4 text-lg ">
//                 We recommend everyone who is keen to apply to EEMA to go through
//                 our website thoroughly. It is important for the applicant to be
//                 fully aware about the impact EEMA creates and be clear if they
//                 want to be part of the journey.
//               </p>
//               <p className=" text-gray-500 leading-relaxed mb-4 text-lg ">
//                 Once you get shortlisted, you are called for interviews. There
//                 3-4 rounds of interviews which is a combination of discussion
//                 with the interviewer and case study / presentation on some
//                 related topic. Each discussion is elimination round.
//               </p>
//               <div className=" py-4 text-gray-700 leading-relaxed ">
//                 <span className=" font-semibold ">Email: </span>
//                 <span>
//                   <a
//                     href="mailto:career@eemaindia.com"
//                     className=" inline-block hover:text-blue-500 "
//                   >
//                     career@eemaindia.com
//                   </a>
//                 </span>
//               </div>
//             </div>
//           </Accordion.Panel>
//           <Accordion.Panel
//             header="Can I apply for multiple openings at EEMA?"
//             eventKey={2}
//           >
//             <div className=" py-2 ">
//               <p className=" text-gray-500 leading-relaxed text-lg ">
//                 You can apply for as many roles as you deem fit for yourself and
//                 your career.
//               </p>
//             </div>
//           </Accordion.Panel>
//           <Accordion.Panel
//             header="How to apply for a job role and hiring process?"
//             eventKey={3}
//           >
//             <div className=" py-2 ">
//               <div className=" py-4 text-gray-700 leading-relaxed ">
//                 <span className=" font-semibold ">You can apply at </span>
//                 <span>
//                   <a
//                     href="mailto:career@eemaindia.com"
//                     className=" inline-block hover:text-blue-500 "
//                   >
//                     career@eemaindia.com
//                   </a>
//                 </span>
//               </div>
//               <p className=" text-gray-500 leading-relaxed text-lg ">
//                 You will be contacted if your profile is shortlisted.
//               </p>
//             </div>
//           </Accordion.Panel>
//         </Accordion>
//       </section>
//     </>
//   );
// }
