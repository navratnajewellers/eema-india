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
    image: "/images/others/explore-roles.webp",
  },
  {
    title: "Apply Online",
    description:
      "Fill out a simple application form for interns or experienced roles.",
    image: "/images/others/apply-online.webp",
  },
  {
    title: "Get Interviewed",
    description:
      "Connect with our team to understand mutual goals and expectations.",
    image: "/images/others/career-interview.jpg",
  },
  {
    title: "Join the Team",
    description: "Become part of EEMA and contribute to exciting projects.",
    image: "/images/others/career-join-team.jpg",
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
        <section className="relative h-[80vh] bg-cover bg-center bg-[url('/images/others/career-banner.jpg')] flex items-center justify-center">
          <div className="bg-black/60 absolute inset-0" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-center text-white z-10 px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-7 text-orange-600">
              Build a Career in the Experiential Industry
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
                <h4 className=" text-black tracking-tight text-2xl font-bold w-fit mx-auto border-l-4 border-r-4 border-orange-600 px-4 ">
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
          <p className=" text-black text-lg md:text-xl max-w-2xl mx-auto">
            Come work with the industry leaders!
          </p>
          <div className="space-x-4 mt-7 ">
            <a
              href="https://forms.gle/w274eYR29TtT1ngR7"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Apply for Internship
            </a>
            <a
              href="https://forms.gle/gHgyTzZqPnnYmEqE7"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-block bg-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Apply for Full Time
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
