"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post19() {
  const post19Data = [
    `Event and Entertainment Management Association (EEMA) North, first unique initiative “The Presenters Dialogue” brought together entire ecosystems of EEMA member agencies & Presenters across all spectrums. Artists / Anchors traveled from different parts of the country to be a part of this first ever initiative held at JW Marriott. The Presenters Dialogue set the agenda to explore new horizons, reset expectations and break the cliché.`,
    `To work towards a symbiotic relationship between Event Manager and Presenters– The Presenters Dialogue was an eye opener and a stepping stone in many ways. The perception of each side of the fence was rightfully debated and serious questions asked on how to work in tandem.`,
    `To improve the ecosystem few key initiatives that can be growth driver for agencies & emcees across spectrum was discussed during this meet. India’s leading presenters Shivani Wazir Pasrich, Nitin Arora, Joe Baath and Gitikka Ganju Dhar represented the presenter’s fraternity along with many young voices and shared their experience with the event industry. In his opening comment Vipul Pandhi-Vice President North EEMA (Director, Workaholics Event Solutions Pvt. Ltd) said “ We felt that in the absence of proper training, educational institute it will be great to engage the community through an event wherein some of the senior presenters share the tricks of trade with fellow presenters.`,
    `We also felt that if we can capitalize on the opportunity and have a dialogue wherein we get to know each other‘s expectation from each other will be the icing on the cake.” Presenters are the most important element of the event and initiative like The Presenters Dialogue was apt for knowledge sharing, understand client’s perspective and learn from veteran practionners of the trade. Commenting on the occasion Sanjeev Pasricha Executive Vice President North EEMA, Group CEO CS Direckt Events and Exhibitions Pvt. Ltd said “EEMA has completed 10 years, we are focussing on Inclusivity and this year we are building an inclusive community. We are glad that this is first step of inclusivity we have taken with presenters”.`,
    `Panel discussion titled “The Sutradhar” with distinguished panellist Harjinder Singh, Sanjeev Pasricha, Vipul Pandhi, Lalit Gatani, Karan Chetri, Gitikka Ganju Dhar, Gazal Vats, Shobha Rana explored the expectations from presenters and dealt with a host of topic from innovative ideas to client brief to language Hygiene.`,
    `Session titled “TanaBana” on the other hand put the spotlight on event managers and covered some the contentious issue like payment, logistic, script and last minute requests. Panelists included Sanchali Arora, Pooja Yadav, Anuj Guruwara, Sahil Bajaj, Sonam Chabra, Ankur Kalra, Aditya Joshi and KSJ Gurna Acknowledging the presenters Sanjoy Roy, President – EEMA and MD, Teamwork Arts said, “You have the power to make or break an event.`,
    `The industry value's your work and will ensure your safety and well being”. EEMA represents the aspirations and visions of one of India’s fastest growing business sectors of events and entertainment. Over 100 presenters from all across India participated in The Presenter Dialogue. It had representation from cities like Delhi, Mumbai, Chandigarh, Jaipur, Bhopal, Patna, Pune and Ludhiana. Around 50 of India’s leading event managers attended and met the Emcees present.`,
    `The Presenters also got an opportunity to present themselves on stage to showcase the kind of work they have been doing while opening the doors for many business associations in times to come.`,
    `EEMA North team comprising of Vipul Pandhi-Vice President North (Director, Workaholics Event Solutions Pvt. Ltd, Humayoon Zaidi (CEO, Event Network Entertainment Pvt. Ltd.) and Atul Chabra-Jt. Sec North (Director Enthuse Answers Communications Pvt Ltd) are driving this initiative with key support from Sanjeev Pasricha Executive Vice President – EEMA (Group CEO CS Direckt Events and Exhibitions Pvt. Ltd.), KJS Gurna Treasurer EEMA (Director Bellset Entertainment Pvt. Ltd.)Sharad Mathur (Director EMG Entertainment Pvt. Ltd.). Sachin Talwar (Director Wow Events Pvt. Ltd.) is ensuring that this initiative reaches its desired audience through digital medium.This platform will be travelling to cities across India in the coming months.`,
  ];

  return (
    <>
      <PostHeader
        postHeading="EEMA - The Presenters Dialogue Brings Anchor community on one platform"
        postDate="Aug 29, 2018 "
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post19Data.map((data, index) => (
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
          "/images/press-coverage/posts-gallery/1554878258_BOOP4876.jpg",
          "/images/press-coverage/posts-gallery/1554878577_BOOP4911.jpg",
          "/images/press-coverage/posts-gallery/1554878799_BOOP4998.jpeg",
          "/images/press-coverage/posts-gallery/1554879388_BOOP5008.jpeg",
          "/images/press-coverage/posts-gallery/1554880270_BOOP5122.jpeg",
          "/images/press-coverage/posts-gallery/1554880353_BOOP5157.jpeg",
          "/images/press-coverage/posts-gallery/1554880477_BOOP5184.jpeg",
          "/images/press-coverage/posts-gallery/1554880570_BOOP5351.jpeg",
          "/images/press-coverage/posts-gallery/1554880708_BOOP5392.jpeg",
          "/images/press-coverage/posts-gallery/1554880801_BOOP5494.jpeg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image src={data} alt={`image-${index}`} height={470} width={300} />
          </div>
        ))}
      </div>
    </>
  );
}
