"use client";

export default function EemaxWinner2024() {
  const awards = [
    {
      category: "B2B Exhibition of the Year",
      agency: "Laqshya Live Experiences",
      event: "AD Design Show 2023",
      medal: "Gold",
    },
    {
      category: "B2B Exhibition of the Year",
      agency: "Collective Heads Experiential Mkt. Solutions",
      event: "GSK Dermacon 2024 (Skin in the Game)",
      medal: "Silver",
    },
    {
      category: "B2B Exhibition of the Year",
      agency: "Rock Castle Entertainment",
      event: "TRIDENT BHARAT TEX PAVILION 2024",
      medal: "Bronze",
    },
    {
      category: "B2C exhibition of the Year",
      agency: "Celebrations Live",
      event: "Krushi Odisha 2024",
      medal: "Gold",
    },
    {
      category: "B2C exhibition of the Year",
      agency: "Gobananas",
      event: "Golympic",
      medal: "Silver",
    },
    {
      category: "B2C exhibition of the Year",
      agency: "Tessarakt Experiential",
      event: "The Arena at Comic Con India 2024",
      medal: "Bronze",
    },
    {
      category: "Celebratory Event of the Year",
      agency: "Phase 1 Events And Entertainment",
      event: "TITAN GLAM",
      medal: "Silver",
    },
    {
      category: "Celebratory Event of the Year",
      agency: "Hyperlink Brand Solutions",
      event: "Aditya Birla Group Awards",
      medal: "Bronze",
    },
    {
      category: "Celebratory Event of the Year",
      agency: "Beep Experience Management",
      event: "Dream Drive",
      medal: "Gold",
    },
    {
      category: "Complete Wedding of the Year (Outside India)",
      agency: "Touchwood Entertainment",
      event: "Taking the Plunge",
      medal: "Gold",
    },
    {
      category: "Complete Wedding of the Year (Outside India)",
      agency: "Ten Events And Entertainment",
      event: "Piyush & Shailja Wedding",
      medal: "Silver",
    },
    {
      category: "Complete Wedding of the Year (Outside India)",
      agency: "Signature Events",
      event: "Wedding of Rishab & Vidhi at Fairmont Bab Al Bahr, Abu Dhabi",
      medal: "Bronze",
    },
    {
      category: "Complete Wedding of the Year (Within India)",
      agency: "Mapsor Experiential Wedding",
      event: "Amisha Vikash",
      medal: "Gold",
    },
    {
      category: "Complete Wedding of the Year (Within India)",
      agency: "Ten Events And Entertainment",
      event: "Vineet & Riya Wedding",
      medal: "Silver",
    },
    {
      category: "Complete Wedding of the Year (Within India)",
      agency: "Touchwood Entertainment",
      event: "A tale of two cities",
      medal: "Bronze",
    },
    {
      category: "CSR Event of the year",
      agency: "Inextis Events",
      event: "Open for the Planet Clean-a-thon",
      medal: "Gold",
    },
    {
      category: "CSR Event of the year",
      agency: "Events U Rox",
      event: "Flash@Brigade",
      medal: "Silver",
    },
    {
      category: "CSR Event of the year",
      agency: "Prelude Novel Ventures",
      event: "Sabuja Phada",
      medal: "Bronze",
    },
    {
      category: "Debut IP of the Year",
      agency: "Rashi Entertainment",
      event: "Planet Voices: Uniting Voices, Inspiring Changes with Ricky Kej",
      medal: "Bronze",
    },
    {
      category: "Debut IP of the Year",
      agency: "The Silly Fellows",
      event: "The Real Van Gogh Immersive Experience",
      medal: "Gold",
    },
    {
      category: "Debut IP of the Year",
      agency: "Cedar Retail",
      event: "HARFEST",
      medal: "Silver",
    },
    {
      category: "Employee Engagement Event of the Year",
      agency: "Hyperlink Brand Solutions",
      event: "6th ABG GLOBAL HR SUMMIT 2023",
      medal: "Gold",
    },
    {
      category: "Employee Engagement Event of the Year",
      agency: "Stch Integrated Marketing Solution",
      event: "PepsiCo Beverage Conference 2024",
      medal: "Silver",
    },
    {
      category: "Employee Engagement Event of the Year",
      agency: "Acme Experience Marketing",
      event: "BBD",
      medal: "Bronze",
    },
    {
      category: "Excellence in Consumer Activation Campaign",
      agency: "The Silly Fellows",
      event: "The Real Van Gough Immersive Experience",
      medal: "Gold",
    },
    {
      category: "Excellence in Consumer Activation Campaign",
      agency: "Hyperlink Brand Solutions",
      event: "BAFTA Breakthrough India 2023",
      medal: "Silver",
    },
    {
      category: "Excellence in Consumer Activation Campaign",
      agency: "Innocean Worldwide Communication",
      event: "Hyundai CRETA First 4D Billboard Activation",
      medal: "Bronze",
    },
    {
      category: "Excellence in Infuencer Marketing Campaign",
      agency: "Inextis Events",
      event: "Creators United 2.0",
      medal: "Gold",
    },
    {
      category: "Excellence in Infuencer Marketing Campaign",
      agency: "Laqshya Live Experiences",
      event: "Meta Threadathon",
      medal: "Silver",
    },
    {
      category: "Excellence in Infuencer Marketing Campaign",
      agency: "Tessarakt Experiental",
      event: "Blend Bazaar 2023",
      medal: "Bronze",
    },
    {
      category: "Excellence in Integrated Marketing Campaign",
      agency: "The Silly Fellows",
      event: "The Real Van Gogh Immersive Experience",
      medal: "Gold",
    },
    {
      category: "Excellence in Integrated Marketing Campaign",
      agency: "Laqshya Live Experiences",
      event: "Tata Tea Preminum",
      medal: "Gold",
    },
    {
      category: "Excellence in Integrated Marketing Campaign",
      agency: "Hyperlink Brand Solutions",
      event: "Mahindra Percussion Festival",
      medal: "Silver",
    },
    {
      category: "Excellence in Integrated Marketing Campaign",
      agency: "Deepali Designs & Exhibits",
      event: "Khelo India Para Games 2023",
      medal: "Bronze",
    },
    {
      category: "Excellence in Luxury Brand Activation",
      agency: "Swordfish Events And Entertainment",
      event: "Johnnie Walker Air Ink Launch",
      medal: "Gold",
    },
    {
      category: "Excellence in Luxury Brand Activation",
      agency: "Laqshya Live Experiences",
      event: "AD Design Show 2023",
      medal: "Silver",
    },
    {
      category: "Excellence in Luxury Brand Activation",
      agency: "Vibgyor Brand Services",
      event: "CARTIER's Enchanting Etoile CHRISTMAS TREE",
      medal: "Bronze",
    },
    ,
    {
      category: "Excellence in Mall Activation",
      agency: "Moms Outdoor Media Solution",
      event: "Archies X Starbucks",
      medal: "Gold",
    },
    {
      category: "Excellence in Mall Activation",
      agency: "Laqshya Live Experiences",
      event: "Tata Tea Premium",
      medal: "Silver",
    },
    {
      category: "Excellence in Road Show Activation",
      agency: "Aura Integrated Solutions",
      event: "AL Station Drive Flag Off",
      medal: "Gold",
    },
    {
      category: "Excellence in Road Show Activation",
      agency: "Seventhavenue Eventz",
      event: "Startup Odisha Yatra 2023 & Startup Odisha Xpress 2023",
      medal: "Silver",
    },
    {
      category: "Excellence in Road Show Activation",
      agency: "Inextis Events",
      event: "Open for the Planet Clean-a-thon",
      medal: "Bronze",
    },
    {
      category: "Excellence in Rural Activation",
      agency: "Moms Outdoor Media Solution",
      event: "ITC Manoranjan Ka Pitara",
      medal: "Gold",
    },
    {
      category: "Excellence in Rural Activation",
      agency: "Straight Line Solutions",
      event: "Gas-o-Fast Mirchi Para Football",
      medal: "Silver",
    },
    {
      category: "Excellence in Rural Activation",
      agency: "Moms Outdoor Media Solution",
      event: "Mission Millet: Shree Anna ki lehar",
      medal: "Bronze",
    },
    {
      category: "Excellence in use of technology in a wedding",
      agency: "Impressive Events Hub",
      event: "Wedding Reception of Shrikant Modi & Vedika Shridhar",
      medal: "Gold",
    },
    {
      category: "Excellence in use of technology in a wedding",
      agency: "Touchwood Entertainment",
      event: "Cyberdome Project",
      medal: "Silver",
    },
    {
      category: "Excellence in use of technology in a wedding",
      agency: "Mapsor Experiential Wedding",
      event: "Chichen Itza Varmala",
      medal: "Bronze",
    },
    {
      category: "Excellence in Wedding Décor",
      agency: "Touchwood Entertainment",
      event: "Art of Arrangement",
      medal: "Gold",
    },
    {
      category: "Excellence in Wedding Décor",
      agency: "E Factor Experiences",
      event: "Citadel OMG",
      medal: "Silver",
    },
    {
      category: "Excellence in Wedding Décor",
      agency: "Sumanglam Weddings And Events",
      event: "Earthy Elegance - A sustainable wedding celebration",
      medal: "Bronze",
    },
    {
      category: "Excellence in Wedding Entertainment",
      agency: "Touchwood Entertainment",
      event: "A Star Studded Night",
      medal: "Gold",
    },
    {
      category: "Excellence in Wedding Entertainment",
      agency: "E Factor Experiences",
      event: "Citadel OMG",
      medal: "Silver",
    },
    {
      category: "Excellence in Wedding Entertainment",
      agency: "Ten Events And Entertainment",
      event: "Vineet & Riya Wedding Entertainment",
      medal: "Bronze",
    },
    {
      category: "Excellence in Youth Activation",
      agency: "The Silly Fellows",
      event: "Under 25 Campus Summit",
      medal: "Gold",
    },
    {
      category: "Excellence in Youth Activation",
      agency: "Tessarakt Experiential",
      event: "The Arena at Comic Con India 2024",
      medal: "Silver",
    },
    {
      category: "Excellence in Youth Activation",
      agency: "Krayons Entertainment",
      event: "Classmate Allrounder",
      medal: "Bronze",
    },
    {
      category: "Festival of the Year (Art / Culture / Food)",
      agency: "Kommune Arts",
      event: "SpokenFest",
      medal: "Bronze",
    },
    {
      category: "Festival of the Year (Art / Culture / Food)",
      agency: "Swordfish Events And Entertainment",
      event: "Echoes of Earth",
      medal: "Gold",
    },
    {
      category: "Festival of the Year (Art / Culture / Food)",
      agency: "Eva Live",
      event: "Windmill Festival",
      medal: "Silver",
    },
    {
      category: "Government Event of the Year- Large (above 5K pax)",
      agency: "Gobananas",
      event: "37th National Games Goa",
      medal: "Bronze",
    },
    {
      category: "Government Event of the Year - Large (above 5K pax)",
      agency: "Renaissance",
      event: "Khelo India Youth Games 2023",
      medal: "Gold",
    },
    {
      category: "Government Event of the Year - Large (above 5K pax)",
      agency: "E Factor Experiences",
      event: "Eco Retreat, Konark",
      medal: "Silver",
    },
    {
      category: "Government Event of the Year - Small (below 5K pax)",
      agency: "Evoke Media",
      event: "G20 Summit 2023",
      medal: "Bronze",
    },
    {
      category: "Government Event of the Year - Small (below 5K pax)",
      agency: "E Factor Experiences",
      event:
        "The Echoes of Time: Celebrating 125 Years of Western Railway Headquarters, Churchgate, Mumbai",
      medal: "Gold",
    },
    {
      category: "Government Event of the Year - Small (below 5K pax)",
      agency: "Aura Integrated Solutions",
      event: "G20 Young Entrepreneurs Alliance Summit 2023",
      medal: "Silver",
    },
    {
      category: "Hybrid Event of the Year - Offline + Online",
      agency: "Gobananas",
      event: "Modhera",
      medal: "Gold",
    },
    {
      category: "Hybrid Event of the Year - Offline + Online",
      agency: "Tessarakt Experiential",
      event: "Convergence 2023 by RIOT Games & The Esports Club",
      medal: "Silver",
    },
    {
      category: "Hybrid Event of the Year - Offline + Online",
      agency: "Inextis Events",
      event: "Creators United 2.0",
      medal: "Bronze",
    },
    {
      category: "Installation/ Government Show of the Year",
      agency: "Impressive Events Hub",
      event: "G-20 Cultural Night, Amer Fort",
      medal: "Bronze",
    },
    {
      category: "Installation/ Government Show of the Year",
      agency: "E Factor Experiences",
      event: "Golconda Light and Sound Multimedia Show",
      medal: "Gold",
    },
    {
      category: "Installation/ Government Show of the Year",
      agency: "C S Direkt Events & Exhibitions",
      event: "Sound and Light show at Pradhanmantri Sanghralaya",
      medal: "Silver",
    },
    {
      category: "Longstanding IP of the Year",
      agency: "Aura Integrated Solutions",
      event: "Entrepreneur's Organisation RIE JUMP",
      medal: "Bronze",
    },
    {
      category: "Longstanding IP of the Year",
      agency: "Hyperlink Brand Solutions",
      event: "Mahindra Blues Festival",
      medal: "Gold",
    },
    {
      category: "Longstanding IP of the Year",
      agency: "Swordfish Events And Entertainment",
      event: "Echoes of Earth",
      medal: "Silver",
    },
    {
      category: "MICE Event of the Year (Outside India)",
      agency: "Inextis Events",
      event: "Agthia Townhall 2023",
      medal: "Bronze",
    },
    {
      category: "MICE Event of the Year (Outside India)",
      agency: "Phase 1 Events And Entertainment",
      event: "TITAN GLAM",
      medal: "Gold",
    },
    {
      category: "MICE Event of the Year (Outside India)",
      agency: "Aura Integrated Solutions",
      event: "YPO Retreat",
      medal: "Silver",
    },
    {
      category: "MICE Event of the Year (Within India)",
      agency: "Moksh Events",
      event: "UDAAN- JOURNEY TO 100+",
      medal: "Bronze",
    },
    {
      category: "MICE Event of the Year (Within India)",
      agency: "Buxus Media",
      event: "TVS South Chapter Ride 2023",
      medal: "Gold",
    },
    {
      category: "MICE Event of the Year (Within India)",
      agency: "Evoke Media",
      event: "Tamil Nadu Global Investors Meet 2024",
      medal: "Silver",
    },
    {
      category: "Music Event of the Year",
      agency: "Teamwork Arts",
      event: "Mahindra Kabira Festival",
      medal: "Bronze",
    },
    {
      category: "Music Event of the Year",
      agency: "Swordfish Events And Entertainment",
      event: "Echoes of Earth",
      medal: "Gold",
    },
    {
      category: "Music Event of the Year",
      agency: "Hyperlink Brand Solutions",
      event: "Mahindra Blues Festival",
      medal: "Silver",
    },
    {
      category: "PR / Media Event of the Year",
      agency: "Hyperlink Brand Solutions",
      event: "WhatsApp Privacy Initiative",
      medal: "Gold",
    },
    {
      category: "PR / Media Event of the Year",
      agency: "Trinity Entertainment And Strategic Consultants",
      event: "Nykaaland",
      medal: "Silver",
    },
    {
      category: "PR / Media Event of the Year",
      agency: "Swordfish Events And Entertainment",
      event: "Johnnie Walker Air Ink Launch",
      medal: "Bronze",
    },
    {
      category: "Product Launch/Re-launch Event of the Year",
      agency: "Moms Outdoor Media Solution",
      event: "The Historic Launch!",
      medal: "Gold",
    },
    {
      category: "Product Launch/Re-launch Event of the Year",
      agency: "Swordfish Events And Entertainment",
      event: "OLA S1 Air Launch",
      medal: "Silver",
    },
    {
      category: "Product Launch/Re-launch Event of the Year",
      agency: "Ink In Caps",
      event: "P&G India Pampers Anamorphic Product Launch",
      medal: "Bronze",
    },
    {
      category: "Professional Association Event of the Year",
      agency: "Inextis Events",
      event: "Creators United 2.0",
      medal: "Gold",
    },
    {
      category: "Professional Association Event of the Year",
      agency: "Hyperlink Brand Solutions",
      event: "Goafest 2023",
      medal: "Silver",
    },
    {
      category: "Professional Association Event of the Year",
      agency: "Phase 1 Events And Entertainment",
      event: "GAFX",
      medal: "Bronze",
    },
    {
      category: "Reception Ceremony of the Year",
      agency: "Impressive Events Hub",
      event: "Wedding Reception of Shrikant Modi & Vedika Shridhar",
      medal: "Gold",
    },
    {
      category: "Reception Ceremony of the Year",
      agency: "Pink Pagdi",
      event: "Farha Kudari",
      medal: "Silver",
    },
    {
      category: "Reception Ceremony of the Year",
      agency: "Akarshana Events & Entertainment",
      event: "Reception Ceremony of the Year",
      medal: "Bronze",
    },
    {
      category: "Sangeet of the Year",
      agency: "Ten Events And Entertainment",
      event: "Vineet & Riya Sangeet",
      medal: "Gold",
    },
    {
      category: "Sangeet of the Year",
      agency: "Wedding Factory",
      event: "#ModiMangeMore",
      medal: "Gold",
    },
    {
      category: "Sangeet of the Year",
      agency: "E Factor Experiences",
      event: "Citadel OMG",
      medal: "Silver",
    },
    {
      category: "Sangeet of the Year",
      agency: "Touchwood Entertainment",
      event: "Lakeside Revelry",
      medal: "Bronze",
    },
    {
      category: "Signature Event of the Year",
      agency: "E Factor Experiences",
      event: "Ekamra Utsav",
      medal: "Gold",
    },
    {
      category: "Signature Event of the Year",
      agency: "The Silly Fellows",
      event: "The Real Van Gogh Immersive Experience",
      medal: "Gold",
    },
    {
      category: "Signature Event of the Year",
      agency: "Rashi Entertainment",
      event: "Tihar Tunes: Diwali with Tihar Inmates",
      medal: "Silver",
    },
    {
      category: "Signature Event of the Year",
      agency: "Swordfish Events And Entertainment",
      event: "Echoes of Earth",
      medal: "Bronze",
    },
    {
      category: "Social Celebration of the Year",
      agency: "Vg Design",
      event: "VG DESIGN",
      medal: "Gold",
    },
    {
      category: "Social Celebration of the Year",
      agency: "Tessarakt Experiential",
      event: "S8UL Gaming Festival 2023",
      medal: "Silver",
    },
    {
      category: "Social Celebration of the Year",
      agency: "Touchwood Entertainment",
      event: "Jeevan Utsav",
      medal: "Silver",
    },
    {
      category: "Social Celebration of the Year",
      agency: "Mapsor Experiential Wedding",
      event: "50th Anniversary",
      medal: "Bronze",
    },
    {
      category: "Sports Event of the Year",
      agency: "Deepali Designs & Exhibits",
      event: "Honslon Ki Udaan, Khelo India Para Games 2023",
      medal: "Gold",
    },
    {
      category: "Sports Event of the Year",
      agency: "Buxus Media",
      event: "TVS OMC 2023",
      medal: "Silver",
    },
    {
      category: "Sports Event of the Year",
      agency: "Impressive Events Hub",
      event: "Rajiv Gandhi Grameen & Shahari Olympic Games - 2023",
      medal: "Silver",
    },
    {
      category: "Sports Event of the Year",
      agency: "Gobananas",
      event: "37th National Games of Goa",
      medal: "Bronze",
    },
    {
      category: "Sustainability in Exhibition Design",
      agency: "Evoke Media",
      event: "Tamil Nadu Climate Summit 2.0",
      medal: "Silver",
    },
    {
      category: "Sustainable Corporate Event of the Year",
      agency: "Hello Experiences",
      event: "WILDLIFE TOURISM CONCLAVE & AWARDS 2024",
      medal: "Silver",
    },
    {
      category: "Sustainable Corporate Event of the Year",
      agency: "Rashi Entertainment",
      event:
        "Planet Voices: Uniting Voices, Inspiring Change with Dell Technologies and Mercedes-Benz",
      medal: "Bronze",
    },
    {
      category: "Sustainable Corporate Event of the Year",
      agency: "Inextis Events",
      event: "Open for the Planet Clean-a-thon",
      medal: "Gold",
    },
    {
      category: "Sustainable Wedding of the Year",
      agency: "Mapsor Experiential Wedding",
      event: "Amisha Vikash",
      medal: "Gold",
    },
    {
      category: "Sustainable Wedding of the Year",
      agency: "Wedding Factory",
      event: "#VinForSur",
      medal: "Silver",
    },
    {
      category: "Sustainable Wedding of the Year",
      agency: "Creative Witty",
      event: "KAUTUKKI ALEAXANDER",
      medal: "Bronze",
    },
    {
      category: "Trade/Channel Event of the Year",
      agency: "Beep Experience Management",
      event: "Dream Drive",
      medal: "Gold",
    },
    {
      category: "Trade/Channel Event of the Year",
      agency: "All That Jazz Events & Organisation",
      event: "AP - SPA - Paris",
      medal: "Silver",
    },
    {
      category: "Trade/Channel Event of the Year",
      agency: "Inextis Events",
      event: "Creators United 2.0",
      medal: "Bronze",
    },
  ];

  return (
    <div className=" overflow-hidden px-4 py-11 ">
      <h2 className=" tracking-tight font-bold text-3xl md:text-4xl text-center mb-11 ">
        Winner 2023/2024
      </h2>
      <div className="overflow-x-auto bg-orange-200 rounded-xl p-4">
        <table className="min-w-full text-left text-sm text-black border-collapse">
          <thead>
            <tr className="bg-orange-300 font-bold">
              <th className="px-4 py-2 border border-orange-400">Category</th>
              <th className="px-4 py-2 border border-orange-400">
                Agency Name
              </th>
              <th className="px-4 py-2 border border-orange-400">
                Name of the Event
              </th>
              <th className="px-4 py-2 border border-orange-400">Medal</th>
            </tr>
          </thead>
          <tbody>
            {awards.map((item, index) => (
              <tr key={index} className="even:bg-orange-100">
                <td className="px-4 py-2 border border-orange-300">
                  {item.category}
                </td>
                <td className="px-4 py-2 border border-orange-300">
                  {item.agency}
                </td>
                <td className="px-4 py-2 border border-orange-300">
                  {item.event}
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
  );
}
