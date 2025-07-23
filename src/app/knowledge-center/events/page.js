"use client";
import { useState } from "react";
import clsx from "clsx";
import { Divider, Image } from "rsuite";

const data = {
  Zonal: {
    North: ["North Event 1", "North Event 2"],
    South: ["South Event 1"],
    East: ["East Event A"],
    West: ["West Summit"],
  },
  National: ["National Conference", "Annual Meetup"],
};

const media = {
  "North Event 1": {
    images: [
      "/images/eemagine2024/freepik__retouch__26217.jpg",
      "/images/eemagine2024/freepik__retouch__26241.jpg",
    ],
    videos: ["https://www.youtube.com/embed/Gm5ekx35QnY"],
  },
  "North Event 2": {
    images: ["/images/eemagine2024/freepik__retouch__26241.jpg"],
    videos: ["https://www.youtube.com/embed/1LjjgN8P0Ro"],
  },
  "National Conference": {
    images: ["/images/eemagine2024/freepik__retouch__64056-touch.jpg"],
    videos: ["https://www.youtube.com/embed/1yWBL9mseGM"],
  },
};

export default function KnowledgeEventsPage() {
  const [selectedZone, setSelectedZone] = useState("Zonal");
  const [selectedRegion, setSelectedRegion] = useState("North");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [tab, setTab] = useState("images");

  const zones = Object.keys(data[selectedZone] ?? {});
  const events =
    selectedZone === "Zonal" ? data.Zonal[selectedRegion] || [] : data.National;

  const currentMedia = selectedEvent ? media[selectedEvent] : null;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 border-r-2 border-gray-200">
        <h2 className="text-xl font-bold mb-4">Select Category</h2>
        <div className="space-y-2">
          {["Zonal", "National"].map((zone) => (
            <button
              key={zone}
              onClick={() => {
                setSelectedZone(zone);
                setSelectedRegion(Object.keys(data[zone])[0] || "North");
                setSelectedEvent(null);
              }}
              className={clsx(
                "block w-full text-left px-3 py-2 rounded-md",
                zone === selectedZone
                  ? "bg-orange-600 text-white"
                  : "hover:bg-gray-200"
              )}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* If Zonal, show regions */}
        {selectedZone === "Zonal" && (
          <div className="mt-6">
            <h3 className="text-md font-semibold mb-2">Regions</h3>
            <div className="space-y-1">
              {zones.map((region) => (
                <button
                  key={region}
                  onClick={() => {
                    setSelectedRegion(region);
                    setSelectedEvent(null);
                  }}
                  className={clsx(
                    "block w-full text-left px-3 py-1 rounded-md text-sm",
                    region === selectedRegion
                      ? "bg-orange-400 text-white"
                      : "hover:bg-gray-200"
                  )}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Events list */}
        <div className="mt-6">
          <h3 className="text-md font-semibold mb-2">Events</h3>
          <div className="space-y-1">
            {events.map((eventName) => (
              <button
                key={eventName}
                onClick={() => {
                  setSelectedEvent(eventName);
                  setTab("images");
                }}
                className={clsx(
                  "block w-full text-left px-3 py-1 rounded-md text-sm",
                  selectedEvent === eventName
                    ? "bg-orange-300 text-purple-900"
                    : "hover:bg-gray-200"
                )}
              >
                {eventName}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-3xl font-bold mt-4 mb-7 text-center w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600">
          Events
        </h2>
        <Divider />
        {selectedEvent ? (
          <>
            <h2 className="text-2xl font-bold mb-7 pl-4 border-l-4 border-orange-600 ">
              {selectedEvent}
            </h2>

            {/* Tabs */}
            <div className="flex space-x-4 mb-7">
              <button
                onClick={() => setTab("images")}
                className={clsx(
                  "px-4 py-2 rounded-full",
                  tab === "images"
                    ? "bg-orange-600 text-white"
                    : "bg-gray-200 text-gray-800"
                )}
              >
                Images
              </button>
              <button
                onClick={() => setTab("videos")}
                className={clsx(
                  "px-4 py-2 rounded-full",
                  tab === "videos"
                    ? "bg-orange-600 text-white"
                    : "bg-gray-200 text-gray-800"
                )}
              >
                Videos
              </button>
            </div>

            {/* Media Content */}
            {tab === "images" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {currentMedia?.images?.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt="Event"
                    className="w-full h-52 object-cover rounded-lg shadow"
                  />
                ))}
              </div>
            )}

            {tab === "videos" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {currentMedia?.videos?.map((url, index) => (
                  <iframe
                    key={index}
                    src={url}
                    className="w-full aspect-video rounded shadow"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                ))}
              </div>
            )}
          </>
        ) : (
          <p className="text-red-500 animate-pulse ">
            Please select an event to view content.
          </p>
        )}
      </main>
    </div>
  );
}
