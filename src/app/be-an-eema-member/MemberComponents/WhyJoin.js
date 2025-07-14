"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reasons = [
  {
    title: "Grow Your Network",
    description:
      "Connect with top event professionals, vendors, and global partners through national and international platforms.",
    // image: "/images/why-join/network.jpg",
    image:
      "https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Access Exclusive Events",
    description:
      "Attend high-impact industry summits, workshops, and award shows as part of your membership.",
    // image: "/images/why-join/events.jpg",
    image: "https://eemaindia.com/uploads/gallery/5caf115f5f366wJNp17iBD0.jpeg",
  },
  {
    title: "Industry Recognition",
    description:
      "Be part of award-winning projects, showcase your work, and gain visibility in the industry.",
    // image: "/images/why-join/recognition.jpg",
    image: "https://eemaindia.com/uploads/gallery/5caf047d2efc1CysGPRzQbC.jpeg",
  },
  {
    title: "Learning & Development",
    description:
      "Get access to curated masterclasses, white papers, and newsletters to stay ahead in the field.",
    // image: "/images/why-join/learning.jpg",
    image: "https://eemaindia.com/uploads/gallery/5caf02a24face5j7pTvGakQ.jpeg",
  },
  {
    title: "Collaborative Growth",
    description:
      "Partner with industry leaders and government bodies to help shape the future of the event industry.",
    // image: "/images/why-join/collaboration.jpg",
    image: "https://eemaindia.com/uploads/gallery/5caf0c56546ebUmQQx4Py9p.jpeg",
  },
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
      },
    },
  ],
};

export default function WhyJoin() {
  return (
    <section className="bg-white py-16 px-4 fancy-border ">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-black text-3xl md:text-4xl font-bold w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600"
        >
          Why Join EEMA?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mt-4"
        >
          Discover the value and benefits of being part of India’s largest event
          and experiential marketing community.
        </motion.p>
      </div>

      <Slider
        {...settings}
        className="max-w-4xl mx-auto [&_.slick-slide]:px-4 [&_.slick-list]:-mx-4 pb-7 "
      >
        {reasons.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-100 rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
          >
            <div className="w-full h-64 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className=" text-black text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </Slider>

      <div className="text-center mt-16">
        <a href="https://membership.eemaindia.com/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg cursor-pointer"
          >
            Become a Member
          </motion.button>
        </a>
      </div>
    </section>
  );
}
