/* eslint-disable @next/next/no-img-element */
"use client";

import SaAwards from "./saComponent/SaAwards";
import SaCategories from "./saComponent/SaCategories";
import SaCTA from "./saComponent/SaCTA";
import SaJudging from "./saComponent/SaJudging";
import SaHomeWinner from "./saComponent/SaHomeWinner";

export default function SpotlightPage() {
  return (
    <>
      <main className="bg-white text-gray-800 px-6 md:px-12 lg:px-24 py-12">
        <section>
          <img
            src="/images/spotlightawards/spotlight-logo-web-banner.jpg"
            alt="spotlight-awards-banner-image"
          />
        </section>

        <SaAwards />

        <SaCategories />

        <SaJudging />

        <SaHomeWinner />

        <SaCTA />
      </main>
    </>
  );
}
