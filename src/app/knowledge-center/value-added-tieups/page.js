"use client";

import { useEffect, useState } from "react";

export default function VATPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <section
        id="value-added-tieup"
        className=" bg-gray-50 text-black px-7 sm:px-24 relative py-11 "
      >
        <h2 className=" text-black font-bold text-3xl md:text-4xl tracking-tight text-center my-20 w-fit mx-auto px-4 border-l-4 border-r-4 border-orange-600 ">
          Value Added Tieup
        </h2>

        <div className=" space-y-24 ">
          <section>
            <div className=" px-6 sm:px-12 ">
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-9 border-l-4 border-orange-600 pl-4 ">
                EEMA Book Design
              </h2>
            </div>

            <div className="flex justify-center px-6 sm:px-12 ">
              {isClient && (
                <iframe
                  // src="/jury/eemax-2024-jury.pdf#toolbar=0"
                  src="/documents/knowledge-center/tie-up/eema book design New.pdf"
                  width="100%"
                  height="800"
                  className="w-full max-w-5xl border rounded-xl shadow-lg"
                />
              )}
            </div>
          </section>

          <section>
            <div className=" px-6 sm:px-12 ">
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-9 border-l-4 border-orange-600 pl-4">
                Member Benefits - new member kit
              </h2>
            </div>

            <div className="flex justify-center px-6 sm:px-12 ">
              {isClient && (
                <iframe
                  // src="/jury/eemax-2024-jury.pdf#toolbar=0"
                  src="/documents/knowledge-center/tie-up/Member Benefits - new member kit.pdf"
                  width="100%"
                  height="800"
                  className="w-full max-w-5xl border rounded-xl shadow-lg"
                />
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
