"use client";

import { Tabs, useMediaQuery } from "rsuite";
import Slider from "react-slick";
import WHeader from "../components/WHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RegionalInitiativesPage() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const featureDetails = [
    {
      title: "Share with Care",
      description: "A charitable trust to aid the needy",
      image:
        "https://www.volunteerindiaispiice.com/wp-content/uploads/2022/02/12299392_10150591199694946_6743987408806625850_n-1.jpg",
    },
    {
      title: "Employee Engagement",
      description:
        "To promote engagement among North employees and various members",
      image: "https://www.sociabble.com/medias/employee-engagement-ideas.jpg",
    },
    {
      title: "Vendors/Partners Day",
      description:
        "To celebrate the hard work and evoke pride among vendors and partners who are a part of EEMA",
      image:
        "https://www.outlife.in/uploads/6/1/9/7/6197204/img-4971-copy_3_orig.jpg",
    },
    {
      title: "Money Hai Toh Honey Hai",
      description:
        "An initiative that helps generate revenue and share profits gained from talent and artist acquisition",
      image:
        "https://www.peta.org/wp-content/uploads/2024/04/IMG_1721-scaled.jpg",
    },
  ];

  const workDetails = [
    {
      title: "GURUKOOL",
      description:
        "GURUKOOL was shaped as an outcome of Manthan as a means to provide interactive learning for employees and members. This event consisted of industry experts sharing their experiences with the audience.",
      image:
        "https://eemaindia.com/uploads/regionalinitiatives/5cb6fa2c0b7a6je6BnXgXfx.png",
    },
    {
      title: "POWER BRUNCH",
      description:
        "POWER BRUNCH marked a new trend in networking and though leadership. The inaugural session was graced by Amish Tripathi, the celebrated author who wowed the West Zone audience with his success philosophy.",
      image:
        "https://eemaindia.com/uploads/regionalinitiatives/5cb6f9a9e9ea9BrDcA4iniJ.png",
    },
    {
      title: "EEMAG",
      description:
        "EEMAG is an in-house industry newsletter that was launched digitally to members and industry stakeholders all the way back in October 2014.",
      image:
        "https://eemaindia.com/uploads/regionalinitiatives/5cb6f992981e8KZBMDDaahU.png",
    },
  ];

  const slides = [
    {
      image:
        "https://eemaindia.com/uploads/sliders/5cbd67fd98eaat0IqCkok4h.jpeg",
    },
    {
      image:
        "https://eemaindia.com/uploads/sliders/5cbd67d3b9aadypYyC1T0KD.jpeg",
    },
    {
      image:
        "https://eemaindia.com/uploads/sliders/5cbd67fd98eaat0IqCkok4h.jpeg",
    },
    {
      image:
        "https://eemaindia.com/uploads/sliders/5cbd67d3b9aadypYyC1T0KD.jpeg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <WHeader />

      <div className="px-6 md:px-24 py-24 max-w-6xl mx-auto space-y-16 text-black ">
        {/* Hero Section */}
        <section className="text-center space-y-4 mt-11 py-7 ">
          <h1 className="text-4xl font-bold text-primary text-orange-600 uppercase ">
            Regional Initiatives
          </h1>
          <p className="text-muted-foreground text-lg">
            Through regional partnerships and initiatives, EEMA brings local
            voices, culture, and industry together under a national platform.
          </p>
        </section>

        {/* What Are Regional Initiatives */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-l-4 border-orange-600 pl-4 text-black ">
            What Are Regional Initiatives?
          </h2>
          <p className=" leading-relaxed text-gray-500 pt-4 ">
            EEMA’s Regional Initiatives aim to bridge the gap between local
            talent and national opportunity. We partner with regional
            associations, vendors, and professionals to share knowledge, drive
            advocacy, and build event excellence across every state.
          </p>
          <p className="leading-relaxed text-gray-500 ">
            EEMA is focused towards building engagement across multiple regions
            to ensure maximum regional development and participation.
          </p>
          <p className="leading-relaxed text-gray-500 ">
            The North Zone was responsible for initiating Manthan: The churning
            of the Ocean of Milk - One of the most famous tales from the
            Mahabharata. This was made possible through a team building
            activity, that was a result of innovation, brainstorming and
            out-of-the-box thinking led to the creation of this event. It was
            voted our most popular event of all time.
          </p>
          <p className="leading-relaxed text-gray-500 ">
            Additionally, EEMA has been successful in launching multiple
            initiatives as a part of its Corporate Social Responsibility (CSR).
          </p>
        </section>

        {/* image Slider */}
        <div className="w-full">
          <Slider
            {...settings}
            className="[&_.slick-slide]:px-4 [&_.slick-list]:-mx-4"
          >
            {slides.map((data, index) => (
              <div
                key={index}
                className=" shadow-md rounded-2xl overflow-hidden "
              >
                <div className="w-full h-[250px] relative rounded-xl overflow-hidden shadow-md ">
                  <Image
                    src={data.image}
                    alt={`image-${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* feature section */}
        <section className=" max-w-4xl mx-auto rounded-2xl shadow-md mt-32 border-2 border-gray-200 p-4 text-black ">
          <Tabs
            defaultActiveKey="1"
            vertical={isMobile ? false : true}
            appearance="subtle"
            className="  [&_.rs-nav]:overflow-x-scroll [&_.rs-nav]:md:overflow-auto [&_.rs-nav-item-active]:!text-orange-600 [&_.rs-nav-item-active:before]:!bg-orange-600 [&_.rs-nav-item]:hover:!text-orange-500 "
          >
            {featureDetails.map((data, index) => (
              <Tabs.Tab
                key={index}
                eventKey={`${index + 1}`}
                title={`${data.title}`}
              >
                <div className=" text-center space-y-4 py-4 px-7 ">
                  <div className=" relative mx-auto rounded-2xl overflow-hidden h-72 w-[90%] md:w-[475px] ">
                    <Image
                      src={data.image}
                      alt={data.title}
                      fill
                      className=" object-cover "
                    />
                  </div>
                  <h4 className=" inline-block pl-4 tracking-tight text-2xl text-orange-600 font-semibold mt-4 ">
                    {data.title}
                  </h4>
                  <p className=" leading-relaxed font-light text-lg text-gray-500 ">
                    {data.description}
                  </p>
                </div>
              </Tabs.Tab>
            ))}
          </Tabs>
        </section>

        {/* Testimonial */}
        <section className="text-center space-y-4 italic border-l-4 border-primary border-orange-600 pl-6 mt-44 mb-11 text-black ">
          <p>
            “Thanks to EEMA’s support, we’ve grown from a small vendor group to
            a recognized voice in state-level policy.”
          </p>
          <p className="font-semibold">— President, EEMA (India)</p>
        </section>
      </div>

      <div className=" relative bg-gray-50 py-7 ">
        {workDetails.map((data, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`sticky top-5 h-[92vh] flex items-center justify-center ${!isEven ? "bg-orange-600" : "bg-black"} text-white text-5xl mx-7 mb-10 px-7 rounded-[50px]`}
              style={{ zIndex: `${index + 1}` }}
            >
              <div className="grid md:grid-cols-2 gap-2 ml-2 xl:ml-32 ">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  viewport={{ amount: 0.5, once: true }}
                  className=" px-7 "
                >
                  <h2>{data.title}</h2>
                  <p className=" leading-relaxed text-gray-300 text-lg mt-11 ">
                    {data.description}
                  </p>
                  <div className=" flex justify-center mt-11 md:mt-20 ">
                    <span className=" bg-orange-600 inline-block h-7 w-7 rotate-slow "></span>
                  </div>
                </motion.div>

                <div className=" overflow-hidden ">
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    viewport={{ amount: 0.5, once: true }}
                    className=" relative h-[200px] md:h-[350px] mt-9 w-full "
                  >
                    <Image
                      src={data.image}
                      alt={data.title}
                      fill
                      className=" object-cover "
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className=" mx-auto py-24 px-7 space-y-4 flex flex-col justify-center items-center text-center bg-gradient-to-tr from-orange-800 via-orange-500 to-orange-300 ">
        <h2 className="text-3xl font-bold text-white ">
          Are You a Regional Event Leader?
        </h2>
        <p className="text-muted-foreground text-lg text-gray-100 ">
          Let’s build something impactful together. Partner with EEMA and
          represent your region on a national stage.
        </p>
        <a
          href="#"
          className=" text-lg font-medium py-1.5 px-6 mt-7 border-2 border-gray-50 rounded-xl cursor-pointer text-black bg-gray-50 shadow-md transition hover:bg-transparent hover:text-white "
        >
          Partner With Us
        </a>
      </div>
    </>
  );
}
