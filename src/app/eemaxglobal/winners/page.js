"use client";

import { useState } from "react";
import { Divider, Nav } from "rsuite";
import { motion } from "framer-motion";
import EemaxWinner2024 from "./EemaxWinner2024";
import EemaxWinner2025 from "./EemaxWinner2025";

export default function EemaxWinnerPage() {
  const [active, setActive] = useState("home");

  const navlist = ["2025", "2023-2024"];

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-12 ">
        <section className=" col-span-2 hidden md:block relative bg-black text-white py-28 ">
          <div className=" sticky top-52 z-10 ">
            <h2 className=" font-semibold text-xl text-center tracking-tight text-orange-600 mb-7 ">
              Winner List
            </h2>
            <Nav
              appearance="subtle"
              vertical
              activeKey={active}
              onSelect={setActive}
              className=" w-28 mx-auto "
            >
              {navlist.map((data, index) => (
                <Nav.Item
                  key={index}
                  eventKey={`${data}`}
                  as="a"
                  href={`#${data}`}
                >
                  <span
                    className={` ${active == data ? "text-white font-semibold " : "text-gray-300"} hover:text-white `}
                  >
                    {data}
                  </span>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </section>

        <section className=" col-span-10 border-l-2 border-gray-200 ">
          {/* {["2025", "2023-2024"].map((data, index) => (
            <motion.section
              onViewportEnter={() => setActive(data)}
              key={index}
              id={data}
              className={` w-full h-screen ${index % 2 == 0 ? "bg-cyan-400" : "bg-amber-400"} `}
            ></motion.section>
          ))} */}

          <motion.div id="2025" onViewportEnter={() => setActive("2025")}>
            <EemaxWinner2025 />
          </motion.div>

          <Divider />

          <motion.div
            id="2023-2024"
            onViewportEnter={() => setActive("2023-2024")}
          >
            <EemaxWinner2024 />
          </motion.div>
        </section>
      </div>
    </>
  );
}
