"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post10() {
  const post10Data = [
    `Gourmet Entertainment Show, India’s ONLY experiential showcase platform of all things F&B at Weddings and Events, is back with its 2nd edition in Delhi NCR on 1st and 2nd August 2019. Food in India has always been the highest form of entertainment along with the most important aspect of any social gathering.`,
    `The most important element of Weddings, Social and Special Events. The Gourmet Entertainment Show is a platform created to take forward the culinary journey of celebrations in India on to a world stage. The Gourmet Entertainment Show is a joint initiative by EVENTFAQS and Touchwood Group, in association with EEMA, and Host Venue: A-Dot, Gurgaon to help build and enhance networks and facilitate the showcase of upcoming F&B trends along with events. “As we gear up for the 2nd edition of Gourmet Entertainment Show, we have envisaged a dream to make this show India’s one stop for ‘Entertaining with Food at Events’.`,
    `This year, the event has expanded from a 1 day format to a 2 day one, which gives everyone ample time to network and learn from the best of the best in the world of F&B! We are repackaging the entire exhibition and this year will be grander and more meaningful”, said Vijay Arora, Director, Touchwood Group. “Based on the learnings of the debut show, the focus will be on staying true to the name and DNA of the show by entertaining top wedding planners of the country with gourmet experiences”, said Vishal Nagdev, Director, EVENTFAQS Media.`,
    `This two-day event is designed to enable consumers and planners of the most extraordinary events to push the envelope by engaging with and learning from the best in the business of Gourmet Entertainment. Featuring showcases from close to 100 of India's Top Hotels, Catering Companies, Restaurants and Food Designers, discussions with the leading authorities from the business of F&B, experiential engagements, workshops and masterclasses, the 2nd edition of Gourmet Entertainment Show will change the way India thinks of 'Entertaining with Food at Events’.`,
    `Events of Day 1 begin from 5PM onwards starting with a VIP Preview exclusively for India's top 500 Wedding & Event Planners and influencers concluding with a felicitation ceremony to honour some of the best ‘Gourmet Icons’ of the industry.`,
    `Day 2 is designed in a way to have B2B networking and meetings along with knowledge exchange sessions by the top influencers of the industry to experience and engage with the best of F&B and events, beginning from 10AM extending till 5PM.`,
    `The event set to take place at A-Dot, Behind Ambience Mall, Gurgaon will allow the attendees to connect with country’s top Caterers, Specialty Food Curators, Beverage & Food Suppliers, Food Designers, World Renowned Restaurants, Props & Dinnerware Suppliers, and Bar & Beverage Solutions and create a wide network with the same.`,
    `The debut edition of Gourmet Entertainment Show held on November 2, 2018, saw multiple experiential engagements, workshops and Gourmet Dialogues which featured veterans including, Chef Manjit Gill, Chef Ritu Dalmia, Gourmet Moghuls Marut Sikka, Puneet Sikand, Samit Garg, E-Factor Entertainment and many others. Featuring showcases from over 30 of India's top catering companies, restaurants and food designers like Creative Cuisines Inc, Seasons Group, Seven Seas Banquet & Caterers, Eleven Course, The Food Affairs by Sarita Bazaz, Le Chaat Factory and many more.`,
    `The event also featured creative showcases by leading hospitality brands like The Leela Ambience Gurugram Hotel & Residences, The Pullman Aerocity, Fairmont Hotel, and Resort Jaipur and others. Here is a glimpse of the debut edition in 2018`,
  ];

  return (
    <>
      <PostHeader
        postHeading="Gourmet Experiences Will Entertain India’s Top Wedding & Event Planners at GES 2019"
        postDate="Apr 10, 2019"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post10Data.map((data, index) => (
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
          "/images/press-coverage/posts-gallery/1555392766_Vijay Arora.jpg",
          "/images/press-coverage/posts-gallery/1555392876_VN.jpg",
          "/images/press-coverage/posts-gallery/1555394199_49172874_210527329870014_4339784420740300800_n.jpg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image
              src={data}
              alt={`image-4${index}`}
              height={470}
              width={300}
            />
          </div>
        ))}
      </div>
    </>
  );
}
