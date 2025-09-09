"use client";

import clsx from "clsx";
import { useState } from "react";
import Eemagine2025Pricing from "./eemagine2025Component/Eemagine2025Pricing";
import EemaxGlobalRegistration from "./eemagine2025Component/EemaxGlobalRegistration";
import Eemagine2025Gallery from "./eemagine2025Component/Eemagine2025Gallery";

export default function EemagineRegistration() {
  const [tab, setTab] = useState("eemagine");

  return (
    <section className=" bg-[#fff7ed] ">
      <div className=" mx-auto py-12 px-4">
        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-11">
          <button
            onClick={() => setTab("eemagine")}
            className={clsx(
              "px-6 py-2 rounded-full font-semibold transition",
              tab === "eemagine"
                ? "bg-purple-700 text-white"
                : "bg-gray-200 text-gray-700"
            )}
          >
            EEMAGINE
          </button>
          <button
            onClick={() => setTab("eemax")}
            className={clsx(
              "px-6 py-2 rounded-full font-semibold transition",
              tab === "eemax"
                ? "bg-purple-700 text-white"
                : "bg-gray-200 text-gray-700"
            )}
          >
            EEMAX Global - Registration
          </button>
        </div>

        <div>
          {tab === "eemagine" ? (
            <Eemagine2025Gallery />
          ) : (
            <EemaxGlobalRegistration />
          )}
        </div>
      </div>
    </section>
  );
}
