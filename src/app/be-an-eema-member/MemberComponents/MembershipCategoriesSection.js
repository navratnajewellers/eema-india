"use client";

import Slider from "react-slick";
import MembershipCard from "./MembershipCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Modal, Placeholder } from "rsuite";
import { useState } from "react";

const membershipTiers = [
  {
    tierName: "PLATINUM",
    price: "₹ 50000/",
    description:
      "Event Management and Activation Agencies / Experiential Marketing Companies with a minimum turnover of (4 crore) in the immediate past year and in existence for a minimum of 2 years.",
    benefits: [
      "Right to vote & hold office in the National Executive Committee",
      "Participation in the Annual General Meeting with voting rights",
      "Access to EEMA events",
      "Complimentary access to three EEMA workshops",
    ],
    linkHref: "platinum",
  },
  {
    tierName: "GOLD",
    price: "₹ 40000/",
    description:
      "Event Management /Activation Agencies / Experiential Marketing Companies / International Agencies with a minimum turnover of Rs. 2 crore in the immediate past year and in existence for a minimum of two years",
    benefits: [
      "Participation in the Annual General Meeting without voting rights.",
      "Access to EEMA events.",
      "Complimentary access to two EEMA workshops.",
    ],
    linkHref: "gold",
  },

  {
    tierName: "ASSOCIATE",
    price: "₹ 25000/",
    description:
      "Event Support Service providers / Supply chain / Artist Management Agencies in operation with a minimum turnover of Rs. 50 lacs for one financial year.",
    benefits: [
      "Access to EEMA events",
      "Complimentary access to two EEMA workshops",
    ],
    linkHref: "APM",
  },
  {
    tierName: "STAR",
    price: "₹ 15000/",
    description:
      "Artists ( stand alone representing yourself – Any of the below skills ) having performed for 5 shows with any existing EEMA Platinum / Gold / Silver members",
    benefits: [
      "Access to EEMA events at a special fee",
      "EEMAXG Awards Night attendance at a special fee",
      "Workshop attendance at a special fee",
      "Regional Conclaves at a special fee",
    ],
    linkHref: "star",
  },
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
};

const modalCategoryDetails = [
  {
    openModal: "platinum",
    title: "Platinum Members",
    benefits: [
      "Right to vote & hold office in the National Executive Committee",
      "Participation in the Annual General Meeting with voting rights",
      "Access to EEMA events",
      "Complimentary access to three EEMA workshops",
      "Upto 20 free Club membership for member employees.",
      "Usage of EEMA logo on company's stationery",
      "Listing of members' company on EEMA website",
      "Participation at events which EEMA has a tie-up with (e.g. FICCI |CII | ICWF | EVENTtech etc.) (in process)",
      "Access to relationships with trade bodies such as CII & FICCI once there is an agreement with these organisations. (in process)",
    ],
    requiredDocuments:
      "* Company Registration ( In case of Partnership / Pvt Ltd / Ltd / LLC companies) * PAN card * GST Registration * Address proof   * Board resolution * Memorandum of Article (MOA)  *Balance sheet for the past two years certified by your CA * 2 references from existing members (This can be done by Email)",
    fees: "A one time joining fee of Rs 50,000 (Rupees Fifty Thousand only) and an annual membership fee of Rs 40,000 (Rupees Forty Thousand only). There is a joining fee without GST and annual fee with GST of 18%.",
  },
  {
    openModal: "gold",
    title: "Gold Members",
    benefits: [
      "Participation in the Annual General Meeting without voting rights",
      "Access to EEMA events",
      "Complimentary access to two EEMA workshops",
      "Upto 10 free Club membership for member employees",
      "Membership sessions with the Leaders of Industry",
      "Usage of EEMA logo on company's stationery",
      "Listing of members' company on EEMA website",
      "Participation at events which EEMA has a tie-up with (e.g. FICCI |CII | ICWF | EVENTtech etc.) (in process)",
      "Access to relationships with trade bodies such as CII & FICCI once there is an agreement with these organisations. (in process)",
    ],
    requiredDocuments:
      "* Company Registration( In case of Partnership / Pvt Ltd / Ltd / LLC companies ) * PAN Card copy * GST Registration copy * Proof of address *Board Resolution*, Balance sheet for the last two years certified by your CA * 2 references from existing EEMA members ( This can be done on email and a separate document is not required. )",
    fees: "A one-time joining fee of Rs. 40,000 (Rupees Forty thousand Only) and an annual membership fee of Rs. 25,000 (Rupees Twenty five thousand only). There is a joining fee without GST and Annual fee with GST of 18%",
  },

  {
    openModal: "APM",
    title: "Associate Partner Members",
    benefits: [
      "Access to EEMA events",
      "Complimentary access to two EEMA workshops",
      "Upto 5 free Club membership for member employees",
      "Membership sessions with the Leaders of Industry",
      "Usage of EEMA logo on companies stationery",
      "Listing of member's company on EEMA website",
      "Participation at events which EEMA has a tie-up with (e.g. FICCI |CII | ICWF | EVENTtech etc.) (in process)",
      "Access to relationships with trade bodies such as CII & FICCI once there is an agreement with these organisations. (in process)",
    ],
    requiredDocuments:
      "* Company Registration(In case of Partnership / Pvt Ltd / Ltd / LLC companies) * PAN Card copy * GST Registration copy * Proof of address * Board resolution *2 references from existing EEMA members (This can be done on email and a separate document is not required)",
    fees: "A one time joining fee of Rs 25,000 (Rupees Twenty Five Thousand only) and an annual membership fee of Rs 25,000 (Rupees Twenty Five Thousand only ). There is a joining fee without GST and Annual Fee with GST of 18%.",
  },
  {
    openModal: "star",
    title: "Star Members",
    benefits: [
      "Access to EEMA events at a special fee",
      "EEMAXG Awards Night attendance at a special fee",
      "Workshop attendance at a special fee",
      "Regional Conclaves at a special fee",
      "Listing on EEMA Website",
      "Participation at events which EEMA has tie-up with (eg FICCI | CII | ICWF | EVENTtech etc.) (in process)",
    ],
    requiredDocuments:
      "* PAN Card copy * GST Registration copy * Proof of address * 2 references from existing EEMA members (This can be done on email and a separate document is not required)",
    fees: "A one time joining fee of Rs 15,000 ( Rupees Fifteen Thousand only) and an annual membership fee of Rs 10,000 (Rupees Ten Thousand only). There is a joining fee without GST and Annual fee with GST of 18%.",
  },
];

export default function MembershipCategoriesSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState("star");

  return (
    <>
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="max-w-6xl mx-auto text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-black w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 mb-6 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Membership Tiers
            </motion.h2>
            <motion.p
              className="text-gray-600 mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              EEMA offers flexible membership plans tailored to professionals at
              all levels. Choose the one that fits you best.
            </motion.p>
          </div>

          {/* Membership Cards Grid */}

          <Slider
            {...settings}
            className=" w-[90%] md:w-full max-w-6xl mx-auto md:px-7 [&_.slick-slide]:px-4 [&_.slick-list]:-mx-4 [&_.slick-next:before]:!text-black [&_.slick-prev:before]:!text-black "
          >
            {membershipTiers.map((tier) => (
              <MembershipCard
                key={tier.tierName} // Unique key for list rendering
                tierName={tier.tierName}
                price={tier.price}
                description={tier.description}
                benefits={tier.benefits}
                linkHref={tier.linkHref}
                setIsOpen={setIsOpen}
                setOpenCategory={setOpenCategory}
              />
            ))}
          </Slider>
        </div>

        <div className=" pl-4 md:pl-24 py-7 mt-16 ">
          <span className=" leading-relaxed text-gray-500 font-medium inline-block p-4 ">
            If you want to become an EEMA member
          </span>
          <a
            href="https://membership.eemaindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
          >
            APPLY NOW
          </a>
        </div>
      </section>

      {/* Category Modal */}
      <div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Header>
            <Modal.Title>
              <span className=" text-orange-600 font-bold block w-fit mx-auto ">
                Entitlements
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className=" px-7 pt-4 ">
              {modalCategoryDetails
                .filter((data) => data.openModal == openCategory)
                .map((data, index) => (
                  <section key={index}>
                    {/* Benefits List */}
                    <h4 className=" text-xl font-semibold leading-relaxed mb-4 text-black ">
                      Entitlements for {data.title}
                    </h4>
                    <ul className="text-gray-700 text-left w-full mb-8 space-y-3">
                      {data.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-lg">
                          {/* Checkmark Icon (optional, but highly recommended for visual appeal) */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className=" py-7 ">
                      <h4 className=" text-xl font-semibold leading-relaxed mb-4 text-black ">
                        Documents required for Star membership{" "}
                      </h4>
                      <p className=" text-lg font-normal leading-relaxed mb-4 text-black ">
                        {data.requiredDocuments}
                      </p>
                      <p className=" text-sm font-medium text-gray-400 ">
                        <strong>**Note: </strong>Please have the following
                        documents scanned and ready to attach with the
                        application form. A self certified hard copy of the same
                        will need to be mailed to the EEMA office also.
                      </p>
                    </div>

                    <div className=" py-7 ">
                      <h4 className=" text-xl font-semibold leading-relaxed mb-4 text-black ">
                        Fees for Star Membership
                      </h4>
                      <p className=" text-lg font-normal leading-relaxed mb-4 text-black ">
                        {data.fees}
                      </p>
                    </div>

                    <div className="mt-8">
                      <a
                        href="https://membership.eemaindia.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
                      >
                        APPLY NOW
                      </a>
                    </div>
                  </section>
                ))}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
