import { Image } from "rsuite";

const data = [
  {
    segment: "Entertainment",
    name: "Best Live Performer",
    definition:
      "Recognizing exceptional talent, creativity, and mastery in live performances that captivate, inspire, and elevate the art of entertainment across various disciplines.",
  },
  {
    segment: "Entertainment",
    name: "Best Music Band",
    definition:
      "Recognizing outstanding musical talent, synergy, and stage presence in delivering powerful performances that captivate audiences and create unforgettable experiences",
  },
  {
    segment: "Entertainment",
    name: "Best Lawazma Band",
    definition:
      "Recognizing the Lawazma Band for musical coordination, synergy, and stage presence in delivering engaging performances and memorable experiences.",
  },
  {
    segment: "Entertainment",
    name: "Best Emcee (FEMALE)",
    definition:
      "Recognizing outstanding presence, charisma, and skill in hosting and engaging audiences, excelling in creating memorable, dynamic, and seamless experiences across events",
  },
  {
    segment: "Entertainment",
    name: "Best Emcee (MALE)",
    definition:
      "Recognizing outstanding presence, charisma, and skill in hosting and engaging audiences, excelling in creating memorable, dynamic, and seamless experiences across events",
  },
  {
    segment: "Entertainment",
    name: "Best Dance Choreographer",
    definition:
      "Recognizing creativity and skill in creating captivating dance routines that inspire and engage audiences",
  },
  {
    segment: "Entertainment",
    name: "Best DJ",
    definition:
      "Recognizing talent and creativity in curating and mixing music that energizes and connects with the audience, creating unforgettable experiences on the dance floor",
  },
  {
    segment: "Entertainment",
    name: "Best Dance Team",
    definition:
      "Recognizing exceptional talent, synchronization, and creativity in delivering captivating performances that inspire and entertain audiences.",
  },
  {
    segment: "Entertainment",
    name: "Best Team Building Emcee",
    definition:
      "Recognizing exceptional skill in leading and energizing team-building events, fostering engagement, collaboration, and a positive atmosphere to create memorable and impactful experiences",
  },
  {
    segment: "Entertainment",
    name: "Best Team Building Company",
    definition:
      "Recognizing expertise in organizing and facilitating team-building events that foster engagement, collaboration, and a positive atmosphere to create meaningful experiences.",
  },
  {
    segment: "Entertainment",
    name: "Best Standup Comic Act",
    definition:
      "Recognizing excellence in comedy through engaging performances that entertain audiences, create laughter, and leave a lasting impact.",
  },
  {
    segment: "Corporate Events",
    name: "Best Hotel - Corporate Events (five star)",
    definition:
      "Recognizing excellence in five star hotels that offer exceptional venues, services, and amenities for hosting corporate events, meetings, and conferences.",
  },
  {
    segment: "Corporate Events",
    name: "Best Hotel - Corporate Events (non five star)",
    definition:
      "Recognizing outstanding hotels in the non-five star category that provide exceptional facilities, service, and ambiance for corporate events and meetings.",
  },
  {
    segment: "Corporate Events",
    name: "Best Corporate Gifting Company",
    definition:
      "Recognizing a gifting company that excels in curating high-quality, thoughtful corporate gifts that enhance brand relationships and create lasting impressions.",
  },
  {
    segment: "Corporate Events",
    name: "Best Use of Technology - Corporate Events",
    definition:
      "Recognizing exceptional integration and application of technology in corporate events or projects, enhancing efficiency, engagement, and overall impact.",
  },
  {
    segment: "Corporate Events",
    name: "Best Production House - Corporate Events",
    definition:
      "Recognizing a production house that excels in delivering high-quality, creative, and impactful production services for corporate events, campaigns, and projects.",
  },
  {
    segment: "Corporate Events",
    name: "Best AV Production - Corporate Events",
    definition:
      "Recognizing excellence in audio-visual production, integrating sound, visuals, and technology to deliver seamless and engaging experiences that enhance presentations and interactions.",
  },
  {
    segment: "Corporate Events",
    name: "Best Photography - Corporate Events",
    definition:
      "Recognizing a professional photographer for exceptional skill in capturing high-quality, engaging, and memorable moments during corporate events.",
  },
  {
    segment: "Corporate Events",
    name: "Best Videography - Corporate Events",
    definition:
      "Recognizing a professional videographer for outstanding video production that effectively captures the essence of corporate events and communicates key moments",
  },
  {
    segment: "Corporate Events",
    name: "Best Catering Company - Corporate Events",
    definition:
      "Recognizing excellence in catering services, offering high-quality, diverse, and customized menu options that enhance the dining experience at corporate events.",
  },
  {
    segment: "Corporate Events",
    name: "Best SFX/Pyrotechnic Company - Corporate Events",
    definition:
      "Recognizing exceptional use of special effects and pyrotechnics to enhance the atmosphere and create unforgettable moments at corporate events.",
  },
  {
    segment: "Corporate Events",
    name: "Best Show Running Company-Corporate Events",
    definition:
      "Recognizing a show running agency for exceptional planning, coordination, and management, ensuring smooth execution and a successful experience for corporate events.",
  },
  {
    segment: "Corporate Events",
    name: "Best Registration Management Company - Corporate Events",
    definition:
      "Recognizing a registration management company for providing efficient, seamless, and innovative solutions that streamline attendee registration and enhance corporate event experiences.",
  },
  {
    segment: "Corporate Events",
    name: "Best Event Venue - Corporate Events",
    definition:
      "Recognizing outstanding event venues for corporate events that provide exceptional facilities, service, and ambiance for corporate events and meetings.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Hotel - Social Events/Wedding (five star)",
    definition:
      "Recognizing excellence in five star hotels that provide exceptional service, ambiance, and facilities for hosting social and wedding events.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Venue - Social Events/Weddings",
    definition:
      "Recognizing outstanding non-hotel venues that offer unique, versatile spaces and services for memorable social and wedding events.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Hotel - Social Events/Wedding (non five star)",
    definition:
      "Recognizing exceptional wedding venues and services in the non-five star category for providing high-quality experiences at competitive value.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Hair & Makeup Artist",
    definition:
      "Recognizing outstanding hair and makeup artists who provide exceptional styling and beauty services, creating flawless looks for the bride and guests.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Floral Design & Décor - Social Events/Weddings",
    definition:
      "Recognizing excellence in floral decoration, creating stunning and creative designs that enhance the beauty and ambiance of wedding events.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Wedding Gifting Company",
    definition:
      "Recognizing a gifting company that excels in curating high-quality, personalized wedding gifts that create lasting impressions and enhance the celebration.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Digital Invitation Company",
    definition:
      "Recognizing a digital invitation company for exceptional design and service in creating unique, innovative, and memorable digital invitations for weddings.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best AV Production - Social Events/Wedding",
    definition:
      "Recognizing excellence in audio-visual studio production for weddings, delivering exceptional sound, lighting, and visuals to create a flawless and unforgettable event experience.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Bar Management Company - Social Events/Wedding",
    definition:
      "Recognizing outstanding bar management services that provide quality beverages, professional service, and a well-organized bar experience for wedding events.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Decor & Design Company - Social Events/Weddings",
    definition:
      "Recognizing a prop decorator or shop that excels in providing creative, high-quality props and decorations that enhance the aesthetic of wedding events.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Use of Technology - Social Events/Weddings",
    definition:
      "Recognizing innovative use of technology that enhances the overall wedding experience, from live streaming to event coordination, creating a seamless and engaging atmosphere.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Production House - Social Events/Weddings",
    definition:
      "Recognizing a production house for delivering exceptional production services, including lighting, sound, and staging, to elevate the wedding experience and ensure flawless execution.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Photography - Social Events/Weddings",
    definition:
      "Recognizing exceptional photographers for capturing high-quality, timeless moments that tell the story of the wedding day.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Videography - Social Events/Weddings",
    definition:
      "Recognizing outstanding videographers for producing captivating wedding films that beautifully document key moments and emotions.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Catering Company - Social Events/Weddings",
    definition:
      "Recognizing catering services that provide exceptional food quality, presentation, and variety, enhancing the overall dining experience for wedding guests.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Experiential Food Setup",
    definition:
      "Recognizing creative food experiences like chaat stations, 24/7 lounge setups, and outdoor food bars that offer interactive, engaging culinary moments, enhancing the wedding atmosphere and making it memorable.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best SFX/Pyrotechnic Company - Social Events/Weddings",
    definition:
      "Recognizing outstanding use of special effects and pyrotechnics to create impactful, breathtaking moments and elevate the wedding experience.",
  },
  {
    segment: "Social Events/Weddings",
    name: "Best Physical Invitation Company",
    definition:
      "Recognizing a physical invitation company for exceptional design and service in creating unique, innovative, and memorable digital invitations for weddings.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best Use of Technology-Festivals/Concerts",
    definition:
      "Recognizing exceptional use of technology in concerts, enhancing sound, visuals, and overall experience through innovative and high-quality tech solutions.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best Production House-Festivals/Concerts",
    definition:
      "Recognizing a production house for delivering outstanding production services, including sound, lighting, staging, and overall event execution, ensuring a spectacular stage setup and creating an unforgettable concert experience.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best Sound Company- Festivals/Concerts",
    definition:
      "Recognizing outstanding sound design and execution, delivering powerful, immersive, and high-fidelity audio that enhances live performances.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best AV Production Company- Festivals/Concerts",
    definition:
      "Recognizing outstanding audio-visual production, combining dynamic sound, visuals, and stage effects to elevate live performances and captivate audiences.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best Lights Company- Festivals/Concerts",
    definition:
      "Recognizing excellence in lighting design and execution, enhancing the atmosphere and visual experience to elevate the energy and impact of live concert performances.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best Photography-Festivals/Concerts",
    definition:
      "Recognizing outstanding photographers who capture dynamic, high-quality images that showcase the essence and energy of a concert.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best Videography-Festivals/Concerts",
    definition:
      "Recognizing exceptional videographers for producing captivating videos that authentically document live concert moments, showcasing the performance and audience engagement.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best Catering Company-Festivals/Concerts",
    definition:
      "Recognizing catering services that provide high-quality, diverse food and beverages, enhancing the overall concert experience for attendees.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best SFX/Pyrotechnic-Festivals/Concerts",
    definition:
      "Recognizing outstanding use of special effects and pyrotechnics to create breathtaking visual moments that amplify the concert experience.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best AR/VR Technology & Content -Festivals/Concerts",
    definition:
      "Recognizing innovative use of Augmented Reality (AR) or Virtual Reality (VR) technologies that enhance audience engagement, creating immersive and interactive concert experiences",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best Show Designing & Direction Company-Festivals/Concerts",
    definition:
      "Recognizing a company that excels in the creative design and direction of concerts, delivering engaging, dynamic, and visually stunning live performances.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best Registration Management Company-Festivals/Concerts",
    definition:
      "Recognizing a registration management company for its exceptional service in streamlining attendee registration, creating a smooth and efficient experience for concertgoers.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best Security Agency-Festivals/Concerts",
    definition:
      "Recognizing a security management company that ensures the safety and well-being of attendees, staff, and performers, while maintaining a secure environment during concerts.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best Venue-Festivals/Concerts",
    definition:
      "Recognizing a concert venue for offering exceptional acoustics, facilities, and ambiance that contribute to an outstanding live music experience.",
  },
  {
    segment: "Festivals & Concerts",
    name: "Best Bar Management Company-Festivals/Concerts",
    definition:
      "Recognizing outstanding bar management services that provide quality beverages, professional service, and a well-organized bar experience for festivals and concert events.",
  },
  {
    segment: "Government Events",
    name: "Best Hotel & Convention Center-Government Events",
    definition:
      "Recognizing a hotel and convention center that provides exceptional facilities, services, and ambiance, offering the ideal setting for government events and conferences.",
  },
  {
    segment: "Government Events",
    name: "Best Catering Company-Government Events",
    definition:
      "Recognizing catering services that deliver high-quality, diverse, and tailored food offerings, ensuring a seamless dining experience at government events.",
  },
  {
    segment: "Government Events",
    name: "Best Security Management Company-Government Events",
    definition:
      "Recognizing a security management company that ensures the safety and protection of attendees, staff, and dignitaries at government events, maintaining a secure and orderly environment.",
  },
  {
    segment: "Government Events",
    name: "Best Use of Multimedia Technology-Government Events",
    definition:
      "Recognizing innovative use of multimedia technologies, such as audiovisual systems, digital displays, and interactive platforms, to enhance communication and engagement at government events.",
  },
  {
    segment: "General Categories",
    name: "Best Power distribution Company",
    definition:
      "Recognizing excellence in power distribution by companies that deliver reliable, efficient, and scalable energy solutions, ensuring uninterrupted power supply, safety compliance, and seamless integration across all event operations.",
  },
  {
    segment: "General Categories",
    name: "Best Hospitality Company",
    definition:
      "Recognizing hospitality companies that deliver reliable, efficient services, seamlessly coordinating transportation, delivery, supply chain operations, and guest management to ensure flawless execution and an outstanding experience for all event attendees.",
  },
  {
    segment: "General Categories",
    name: "Best Logistics Company",
    definition:
      "Recognizing outstanding logistics companies that excel in providing reliable, efficient, and timely services, ensuring smooth coordination and flawless execution of events",
  },
  {
    segment: "General Categories",
    name: "Best Sound Company",
    definition:
      "Recognizing excellence in sound design and execution, ensuring clear, professional, and high-quality audio that enhances presentations and engagements.",
  },
  {
    segment: "General Categories",
    name: "Best Light Company",
    definition:
      "Recognizing excellence in lighting design and execution, creating impactful and dynamic lighting that enhances the ambiance and experience of corporate events.",
  },
  {
    segment: "General Categories",
    name: "Best Lighting and trussing company",
    definition:
      "Recognizing outstanding lighting and trussing companies that excel in delivering innovative, reliable, and visually impactful solutions, ensuring dynamic lighting design, sturdy rigging, and immersive visual experiences for every event.",
  },
  {
    segment: "General Categories",
    name: "Best Rigging Company",
    definition:
      "Recognizing outstanding rigging companies that excel in delivering safe, precise, and expertly engineered rigging solutions, ensuring secure installations, structural integrity, and flawless execution for events of all scales.",
  },
  {
    segment: "General Categories",
    name: "Best Venue Construct Company",
    definition:
      "Recognizing outstanding venue construct companies that excel in designing and building versatile, functional, and visually compelling event spaces, ensuring solid infrastructure, timely execution, and seamless adaptability to any event concept.",
  },
  {
    segment: "General Categories",
    name: "Best Health and Safety Company",
    definition:
      "Recognizing outstanding health and safety companies that excel in implementing comprehensive, compliant, and proactive safety solutions, ensuring risk-free environments, regulatory adherence, and the well-being of all stakeholders at every event.",
  },
];

export default function SpotlightAwardsCategoriesPage() {
  const grouped = data.reduce((acc, item) => {
    if (!acc[item.segment]) acc[item.segment] = [];
    acc[item.segment].push(item);
    return acc;
  }, {});

  return (
    <div>
      <Image
        src="https://www.eemaindia.com/spotlightaward/assets/images/Categories%20(2).jpg"
        alt="spotlight-awards-categories"
      />

      <main className="p-6 md:p-11 mt-7">
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
    </div>
  );
}
