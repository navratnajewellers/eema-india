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
      category: "Complete Wedding of the Year (Within India)",
      agency: "Ten Events And Entertainment",
      event: "Vineet & Riya Wedding",
      medal: "Silver",
    },
    {
      category: "Complete Wedding of the Year (Within India)",
      agency: "Ten Events And Entertainment",
      event: "Vineet & Riya Wedding",
      medal: "Silver",
    },
    {
      category: "Complete Wedding of the Year (Within India)",
      agency: "Ten Events And Entertainment",
      event: "Vineet & Riya Wedding",
      medal: "Silver",
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
