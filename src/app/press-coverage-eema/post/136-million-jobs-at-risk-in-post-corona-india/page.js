"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Post4() {
  const post4Data = [
    "There will be a tsunami of job losses for employees who don’t have a regular salary, people without a written contract",
    "A labour market crunch right now can easily turn into a nightmare. Besides the possibility of social unrest, expect more demands for more reservations in government",
    "On a Monday afternoon, a day before India announced a 21-day lockdown to flatten the curve of covid-19 infections, Sunil Gupta, chairman and managing director of Travel Bureau, a tour operator in Agra, sat alone in his office in Agra’s Fatehabad Road. More than 10 million tourists visited the Taj Mahal in 2019 but things have nosedived since February 2020. Gupta’s 145 employees are at home. His company’s 80 cars and 36 coaches are gathering dust.",
    `“There will be no tourists until September," Gupta said in a soft, resigned tone. “That means I have to keep paying salaries without income for six months."`,
    `Travel Bureau is one of the larger travel agencies. While Gupta stressed he can afford paying salaries for six months, many other operators cannot. Already, there is talk of tour agencies in Agra asking employees to take a haircut. This is bad news for tour guides and drivers. That bridge to a “living wage", or a minimum wage plus tips, has fallen to pieces.`,
    `The worst-case scenario is for employees who don’t have a regular salary. In the tourism industry, for instance, this category includes people who either work on short-term contracts or even without them. This includes guides, of course, but also employees of parking contractors, cleaners working in shops, waiters in restaurants, suppliers of vegetables, meat and flowers to the hotels among others.`,
    `For these workers, the virus outbreak has meant a loss of livelihood. Industry body CII said that more than half of the tourism and hospitality industry can go sick with a possible loss of over 20 million jobs if recovery in the industry stretches beyond October 2020.`,
    `The script is similar in many other services industries, in manufacturing and non-manufacturing sectors such as construction. Lower growth because of falling demand and supply constraints would not only make fresh job creation tougher, but also hurt those who are currently employed. Overall, about 136 million non-agricultural jobs are at immediate risk, estimates based on National Sample Survey (NSS) and Periodic Labour Force Surveys (PLFS) data suggested. These are people who don’t have a written contract and include casual labourers, those who work in non-registered nano businesses, registered small companies, and even the self employed.`,
    `While the daily-wage earners are bearing the brunt in the first phase of retrenchments, companies across industries could pink-slip employees on short-term contracts next. Over five million Indians have job contracts less than a year in tenure.`,
  ];

  return (
    <>
      <PostHeader
        postHeading="136 million jobs at risk in post-corona India"
        postDate="Mar 31, 2020"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post4Data.map((data, index) => (
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

        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          viewport={{ amount: 0.5, once: true }}
          className=" text-3xl text-black tracking-tight font-semibold mb-7 mt-16 "
        >
          Demographic disaster
        </motion.h4>
        {[
          "The covid-19 epidemic comes at a difficult demographic time for India and would only exacerbate a looming jobs crisis. India needs to create nearly 10 million jobs every year to absorb people moving into the working-age population, besides those that are already unemployed.",
          `The Adecco Group India, a staffing company, has mapped the impact of covid-19 spread across employment in some Indian industries. It said about nine million jobs can be reduced across the manufacturing clusters of textiles, capital goods, cement, food products, metals, plastics, rubber and electronics. Manpower cuts in the automotive industry started last quarter owing to falling sales.`,
          `The coronavirus situation will only exacerbate unemployment. Adecco estimated that the automobile industry can lose up to a million jobs in the dealer ecosystem, front-line roles, and the semi-skilled. Around 600,000 ground and support roles on contract in the aviation industry are at risk.`,
          `Clearly, a labour market crunch right now can easily turn into a nightmare. Besides the possibility of social unrest, expect more demands for more reservations in government jobs.`,
          `“The brunt of the economic impact will be borne by the economically disadvantaged," Sabina Dewan, the president and executive director of JustJobs Network, a think tank, said.`,
          `“The implications of this crisis will be dire. We will inevitably have less fiscal space to make much-needed investments in, for example, education, skills, preventative healthcare, and infrastructure. This will not just prevent us from moving forward but will set us back. Our large and growing youth population will be further disenfranchised, potentially spurring social discord, crime, and instability," she added.`,
        ].map((data, index) => (
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

        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          viewport={{ amount: 0.5, once: true }}
          className=" text-3xl text-black tracking-tight font-semibold mb-7 mt-16 "
        >
          136 million at risk
        </motion.h4>
        {[
          "Santosh Mehrotra, a human development economist and professor at the Centre for Informal Sector and Labour Studies in Jawaharlal Nehru University, pegs India’s labour force at 495 million. In 2017-18, about 30 million were unemployed, which implies that 465 million are currently employed.",
          `Who among the already employed are the most vulnerable? The easy answer is those that don’t have the security of employment; those without any social protection. They are often bracketed as “informal" workers.`,
          `In a paper Mehrotra co-authored with Jajati K. Parida of the department of economic studies, Central University Punjab (India’s Employment Crisis: Rising Education Levels And Falling Non-agricultural Job Growth), the share of the informal sector was pegged at 90.7% overall and 83.5% in the non-farm sectors. Most estimates in the paper are based on NSS and PLFS data. Since there are 260 million people employed in India’s non-farm sector (agriculture employs another 205 million), the number of informal workers totals about 217 million across services, manufacturing and non manufacturing sectors.`,
          `One shade of precarious employment among the informal cohort are those that have no written jobs contract. Numbers pieced together from the Mehrotra paper suggests that about 28 million have no written jobs contracts in manufacturing; 49 million in non-manufacturing; and 59 million in services in 2017-18. Overall, about 136 million workers in India, or over half the total workers employed in non-agricultural sectors, have no contracts and remain the most vulnerable in the aftermath of the corona outbreak.`,
          `They can be fired without notice or severance. Most daily-wage earners or casual labourers fall in this bracket. Their pain is seen in Twitter and television feeds—videos of hundreds of migrant workers walking back to their villages are doing the rounds. Many of them work in construction. Employment in real estate construction, for example, is impacted because housing launches and sales are headed south given that lower economic growth is now a certainty.`,
        ].map((data, index) => (
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

        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          viewport={{ amount: 0.5, once: true }}
          className=" text-3xl text-black tracking-tight font-semibold mb-7 mt-16 "
        >
          Stuck cogs
        </motion.h4>
        {[
          `Tiruppur’s textiles cluster in Tamil Nadu is a cradle of entrepreneurial activity and is a mix of organized and unorganized companies. A few sewing-machine operators often gang up to start a business. One could argue most of them remain uncompetitive and die, but that’s another story. One first generation entrepreneur who survived and thrived is Raja M. Shanmugham, partner at Warsaw International. The company makes T-shirts for German and Dutch brands.`,
          `For the first time since he started the company in 1992, Shanmugham faces a black swan moment. All European markets are closed and the T-shirts he shipped haven’t been distributed to the stores. Many of his batches are stuck on the high seas. “The remaining batch of orders placed with us are on hold. I have taken a hit of ?30 crore on bookings. We have also not received payments for the shipments made, another ?10 crore," he said.`,
          `Across the cluster in the city, ?5,000 crore in payments remain unrealized from the buyers for shipments made in January and February. The orders on hold add up to another ?2,500 crore. All this is bad news for employment. “Tiruppur has 1,500 exporting companies besides thousands of smaller supporting units. They employ six lakh. Most are daily wage labourers who earn up to ?450 a day. Now, they are not employed," Shanmugham said.`,
          `Like mentioned earlier, it is easy to fire workers without contracts when demand dips. Daily-wage earners, mostly, have no written contracts. Overall in India’s manufacturing sector, textiles and apparel employs nearly 18 million and falling demand now puts many jobs at risk.`,
          `The manufacturing sector is stressed beyond textiles. Leather footwear exporters from Agra face similar predicaments.`,
          `Footwear manufacturing in Agra predates the Taj Mahal by nearly two centuries—Agra has been making shoes since the 15th century, the Agra Footwear Manufacturers and Exporters Chamber claims on its website. Today, the city has 250 mechanised factories and another 5,000 cottage industries who can churn out half a million pairs a day.`,
          `The cluster employs over 400,000 and half this workforce are daily-wage earners. With the dip in demand and eventual lockdown, they have no income. Over the past two months, more than ?450 crore worth of export orders were cancelled by European brands, Chandra Sekhar, a merchant exporter from Agra, informed.`,
          `Manufacturing, which employs 56.4 million people in India, is just one part of the story. The non-manufacturing sector, which includes construction, mining, electricity, water and gas engages another 59 million. But India’s largest employer by far is services with an estimated 144.4 million workers.`,
        ].map((data, index) => (
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

        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          viewport={{ amount: 0.5, once: true }}
          className=" text-3xl text-black tracking-tight font-semibold mb-7 mt-16 "
        >
          The services rout
        </motion.h4>
        {[
          `On a good day, marigolds, lilies, roses, orchids, gerberas, irises, and anthuriums from India and all over the world land up at the flower trading market in Ghazipur, Delhi. Traders buy the flowers from growers and sell it to hotels, corporates, event organizers, government offices and smaller florists. Flower trade is an allied industry to both tourism and the events business.`,
          `“Everyday, we did sales of about ?50,000-60,000 a day. I have five employees," Sanjay Agarwal, a flower trader in the market, said. With trade shut, all employees in the market, mostly daily-wage earners, don’t know how to put bread on the table. Worse, the Hindu marriage season, the biggest propeller for flower trade, can get pushed out. “The marriage season starts around 15 April. There is no way marriages could be held now," Agarwal said.`,
          `Besides marriages, artistic festivals have been a casualty as well. Sanjoy Roy, managing director of production house Teamwork Arts, is the producer of the Jaipur Literature Festival held in January. “We got past Jaipur. But we had to postpone festivals in Hong Kong, Singapore, Turkey, Morocco and India. In February, we lost ?15 crore from the festivals we postponed," he said.`,
          `If people don’t have food on the table, they are not going to see a show. This, by extension, is bad news for anyone in the creative industry, which includes a vast array of freelance artists. “It could wipe out ?40,000 crore over the next two months in the events and the entertainment industry," Roy calculated. The implications for employment? “The industry employs 10 million between direct and indirect. There are lighting people, infrastructure companies that provide tents, flower traders— 80% of those employed could go under," he said.`,
          `Meanwhile, the retail trade, which employs over 37 million—the largest employer in the services sector—will face job losses as well, particularly in the non-essential segments. With malls and stores closed, the front-end staff have little to do.`,
          `Akhil Jain is an executive director at Jain Amar, a vertically-integrated textiles firm with manufacturing plants in Ludhiana and 47 operated stores in north, central and western India. The company sells casual wear for women under the brand Madame, employing 750 people in retail. Jain said he would hold on to these people till 15 April. If the lockdown continues beyond this date, the industry would have little option but to ask people to leave.`,
          `Many brands are, therefore, trying to negotiate with malls to waive off rentals for a few months. The bigger question is demand. Brands are grappling to understand the psychological impact of the lockdown. Isolation can lead to anxiety. “When would consumers feel good about buying a nice bag, and go out in the evening? We are discretionary spending. That’s the bigger issue," Dilip Kapur, founder and chairperson of leather bag-maker Hidesign, wondered.`,
          `Kapur is locked down, in his home in Auroville, outside Puducherry, with books and two Rhodesian Ridgebacks. “This is clearly something we have not faced since World War II. Any illusion that this will resolve itself within a month is going to land us in trouble. How the businesses have to reorient themselves to survive is not clear," he said.`,
        ].map((data, index) => (
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
          href="https://www.livemint.com/news/india/136-million-jobs-at-risk-in-post-corona-india/amp-11585584169192.html"
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
