"use client";

import { motion } from "framer-motion";
import { Accordion } from "rsuite";

const faqs = [
  {
    question: "Who can become an EEMA member?",
    answer:
      "Any individual or company engaged in the event and experiential marketing industry can apply. This includes agencies, service providers, freelancers, students, and more.",
  },
  {
    question: "What are the membership fees?",
    answer:
      "Membership fees vary depending on the category — Star, Gold, Platinum, or Associate Partner. Detailed pricing is available on the membership tiers section above.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Once all documents are submitted, the EEMA committee typically reviews and responds within 2–3 weeks.",
  },
  {
    question: "Can I upgrade my membership later?",
    answer:
      "Yes, members can request an upgrade by contacting the EEMA support team and providing additional documentation if required.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <motion.h2
          className=" text-black text-3xl md:text-4xl font-bold w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 mb-6 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Find answers to common queries about EEMA membership.
        </motion.p>
      </div>

      <div className=" mt-16 text-black ">
        <Accordion className=" max-w-3xl mx-auto space-y-4 [&_.rs-panel-btn:focus]:!bg-white [&_.rs-panel-btn:hover]:!bg-white [&_.rs-panel:before]:hidden ">
          {faqs.map((faq, index) => (
            <Accordion.Panel
              key={index}
              eventKey={index}
              header={<h4 className=" !font-medium ">{faq.question}</h4>}
              className=" bg-white shadow-md "
            >
              <motion.div
                className=" pb-4 text-sm text-gray-600"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
