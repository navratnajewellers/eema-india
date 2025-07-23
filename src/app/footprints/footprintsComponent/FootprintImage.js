import Image from "next/image";
import { useState } from "react";

const allImages = [
  "/images/eemagine2024/freepik__retouch__26217.jpg",
  "/images/eemagine2024/freepik__retouch__26225.jpg",
  "/images/eemagine2024/freepik__retouch__26230.jpg",
  "/images/eemagine2024/freepik__retouch__26240.jpg",
  "/images/eemagine2024/freepik__retouch__26241.jpg",
  "/images/eemagine2024/freepik__retouch__26249.jpg",
  "/images/eemagine2024/freepik__retouch__26252.jpg",
  "/images/eemagine2024/freepik__retouch__49578.jpg",
  "/images/eemagine2024/freepik__retouch__64050-touch.jpg",
  "/images/eemagine2024/freepik__retouch__64056-touch.jpg",
  "/images/eemagine2024/freepik__retouch__77441-touch.jpg",
  "/images/eemagine2024/freepik__retouch__77444-touch.jpg",
];

export default function FootprintImage() {
  const initialVisible = 9;
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleImages = allImages.slice(0, visibleCount);

  return (
    <section className=" py-7 px-6 sm:px-20">
      {/* <h2 className="text-3xl font-bold mb-16 text-center w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600">
        EEMA Image Footprints
      </h2> */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {visibleImages.map((src, index) => (
          <a
            href="https://www.facebook.com/eemaindia/photos"
            key={index}
            className=" block w-full overflow-hidden rounded-xl break-inside-avoid shadow-md hover:shadow-xl transition-shadow"
          >
            <Image
              src={src}
              alt={`EEMAGINE 2024 Image ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </a>
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
    </section>
  );
}
