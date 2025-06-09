"use client";

import PostHeader from "@/app/components/press-coverage/PostHeader";
import { motion } from "motion/react";

export default function Post20() {
  const post20Data = [
    `The Event and Entertainment Management Association (EEMA) along with Event Show Asia (an initiative by EVENTFAQS Media) took a first of its kind pledge to ensure safety at events under its 'We are SAFE' initiative at Hotel Sahara Star on April 25th, 2018. The initiative by the association ensures Safety at Events, Exhibitions and at all the experiential marketing events. The pledge ceremony witnessed high attendance from pioneers of the event and entertainment Industry.`,
    `Right from Brian Tellis - Co-Founder Group CEO, Fountainhead MKTG to Viraf Sarkari - Co-Director, Wizcraft International; Sameer Tobaccowala - Chief Executive Officer - ?Shobiz Experiential Communications; and Siddharth Ganeriwala - Founder Director, Aura Integrated Solutions and other members from EEMA came together and pledged to think safe, act safe, and be safe.`,
    `They pledged to ensure ‘Safety First’ at all their events and experiential endeavours. Safety at events is the need of the hour and it is important for the industry to be Safety compliant at all levels. The pledge summarizes the highest priority of safety during event planning and execution. Sharing EEMA’s perspective Sabbas Joseph, President EEMA and Co-Director, Wizcraft International said, “It is indeed shocking to realize how little time we spend on adhering to safety protocol as it not only affects our lives, but also the lives of our invited guests, besides our livelihood.`,
    `I am relieved that we at EEMA are placing this issue on top priority – at least then we’ll all be on the same page.  From EEMA’s side I can assure you that Seminars and Workshops on SAFE topics will be conducted both nationally and regionally to ensure that every single EEMA member is well informed on the dangers lurking within every event and the precautions that must be taken.”`,
    `It is believed that taking the initiative further, EEMA now also plans to set up a task force of national and regional experts who can advise on better safety standards with critical inputs from a panel of international advisors as well.`,
    `Event Show Asia this year also hosted a special panel discussion on Safety at Events in Real terms: ‘Where to Begin’ which was moderated by Viraf Sarkari. Among the panellists were Ajit Thakkar- Director, Jess; Vaibhav Kapoor - Third Wave Solutions; Manish Mavani – Director SnL Pro; and Warren D’souza – Director, Sound.com.`,
    `The panel contributed key points which EEMA as an association can implement: - EEMA to conduct sessions to educate and create awareness among clients about health and safety standards and, impress upon them on the critical need to spend a little extra on key measures to create a successful event. -  It is important to ensure that safety norms and standards are adhered to by companies registered with EEMA, especially associate partners and vendors who provide services to event companies. -  EEMA will also create a list of health and safety compliant companies to give a direction to the industry.`,
    `Siddharth Ganeriwala, VP - Health and Safety, who initiated this campaign said, “Having been an event manager for well over two decades now, I still have butterflies in my stomach before the start of any event, because even though I believe in Safety, I have no clue whether the technician or the labourer down the line believes in adherence as intensely as I do. This was why I decided to set this plan rolling to ensure a holistic synchronization of priorities.  If every single person on site ensures Safety Integrity in what they do individually, we can collectively approach D-Day with confidence.”`,
  ];

  return (
    <>
      <PostHeader
        postHeading="EEMA Members Come Together to Pledge for Safety at Event Show Asia Mumbai"
        postDate="Apr 25, 2018"
      />

      <div className=" leading-relaxed text-gray-500 text-lg py-11 ">
        {post20Data.map((data, index) => (
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
