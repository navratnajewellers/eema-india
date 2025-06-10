"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";

export default function Post33() {
  const post33Data = [
    `EEMA had a very successful day in the Delhi High Court today. For the first time, the PPL, IPRS, Novex have been forced by the court to prove their ownership of copyright. Moreover, they are required to publish all their assignments, agreements, chain of ownership, etc. online and list it on their website…thereby available to all stakeholders.`,
    `We would also like to advise entertainment industry not to be fooled by the propaganda that is currently being put out by the vested interests and the agents of PPL / IPRS / Novex and the licensing agents who have been helping event organizers obtain licenses from them.`,
    `They are part of the vested interests and would like to project this as a win for PPL/IPRS and Novex, since they can continue to claim copyright fees without having to prove ownership. In reality, EEMA believes that copyright fees should be paid to the rightful owners and creators and artists in a transparent and reasonable manner so that the rightful owners should receive their due and the rates being charged are logical and reasonable.`,
    `The orders of the court are a big step in this direction. In continuation of the Writ Petition that we had filed in the court wherein we had received an Injunction against PPL / IPRS & NOVEX on the 23rd against charging royalty under section 33 (as a registered copyright society). The writ petition was challenged by PPL, IPRS and Novex. The respondents were represented by more than 20 senior Advocates including Dr Ashwani Kumar who made strong arguments to the court requesting that the interim injunction order passed by the court on 23rd December be vacated and that EEMA should put in a bank guarantee if its members do not want to take the music license.`,
    `The court was convened before the Vacation Judge today only to hear the above matter. Sr Advocate Mr Ramji Srinivasan backed by TMT Law (EEMA’s lawyers) appeared before the court and spoke for over 90 minutes explaining the entire situation to the Hon Judge in great detail. There were several rounds of discussions and cross-examination that took place in the hearing which lasted for over 4 hours in the Delhi High Court today. ??We were able to secure the interests of our members and get significant reliefs from the court at the end of the hearing, some of the points that came out were as follows: The Judge did NOT cancel or vacate the previous order – so the injunction obtained by EEMA against the collection of license fees under Section 33 (reserved for copyright societies) by these parties continues.`,
    `PPL, IPRS and Novex have accepted in court that they are not copyright societies. Therefore copyright license fees can only be collected under Section 30 which is reserved for owners of the copyright with the clear provision that when called upon to do so they need to prove their ownership.`,
    `The court has provided a process for the Licensing in the immediate interim period: – EEMA members / the event organizers will provide a list of songs that they intend to play BEFORE the event on mail. – The respondents (PPL / IPRS / Novex) will thereafter need to confirm in writing if they are the owners / assignees or authorized agents of the tracks mentioning the assignment no / details on the invoice – The event organizers will pay the amount before the event as per mutual negotiation with the copyright owner basis confirmation received – The License issuing company/entity shall provide proof by way of legal agreements within 7 days of the invoice, to the satisfaction of the event organizer. – In case, the event organizer is not satisfied by the proof provided, the money will not be appropriated by the respondents and the event organizer has the option of seeking refund through legal remedies.`,
    `Additionally, PPL/IPRS/Novex are required to put up a detailed list on their website listing all songs they own including the names of the authors / producers they have acquired them from along with the dates of validity of the contract – TILL 31st December, 2016 In addition to this, the licensing companies without fail need to also upload the valid legal agreements by which they claim ownership of these tracks by 31st December which will be available for all to see and check. The Court instructed PPL / IPRS / Novex to set up an online payment gateway within 1 month of this hearing wherein we will be able to easily obtain permissions online. This is a long drawn battle through which the entire music industry, creative industry and event industry will change for the better.`,
  ];

  return (
    <>
      <PostHeader
        postHeading="High Court rejects plea to vacate injunction; asks copyright licensors to prove their ownership"
        postDate="Dec 30, 2016"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post33Data.map((data, index) => (
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
    </>
  );
}
