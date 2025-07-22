"use client";

import IndustryPapersPage from "@/app/components/about/IndustryPapersPage";

export default function WhitepaperPage() {
  return (
    <main className=" text-black ">
      <h2 className="text-3xl md:text-4xl font-bold mt-16 w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 ">
        Industry Whitepaper
      </h2>

      <IndustryPapersPage />
    </main>
  );
}
