"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { Table, useMediaQuery } from "rsuite";
import { Cell, HeaderCell } from "rsuite-table";
import Column from "rsuite/esm/Table/TableColumn";
import { motion } from "motion/react";
import "../../../styles/about.css";
import { useEffect, useState } from "react";

export default function Post12() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const [isTablet] = useMediaQuery("(max-width: 1111px)");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const post12Data = [
    `India's leading curator and aggregator of IPs, Event Capital (EC); a part of Laqshya Media Group, announced 42 speakers who will be part of India Event IP Conclave 2019. Scheduled to take place on the 17thApril at JW Marriott in Juhu, Mumbai; the India Event IP Conclave will witness more than 50 speakers from different genres like fashion, music, sports, lifestyle, education who will share insights on the growth and monetization of IP for higher revenue and profit generation. The conclave will also witness participation of more than 300 delegates.`,
    `A summit celebrating the masterminds behind the IP business, the India Event IP Conclave will bring together the business leaders like Mr. Jatin Varma, Founder of Comic Con India; Mr. Samit Garg, CEO E- Factor; Mr. Siddhartha Chaturvedi, Founder & CEO Event Crafter; Mr. Amit Sethiya, CMO Syska Group; Mr. Kunal Khambhati, Head of Live Event & IP at Book My Show; Mr. Harindra Singh, Chairman & Managing Director at Percept Limited; Mr. Pallav Ojha, Founder & CEO at India Beach Fashion Week amongst others who will come under one roof to discuss topics like Trends in Sponsorship, 21st century popular culture, Luxury and Fashion IPs, Food & Flea IPs, Power of the Youth, Sponsorship - Every promoter’s nightmare etc.The India Event IP Conclave will be launched in association with Event & Entertainment Management Association (EEMA).`,
    `"India Event IP Conclave will witness industry leaders who envision opportunities, assemble teams, cultivate audiences and build infrastructures allowing people to come together for a common cause and leave transformed. The leaders will focus on current issues across a spectrum of topics and will share their thoughts", said Mr. Deepak Choudhary, Founder & Director Event Capital.`,
    `With 6 years of Event IP Experience, Event Capital (EC) has curated several event properties spanning across various genres like fashion, music, lifestyle, sports, kids, exhibitions etc. Some of the key IPs owned by Event Capital are Windmill Festival, Bollywood Music Project, India Bridal Fashion Week, Bike Festival of India, The Edutainment Show, Times Travel Show, Big Boys Toys Expo, India Kids Fashion Week. There have been a many firsts in their niche genres and some have created a legacy by fulfilling need gaps over past 6 years.`,
  ];

  const SpeakerData = [
    {
      speaker: "Mr. Akshay Gupta",
      designation: "Founder & Managing Director, PET FED",
    },
    {
      speaker: "Mr. Anto Philip",
      designation: "Co-founder, Under 25",
    },
    {
      speaker: "Mr. Alankaar Jain",
      designation: "Co-founder, The Lil Flea",
    },
    {
      speaker: "Mr. Aayush Bansal",
      designation: "AVP, Zomato Live",
    },
    {
      speaker: "Mr. Aman Anand",
      designation: "Director, Kickstart Entertainment",
    },
    {
      speaker: "Mr. Amit Sethiya",
      designation: "Chief Marketing Officer, Syska Group",
    },
    {
      speaker: "Mr. Akash Seth",
      designation: "MD, Magnanimous Group & LLW",
    },
    {
      speaker: "Mr. Balwinder Singh",
      designation: "CEO & Managing Director, Speed Records",
    },
    {
      speaker: "Mr. Brian Tellis",
      designation: "Co- Founder & Group CEO – Fountainhead MKTG, Founder EEMA",
    },
    {
      speaker: "Mr. Digant Sharma",
      designation: "Founder & CEO, So Delhi",
    },
    {
      speaker: "Mr. Darayash Gocal",
      designation: "Co- founder & Director, Special Projects",
    },
    {
      speaker: "Mr. Gagan Takyar",
      designation: "Managing Director, INvision Entertainment Pvt. Ltd.",
    },
    {
      speaker: "Mr. Gurpreet Singh",
      designation: "Co- founder, One digital entertainment",
    },
    {
      speaker: "Ms. Gitikka Ganju Dhar",
      designation: "Indian TV personality, Anchor and Emcee",
    },
    {
      speaker: "Mr. Harindra Singh",
      designation: "Chairman and Managing Director, Percept Limited",
    },
    {
      speaker: "Mr. Hitesh Gossain",
      designation: "CEO & Founder, Onspon",
    },
    {
      speaker: "Mr. Jatin Varma",
      designation: "Founder, Comic Con India",
    },
    {
      speaker: "Mr. Jaideep Singh",
      designation: "Director, Arré (U Digital Content Pvt. Ltd.)",
    },
    {
      speaker: "Mr. Kunal Khambhati",
      designation: "Head, Live Event and IP, Book My Show",
    },
    {
      speaker: "Mr. Khantill Mehta",
      designation: "Co-founder & Creative Head, Gobananas",
    },
    {
      speaker: "Ms. Karishma Hundalani",
      designation: "Co-Founder & Director, Eventfaqs",
    },
    {
      speaker: "Mr. Manish M. Gandhi",
      designation: "Director, ABEC Exhibitions and Conferences Pvt. Ltd.",
    },
    {
      speaker: "Mr. Mandeep Singh",
      designation: "CEO & MD, CPM India",
    },
    {
      speaker: "Mr. Nikhil Dwivedi",
      designation: "Founder, EYP Creations Pvt. Ltd.",
    },
    {
      speaker: "Mr. Nandan Srinath",
      designation: "Director Response, Times Group’s Newspaper Business",
    },
    {
      speaker: "Mr. Navneeth Mohan",
      designation: "Founder & CEO Laqshya Live Experiences",
    },
    {
      speaker: "Mr. Pallav Ojha",
      designation: "Founder and CEO, India Beach Fashion Week",
    },
    {
      speaker: "Mr. Pranav Thakkar",
      designation: "CEO, Barsolutions, LLP | The Wedding Bartenders",
    },
    {
      speaker: "Mr. Rajesh Kejriwal",
      designation: "Founder, CEO, Kyoorius",
    },
    {
      speaker: "Ms. Reema Sanghavi	",
      designation:
        "Founder & Managing Director, MAXIMUS MICE & MEDIA SOLUTIONS",
    },
    {
      speaker: "Mr. Roshan Abbas",
      designation: "Founder – Kommune, Managing Director – Geometry Encompass",
    },
    {
      speaker: "Mr. Sabbas Joseph",
      designation: "Co- Founder and Director – Wizcraft International Pvt Ltd.",
    },
    {
      speaker: "Mr. Syed Sultan Ahmed",
      designation: "MD & Chief Learner, LXL Ideas",
    },

    {
      speaker: "Mr. Suraj Rosario",
      designation: "CEO, Mud Rush",
    },
    {
      speaker: "Mr. Samit Garg",
      designation: "CEO, E- Factor",
    },
    {
      speaker: "Mr. Shaju I Ignatius",
      designation: "Founder & Director, The Ignite Enterprise",
    },
    {
      speaker: "Mr. Akshay Gupta",
      designation: "Founder & Managing Director, PET FED",
    },
    {
      speaker: "Mr. Shoven Shah",
      designation:
        "Founder of EVC, Director, Twisted Entertainment (M) Pvt. Ltd.D",
    },
    {
      speaker: "Mr. Siddhartha Chaturvedi",
      designation: "Founder and CEO, Event Crafter",
    },
    {
      speaker: "Mr. Sumit Gandhi",
      designation: "CMD & CEO, ABEC Exhibitions and Conferences Pvt. Ltd.",
    },
    {
      speaker: "Mr. Vinit Karnik",
      designation:
        "Business Head, Entertainment, Sports & Live Events – Group M",
    },
    {
      speaker: "Mr. Vishal Nagdev",
      designation: "Founder, EVENTFAQS",
    },
    {
      speaker: "Mr. Vivek Singh",
      designation: "Managing Director, Procam International Pvt. Ltd",
    },
  ];

  if (!mounted) return null;

  return (
    <>
      <PostHeader
        postHeading="Event and IP industry stalwarts to converge under one roof at India Event IP Conclave 2019"
        postDate="Apr 15, 2019"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post12Data.map((data, index) => (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            viewport={{ amount: 0.5, once: true }}
            key={index}
            className=" mb-7 "
          >
            {data}
          </motion.p>
        ))}
      </div>

      <section className=" flex flex-col justify-center items-center overflow-hidden ">
        <h4 className=" text-black text-3xl tracking-tight font-semibold mb-11 ">
          List of 42 Speakers
        </h4>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <Table
            // height={300}
            width={isMobile ? 350 : isTablet ? 500 : 600}
            data={SpeakerData}
            bordered
            cellBordered
            autoHeight
            wordWrap="break-word"
          >
            <Column width={isMobile ? 180 : 250}>
              <HeaderCell className=" nlt-table-header text-white ">
                Speaker
              </HeaderCell>
              <Cell dataKey="speaker" />
            </Column>

            <Column width={350}>
              <HeaderCell className=" nlt-table-header text-white ">
                Designation
              </HeaderCell>
              <Cell dataKey="designation" />
            </Column>
          </Table>
        </motion.div>
      </section>

      <div>
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          viewport={{ amount: 0.5, once: true }}
          className=" text-3xl text-black tracking-tight font-semibold mb-7 mt-16 "
        >
          About Event Capital:
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          viewport={{ amount: 0.5, once: true }}
          className=" mb-7 leading-relaxed text-gray-500 text-lg "
        >
          Founded in 2013, Event Capital (EC), a Laqshya Media Group Company,
          operates across India with business headquarters in Mumbai and Delhi.
          With expertise in creating and curating successful event IPs in music,
          lifestyle, education and fashion. EC has identified opportunities and
          filled need gaps by creating hugely successful properties like the
          Bollywood Music Project, India Kids Fashion Week, The Edutainment
          Show, The Times Travel Show. As on 2018, the most popular genres in
          the live events space are music, lifestyle and sport and EC is the
          only live event IP Company in India to have created and curated
          successful event IPs in these genres.
        </motion.p>
      </div>
    </>
  );
}
