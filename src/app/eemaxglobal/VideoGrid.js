"use client";

import VideoCard from "./VideoCard";

const VideoGrid = () => {
  const movies = [
    {
      name: "Saurabh Khurana",
      poster:
        "/images/eemax-global-assets/eemax-gallery/video-image/video-poster-small.png",
      hoverPoster:
        "/images/eemax-global-assets/eemax-gallery/video-image/video-poster.png",
      designation: "Director & CEO",
      company: "Laqshya Live Experiences",
      link: "https://www.youtube.com/embed/n0bKfRUKgHM",
    },
    {
      name: "Khantil Mehta",
      poster:
        "/images/eemax-global-assets/eemax-gallery/video-image/video-poster-two-small.png",
      hoverPoster:
        "/images/eemax-global-assets/eemax-gallery/video-image/video-poster-two.png",
      designation: "Founder & Creative Head",
      company: "Gobananas & Init Design Studios",
      link: "https://www.youtube.com/embed/fiuSROZ3DBY",
    },
    {
      name: "Kiran Shetty",
      poster:
        "/images/eemax-global-assets/eemax-gallery/video-image/video-poster-three-small.png",
      hoverPoster:
        "/images/eemax-global-assets/eemax-gallery/video-image/video-poster-three.png",
      designation: "Managing Partner & Director",
      company: "Collective Heads EMSPL",
      link: "https://www.youtube.com/embed/57eQSaV8MT8",
    },
    {
      name: "Bobby Elanjical",
      poster:
        "/images/eemax-global-assets/eemax-gallery/video-image/video-poster-four-small.png",
      hoverPoster:
        "/images/eemax-global-assets/eemax-gallery/video-image/video-poster-four.png",
      designation: "CEO",
      company: "Wedding Factory",
      link: "https://www.youtube.com/embed/RPLGP96HTX0",
    },
    // Add more...
  ];

  return (
    <main className="p-8 border-2 border-gray-200 rounded-2xl shadow-md ">
      <h2 className="text-2xl text-center font-bold mb-11 text-black ">
        Video Gallery
      </h2>
      <div className=" flex justify-center items-center gap-6 flex-wrap ">
        {movies.map((m, idx) => (
          <VideoCard key={idx} {...m} />
        ))}
      </div>
    </main>
  );
};

export default VideoGrid;
