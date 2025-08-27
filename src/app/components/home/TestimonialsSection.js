"use client";

import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Gitikka Ganju Dhar",
      company: "Chair, EEMA Artiste Committee",
      text: "EEMA is a force. When I came back, post a sabbatical, it's stages served as messengers of what I brought to the table as an artiste, and now, as I lead the artiste initiative for EEMA, EEMA is serving as a vehicle of transformation. The Apex Body is rising to nurture and safeguard the interests of the industry and the nation at large. Every office bearer of EEMA today realizes the enormity of the opportunity to lead an industry to a new frontier; members and industry stakeholders need to realize it too. EEMA is the Mother Ship. It is us flying into the future.",
    },
    {
      name: "Sumit Productions",
      company: "New Member, North",
      text: "For me, being part of EEMA is more than just membership—it’s about finding a platform to learn from the best, contribute meaningfully, and grow alongside peers who share the same dedication to shaping the future of live experiences in India. I’m excited to walk this journey, to give back, and to celebrate the power of coming together as one industry, one voice.",
    },
    {
      name: "Maryann Manaseeh",
      company: "Presenter & Engagement Expert",
      text: "EEMA has completely redefined the way I see and experience our industry. From setting standards to safeguarding our interests, it has been a force that empowers me as a professional and gives direction to my journey. Being part of this community has given me a platform where my creativity is valued and my voice is heard. EEMA is not just shaping the industry—it is shaping me, inspiring me to collaborate, innovate, and contribute to a future where Indian event professionals shine on the global stage.",
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
        <h2 className="text-3xl text-black font-bold mb-7 w-fit mx-auto border-l-4 border-r-4 border-orange-600 px-4 ">
          What Our Members Say
        </h2>
        <p className="text-gray-600 mt-2">
          Real stories from EEMA members on how the association empowered their
          journey in the events industry.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Slider {...settings} className=" [&_.slick-list]:!pb-6 ">
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
