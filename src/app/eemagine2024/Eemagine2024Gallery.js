"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// const allImages = [
//   "/images/eemagine2024/_P_96687-touch.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26216.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26217.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26218.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26220.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26221.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26222.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26223.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26224.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26225.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26226.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26227.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26228.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26229.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26230.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26231.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26232.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26233.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26234.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26235.jpg",
//   "/public/images/eemagine2024/freepik__retouch__26241.jpg",
// ];

export default function Eemagine2024Gallery() {
  const initialVisible = 15;
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    fetch("/images/galleryFileList/eemagine2024.json")
      .then((res) => res.json())
      .then((data) => setAllImages(data));
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const visibleImages = allImages.slice(0, visibleCount);

  return (
    <section className="bg-white py-16 px-6 sm:px-20">
      <h2 className="text-3xl font-bold mb-16 text-center w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600">
        Eemagine 2024 Moments
      </h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {visibleImages.map((src, index) => (
          <div
            key={index}
            className="w-full overflow-hidden rounded-xl break-inside-avoid shadow-md hover:shadow-xl transition-shadow"
          >
            <Image
              src={src}
              alt={`EEMAGINE 2024 Image ${index + 1}`}
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
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-xl transition-all cursor-pointer"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}
