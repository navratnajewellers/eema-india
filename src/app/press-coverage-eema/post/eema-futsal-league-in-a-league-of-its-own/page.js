"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post32() {
  const post32Data = [
    `The Event and Entertainment Management Association (EEMA), the first and only body of its kind, which seeks to bring together the country’s leading Event Management, Sports Management, Brand Activation companies, MICE and Wedding Planners, Experiential Marketers, Entertainment Professionals, Artist Management Companies and International counterparts on the same platform, successfully conducted ‘EEMA Futsal League’- a first of its kind, inter-agency football tournament on February 24, 2018 at Tiger Play, Andheri West, Mumbai.`,
    `This inter-agency football tournament is EEMA’s initiative to engage the industry professionals in an entertaining and fun-filled afternoon. EEMA Futsal League saw the who’s who from the glamour and the agency world rub shoulders in an enthusiastic display of frolic and sportsmanship.`,
    `The league saw Fountainhead MKTG pick up the first EEMA Futsal Cup by defeating Victor Tango in a thrilling finale. EEMA’s objective in bringing the event industry together for the Futsal league was to reach out to the stakeholders, to build healthy relationships between agencies, to enable the professionals to flaunt their athletic ability and to create awareness for the EEMA club membership.`,
    `There were a total of 16 teams that participated – OML, OMCPL, Cineyug, Wizcraft, Encompass, Bar Solutions, The Social Street, Victor Tango, Fountainhead, Procam International, SportzConsult, Seventy Seven, Laqshya Live Experiences and Team Rustic. The team consisted of 7 players per team including 1 female member. Each team was supported by 1 celebrity player who played with them in Round 1.`,
    `Other than the intense matches, there was an on–the-spot quiz, where NIVIA goodies were given to the winners. The agencies that were a part of this fun-filled football afternoon were – OMCPL represented by Nasirr Khan, Seventy Seven represented by Siddharth Kannan, Encompass represented by Sameer Kochhar, Wizcraft represented by Rupali Suri and Sabbas Joseph, Cineyug represented by Mohomed Morani, Victor Tango represented by Prabal Punjabi and Pranay Pachauri, Bar Solutions represented by Pritee Kathpal and Nick, The Social Street represented by Sunny Hinduja, Fountainhead MKTG represented by Kyrien Crasto, Team Rustic represented by DJ Praveen Nair, OML represented by Azeem Banatwalla, Laqshya Live Experiences represented by Harish Moyal. The EEMA Futsal League was supported by: Associate Partner – NIVIA, Production Partner – Jess Ideas Pvt. Ltd., Beverage Partner – Bar Solutions, Venue Partner – Ajmera Group, Media Partners – Eventfaqs and Everything Experiential, Food Partner – Foodbiz, Film Partner – Shooting Stars, Performance Partner – DJ Alex, Trophy Partner – Modways Object D’Art Pvt. Ltd., Management Trainees by – NAEMD, PR Partner – Wiz Spk.`,
    `Commenting on the tournament EEMA President, Sabbas Joseph shared, “The EEMA Futsal League has been created to generate engagement among the industry’s professionals. It has created an atmosphere of fun and gamesmanship which we believe should help create camaraderie which should be more important than the rivalry that business generates.” Sushma Gaikwad, General Secretary – EEMA said, “As I walked into the Tiger Play Arena, Citimall, i was transported into a high octave energy zone. Music was playing, teams were getting prepped and hearts were pounding.`,
    `The first ever competitive EEMA sporting event in the west was set to flag off. The sultry afternoon was long forgotten as teams faced each other matching goal for goal to claim the coveted EEMA FUTSALLEAGUE trophy. It was exciting to see all agencies under one roof, bound together in deep respect for the other and propelled by an exciting competitive spirit.`,
    `We watched as the afternoon melted into the evening and the arena was resonating with sounds of cheers, laughter and conversation. The teams stayed till the very end to cheer the winners and this was a befitting testimony to the success of the EEMA FUTSAL LEAGUE.” She added, “Futsal as an initiative reaches out to the various stakeholders and bring everyone together under an umbrella of eager competition. It provides an opportunity for the industry to come together as a unified force and engage in a sport that enhances both team spirit and industry belonging.”`,
    `Tabassum Modi, Vice President – EEMA West, shared, “What an exhilarating day it was! The energy, the healthy competitive spirit, the sense of camaraderie amongst the teams was infectious. We hope to have more such opportunities for agencies to connect with each other.” Commenting on the occasion Television and Radio Host Siddharth Kannan said, “It was a power packed event! I figured that the top event companies have outstanding players. More over Ronaldo, here come the EEMA Futsal League!”`,
  ];

  return (
    <>
      <PostHeader
        postHeading="EEMA Futsal League: In A League Of Its Own"
        postDate="Feb 24, 2018"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post32Data.map((data, index) => (
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

      <div className=" flex items-center flex-wrap py-11 ">
        {[
          "/images/press-coverage/posts-gallery/1550232713_eema-300x162.jpg",
          "/images/press-coverage/posts-gallery/1550232615_eema-300x162.jpg",
          "/images/press-coverage/posts-gallery/1550232662_eema-300x162.jpg",
          "/images/press-coverage/posts-gallery/1550232558_image7.jpeg",
          "/images/press-coverage/posts-gallery/1550232522_image7.jpeg",
          "/images/press-coverage/posts-gallery/1550232485_image7.jpeg",
          "/images/press-coverage/posts-gallery/1550232441_image7.jpeg",
          "/images/press-coverage/posts-gallery/1550232399_image7.jpeg",
          "/images/press-coverage/posts-gallery/1550232353_image7.jpeg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image src={data} alt={`image-${index}`} height={470} width={300} />
          </div>
        ))}
      </div>
    </>
  );
}
