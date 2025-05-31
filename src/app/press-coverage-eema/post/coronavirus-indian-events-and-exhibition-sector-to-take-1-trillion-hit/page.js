"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Post5() {
  const post5Data = [
    "With around 10 million jobs in the live events and exhibition industry is at stake with 90% of them being daily wage earners",
    "The body has urged government to extend sops such as tax refunds, loan facility for MSME sector and artistes",
    `The Indian events and exhibition sector is expected to take a ?1 trillion hit as almost all big scale events across categories have been postponed or cancelled in the wake of coronavirus (covid-19) outbreak and the 21-day nationwide lockdown, Sanjoy K Roy, founder and managing director of events company Teamwork Arts and president of industry body Event and Entertainment Management Association (EEMA) said on Monday.`,
    `This includes both formal segment events and exhibitions such as IIFA film awards, T20 cricket tournament IPL, music concerts, stand-up comedy shows as well as corporate product launches, MICE and hospitality, food and entertainment events along with informal segment such as weddings and other parties.`,
    `"Between February and March, we witnessed 60% to 70% cancellation leading to a damage of up to ?5,000 crore. Now it's a complete lockdown and all big events are being cancelled or indefinitely postponed which means we are looking at 100% revenue loss because no big or small events can be held in view of precautionary measures of social distancing. While some of the events have move to digital but online doesn't have a sustainable financial model," Roy told Mint.`,
    `With around 10 million jobs in the live events and exhibition industry is at stake with 90% of them being daily wage earners, EEMA in a written request to the government has asked for sops for the industry.`,
    `The body has urged government to extend sops such as tax refunds, loan facility for MSME sector and artistes to mitigate the impact of livelihood of people involved in the entertainment and event space.`,
    `"The infrastructure and service providers that segment is completely wiped out. The venues, which are carrying huge inventory, are also facing the heat. In April with no income money coming in this sector we will see huge retrenchment," Roy added.`,
    `EEMA is working with industry bodies such as Confederation of Indian Industry (CII) and Federation of Indian Chambers of Commerce and Industry (FICCI) and government directly.`,
    `EEMA has urged government in a written request to cover the cost of salaries of daily wage workers affected by covid-19 and unable to resume work, collateral free line of credit to be used for employees' salaries and statutory dues and moratorium of paybacks on loans, interest free for a period of 9-12 months.`,
    `Besides, the body has also asked payments for government projects (both central and state) which have been completed should be released, measures to cover loss for the artist segment along with instructing insurance companies to insure future events against coronavirus or similar biological disasters.`,
    `The global impact of coronavirus is staggering as well. Germany announced $50 billion into the art economy, UK released €150 million in art segment similarly Singapore, Dubai and Australia have also released funds to counter the impact of the novel virus on the events, exhibition and creative arts industry.`,
    `"Unfortunately, in India we don't map. How much creative arts sector contributes to GDP of the country we don't come under one ministry. Without data it would be difficult to map the overall impact on this sector," Roy said.`,
  ];

  return (
    <>
      <PostHeader
        postHeading="Coronavirus: Indian events and exhibition sector to take ?1 trillion hit"
        postDate="Mar 30, 2020"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post5Data.map((data, index) => (
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
          href="https://www.livemint.com/industry/media/coronavirus-indian-events-and-exhibition-sector-to-take-rs-1-trillion-hit-11585564755584.html"
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
