"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";
import { Image } from "rsuite";

export default function Post8() {
  const post8Data = [
    `12th July, 2019: Commemorating foundation day of Event & Entertainment Management Association (EEMA), an autonomous registered body of companies, institutions and professionals operating within the Events and Experiential Marketing industry of India.  Col. Akhilesh Pandey Post Master General (Operations) today released a special EEMA postal cover at Niti Aayog office. Mr. Amitabh Kant, CEO NITI Aayog was the chief guest for the event.  The launch of the special cover marks the 11th foundation day of EEMA and the evolvement of the industry during these years of a fast paced emergence of brand India. Ashok Pal Singh, Member, Postal service board graced the occasion.`,
    `The cover has various elements keeping with the spirit of the environmental sustainability and urging the event industry to shape itself to the contemporary environmental necessity. The aesthetically beautiful cover has been designed by Poonam Lal.`,
    `The purpose of EEMA is to bring together the event industry of India at the national level and for this very reason it was established in 2008. The membership of EEMA has since grown significantly.`,
    `Besides rapid growth the event Industry in India is also undergoing important transformation by becoming a partner in development of India Brand and not just remaining the last mile organizer of celebrations and parties.`,
    `According to the Ernst and Young report for the year 2018, the Media and Entertainment (M&E) Sector in India grew by 13% to reach Rs 1.67 Trillion in 2017 and out of this the live entertainment sector including experiential and MICE areas which EEMA represents grew by 15.6%. The total Event industry revenue in India is estimated to grow to Rs 86 billions in 2019 over Rs 75 billions in 2018 and create greater no of jobs across the spectrum.`,
    `On the release of special cover Mr. Amitabh Kant CEO NITI Aayog said, “I have always been a believer that event industry has always been a driver of our Indian economy. They are the ones to create job opportunities and built brand India. And if India is to achieve the vision of our Prime Minister Narendra Modi of becoming a 5 trillion economy by 2024, then the event & entertainment industry too needs to come together. From now on every event we do be it in India and abroad it should leave an impact globally. It should provide a unique experience and represent brand India`,
    `Sanjoy Roy, President - EEMA said, “The cultural industry today offers the primary solution to create job. EEMA represent over 1000 members across the length and breadth of the country and each contributing to thousands of jobs in the sector. Many of our member company works in the rural sector providing the last mile connectivity between the government schemes and people. We look forward to significant sharing of information with Niti Aayog and all of the other department including Postal Department in its new avatar delivering services`,
    `Post Master General (Operations) Col. Akhilesh Pandey said, “Today is a special day as we release this special postal cover for EEMA. This is just our way of showing our appreciation and saying thank you in our unique way for doing your bit towards the society and helping India grow. So on behalf of Department of Post and Delhi circle we would like to congratulate EEMA on completion of 11 successful years."`,
    `Also present on the occasions were Ambassador Suresh Goel -Director General EEMA, Sanjeev Pasricha - Executive Vice President, Vipul Pandhi - Vice President North- EEMA, Harjinder Singh - Co-Chair EEMAGINE 2019 and Atul Chabra - Joint Secretary North EEMA.  amongst other member from the event fraternity`,
  ];

  return (
    <>
      <PostHeader
        postHeading="Special Postal Cover launched for Events & Entertainment Management Association (EEMA)"
        postDate="Jul 12, 2019"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post8Data.map((data, index) => (
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
          "/images/press-coverage/posts-gallery/1563513872_EEMA SPECIAL COVER 1.jpg",
          "/images/press-coverage/posts-gallery/1563513891_EEMA SPECIAL COVER 1.jpg",
        ].map((data, index) => (
          <div key={index} className=" ml-7 mb-7 ">
            <Image src={data} alt={`image-${index}`} height={470} width={300} />
          </div>
        ))}
      </div>
    </>
  );
}
