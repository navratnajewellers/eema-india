"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

export default function MemberVideoGrid() {
  const videoTestimonials = [
    {
      src: "https://www.youtube.com/embed/XI3XDzxUSlQ",
      title: "EEMA Member Experience 1",
    },
    {
      src: "https://www.youtube.com/embed/AvEctX9b2LU",
      title: "EEMA Member Experience 2",
    },
    {
      src: "https://www.youtube.com/embed/XI3XDzxUSlQ",
      title: "EEMA Member Experience 1",
    },
    {
      src: "https://www.youtube.com/embed/AvEctX9b2LU",
      title: "EEMA Member Experience 2",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Voices of Our Members</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Discover how EEMA has helped shape careers, build networks, and
          transform businesses.
        </p>
        <div className="max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="EEMA Member Experience"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </section> */}

      <section className="py-16 px-4 bg-gradient-to-b from-white via-orange-100 to-orange-400 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-9 w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 ">
            Voices of Our Members
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover how EEMA has helped shape careers, build networks, and
            transform businesses.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={index}
                className="px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
