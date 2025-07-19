import { Image } from "rsuite";

export default function SaWinner2024() {
  const awards = [
    {
      segment: "HOTELS & VENUE",
      category: "Best Hotel for Social Events/Wedding Events",
      event: "Ofhan Family wedding",
      participant: "Subhashish Gupta",
      company: "Radisson Blu GRT Chennai",
      medal: "Gold",
    },
    {
      segment: "HOTELS & VENUE",
      category: "Best Hotel for Social Events/Wedding Events",
      event: "Kevin & Neethu Wedding",
      participant: "Anjusha Raj",
      company: "Le Meridien Kochi",
      medal: "Silver",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best Artist Manager",
      event: "Poorvika founder's day",
      participant: "Ragini Muralidharan",
      company: "Renaissance",
      medal: "Gold",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best Artist Manager",
      event: "Ayushi & Preet destination wedding",
      participant: "Anila K",
      company: "WE-Talent Global",
      medal: "Silver",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best Artist Manager",
      event: "MOJO Projects",
      participant: "Vijay MP",
      company: "Silver Tree",
      medal: "Bronze",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best Dance Choreographer",
      event: "Opening Ceremony Of 44th Chess Olympiad",
      participant: "Hari Hari",
      company: "Nooper Performing art center",
      medal: "Gold",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best Dance Choreographer",
      event: "Google Annual event",
      participant: "Vasanth Kumar S M",
      company: "TeaAM5678 Dance Academy",
      medal: "Silver",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best Dance Team",
      event: "Mysore Dusserah",
      participant: "Hari Hari",
      company: "Nooper Performing art center",
      medal: "Gold",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best DJ",
      event: "Wedding & After Party",
      participant: "DJ K Lee",
      company: "DJ K Lee",
      medal: "Gold",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best DJ",
      event: "BAYWATCH 2023",
      participant: "Rishikesh S",
      company: "DJ Rishi",
      medal: "Silver",
    },
    {
      segment: "Performing artist & entertainers group	",
      category: "Best Live Performer",
      event: "Theme Launch event for ASP INDIA",
      participant: "Tejaswi Ananth",
      company: "Vividh",
      medal: "Gold",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best Live Performer",
      event:
        "( INA ) Indian Naval Academy Ezhimala Celebrating Their 12th Admiral's Cup Regatta",
      participant: "Bipasha Mitra",
      company: "SSB MUSIC PRODUCTIONS & SAMSHIVA BAND",
      medal: "Silver",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best Live Performer",
      event: "Yummy fest 2023",
      participant: "Srinivasan R",
      company: "Nivas",
      medal: "Silver",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best Live Performer",
      event: "Provident Housing Partners meet",
      participant: "Rakesh Syam",
      company: "Rakesh Syam",
      medal: "Bronze",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best MC (FEMALE)",
      event: "ABP Southern Rising 2023",
      participant: "Shilpa Menon",
      company: "Shilpa Menon",
      medal: "Gold",
    },
    {
      segment: "Performing artist & entertainers group	",
      category: "Best MC (FEMALE)",
      event: "Lactalis India Convention 2024",
      participant: "Nathasha Sam",
      company: "Nathasha Sam",
      medal: "Silver",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best MC (FEMALE)",
      event:
        "31st All India Builders Convention by BAI (Builders Association of India)",
      participant: "Anusha Varri",
      company: "Anusha Varri",
      medal: "Bronze",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best MC (MALE)",
      event: "LAGER THAN LIFE with AbInBev by EvenFlow",
      participant: "Mitin Upadhyay",
      company: "Mitin Upadhyay",
      medal: "Gold",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best MC (MALE)",
      event: "IPL - Chennai super kings",
      participant: "Arunagiri Raghu",
      company: "Mc Arun Giri",
      medal: "Silver",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best Music Band",
      event:
        "Felicitation Ceremony And Movie Launch of Oscar Winner Sir MM Keeravani",
      participant: "SAMSHIVA Band",
      company: "SAMSHIVA Band",
      medal: "Gold",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best Music Band",
      event: "Tech Fest for TechnoPark Trivandrum",
      participant: "Willington Island",
      company: "Willington Island",
      medal: "Silver",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best Team Building MC ( Female)",
      event: "Engage your Inner human",
      participant: "Maryann Manasseh",
      company: "FIREFLIES ENTERTAINMENT",
      medal: "Gold",
    },
    {
      segment: "Performing artist & entertainers group",
      category: "Best Team Building MC ( Male)",
      event: "Shuffle Showdown",
      participant: "David Clear",
      company: "San John David",
      medal: "Gold",
    },
    {
      segment: "Production and support services",
      category: "Bar Management",
      event: "#StutionRush",
      participant: "Raj Dabhi",
      company: "Shaken Hospitality",
      medal: "Gold",
    },
    {
      segment: "Production and support services	",
      category: "Best Floral Decoration",
      event: "Aayushi & Preet",
      participant: "Dilshan c.d",
      company: "Goodday Florist",
      medal: "Gold",
    },
    {
      segment: "Production and support services",
      category: "Best Floral Decoration",
      event: "THE UNIVERSAL LOVE",
      participant: "Suresh Kumar A",
      company: "The Event Today",
      medal: "Silver",
    },
    {
      segment: "Production and support services",
      category: "Best Floral Decoration",
      event: "WEDDING DECOR",
      participant: "Prashanth Agarwal",
      company: "Roshanlal Entertainment",
      medal: "Bronze",
    },
    {
      segment: "Production and support services",
      category: "Best Hospitality and Logistics Partner for Events",
      event: "Triveni Group owner's son's wedding",
      participant: "Libin Linson",
      company: "Team-L Logistics & Hospitality Management Group",
      medal: "Gold",
    },
    {
      segment: "Production and support services",
      category: "Best Technology",
      event: "Khelo India Youth Games 2023",
      participant: "Ragini Muralidharan",
      company: "Renaissance",
      medal: "Gold",
    },
    {
      segment: "Production and support services- CORPORATE",
      category: "Best AV Production",
      event: "KHELO INDIA OPENING CEREMONY 2024",
      participant: "PXL MEDIA",
      company: "PXL MEDIA",
      medal: "Gold",
    },
    {
      segment: "Production and support services- CORPORATE",
      category: "Best AV Production",
      event: "PES University Golden Jubilee Celebrations.",
      participant: "Santana Davis",
      company: "J Davis Prosound & Lighting",
      medal: "Gold",
    },
    {
      segment: "Production and support services- CORPORATE",
      category: "Best Lights",
      event: "Poorvika founder's day",
      participant: "Ragini Muralidharan",
      company: "Renaissance",
      medal: "Gold",
    },
    {
      segment: "Production and support services- CORPORATE",
      category: "Best Lights",
      event: "TVS Motosoul 3.0",
      participant: "Vinod Bangera",
      company: "Systematic INC",
      medal: "Silver",
    },
    {
      segment: "Production and support services- CORPORATE",
      category: "Best Sound",
      event: "TVS Motosoul 3.0",
      participant: "Vinod Bangera",
      company: "Systematic INC",
      medal: "Gold",
    },
    {
      segment: "Production and support services- CORPORATE",
      category: "Best Sound",
      event: "The VOC Port Foundation Stone Laying ceremony",
      participant: "Arun Ashok",
      company: "ASHOKA AVL SOLUTIONS PRIVATE LIMITED",
      medal: "Silver",
    },
    {
      segment: "Production and support services- WEDDING",
      category: "Best Catering",
      event: "WEDDING",
      participant: "PARAGON SPECIALITY CATERINGS SUMEET DEVARAJAN",
      company: "PARAGON SPECIALITY CATERINGS",
      medal: "Gold",
    },
    {
      segment: "Production and support services- WEDDING",
      category: "Best Production House",
      event: "GS wedding",
      participant: "Saiju Bhaskaran Achari",
      company: "HASTKALA",
      medal: "Gold",
    },
    {
      segment: "Production and support services- WEDDING",
      category: "Best Production House",
      event: "WEDDING PRODUCTION THEME-HUES OF IVORY & GOLD",
      participant: "Prashanth Agarwal",
      company: "Roshanlal Entertainment",
      medal: "Silver",
    },
    {
      segment: "Production and support services- WEDDING",
      category: "Best Production House",
      event: "Zaid Weds Uzma",
      participant: "Zubair Waheed",
      company: "Zzeeh Productions Private Limited",
      medal: "Bronze",
    },
    {
      segment: "Production and support services- WEDDING",
      category: "Best Professional Photographer",
      event: "Riya and Varis",
      participant: "Akbar Blurads",
      company: "Blur Weddings",
      medal: "Gold",
    },
    {
      segment: "Production and support services- WEDDING",
      category: "Best Professional Photographer",
      event: "THE UNIVERSAL LOVE",
      participant: "Suresh Kumar A",
      company: "The Photo Today Photography",
      medal: "Silver",
    },
    {
      segment: "Production and support services- WEDDING",
      category: "Best Professional Videographer",
      event: "Destination Wedding - Nishi Tarang",
      participant: "Sibin Jacko",
      company: "WEDARTISTRY",
      medal: "Gold",
    },
    {
      segment: "Production and support services- WEDDING",
      category: "Best Professional Videographer",
      event: "PORALE PONNUTHAAYI",
      participant: "Suresh Kumar A",
      company: "The Photo Today Photography",
      medal: "Silver",
    },
    {
      segment: "Production and support services- CORPORATE",
      category: "Best Production House",
      event: "Sony Family Day",
      participant: "Zubair Waheed",
      company: "Zzeeh Productions Private Limited",
      medal: "Gold",
    },
    {
      segment: "Production and support services- CORPORATE",
      category: "Best Production House",
      event: "Refresh",
      participant: "Ragini Muralidharan",
      company: "Renaissance",
      medal: "Silver",
    },
    {
      segment: "Production and support services- CORPORATE",
      category: "Best Production House",
      event: "Huddle Global 2023",
      participant: "Jis Thomas",
      company: "Eventpro Kerala",
      medal: "Bronze",
    },
  ];

  return (
    <section className=" text-black ">
      <Image
        src="https://www.eemaindia.com/spotlightaward/assets/images/Winners%202024.jpg"
        alt="spotlight awards 2024 winner banner"
      />

      <div className=" overflow-hidden px-4 py-11 ">
        <h2 className=" tracking-tight font-bold text-3xl md:text-4xl text-center mb-11 ">
          Spotlight Awards
        </h2>
        <div className="overflow-x-auto bg-orange-200 rounded-xl p-4">
          <table className="min-w-full text-left text-sm text-black border-collapse">
            <thead>
              <tr className="bg-orange-300 font-bold">
                <th className="px-4 py-2 border border-orange-400">Segment</th>
                <th className="px-4 py-2 border border-orange-400">Category</th>
                <th className="px-4 py-2 border border-orange-400">
                  Event/ Campaign Name
                </th>
                <th className="px-4 py-2 border border-orange-400">
                  Participant Name
                </th>
                <th className="px-4 py-2 border border-orange-400">
                  Company Name
                </th>
                <th className="px-4 py-2 border border-orange-400">Medal</th>
              </tr>
            </thead>
            <tbody>
              {awards.map((item, index) => (
                <tr key={index} className="even:bg-orange-100">
                  <td className="px-4 py-2 border border-orange-300">
                    {item.segment}
                  </td>
                  <td className="px-4 py-2 border border-orange-300">
                    {item.category}
                  </td>
                  <td className="px-4 py-2 border border-orange-300">
                    {item.event}
                  </td>
                  <td className="px-4 py-2 border border-orange-300">
                    {item.participant}
                  </td>
                  <td className="px-4 py-2 border border-orange-300">
                    {item.company}
                  </td>
                  <td className="px-4 py-2 border border-orange-300">
                    {item.medal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
