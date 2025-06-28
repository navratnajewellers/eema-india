"use client";

import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rohit Malhotra",
      company: "Laqshya Live Experiences",
      text: "EEMA gave us a platform to collaborate nationally. The network and knowledge we've gained are unmatched.",
    },
    {
      name: "Anjali Kapoor",
      company: "Showtime Events",
      text: "From government advocacy to vendor coordination, EEMA has helped us grow at every step.",
    },
    {
      name: "Kunal Singh",
      company: "Tessarakt Experiential",
      text: "The support during COVID and the digital push were crucial for our survival and success.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-bold mb-7 w-fit mx-auto border-l-4 border-r-4 border-orange-600 px-4 ">
          What Our Members Say
        </h2>
        <p className="text-gray-600 mt-2">
          Real stories from EEMA members on how the association empowered their
          journey in the events industry.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <p className="text-gray-800 mb-4 text-lg italic">
                  &quot;{item.text}&quot;
                </p>
                <div className="font-semibold text-orange-600 text-lg">
                  {item.name}
                </div>
                <div className="text-sm text-gray-500">{item.company}</div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
