"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Post2() {
  const post2Data = [
    "The events industry, which has been hit hard due to coronavirus, will continue to be under pressure in the second half of FY21.",
    '"Cancellations for activations are already coming in for October and November," Sanjoy Roy, President, Event and Entertainment Management Association (EEMA), told Moneycontrol.',
    "The COVID-19 outbreak has put business on pause for the events industry, which was already dealing with slowdown woes.",
    '"My beginning year address to the industry folks was that this is not going to be a usual year. It is going to be a year of stress because the economy was stressed. And now on top of that, there is a situation of lockdown," Roy said.',
    "He added that the events industry felt the slowdown impact last year when, in the auto expo, 50 percent of the major companies stayed away due to drop in sales.",
    "But now the events industry has come to a standstill as, small or big, all events are getting postponed or cancelled.",
    "IIFA 2020, India Gaming Expo, FDCI India Fashion Week, GoaFest, PU Tech, ITB- India, India Fintech Festival, Ultra Festival, India-South Africa cricket matches, marathon events, the India Today Conclave, the META Theatre Awards are some of the big events that were impacted due to coronavirus.",
    '"Artistes earn when they perform, venues earn when they host an event, the events industry earns when there is an event or there is a corporate launch. But events are not happening due to COVID-19 outbreak. In addition to the coronavirus impact, the lockdown impact will be huge," he added.',
    "EEMA has estimated that before the lockdown in India, the events industry incurred losses of around Rs 3,000 crore due to COVID-19. And if the coronavirus situation prolongs, then livelihoods of many will be impacted.",
    '"We provide employment to around 10 million people directly and 50 million indirectly through allied sectors like food and beverage, hotels, tourism, advertising. The employees also include daily wagers like those who take care of the lighting or tent house or catering, or even the artistes like the dancers. Their livelihoods will be impacted the most," said Roy.',
    'Sharing the plight of some of the daily wagers associated with the events industry, Roy said, "Few former street kids who are now working in this sector called me saying they have no money to pay the rent and their landlords are asking them to move out. They have nothing to eat and requested me to send them some money."',
    "The events industry, which was expected to cross Rs 10,000-crore mark by 2020-21, according to Roy, will see 90 percent of the business wiped out due to coronavirus.",
    'He added that the season for the events industry is from September to April. "This includes weddings, corporate launches, the festivals. Around 70-75 percent of business happens in this period,” he said.',
    "Omer Haider, MD at Showhouse Events, a company that has organized events like Kolkata International Film Festival and Blender’s Pride Fashion Tour 2003-13, shared how his company is impacted due to the outbreak.",
    '"In March, April, May, we had about 11 events planned and ready to be executed. Unfortunately, due to the deadly outbreak of the virus, we had to cancel all of them," he said.',
    'While he said it is difficult to estimate the losses in terms of numbers, the impact has been majorly felt by performing artistes. “Their (artistes) bread-and-butter ideally comes from performing at exclusive live events. I feel sad for the many artistes who suddenly have nothing to do, especially for the new artistes who are left with very little," he added.',
  ];

  return (
    <>
      <PostHeader
        postHeading="Coronavirus impact: Events industry comes to a standstill, no relief until November"
        postDate="Sep 01, 2020"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post2Data.map((data, index) => (
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

      <div>
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ amount: 0.5 }}
          href="https://www.moneycontrol.com/news/trends/entertainment/coronavirus-impact-events-industry-comes-to-a-standstill-no-relief-until-november-5091421.html/amp?__twitter_impression=true"
          className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-orange-600 text-sm font-semibold transition-all duration-300 hover:text-white "
        >
          <span className="transition-all duration-300 group-hover:text-xl text-nowrap ">
            Source
          </span>
          <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white" />
        </motion.a>
      </div>
    </>
  );
}
