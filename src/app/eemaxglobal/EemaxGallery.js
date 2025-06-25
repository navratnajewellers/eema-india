"use client";

import Slider from "react-slick";
import { Tabs } from "rsuite";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion } from "framer-motion";
import VideoGrid from "./VideoGrid";

const EemaxGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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

  const imageSlides = [
    {
      image: "/images/eemax-global-assets/eemax-gallery/SANT0996.jpeg",
    },
    {
      image: "/images/eemax-global-assets/eemax-gallery/SANT1097.jpg",
    },
    {
      image: "/images/eemax-global-assets/eemax-gallery/SANT1117.jpg",
    },
    {
      image: "/images/eemax-global-assets/eemax-gallery/SANT0996.jpeg",
    },
    {
      image: "/images/eemax-global-assets/eemax-gallery/SANT1097.jpg",
    },
    {
      image: "/images/eemax-global-assets/eemax-gallery/SANT1117.jpg",
    },
    {
      image: "/images/eemax-global-assets/eemax-gallery/SANT0996.jpeg",
    },
    {
      image: "/images/eemax-global-assets/eemax-gallery/SANT1097.jpg",
    },
    {
      image: "/images/eemax-global-assets/eemax-gallery/SANT1117.jpg",
    },
  ];

  return (
    <section className=" py-11 ">
      <div className=" flex flex-col justify-center items-center space-y-7 mb-16 ">
        <h2 className=" text-4xl leading-tight font-bold border-l-4 border-r-4 border-orange-600 px-4 ">
          Gallery
        </h2>
        <h5 className=" leading-relaxed font-medium text-lg text-gray-400  ">
          EEMAX Global Awards
        </h5>
      </div>
      <Tabs
        defaultActiveKey="1"
        appearance="pills"
        className=" [&_.rs-nav-pills]:mx-auto "
      >
        <Tabs.Tab eventKey="1" title="Image">
          <div className="relative w-full">
            {/* Left Blur */}
            <div className=" hidden md:inline-block absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white via-white/70 to-transparent blur-xl z-10 pointer-events-none" />

            {/* Right Blur */}
            <div className=" hidden md:inline-block absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white via-white/70 to-transparent blur-xl z-10 pointer-events-none" />

            {/* main code */}
            <div className="w-full py-11 border-2 border-gray-200 shadow-md rounded-2xl overflow-hidden ">
              <Slider
                {...settings}
                className="[&_.slick-slide]:px-4 [&_.slick-list]:-mx-4 w-[150vw] -ml-[30vw] "
              >
                {imageSlides.map((data, index) => (
                  <motion.a
                    initial={{ scale: 0.7, filter: "saturate(0%)" }}
                    whileInView={{ scale: 1, filter: "saturate(100%)" }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    viewport={{ amount: 0.5 }}
                    key={index}
                    href={data.image}
                    target="_blank"
                    className=" border-2 shadow-md rounded-2xl bg-black/5 overflow-hidden block border-gray-200 "
                  >
                    <div className="w-full h-[350px] relative rounded-xl overflow-hidden shadow-md ">
                      <Image
                        src={data.image}
                        alt={`image-${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-all"
                      />
                    </div>
                  </motion.a>
                ))}
              </Slider>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab eventKey="2" title="Video">
          <VideoGrid />
        </Tabs.Tab>
      </Tabs>
    </section>
  );
};

export default EemaxGallery;
