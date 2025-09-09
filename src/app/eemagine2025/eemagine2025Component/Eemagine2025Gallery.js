"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// const allImages = [
//   "/images/others/career-interview.jpg",
//   "/images/others/career-join-team.jpg",
// ];

export default function Eemagine2025Gallery() {
  const initialVisible = 18;
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    fetch("/images/galleryFileList/eemagine2025.json")
      .then((res) => res.json())
      .then((data) => setAllImages(data));
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 15);
  };

  const visibleImages = allImages.slice(0, visibleCount);

  return (
    <section className=" py-16 px-6 sm:px-20">
      <h2 className="text-3xl font-bold mb-16 text-center w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600">
        Eemagine 2025 Footprints
      </h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {visibleImages.map((src, index) => (
          <div
            key={index}
            className="w-full overflow-hidden rounded-xl break-inside-avoid shadow-md hover:shadow-xl transition-shadow"
          >
            <Image
              src={src}
              alt={`EEMAGINE 2025 Image ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {visibleCount < allImages.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleSeeMore}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-xl transition-all"
          >
            See More
          </button>
        </div>
      )}

      {/* <h4 className=" text-gray-500 text-center font-medium text-xl uppercase animate-pulse ">
        Coming Soon
      </h4> */}
    </section>
  );
}
