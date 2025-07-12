import { Image } from "rsuite";
import { motion } from "framer-motion";

const data = [
  {
    segment: "Corporate Events",
    name: "Trade/Channel Event of the Year (Budget Above ₹1 Crore)",
    definition:
      "A large-scale event for trade partners or channel stakeholders with a budget over ₹1 crore, showcasing outstanding execution, engagement, and impact on business relationships and sales growth.",
  },
  {
    segment: "Corporate Events",
    name: "Employee Engagement Event of the Year",
    definition:
      "An event organized to engage, motivate, or reward employees, fostering a positive work culture and boosting morale.",
  },
  {
    segment: "Corporate Events",
    name: "Product Launch/Re-launch Event of the Year (Budget Above ₹1 Crore)",
    definition:
      "A product or service launch or relaunch event with a budget over ₹1 crore, showcasing exceptional creativity, scale, and strategic execution to drive buzz, excitement, and market visibility.",
  },
  {
    segment: "Corporate Events",
    name: "Celebratory Event of the Year",
    definition:
      "An event organized by a corporate entity to celebrate significant milestones, achievements, or occasions, showcasing creativity and excellence in event execution.",
  },
  {
    segment: "Corporate Events",
    name: "PR / Media Event of the Year",
    definition:
      "An event designed to build brand value, enhance brand visibility, or gain media coverage, showcasing innovative PR strategies and impactful media engagement.",
  },
  {
    segment: "Corporate Events",
    name: "Sustainable Corporate Event of the Year",
    definition:
      "An event organized with a focus on sustainability and environmentally conscious practices, demonstrating a commitment to reducing environmental impact.",
  },
  {
    segment: "Corporate Events",
    name: "CSR Event of the year",
    definition:
      "An event organized for the betterment of communities, society, or the environment, showcasing corporate social responsibility initiatives and their impact.",
  },
  {
    segment: "Corporate Events",
    name: "Hybrid Event of the Year - Offline + Online",
    definition:
      "Offline + Online: An event that seamlessly integrates online and offline mediums to engage audiences and deliver a comprehensive experience.",
  },
  {
    segment: "Corporate Events",
    name: "Trade/Channel Event of the Year (Budget Below ₹1 Crore)",
    definition:
      "An event for trade partners or channel stakeholders with a budget of ₹1 crore or less, demonstrating exceptional execution, engagement, and impact on business relationships and sales growth.",
  },
  {
    segment: "Corporate Events",
    name: "Product Launch/Re-launch Event of the Year (Budget Below ₹1 Crore)",
    definition:
      "A product or service launch or relaunch event with a budget of ₹1 crore or less, showcasing exceptional creativity, scale, and strategic execution to drive buzz, excitement, and market visibility.",
  },
  {
    segment: "Consumer Experiences",
    name: "Excellence in Youth Activation",
    definition:
      "An activation designed to engage young audiences in schools, colleges, or other locations, focusing on innovative approaches to connect with the youth demographic.",
  },
  {
    segment: "Consumer Experiences",
    name: "Excellence in Rural Activation",
    definition:
      "Brand activation organized for a rural audience, demonstrating effective engagement strategies tailored to rural environments and communities.",
  },
  {
    segment: "Consumer Experiences",
    name: "Excellence in Consumer Activation Campaign (Budget Above ₹1 Crore)",
    definition:
      "A consumer activation campaign with a budget over ₹1 crore, aimed at driving brand awareness, engagement, sampling, or sales, and showcasing creativity, strategic execution, and measurable consumer impact in public spaces like malls.",
  },
  {
    segment: "Consumer Experiences",
    name: "Excellence in Road Show Activation",
    definition:
      "A consumer activations campaign using a vehicle or other methods to reach and engage consumers, demonstrating innovation and impact.",
  },
  {
    segment: "Consumer Experiences",
    name: "Excellence in Luxury Brand Activation",
    definition:
      "A consumer activation campaign for a luxury brand, showcasing creativity and effectiveness in engaging affluent consumers.",
  },
  {
    segment: "Consumer Experiences",
    name: "Excellence in Integrated Marketing Campaign",
    definition:
      "A marketing campaign utilizing three or more mediums or media platforms, including experiential elements, to deliver a cohesive and impactful message.",
  },
  {
    segment: "Consumer Experiences",
    name: "Excellence in Influencer Marketing Campaign",
    definition:
      "A marketing campaign leveraging influencers to create on-ground experiences and drive brand engagement, showcasing effective use of influencer marketing.",
  },
  {
    segment: "Consumer Experiences",
    name: "Excellence in Consumer Activation Campaign (Budget Below ₹1 Crore)",
    definition:
      "A consumer activation campaign with a budget of ₹1 crore or less, aimed at driving brand awareness, engagement, sampling, or sales, and showcasing creativity, strategic execution, and measurable consumer impact in public spaces like malls.",
  },
  {
    segment: "Exhibitions",
    name: "B2B Exhibition of the Year",
    definition:
      "A business-to-business display experience at an exhibition, showcasing innovation, creativity, and effectiveness in engaging B2B audiences.",
  },
  {
    segment: "Exhibitions",
    name: "B2C exhibition of the Year",
    definition:
      "A business-to-consumer display experience at an exhibition, showcasing innovation, creativity, and effectiveness in engaging B2C audiences.",
  },
  {
    segment: "Social Events",
    name: "Complete Wedding of the Year (Outside India)",
    definition:
      "An exceptional wedding experience across multiple functions organized outside India, showcasing creativity, luxury, and cultural richness.",
  },
  {
    segment: "Social Events",
    name: "Complete Wedding of the Year (Within India)",
    definition:
      "An exceptional wedding experience across multiple functions organized within India, showcasing creativity, luxury, and cultural richness.",
  },
  {
    segment: "Social Events",
    name: "Excellence in Wedding Entertainment",
    definition:
      "The use of entertainment in a wedding, showcasing creativity, originality, and the ability to engage guests.",
  },
  {
    segment: "Social Events",
    name: "Excellence in Wedding Décor",
    definition:
      "The use of décor in a wedding, showcasing creativity, style, and thematic consistency.",
  },
  {
    segment: "Social Events",
    name: "Sangeet of the Year",
    definition:
      "A sangeet function at a wedding, showcasing creativity, entertainment value, and audience engagement.",
  },
  {
    segment: "Social Events",
    name: "Reception Ceremony of the year",
    definition:
      "A reception ceremony at a wedding, showcasing creativity, elegance, and guest experience.",
  },
  {
    segment: "Social Events",
    name: "Excellence in use of technology in a wedding",
    definition:
      "The use of technology to enhance the guest experience or event management at a wedding, showcasing innovation and effectiveness.",
  },
  {
    segment: "Social Events",
    name: "Sustainable Wedding of the Year",
    definition:
      "An environmentally friendly and sustainable wedding, showcasing innovative practices and materials that reduce environmental impact.",
  },
  {
    segment: "Social Events",
    name: "Social Celebration of the Year",
    definition:
      "Excellence in organizing a non-wedding social event, showcasing creativity, impact, and community engagement.",
  },
  {
    segment: "MICE",
    name: "MICE Event of the Year (Outside India)",
    definition:
      "The MICE (Meetings, Incentives, Conferences, and Exhibitions) event organized outside India, showcasing excellence in event planning, execution, and attendee experience.",
  },
  {
    segment: "MICE",
    name: "MICE Event of the Year (Within India)",
    definition:
      "The MICE (Meetings, Incentives, Conferences, and Exhibitions) event organized within India, showcasing excellence in event planning, execution, and attendee experience.",
  },
  {
    segment: "Government",
    name: "Government Event of the Year- Large (above 5K pax)",
    definition:
      "The event organized for Central/State government entities or PSU's with an audience above 5,000, showcasing creativity, scale, and impact.",
  },
  {
    segment: "Government",
    name: "Government Event of the Year- Small (below 5K pax)",
    definition:
      "The event organized for Central/State government entities or PSU's with an audience below 5,000, showcasing creativity, impact, and effectiveness.",
  },
  {
    segment: "Government",
    name: "Installation/ Government Show of the Year",
    definition:
      "The installation or show organized for the government, including museums, light and sound shows, tableaus, etc., showcasing creativity, storytelling, and educational value.",
  },
  {
    segment: "Large Scale Events /Festivals/Concerts etc",
    name: "Sports Event of the Year",
    definition:
      "The sports event organized, including opening/closing ceremonies, marathons, tournaments, etc., showcasing excellence in event organization, participant experience, and audience engagement.",
  },
  {
    segment: "Large Scale Events /Festivals/Concerts etc",
    name: "Debut IP of the Year",
    definition:
      "The new intellectual property (IP) launched within the immediate previous financial year, showcasing creativity, innovation, and potential for growth.",
  },
  {
    segment: "Large Scale Events /Festivals/Concerts etc",
    name: "Longstanding IP of the Year",
    definition:
      "The intellectual property (IP) that has seen a minimum of five editions, with the last one organized in the immediate previous financial year, showcasing longevity, impact, and sustained excellence.",
  },
  {
    segment: "Large Scale Events /Festivals/Concerts etc",
    name: "Music Event of the Year",
    definition:
      "The music festival organized in the year, showcasing creativity, artist lineup, audience engagement, and overall experience.",
  },
  {
    segment: "Large Scale Events /Festivals/Concerts etc",
    name: "Festival of the Year (Art / Culture / Food)",
    definition:
      "The festival organized in the space of art, culture, food, or any other similar non-music genre, showcasing creativity, cultural significance, and audience engagement.",
  },
  {
    segment: "Large Scale Events /Festivals/Concerts etc",
    name: "Signature Event of the Year",
    definition:
      "The signature event of the year, which is bespoke and unique, standing out for its creativity, innovation, and impact, whether for government, social causes, or corporate entities.",
  },
  {
    segment: "Large Scale Events /Festivals/Concerts etc",
    name: "Professional Association Event of the Year",
    definition:
      "The event or conference organized for professional associations, bringing together industry leaders and professionals to recognize outstanding achievements, foster knowledge sharing, and promote networking.",
  },
  {
    segment: "Large Scale Events /Festivals/Concerts etc",
    name: "Professionnal Conference Organizer",
    definition:
      "An event where end-to-end conference management was handled — including logistics, speaker management, content curation and venue execution. This category recognizes excellence in planning and executing a large-scale conference with precision, creativity, and impact.",
  },
];

export default function EemaxAwardsCatergory({ setActiveSection }) {
  const grouped = data.reduce((acc, item) => {
    if (!acc[item.segment]) acc[item.segment] = [];
    acc[item.segment].push(item);
    return acc;
  }, {});

  return (
    <motion.section
      id="categories"
      className=" py-11 "
      onViewportEnter={() => setActiveSection("categories")}
    >
      <Image
        src="https://www.eemaindia.com/eemaxglobal/images/award-process-categories.jpg"
        alt="award-process-categories"
      />

      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">Award Categories</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-orange-300">
            <thead className="sticky top-0 bg-orange-500 text-white z-10">
              <tr>
                <th className="p-3 border border-orange-300 text-left">
                  Segment
                </th>
                <th className="p-3 border border-orange-300 text-left">
                  Category Name
                </th>
                <th className="p-3 border border-orange-300 text-left">
                  Category Definition
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(grouped).map(([segment, items]) =>
                items.map((item, idx) => (
                  <tr
                    key={`${segment}-${idx}`}
                    className="bg-white even:bg-orange-50"
                  >
                    {idx === 0 && (
                      <td
                        rowSpan={items.length}
                        className=" relative p-4 border border-orange-300 font-semibold align-top text-orange-700 bg-orange-100"
                      >
                        {segment}
                      </td>
                    )}
                    <td className="p-4 border border-orange-300 font-bold text-gray-800">
                      {item.name}
                    </td>
                    <td className="p-4 border border-orange-300 text-gray-700">
                      {item.definition}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>

      <section className="relative bg-gradient-to-b from-white to-orange-50 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
          {/* Animated logos */}
          <div className="flex items-center justify-center space-x-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lZGFsLWljb24gbHVjaWRlLW1lZGFsIj48cGF0aCBkPSJNNy4yMSAxNSAyLjY2IDcuMTRhMiAyIDAgMCAxIC4xMy0yLjJMNC40IDIuOEEyIDIgMCAwIDEgNiAyaDEyYTIgMiAwIDAgMSAxLjYuOGwxLjYgMi4xNGEyIDIgMCAwIDEgLjE0IDIuMkwxNi43OSAxNSIvPjxwYXRoIGQ9Ik0xMSAxMiA1LjEyIDIuMiIvPjxwYXRoIGQ9Im0xMyAxMiA1Ljg4LTkuOCIvPjxwYXRoIGQ9Ik04IDdoOCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTciIHI9IjUiLz48cGF0aCBkPSJNMTIgMTh2LTJoLS41Ii8+PC9zdmc+"
                alt="EEMAX Left"
                width={90}
                height={90}
                className="rotate-[-25deg] hidden sm:block"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="max-w-3xl"
            >
              <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
                Evaluated by an independent and diverse jury panel comprising of
                thought-leaders from across the globe,{" "}
                <span className="text-orange-600 font-bold">
                  EEMAX Global Awards will be held at EEMAGINE 2025 from
                  1st–3rd, August 2025,
                </span>{" "}
                in Udaipur to celebrate and recognise excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lZGFsLWljb24gbHVjaWRlLW1lZGFsIj48cGF0aCBkPSJNNy4yMSAxNSAyLjY2IDcuMTRhMiAyIDAgMCAxIC4xMy0yLjJMNC40IDIuOEEyIDIgMCAwIDEgNiAyaDEyYTIgMiAwIDAgMSAxLjYuOGwxLjYgMi4xNGEyIDIgMCAwIDEgLjE0IDIuMkwxNi43OSAxNSIvPjxwYXRoIGQ9Ik0xMSAxMiA1LjEyIDIuMiIvPjxwYXRoIGQ9Im0xMyAxMiA1Ljg4LTkuOCIvPjxwYXRoIGQ9Ik04IDdoOCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTciIHI9IjUiLz48cGF0aCBkPSJNMTIgMTh2LTJoLS41Ii8+PC9zdmc+"
                alt="EEMAX Right"
                width={90}
                height={90}
                className="rotate-[25deg] hidden sm:block"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
