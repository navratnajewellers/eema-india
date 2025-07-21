/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function SaHomeWinner() {
  const carouselRef = useRef(null);

  const scroll = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const winners = [
    {
      year: "2025",
      title: "Best AV Production - Corporate Events",
      winner: "Tagglabs Experiential Private Limited",
      image:
        "https://www.eemaindia.com/spotlightaward/assets/images/winner-2025.jpg",
    },
    {
      year: "2024",
      title: "Best Hotel for Social Events/Wedding Events",
      winner: "Radisson Blu GRT Chennai",
      image:
        "https://www.eemaindia.com/spotlightaward/assets/images/Winners%202024.jpg",
    },
    {
      year: "2025",
      title: "Best Hotel - Corporate Events (five star)",
      winner: "Juniper Hotels Limited",
      image:
        "https://www.eemaindia.com/spotlightaward/assets/images/winner-2025.jpg",
    },
    {
      year: "2024",
      title: "Best Artist Manager",
      winner: "Renaissance",
      image:
        "https://www.eemaindia.com/spotlightaward/assets/images/Winners%202024.jpg",
    },
    {
      year: "2025",
      title: "Best Production House - Corporate Events",
      winner: "RENAISSANCE",
      image:
        "https://www.eemaindia.com/spotlightaward/assets/images/winner-2025.jpg",
    },
    {
      year: "2024",
      title: "Best Dance Team",
      winner: "Nooper Performing art center",
      image:
        "https://www.eemaindia.com/spotlightaward/assets/images/Winners%202024.jpg",
    },
    {
      year: "2025",
      title: "Best DJ - Entertainment",
      winner: "Sumit Sethi",
      image:
        "https://www.eemaindia.com/spotlightaward/assets/images/winner-2025.jpg",
    },
    {
      year: "2024",
      title: "Best Professional Videographer",
      winner: "WEDARTISTRY",
      image:
        "https://www.eemaindia.com/spotlightaward/assets/images/Winners%202024.jpg",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Past <span className="text-yellow-600">Winners</span>
        </h2>

        <p className=" text-center leading-relaxed text-gray-500 font-medium text-lg px-7 md:px-11 mb-11  ">
          Dive into their stories of innovation, excellence, and dedication that
          have earned them this prestigious recognition.
        </p>

        <div className="relative">
          <button
            onClick={() => scroll(-300)}
            aria-label="Scroll Left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
          >
            {winners.map((winner, index) => (
              <motion.div
                key={index}
                className="min-w-[250px] bg-gray-50 shadow-md rounded-xl p-4 flex-shrink-0"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={winner.image}
                  alt={winner.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {winner.title}
                </h4>
                <p className="text-sm text-gray-600 mb-1">{winner.winner}</p>
                <span className="text-sm text-yellow-600 font-medium">
                  {winner.year}
                </span>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll(300)}
            aria-label="Scroll Right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </motion.div>

      <div className="text-center mt-16 ">
        <motion.a
          href="/spotlightaward/winners" // replace with actual form link if available
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all"
        >
          <Award className="w-5 h-5" />
          Winner List
        </motion.a>
      </div>
    </section>
  );
}
