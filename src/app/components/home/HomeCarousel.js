"use client";

import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const bannerDetils = [
  {
    image:
      "https://www.eemaindia.com/uploads/sliders/66e420119fc9cNrsM1Om1d3.jpeg",
    link: "https://events.eemaindia.com/reg-events/gjdh4u-eemagine-2025",
  },
  {
    image: "https://www.eemaindia.com/uploads/sliders/123456eec2025mar11.jpg",
    link: "https://events.eemaindia.com/reg-events/gjdh58-inspire",
  },
  {
    image:
      "https://www.eemaindia.com/uploads/sliders/664d7a05ebaffa2S1wDysKs.png",
    link: "https://www.eemaindia.com/eemaxglobal/",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  pauseOnHover: false,
};

export default function HomeCarousel() {
  return (
    <>
      <section className="w-full overflow-hidden">
        <Slider {...settings}>
          {bannerDetils.map((src, idx) => (
            <motion.a
              key={idx}
              href={src.link}
              target="_blank"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className=" block relative w-full h-[35vh] md:h-[50vh] xl:h-screen "
            >
              <Image src={src.image} alt={`banner-${idx + 1}`} fill />
            </motion.a>
          ))}
        </Slider>
      </section>
    </>
  );
}
