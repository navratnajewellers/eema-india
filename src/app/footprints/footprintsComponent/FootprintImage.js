import Image from "next/image";
import { useEffect, useState } from "react";

const allImages = [
  "/images/galleryFileList/003A8670.jpg",
  "/images/galleryFileList/003A8690.jpg",
  "/images/galleryFileList/003A8735.jpg",
  "/images/galleryFileList/0043.jpg",
  "/images/galleryFileList/1044.jpg",
  "/images/galleryFileList/2011-goa.jpg",
  "/images/galleryFileList/2012-delhi.jpg",
  "/images/galleryFileList/2013-jaipur.jpg",
  "/images/galleryFileList/2013-jaipur1.jpg",
  "/images/galleryFileList/2013-jaipur2.jpg",
  "/images/galleryFileList/2D1A9462.jpg",
  "/images/galleryFileList/_MG_3725.jpg",
  "/images/galleryFileList/A37I0133.jpg",
  "/images/galleryFileList/C4300482.jpg",
  "/images/galleryFileList/C4300527.jpg",
  "/images/galleryFileList/DSC_1459.jpg",
  "/images/galleryFileList/DSC_1466.jpg",
  "/images/galleryFileList/DY1A9209.jpg",
  "/images/galleryFileList/eemagine-2014-kochi.jpg",
  "/images/galleryFileList/gitikka-hosting.jpg",
  "/images/galleryFileList/RGP_9251.jpg",
  "/images/galleryFileList/SANT0332.jpg",
  "/images/galleryFileList/SANT0657.jpg",
  "/images/galleryFileList/SANT0997.jpg",
  "/images/galleryFileList/SANT1129.jpg",
  "/images/galleryFileList/SANT4081.jpg",
  "/images/galleryFileList/session.jpg",
];

export default function FootprintImage() {
  const initialVisible = 15;
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  // const [allImages, setAllImages] = useState([]);

  // useEffect(() => {
  //   fetch("/images/galleryFileList/eemagine2025.json")
  //     .then((res) => res.json())
  //     .then((data) => setAllImages(data));
  // }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 20);
    document.getElementById("images").scrollIntoView({ behavior: "smooth" });
  };

  const handleSeeAll = () => {
    setVisibleCount(allImages.length);
    document.getElementById("images").scrollIntoView({ behavior: "smooth" });
  };

  const visibleImages = allImages.slice(0, visibleCount);

  return (
    <section className=" py-7 px-6 sm:px-20">
      {/* <h2 className="text-3xl font-bold mb-16 text-center w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600">
        EEMA Image Footprints
      </h2> */}
      <div
        id="images"
        className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
      >
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
        <div className="text-center mt-10 space-x-7 ">
          <button
            onClick={handleSeeMore}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-xl transition-all cursor-pointer"
          >
            See More
          </button>
          <button
            onClick={handleSeeAll}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-xl transition-all cursor-pointer"
          >
            View All
          </button>
        </div>
      )}
    </section>
  );
}
