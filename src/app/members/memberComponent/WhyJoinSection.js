"use client";

import Slider from "react-slick";
import { motion } from "framer-motion";
import { Users, Megaphone, BookOpen, Briefcase, Globe } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reasonsToJoin = [
  {
    title: "Powerful Networking",
    description:
      "Meet and collaborate with top professionals, agencies, and vendors across the country.",
    icon: <Users size={36} className="text-blue-600" />,
  },
  {
    title: "Industry Advocacy",
    description:
      "Get represented at national forums and policy-making bodies that impact our industry.",
    icon: <Megaphone size={36} className="text-blue-600" />,
  },
  {
    title: "Learning & Growth",
    description:
      "Access workshops, panels, and exclusive content to stay ahead of trends.",
    icon: <BookOpen size={36} className="text-blue-600" />,
  },
  {
    title: "Business Opportunities",
    description:
      "Participate in EEMA events and unlock collaborations with key stakeholders.",
    icon: <Briefcase size={36} className="text-blue-600" />,
  },
  {
    title: "Global Recognition",
    description:
      "Leverage platforms like EMAX Global to showcase your work worldwide.",
    icon: <Globe size={36} className="text-blue-600" />,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
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

export default function WhyJoinSection() {
  return (
    <section className=" py-20 px-4 bg-white text-center fancy-border ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl text-black font-bold mb-9 w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 ">
          Why Join EEMA?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore the benefits of being part of India’s leading event and
          experiential industry association.
        </p>
      </motion.div>

      <div className="max-w-6xl px-7 mx-auto">
        <Slider
          {...settings}
          className=" [&_.slick-list]:!pb-6 [&_.slick-next:before]:!text-black [&_.slick-prev:before]:!text-black "
        >
          {reasonsToJoin.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg text-center h-full flex flex-col items-center justify-center space-y-4">
                <div>{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </Slider>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <a
            href="/join"
            className="inline-block bg-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Become a Member
          </a>
        </motion.div>
      </div>
    </section>
  );
}
