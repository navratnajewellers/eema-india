"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post7() {
  const post7Data = [
    `Delhi government pledges support to the Events and Entertainment Industry and joins hands with Event and Entertainment Management Association (EEMA) to make Delhi a global cultural hub. It was a show of strength by the Indian Events and Entertainment industry at the EEMAX Global Awards on Saturday night where Deputy Chief Minister of Delhi, Manish Sisodia pledged the support and co-operation of his government towards making Delhi a cultural hub of global standards.`,
    `Manish Sisodia was the Chief Guest of the much-anticipated awards night and was introduced by Sanjoy Roy, President of Events and Entertainment Association of India Roy, who set the tone for the evening by requesting the government to focus on efforts to address the myriad problems that plague the industry.`,
    `“We are all responsible citizens, each person here contributes to the GDP, we all pay our taxes. We know that the economy is in distress today. The only industry that continues to grow is the entertainment industry at 17.5 percent annually as per the Ernst and Young Report that was last published. What we believe in is creating a professional atmosphere where each of us can work towards the betterment of the city in a professional and safe environment,” Sanjoy Roy said in his opening address.`,
    `He said that the Events industry can work hand in hand with the Delhi government to overcome some of the obstacles. “We would be happy to go out of our way; we will walk the extra mile to make this possible. We look to you for hope, we look to you for inspiration, we look to you for cooperation and we hope we can together make this city a cultural hotspot not just in India but globally,” Roy appealed to the Delhi government on behalf of the members of the EEMA.`,
    `Sisodia recognized that the events industry in India has come a long way but continues to face issues that are detrimental to its progress.`,
    `“The Events industry is growing at a great pace. India’s economy is falling and our ranks are also going lower in the happiness index but this is an industry that empowers both the economy and the happiness index of our country. The Events industry generates contributes approximately 2, 50,000 Crores to the economy of the country and in Delhi alone it is employing over 15 lakhs people. This is one of the biggest things and is closest to my heart.`,
    `“People graduate from top universities and colleges of the country but they are unable to find jobs. We feel that we are patriotic by hoisting the tricolour on Independence Day and Republic Day but according to me true patriotism is employing these 15 lakh people of Delhi who are gaining their livelihood from the events industry. Giving the job to 15 lakh people is true patriotism. Contributing 2, 50,000 crores to the country’s economy is true patriotism,” said the Deputy Chief Minister of Delhi, who has shown deep interest towards the causes of education, arts, and culture.`,
    `He asked the members of EEMA to contemplate why are we not able to do what Washington and Tokyo are able to do with their events and programs.`,
    `“We will have to reach to the root cause and then create a buzz about it. Delhi has a very complex and hybrid governance system, which is unlike any other Capital city in the world. This needs to be addressed and we need to create a buzz about it. We have to create a single-window system for all permissions; you should not have to go to four different bodies to seek permissions to organize one particular event. We need a clean governance system in all sectors of governance,” he said.`,
    `Sisodia also announced that the government of Delhi is in the process of creating an Event Management Skill Institute in collaboration with EEMA. “We will aim to give the best professionals to the country through this institute,” he added.`,
    `The EEMAX GLOBAL 2019 AWARDS was held on Aug 3 at A.Dot. It was preceded by two days of creative and experiential extravaganza at EEMAGINE 2019 on Aug 1 and 2 at Pullman Aerocity.`,
    `Awards were presented to winners across a wide range of categories, spanning from Corporate, Sporting, Wedding, and Social events to Exhibitions, Designs, and Marketing & Digital Integration.`,
    `Recognizing and celebrating the best of talents from Events and Entertainment Industry at a PAN-India level has been at the heart of EEMAX GLOBAL AWARDS in its 10 glorious editions so far. This year the most anticipated event for the beautiful, talented and creative people raised the bar by introducing a special category of awards for Budget Projects.`,
  ];

  return (
    <>
      <PostHeader
        postHeading="EEMA to work together to transform Capital into an international cultural hub"
        postDate="Aug 06, 2019"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post7Data.map((data, index) => (
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
        {[
          {
            text: "Millennium Post",
            link: "http://www.millenniumpost.in/features/making-delhi-a-cultural-hub-367550",
          },
          {
            text: "Navodaya Times",
            link: "#",
          },
          {
            text: "Orissa Diary",
            link: "https://orissadiary.com/delhi-govt-eema-work-together-transform-capital-international-cultural-hub/",
          },
          {
            text: "The News Strike",
            link: "https://thenewsstrike.com/event-management-skill-institute-to-be-set-up-by-delhi-govt-and-run-by-eema/",
          },
          {
            text: "The News Shack",
            link: "https://thenewshack.com/delhi-govt-eema-to-work-together-to-transform-capital-into-an-international-cultural-hub/",
          },
        ].map((data, index) => (
          <motion.a
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.25, ease: "easeInOut" }}
            viewport={{ amount: 0.5 }}
            href={data.link}
            className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-orange-600 text-sm font-semibold transition-all duration-300 hover:text-white mb-7 "
          >
            <span className="transition-all duration-300 group-hover:text-xl text-nowrap ">
              {data.text}
            </span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white" />
          </motion.a>
        ))}
      </div>

      <div className=" flex items-center flex-wrap py-11 ">
        {[
          "/images/press-coverage/posts-gallery/1568635506_Deputy-CM-Manish-Sisodia-at-EEMAX-Global-Award-768x674.jpg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 ">
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
