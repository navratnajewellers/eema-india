import { useState } from "react";

const videos = [
  {
    url: "https://www.youtube.com/embed/nIArLzPk_jI",
    title: "EEMAGINE 2025 DAY 1 Highlight",
  },
  {
    url: "https://www.youtube.com/embed/DwwNrijvnYU",
    title: "EEMAGINE 2025 DAY 2 Highlight",
  },
  {
    url: "https://www.youtube.com/embed/Ml1SIWG95qY",
    title: "EEMAGINE 2025 DAY 3 Highlight",
  },
  {
    url: "https://www.youtube.com/embed/G5oU0amDLJU",
    title: "EEMAGINE 2025 Drone",
  },
  {
    url: "https://www.youtube.com/embed/MxzA3GvxQM4",
    title: "COREA 3.0",
  },
  {
    url: "https://www.youtube.com/embed/6cTXKJZocsY",
    title: "Spotlight 2025",
  },
  {
    url: "https://www.youtube.com/embed/6wBbjhk2Ncw",
    title: "East Conclave 2025 - Day 1",
  },
  {
    url: "https://www.youtube.com/embed/boLRF2JHeUU",
    title: "East Conclave 2025 - Day 2",
  },
  {
    url: "https://www.youtube.com/embed/XI3XDzxUSlQ",
    title: "EEMAGINE 2024",
  },
  {
    url: "https://www.youtube.com/embed/1EUGixN5XEg",
    title: "EEMAGINE 2024 Day 1",
  },
  {
    url: "https://www.youtube.com/embed/DxeFK0ARXw8",
    title: "EEMAGINE 2024 Day 2",
  },
  {
    url: "https://www.youtube.com/embed/5ZeLE2LJdS0",
    title: "EEMAGINE 2024 Day 3",
  },
  {
    url: "https://www.youtube.com/embed/0cVNnjPUt5g",
    title: "EEMAGINE 2023",
  },
  {
    url: "https://www.youtube.com/embed/Gm5ekx35QnY",
    title: "Meet us at #EEMAgine2018 | Gitikka Ganju Dhar",
  },
  {
    url: "https://www.youtube.com/embed/-7ocYi4eR1o",
    title: "Special Coverage Of EEMAGINE 2019 ",
  },
  {
    url: "https://www.youtube.com/embed/GfVd9XIYs9Q",
    title: "This is how the journey to #EEMAgine2018 started !!!",
  },
  {
    url: "https://www.youtube.com/embed/9g573n1EbVw",
    title: "EEMAGINE 2019 Inaugural Ceremony Part-3",
  },
  {
    url: "https://www.youtube.com/embed/JYCGRfOPXMw",
    title: "It's Polo Time at #EEMAgine2018!!!",
  },
  {
    url: "https://www.youtube.com/embed/Ibcnm2Mob-0",
    title: "EEMAGINE 2019 Inaugural Ceremony Part-2",
  },
  {
    url: "https://www.youtube.com/embed/1LjjgN8P0Ro",
    title: "Meet us at #EEMAgine2018 | Madeep Singh",
  },
  {
    url: "https://www.youtube.com/embed/nKOpt0LoHG8",
    title: "EEMAGINE 2019 Inaugural Ceremony Part-1",
  },
  {
    url: "https://www.youtube.com/embed/PBfDw5xYRsE",
    title: "Meet us at #EEMAgine2018 | Sabbas Joseph",
  },
  {
    url: "https://www.youtube.com/embed/jgK92dpUCrw",
    title: "Glimpse of EEMAXGlobalAwards2019",
  },
  {
    url: "https://www.youtube.com/embed/qD4ZFaLKwUY",
    title: "EEMA Anthem",
  },
  {
    url: "https://www.youtube.com/embed/KVusMZdeBkk",
    title: "Day 2 of #EEMAGINE2019",
  },
  {
    url: "https://www.youtube.com/embed/dbYVnJKM0TU",
    title: "Meet us at #EEMAgine2018 | Ankur Kalra",
  },
  {
    url: "https://www.youtube.com/embed/gaHydeWh6n0",
    title:
      "EEMAGINE 2019 - Day 1 of the Mahakumbh of Events, Experiential, Entertainment industry",
  },
  {
    url: "https://www.youtube.com/embed/E88K-VtGkBI",
    title: "EEMAX 2015",
  },
  {
    url: "https://www.youtube.com/embed/1yWBL9mseGM",
    title: "Highlights of EEMAGINE 2019 Day 1 (11th Edition)",
  },
  {
    url: "https://www.youtube.com/embed/gLUHFTEwGOg",
    title: "Director, Wizcraft and President, EEMA- Sabbas Joseph",
  },
  {
    url: "https://www.youtube.com/embed/errRRzKeqMw",
    title: "EEMAGINE 2019 Blade Runner",
  },
  {
    url: "https://www.youtube.com/embed/X9dFXRU1hJc",
    title:
      "Secretary-Tourism and Culture, Govt of Maharashtra- Valsa Nair Singh",
  },
  {
    url: "https://www.youtube.com/embed/vRFfqpUr-c4",
    title: "EEMAGINE 2019 Day 2 Plenary Session",
  },
  {
    url: "https://www.youtube.com/embed/RypTCPHSY2A",
    title: "I AM EEMA",
  },
  {
    url: "https://www.youtube.com/embed/jMBYQ8fmXMA",
    title: "EEMAGINE 2019 Day 2 Plenary Session 2",
  },
  {
    url: "https://www.youtube.com/embed/hCSl_O5MNCk",
    title: "EEMAX Trophy",
  },
  {
    url: "https://www.youtube.com/embed/9bissbJGUIQ",
    title: "EEMAGINE 2019 360 Live Streaming",
  },
  {
    url: "https://www.youtube.com/embed/gXziO5LnvZ8",
    title:
      "Minister of Tourism, Art and Culture, Shri. Kapil Mishra @ EEMAX Global.",
  },
  {
    url: "https://www.youtube.com/embed/0s4EELDKYAo",
    title: "Meet us at #EEMAgine2018 | Siddharth Ganeriwala",
  },
];

export default function FootprintVideo() {
  const [visibleCount, setVisibleCount] = useState(6);
  return (
    <>
      <div className="max-w-6xl mx-auto py-7 px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-16 w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600">
          EEMA Video Footprints
        </h2> */}

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 space-y-4">
          {videos.slice(0, visibleCount).map((video, idx) => (
            <div
              key={idx}
              className="w-full overflow-hidden rounded-lg shadow-md hover:scale-105 transition-all duration-300 "
            >
              <iframe
                className="w-full aspect-video rounded-lg"
                src={video.url}
                title={`YouTube Video ${idx + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-3">
                <p className="text-sm font-semibold text-gray-800">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {visibleCount < videos.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="px-6 py-2 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition cursor-pointer"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </>
  );
}
