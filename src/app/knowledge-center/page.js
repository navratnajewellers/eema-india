"use client";

import Image from "next/image";

export default function KnowledgeCenterPage() {
  const categories = [
    { title: "MOM - NEC", href: "/knowledge-center/mom-nec" },
    { title: "Newsletter", href: "/knowledge-center/newsletter" },
    { title: "White Papers", href: "/knowledge-center/white-papers" },
    { title: "Value Addition – Tie-ups", href: "/knowledge-center/tieups" },
    { title: "Events", href: "/knowledge-center/events" },
  ];

  const resources = [
    {
      title: "Newsletter",
      description: "Stay updated with our latest newsletters and insights.",
      image:
        "https://images.pexels.com/photos/7213105/pexels-photo-7213105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/knowledge-center/newsletter",
    },
    {
      title: "MOM - NEC",
      description: "Minutes of Meeting from NEC for full transparency.",
      image:
        "https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/knowledge-center/mom",
    },
    {
      title: "Whitepapers",
      description: "Explore expert research, whitepapers, and deep dives.",
      image:
        "https://images.pexels.com/photos/7735721/pexels-photo-7735721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/knowledge-center/industry-whitepaper",
    },
    {
      title: "Value Added Tie-Ups",
      description: "Explore valuable partnerships and strategic tie-ups.",
      image:
        "https://images.pexels.com/photos/8439749/pexels-photo-8439749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/knowledge-center/value-added-tieups",
    },
    {
      title: "Events",
      description: "Explore Event from Zonal to National.",
      image: "/images/knowledge-center/knowledge-center-event-banner.jpg",
      link: "/knowledge-center/events",
    },
  ];

  return (
    <>
      <main className=" py-20 text-black ">
        <section className=" space-y-6 mb-16 ">
          <h1 className="text-3xl font-bold text-center w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 ">
            EEMA Knowledge Center
          </h1>
          <p className="text-center text-gray-600">
            Explore structured knowledge resources from EEMA — categorized into
            MOMs, Newsletters, White Papers, and more.
          </p>
        </section>

        <section className="h-screen w-full flex flex-col items-center justify-center text-black">
          <div className="flex flex-col sm:flex-row w-full h-full">
            {resources.map((res, idx) => (
              <a
                href={res.link}
                key={idx}
                className="group relative flex-1 transition-all duration-500 ease-in-out overflow-hidden hover:flex-[2]"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={res.image}
                    alt={res.title}
                    fill
                    className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/40 backdrop-blur-xs group-hover:backdrop-blur-sm text-center px-6">
                  <h2 className="text-3xl font-semibold mb-2 group-hover:text-orange-400">
                    {res.title}
                  </h2>
                  <p className="text-base opacity-80 group-hover:opacity-100">
                    {res.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
