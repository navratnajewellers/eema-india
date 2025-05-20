"use client";

const HomeHeroSection = () => {
  return (
    <div className=" relative bg-gray-400 ">
      <div className="sticky top-5 h-screen flex items-center justify-center bg-red-500 text-white text-5xl z-[1] mx-7 rounded-2xl">
        Section 1
      </div>
      <div className="sticky top-5 h-screen flex items-center justify-center bg-green-500 text-white text-5xl z-[2] mx-7 rounded-2xl">
        Section 2
      </div>
      <div className="sticky top-5 h-screen flex items-center justify-center bg-blue-500 text-white text-5xl z-[3] mx-7 rounded-2xl">
        Section 3
      </div>
      <div className="sticky top-5 h-screen flex items-center justify-center bg-yellow-500 text-black text-5xl z-[4] mx-7 rounded-2xl">
        Section 4
      </div>
      <div className="sticky top-5 h-screen flex items-center justify-center bg-purple-500 text-white text-5xl z-[5] mx-7 rounded-2xl">
        Section 5
      </div>
    </div>
  );
};

export default HomeHeroSection;
