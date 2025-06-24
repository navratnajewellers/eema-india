import Image from "next/image";
import { useState } from "react";

export default function VideoCard({
  name,
  poster,
  hoverPoster,
  designation,
  company,
  link,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      className={` block relative h-60 overflow-hidden rounded-xl transition-all duration-300 cursor-pointer ${hovered ? "w-96 z-10 " : "w-40 z-auto "} `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Primary Poster */}
      <Image
        src={poster}
        alt={name}
        fill
        className={`object-cover transition-opacity ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Hover Poster with blur */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={hoverPoster}
          alt={`${name} hover`}
          fill
          className="object-cover backdrop-blur-xs brightness-75"
        />
      </div>

      {/* Text overlay */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-2 bg-gradient-to-t from-black via-transparent transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-sm font-semibold text-white">{name}</h3>
        <p className="text-xs text-gray-200 line-clamp-3">{designation}</p>
        <p className="text-xs text-gray-200 line-clamp-3">{company}</p>
      </div>

      {/* Hover scale effect */}
      <div
        className={`absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 ${
          hovered ? "scale-105 border-white/30" : ""
        }`}
      />
    </a>
  );
}
