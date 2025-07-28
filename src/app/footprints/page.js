"use client";

import clsx from "clsx";
import { useState } from "react";
import FootprintImage from "./footprintsComponent/FootprintImage";
import FootprintVideo from "./footprintsComponent/FootprintVideo";

export default function FootprintsPage() {
  const [tab, setTab] = useState("image");

  return (
    <main className=" text-black py-20 bg-gradient-to-b from-white via-orange-100 to-orange-200 ">
      <h2 className=" text-3xl font-bold text-center mb-11 w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 ">
        EEMA Footprint over the Years
      </h2>

      <section className="max-w-4xl mx-auto py-7 px-4">
        {/* Tab Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setTab("image")}
            className={clsx(
              "px-6 py-2 rounded-full font-semibold transition",
              tab === "image"
                ? "bg-orange-600 text-white"
                : "bg-gray-200 text-gray-700"
            )}
          >
            Image
          </button>
          <button
            onClick={() => setTab("video")}
            className={clsx(
              "px-6 py-2 rounded-full font-semibold transition",
              tab === "video"
                ? "bg-orange-600 text-white"
                : "bg-gray-200 text-gray-700"
            )}
          >
            Videos
          </button>
        </div>
      </section>

      <section>
        {tab === "image" ? <FootprintImage /> : <FootprintVideo />}
      </section>
    </main>
  );
}
