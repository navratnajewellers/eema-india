"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HRCodePage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  const slides = [
    {
      id: 1,
      img: "https://eemaindia.com/uploads/sliders/5cbd6a1109399QpzsHGaP9S.jpeg",
      alt: "Slide 1",
    },
    {
      id: 2,
      img: "https://eemaindia.com/uploads/sliders/5cbd6994d66e9jC3PbIFSdu.jpeg",
      alt: "Slide 2",
    },
  ];

  return (
    <section
      id="hr-code-of-conduct"
      className=" bg-gray-50 text-black px-7 sm:px-24 relative py-36  "
    >
      <div className=" block md:sticky top-40 z-10 text-right ">
        <h4 className=" text-black font-semibold ">(HR Code of Conduct)</h4>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 1,
          }}
          className=" mt-11 mr-16 "
        >
          <span className=" bg-orange-600 inline-block h-7 w-7 rotate-slow  "></span>
        </motion.div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 mr-0 md:mr-44 ">
        <section className=" relative py-11 ">
          <div className=" sticky top-40 z-10 px-11">
            <h3 className=" text-3xl tracking-tight font-semibold mb-4 ">
              Guidelines for Ethical Hiring for EEMA Member Companies
            </h3>
            <p className=" leading-relaxed text-lg text-gray-500 mb-2 ">
              To maintain integrity and professionalism in the recruitment
              process, EEMA member companies must adhere to these ethical hiring
              standards.
            </p>
            <p className=" leading-relaxed text-lg text-gray-500 mb-2 ">
              These guidelines are critical when considering candidates from
              other member companies:
            </p>
          </div>
        </section>

        <section>
          <div className=" py-11 px-4 mb-7 ">
            <div className="w-full">
              <Slider {...settings}>
                {slides.map((slide) => (
                  <div key={slide.id} className="w-full h-[300px] relative ">
                    <Image
                      src={slide.img}
                      alt={slide.alt}
                      fill
                      className=" object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className=" py-11 px-4 mb-7 ">
            <h3 className=" text-2xl tracking-tight font-semibold mb-4 text-orange-600 ">
              Maintain Confidentiality:
            </h3>
            <p className=" leading-relaxed text-lg text-gray-500 mb-2 ">
              Respect the integrity of client-agency relationships and internal
              agency operations. Avoid discussions about:
            </p>
            <ul className=" list-disc pl-11 ">
              <li className=" leading-relaxed text-lg text-gray-500 mb-1 ">
                Confidential client information.
              </li>
              <li className=" leading-relaxed text-lg text-gray-500 mb-1 ">
                Internal agency data, such as costs or employee details.
              </li>
              <li className=" leading-relaxed text-lg text-gray-500 mb-1 ">
                Documentation brought by the candidate.
              </li>
            </ul>
          </div>

          <div className=" py-11 px-4 mb-7 ">
            <h3 className=" text-2xl tracking-tight font-semibold mb-4 text-orange-600 ">
              Relieving Letter Requirement:
            </h3>
            <p className=" leading-relaxed text-lg text-gray-500 mb-2 ">
              A valid “Relieving Letter” is mandatory before hiring a candidate
              from another member company. This letter must clearly state:
            </p>
            <ul className=" list-disc pl-11 mb-2 ">
              <li className=" leading-relaxed text-lg text-gray-500 mb-1 ">
                The last salary drawn.
              </li>
              <li className=" leading-relaxed text-lg text-gray-500 mb-1 ">
                Any perks received.
              </li>
            </ul>

            <p className=" leading-relaxed text-lg text-gray-500 mb-2 ">
              This measure ensures transparency and discourages
              misrepresentation during the recruitment process.
            </p>
          </div>

          <div className=" py-11 px-4 mb-7 ">
            <h3 className=" text-2xl tracking-tight font-semibold mb-4 text-orange-600 ">
              Prohibit Unethical Practices:
            </h3>
            <p className=" leading-relaxed text-lg text-gray-500 mb-2 ">
              Under no circumstances should information provided unethically by
              ex-employees of other member companies be used.
            </p>
          </div>

          <div className=" py-11 px-4 mb-7 ">
            <h3 className=" text-2xl tracking-tight font-semibold mb-4 text-orange-600 ">
              Report Misconduct:
            </h3>
            <p className=" leading-relaxed text-lg text-gray-500 mb-2 ">
              Any false or misleading information provided during the interview
              process should be reported to EEMA. Offenders will face strict
              action, including blacklisting and notification to all member
              companies.
            </p>
          </div>

          <div className=" py-11 px-4 mb-7 ">
            <h3 className=" text-2xl tracking-tight font-semibold mb-4 text-orange-600 ">
              Blacklisted Employees:
            </h3>
            <p className=" leading-relaxed text-lg text-gray-500 mb-2 ">
              Cases of fraud or financial misconduct, supported by verified
              evidence, will be reviewed by the EEMA Executive Committee. Only
              approved cases will be shared with member companies to ensure
              informed decisions.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
